'use client'

import { useSupabase } from '@/lib/supabase/provider'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { LanguageSwitcher } from './LanguageSwitcher'
import { useLanguage } from '@/lib/i18n/provider'

export function TopNav() {
  const { supabase } = useSupabase()
  const router = useRouter()
  const { language } = useLanguage()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  return (
    <div className="h-16 border-b px-6 flex items-center justify-between">
      <h2 className="text-xl font-semibold">
        {language === 'en' ? 'Dashboard' : 'لوحة التحكم'}
      </h2>
      
      <div className="flex items-center gap-4">
        <LanguageSwitcher />
        <Button 
          variant="outline" 
          onClick={handleLogout}
        >
          {language === 'en' ? 'Logout' : 'تسجيل الخروج'}
        </Button>
      </div>
    </div>
  )
}
