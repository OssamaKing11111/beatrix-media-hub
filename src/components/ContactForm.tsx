'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'react-hot-toast'
import { Mail, User, MessageSquare, Send } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import Select from '@/components/ui/Select'
import { dbOperations } from '@/lib/supabase'

interface ContactFormProps {
  type: 'client' | 'partner' | 'contact' | 'community'
  title?: string
  subtitle?: string
  serviceOptions?: { value: string; label: string }[]
  partnershipOptions?: { value: string; label: string }[]
}

const ContactForm = ({ 
  type, 
  title, 
  subtitle, 
  serviceOptions = [],
  partnershipOptions = []
}: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company_name: '',
    service: '',
    partnership_type: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'الاسم مطلوب'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'البريد الإلكتروني مطلوب'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'البريد الإلكتروني غير صحيح'
    }

    if (type === 'partner' && !formData.company_name.trim()) {
      newErrors.company_name = 'اسم الشركة مطلوب'
    }

    if (type === 'client' && !formData.service) {
      newErrors.service = 'نوع الخدمة مطلوب'
    }

    if (type === 'partner' && !formData.partnership_type) {
      newErrors.partnership_type = 'نوع الشراكة مطلوب'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'الرسالة مطلوبة'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      toast.error('يرجى تصحيح الأخطاء في النموذج')
      return
    }

    setLoading(true)

    try {
      let result
      
      if (type === 'client') {
        result = await dbOperations.createClient({
          name: formData.name,
          email: formData.email,
          service: formData.service,
          message: formData.message
        })
      } else if (type === 'partner') {
        result = await dbOperations.createPartner({
          company_name: formData.company_name,
          email: formData.email,
          partnership_type: formData.partnership_type,
          message: formData.message
        })
      } else {
        result = await dbOperations.createContact({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      }

      if (result) {
        toast.success('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً')
        setFormData({
          name: '',
          email: '',
          company_name: '',
          service: '',
          partnership_type: '',
          message: ''
        })
        setErrors({})
      }
    } catch (error) {
      console.error('Form submission error:', error)
      toast.error('حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white rounded-2xl shadow-xl p-8 lg:p-12"
    >
      {title && (
        <div className="text-center mb-8">
          <h2 className="heading-2 mb-4 text-gradient-gold">
            {title}
          </h2>
          {subtitle && (
            <p className="text-gray-600 text-lg">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            name="name"
            label="الاسم الكامل *"
            placeholder="أدخل اسمك الكامل"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            icon={<User className="w-5 h-5" />}
          />

          <Input
            name="email"
            type="email"
            label="البريد الإلكتروني *"
            placeholder="example@email.com"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            icon={<Mail className="w-5 h-5" />}
          />
        </div>

        {type === 'partner' && (
          <Input
            name="company_name"
            label="اسم الشركة *"
            placeholder="أدخل اسم شركتك"
            value={formData.company_name}
            onChange={handleChange}
            error={errors.company_name}
          />
        )}

        {type === 'client' && serviceOptions.length > 0 && (
          <Select
            name="service"
            label="نوع الخدمة المطلوبة *"
            placeholder="اختر نوع الخدمة"
            value={formData.service}
            onChange={handleChange}
            error={errors.service}
            options={serviceOptions}
          />
        )}

        {type === 'partner' && partnershipOptions.length > 0 && (
          <Select
            name="partnership_type"
            label="نوع الشراكة *"
            placeholder="اختر نوع الشراكة"
            value={formData.partnership_type}
            onChange={handleChange}
            error={errors.partnership_type}
            options={partnershipOptions}
          />
        )}

        <Textarea
          name="message"
          label="الرسالة *"
          placeholder="اكتب رسالتك هنا..."
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
          rows={5}
        />

        <div className="text-center">
          <Button
            type="submit"
            disabled={loading}
            size="lg"
            className="w-full md:w-auto px-12"
          >
            {loading ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                جاري الإرسال...
              </div>
            ) : (
              <>
                <Send className="w-5 h-5 ml-2 rtl:mr-2 rtl:ml-0" />
                إرسال الرسالة
              </>
            )}
          </Button>
        </div>
      </form>

      <div className="mt-8 pt-8 border-t border-gray-100 text-center text-gray-600">
        <p className="mb-2">أو تواصل معنا مباشرة:</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
          <a href="mailto:info@beatrixone.com" className="hover:text-gold transition-colors">
            info@beatrixone.com
          </a>
          <span className="hidden sm:inline">|</span>
          <a href="tel:+201234567890" className="hover:text-gold transition-colors">
            +20 123 456 7890
          </a>
          <span className="hidden sm:inline">|</span>
          <a 
            href="https://wa.me/201234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors"
          >
            واتساب
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default ContactForm
