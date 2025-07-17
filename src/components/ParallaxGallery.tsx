'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ParallaxItemProps {
  image: string
  title: string
  description: string
  index: number
  isRtl?: boolean
}

const ParallaxItem = ({ image, title, description, index, isRtl = true }: ParallaxItemProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [100, -100]
  )

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.8, 1, 0.8]
  )

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.3, 1, 1, 0.3]
  )

  // Calculate if this item should appear from left or right
  const x = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    isRtl ? 
      [100, 0, -100] :  // RTL movement
      [-100, 0, 100]    // LTR movement
  )

  return (
    <motion.div
      ref={ref}
      className={`relative flex items-center h-[70vh] ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
    >
      <motion.div
        style={{ x, y, scale, opacity }}
        className="w-full max-w-4xl bg-black/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl"
      >
        <div className="relative aspect-video">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
        </div>
        <div className="p-8 text-white">
          <h3 className="text-2xl font-bold mb-4 text-gold">{title}</h3>
          <p className="text-lg opacity-90">{description}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function ParallaxGallery({ items, isRtl = true }: { 
  items: Array<{ image: string; title: string; description: string }>;
  isRtl?: boolean;
}) {
  return (
    <div className="relative py-20 space-y-32">
      {/* Decorative Elements */}
      <div className="fixed inset-0 bg-gradient-radial from-gold/5 to-transparent pointer-events-none" />
      
      {/* Content */}
      {items.map((item, index) => (
        <ParallaxItem
          key={index}
          {...item}
          index={index}
          isRtl={isRtl}
        />
      ))}
    </div>
  )
}
