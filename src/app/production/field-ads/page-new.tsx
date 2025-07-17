'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Megaphone } from 'lucide-react'
import { ParallaxGallery } from '@/components/ParallaxGallery'

const advertisingCases = [
  {
    image: '/images/field-ads/case1.jpg',
    title: 'حملة المراكز التجارية',
    description: 'حملة إعلانية ناجحة استهدفت أكبر المراكز التجارية في المنطقة، مع تغطية واسعة وتفاعل جماهيري كبير'
  },
  {
    image: '/images/field-ads/case2.jpg',
    title: 'تسويق المعارض',
    description: 'حملة ترويجية مبتكرة لمعرض تجاري دولي، شملت إعلانات خارجية وتفعيلات ميدانية مميزة'
  },
  {
    image: '/images/field-ads/case3.jpg',
    title: 'الحملات الموسمية',
    description: 'سلسلة إعلانات موسمية متكاملة مع مزيج من الوسائط الإعلانية المتنوعة والتفاعل المباشر مع الجمهور'
  },
  {
    image: '/images/field-ads/case4.jpg',
    title: 'التسويق التجريبي',
    description: 'تجربة تسويقية فريدة جمعت بين الإعلانات التقليدية والتقنيات الحديثة لخلق تجربة لا تُنسى'
  }
]

export default function FieldAdsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="/videos/ads-reel.mp4" type="video/mp4" />
        </video>

        {/* Cinematic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />

        {/* Grain Effect */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(/textures/noise.png)',
            backgroundRepeat: 'repeat',
            mixBlendMode: 'overlay'
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto px-6"
          >
            {/* Icon Animation */}
            <motion.div
              className="flex justify-center mb-8"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Megaphone className="w-20 h-20 text-gold" />
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-gold">
              إعلانات تتخطى الحدود
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              نبتكر تجارب إعلانية تجمع بين الإبداع والتأثير
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg
            className="w-6 h-6 text-gold"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </section>

      {/* Parallax Gallery Section */}
      <section className="relative">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent" />
        
        {/* Content */}
        <div className="relative z-10">
          <div className="container mx-auto px-4 py-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-center text-white mb-20"
            >
              <span className="text-gradient-gold">نجاحاتنا</span> المميزة
            </motion.h2>

            <ParallaxGallery items={advertisingCases} isRtl={true} />
          </div>
        </div>
      </section>
    </div>
  )
}
