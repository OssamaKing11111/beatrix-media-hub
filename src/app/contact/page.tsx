'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  CheckCircle,
  Star,
  Users,
  Award
} from 'lucide-react'
import { toast } from 'react-hot-toast'
import { dbOperations } from '@/lib/supabase'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const contactInfo = {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@beatrixone.com',
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '+20 123 456 7890',
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '201234567890',
    address: {
      ar: 'القاهرة، مصر - شارع التحرير، مبنى الإعلام الحديث، الطابق الخامس',
      en: 'Cairo, Egypt - Tahrir Street, Modern Building, 5th Floor'
    },
    workingHours: {
      ar: 'الأحد - الخميس: 9:00 ص - 6:00 م',
      en: 'Sunday - Thursday: 9:00 AM - 6:00 PM'
    }
  }

  const socialLinks = [
    { 
      name: 'Facebook', 
      url: process.env.NEXT_PUBLIC_FACEBOOK_URL || 'https://facebook.com/beatrixone',
      color: 'text-blue-600'
    },
    { 
      name: 'Instagram', 
      url: process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://instagram.com/beatrixone',
      color: 'text-pink-600'
    },
    { 
      name: 'LinkedIn', 
      url: process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://linkedin.com/company/beatrixone',
      color: 'text-blue-700'
    },
    { 
      name: 'YouTube', 
      url: process.env.NEXT_PUBLIC_YOUTUBE_URL || 'https://youtube.com/beatrixone',
      color: 'text-red-600'
    }
  ]

  const whyChooseUs = [
    {
      icon: Users,
      title: 'فريق محترف',
      description: 'فريق من الخبراء المتخصصين في الإنتاج'
    },
    {
      icon: Award,
      title: 'جودة مضمونة',
      description: 'نلتزم بأعلى معايير الجودة في جميع مشاريعنا'
    },
    {
      icon: Clock,
      title: 'التزام بالمواعيد',
      description: 'نحترم المواعيد المحددة ونسلم المشاريع في الوقت المناسب'
    },
    {
      icon: Star,
      title: 'رضا العملاء',
      description: 'أكثر من 95% من عملائنا راضون عن خدماتنا'
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await dbOperations.createContact({
        name: formData.name,
        email: formData.email,
        message: formData.message
      })

      toast.success('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      toast.error('حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=1080&fit=crop"
            alt="Contact Background"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="relative z-10 container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading-1 mb-6 text-gradient-gold">
              تواصل معنا
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              نحن هنا لمساعدتك في تحقيق رؤيتك. تواصل معنا اليوم واحصل على استشارة مجانية
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-gold mb-2">24/7</div>
                <div className="text-gray-300">دعم متواصل</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gold mb-2">15+</div>
                <div className="text-gray-300">سنة خبرة</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gold mb-2">500+</div>
                <div className="text-gray-300">عميل راضٍ</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="card p-8">
                <h2 className="heading-3 mb-6 text-gradient-gold">
                  أرسل لنا رسالة
                </h2>
                <p className="text-gray-600 mb-8">
                  املأ النموذج أدناه وسنتواصل معك في أقرب وقت ممكن
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="form-label">
                      الاسم الكامل *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="form-label">
                      البريد الإلكتروني *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                      placeholder="أدخل بريدك الإلكتروني"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="form-label">
                      الرسالة *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="form-textarea"
                      required
                      placeholder="اكتب رسالتك هنا..."
                      rows={6}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full text-lg py-4"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="spinner mr-2 rtl:ml-2 rtl:mr-0" />
                        جاري الإرسال...
                      </div>
                    ) : (
                      <>
                        إرسال الرسالة
                        <Send className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="heading-3 mb-6 text-gradient-gold">
                  معلومات التواصل
                </h2>
                <p className="text-gray-600 mb-8">
                  يمكنك التواصل معنا من خلال أي من الطرق التالية
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="p-3 bg-gold/10 rounded-xl">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">البريد الإلكتروني</h3>
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className="text-gray-600 hover:text-gold transition-colors duration-300"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="p-3 bg-gold/10 rounded-xl">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">الهاتف</h3>
                    <a 
                      href={`tel:${contactInfo.phone}`}
                      className="text-gray-600 hover:text-gold transition-colors duration-300"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="p-3 bg-gold/10 rounded-xl">
                    <MessageCircle className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">واتساب</h3>
                    <a 
                      href={`https://wa.me/${contactInfo.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gold transition-colors duration-300"
                    >
                      تواصل عبر واتساب
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="p-3 bg-gold/10 rounded-xl">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">العنوان</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {contactInfo.address.ar}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="p-3 bg-gold/10 rounded-xl">
                    <Clock className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">ساعات العمل</h3>
                    <p className="text-gray-600">
                      {contactInfo.workingHours.ar}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="pt-8 border-t border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-4">تابعنا على</h3>
                <div className="flex space-x-4 rtl:space-x-reverse">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-gray-100 rounded-xl hover:bg-gold/10 transition-colors duration-300 ${social.color}`}
                    >
                      <span className="sr-only">{social.name}</span>
                      <div className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-6 text-gradient-gold">
              لماذا تختارنا؟
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نحن نقدم أكثر من مجرد خدمات، نحن شريكك في النجاح
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-4 bg-gold/10 rounded-xl w-fit mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-gray-200">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-gold mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">موقعنا</h3>
            <p className="text-gray-600">
              {contactInfo.address.ar}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              * يمكن إضافة خريطة Google Maps هنا
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-gold text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-6">
              هل أنت مستعد لبدء مشروعك؟
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              لا تتردد في التواصل معنا اليوم واحصل على استشارة مجانية لمشروعك القادم
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={`https://wa.me/${contactInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-lg px-8 py-4"
              >
                تواصل عبر واتساب
              </a>
              <a 
                href={`tel:${contactInfo.phone}`}
                className="btn-outline border-white text-white hover:bg-white hover:text-gold text-lg px-8 py-4"
              >
                اتصل بنا الآن
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
