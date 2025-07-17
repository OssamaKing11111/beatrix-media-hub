'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Play, Film, Sparkles, Zap, Star, ArrowRight, CheckCircle, Camera } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export default function CinematicIntroPage() {
  const introFeatures = [
    {
      icon: Film,
      title: 'جودة سينمائية 4K',
      description: 'إنتاج بدقة عالية تصل إلى 4K مع تقنيات التصوير السينمائي'
    },
    {
      icon: Sparkles,
      title: 'مؤثرات بصرية متقدمة',
      description: 'استخدام أحدث تقنيات المؤثرات البصرية والرسوم المتحركة'
    },
    {
      icon: Zap,
      title: 'تصميم مخصص',
      description: 'كل مقدمة مصممة خصيصاً لتعكس هوية علامتك التجارية'
    },
    {
      icon: Camera,
      title: 'موسيقى تصويرية أصلية',
      description: 'تأليف موسيقي أصلي يتناسب مع طبيعة علامتك التجارية'
    }
  ]

  const introStyles = [
    {
      name: 'المقدمة الكلاسيكية',
      description: 'أسلوب أنيق وراقي مناسب للشركات الكبرى',
      image: 'https://images.unsplash.com/photo-1489599904472-af35ff2c7c3f?w=400&h=300&fit=crop',
      duration: '15-30 ثانية',
      price: 'من 5000 ريال'
    },
    {
      name: 'المقدمة الحديثة',
      description: 'تصميم عصري مع حركات ديناميكية',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop',
      duration: '20-45 ثانية',
      price: 'من 7000 ريال'
    },
    {
      name: 'المقدمة التفاعلية',
      description: 'مؤثرات تفاعلية وحركات ثلاثية الأبعاد',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop',
      duration: '30-60 ثانية',
      price: 'من 10000 ريال'
    },
    {
      name: 'المقدمة السينمائية',
      description: 'إنتاج سينمائي كامل مع قصة مصورة',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=300&fit=crop',
      duration: '60-120 ثانية',
      price: 'من 15000 ريال'
    }
  ]

  const productionSteps = [
    {
      step: 1,
      title: 'جلسة العصف الذهني',
      description: 'نناقش رؤيتك وأهدافك لفهم احتياجاتك بدقة',
      icon: '💡'
    },
    {
      step: 2,
      title: 'تطوير المفهوم',
      description: 'نضع مفهوماً إبداعياً يعكس هوية علامتك التجارية',
      icon: '🎨'
    },
    {
      step: 3,
      title: 'إنشاء القصة المصورة',
      description: 'نرسم كل مشهد بالتفصيل قبل بدء الإنتاج',
      icon: '📝'
    },
    {
      step: 4,
      title: 'الإنتاج والتصوير',
      description: 'تنفيذ المشروع باستخدام أحدث التقنيات',
      icon: '🎬'
    },
    {
      step: 5,
      title: 'المونتاج والمؤثرات',
      description: 'إضافة المؤثرات البصرية والصوتية',
      icon: '✨'
    },
    {
      step: 6,
      title: 'المراجعة والتسليم',
      description: 'مراجعة نهائية وتسليم المشروع بأعلى جودة',
      icon: '✅'
    }
  ]

  const clientShowcase = [
    {
      client: 'تك سوليوشنز',
      industry: 'التكنولوجيا',
      description: 'مقدمة حديثة تعكس الابتكار التقني',
      image: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=300&h=200&fit=crop',
      duration: '25 ثانية'
    },
    {
      client: 'أكاديمية المستقبل',
      industry: 'التعليم',
      description: 'مقدمة ملهمة تحفز على التعلم',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=300&h=200&fit=crop',
      duration: '30 ثانية'
    },
    {
      client: 'مستشفى النيل الطبي',
      industry: 'الطب',
      description: 'مقدمة تبعث الثقة والطمأنينة',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=300&h=200&fit=crop',
      duration: '20 ثانية'
    }
  ]

  const serviceOptions = [
    { value: 'classic-intro', label: 'المقدمة الكلاسيكية' },
    { value: 'modern-intro', label: 'المقدمة الحديثة' },
    { value: 'interactive-intro', label: 'المقدمة التفاعلية' },
    { value: 'cinematic-intro', label: 'المقدمة السينمائية' },
    { value: 'custom-intro', label: 'مقدمة مخصصة' },
    { value: 'consultation', label: 'استشارة مجانية' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1489599904472-af35ff2c7c3f?w=1920&h=1080&fit=crop"
            alt="Cinematic Intro Hero"
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
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <Film className="w-20 h-20 text-gold" />
            </motion.div>

            <h1 className="heading-1 mb-6 text-gradient-gold">
              مقدمات سينمائية احترافية
              <br />
              <span className="text-white">تترك انطباعاً لا يُنسى</span>
            </h1>

            <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
              اجعل علامتك التجارية تبدأ بقوة مع مقدمات سينمائية مذهلة
              <br />
              مصممة خصيصاً لتعكس هويتك وتجذب انتباه جمهورك
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="#contact" className="btn-primary text-lg px-8 py-4">
                اطلب مقدمتك الآن
                <ArrowRight className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0" />
              </Link>
              <Link href="#showcase" className="btn-outline border-white text-white hover:bg-white hover:text-gold text-lg px-8 py-4">
                <Play className="w-5 h-5 ml-2 rtl:mr-2 rtl:ml-0" />
                شاهد أعمالنا
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
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
              مميزات مقدماتنا السينمائية
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم مقدمات سينمائية بأعلى معايير الجودة والاحترافية
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {introFeatures.map((feature, index) => (
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
                  <feature.icon className="w-12 h-12 text-gold" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Styles Section */}
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
              أنواع المقدمات السينمائية
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              اختر النوع الذي يناسب علامتك التجارية وميزانيتك
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {introStyles.map((style, index) => (
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
                    src={style.image}
                    alt={style.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute top-4 right-4 bg-gold text-black px-2 py-1 rounded-full text-xs font-bold">
                    {style.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-800 mb-2">
                    {style.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {style.description}
                  </p>
                  <div className="text-gold font-bold text-lg">
                    {style.price}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Process Section */}
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
              عملية الإنتاج
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نتبع منهجية واضحة لضمان تحقيق رؤيتك بأفضل شكل ممكن
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productionSteps.map((step, index) => (
              <motion.div
                key={step.step}
                className="card p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center text-black text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <div className="text-4xl mb-4">{step.icon}</div>
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

      {/* Client Showcase Section */}
      <section id="showcase" className="section-padding">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-6 text-gradient-gold">
              أعمالنا المميزة
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              اكتشف بعض المقدمات السينمائية التي أنتجناها لعملائنا
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientShowcase.map((project, index) => (
              <motion.div
                key={index}
                className="card overflow-hidden"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.client}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-xs bg-gold text-black px-2 py-1 rounded-full inline-block mb-2">
                      {project.duration}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-800 mb-2">
                    {project.client}
                  </h3>
                  <p className="text-sm text-gold mb-2">
                    {project.industry}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {project.description}
                  </p>
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
              title="اطلب مقدمتك السينمائية الآن"
              subtitle="تواصل معنا لمناقشة رؤيتك وكيف يمكننا إنتاج مقدمة سينمائية مذهلة لعلامتك التجارية"
              serviceOptions={serviceOptions}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
