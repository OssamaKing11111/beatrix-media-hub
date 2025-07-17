'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Briefcase, TrendingUp, Heart, Target, Star, ArrowRight, CheckCircle, Users } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export default function BusinessCommunityPage() {
  const businessBenefits = [
    {
      icon: Heart,
      title: 'شبكة أعمال قوية',
      description: 'تواصل مع رجال أعمال ومستثمرين من مختلف القطاعات'
    },
    {
      icon: TrendingUp,
      title: 'فرص استثمارية',
      description: 'اكتشف فرص استثمارية مربحة في قطاع الإعلام'
    },
    {
      icon: Target,
      title: 'استراتيجيات متقدمة',
      description: 'تعلم أحدث استراتيجيات الأعمال والتسويق'
    },
    {
      icon: Briefcase,
      title: 'شراكات تجارية',
      description: 'أقم شراكات تجارية مثمرة مع أعضاء المجتمع'
    }
  ]

  const businessStats = [
    { number: '1,800+', label: 'رجل أعمال', icon: Users },
    { number: '500M+', label: 'ريال استثمارات', icon: TrendingUp },
    { number: '200+', label: 'شراكة تجارية', icon: Heart },
    { number: '95%', label: 'معدل نجاح المشاريع', icon: Star },
  ]

  const membershipTiers = [
    {
      name: 'العضوية التنفيذية',
      price: '500 ريال/شهر',
      features: [
        'الوصول لجميع الفعاليات',
        'تقارير استثمارية شهرية',
        'شبكة رجال الأعمال',
        'استشارات مجانية'
      ]
    },
    {
      name: 'العضوية الاستثمارية',
      price: '1,000 ريال/شهر',
      features: [
        'جميع مزايا العضوية التنفيذية',
        'فرص استثمارية حصرية',
        'جلسات إرشاد فردية',
        'تحليلات السوق المتقدمة',
        'أولوية في المشاريع'
      ]
    },
    {
      name: 'العضوية الماسية',
      price: '2,000 ريال/شهر',
      features: [
        'جميع مزايا العضوية الاستثمارية',
        'مشاركة في صندوق الاستثمار',
        'لقاءات خاصة مع الخبراء',
        'دعم في إطلاق المشاريع',
        'شراكة في المعارض الدولية'
      ]
    }
  ]

  const membershipOptions = [
    { value: 'executive-membership', label: 'العضوية التنفيذية' },
    { value: 'investment-membership', label: 'العضوية الاستثمارية' },
    { value: 'diamond-membership', label: 'العضوية الماسية' },
    { value: 'investment-opportunity', label: 'فرصة استثمارية' },
    { value: 'partnership-request', label: 'طلب شراكة' },
    { value: 'business-consultation', label: 'استشارة أعمال' },
    { value: 'event-registration', label: 'تسجيل في فعالية' },
    { value: 'consultation', label: 'استشارة مجانية' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920&h=1080&fit=crop"
            alt="Business Community Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="hero-overlay" />
        </div>

        <div className="relative z-10 container-custom text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              className="flex justify-center mb-8"
              animate={{ 
                y: [0, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Briefcase className="w-20 h-20 text-gold" />
            </motion.div>

            <h1 className="heading-1 mb-6 text-gradient-gold">
              مجتمع رجال الأعمال
              <br />
              <span className="text-white">شبكة الاستثمار والنجاح</span>
            </h1>

            <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
              انضم إلى أقوى شبكة لرجال الأعمال والمستثمرين في قطاع الإعلام
              <br />
              واكتشف فرص استثمارية مربحة وشراكات تجارية استراتيجية
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <Link href="#join" className="btn-primary text-lg px-8 py-4">
                انضم للمجتمع
                <ArrowRight className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0" />
              </Link>
              <Link href="#membership" className="btn-outline border-white text-white hover:bg-white hover:text-gold text-lg px-8 py-4">
                خطط العضوية
              </Link>
            </div>

            {/* Business Stats */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              {businessStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-8 h-8 text-gold" />
                  </div>
                  <div className="text-3xl font-bold text-gold mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-6 text-gradient-gold">
              مزايا مجتمع رجال الأعمال
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              اكتشف المزايا الحصرية التي ستحصل عليها كعضو في مجتمع رجال الأعمال
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="card p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-center mb-4">
                  <benefit.icon className="w-12 h-12 text-gold" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-800">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Tiers Section */}
      <section id="membership" className="section-padding bg-gradient-dark text-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-6 text-gradient-gold">
              خطط العضوية
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              اختر الخطة التي تناسب أهدافك الاستثمارية والتجارية
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipTiers.map((tier, index) => (
              <motion.div
                key={index}
                className={`card p-6 ${index === 1 ? 'bg-gold text-black' : 'bg-white/10 backdrop-blur-sm'}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className={`text-xl font-bold mb-4 text-center ${index === 1 ? 'text-black' : 'text-gold'}`}>
                  {tier.name}
                </h3>
                <div className={`text-3xl font-bold text-center mb-6 ${index === 1 ? 'text-black' : 'text-white'}`}>
                  {tier.price}
                </div>
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={`flex items-start text-sm ${index === 1 ? 'text-black' : 'text-gray-300'}`}>
                      <CheckCircle className={`w-4 h-4 mr-2 rtl:ml-2 rtl:mr-0 flex-shrink-0 mt-0.5 ${index === 1 ? 'text-black' : 'text-gold'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Form Section */}
      <section id="join" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <ContactForm
              type="community"
              title="انضم إلى مجتمع رجال الأعمال"
              subtitle="ابدأ رحلتك الاستثمارية معنا واكتشف فرص النمو والشراكات التجارية المثمرة"
              partnershipOptions={membershipOptions}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
