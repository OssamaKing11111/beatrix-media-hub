'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Plane, MapPin, Camera, Users, Star, ArrowRight, CheckCircle, Globe } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export default function TourismCompaniesPage() {
  const services = [
    {
      icon: Plane,
      title: 'إعلانات السفر والسياحة',
      description: 'حملات إعلانية جذابة تبرز أجمل الوجهات السياحية'
    },
    {
      icon: Camera,
      title: 'التصوير السياحي',
      description: 'تصوير احترافي للمعالم والفنادق والتجارب السياحية'
    },
    {
      icon: Globe,
      title: 'التسويق الدولي',
      description: 'استهداف السياح من مختلف دول العالم'
    },
    {
      icon: Users,
      title: 'تسويق التجارب',
      description: 'التركيز على التجارب الفريدة والذكريات الجميلة'
    }
  ]

  const clientLogos = [
    {
      name: 'سياحة الشرق الأوسط',
      logo: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=120&h=80&fit=crop',
      description: 'رائدة في السياحة الثقافية'
    },
    {
      name: 'مجموعة الفنادق الذهبية',
      logo: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=120&h=80&fit=crop',
      description: 'سلسلة فنادق فاخرة'
    },
    {
      name: 'شركة المغامرات السياحية',
      logo: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=120&h=80&fit=crop',
      description: 'متخصصة في السياحة المغامرة'
    },
    {
      name: 'وكالة السفر الحديثة',
      logo: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=120&h=80&fit=crop',
      description: 'خدمات سفر متكاملة'
    }
  ]

  const destinations = [
    {
      name: 'الأهرامات وأبو الهول',
      image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=400&h=300&fit=crop',
      description: 'عجائب الدنيا السبع في مصر'
    },
    {
      name: 'البحر الأحمر',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop',
      description: 'جنة الغوص والشعاب المرجانية'
    },
    {
      name: 'الأقصر وأسوان',
      image: 'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=400&h=300&fit=crop',
      description: 'متحف مفتوح للحضارة الفرعونية'
    },
    {
      name: 'سيناء والصحراء',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      description: 'مغامرات الصحراء والجبال'
    }
  ]

  const successStories = [
    {
      client: 'سياحة الشرق الأوسط',
      challenge: 'زيادة عدد السياح الأجانب',
      solution: 'حملة تسويق دولية متعددة اللغات',
      result: 'زيادة 80% في الحجوزات الدولية',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop'
    },
    {
      client: 'مجموعة الفنادق الذهبية',
      challenge: 'تحسين معدل الإشغال',
      solution: 'استراتيجية تسويق رقمي مع عروض مخصصة',
      result: 'وصول معدل الإشغال إلى 95%',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop'
    }
  ]

  const serviceOptions = [
    { value: 'destination-marketing', label: 'تسويق الوجهات السياحية' },
    { value: 'hotel-promotion', label: 'ترويج الفنادق والمنتجعات' },
    { value: 'travel-packages', label: 'تسويق الباقات السياحية' },
    { value: 'digital-marketing', label: 'التسويق الرقمي' },
    { value: 'content-creation', label: 'إنتاج المحتوى السياحي' },
    { value: 'photography', label: 'التصوير السياحي' },
    { value: 'international-marketing', label: 'التسويق الدولي' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&h=1080&fit=crop"
            alt="Tourism Companies Hero"
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
                y: [0, -15, 0],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Plane className="w-20 h-20 text-gold" />
            </motion.div>

            <h1 className="heading-1 mb-6 text-gradient-gold">
              تسويق إبداعي للسياحة
              <br />
              <span className="text-white">يجذب المسافرين من العالم</span>
            </h1>

            <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
              نساعد شركات السياحة والفنادق في إبراز جمال وجهاتها
              <br />
              وجذب السياح من جميع أنحاء العالم
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="#contact" className="btn-primary text-lg px-8 py-4">
                ابدأ حملتك السياحية
                <ArrowRight className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0" />
              </Link>
              <Link href="#destinations" className="btn-outline border-white text-white hover:bg-white hover:text-gold text-lg px-8 py-4">
                استكشف أعمالنا
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
              خدماتنا المتخصصة للسياحة
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم حلولاً تسويقية مبتكرة تناسب صناعة السياحة والضيافة
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

      {/* Destinations Showcase */}
      <section id="destinations" className="section-padding">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-6 text-gradient-gold">
              وجهات سياحية رائعة روجنا لها
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              اكتشف بعض الوجهات السياحية المذهلة التي ساعدنا في تسويقها
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations.map((destination, index) => (
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
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-bold text-lg mb-1">
                      {destination.name}
                    </h3>
                    <p className="text-sm text-gray-200">
                      {destination.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
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
              عملاؤنا في قطاع السياحة
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نفتخر بشراكتنا مع أبرز شركات السياحة والضيافة
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
              قصص نجاح في السياحة
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              كيف ساعدنا شركات السياحة في تحقيق أهدافها وزيادة عدد زوارها
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
              title="ابدأ حملتك السياحية الآن"
              subtitle="تواصل معنا لمناقشة كيف يمكننا مساعدة شركتك السياحية في جذب المزيد من الزوار"
              serviceOptions={serviceOptions}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
