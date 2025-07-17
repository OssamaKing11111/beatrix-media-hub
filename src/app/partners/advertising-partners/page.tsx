'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Megaphone, Target, TrendingUp, Users, Star, ArrowRight, CheckCircle, Zap } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export default function AdvertisingPartnersPage() {
  const advertisingBenefits = [
    {
      icon: Target,
      title: 'استهداف دقيق',
      description: 'وصول دقيق للجمهور المستهدف باستخدام أحدث تقنيات الاستهداف'
    },
    {
      icon: TrendingUp,
      title: 'نتائج قابلة للقياس',
      description: 'تتبع وقياس نتائج الحملات الإعلانية بدقة وشفافية'
    },
    {
      icon: Zap,
      title: 'حملات إبداعية',
      description: 'تطوير حملات إعلانية مبتكرة تجذب الانتباه وتحقق التأثير'
    },
    {
      icon: Users,
      title: 'وصول واسع',
      description: 'الوصول إلى ملايين المستخدمين عبر قنوات إعلانية متعددة'
    }
  ]

  const advertisingServices = [
    {
      name: 'الإعلان الرقمي',
      description: 'حملات إعلانية متطورة عبر المنصات الرقمية',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      platforms: ['Google Ads', 'Facebook', 'Instagram', 'YouTube'],
      reach: '10M+ مستخدم'
    },
    {
      name: 'الإعلان التلفزيوني',
      description: 'إنتاج وبث إعلانات تلفزيونية عالية الجودة',
      image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&h=300&fit=crop',
      platforms: ['القنوات المحلية', 'القنوات الفضائية', 'البث المباشر'],
      reach: '50M+ مشاهد'
    },
    {
      name: 'الإعلان الخارجي',
      description: 'لوحات إعلانية في المواقع الاستراتيجية',
      image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=400&h=300&fit=crop',
      platforms: ['اللوحات الرقمية', 'اللوحات التقليدية', 'إعلانات النقل'],
      reach: '5M+ مشاهدة يومية'
    },
    {
      name: 'التسويق المؤثر',
      description: 'حملات تسويقية مع المؤثرين والمشاهير',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
      platforms: ['إنستغرام', 'تيك توك', 'يوتيوب', 'تويتر'],
      reach: '20M+ متابع'
    }
  ]

  const campaignTypes = [
    {
      type: 'حملات الوعي بالعلامة التجارية',
      description: 'بناء الوعي وتعزيز صورة العلامة التجارية',
      objectives: ['زيادة الوعي', 'تحسين الصورة الذهنية', 'بناء الثقة'],
      duration: '3-6 أشهر'
    },
    {
      type: 'حملات المبيعات',
      description: 'زيادة المبيعات والتحويلات المباشرة',
      objectives: ['زيادة المبيعات', 'جذب عملاء جدد', 'تحسين ROI'],
      duration: '1-3 أشهر'
    },
    {
      type: 'حملات إطلاق المنتجات',
      description: 'تسويق المنتجات والخدمات الجديدة',
      objectives: ['إطلاق ناجح', 'اختراق السوق', 'بناء قاعدة عملاء'],
      duration: '2-4 أشهر'
    },
    {
      type: 'حملات الأحداث والفعاليات',
      description: 'الترويج للأحداث والمؤتمرات والفعاليات',
      objectives: ['زيادة الحضور', 'تعزيز المشاركة', 'بناء المجتمع'],
      duration: '1-2 شهر'
    }
  ]

  const advertisingStats = [
    { number: '500+', label: 'حملة ناجحة', icon: Megaphone },
    { number: '100M+', label: 'انطباع شهرياً', icon: Target },
    { number: '25+', label: 'منصة إعلانية', icon: TrendingUp },
    { number: '98%', label: 'معدل رضا العملاء', icon: Star },
  ]

  const successfulCampaigns = [
    {
      campaign: 'حملة "المستقبل الرقمي"',
      client: 'تك سوليوشنز',
      type: 'إعلان رقمي',
      achievement: '300% زيادة في المبيعات',
      budget: '500,000 ريال',
      description: 'حملة شاملة لتعزيز الحلول التقنية',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
    },
    {
      campaign: 'حملة "الصحة أولاً"',
      client: 'مستشفى النيل الطبي',
      type: 'إعلان تلفزيوني',
      achievement: '50% زيادة في المراجعين',
      budget: '800,000 ريال',
      description: 'حملة توعوية صحية شاملة',
      image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&h=300&fit=crop'
    },
    {
      campaign: 'حملة "طعم الأصالة"',
      client: 'شركة الأهرام للأغذية',
      type: 'حملة متكاملة',
      achievement: '200% زيادة في الوعي',
      budget: '600,000 ريال',
      description: 'حملة لتعزيز المنتجات الغذائية التراثية',
      image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=400&h=300&fit=crop'
    }
  ]

  const advertisingChannels = [
    {
      channel: 'المنصات الرقمية',
      description: 'إعلانات عبر وسائل التواصل الاجتماعي ومحركات البحث',
      advantages: ['استهداف دقيق', 'تكلفة فعالة', 'قياس فوري'],
      reach: '80% من المستخدمين'
    },
    {
      channel: 'الإعلام التقليدي',
      description: 'التلفزيون والراديو والصحف والمجلات',
      advantages: ['وصول واسع', 'مصداقية عالية', 'تأثير قوي'],
      reach: '90% من الجمهور'
    },
    {
      channel: 'الإعلان الخارجي',
      description: 'اللوحات الإعلانية والإعلانات في الأماكن العامة',
      advantages: ['رؤية عالية', 'تكرار التعرض', 'تأثير محلي'],
      reach: '70% من المارة'
    },
    {
      channel: 'التسويق المباشر',
      description: 'الرسائل النصية والبريد الإلكتروني والمكالمات',
      advantages: ['تخصيص عالي', 'استجابة سريعة', 'تكلفة منخفضة'],
      reach: '95% معدل وصول'
    }
  ]

  const partnerRequirements = [
    {
      category: 'المتطلبات الإبداعية',
      requirements: [
        'فريق إبداعي متميز',
        'خبرة في التصميم والإنتاج',
        'قدرة على الابتكار',
        'فهم عميق للسوق المحلي'
      ]
    },
    {
      category: 'المتطلبات التقنية',
      requirements: [
        'أدوات تحليل متقدمة',
        'منصات إدارة الحملات',
        'تقنيات الاستهداف',
        'أنظمة قياس الأداء'
      ]
    },
    {
      category: 'المتطلبات التجارية',
      requirements: [
        'سجل أعمال متميز',
        'شراكات مع المنصات الرئيسية',
        'قدرة مالية مناسبة',
        'التزام بالمواعيد والجودة'
      ]
    }
  ]

  const serviceOptions = [
    { value: 'digital-advertising', label: 'الإعلان الرقمي' },
    { value: 'tv-advertising', label: 'الإعلان التلفزيوني' },
    { value: 'outdoor-advertising', label: 'الإعلان الخارجي' },
    { value: 'influencer-marketing', label: 'التسويق المؤثر' },
    { value: 'brand-awareness', label: 'حملات الوعي بالعلامة التجارية' },
    { value: 'sales-campaigns', label: 'حملات المبيعات' },
    { value: 'product-launch', label: 'إطلاق المنتجات' },
    { value: 'event-promotion', label: 'الترويج للفعاليات' },
    { value: 'consultation', label: 'استشارة مجانية' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=1080&fit=crop"
            alt="Advertising Partners Hero"
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
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Megaphone className="w-20 h-20 text-gold" />
            </motion.div>

            <h1 className="heading-1 mb-6 text-gradient-gold">
              شراكة الدعاية والإعلان
              <br />
              <span className="text-white">رسائل مؤثرة تصل للقلوب</span>
            </h1>

            <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
              انضم إلى شبكة وكالات الدعاية والإعلان الرائدة وأوصل رسالتك بطريقة مؤثرة
              <br />
              من خلال حملات إعلانية إبداعية تحقق أهدافك التسويقية بكفاءة عالية
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <Link href="#contact" className="btn-primary text-lg px-8 py-4">
                ابدأ شراكة الإعلان
                <ArrowRight className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0" />
              </Link>
              <Link href="#services" className="btn-outline border-white text-white hover:bg-white hover:text-gold text-lg px-8 py-4">
                استكشف خدماتنا
              </Link>
            </div>

            {/* Advertising Stats */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              {advertisingStats.map((stat, index) => (
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
              مزايا شراكة الدعاية والإعلان
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم حلول إعلانية متكاملة تجمع بين الإبداع والتقنية لتحقيق أقصى تأثير
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advertisingBenefits.map((benefit, index) => (
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

      {/* Advertising Services Section */}
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
              خدمات الدعاية والإعلان
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم مجموعة شاملة من الخدمات الإعلانية عبر جميع القنوات والمنصات
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advertisingServices.map((service, index) => (
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
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2 text-sm">المنصات:</h4>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {service.platforms.map((platform, platIndex) => (
                        <span
                          key={platIndex}
                          className="text-xs bg-gold/10 text-gold px-2 py-1 rounded-full"
                        >
                          {platform}
                        </span>
                      ))}
                    </div>
                    <div className="text-gold font-semibold text-sm">
                      الوصول: {service.reach}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Types Section */}
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
              أنواع الحملات الإعلانية
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نصمم حملات إعلانية متنوعة تناسب مختلف الأهداف التسويقية
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {campaignTypes.map((campaign, index) => (
              <motion.div
                key={index}
                className="card p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold mb-3 text-gray-800">
                  {campaign.type}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {campaign.description}
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2 text-sm">الأهداف:</h4>
                  <ul className="space-y-1">
                    {campaign.objectives.map((objective, objIndex) => (
                      <li key={objIndex} className="text-sm text-gray-600 flex items-center">
                        <CheckCircle className="w-3 h-3 text-gold mr-2 rtl:ml-2 rtl:mr-0 flex-shrink-0" />
                        {objective}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-gold font-semibold text-sm">
                  المدة: {campaign.duration}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advertising Channels Section */}
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
              قنوات الإعلان
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نوفر قنوات إعلانية متنوعة لضمان وصول رسالتك إلى الجمهور المناسب
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advertisingChannels.map((channel, index) => (
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
                <div className="text-gold font-semibold text-sm">
                  {channel.reach}
                </div>
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
              نحدد معايير واضحة لضمان نجاح شراكة الدعاية والإعلان
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

      {/* Successful Campaigns Section */}
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
              حملات إعلانية ناجحة
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              اكتشف بعض الحملات الإعلانية الناجحة التي نفذناها بالشراكة مع أفضل الوكالات
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successfulCampaigns.map((campaign, index) => (
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
                    src={campaign.image}
                    alt={campaign.campaign}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-gold text-black px-2 py-1 rounded-full text-xs font-bold">
                    {campaign.budget}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gold mb-2">
                    {campaign.campaign}
                  </h3>
                  <p className="text-white text-sm mb-2">
                    {campaign.client}
                  </p>
                  <p className="text-gray-300 text-sm mb-4">
                    {campaign.description}
                  </p>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400 text-xs">
                      {campaign.type}
                    </span>
                  </div>
                  <div className="text-gold font-bold flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0" />
                    {campaign.achievement}
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
              title="ابدأ شراكة الدعاية والإعلان الآن"
              subtitle="تواصل معنا لمناقشة كيف يمكننا تطوير حملات إعلانية مؤثرة تحقق أهدافك التسويقية"
              partnershipOptions={serviceOptions}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
