'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Stethoscope, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Users, 
  TrendingUp,
  Award,
  Heart,
  Shield,
  BookOpen,
  Video
} from 'lucide-react'
import { toast } from 'react-hot-toast'
import { dbOperations } from '@/lib/supabase'

export default function DoctorsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const services = [
    'فيديوهات توعوية طبية',
    'إعلانات للعيادات والمراكز الطبية',
    'محتوى تعليمي طبي',
    'حملات توعية صحية',
    'تصوير العمليات الطبية',
    'برامج طبية تلفزيونية'
  ]

  const successStories = [
    {
      client: 'مستشفى النيل الطبي',
      result: 'زيادة المرضى بنسبة 60%',
      description: 'حملة توعوية شاملة عن أهمية الفحص الدوري أدت إلى زيادة كبيرة في عدد المرضى',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop'
    },
    {
      client: 'عيادات القلب المتخصصة',
      result: 'تحسين الصورة الذهنية بنسبة 80%',
      description: 'سلسلة فيديوهات تعليمية عن أمراض القلب وطرق الوقاية منها',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop'
    },
    {
      client: 'مركز الأسنان الحديث',
      result: 'زيادة الحجوزات بنسبة 70%',
      description: 'حملة إعلانية متكاملة لخدمات تجميل الأسنان والعلاج التقويمي',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop'
    }
  ]

  const ourServices = [
    {
      icon: Video,
      title: 'فيديوهات توعوية طبية',
      description: 'إنتاج محتوى تعليمي طبي يساعد المرضى على فهم حالاتهم الصحية',
      features: ['محتوى علمي دقيق', 'تبسيط المعلومات الطبية', 'رسوم متحركة توضيحية', 'مراجعة طبية متخصصة']
    },
    {
      icon: Heart,
      title: 'إعلانات العيادات والمراكز',
      description: 'حملات إعلانية تبني الثقة وتعزز السمعة المهنية للأطباء',
      features: ['تصوير احترافي', 'شهادات المرضى', 'عرض التقنيات الحديثة', 'بناء الثقة والمصداقية']
    },
    {
      icon: BookOpen,
      title: 'المحتوى التعليمي الطبي',
      description: 'إنشاء محتوى تعليمي متخصص للمرضى والمهتمين بالصحة',
      features: ['مقالات طبية', 'إنفوجرافيك توضيحي', 'بودكاست طبي', 'ندوات تفاعلية']
    },
    {
      icon: Shield,
      title: 'حملات التوعية الصحية',
      description: 'حملات شاملة للتوعية بالأمراض وطرق الوقاية منها',
      features: ['حملات موسمية', 'توعية مجتمعية', 'شراكات مع المؤسسات', 'قياس الأثر والنتائج']
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      await dbOperations.createClient({
        name: formData.name,
        email: formData.email,
        service: formData.service,
        message: formData.message
      })

      toast.success('تم إرسال طلبك بنجاح! سنتواصل معك قريباً')
      setFormData({ name: '', email: '', service: '', message: '' })
    } catch (error) {
      toast.error('حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1920&h=1080&fit=crop"
            alt="Medical Background"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="relative z-10 container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-4 rtl:space-x-reverse mb-6">
                <div className="p-3 bg-gold rounded-xl">
                  <Stethoscope className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="heading-2 text-gradient-gold">الأطباء والمراكز الطبية</h1>
                  <p className="text-gray-300">خدمات طبية متخصصة</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                نقدم خدمات طبية متخصصة تبني الثقة وتعزز السمعة المهنية للأطباء والمراكز الطبية، 
                مع التركيز على المحتوى العلمي الدقيق والتوعية الصحية الفعالة
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-1">32+</div>
                  <div className="text-gray-400 text-sm">طبيب وعيادة</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-1">95+</div>
                  <div className="text-gray-400 text-sm">مشروع طبي</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-1">60%</div>
                  <div className="text-gray-400 text-sm">زيادة المرضى</div>
                </div>
              </div>

              <Link href="#consultation" className="btn-primary text-lg px-8 py-4">
                احصل على استشارة طبية مجانية
                <ArrowRight className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop"
                  alt="Medical Team"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-white">
                    <div className="text-lg font-bold mb-2">فريق طبي متخصص</div>
                    <div className="text-sm text-gray-300">
                      نعمل مع أفضل الأطباء والمتخصصين في المجال الطبي
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-6 text-gradient-gold">
              خدماتنا المتخصصة للقطاع الطبي
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نفهم أهمية الدقة والمصداقية في المجال الطبي، ونقدم حلولاً تبني الثقة وتعزز السمعة المهنية
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ourServices.map((service, index) => (
              <motion.div
                key={index}
                className="card p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start space-x-4 rtl:space-x-reverse mb-6">
                  <div className="p-3 bg-gold/10 rounded-xl">
                    <service.icon className="w-8 h-8 text-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 rtl:space-x-reverse">
                      <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
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
              قصص نجاح في القطاع الطبي
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              شاهد كيف ساعدنا الأطباء والمراكز الطبية في بناء سمعة قوية وزيادة عدد المرضى
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                className="card overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.client}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-white">
                      <div className="text-lg font-bold mb-1">{story.client}</div>
                      <div className="text-gold text-sm font-semibold">{story.result}</div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">
                    {story.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section id="consultation" className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-2 mb-6 text-gradient-gold">
                استشارة طبية مجانية
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                احصل على استشارة مجانية من خبرائنا في الإعلام الطبي. سنساعدك في بناء 
                استراتيجية تعزز من سمعتك المهنية وتزيد من ثقة المرضى
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="p-2 bg-gold/10 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">محتوى طبي دقيق</div>
                    <div className="text-gray-600 text-sm">مراجعة طبية متخصصة لجميع المحتويات</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="p-2 bg-gold/10 rounded-lg">
                    <Users className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">فريق متخصص</div>
                    <div className="text-gray-600 text-sm">خبراء في الإعلام الطبي والتوعية الصحية</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="p-2 bg-gold/10 rounded-lg">
                    <Award className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">نتائج مثبتة</div>
                    <div className="text-gray-600 text-sm">زيادة متوسطة 60% في عدد المرضى</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="card p-8">
                <div className="space-y-6">
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
                      placeholder="د. أحمد محمد"
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
                      placeholder="doctor@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="form-label">
                      الخدمة المطلوبة *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="form-select"
                      required
                    >
                      <option value="">اختر الخدمة المطلوبة</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="form-label">
                      تفاصيل إضافية
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="form-textarea"
                      placeholder="أخبرنا عن تخصصك الطبي ونوع المحتوى المطلوب..."
                      rows={4}
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
                      'إرسال الطلب'
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
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
              هل أنت مستعد لبناء سمعة طبية قوية؟
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              انضم إلى أكثر من 32 طبيب ومركز طبي وثقوا بنا لتعزيز حضورهم
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
                تواصل معنا الآن
              </Link>
              <Link href="/clients" className="btn-outline border-white text-white hover:bg-white hover:text-gold text-lg px-8 py-4">
                استكشف القطاعات الأخرى
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
