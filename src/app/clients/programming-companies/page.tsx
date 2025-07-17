'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Code, Smartphone, Globe, Zap, Star, ArrowRight, CheckCircle, Monitor } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export default function ProgrammingCompaniesPage() {
  const services = [
    {
      icon: Code,
      title: 'تسويق البرمجيات',
      description: 'حملات متخصصة لتطبيقات الويب والموبايل'
    },
    {
      icon: Smartphone,
      title: 'ترويج التطبيقات',
      description: 'استراتيجيات تسويق فعالة لزيادة التحميلات'
    },
    {
      icon: Globe,
      title: 'التسويق التقني',
      description: 'محتوى تقني متخصص يجذب المطورين والشركات'
    },
    {
      icon: Monitor,
      title: 'عروض المنتجات التقنية',
      description: 'فيديوهات توضيحية احترافية للحلول البرمجية'
    }
  ]

  const clientLogos = [
    {
      name: 'تك سوليوشنز',
      logo: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=120&h=80&fit=crop',
      description: 'شركة تطوير برمجيات رائدة'
    },
    {
      name: 'ديجيتال إنوفيشن',
      logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=120&h=80&fit=crop',
      description: 'متخصصة في الحلول الرقمية'
    },
    {
      name: 'كود ماسترز',
      logo: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=120&h=80&fit=crop',
      description: 'فريق مطورين محترفين'
    },
    {
      name: 'سمارت أبس',
      logo: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=120&h=80&fit=crop',
      description: 'تطوير تطبيقات الهواتف الذكية'
    }
  ]

  const techStack = [
    {
      name: 'تطوير الويب',
      icon: '🌐',
      technologies: ['React', 'Next.js', 'Vue.js', 'Angular'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop'
    },
    {
      name: 'تطبيقات الموبايل',
      icon: '📱',
      technologies: ['React Native', 'Flutter', 'iOS', 'Android'],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=200&fit=crop'
    },
    {
      name: 'الذكاء الاصطناعي',
      icon: '🤖',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI'],
      image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=300&h=200&fit=crop'
    },
    {
      name: 'البلوك تشين',
      icon: '⛓️',
      technologies: ['Ethereum', 'Solidity', 'Web3', 'DeFi'],
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=300&h=200&fit=crop'
    }
  ]

  const successStories = [
    {
      client: 'تك سوليوشنز',
      challenge: 'إطلاق منصة SaaS جديدة في السوق',
      solution: 'حملة تسويق رقمي متكاملة مع محتوى تقني متخصص',
      result: '10,000 مستخدم جديد في الشهر الأول',
      image: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=400&h=300&fit=crop'
    },
    {
      client: 'سمارت أبس',
      challenge: 'زيادة تحميلات التطبيق الجديد',
      solution: 'استراتيجية ASO وحملات إعلانية مستهدفة',
      result: 'مليون تحميل خلال 6 أشهر',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop'
    }
  ]

  const serviceOptions = [
    { value: 'software-marketing', label: 'تسويق البرمجيات' },
    { value: 'app-promotion', label: 'ترويج التطبيقات' },
    { value: 'saas-marketing', label: 'تسويق منصات SaaS' },
    { value: 'tech-content', label: 'إنتاج المحتوى التقني' },
    { value: 'developer-outreach', label: 'التواصل مع المطورين' },
    { value: 'product-demos', label: 'عروض المنتجات التوضيحية' },
    { value: 'technical-writing', label: 'الكتابة التقنية' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&h=1080&fit=crop"
            alt="Programming Companies Hero"
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
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Code className="w-20 h-20 text-gold" />
            </motion.div>

            <h1 className="heading-1 mb-6 text-gradient-gold">
              تسويق تقني متخصص
              <br />
              <span className="text-white">لشركات البرمجة والتكنولوجيا</span>
            </h1>

            <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
              نساعد شركات البرمجة والتكنولوجيا في الوصول إلى جمهورها المستهدف
              <br />
              من خلال محتوى تقني متخصص وحملات تسويقية مبتكرة
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="#contact" className="btn-primary text-lg px-8 py-4">
                ابدأ مشروعك التقني
                <ArrowRight className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0" />
              </Link>
              <Link href="#tech-stack" className="btn-outline border-white text-white hover:bg-white hover:text-gold text-lg px-8 py-4">
                استكشف خبراتنا
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
              خدماتنا للشركات التقنية
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم حلولاً تسويقية متخصصة تناسب طبيعة الشركات التقنية والبرمجية
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

      {/* Tech Stack Section */}
      <section id="tech-stack" className="section-padding">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-6 text-gradient-gold">
              التقنيات التي نسوق لها
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              خبرة واسعة في تسويق مختلف التقنيات والمنصات البرمجية
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                className="card overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative h-32">
                  <Image
                    src={tech.image}
                    alt={tech.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4 text-4xl">
                    {tech.icon}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 mb-3">
                    {tech.name}
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {tech.technologies.map((technology, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs bg-gold/10 text-gold px-2 py-1 rounded-full"
                      >
                        {technology}
                      </span>
                    ))}
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
              عملاؤنا من الشركات التقنية
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نفتخر بثقة أبرز الشركات التقنية والبرمجية في المنطقة
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
              قصص نجاح تقنية
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              كيف ساعدنا الشركات التقنية في تحقيق أهدافها التسويقية
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
              title="ابدأ مشروعك التقني الآن"
              subtitle="تواصل معنا لمناقشة كيف يمكننا مساعدة شركتك التقنية في الوصول إلى جمهورها المستهدف"
              serviceOptions={serviceOptions}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
