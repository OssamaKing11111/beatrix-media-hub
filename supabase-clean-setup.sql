-- ===========================================
-- BEATRIX MEDIA HUB - CLEAN SUPABASE SETUP
-- ===========================================

-- ===========================================
-- 1. CREATE CORE TABLES
-- ===========================================

-- Create pages table
CREATE TABLE IF NOT EXISTS pages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug VARCHAR(100) NOT NULL UNIQUE,
  title_ar TEXT NOT NULL,
  title_en TEXT NOT NULL,
  meta_description_ar TEXT,
  meta_description_en TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create page_content table
CREATE TABLE IF NOT EXISTS page_content (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  page_id UUID REFERENCES pages(id) ON DELETE CASCADE,
  section VARCHAR(100) NOT NULL,
  content_type VARCHAR(50) NOT NULL,
  key VARCHAR(100) NOT NULL,
  value_ar TEXT,
  value_en TEXT,
  file_url TEXT,
  order_index INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create cards table
CREATE TABLE IF NOT EXISTS cards (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  page_id UUID REFERENCES pages(id) ON DELETE CASCADE,
  card_type VARCHAR(50) NOT NULL,
  title_ar TEXT NOT NULL,
  title_en TEXT NOT NULL,
  description_ar TEXT,
  description_en TEXT,
  image_url TEXT,
  video_url TEXT,
  link_url TEXT,
  order_index INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create media table
CREATE TABLE IF NOT EXISTS media (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  file_name VARCHAR(255) NOT NULL,
  file_url TEXT NOT NULL,
  file_type VARCHAR(50) NOT NULL,
  file_size BIGINT,
  mime_type VARCHAR(100),
  uploaded_by UUID REFERENCES auth.users(id),
  uploaded_at TIMESTAMP DEFAULT NOW()
);

-- Create settings table
CREATE TABLE IF NOT EXISTS settings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  key VARCHAR(100) NOT NULL UNIQUE,
  value_ar TEXT,
  value_en TEXT,
  value_json JSONB,
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Drop and recreate users table to fix constraint issues
DROP TABLE IF EXISTS users CASCADE;

-- Create users table for role management
CREATE TABLE IF NOT EXISTS users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('admin', 'editor', 'viewer')),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create requests table
CREATE TABLE IF NOT EXISTS requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  service TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'completed', 'cancelled')),
  priority TEXT DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high')),
  assigned_to UUID REFERENCES users(id),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create services table
