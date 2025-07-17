'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Play, Film, Camera, Video, Star, ArrowRight, CheckCircle, Award } from 'lucide-react'
import { services } from '@/config/content'

export default function ProductionPage() {
  const productionStats = [
    { number: '500+', label: 'مشروع مكتمل', icon: Film },
    { number: '50+', label: 'عميل راضٍ', icon: Star },
    { number: '15+', label: 'سنة خبرة', icon: Award },
    { number: '100+', label: 'فيديو منتج', icon: Video },
  ]

  const portfolioItems = [
    {
      title: 'مقدمة سينمائية لشركة التكنولوجيا',
      category: 'cinematic-intro',
      image: 'https://images.unsplash.com/photo-1489599904472-af35ff2c7c3f?w=400&h=300&fit=crop',
      duration: '30 ثانية',
      client: 'تك سوليوشنز'
    },
    {
      title: 'إعلان ميداني لشركة الأغذية',
      category: 'field-ads',
      image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=400&h=300&fit=crop',
      duration: '60 ثانية',
      client: 'شركة الأهرام للأغذية'
    },
    {
      title: 'فيديو قصير للتسويق الرقمي',
      category: 'short-videos',
      image: 'https://images.unsplash.com/photo-1551818255-e6e10975cd17?w=400&h=300&fit=crop',
      duration: '15 ثانية',
      client: 'ديجيتال ماركتنج برو'
    },
    {
      title: 'فيلم وثائقي عن التعليم',
      category: 'documentaries',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=300&fit=crop',
      duration: '10 دقائق',
      client: 'أكاديمية المستقبل'
    }
  ]

  const productionProcess = [
    {
      step: 1,
      title: 'التخطيط والإعداد',
      description: 'نبدأ بفهم رؤيتك ووضع خطة إنتاج شاملة',
      icon: '📋'
    },
    {
      step: 2,
      title: 'كتابة السيناريو',
      description: 'نكتب سيناريو مؤثر يحقق أهدافك التسويقية',
      icon: '✍️'
    },
    {
      step: 3,
      title: 'التصوير والإنتاج',
      description: 'فريق محترف ومعدات عالية الجودة',
      icon: '🎬'
    },
    {
      step: 4,
      title: 'المونتاج والتحرير',
      description: 'مونتاج احترافي مع مؤثرات بصرية متقدمة',
      icon: '✂️'
    },
    {
      step: 5,
      title: 'التسليم والنشر',
      description: 'تسليم المشروع بأعلى جودة وجاهز للنشر',
      icon: '🚀'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1489599904472-af35ff2c7c3f?w=1920&h=1080&fit=crop"
            alt="Production Hero"
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
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <Film className="w-24 h-24 text-gold" />
            </motion.div>

            <h1 className="heading-1 mb-6 text-gradient-gold">
              إنتاج احترافي
              <br />
              <span className="text-white">يحول أفكارك إلى واقع مرئي</span>
            </h1>

            <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
              من المقدمات السينمائية إلى الأفلام الوثائقية
              <br />
              نقدم خدمات إنتاج شاملة بأعلى معايير الجودة والاحترافية
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <Link href="#services" className="btn-primary text-lg px-8 py-4">
                استكشف خدماتنا
                <ArrowRight className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0" />
              </Link>
              <Link href="#portfolio" className="btn-outline border-white text-white hover:bg-white hover:text-gold text-lg px-8 py-4">
                <Play className="w-5 h-5 ml-2 rtl:mr-2 rtl:ml-0" />
                شاهد أعمالنا
              </Link>
            </div>

            {/* Production Stats */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              {productionStats.map((stat, index) => (
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
              خدمات الإنتاج الإعلامي
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم مجموعة شاملة من خدمات الإنتاج الإعلامي لتلبية جميع احتياجاتك
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.production.map((service, index) => (
              <motion.div
                key={service.id}
                className="card overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title.ar}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-bold text-lg mb-1">
                      {service.title.ar}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description.ar}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-gold mr-2 rtl:ml-2 rtl:mr-0 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/production/${service.id}`}
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

      {/* Portfolio Section */}
      <section id="portfolio" className="section-padding">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-6 text-gradient-gold">
              معرض أعمالنا
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              اكتشف مجموعة من أفضل أعمالنا في مختلف مجالات الإنتاج الإعلامي
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolioItems.map((item, index) => (
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
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute top-4 right-4 bg-gold text-black px-2 py-1 rounded-full text-xs font-bold">
                    {item.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    العميل: {item.client}
                  </p>
                  <Link
                    href={`/production/${item.category}`}
                    className="text-gold hover:text-gold/80 text-sm font-semibold"
                  >
                    شاهد المزيد →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Process Section */}
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
              عملية الإنتاج لدينا
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              نتبع منهجية واضحة ومدروسة لضمان تحقيق أفضل النتائج في كل مشروع
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {productionProcess.map((step, index) => (
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
                  {index < productionProcess.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-gold to-transparent" />
                  )}
                </div>
                <h3 className="text-lg font-bold mb-3 text-gold">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
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
              هل أنت مستعد لبدء مشروعك الإعلامي؟
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              تواصل معنا اليوم ودعنا نحول رؤيتك إلى إنتاج إعلامي مؤثر ومتميز
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
                ابدأ مشروعك الآن
              </Link>
              <Link href="/clients" className="btn-outline border-white text-white hover:bg-white hover:text-gold text-lg px-8 py-4">
                استكشف خدماتنا
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
