'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Truck, MapPin, Clock, Shield, Star, ArrowRight, CheckCircle } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export default function TransportCompaniesPage() {
  const services = [
    {
      icon: Truck,
      title: 'إعلانات النقل البري',
      description: 'حملات إعلانية متخصصة لشركات النقل والشحن البري'
    },
    {
      icon: MapPin,
      title: 'التسويق الجغرافي',
      description: 'استهداف العملاء حسب المناطق الجغرافية والطرق الرئيسية'
    },
    {
      icon: Clock,
      title: 'إعلانات الخدمة السريعة',
      description: 'تسليط الضوء على سرعة وكفاءة خدمات النقل'
    },
    {
      icon: Shield,
      title: 'إعلانات الأمان',
      description: 'التركيز على معايير الأمان والحماية في النقل'
    }
  ]

  const clientLogos = [
    {
      name: 'شركة النقل السريع',
      logo: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=120&h=80&fit=crop',
      description: 'رائدة في خدمات النقل السريع'
    },
    {
      name: 'مؤسسة الشحن المتقدم',
      logo: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=120&h=80&fit=crop',
      description: 'متخصصة في الشحن الدولي'
    },
    {
      name: 'شركة النقل الآمن',
      logo: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=120&h=80&fit=crop',
      description: 'خدمات نقل آمنة وموثوقة'
    },
    {
      name: 'مجموعة اللوجستيات الذكية',
      logo: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=120&h=80&fit=crop',
      description: 'حلول لوجستية متكاملة'
    }
  ]

  const successStories = [
    {
      client: 'شركة النقل السريع',
      challenge: 'زيادة الوعي بالعلامة التجارية في السوق المحلي',
      solution: 'حملة إعلانية متكاملة على الطرق الرئيسية ووسائل التواصل',
      result: 'زيادة 60% في الطلبات خلال 3 أشهر',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
    },
    {
      client: 'مؤسسة الشحن المتقدم',
      challenge: 'التوسع في الأسواق الجديدة',
      solution: 'استراتيجية تسويق رقمي مع إعلانات مستهدفة',
      result: 'دخول 5 أسواق جديدة بنجاح',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop'
    }
  ]

  const serviceOptions = [
    { value: 'brand-awareness', label: 'زيادة الوعي بالعلامة التجارية' },
    { value: 'digital-marketing', label: 'التسويق الرقمي' },
    { value: 'tv-ads', label: 'الإعلانات التلفزيونية' },
    { value: 'outdoor-ads', label: 'الإعلانات الخارجية' },
    { value: 'social-management', label: 'إدارة وسائل التواصل' },
    { value: 'content-creation', label: 'إنتاج المحتوى' },
    { value: 'consultation', label: 'استشارات تسويقية' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop"
            alt="Transport Companies Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="hero-overlay" />
        </div>

        <div className="relative z-10 container-custom text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              className="flex justify-center mb-8"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Truck className="w-20 h-20 text-gold" />
            </motion.div>

            <h1 className="heading-1 mb-6 text-gradient-gold">
              خدمات متخصصة
              <br />
              <span className="text-white">لشركات النقل والشحن</span>
            </h1>

            <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
              نساعد شركات النقل والشحن في الوصول إلى عملائها المستهدفين
              <br />
              من خلال حملات إعلانية مبتكرة ومؤثرة
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="#contact" className="btn-primary text-lg px-8 py-4">
                ابدأ مشروعك الآن
                <ArrowRight className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0" />
              </Link>
              <Link href="#services" className="btn-outline border-white text-white hover:bg-white hover:text-gold text-lg px-8 py-4">
                استكشف خدماتنا
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-6 text-gradient-gold">
              خدماتنا المتخصصة لشركات النقل
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم حلولاً شاملة تناسب طبيعة عمل شركات النقل والشحن
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="card p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-center mb-4">
                  <service.icon className="w-12 h-12 text-gold" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
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
              عملاؤنا من شركات النقل
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نفتخر بثقة كبرى شركات النقل والشحن في المنطقة
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clientLogos.map((client, index) => (
              <motion.div
                key={index}
                className="card p-6 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="mb-4">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={120}
                    height={80}
                    className="mx-auto rounded-lg object-cover"
                  />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">
                  {client.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {client.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="section-padding bg-gradient-dark text-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-6 text-gradient-gold">
              قصص نجاح ملهمة
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              اكتشف كيف ساعدنا شركات النقل في تحقيق أهدافها التسويقية
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                className="card bg-white/10 backdrop-blur-sm p-8"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="mb-6">
                  <Image
                    src={story.image}
                    alt={story.client}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                
                <h3 className="text-xl font-bold text-gold mb-4">
                  {story.client}
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-200 mb-2">التحدي:</h4>
                    <p className="text-gray-300">{story.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-200 mb-2">الحل:</h4>
                    <p className="text-gray-300">{story.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-200 mb-2">النتيجة:</h4>
                    <p className="text-gold font-semibold flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0" />
                      {story.result}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <ContactForm
              type="client"
              title="ابدأ مشروعك الآن"
              subtitle="تواصل معنا لمناقشة احتياجاتك وكيف يمكننا مساعدة شركتك في النقل"
              serviceOptions={serviceOptions}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
