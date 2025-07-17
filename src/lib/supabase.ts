import { createClient } from '@supabase/supabase-js'

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_SUPABASE_URL')
}

if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_SUPABASE_ANON_KEY')
}

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

// Database Types
export interface Client {
  id: string
  name: string
  email: string
  service: string
  message: string
  created_at: string
}

export interface Partner {
  id: string
  company_name: string
  email: string
  partnership_type: string
  message: string
  created_at: string
}

export interface Contact {
  id: string
  name: string
  email: string
  message: string
  created_at: string
}

export interface Ad {
  id: string
  title: string
  description: string
  image_url: string
  video_url?: string
  category: string
  created_at: string
}

export interface Testimonial {
  id: string
  name: string
  text: string
  image_url: string
  rating: number
  created_at: string
}

// Database Operations
export const dbOperations = {
  // Clients
  async createClient(client: Omit<Client, 'id' | 'created_at'>) {
    const { data, error } = await supabase
      .from('clients')
      .insert([client])
      .select()
    
    if (error) throw error
    return data
  },

  async getClients() {
    const { data, error } = await supabase
      .from('clients')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data
  },

  // Partners
  async createPartner(partner: Omit<Partner, 'id' | 'created_at'>) {
    const { data, error } = await supabase
      .from('partners')
      .insert([partner])
      .select()
    
    if (error) throw error
    return data
  },

  async getPartners() {
    const { data, error } = await supabase
      .from('partners')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data
  },

  // Contacts
  async createContact(contact: Omit<Contact, 'id' | 'created_at'>) {
    const { data, error } = await supabase
      .from('contacts')
      .insert([contact])
      .select()
    
    if (error) throw error
    return data
  },

  async getContacts() {
    const { data, error } = await supabase
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data
  },

  // Ads
  async getAds(category?: string) {
    let query = supabase
      .from('ads')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (category) {
      query = query.eq('category', category)
    }
    
    const { data, error } = await query
    if (error) throw error
    return data
  },

  // Testimonials
  async getTestimonials() {
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data
  }
}
