import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Item = {
  id: string
  title: string
  description: string
  price: number
  image_url: string
  created_at: string
  user_id: string
}

export type ContactMessage = {
  id: string
  item_id: string
  buyer_email?: string
  buyer_phone?: string
  message?: string
  created_at: string
}