CREATE TABLE IF NOT EXISTS services (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  icon TEXT,
  category TEXT DEFAULT 'general',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create testimonials table
DROP TABLE IF EXISTS testimonials CASCADE;
CREATE TABLE IF NOT EXISTS testimonials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  client_name TEXT NOT NULL,
  client_position TEXT,
  client_company TEXT,
  content TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  client_image TEXT,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create portfolio table
CREATE TABLE IF NOT EXISTS portfolio (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL,
  client_name TEXT,
  project_url TEXT,
  featured_image TEXT,
  gallery_images TEXT[],
  technologies TEXT[],
  completion_date DATE,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create analytics table
CREATE TABLE IF NOT EXISTS analytics (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  page_id UUID REFERENCES pages(id),
  event_type VARCHAR(50) NOT NULL,
  user_agent TEXT,
  ip_address INET,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create backups table
CREATE TABLE IF NOT EXISTS backups (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  backup_type VARCHAR(50) NOT NULL,
  file_url TEXT,
  file_size BIGINT,
  created_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP DEFAULT NOW()
);

-- ===========================================
-- 2. CREATE INDEXES FOR PERFORMANCE
-- ===========================================

-- Page content indexes
CREATE INDEX IF NOT EXISTS idx_page_content_page_id ON page_content(page_id);
CREATE INDEX IF NOT EXISTS idx_page_content_section ON page_content(section);
CREATE INDEX IF NOT EXISTS idx_page_content_type ON page_content(content_type);

-- Cards indexes
CREATE INDEX IF NOT EXISTS idx_cards_page_id ON cards(page_id);
CREATE INDEX IF NOT EXISTS idx_cards_type ON cards(card_type);
CREATE INDEX IF NOT EXISTS idx_cards_order ON cards(order_index);

-- Media indexes
CREATE INDEX IF NOT EXISTS idx_media_type ON media(file_type);
CREATE INDEX IF NOT EXISTS idx_media_uploaded_at ON media(uploaded_at);

-- Analytics indexes
CREATE INDEX IF NOT EXISTS idx_analytics_page_id ON analytics(page_id);
CREATE INDEX IF NOT EXISTS idx_analytics_created_at ON analytics(created_at);
CREATE INDEX IF NOT EXISTS idx_analytics_event_type ON analytics(event_type);

-- ===========================================
-- 3. CREATE TRIGGERS FOR UPDATED_AT
-- ===========================================

-- Function to update updated_at column
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Drop existing triggers if they exist
DROP TRIGGER IF EXISTS update_pages_updated_at ON pages;
DROP TRIGGER IF EXISTS update_page_content_updated_at ON page_content;
DROP TRIGGER IF EXISTS update_cards_updated_at ON cards;
DROP TRIGGER IF EXISTS update_settings_updated_at ON settings;
DROP TRIGGER IF EXISTS update_requests_updated_at ON requests;

-- Create triggers for all tables with updated_at
CREATE TRIGGER update_pages_updated_at 
    BEFORE UPDATE ON pages 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_page_content_updated_at 
    BEFORE UPDATE ON page_content 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_cards_updated_at 
    BEFORE UPDATE ON cards 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_settings_updated_at 
    BEFORE UPDATE ON settings 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_requests_updated_at 
    BEFORE UPDATE ON requests 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ===========================================
-- 4. ENABLE ROW LEVEL SECURITY (RLS)
-- ===========================================

-- Enable RLS on all tables
ALTER TABLE pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE cards ENABLE ROW LEVEL SECURITY;
ALTER TABLE media ENABLE ROW LEVEL SECURITY;
ALTER TABLE settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolio ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics ENABLE ROW LEVEL SECURITY;
ALTER TABLE backups ENABLE ROW LEVEL SECURITY;

-- ===========================================
-- 5. CREATE SECURITY POLICIES
-- ===========================================

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Public read access to pages" ON pages;
DROP POLICY IF EXISTS "Authenticated users can manage pages" ON pages;
DROP POLICY IF EXISTS "Public read access to page content" ON page_content;
DROP POLICY IF EXISTS "Authenticated users can manage page content" ON page_content;
DROP POLICY IF EXISTS "Public read access to cards" ON cards;
DROP POLICY IF EXISTS "Authenticated users can manage cards" ON cards;
DROP POLICY IF EXISTS "Public read access to media" ON media;
DROP POLICY IF EXISTS "Authenticated users can manage media" ON media;
DROP POLICY IF EXISTS "Public read access to settings" ON settings;
DROP POLICY IF EXISTS "Authenticated users can manage settings" ON settings;
DROP POLICY IF EXISTS "Authenticated users can manage analytics" ON analytics;
DROP POLICY IF EXISTS "Authenticated users can manage backups" ON backups;

-- Pages policies
CREATE POLICY "Public read access to pages" ON pages FOR SELECT USING (is_active = true);
CREATE POLICY "Authenticated users can manage pages" ON pages FOR ALL USING (auth.role() = 'authenticated');

-- Page content policies
CREATE POLICY "Public read access to page content" ON page_content FOR SELECT USING (is_active = true);
CREATE POLICY "Authenticated users can manage page content" ON page_content FOR ALL USING (auth.role() = 'authenticated');

-- Cards policies
CREATE POLICY "Public read access to cards" ON cards FOR SELECT USING (is_active = true);
CREATE POLICY "Authenticated users can manage cards" ON cards FOR ALL USING (auth.role() = 'authenticated');

-- Media policies
CREATE POLICY "Public read access to media" ON media FOR SELECT USING (true);
CREATE POLICY "Authenticated users can manage media" ON media FOR ALL USING (auth.role() = 'authenticated');

-- Settings policies
CREATE POLICY "Public read access to settings" ON settings FOR SELECT USING (true);
CREATE POLICY "Authenticated users can manage settings" ON settings FOR ALL USING (auth.role() = 'authenticated');

-- Users policies
CREATE POLICY "Authenticated users can view users" ON users FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Admins can manage users" ON users FOR ALL USING (
  EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin')
);

-- Requests policies
CREATE POLICY "Allow anon to insert requests" ON requests FOR INSERT WITH CHECK (true);
CREATE POLICY "Authenticated users can view requests" ON requests FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Editors and admins can manage requests" ON requests FOR ALL USING (
  EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role IN ('admin', 'editor'))
);

