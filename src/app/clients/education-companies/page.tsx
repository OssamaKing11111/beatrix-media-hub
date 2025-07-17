'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { GraduationCap, BookOpen, Users, Award, Star, ArrowRight, CheckCircle, Brain } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export default function EducationCompaniesPage() {
  const services = [
    {
      icon: GraduationCap,
      title: 'تسويق المؤسسات التعليمية',
      description: 'حملات شاملة للجامعات والمعاهد والمدارس'
    },
    {
      icon: BookOpen,
      title: 'ترويج الدورات التدريبية',
      description: 'استراتيجيات فعالة لزيادة التسجيل في الدورات'
    },
    {
      icon: Brain,
      title: 'التسويق التعليمي الرقمي',
      description: 'منصات التعلم الإلكتروني والتعليم عن بُعد'
    },
    {
      icon: Award,
      title: 'بناء السمعة الأكاديمية',
      description: 'تعزيز مكانة المؤسسة التعليمية وسمعتها'
    }
  ]

  const clientLogos = [
    {
      name: 'أكاديمية المستقبل',
      logo: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=120&h=80&fit=crop',
      description: 'رائدة في التعليم التقني'
    },
    {
      name: 'معهد اللغات الحديث',
      logo: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=120&h=80&fit=crop',
      description: 'متخصص في تعليم اللغات'
    },
    {
      name: 'جامعة العلوم التطبيقية',
      logo: 'https://images.unsplash.com/photo-1562774053-701939374585?w=120&h=80&fit=crop',
      description: 'تعليم جامعي متميز'
    },
    {
      name: 'مركز التدريب المهني',
      logo: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=120&h=80&fit=crop',
      description: 'تطوير المهارات المهنية'
    }
  ]

  const educationPrograms = [
    {
      name: 'البرامج الجامعية',
      icon: '🎓',
      description: 'بكالوريوس وماجستير ودكتوراه',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=300&h=200&fit=crop',
      stats: '50+ برنامج'
    },
    {
      name: 'الدورات التدريبية',
      icon: '📚',
      description: 'دورات متخصصة في مختلف المجالات',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop',
      stats: '200+ دورة'
    },
    {
      name: 'التعلم الإلكتروني',
      icon: '💻',
      description: 'منصات تعليمية رقمية متقدمة',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=300&h=200&fit=crop',
      stats: '1000+ طالب'
    },
    {
      name: 'التعليم المهني',
      icon: '🔧',
      description: 'برامج تأهيل مهني متخصصة',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=300&h=200&fit=crop',
      stats: '30+ مهنة'
    }
  ]

  const successStories = [
    {
      client: 'أكاديمية المستقبل',
      challenge: 'زيادة عدد الطلاب المسجلين في البرامج التقنية',
      solution: 'حملة تسويق رقمي مستهدفة مع محتوى تعليمي جذاب',
      result: 'زيادة 150% في التسجيلات',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop'
    },
    {
      client: 'معهد اللغات الحديث',
      challenge: 'التوسع في تقديم دورات اللغة الإنجليزية',
      solution: 'استراتيجية محتوى متعددة القنوات مع شهادات معتمدة',
      result: '500 طالب جديد شهرياً',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop'
    }
  ]

  const serviceOptions = [
    { value: 'university-marketing', label: 'تسويق الجامعات والمعاهد' },
    { value: 'course-promotion', label: 'ترويج الدورات التدريبية' },
    { value: 'online-education', label: 'تسويق التعليم الإلكتروني' },
    { value: 'student-recruitment', label: 'جذب الطلاب' },
    { value: 'academic-branding', label: 'بناء العلامة التجارية الأكاديمية' },
    { value: 'educational-content', label: 'إنتاج المحتوى التعليمي' },
    { value: 'certification-programs', label: 'تسويق برامج الشهادات' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=1080&fit=crop"
            alt="Education Companies Hero"
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
                rotateY: [0, 180, 360]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <GraduationCap className="w-20 h-20 text-gold" />
            </motion.div>

            <h1 className="heading-1 mb-6 text-gradient-gold">
              تسويق تعليمي مبتكر
              <br />
              <span className="text-white">للمؤسسات التعليمية الرائدة</span>
            </h1>

            <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
              نساعد المؤسسات التعليمية في جذب الطلاب وبناء سمعة أكاديمية قوية
              <br />
              من خلال استراتيجيات تسويقية متخصصة في القطاع التعليمي
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="#contact" className="btn-primary text-lg px-8 py-4">
                ابدأ حملتك التعليمية
                <ArrowRight className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0" />
              </Link>
              <Link href="#programs" className="btn-outline border-white text-white hover:bg-white hover:text-gold text-lg px-8 py-4">
                استكشف برامجنا
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
              خدماتنا للمؤسسات التعليمية
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم حلولاً تسويقية شاملة تناسب احتياجات القطاع التعليمي
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

      {/* Education Programs Section */}
      <section id="programs" className="section-padding">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-6 text-gradient-gold">
              البرامج التعليمية التي نسوق لها
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              خبرة واسعة في تسويق مختلف أنواع البرامج والمؤسسات التعليمية
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {educationPrograms.map((program, index) => (
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
                    src={program.image}
                    alt={program.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4 text-4xl">
                    {program.icon}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-gold text-black px-2 py-1 rounded-full text-xs font-bold">
                    {program.stats}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 mb-2">
                    {program.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {program.description}
                  </p>
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
              عملاؤنا من المؤسسات التعليمية
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نفتخر بثقة أبرز المؤسسات التعليمية والأكاديمية في المنطقة
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
              قصص نجاح تعليمية
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              كيف ساعدنا المؤسسات التعليمية في تحقيق أهدافها وزيادة عدد طلابها
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
              title="ابدأ حملتك التعليمية الآن"
              subtitle="تواصل معنا لمناقشة كيف يمكننا مساعدة مؤسستك التعليمية في جذب المزيد من الطلاب"
              serviceOptions={serviceOptions}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
