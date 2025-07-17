'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Users, TrendingUp, Award, Star, ArrowRight, CheckCircle, Globe, Heart } from 'lucide-react'
import { partnerLogos } from '@/config/content'
import ContactForm from '@/components/ContactForm'

export default function PartnersPage() {
  const partnershipBenefits = [
    {
      icon: TrendingUp,
      title: 'نمو متبادل',
      description: 'نحقق النمو والنجاح معاً من خلال شراكات استراتيجية مدروسة'
    },
    {
      icon: Users,
      title: 'شبكة واسعة',
      description: 'الوصول إلى شبكة واسعة من العملاء والفرص التجارية'
    },
    {
      icon: Globe,
      title: 'توسع جغرافي',
      description: 'إمكانية التوسع في أسواق جديدة من خلال شراكاتنا'
    },
    {
      icon: Award,
      title: 'خبرة متراكمة',
      description: 'الاستفادة من خبراتنا المتراكمة في مجال الإعلام والتسويق'
    }
  ]

  const partnershipTypes = [
    {
      name: 'شركات التوزيع',
      description: 'شراكات مع شركات التوزيع لتوسيع نطاق الوصول',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop',
      benefits: ['توزيع أوسع', 'وصول لأسواق جديدة', 'تقليل التكاليف'],
      href: '/partners/distribution-companies'
    },
    {
      name: 'شركات الإنتاج',
      description: 'تعاون مع استوديوهات الإنتاج لتقديم خدمات متكاملة',
      image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=300&fit=crop',
      benefits: ['إنتاج متطور', 'تقنيات حديثة', 'جودة عالية'],
      href: '/partners/production-partners'
    },
    {
      name: 'وكالات الدعاية',
      description: 'شراكات مع وكالات الدعاية والإعلان المتخصصة',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop',
      benefits: ['حملات إبداعية', 'استراتيجيات متقدمة', 'وصول أكبر'],
      href: '/partners/advertising-partners'
    }
  ]

  const partnershipProcess = [
    {
      step: 1,
      title: 'التقديم والتقييم',
      description: 'نستقبل طلبات الشراكة ونقيم التوافق والإمكانيات',
      icon: '📋'
    },
    {
      step: 2,
      title: 'المناقشة والتفاوض',
      description: 'نناقش تفاصيل الشراكة والشروط المتبادلة',
      icon: '🤝'
    },
    {
      step: 3,
      title: 'التوقيع والبدء',
      description: 'نوقع اتفاقية الشراكة ونبدأ العمل المشترك',
      icon: '✍️'
    },
    {
      step: 4,
      title: 'المتابعة والتطوير',
      description: 'نتابع الأداء ونطور الشراكة باستمرار',
      icon: '📈'
    }
  ]

  const successfulPartnerships = [
    {
      partner: 'شركة التوزيع المتقدم',
      type: 'توزيع',
      duration: '3 سنوات',
      achievement: 'زيادة 200% في الوصول',
      description: 'شراكة ناجحة في توزيع المحتوى الإعلامي',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop'
    },
    {
      partner: 'استوديو الإنتاج الذهبي',
      type: 'إنتاج',
      duration: '2 سنة',
      achievement: '50+ مشروع مشترك',
      description: 'تعاون في إنتاج محتوى عالي الجودة',
      image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=300&fit=crop'
    },
    {
      partner: 'وكالة الإعلان الإبداعي',
      type: 'دعاية',
      duration: '4 سنوات',
      achievement: '100+ حملة ناجحة',
      description: 'شراكة في تطوير حملات إعلانية مبتكرة',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop'
    }
  ]

  const partnershipStats = [
    { number: '50+', label: 'شريك نشط', icon: Heart },
    { number: '200+', label: 'مشروع مشترك', icon: TrendingUp },
    { number: '15+', label: 'دولة', icon: Globe },
    { number: '95%', label: 'معدل نجاح', icon: Award },
  ]

  const partnerRequirements = [
    {
      category: 'المتطلبات الأساسية',
      requirements: [
        'خبرة لا تقل عن 3 سنوات في المجال',
        'سمعة طيبة في السوق',
        'قدرة مالية وتشغيلية مناسبة',
        'التزام بمعايير الجودة'
      ]
    },
    {
      category: 'المتطلبات التقنية',
      requirements: [
        'معدات وتقنيات حديثة',
        'فريق عمل مؤهل',
        'أنظمة إدارة متطورة',
        'شهادات جودة معتمدة'
      ]
    },
    {
      category: 'المتطلبات التجارية',
      requirements: [
        'استراتيجية واضحة للنمو',
        'قاعدة عملاء مستقرة',
        'مرونة في التعامل',
        'رؤية مشتركة للمستقبل'
      ]
    }
  ]

  const partnershipOptions = [
    { value: 'distribution-partnership', label: 'شراكة التوزيع' },
    { value: 'production-partnership', label: 'شراكة الإنتاج' },
    { value: 'advertising-partnership', label: 'شراكة الدعاية والإعلان' },
    { value: 'technology-partnership', label: 'شراكة تقنية' },
    { value: 'strategic-partnership', label: 'شراكة استراتيجية' },
    { value: 'regional-partnership', label: 'شراكة إقليمية' },
    { value: 'consultation', label: 'استشارة مجانية' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920&h=1080&fit=crop"
            alt="Partners Hero"
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
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart className="w-20 h-20 text-gold" />
            </motion.div>

            <h1 className="heading-1 mb-6 text-gradient-gold">
              شراكات استراتيجية
              <br />
              <span className="text-white">تحقق النجاح المشترك</span>
            </h1>

            <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
              نبني شراكات قوية ومثمرة مع أفضل الشركات في مجال الإعلام والتسويق
              <br />
              لتحقيق النمو المتبادل والوصول إلى آفاق جديدة من النجاح
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <Link href="#contact" className="btn-primary text-lg px-8 py-4">
                انضم كشريك
                <ArrowRight className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0" />
              </Link>
              <Link href="#partnerships" className="btn-outline border-white text-white hover:bg-white hover:text-gold text-lg px-8 py-4">
                استكشف الشراكات
              </Link>
            </div>

            {/* Partnership Stats */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              {partnershipStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-8 h-8 text-gold" />
                  </div>
                  <div className="text-3xl font-bold text-gold mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
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
              مزايا الشراكة معنا
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم شراكات مثمرة تحقق النمو والنجاح لجميع الأطراف
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipBenefits.map((benefit, index) => (
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
                  <benefit.icon className="w-12 h-12 text-gold" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-800">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types Section */}
      <section id="partnerships" className="section-padding">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-6 text-gradient-gold">
              أنواع الشراكات
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم أنواعاً متعددة من الشراكات لتناسب مختلف الاحتياجات والأهداف
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={index}
                className="card overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative h-48">
                  <Image
                    src={type.image}
                    alt={type.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-bold text-lg mb-1">
                      {type.name}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    {type.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">المزايا:</h4>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-gold mr-2 rtl:ml-2 rtl:mr-0 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={type.href}
                    className="btn-outline w-full text-center"
                  >
                    اعرف المزيد
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process Section */}
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
              عملية الشراكة
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نتبع عملية واضحة ومنظمة لضمان نجاح الشراكة من البداية
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {partnershipProcess.map((step, index) => (
              <motion.div
                key={step.step}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center text-black text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <div className="text-4xl mb-4">{step.icon}</div>
                  {index < partnershipProcess.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-gold to-transparent" />
                  )}
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Requirements Section */}
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
              متطلبات الشراكة
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نحدد معايير واضحة لضمان اختيار الشركاء المناسبين
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerRequirements.map((category, index) => (
              <motion.div
                key={index}
                className="card p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-6 text-gray-800 text-center">
                  {category.category}
                </h3>
                <ul className="space-y-3">
                  {category.requirements.map((requirement, reqIndex) => (
                    <li key={reqIndex} className="flex items-start text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-gold mr-2 rtl:ml-2 rtl:mr-0 flex-shrink-0 mt-0.5" />
                      {requirement}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Successful Partnerships Section */}
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
              شراكات ناجحة
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              اكتشف بعض الشراكات الناجحة التي حققت نتائج مميزة لجميع الأطراف
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successfulPartnerships.map((partnership, index) => (
              <motion.div
                key={index}
                className="card bg-white/10 backdrop-blur-sm overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative h-48">
                  <Image
                    src={partnership.image}
                    alt={partnership.partner}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-gold text-black px-2 py-1 rounded-full text-xs font-bold">
                    {partnership.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gold mb-2">
                    {partnership.partner}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {partnership.description}
                  </p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-white text-sm">
                      {partnership.type}
                    </span>
                    <span className="text-gold font-bold text-sm">
                      {partnership.achievement}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners Section */}
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
              شركاؤنا الحاليون
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نفتخر بشراكتنا مع أفضل الشركات في المجال
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partnerLogos.map((partner, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={70}
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <ContactForm
              type="partner"
              title="انضم إلى شبكة شركائنا"
              subtitle="تواصل معنا لمناقشة فرص الشراكة وكيف يمكننا تحقيق النجاح المشترك"
              partnershipOptions={partnershipOptions}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
