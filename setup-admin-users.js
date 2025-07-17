const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing environment variables. Please check your .env.local file.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const adminUsers = [
  { email: 'admin@beatrixone.com', password: 'Admin123!', role: 'admin' },
  { email: 'editor@beatrixone.com', password: 'Editor123!', role: 'editor' },
  { email: 'manager@beatrixone.com', password: 'Manager123!', role: 'admin' }
];

async function createAdminUsers() {
  console.log('Creating admin users...');
  
  for (const user of adminUsers) {
    try {
      // Create user in Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.admin.createUser({
        email: user.email,
        password: user.password,
        email_confirm: true
      });

      if (authError) {
        console.log(`Error creating auth user for ${user.email}:`, authError.message);
        continue;
      }

      // Add user to admin_users table
      const { data: adminData, error: adminError } = await supabase
        .from('admin_users')
        .insert([{ email: user.email, role: user.role }])
        .select()
        .single();

      if (adminError) {
        console.log(`Error adding ${user.email} to admin_users:`, adminError.message);
        continue;
      }

      console.log(`✅ Created admin user: ${user.email} (${user.role})`);
      console.log(`   Password: ${user.password}`);
    } catch (error) {
      console.log(`Error with ${user.email}:`, error.message);
    }
  }
  
  console.log('\n🎉 Admin users setup complete!');
  console.log('\nLogin credentials:');
  adminUsers.forEach(user => {
    console.log(`   ${user.email} (${user.role}) - Password: ${user.password}`);
  });
}

createAdminUsers().catch(console.error); 