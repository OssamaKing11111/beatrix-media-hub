import { supabase } from './supabase';

export type UserRole = 'admin' | 'editor';

export interface AdminUser {
  id: string;
  email: string;
  role: UserRole;
  created_at: string;
  updated_at: string;
}

export interface AuthUser {
  id: string;
  email: string;
  role: UserRole;
}

export class AuthService {
  // Login with email and password, only allow admin/editor
  static async login(email: string, password: string): Promise<{ user: AuthUser | null; error: string | null }> {
    // Authenticate with Supabase
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error || !data.user) {
      return { user: null, error: error?.message || 'Authentication failed' };
    }
    // Check admin_users table
    const { data: adminUser, error: adminError } = await supabase
      .from('admin_users')
      .select('*')
      .eq('email', email)
      .single();
    if (adminError || !adminUser) {
      await supabase.auth.signOut();
      return { user: null, error: 'Access denied. Admin/editor only.' };
    }
    return {
      user: {
        id: adminUser.id,
        email: adminUser.email,
        role: adminUser.role,
      },
      error: null,
    };
  }

  // Logout
  static async logout(): Promise<{ error: string | null }> {
    const { error } = await supabase.auth.signOut();
    return { error: error?.message || null };
  }

  // Get current user (if admin/editor)
  static async getCurrentUser(): Promise<{ user: AuthUser | null; error: string | null }> {
    const { data, error } = await supabase.auth.getUser();
    const authUser = data?.user;
    if (error || !authUser) {
      return { user: null, error: error?.message || 'No authenticated user' };
    }
    const { data: adminUser, error: adminError } = await supabase
      .from('admin_users')
      .select('*')
      .eq('email', authUser.email)
      .single();
    if (adminError || !adminUser) {
      return { user: null, error: 'User not found in admin database' };
    }
    return {
      user: {
        id: adminUser.id,
        email: adminUser.email,
        role: adminUser.role,
      },
      error: null,
    };
  }

  // Check if user is authenticated
  static async isAuthenticated(): Promise<boolean> {
    const { user } = await this.getCurrentUser();
    return !!user;
  }

  // Check if user is admin
  static async isAdmin(): Promise<boolean> {
    const { user } = await this.getCurrentUser();
    return user?.role === 'admin';
  }

  // Get all admin users (admin only)
  static async getAdminUsers(): Promise<{ users: AdminUser[] | null; error: string | null }> {
    const { data: users, error } = await supabase
      .from('admin_users')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) {
      return { users: null, error: error.message };
    }
    return { users, error: null };
  }
} 