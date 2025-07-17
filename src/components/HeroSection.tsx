'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Play, ArrowRight, Camera, Star, Users, Award } from 'lucide-react'

const HeroSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const heroStats = [
    { number: '500+', label: 'عميل راضٍ', icon: Users },
    { number: '1000+', label: 'مشروع مكتمل', icon: Award },
    { number: '15+', label: 'سنة خبرة', icon: Star },
    { number: '50+', label: 'جائزة', icon: Star },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&h=1080&fit=crop"
              alt="Hero Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
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
              منصتك الشاملة
              <br />
              <span className="text-white">للتميز والانتشار</span>
            </motion.h1>

            <motion.p
              className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              نحول أفكارك إلى واقع مؤثر بأعلى معايير الجودة والاحترافية
              <br />
              مع فريق من الخبراء المتخصصين في الإنتاج والتسويق الرقمي
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <Link href="/clients" className="btn-primary text-lg px-8 py-4">
                ابدأ الآن
                <ArrowRight className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0" />
              </Link>
              
              <button
                onClick={() => setIsVideoPlaying(true)}
                className="btn-outline text-lg px-8 py-4 flex items-center"
              >
                <Play className="w-5 h-5 ml-2 rtl:mr-2 rtl:ml-0" />
                شاهد الفيديو التعريفي
              </button>
            </motion.div>

            {/* Hero Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              {heroStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-gold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm md:text-base">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
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
    </div>
  )
}

export default HeroSection 