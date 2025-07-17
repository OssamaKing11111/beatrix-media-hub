'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Award, Star, Users } from 'lucide-react'
import Link from 'next/link'

export default function StartupsPage() {
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

        <h1 className="text-4xl font-bold mb-6">الشركات الناشئة</h1>
        
        <div className="prose prose-lg max-w-none mb-12">
          <p>
            نقدم دعماً شاملاً للشركات الناشئة في مجال الإعلام والتسويق الرقمي. نساعدك على بناء هويتك
            وتطوير حضورك الرقمي من خلال خدماتنا المتكاملة وخبرتنا الواسعة في السوق.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="card-gradient p-6 rounded-lg">
            <Users className="w-10 h-10 text-gold mb-4" />
            <h3 className="text-xl font-semibold mb-3">خدمات متكاملة</h3>
            <p className="text-gray-600">
              من تصميم الهوية إلى التسويق الرقمي، نقدم كل ما تحتاجه شركتك الناشئة
            </p>
          </div>

          <div className="card-gradient p-6 rounded-lg">
            <Award className="w-10 h-10 text-gold mb-4" />
            <h3 className="text-xl font-semibold mb-3">خبرة متخصصة</h3>
            <p className="text-gray-600">
              فريق من الخبراء المتخصصين في دعم الشركات الناشئة
            </p>
          </div>

          <div className="card-gradient p-6 rounded-lg">
            <Star className="w-10 h-10 text-gold mb-4" />
            <h3 className="text-xl font-semibold mb-3">حلول مبتكرة</h3>
            <p className="text-gray-600">
              نقدم حلولاً إبداعية تناسب ميزانية وأهداف شركتك الناشئة
            </p>
          </div>
        </div>

        {/* الباقة الموحدة للشركات الناشئة */}
        <div className="bg-gradient-to-br from-gold/10 to-silver/10 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">الباقة الموحدة للشركات الناشئة</h2>
          <div className="text-center mb-8">
            <div className="text-4xl font-bold text-gold mb-2">تبدأ من 50,000 ج.م</div>
            <div className="text-gray-600">متوفر نظام تقسيط يصل إلى 12 شهر</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">تشمل الباقة:</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gold rounded-full ml-3"></div>
                  تصميم هوية بصرية متكاملة
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gold rounded-full ml-3"></div>
                  موقع إلكتروني احترافي
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gold rounded-full ml-3"></div>
                  إدارة حسابات التواصل الاجتماعي لمدة 3 شهور
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gold rounded-full ml-3"></div>
                  فيديو تعريفي بالشركة
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gold rounded-full ml-3"></div>
                  تصوير احترافي للمنتجات/المقر
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">مميزات خاصة:</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gold rounded-full ml-3"></div>
                  السعر يتناسب مع نشاط الشركة
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gold rounded-full ml-3"></div>
                  دعم فني مجاني لمدة 6 شهور
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gold rounded-full ml-3"></div>
                  استشارات تسويقية مجانية
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gold rounded-full ml-3"></div>
                  إمكانية تخصيص محتويات الباقة
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gold rounded-full ml-3"></div>
                  خصم 20% على الخدمات الإضافية
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gold/5 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-3">نظام التقسيط المرن:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-lg bg-white">
                <div className="font-bold mb-2">3 أشهر</div>
                <div className="text-gray-600">بدون فوائد</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-white">
                <div className="font-bold mb-2">6 أشهر</div>
                <div className="text-gray-600">فائدة 5%</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-white">
                <div className="font-bold mb-2">12 شهر</div>
                <div className="text-gray-600">فائدة 10%</div>
              </div>
            </div>
          </div>

          <div className="text-center space-y-4">
            <Link href="/contact" className="btn-primary inline-block">
              احجز الباقة الآن
            </Link>
            <div className="text-sm text-gray-600">
              * الأسعار تختلف حسب نشاط الشركة وحجم الخدمات المطلوبة
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/contact" className="btn-outline">
            تواصل معنا للاستفسار عن الباقات الخاصة
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
