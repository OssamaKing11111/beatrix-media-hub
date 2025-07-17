'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { TrendingUp, Target, BarChart3, Megaphone, Star, ArrowRight, CheckCircle, Zap } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export default function DigitalMarketingCompaniesPage() {
  const services = [
    {
      icon: TrendingUp,
      title: 'تسويق شركات التسويق الرقمي',
      description: 'حملات متخصصة لوكالات التسويق الرقمي'
    },
    {
      icon: Target,
      title: 'استهداف العملاء المحتملين',
      description: 'استراتيجيات دقيقة لجذب الشركات الباحثة عن خدمات تسويقية'
    },
    {
      icon: BarChart3,
      title: 'عرض النتائج والإحصائيات',
      description: 'تسليط الضوء على نجاحات وإنجازات الوكالة'
    },
    {
      icon: Megaphone,
      title: 'بناء السمعة المهنية',
      description: 'تعزيز مكانة الوكالة كخبير في التسويق الرقمي'
    }
  ]

  const clientLogos = [
    {
      name: 'ديجيتال ماركتنج برو',
      logo: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=120&h=80&fit=crop',
      description: 'وكالة تسويق رقمي رائدة'
    },
    {
      name: 'سوشيال ميديا إكسبرتس',
      logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=80&fit=crop',
      description: 'متخصصة في وسائل التواصل الاجتماعي'
    },
    {
      name: 'كريتيف أدز إيجنسي',
      logo: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&h=80&fit=crop',
      description: 'إبداع في الحملات الإعلانية'
    },
    {
      name: 'جروث هاكرز',
      logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=120&h=80&fit=crop',
      description: 'خبراء نمو الأعمال الرقمية'
    }
  ]

  const digitalServices = [
    {
      name: 'إدارة وسائل التواصل',
      icon: '📱',
      description: 'إدارة احترافية لحسابات التواصل الاجتماعي',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop',
      growth: '+250%'
    },
    {
      name: 'الإعلانات المدفوعة',
      icon: '💰',
      description: 'حملات إعلانية مدفوعة عالية الأداء',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop',
      growth: '+180%'
    },
    {
      name: 'تحسين محركات البحث',
      icon: '🔍',
      description: 'تحسين ظهور المواقع في نتائج البحث',
      image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=300&h=200&fit=crop',
      growth: '+320%'
    },
    {
      name: 'التسويق بالمحتوى',
      icon: '📝',
      description: 'إنتاج محتوى تسويقي مؤثر وجذاب',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop',
      growth: '+200%'
    }
  ]

  const marketingMetrics = [
    {
      metric: 'معدل التحويل',
      value: '15.8%',
      change: '+45%',
      icon: '📈'
    },
    {
      metric: 'تكلفة الاكتساب',
      value: '25 ريال',
      change: '-30%',
      icon: '💸'
    },
    {
      metric: 'العائد على الاستثمار',
      value: '420%',
      change: '+85%',
      icon: '💎'
    },
    {
      metric: 'معدل المشاركة',
      value: '8.5%',
      change: '+120%',
      icon: '❤️'
    }
  ]

  const successStories = [
    {
      client: 'ديجيتال ماركتنج برو',
      challenge: 'جذب عملاء جدد في سوق تنافسي',
      solution: 'حملة تسويق متكاملة تبرز خبرات الوكالة ونجاحاتها',
      result: '50 عميل جديد خلال 3 أشهر',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
    },
    {
      client: 'سوشيال ميديا إكسبرتس',
      challenge: 'تعزيز السمعة المهنية في السوق',
      solution: 'استراتيجية محتوى تعليمي وعرض دراسات حالة',
      result: 'زيادة 300% في طلبات الخدمة',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop'
    }
  ]

  const serviceOptions = [
    { value: 'agency-marketing', label: 'تسويق وكالات التسويق الرقمي' },
    { value: 'lead-generation', label: 'جذب العملاء المحتملين' },
    { value: 'reputation-building', label: 'بناء السمعة المهنية' },
    { value: 'case-studies', label: 'عرض دراسات الحالة' },
    { value: 'thought-leadership', label: 'القيادة الفكرية' },
    { value: 'competitive-analysis', label: 'التحليل التنافسي' },
    { value: 'performance-showcase', label: 'عرض النتائج والأداء' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop"
            alt="Digital Marketing Companies Hero"
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
                rotate: [0, 360]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <TrendingUp className="w-20 h-20 text-gold" />
            </motion.div>

            <h1 className="heading-1 mb-6 text-gradient-gold">
              تسويق متخصص لوكالات
              <br />
              <span className="text-white">التسويق الرقمي والإعلان</span>
            </h1>

            <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
              نساعد وكالات التسويق الرقمي في جذب عملاء جدد وبناء سمعة قوية
              <br />
              من خلال استراتيجيات تسويقية متقدمة وعرض نجاحاتها بطريقة مؤثرة
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="#contact" className="btn-primary text-lg px-8 py-4">
                ابدأ نمو وكالتك
                <ArrowRight className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0" />
              </Link>
              <Link href="#metrics" className="btn-outline border-white text-white hover:bg-white hover:text-gold text-lg px-8 py-4">
                شاهد النتائج
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
              خدماتنا لوكالات التسويق الرقمي
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم حلولاً تسويقية متخصصة تساعد وكالات التسويق في النمو والتميز
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

      {/* Marketing Metrics Section */}
      <section id="metrics" className="section-padding">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-6 text-gradient-gold">
              مؤشرات الأداء التي نحققها
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نتائج حقيقية ومؤشرات أداء متميزة لوكالات التسويق الرقمي
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketingMetrics.map((metric, index) => (
              <motion.div
                key={index}
                className="card p-6 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-4">{metric.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">
                  {metric.metric}
                </h3>
                <div className="text-3xl font-bold text-gold mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-green-600 font-semibold">
                  {metric.change}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Services Section */}
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
              خدمات التسويق الرقمي التي نروج لها
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              خبرة واسعة في تسويق مختلف خدمات التسويق الرقمي
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {digitalServices.map((service, index) => (
              <motion.div
                key={index}
                className="card overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative h-40">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4 text-3xl">
                    {service.icon}
                  </div>
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    {service.growth}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {service.description}
                  </p>
                </div>
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
              عملاؤنا من وكالات التسويق الرقمي
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نفتخر بثقة أبرز وكالات التسويق الرقمي في المنطقة
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
              قصص نجاح في التسويق الرقمي
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              كيف ساعدنا وكالات التسويق الرقمي في تحقيق نمو استثنائي
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
              title="ابدأ نمو وكالتك الآن"
              subtitle="تواصل معنا لمناقشة كيف يمكننا مساعدة وكالة التسويق الرقمي الخاصة بك في النمو والتميز"
              serviceOptions={serviceOptions}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
