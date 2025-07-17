'use client'

import { Button } from '@/components/ui/Button'
import { useLanguage } from '@/lib/i18n/provider'
import { Globe } from 'lucide-react'

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4" />
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
      >
        {language === 'en' ? '🇸🇦 العربية' : '🇺🇸 English'}
      </Button>
    </div>
  )
}
