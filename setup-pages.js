const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'https://khaeaufrdnzovsbhaqgk.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtoYWVhdWZyZG56b3ZzYmhhcWdrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MjY3ODMzMCwiZXhwIjoyMDY4MjU0MzMwfQ.pyuGmzLbdE1KgiOU0pFy5xEF9YO_01pghUfI8lD4wwc'
);

const pages = [
  // Main Pages
  { slug: 'home', title: 'Homepage', order_num: 1 },
  { slug: 'about', title: 'About Us', order_num: 2 },
  { slug: 'contact', title: 'Contact', order_num: 3 },
  
  // Services
  { slug: 'production', title: 'Production Services', order_num: 4 },
  { slug: 'media', title: 'Media Services', order_num: 5 },
  { slug: 'ads-library', title: 'Ads Library', order_num: 6 },
  
  // Client Categories
  { slug: 'clothing-companies', title: 'Clothing Companies', order_num: 7 },
  { slug: 'food-companies', title: 'Food Companies', order_num: 8 },
  { slug: 'education-companies', title: 'Education Companies', order_num: 9 },
  { slug: 'doctors', title: 'Doctors & Medical', order_num: 10 },
  { slug: 'startup-companies', title: 'Startup Companies', order_num: 11 },
  { slug: 'programming-companies', title: 'Programming Companies', order_num: 12 },
  { slug: 'digital-marketing-companies', title: 'Digital Marketing Companies', order_num: 13 },
  { slug: 'tourism-companies', title: 'Tourism Companies', order_num: 14 },
  { slug: 'transport-companies', title: 'Transport Companies', order_num: 15 },
  
  // Community
  { slug: 'community', title: 'Community', order_num: 16 },
  { slug: 'business', title: 'Business Community', order_num: 17 },
  { slug: 'creators', title: 'Creators', order_num: 18 },
  { slug: 'initiatives', title: 'Initiatives', order_num: 19 },
  { slug: 'startups', title: 'Startups', order_num: 20 },
  { slug: 'students', title: 'Students', order_num: 21 },
  { slug: 'civil-society', title: 'Civil Society', order_num: 22 },
  
  // Partners
  { slug: 'partners', title: 'Partners', order_num: 23 },
  { slug: 'advertising-partners', title: 'Advertising Partners', order_num: 24 },
  { slug: 'production-partners', title: 'Production Partners', order_num: 25 },
  { slug: 'distribution-companies', title: 'Distribution Companies', order_num: 26 },
  
  // Production Services
  { slug: 'cinematic-intro', title: 'Cinematic Intro', order_num: 27 },
  { slug: 'documentaries', title: 'Documentaries', order_num: 28 },
  { slug: 'field-ads', title: 'Field Ads', order_num: 29 },
  { slug: 'short-videos', title: 'Short Videos', order_num: 30 },
  
  // Ads Library
  { slug: 'ads-archive', title: 'Ads Archive', order_num: 31 },
  { slug: 'famous-ads-egypt', title: 'Famous Ads Egypt', order_num: 32 },
  { slug: 'global-ads', title: 'Global Ads', order_num: 33 },
  
  // Additional Pages
  { slug: 'portfolio', title: 'Portfolio', order_num: 34 },
  { slug: 'testimonials', title: 'Testimonials', order_num: 35 },
  { slug: 'pricing', title: 'Pricing', order_num: 36 },
  { slug: 'blog', title: 'Blog', order_num: 37 },
  { slug: 'news', title: 'News', order_num: 38 },
  { slug: 'events', title: 'Events', order_num: 39 },
  { slug: 'careers', title: 'Careers', order_num: 40 },
  { slug: 'privacy-policy', title: 'Privacy Policy', order_num: 41 },
  { slug: 'terms-of-service', title: 'Terms of Service', order_num: 42 },
  { slug: 'faq', title: 'FAQ', order_num: 43 },
  { slug: 'support', title: 'Support', order_num: 44 },
  { slug: 'team', title: 'Our Team', order_num: 45 },
  { slug: 'mission', title: 'Our Mission', order_num: 46 },
  { slug: 'values', title: 'Our Values', order_num: 47 },
  { slug: 'history', title: 'Company History', order_num: 48 },
  { slug: 'awards', title: 'Awards & Recognition', order_num: 49 },
  { slug: 'sustainability', title: 'Sustainability', order_num: 50 }
];

async function setupPages() {
  console.log('Setting up pages...');
  
  try {
    // First, clear existing pages
    const { error: deleteError } = await supabase
      .from('pages')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000'); // Delete all except dummy
    
    if (deleteError) {
      console.error('Error clearing pages:', deleteError);
      return;
    }
    
    console.log('Cleared existing pages');
    
    // Insert all pages
    const { data, error } = await supabase
      .from('pages')
      .insert(pages)
      .select();
    
    if (error) {
      console.error('Error inserting pages:', error);
      return;
    }
    
    console.log(`Successfully created ${data.length} pages!`);
    console.log('Pages created:');
    data.forEach(page => {
      console.log(`- ${page.title} (${page.slug})`);
    });
    
  } catch (error) {
    console.error('Error:', error);
  }
}

setupPages(); 