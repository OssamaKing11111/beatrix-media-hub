import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://khaeaufrdnzovsbhaqgk.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtoYWVhdWZyZG56b3ZzYmhhcWdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI2NzgzMzAsImV4cCI6MjA2ODI1NDMzMH0.B5Lv83e7KF7-5IV6tgsT6DB_eDQ4hTWG19qPMgIP4TU'
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
  },

  // Pages
  async createPage(page: Omit<{ id?: string; slug: string; title: string; order_num?: number }, 'id'>) {
    const { data, error } = await supabase
      .from('pages')
      .insert([page])
      .select()
    if (error) throw error
    return data
  },

  async getPages() {
    const { data, error } = await supabase
      .from('pages')
      .select('*')
      .order('order_num', { ascending: true })
    if (error) throw error
    return data
  },

  async updatePage(id: string, updates: Partial<{ slug: string; title: string; order_num: number }>) {
    const { data, error } = await supabase
      .from('pages')
      .update(updates)
      .eq('id', id)
      .select()
    if (error) throw error
    return data
  },

  async deletePage(id: string) {
    const { error } = await supabase
      .from('pages')
      .delete()
      .eq('id', id)
    if (error) throw error
    return true
  },

  // Page Content
  async createPageContent(content: Omit<{ id?: string; page_id: string; type: string; content?: string; media_url?: string; label?: string; order_num?: number; extra?: any }, 'id'>) {
    const { data, error } = await supabase
      .from('page_content')
      .insert([content])
      .select()
    if (error) throw error
    return data
  },

  async getPageContent(page_id: string) {
    const { data, error } = await supabase
      .from('page_content')
      .select('*')
      .eq('page_id', page_id)
      .order('order_num', { ascending: true })
    if (error) throw error
    return data
  },

  async updatePageContent(id: string, updates: Partial<{ type: string; content?: string; media_url?: string; label?: string; order_num?: number; extra?: any }>) {
    const { data, error } = await supabase
      .from('page_content')
      .update(updates)
      .eq('id', id)
      .select()
    if (error) throw error
    return data
  },

  async deletePageContent(id: string) {
    const { error } = await supabase
      .from('page_content')
      .delete()
      .eq('id', id)
    if (error) throw error
    return true
  },

  // Media Files
  async createMediaFile(file: Omit<{ id?: string; url: string; type: string; alt?: string; page_id?: string }, 'id'>) {
    const { data, error } = await supabase
      .from('media_files')
      .insert([file])
      .select()
    if (error) throw error
    return data
  },

  async getMediaFiles(page_id?: string) {
    let query = supabase
      .from('media_files')
      .select('*')
      .order('created_at', { ascending: false })
    if (page_id) query = query.eq('page_id', page_id)
    const { data, error } = await query
    if (error) throw error
    return data
  },

  async deleteMediaFile(id: string) {
    const { error } = await supabase
      .from('media_files')
      .delete()
      .eq('id', id)
    if (error) throw error
    return true
  },
}
