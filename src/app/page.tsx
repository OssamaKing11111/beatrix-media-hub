'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Play, 
  Star, 
  ArrowRight, 
  Camera, 
  Zap, 
  Users, 
  Award, 
  TrendingUp,
  CheckCircle,
  Quote,
  ChevronRight
} from 'lucide-react'
import { clientLogos, partnerLogos, testimonials, features, workSteps } from '@/config/content'
import FeaturedClientsMarquee from '@/components/FeaturedClientsMarquee'
import { useTranslation } from '@/components/TranslationProvider'

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const { currentLanguage } = useTranslation()

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Complete translation for EVERY word
  const content = {
    hero: {
      title: {
        ar: 'منصتك الشاملة للتميز والانتشار',
        en: 'Your Complete Platform for Excellence and Reach'
      },
      subtitle: {
        ar: 'نحول أفكارك إلى واقع مؤثر بأعلى معايير الجودة والاحترافية مع فريق من الخبراء المتخصصين في الإنتاج والتسويق الرقمي',
        en: 'We transform your ideas into impactful reality with the highest standards of quality and professionalism with a team of experts specialized in production and digital marketing'
      },
      getStarted: {
        ar: 'ابدأ الآن',
        en: 'Get Started'
      },
      watchVideo: {
        ar: 'شاهد الفيديو التعريفي',
        en: 'Watch Intro Video'
      }
    },
    stats: {
      satisfiedClients: {
        ar: 'عميل راضٍ',
        en: 'Satisfied Clients'
      },
      completedProjects: {
        ar: 'مشروع مكتمل',
        en: 'Completed Projects'
      },
      yearsExperience: {
        ar: 'سنة خبرة',
        en: 'Years Experience'
      },
      awards: {
        ar: 'جائزة',
        en: 'Awards'
      }
    },
    whyChoose: {
      title: {
        ar: 'لماذا تختار بياتريكس ون؟',
        en: 'Why Choose Beatrix One?'
      },
      subtitle: {
        ar: 'نقدم حلولاً متكاملة تلبي احتياجات عملائنا وتحقق أهدافهم',
        en: 'We provide integrated solutions that meet our clients needs and achieve their goals'
      }
    }
  }

  const heroStats = [
    { number: '500+', label: content.stats.satisfiedClients[currentLanguage], icon: Users },
    { number: '1000+', label: content.stats.completedProjects[currentLanguage], icon: Award },
    { number: '15+', label: content.stats.yearsExperience[currentLanguage], icon: TrendingUp },
    { number: '50+', label: content.stats.awards[currentLanguage], icon: Star },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-black/60 z-10" />
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/cinematic-reel.mp4" type="video/mp4" />
            </video>
            {/* Grain Effect */}
            <div 
              className="absolute inset-0 z-20 opacity-20 object-cover"
              style={{ 
                backgroundImage: 'url(/textures/noise.png)', 
                backgroundRepeat: 'repeat',
                mixBlendMode: 'overlay' 
              }} 
            />
            <div className="hero-overlay" />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container-custom text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            {/* Cinematic Camera Animation */}
            <motion.div
              className="flex justify-center mb-8"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <div className="cinematic-camera">
                <Camera className="w-20 h-20 text-gold" />
              </div>
            </motion.div>

            <motion.h1
              className="heading-1 mb-6 text-gradient-gold"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {content.hero.title[currentLanguage]}
            </motion.h1>

            <motion.p
              className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              {content.hero.subtitle[currentLanguage]}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <Link href="/clients" className="btn-primary text-lg px-8 py-4">
                {content.hero.getStarted[currentLanguage]}
                <ArrowRight className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0" />
              </Link>
              
              <button
                onClick={() => setIsVideoPlaying(true)}
                className="btn-outline text-lg px-8 py-4 flex items-center"
              >
                <Play className="w-5 h-5 ml-2 rtl:mr-2 rtl:ml-0" />
                {content.hero.watchVideo[currentLanguage]}
              </button>
            </motion.div>

            {/* Hero Stats */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              {heroStats.map((stat, index) => (
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

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-pulse" />
          </div>
        </motion.div>
      </section>

      {/* Featured Clients Marquee */}
      <FeaturedClientsMarquee />

      {/* Film Strip - Client Logos */}
      <section className="film-strip py-8">
        <div className="relative overflow-hidden">
          <motion.div
            className="flex space-x-8 rtl:space-x-reverse"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            {[...clientLogos, ...clientLogos].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 w-24 h-16 bg-white rounded-lg flex items-center justify-center p-2"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={80}
                  height={50}
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
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
              {content.whyChoose.title[currentLanguage]}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {content.whyChoose.subtitle[currentLanguage]}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="card p-8 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-6xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {feature.title[currentLanguage]}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description[currentLanguage]}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
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
              كيف نعمل؟
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نتبع منهجية واضحة ومدروسة لضمان تحقيق أفضل النتائج لعملائنا
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workSteps.map((step, index) => (
              <motion.div
                key={step.step}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <div className="text-4xl">{step.icon}</div>
                  {index < workSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-gold to-transparent" />
                  )}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {step.title.ar}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description.ar}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              ماذا يقول عملاؤنا؟
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              آراء وتجارب عملائنا الكرام الذين وثقوا بنا وحققنا معهم النجاح
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <Quote className="w-16 h-16 text-gold mx-auto mb-8" />
                
                <blockquote className="text-2xl lg:text-3xl font-light mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse mb-6">
                  <Image
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div className="text-right rtl:text-left">
                    <div className="text-xl font-semibold text-gold">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-gray-300">
                      {testimonials[currentTestimonial].company}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center space-x-1 rtl:space-x-reverse">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-gold fill-current" />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Testimonial Navigation */}
            <div className="flex justify-center space-x-2 rtl:space-x-reverse mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-gold' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
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
              تواصل معنا اليوم واحصل على استشارة مجانية لمشروعك القادم
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
                تواصل معنا الآن
              </Link>
              <Link href="/clients" className="btn-outline border-white text-white hover:bg-white hover:text-gold text-lg px-8 py-4">
                استكشف خدماتنا
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setIsVideoPlaying(false)}
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src="https://player.vimeo.com/video/123456789?autoplay=1"
                className="w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
              <button
                onClick={() => setIsVideoPlaying(false)}
                className="absolute top-4 right-4 text-white hover:text-gold transition-colors duration-300"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
console.log("SUPABASE_URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
