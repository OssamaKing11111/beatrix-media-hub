'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'ar' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('ar')

  useEffect(() => {
    // استرجاع اللغة المحفوظة من localStorage عند بدء التطبيق
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage) {
      setLanguage(savedLanguage)
      document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr'
      document.documentElement.lang = savedLanguage
    }
  }, [])

  const toggleLanguage = () => {
    const newLanguage = language === 'ar' ? 'en' : 'ar'
    setLanguage(newLanguage)
    localStorage.setItem('language', newLanguage)
    document.documentElement.dir = newLanguage === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = newLanguage
    window.location.reload() // إعادة تحميل الصفحة لتطبيق التغييرات على كل المكونات
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
