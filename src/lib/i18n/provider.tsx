'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type LanguageContextType = {
  language: 'en' | 'ar'
  setLanguage: (lang: 'en' | 'ar') => void
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
})

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [language, setLanguage] = useState<'en' | 'ar'>('en')

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as 'en' | 'ar'
    if (savedLang) {
      setLanguage(savedLang)
    }
  }, [])

  const handleLanguageChange = (lang: 'en' | 'ar') => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
  }

  return (
    <LanguageContext.Provider 
      value={{ language, setLanguage: handleLanguageChange }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
