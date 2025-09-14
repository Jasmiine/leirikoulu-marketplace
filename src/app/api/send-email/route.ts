import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { to, subject, text } = await request.json()

    if (!to || !subject || !text) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'nkkleirikoulu@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD, // App password for Gmail
      },
    })

    // Email options
    const mailOptions = {
      from: 'nkkleirikoulu@gmail.com',
      to: to,
      subject: subject,
      text: text,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: 'Email sent successfully' })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
