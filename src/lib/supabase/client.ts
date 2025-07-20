import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://khaeaufrdnzovsbhaqgk.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtoYWVhdWZyZG56b3ZzYmhhcWdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI2NzgzMzAsImV4cCI6MjA2ODI1NDMzMH0.B5Lv83e7KF7-5IV6tgsT6DB_eDQ4hTWG19qPMgIP4TU'
)

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
