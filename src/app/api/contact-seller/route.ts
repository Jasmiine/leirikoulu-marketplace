import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const { item_id, buyer_email, buyer_phone, message } = await request.json()

    if (!item_id) {
      return NextResponse.json({ error: 'Item ID is required' }, { status: 400 })
    }

    if (!buyer_email && !buyer_phone) {
      return NextResponse.json({ error: 'Email or phone number is required' }, { status: 400 })
    }

    // Get item details and seller information
    const { data: item, error: itemError } = await supabase
      .from('items')
      .select(`
        *,
        profiles:user_id (
          email
        )
      `)
      .eq('id', item_id)
      .single()

    if (itemError || !item) {
      return NextResponse.json({ error: 'Item not found' }, { status: 404 })
    }

    // Store the contact message
    const { error: messageError } = await supabase
      .from('contact_messages')
      .insert({
        item_id,
        buyer_email: buyer_email || null,
        buyer_phone: buyer_phone || null,
        message: message || null,
      })

    if (messageError) {
      console.error('Error storing contact message:', messageError)
      return NextResponse.json({ error: 'Failed to store message' }, { status: 500 })
    }

    // Send email notification to seller
    try {
      const emailText = `New Item Inquiry

Item: ${item.title}
Price: €${item.price.toFixed(2)}
Description: ${item.description}

Buyer Contact Information:
${buyer_email ? `Email: ${buyer_email}` : ''}
${buyer_phone ? `Phone: ${buyer_phone}` : ''}

${message ? `Message: ${message}` : ''}

Please contact the buyer directly using the information provided above.`

      await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: item.profiles?.email,
          subject: 'New message from Leirikoulu Marketplace',
          text: emailText,
        }),
      })
    } catch (emailError) {
      console.error('Error sending email:', emailError)
      // Don't fail the request if email fails
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error in contact-seller API:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
