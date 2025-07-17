'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Truck, Globe, TrendingUp, Users, Star, ArrowRight, CheckCircle, Package } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export default function DistributionCompaniesPage() {
  const distributionBenefits = [
    {
      icon: Globe,
      title: 'شبكة توزيع واسعة',
      description: 'الوصول إلى شبكة توزيع تغطي جميع أنحاء المنطقة'
    },
    {
      icon: TrendingUp,
      title: 'زيادة المبيعات',
      description: 'تحقيق نمو كبير في المبيعات من خلال قنوات التوزيع المتعددة'
    },
    {
      icon: Users,
      title: 'وصول لعملاء جدد',
      description: 'الوصول إلى قاعدة عملاء أوسع في أسواق جديدة'
    },
    {
      icon: Package,
      title: 'إدارة المخزون',
      description: 'إدارة احترافية للمخزون وضمان التوفر المستمر'
    }
  ]

  const distributionServices = [
    {
      name: 'التوزيع المحلي',
      description: 'خدمات توزيع شاملة داخل المدن والمناطق المحلية',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop',
      coverage: 'جميع المدن الرئيسية',
      timeframe: '24-48 ساعة'
    },
    {
      name: 'التوزيع الإقليمي',
      description: 'شبكة توزيع تغطي المنطقة بأكملها',
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=300&fit=crop',
      coverage: '15+ دولة',
      timeframe: '3-7 أيام'
    },
    {
      name: 'التوزيع الرقمي',
      description: 'توزيع المحتوى الرقمي عبر المنصات الإلكترونية',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      coverage: 'عالمي',
      timeframe: 'فوري'
    },
    {
      name: 'التوزيع المتخصص',
      description: 'خدمات توزيع متخصصة للمنتجات الحساسة',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop',
      coverage: 'حسب المتطلبات',
      timeframe: 'مخصص'
    }
  ]

  const partnershipProcess = [
    {
      step: 1,
      title: 'تقييم المنتج',
      description: 'نقيم منتجك ونحدد أفضل استراتيجية توزيع',
      icon: '📋'
    },
    {
      step: 2,
      title: 'تطوير الخطة',
      description: 'نضع خطة توزيع شاملة تناسب احتياجاتك',
      icon: '📈'
    },
    {
      step: 3,
      title: 'تنفيذ التوزيع',
      description: 'نبدأ عملية التوزيع وفقاً للخطة المتفق عليها',
      icon: '🚚'
    },
    {
      step: 4,
      title: 'المتابعة والتطوير',
      description: 'نراقب الأداء ونطور الخدمة باستمرار',
      icon: '📊'
    }
  ]

  const distributionStats = [
    { number: '500+', label: 'نقطة توزيع', icon: Package },
    { number: '15+', label: 'دولة', icon: Globe },
    { number: '1M+', label: 'منتج موزع شهرياً', icon: TrendingUp },
    { number: '98%', label: 'معدل رضا العملاء', icon: Star },
  ]

  const successfulPartnerships = [
    {
      partner: 'شركة الأهرام للأغذية',
      product: 'منتجات غذائية',
      achievement: 'زيادة 300% في التوزيع',
      coverage: '12 دولة',
      description: 'توسيع شبكة التوزيع لتشمل أسواق جديدة',
      image: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=400&h=300&fit=crop'
    },
    {
      partner: 'دار النشر العربية',
      product: 'كتب ومطبوعات',
      achievement: '50,000 كتاب شهرياً',
      coverage: '8 دول',
      description: 'توزيع الكتب والمطبوعات في المنطقة',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop'
    },
    {
      partner: 'تك سوليوشنز',
      product: 'برمجيات ومحتوى رقمي',
      achievement: 'وصول عالمي',
      coverage: 'عالمي',
      description: 'توزيع المحتوى الرقمي عبر المنصات الإلكترونية',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
    }
  ]

  const distributionChannels = [
    {
      channel: 'المتاجر التقليدية',
      description: 'شبكة واسعة من المتاجر والمحلات التجارية',
      reach: '10,000+ متجر',
      advantages: ['تغطية شاملة', 'علاقات قوية', 'خبرة محلية']
    },
    {
      channel: 'المراكز التجارية',
      description: 'المولات والمراكز التجارية الكبرى',
      reach: '200+ مركز تجاري',
      advantages: ['جمهور واسع', 'مواقع استراتيجية', 'بيئة راقية']
    },
    {
      channel: 'التجارة الإلكترونية',
      description: 'المنصات الإلكترونية ومتاجر الإنترنت',
      reach: '50+ منصة',
      advantages: ['وصول عالمي', 'سهولة الطلب', 'تتبع دقيق']
    },
    {
      channel: 'الموزعون المتخصصون',
      description: 'شبكة من الموزعين المتخصصين في قطاعات محددة',
      reach: '100+ موزع',
      advantages: ['خبرة متخصصة', 'علاقات قوية', 'فهم عميق للسوق']
    }
  ]

  const partnerRequirements = [
    {
      category: 'متطلبات المنتج',
      requirements: [
        'جودة عالية ومعايير دولية',
        'تغليف مناسب للتوزيع',
        'شهادات الجودة المطلوبة',
        'توفر كميات كافية للتوزيع'
      ]
    },
    {
      category: 'متطلبات الشركة',
      requirements: [
        'سجل تجاري ساري المفعول',
        'خبرة في الإنتاج أو التجارة',
        'قدرة مالية مناسبة',
        'التزام بالمواعيد والجودة'
      ]
    },
    {
      category: 'متطلبات التعاون',
      requirements: [
        'مرونة في التعامل',
        'استعداد للتطوير المستمر',
        'شفافية في التعامل',
        'رؤية مشتركة للنمو'
      ]
    }
  ]

  const serviceOptions = [
    { value: 'local-distribution', label: 'التوزيع المحلي' },
    { value: 'regional-distribution', label: 'التوزيع الإقليمي' },
    { value: 'digital-distribution', label: 'التوزيع الرقمي' },
    { value: 'specialized-distribution', label: 'التوزيع المتخصص' },
    { value: 'logistics-services', label: 'خدمات اللوجستيات' },
    { value: 'inventory-management', label: 'إدارة المخزون' },
    { value: 'consultation', label: 'استشارة مجانية' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=1080&fit=crop"
            alt="Distribution Companies Hero"
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
                scale: [1, 1.1, 1]
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
              شراكة التوزيع
              <br />
              <span className="text-white">وصول أوسع ونمو أكبر</span>
            </h1>

            <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
              انضم إلى شبكة التوزيع الأقوى في المنطقة واوصل منتجاتك إلى ملايين العملاء
              <br />
              من خلال قنوات توزيع متعددة وخدمات لوجستية متطورة
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <Link href="#contact" className="btn-primary text-lg px-8 py-4">
                ابدأ شراكة التوزيع
                <ArrowRight className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0" />
              </Link>
              <Link href="#services" className="btn-outline border-white text-white hover:bg-white hover:text-gold text-lg px-8 py-4">
                استكشف خدماتنا
              </Link>
            </div>

            {/* Distribution Stats */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              {distributionStats.map((stat, index) => (
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
              مزايا شراكة التوزيع
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم حلول توزيع شاملة تساعدك في الوصول إلى أسواق جديدة وتحقيق نمو مستدام
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {distributionBenefits.map((benefit, index) => (
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

      {/* Distribution Services Section */}
      <section id="services" className="section-padding">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-6 text-gradient-gold">
              خدمات التوزيع
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم مجموعة شاملة من خدمات التوزيع لتناسب مختلف أنواع المنتجات والأسواق
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {distributionServices.map((service, index) => (
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
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-bold text-lg mb-1">
                      {service.name}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">التغطية:</span>
                      <span className="text-gold font-semibold">{service.coverage}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">الإطار الزمني:</span>
                      <span className="text-gold font-semibold">{service.timeframe}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Distribution Channels Section */}
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
              قنوات التوزيع
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نوفر قنوات توزيع متنوعة لضمان وصول منتجاتك إلى جميع شرائح العملاء
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {distributionChannels.map((channel, index) => (
              <motion.div
                key={index}
                className="card p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold mb-3 text-gray-800">
                  {channel.channel}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {channel.description}
                </p>
                <div className="mb-4">
                  <span className="text-gold font-bold text-lg">
                    {channel.reach}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2 text-sm">المزايا:</h4>
                  <ul className="space-y-1">
                    {channel.advantages.map((advantage, advIndex) => (
                      <li key={advIndex} className="text-sm text-gray-600 flex items-center">
                        <CheckCircle className="w-3 h-3 text-gold mr-2 rtl:ml-2 rtl:mr-0 flex-shrink-0" />
                        {advantage}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process Section */}
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
              عملية الشراكة
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نتبع عملية واضحة ومنظمة لضمان نجاح شراكة التوزيع من البداية
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
              متطلبات الشراكة
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نحدد معايير واضحة لضمان نجاح شراكة التوزيع
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
              شراكات توزيع ناجحة
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              اكتشف قصص نجاح شركائنا في التوزيع وكيف حققوا نمواً استثنائياً
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
                    {partnership.coverage}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gold mb-2">
                    {partnership.partner}
                  </h3>
                  <p className="text-white text-sm mb-2">
                    {partnership.product}
                  </p>
                  <p className="text-gray-300 text-sm mb-4">
                    {partnership.description}
                  </p>
                  <div className="text-gold font-bold flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0" />
                    {partnership.achievement}
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
              type="partner"
              title="ابدأ شراكة التوزيع الآن"
              subtitle="تواصل معنا لمناقشة كيف يمكننا مساعدتك في توزيع منتجاتك والوصول إلى أسواق جديدة"
              partnershipOptions={serviceOptions}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