-- Services policies
CREATE POLICY "Public read access to services" ON services FOR SELECT USING (is_active = true);
CREATE POLICY "Admins can manage services" ON services FOR ALL USING (
  EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin')
);

-- Testimonials policies
CREATE POLICY "Public read access to testimonials" ON testimonials FOR SELECT USING (true);
CREATE POLICY "Authenticated users can manage testimonials" ON testimonials FOR ALL USING (auth.role() = 'authenticated');

-- Portfolio policies
CREATE POLICY "Public read access to portfolio" ON portfolio FOR SELECT USING (true);
CREATE POLICY "Authenticated users can manage portfolio" ON portfolio FOR ALL USING (auth.role() = 'authenticated');

-- Analytics policies
CREATE POLICY "Authenticated users can manage analytics" ON analytics FOR ALL USING (auth.role() = 'authenticated');

-- Backups policies
CREATE POLICY "Authenticated users can manage backups" ON backups FOR ALL USING (auth.role() = 'authenticated');

-- ===========================================
-- 6. INSERT INITIAL DATA
-- ===========================================

-- Insert default pages
INSERT INTO pages (slug, title_ar, title_en, meta_description_ar, meta_description_en) VALUES
('home', 'الصفحة الرئيسية', 'Homepage', 'منصتك الشاملة للتميز والانتشار', 'Your Complete Platform for Excellence and Reach'),
('about', 'من نحن', 'About Us', 'تعرف على فريق بياتريكس ون', 'Meet the Beatrix One team'),
('contact', 'اتصل بنا', 'Contact Us', 'تواصل معنا للحصول على خدماتنا', 'Contact us for our services'),
('services', 'خدماتنا', 'Our Services', 'خدماتنا المتكاملة', 'Our integrated services'),
('portfolio', 'أعمالنا', 'Portfolio', 'معرض أعمالنا', 'Our work gallery'),
('clients', 'عملاؤنا', 'Our Clients', 'عملاؤنا المميزون', 'Our distinguished clients'),
('partners', 'شركاؤنا', 'Our Partners', 'شركاؤنا في النجاح', 'Our success partners'),
('community', 'المجتمع', 'Community', 'مجتمعنا المتنوع', 'Our diverse community'),
('production', 'الإنتاج', 'Production', 'خدمات الإنتاج المتكاملة', 'Integrated production services')
ON CONFLICT (slug) DO NOTHING;

-- Insert default settings
INSERT INTO settings (key, value_ar, value_en) VALUES
('site_title', 'بياتريكس ميديا هب', 'Beatrix Media Hub'),
('site_description', 'منصة إعلامية شاملة', 'Comprehensive Media Platform'),
('contact_email', 'info@beatrixmedia.com', 'info@beatrixmedia.com'),
('contact_phone', '+966-50-123-4567', '+966-50-123-4567'),
('social_facebook', 'https://facebook.com/beatrixmedia', 'https://facebook.com/beatrixmedia'),
('social_twitter', 'https://twitter.com/beatrixmedia', 'https://twitter.com/beatrixmedia'),
('social_instagram', 'https://instagram.com/beatrixmedia', 'https://instagram.com/beatrixmedia'),
('social_linkedin', 'https://linkedin.com/company/beatrixmedia', 'https://linkedin.com/company/beatrixmedia')
ON CONFLICT (key) DO NOTHING;

