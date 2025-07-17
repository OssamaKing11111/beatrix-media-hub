'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Shirt, Palette, Camera, Sparkles, Star, ArrowRight, CheckCircle, Scissors } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export default function ClothingCompaniesPage() {
  const services = [
    {
      icon: Shirt,
      title: 'تسويق الأزياء والموضة',
      description: 'حملات إبداعية تبرز أحدث صيحات الموضة'
    },
    {
      icon: Camera,
      title: 'التصوير الفاشن',
      description: 'جلسات تصوير احترافية للملابس والإكسسوارات'
    },
    {
      icon: Palette,
      title: 'الهوية البصرية للأزياء',
      description: 'تصميم هوية بصرية أنيقة تعكس روح العلامة التجارية'
    },
    {
      icon: Sparkles,
      title: 'حملات المواسم والمناسبات',
      description: 'تسويق مخصص للمواسم والمناسبات الخاصة'
    }
  ]

  const clientLogos = [
    {
      name: 'أزياء القاهرة',
      logo: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=120&h=80&fit=crop',
      description: 'علامة تجارية رائدة في الأزياء'
    },
    {
      name: 'بوتيك الأناقة',
      logo: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=120&h=80&fit=crop',
      description: 'أزياء نسائية راقية'
    },
    {
      name: 'مجموعة الموضة الحديثة',
      logo: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=120&h=80&fit=crop',
      description: 'أزياء عصرية للشباب'
    },
    {
      name: 'دار الأزياء الملكية',
      logo: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=120&h=80&fit=crop',
      description: 'أزياء فاخرة ومناسبات'
    }
  ]

  const fashionCategories = [
    {
      name: 'الأزياء النسائية',
      icon: '👗',
      description: 'مجموعات متنوعة للمرأة العصرية',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=300&h=400&fit=crop',
      trend: 'الأكثر طلباً'
    },
    {
      name: 'الأزياء الرجالية',
      icon: '👔',
      description: 'أناقة وتميز للرجل المعاصر',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
      trend: 'كلاسيكي'
    },
    {
      name: 'أزياء الأطفال',
      icon: '👶',
      description: 'ملابس مريحة وأنيقة للأطفال',
      image: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=300&h=400&fit=crop',
      trend: 'عملي'
    },
    {
      name: 'الإكسسوارات',
      icon: '💎',
      description: 'تشكيلة راقية من الإكسسوارات',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=400&fit=crop',
      trend: 'فاخر'
    }
  ]

  const successStories = [
    {
      client: 'أزياء القاهرة',
      challenge: 'إطلاق مجموعة أزياء جديدة للموسم',
      solution: 'حملة تسويق متكاملة مع جلسات تصوير احترافية',
      result: 'نفاد المخزون خلال أسبوعين',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop'
    },
    {
      client: 'بوتيك الأناقة',
      challenge: 'زيادة المبيعات الإلكترونية',
      solution: 'استراتيجية تسويق رقمي مع محتوى بصري جذاب',
      result: 'زيادة 200% في المبيعات الإلكترونية',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop'
    }
  ]

  const fashionTrends = [
    {
      season: 'ربيع 2024',
      colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'],
      description: 'ألوان زاهية ومنعشة تعكس روح الربيع'
    },
    {
      season: 'صيف 2024',
      colors: ['#FFD93D', '#FF8C42', '#FF6B9D', '#C44569'],
      description: 'ألوان دافئة ومشرقة مثالية للصيف'
    }
  ]

  const serviceOptions = [
    { value: 'fashion-marketing', label: 'تسويق الأزياء والموضة' },
    { value: 'fashion-photography', label: 'التصوير الفاشن' },
    { value: 'brand-identity', label: 'تصميم الهوية البصرية' },
    { value: 'seasonal-campaigns', label: 'حملات المواسم' },
    { value: 'influencer-marketing', label: 'التسويق عبر المؤثرين' },
    { value: 'fashion-shows', label: 'تنظيم عروض الأزياء' },
    { value: 'social-management', label: 'إدارة وسائل التواصل' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop"
            alt="Clothing Companies Hero"
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
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Shirt className="w-20 h-20 text-gold" />
            </motion.div>

            <h1 className="heading-1 mb-6 text-gradient-gold">
              تسويق أزياء إبداعي
              <br />
              <span className="text-white">يبرز جمال وأناقة علامتك التجارية</span>
            </h1>

            <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
              نساعد علامات الأزياء والموضة في إبراز تميزها وجذب عشاق الأناقة
              <br />
              من خلال حملات تسويقية مبتكرة وتصوير فاشن احترافي
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="#contact" className="btn-primary text-lg px-8 py-4">
                ابدأ حملتك الآن
                <ArrowRight className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0" />
              </Link>
              <Link href="#fashion" className="btn-outline border-white text-white hover:bg-white hover:text-gold text-lg px-8 py-4">
                استكشف أعمالنا
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-6 text-gradient-gold">
              خدماتنا لعلامات الأزياء
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم حلولاً تسويقية متخصصة تناسب عالم الموضة والأزياء
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
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
                  <service.icon className="w-12 h-12 text-gold" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fashion Categories Section */}
      <section id="fashion" className="section-padding">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-6 text-gradient-gold">
              فئات الأزياء التي نسوق لها
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              خبرة واسعة في تسويق مختلف أنواع الأزياء والإكسسوارات
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fashionCategories.map((category, index) => (
              <motion.div
                key={index}
                className="card overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative h-64">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4 text-4xl">
                    {category.icon}
                  </div>
                  <div className="absolute top-4 right-4 bg-gold text-black px-2 py-1 rounded-full text-xs font-bold">
                    {category.trend}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-bold text-lg mb-1">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-200">
                      {category.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fashion Trends Section */}
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
              اتجاهات الموضة الحالية
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نواكب أحدث اتجاهات الموضة لنضمن تميز حملاتك التسويقية
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {fashionTrends.map((trend, index) => (
              <motion.div
                key={index}
                className="card p-8"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {trend.season}
                </h3>
                <p className="text-gray-600 mb-6">
                  {trend.description}
                </p>
                <div className="flex space-x-2 rtl:space-x-reverse">
                  {trend.colors.map((color, colorIndex) => (
                    <div
                      key={colorIndex}
                      className="w-12 h-12 rounded-full border-2 border-gray-200"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
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
              عملاؤنا من علامات الأزياء
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نفتخر بثقة أبرز علامات الأزياء والموضة في المنطقة
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clientLogos.map((client, index) => (
              <motion.div
                key={index}
                className="card p-6 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="mb-4">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={120}
                    height={80}
                    className="mx-auto rounded-lg object-cover"
                  />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">
                  {client.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {client.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
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
              قصص نجاح في عالم الموضة
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              كيف ساعدنا علامات الأزياء في تحقيق أهدافها وزيادة مبيعاتها
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                className="card bg-white/10 backdrop-blur-sm p-8"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="mb-6">
                  <Image
                    src={story.image}
                    alt={story.client}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                
                <h3 className="text-xl font-bold text-gold mb-4">
                  {story.client}
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-200 mb-2">التحدي:</h4>
                    <p className="text-gray-300">{story.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-200 mb-2">الحل:</h4>
                    <p className="text-gray-300">{story.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-200 mb-2">النتيجة:</h4>
                    <p className="text-gold font-semibold flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0" />
                      {story.result}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <ContactForm
              type="client"
              title="ابدأ حملتك للأزياء الآن"
              subtitle="تواصل معنا لمناقشة كيف يمكننا مساعدة علامتك التجارية في عالم الموضة"
              serviceOptions={serviceOptions}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
