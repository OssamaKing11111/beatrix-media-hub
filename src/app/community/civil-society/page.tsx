'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Heart, Globe, Users } from 'lucide-react'
import Link from 'next/link'

export default function CivilSocietyPage() {
  return (
    <div className="container-custom py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <Link href="/community" className="flex items-center text-gold mb-8">
          <ArrowLeft className="w-5 h-5 ml-2" />
          العودة للمجتمع
        </Link>

        <h1 className="text-4xl font-bold mb-6">المجتمع المدني</h1>
        
        <div className="prose prose-lg max-w-none mb-12">
          <p>
            نؤمن بأهمية دور المجتمع المدني في التنمية المستدامة. نقدم دعمنا للمنظمات غير الربحية
            والمبادرات المجتمعية من خلال خدماتنا الإعلامية والتسويقية.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="card-gradient p-6 rounded-lg">
            <Heart className="w-10 h-10 text-gold mb-4" />
            <h3 className="text-xl font-semibold mb-3">دعم المبادرات</h3>
            <p className="text-gray-600">
              نساعد في نشر وتعزيز المبادرات المجتمعية الهادفة
            </p>
          </div>

          <div className="card-gradient p-6 rounded-lg">
            <Globe className="w-10 h-10 text-gold mb-4" />
            <h3 className="text-xl font-semibold mb-3">تأثير عالمي</h3>
            <p className="text-gray-600">
              نساهم في توسيع نطاق تأثير المنظمات غير الربحية
            </p>
          </div>

          <div className="card-gradient p-6 rounded-lg">
            <Users className="w-10 h-10 text-gold mb-4" />
            <h3 className="text-xl font-semibold mb-3">بناء المجتمع</h3>
            <p className="text-gray-600">
              نعمل على تعزيز الروابط بين مختلف فئات المجتمع
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link href="/contact" className="btn-primary">
            تواصل معنا الآن
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
