import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_SUPABASE_URL')
}

if (!supabaseAnonKey) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_SUPABASE_ANON_KEY')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          role: 'admin' | 'editor'
          created_at: string
        }
      }
      media_files: {
        Row: {
          id: string
          title: string
          url: string
          type: 'image' | 'video'
          uploaded_by: string
          created_at: string
        }
      }
      homepage_content: {
        Row: {
          id: string
          banner_image_url: string
          heading: string
          subheading: string
          button_text: string
          button_url: string
          language: 'en' | 'ar'
        }
      }
      requests: {
        Row: {
          id: string
          name: string
          email: string
          service: string
          message: string
          created_at: string
        }
      }
    }
  }
}