-- Insert default admin users
INSERT INTO users (email, role) VALUES
('admin@beatrixmedia.com', 'admin'),
('editor@beatrixmedia.com', 'editor'),
('viewer@beatrixmedia.com', 'viewer')
ON CONFLICT (email) DO NOTHING;

-- Insert sample homepage content
INSERT INTO page_content (page_id, section, content_type, key, value_ar, value_en, order_index) VALUES
((SELECT id FROM pages WHERE slug = 'home'), 'hero', 'text', 'title', 'بياتريكس ميديا هب', 'Beatrix Media Hub', 1),
((SELECT id FROM pages WHERE slug = 'home'), 'hero', 'text', 'subtitle', 'منصتك الشاملة للتميز والانتشار', 'Your Complete Platform for Excellence and Reach', 2),
((SELECT id FROM pages WHERE slug = 'home'), 'hero', 'text', 'description', 'نقدم خدمات إعلامية متكاملة تشمل الإنتاج والتسويق والتوزيع', 'We provide integrated media services including production, marketing, and distribution', 3),
((SELECT id FROM pages WHERE slug = 'home'), 'stats', 'number', 'clients', '150+', '150+', 1),
((SELECT id FROM pages WHERE slug = 'home'), 'stats', 'number', 'projects', '500+', '500+', 2),
((SELECT id FROM pages WHERE slug = 'home'), 'stats', 'number', 'years', '10+', '10+', 3),
((SELECT id FROM pages WHERE slug = 'home'), 'stats', 'number', 'countries', '25+', '25+', 4);

-- Insert sample cards for homepage
INSERT INTO cards (page_id, card_type, title_ar, title_en, description_ar, description_en, order_index) VALUES
((SELECT id FROM pages WHERE slug = 'home'), 'service', 'الإنتاج السينمائي', 'Cinematic Production', 'إنتاج أفلام وثائقية وروائية عالية الجودة', 'High-quality documentary and feature film production', 1),
((SELECT id FROM pages WHERE slug = 'home'), 'service', 'التسويق الرقمي', 'Digital Marketing', 'استراتيجيات تسويقية مبتكرة للوصول للجمهور المستهدف', 'Innovative marketing strategies to reach target audiences', 2),
((SELECT id FROM pages WHERE slug = 'home'), 'service', 'التوزيع الإعلامي', 'Media Distribution', 'توزيع المحتوى عبر منصات متعددة', 'Content distribution across multiple platforms', 3);

-- Insert sample services
INSERT INTO services (name, description, category) VALUES
('Video Production', 'Professional video production services', 'production'),
('Digital Marketing', 'Comprehensive digital marketing solutions', 'marketing'),
('Content Creation', 'Creative content development', 'content'),
('Media Distribution', 'Multi-platform media distribution', 'distribution');

-- Insert sample testimonials
INSERT INTO testimonials (client_name, client_position, client_company, content, rating) VALUES
('Ahmed Hassan', 'CEO', 'Tech Solutions', 'Excellent service and professional team', 5),
('Sarah Johnson', 'Marketing Director', 'Global Corp', 'Outstanding results and great communication', 5),
('Mohammed Ali', 'Founder', 'Startup Inc', 'Highly recommended for media services', 5);

-- ===========================================
-- 7. CREATE STORAGE BUCKETS (RUN MANUALLY IN DASHBOARD)
-- ===========================================

-- Note: Create these buckets manually in Supabase Dashboard > Storage
-- - media-files (for images, videos, documents)
-- - backups (for system backups)
-- - temp-uploads (for temporary file uploads)

-- ===========================================
-- SETUP COMPLETE
-- ===========================================

-- Next steps:
-- 1. Create storage buckets in Supabase Dashboard
-- 2. Set up authentication providers
-- 3. Configure email templates
-- 4. Test the API endpoints
-- 5. Deploy the frontend application 