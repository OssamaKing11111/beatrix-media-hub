'use client'

import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Youtube, MessageCircle, Mail, Phone, MapPin, Camera } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: { ar: 'الرئيسية', en: 'Home' }, href: '/' },
    { name: { ar: 'العملاء', en: 'Clients' }, href: '/clients' },
    { name: { ar: 'الإنتاج', en: 'Production' }, href: '/production' },
    { name: { ar: 'الشراكات', en: 'Partners' }, href: '/partners' },
    { name: { ar: 'المجتمع', en: 'Community' }, href: '/community' },
    { name: { ar: 'مكتبة الإعلانات', en: 'Ads Library' }, href: '/ads-library' },
    { name: { ar: 'من نحن', en: 'About' }, href: '/about' },
    { name: { ar: 'تواصل معنا', en: 'Contact' }, href: '/contact' },
  ]

  const services = [
    { name: { ar: 'المقدمة السينمائية', en: 'Cinematic Intro' }, href: '/production/cinematic-intro' },
    { name: { ar: 'إعلانات ميدانية', en: 'Field Ads' }, href: '/production/field-ads' },
    { name: { ar: 'فيديوهات قصيرة', en: 'Short Videos' }, href: '/production/short-videos' },
    { name: { ar: 'فيديوهات توثيقية', en: 'Documentaries' }, href: '/production/documentaries' },
  ]

  const clientCategories = [
    { name: { ar: 'شركات الأغذية', en: 'Food Companies' }, href: '/clients/food-companies' },
    { name: { ar: 'الأطباء', en: 'Doctors' }, href: '/clients/doctors' },
    { name: { ar: 'شركات النقل', en: 'Transport Companies' }, href: '/clients/transport-companies' },
    { name: { ar: 'شركات السياحة', en: 'Tourism Companies' }, href: '/clients/tourism-companies' },
  ]

  const socialLinks = [
    { 
      icon: Facebook, 
      href: process.env.NEXT_PUBLIC_FACEBOOK_URL || 'https://facebook.com/beatrixone', 
      label: 'Facebook',
      color: 'hover:text-blue-600'
    },
    { 
      icon: Instagram, 
      href: process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://instagram.com/beatrixone', 
      label: 'Instagram',
      color: 'hover:text-pink-600'
    },
    { 
      icon: Linkedin, 
      href: process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://linkedin.com/company/beatrixone', 
      label: 'LinkedIn',
      color: 'hover:text-blue-700'
    },
    { 
      icon: MessageCircle, 
      href: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '201234567890'}`, 
      label: 'WhatsApp',
      color: 'hover:text-green-600'
    },
    { 
      icon: Youtube, 
      href: process.env.NEXT_PUBLIC_YOUTUBE_URL || 'https://youtube.com/beatrixone', 
      label: 'YouTube',
      color: 'hover:text-red-600'
    },
  ]

  const contactInfo = {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@beatrixone.com',
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '+20 123 456 7890',
    address: {
      ar: process.env.NEXT_PUBLIC_CONTACT_ADDRESS || 'القاهرة، مصر - شارع التحرير، مبنى الإعلام الحديث',
      en: 'Cairo, Egypt - Tahrir Street, Modern Building'
    }
  }

  return (
    <footer className="bg-gradient-dark text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <motion.div
                className="text-gold"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Camera className="w-8 h-8" />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gradient-gold">
                  بياتريكس ون
                </span>
                <span className="text-sm text-gray-300">
                  Beatrix One
                </span>
              </div>
            </Link>
            
            <p className="text-gray-300 leading-relaxed">
              منصتك الشاملة للتميز والانتشار. نحول أفكارك إلى واقع مؤثر بأعلى معايير الجودة والاحترافية.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 transition-colors duration-300 ${social.color}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gradient-gold">روابط سريعة</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-gold transition-colors duration-300 flex items-center space-x-2 rtl:space-x-reverse"
                  >
                    <span className="w-1 h-1 bg-gold rounded-full"></span>
                    <span>{link.name.ar}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gradient-gold">خدماتنا</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-gold transition-colors duration-300 flex items-center space-x-2 rtl:space-x-reverse"
                  >
                    <span className="w-1 h-1 bg-gold rounded-full"></span>
                    <span>{service.name.ar}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <h4 className="text-lg font-semibold text-silver mb-3">فئات العملاء</h4>
              <ul className="space-y-2">
                {clientCategories.map((category) => (
                  <li key={category.href}>
                    <Link
                      href={category.href}
                      className="text-gray-400 hover:text-silver transition-colors duration-300 text-sm"
                    >
                      {category.name.ar}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gradient-gold">تواصل معنا</h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <Mail className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">البريد الإلكتروني</p>
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="text-white hover:text-gold transition-colors duration-300"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <Phone className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">الهاتف</p>
                  <a 
                    href={`tel:${contactInfo.phone}`}
                    className="text-white hover:text-gold transition-colors duration-300"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <MapPin className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">العنوان</p>
                  <p className="text-white text-sm leading-relaxed">
                    {contactInfo.address.ar}
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="btn-primary inline-block text-center"
                >
                  تواصل معنا الآن
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-700">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold text-gold mb-2">
                اشترك في نشرتنا الإخبارية
              </h4>
              <p className="text-gray-300 text-sm">
                احصل على آخر الأخبار والعروض الحصرية
              </p>
            </div>
            
            <div className="flex w-full md:w-auto max-w-md">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-r-lg rtl:rounded-l-lg rtl:rounded-r-none focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold text-white placeholder-gray-400"
              />
              <button className="bg-gradient-gold text-white px-6 py-3 rounded-l-lg rtl:rounded-r-lg rtl:rounded-l-none hover:shadow-gold transition-all duration-300 font-semibold">
                اشتراك
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © {currentYear} جميع الحقوق محفوظة بياتريكس ون
              </p>
              <p className="text-gray-500 text-xs mt-1">
                تم التطوير بـ ❤️ في مصر
              </p>
            </div>
            
            <div className="flex items-center space-x-6 rtl:space-x-reverse text-sm">
              <Link 
                href="/privacy-policy" 
                className="text-gray-400 hover:text-gold transition-colors duration-300"
              >
                سياسة الخصوصية
              </Link>
              <Link 
                href="/terms-conditions" 
                className="text-gray-400 hover:text-gold transition-colors duration-300"
              >
                الشروط والأحكام
              </Link>
              <Link 
                href="/sitemap" 
                className="text-gray-400 hover:text-gold transition-colors duration-300"
              >
                خريطة الموقع
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
