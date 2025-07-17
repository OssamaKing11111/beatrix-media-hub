'use client'

import { motion } from 'framer-motion'
import { ParallaxGallery } from '@/components/ParallaxGallery'
import { Rocket } from 'lucide-react'

const startupShowcases = [
  {
    image: '/images/startups/tech-startup.jpg',
    title: 'تطبيقات تقنية مبتكرة',
    description: 'منصات وتطبيقات تقنية ثورية تغير مفاهيم التفاعل الرقمي وتحل مشكلات حقيقية'
  },
  {
    image: '/images/startups/fintech.jpg',
    title: 'حلول مالية ذكية',
    description: 'خدمات مالية رقمية تسهل المعاملات وتوفر حلولاً مبتكرة للدفع والتحويل'
  },
  {
    image: '/images/startups/ecommerce.jpg',
    title: 'تجارة إلكترونية متطورة',
    description: 'منصات بيع وشراء متقدمة تجمع بين سهولة الاستخدام وقوة الأداء'
  },
  {
    image: '/images/startups/ai-solutions.jpg',
    title: 'حلول الذكاء الاصطناعي',
    description: 'تطبيقات ذكية تستخدم أحدث تقنيات الذكاء الاصطناعي لتحسين تجربة المستخدم'
  }
]

export default function StartupsPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section with Futuristic Elements */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-indigo-900/20" />
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              background: [
                'radial-gradient(circle at 0% 0%, #4F46E5 0%, transparent 50%)',
                'radial-gradient(circle at 100% 100%, #4F46E5 0%, transparent 50%)',
                'radial-gradient(circle at 0% 100%, #4F46E5 0%, transparent 50%)',
                'radial-gradient(circle at 100% 0%, #4F46E5 0%, transparent 50%)'
              ]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Animated Icon */}
            <motion.div
              className="flex justify-center mb-8"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Rocket className="w-20 h-20 text-indigo-400" />
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
                مستقبل الأعمال الناشئة
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              نساعد الشركات الناشئة على النمو وتحقيق رؤيتها المستقبلية
            </p>
          </motion.div>
        </div>

        {/* Animated Lines */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent w-full"
              style={{ top: `${20 * i}%` }}
              animate={{
                x: [-1000, 1000],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </section>

      {/* Parallax Gallery with Custom Theme */}
      <section className="relative py-20">
        {/* Custom Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-950/20 to-black" />
          {/* Animated Dots */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-indigo-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-center text-white mb-20"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
                قصص نجاح
              </span>{' '}
              ملهمة
            </motion.h2>

            <ParallaxGallery 
              items={startupShowcases} 
              isRtl={true} 
            />
          </div>
        </div>
      </section>
    </div>
  )
}
