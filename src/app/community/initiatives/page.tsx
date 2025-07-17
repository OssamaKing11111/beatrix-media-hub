'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Lightbulb, Target, Users } from 'lucide-react'
import Link from 'next/link'

export default function InitiativesPage() {
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

        <h1 className="text-4xl font-bold mb-6">المبادرات</h1>
        
        <div className="prose prose-lg max-w-none mb-12">
          <p>
            نطلق ونساند المبادرات التي تهدف إلى إحداث تأثير إيجابي في المجتمع. نوفر الدعم الإعلامي
            والتسويقي للمبادرات المبتكرة التي تخدم المجتمع.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="card-gradient p-6 rounded-lg">
            <Lightbulb className="w-10 h-10 text-gold mb-4" />
            <h3 className="text-xl font-semibold mb-3">أفكار مبتكرة</h3>
            <p className="text-gray-600">
              ندعم الأفكار الإبداعية التي تعالج تحديات المجتمع
            </p>
          </div>

          <div className="card-gradient p-6 rounded-lg">
            <Target className="w-10 h-10 text-gold mb-4" />
            <h3 className="text-xl font-semibold mb-3">تأثير مستدام</h3>
            <p className="text-gray-600">
              نركز على المبادرات ذات التأثير المستدام والطويل المدى
            </p>
          </div>

          <div className="card-gradient p-6 rounded-lg">
            <Users className="w-10 h-10 text-gold mb-4" />
            <h3 className="text-xl font-semibold mb-3">شبكة داعمة</h3>
            <p className="text-gray-600">
              نربط المبادرات بشبكة من الداعمين والمهتمين
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
