'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Palette, Camera, Lightbulb, Award, Star, ArrowRight, CheckCircle, Users } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export default function CreatorsCommunityPage() {
  const creatorBenefits = [
    {
      icon: Palette,
      title: 'ورش إبداعية',
      description: 'ورش عمل متخصصة في التصميم والإبداع البصري'
    },
    {
      icon: Camera,
      title: 'معدات متقدمة',
      description: 'الوصول إلى أحدث معدات التصوير والتصميم'
    },
    {
      icon: Lightbulb,
      title: 'مشاريع تعاونية',
      description: 'فرص للعمل في مشاريع إبداعية مشتركة'
    },
    {
      icon: Award,
      title: 'مسابقات وجوائز',
      description: 'مسابقات شهرية مع جوائز قيمة للمبدعين'
    }
  ]

  const creativeFields = [
    {
      name: 'التصميم الجرافيكي',
      description: 'تصميم الهويات البصرية والمطبوعات',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
      tools: ['Photoshop', 'Illustrator', 'InDesign'],
      projects: '150+ مشروع'
    },
    {
      name: 'التصوير الفوتوغرافي',
      description: 'التصوير الاحترافي والتجاري',
      image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop',
      tools: ['Canon', 'Nikon', 'Sony'],
      projects: '200+ جلسة تصوير'
    },
    {
      name: 'الرسوم المتحركة',
      description: 'إنتاج الرسوم المتحركة والموشن جرافيك',
      image: 'https://images.unsplash.com/photo-1551818255-e6e10975cd17?w=400&h=300&fit=crop',
      tools: ['After Effects', 'Cinema 4D', 'Blender'],
      projects: '80+ فيديو متحرك'
    },
    {
      name: 'تصميم المواقع',
      description: 'تصميم وتطوير المواقع الإلكترونية',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
      tools: ['Figma', 'Adobe XD', 'Sketch'],
      projects: '120+ موقع'
    }
  ]

  const creatorStats = [
    { number: '2,500+', label: 'مبدع نشط', icon: Users },
    { number: '50+', label: 'ورشة شهرياً', icon: Lightbulb },
    { number: '100+', label: 'مشروع مكتمل', icon: Award },
    { number: '98%', label: 'معدل رضا الأعضاء', icon: Star },
  ]

  const featuredCreators = [
    {
      name: 'أحمد محمد',
      specialty: 'مصمم جرافيك',
      experience: '8 سنوات خبرة',
      achievement: 'فائز بجائزة أفضل تصميم 2023',
      portfolio: '300+ تصميم',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'فاطمة العلي',
      specialty: 'مصورة فوتوغرافية',
      experience: '6 سنوات خبرة',
      achievement: 'معرض شخصي في دبي',
      portfolio: '500+ صورة',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c9c0e8e0?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'محمد حسن',
      specialty: 'مصمم موشن جرافيك',
      experience: '5 سنوات خبرة',
      achievement: 'عمل مع Netflix',
      portfolio: '100+ فيديو',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    }
  ]

  const upcomingWorkshops = [
    {
      title: 'ورشة التصميم المتقدم',
      date: '20 مارس 2024',
      time: '6:00 م - 9:00 م',
      instructor: 'أحمد محمد',
      level: 'متقدم',
      seats: '15 مقعد متاح',
      price: 'مجاني للأعضاء',
      description: 'تعلم تقنيات التصميم المتقدمة',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop'
    },
    {
      title: 'أساسيات التصوير الاحترافي',
      date: '25 مارس 2024',
      time: '10:00 ص - 4:00 م',
      instructor: 'فاطمة العلي',
      level: 'مبتدئ',
      seats: '20 مقعد متاح',
      price: '200 ريال',
      description: 'تعلم أساسيات التصوير من الصفر',
      image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop'
    },
    {
      title: 'إنتاج الموشن جرافيك',
      date: '30 مارس 2024',
      time: '2:00 م - 8:00 م',
      instructor: 'محمد حسن',
      level: 'متوسط',
      seats: '12 مقعد متاح',
      price: '300 ريال',
      description: 'إنتاج فيديوهات موشن جرافيك احترافية',
      image: 'https://images.unsplash.com/photo-1551818255-e6e10975cd17?w=400&h=300&fit=crop'
    }
  ]

  const membershipTiers = [
    {
      name: 'العضوية الأساسية',
      price: 'مجاني',
      features: [
        'الوصول للمجتمع',
        'ورشة واحدة شهرياً',
        'مكتبة الموارد الأساسية',
        'منتدى النقاش'
      ]
    },
    {
      name: 'العضوية المميزة',
      price: '99 ريال/شهر',
      features: [
        'جميع مزايا العضوية الأساسية',
        'ورش عمل غير محدودة',
        'جلسات إرشاد فردية',
        'الوصول لمعدات الاستوديو',
        'خصم 50% على الدورات'
      ]
    },
    {
      name: 'العضوية الاحترافية',
      price: '199 ريال/شهر',
      features: [
        'جميع مزايا العضوية المميزة',
        'مشاريع تجارية حصرية',
        'شراكة في المعارض',
        'دعم تسويقي للأعمال',
        'شبكة عملاء حصرية'
      ]
    }
  ]

  const membershipOptions = [
    { value: 'basic-membership', label: 'العضوية الأساسية' },
    { value: 'premium-membership', label: 'العضوية المميزة' },
    { value: 'professional-membership', label: 'العضوية الاحترافية' },
    { value: 'workshop-registration', label: 'تسجيل في ورشة عمل' },
    { value: 'portfolio-review', label: 'مراجعة الأعمال' },
    { value: 'collaboration-request', label: 'طلب تعاون' },
    { value: 'consultation', label: 'استشارة مجانية' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&h=1080&fit=crop"
            alt="Creators Community Hero"
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
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Palette className="w-20 h-20 text-gold" />
            </motion.div>

            <h1 className="heading-1 mb-6 text-gradient-gold">
              مجتمع المبدعين
              <br />
              <span className="text-white">حيث يولد الإبداع</span>
            </h1>

            <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
              انضم إلى أكبر مجتمع للمبدعين في مجال التصميم والفنون البصرية
              <br />
              وطور مهاراتك الإبداعية مع نخبة من المصممين والفنانين المحترفين
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <Link href="#join" className="btn-primary text-lg px-8 py-4">
                انضم للمبدعين
                <ArrowRight className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0" />
              </Link>
              <Link href="#workshops" className="btn-outline border-white text-white hover:bg-white hover:text-gold text-lg px-8 py-4">
                تصفح الورش
              </Link>
            </div>

            {/* Creator Stats */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              {creatorStats.map((stat, index) => (
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
              مزايا مجتمع المبدعين
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              اكتشف الفوائد الحصرية التي ستحصل عليها كعضو في مجتمع المبدعين
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {creatorBenefits.map((benefit, index) => (
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

      {/* Creative Fields Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-6 text-gradient-gold">
              المجالات الإبداعية
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              استكشف المجالات الإبداعية المختلفة التي يغطيها مجتمعنا
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {creativeFields.map((field, index) => (
              <motion.div
                key={index}
                className="card overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative h-48">
                  <Image
                    src={field.image}
                    alt={field.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-bold text-lg mb-1">
                      {field.name}
                    </h3>
                    <p className="text-gold text-sm font-semibold">
                      {field.projects}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4">
                    {field.description}
                  </p>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">الأدوات:</h4>
                    <div className="flex flex-wrap gap-2">
                      {field.tools.map((tool, toolIndex) => (
                        <span
                          key={toolIndex}
                          className="text-xs bg-gold/10 text-gold px-2 py-1 rounded-full"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Creators Section */}
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
              مبدعون مميزون
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              تعرف على بعض المبدعين المميزين في مجتمعنا
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCreators.map((creator, index) => (
              <motion.div
                key={index}
                className="card p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <Image
                    src={creator.image}
                    alt={creator.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">
                  {creator.name}
                </h3>
                <p className="text-gold font-semibold text-sm mb-2">
                  {creator.specialty}
                </p>
                <p className="text-gray-600 text-sm mb-3">
                  {creator.experience}
                </p>
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-gray-600">
                    <strong>الإنجاز:</strong> {creator.achievement}
                  </div>
                  <div className="text-sm text-gray-600">
                    <strong>الأعمال:</strong> {creator.portfolio}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Workshops Section */}
      <section id="workshops" className="section-padding">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-6 text-gradient-gold">
              الورش القادمة
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              لا تفوت الورش التدريبية القادمة مع أفضل المدربين
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingWorkshops.map((workshop, index) => (
              <motion.div
                key={index}
                className="card overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-48">
                  <Image
                    src={workshop.image}
                    alt={workshop.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-gold text-black px-2 py-1 rounded-full text-xs font-bold">
                    {workshop.level}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-800 mb-2">
                    {workshop.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {workshop.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="text-sm text-gray-600">
                      <strong>التاريخ:</strong> {workshop.date}
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>الوقت:</strong> {workshop.time}
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>المدرب:</strong> {workshop.instructor}
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>المقاعد:</strong> {workshop.seats}
                    </div>
                  </div>
                  <div className="text-gold font-bold text-lg mb-4">
                    {workshop.price}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Tiers Section */}
      <section className="section-padding bg-gradient-dark text-white">
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
              اختر الخطة التي تناسب احتياجاتك الإبداعية
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
              title="انضم إلى مجتمع المبدعين"
              subtitle="ابدأ رحلتك الإبداعية معنا وطور مهاراتك مع أفضل المبدعين في المنطقة"
              partnershipOptions={membershipOptions}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
