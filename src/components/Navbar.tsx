'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Camera, Facebook, Instagram, Linkedin, Youtube, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { language, toggleLanguage } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Simplified navigation - only main titles change
  const navItems = [
    {
      name: { ar: 'الرئيسية', en: 'Home' },
      href: '/',
    },
    {
      name: { ar: 'العملاء', en: 'Clients' },
      href: '/clients',
      dropdown: [
        { name: { ar: 'شركات الأغذية', en: 'Food Companies' }, href: '/clients/food-companies' },
        { name: { ar: 'الأطباء', en: 'Doctors' }, href: '/clients/doctors' },
        { name: { ar: 'شركات النقل', en: 'Transport Companies' }, href: '/clients/transport-companies' },
        { name: { ar: 'شركات السياحة', en: 'Tourism Companies' }, href: '/clients/tourism-companies' },
        { name: { ar: 'شركات البرمجة', en: 'Programming Companies' }, href: '/clients/programming-companies' },
        { name: { ar: 'شركات التعليم', en: 'Education Companies' }, href: '/clients/education-companies' },
        { name: { ar: 'شركات الملابس', en: 'Clothing Companies' }, href: '/clients/clothing-companies' },
        { name: { ar: 'شركات التسويق الرقمي', en: 'Digital Marketing Companies' }, href: '/clients/digital-marketing-companies' },
      ]
    },
    {
      name: { ar: 'الإنتاج', en: 'Production' },
      href: '/production',
      dropdown: [
        { name: { ar: 'المقدمة السينمائية', en: 'Cinematic Intro' }, href: '/production/cinematic-intro' },
        { name: { ar: 'إعلانات ميدانية', en: 'Field Ads' }, href: '/production/field-ads' },
        { name: { ar: 'فيديوهات قصيرة', en: 'Short Videos' }, href: '/production/short-videos' },
        { name: { ar: 'فيديوهات توثيقية', en: 'Documentaries' }, href: '/production/documentaries' },
      ]
    },
    {
      name: { ar: 'الشراكات', en: 'Partners' },
      href: '/partners',
      dropdown: [
        { name: { ar: 'شركات التوزيع', en: 'Distribution Companies' }, href: '/partners/distribution-companies' },
        { name: { ar: 'شركات الإنتاج', en: 'Production Partners' }, href: '/partners/production-partners' },
        { name: { ar: 'شركات الدعاية', en: 'Advertising Partners' }, href: '/partners/advertising-partners' },
      ]
    },
    {
      name: { ar: 'المجتمع', en: 'Community' },
      href: '/community',
      dropdown: [
        { name: { ar: 'الشركات الناشئة', en: 'Startups' }, href: '/community/startups' },
        { name: { ar: 'المجتمع المدني', en: 'Civil Society' }, href: '/community/civil-society' },
        { name: { ar: 'المبادرات', en: 'Initiatives' }, href: '/community/initiatives' },
      ]
    },
    {
      name: { ar: 'مكتبة الإعلانات', en: 'Ads Library' },
      href: '/ads-library',
      dropdown: [
        { name: { ar: 'إعلانات مشهورة في مصر', en: 'Famous Ads Egypt' }, href: '/ads-library/famous-ads-egypt' },
        { name: { ar: 'إعلانات عالمية', en: 'Global Ads' }, href: '/ads-library/global-ads' },
        { name: { ar: 'أرشيف الإعلانات', en: 'Ads Archive' }, href: '/ads-library/ads-archive' },
      ]
    },
    {
      name: { ar: 'من نحن', en: 'About' },
      href: '/about',
    },
    {
      name: { ar: 'تواصل معنا', en: 'Contact' },
      href: '/contact',
    },
  ]

  const socialLinks = [
    { icon: Facebook, href: process.env.NEXT_PUBLIC_FACEBOOK_URL || '#', label: 'Facebook' },
    { icon: Instagram, href: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '#', label: 'Instagram' },
    { icon: Linkedin, href: process.env.NEXT_PUBLIC_LINKEDIN_URL || '#', label: 'LinkedIn' },
    { icon: MessageCircle, href: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '201234567890'}`, label: 'WhatsApp' },
    { icon: Youtube, href: process.env.NEXT_PUBLIC_YOUTUBE_URL || '#', label: 'YouTube' },
  ]

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <motion.div
              className="cinematic-camera"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Camera className="w-8 h-8 text-gold" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gradient-gold">
                {language === 'ar' ? 'بياتريكس ون' : 'Beatrix One'}
              </span>
              <span className="text-xs text-gray-600">
                {language === 'ar' ? 'منصتك الشاملة' : 'Your Complete Platform'}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.href)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`nav-link flex items-center space-x-1 rtl:space-x-reverse ${
                    pathname === item.href ? 'nav-link-active' : ''
                  }`}
                >
                  <span>{item.name[language]}</span>
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.href && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="dropdown-menu show"
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            className="dropdown-item"
                          >
                            {dropdownItem.name[language]}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Social Links & Language Toggle */}
          <div className="hidden lg:flex items-center space-x-4 rtl:space-x-reverse">
            {/* Social Icons */}
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gold transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Single Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="btn-outline text-sm px-3 py-2"
            >
              {language === 'ar' ? 'English' : 'عربي'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-gold transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-100"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      className={`block px-4 py-3 text-gray-700 hover:bg-gold/10 hover:text-gold transition-colors duration-200 ${
                        pathname === item.href ? 'text-gold font-semibold' : ''
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name[language]}
                    </Link>
                    {item.dropdown && (
                      <div className="pl-8 rtl:pr-8 rtl:pl-0 space-y-1">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-gold transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                          >
                            {dropdownItem.name[language]}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Mobile Language Toggle */}
                <div className="px-4 py-3 border-t border-gray-100">
                  <button
                    onClick={() => {
                      toggleLanguage()
                      setIsOpen(false)
                    }}
                    className="btn-outline w-full text-sm px-3 py-2"
                  >
                    {language === 'ar' ? 'English' : 'عربي'}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar
