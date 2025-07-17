'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const featuredClients = [
  {
    name: 'CBC',
    logo: '/logos/cbc.png',
    alt: 'CBC قناة',
    width: 120
  },
  {
    name: 'MBC',
    logo: '/logos/mbc.png',
    alt: 'MBC مجموعة',
    width: 130
  },
  {
    name: 'Dubai Media',
    logo: '/logos/dubai-media.png',
    alt: 'Dubai Media',
    width: 140
  },
  {
    name: 'Rotana',
    logo: '/logos/rotana.png',
    alt: 'Rotana Group',
    width: 110
  },
  {
    name: 'OSN',
    logo: '/logos/osn.png',
    alt: 'OSN شبكة',
    width: 100
  },
  {
    name: 'Netflix',
    logo: '/logos/netflix.png',
    alt: 'Netflix',
    width: 120
  },
  // يمكن إضافة المزيد من العملاء هنا
]

export default function FeaturedClientsMarquee() {
  const [duplicatedClients, setDuplicatedClients] = useState(featuredClients)

  useEffect(() => {
    // مضاعفة العملاء لتأثير التمرير المستمر
    setDuplicatedClients([...featuredClients, ...featuredClients])
  }, [])

  return (
    <div className="w-full bg-gradient-to-r from-black/95 via-black to-black/95 text-white overflow-hidden py-16">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl font-bold mb-12"
        >
          عملاؤنا المميزون
        </motion.h2>
      </div>

      <div className="relative">
        {/* Gradient Overlay Left */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
        
        {/* Gradient Overlay Right */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

        {/* Marquee Container */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex items-center gap-16 md:gap-24"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {duplicatedClients.map((client, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={client.logo}
                  alt={client.alt}
                  className="h-12 md:h-16 w-auto object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                  style={{ maxWidth: client.width }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="container-custom mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-gold/80 text-lg">
            نفخر بثقة أكبر الشركات والعلامات التجارية في المنطقة
          </p>
        </motion.div>
      </div>
    </div>
  )
}
