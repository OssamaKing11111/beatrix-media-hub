'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Play, Star, Award, TrendingUp } from 'lucide-react'
import { supabase } from '@/lib/supabase'

export default function AdsLibraryPage() {
  return (
    <div className="container-custom py-12">
      <h1 className="text-4xl font-bold text-center mb-12">مكتبة الإعلانات</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* إعلانات مشهورة في مصر */}
        <Link href="/ads-library/famous-ads-egypt">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="card-gradient p-6 rounded-lg"
          >
            <Star className="w-12 h-12 text-gold mb-4" />
            <h2 className="text-2xl font-semibold mb-3">إعلانات مشهورة في مصر</h2>
            <p className="text-gray-600 mb-4">
              مجموعة من أشهر وأنجح الإعلانات في السوق المصري
            </p>
          </motion.div>
        </Link>

        {/* إعلانات عالمية */}
        <Link href="/ads-library/global-ads">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="card-gradient p-6 rounded-lg"
          >
            <Award className="w-12 h-12 text-gold mb-4" />
            <h2 className="text-2xl font-semibold mb-3">إعلانات عالمية</h2>
            <p className="text-gray-600 mb-4">
              أبرز الحملات الإعلانية العالمية وأكثرها تأثيراً
            </p>
          </motion.div>
        </Link>

        {/* أرشيف الإعلانات */}
        <Link href="/ads-library/ads-archive">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="card-gradient p-6 rounded-lg"
          >
            <TrendingUp className="w-12 h-12 text-gold mb-4" />
            <h2 className="text-2xl font-semibold mb-3">أرشيف الإعلانات</h2>
            <p className="text-gray-600 mb-4">
              مكتبة شاملة لإعلاناتنا السابقة ونماذج من أعمالنا
            </p>
          </motion.div>
        </Link>
      </div>
    </div>
  )
}
