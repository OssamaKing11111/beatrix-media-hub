'use client'

import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'

export default function FamousAdsEgyptPage() {
  return (
    <div className="container-custom py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <Link href="/ads-library" className="flex items-center text-gold mb-8">
          <ArrowLeft className="w-5 h-5 ml-2" />
          العودة لمكتبة الإعلانات
        </Link>

        <h1 className="text-4xl font-bold mb-8">إعلانات مشهورة في مصر</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* نموذج إعلان */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="relative h-48">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1603190287605-e6ade32fa852?w=500&h=300&fit=crop"
                alt="إعلان مشهور"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">إعلان رمضان 2024</h3>
              <p className="text-gray-600 mb-4">
                من أنجح الإعلانات في موسم رمضان لعام 2024
              </p>
              <div className="flex items-center justify-between">
                <span className="text-gold">مشاهدات: 2.5M</span>
                <button className="btn-primary">شاهد الإعلان</button>
              </div>
            </div>
          </div>

          {/* يمكن إضافة المزيد من الإعلانات هنا */}
        </div>
      </motion.div>
    </div>
  )
}
