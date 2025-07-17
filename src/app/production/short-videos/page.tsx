'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Play, Smartphone, Zap, Heart, Star, ArrowRight, CheckCircle, Video } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export default function ShortVideosPage() {
  const shortVideoFeatures = [
    {
      icon: Smartphone,
      title: 'محتوى مناسب للموبايل',
      description: 'فيديوهات مصممة خصيصاً لتناسب شاشات الهواتف الذكية'
    },
    {
      icon: Zap,
      title: 'مونتاج سريع وجذاب',
      description: 'تقنيات مونتاج حديثة تجذب الانتباه من اللحظة الأولى'
    },
    {
      icon: Heart,
      title: 'محتوى قابل للمشاركة',
      description: 'فيديوهات مصممة لتحقيق أقصى انتشار على وسائل التواصل'
    },
    {
      icon: Video,
      title: 'جودة عالية بحجم صغير',
      description: 'تحسين الفيديوهات للحصول على أفضل جودة بأقل حجم'
    }
  ]

  const videoTypes = [
    {
      name: 'فيديوهات إنستغرام ريلز',
      description: 'محتوى عمودي جذاب مدته 15-30 ثانية',
      image: 'https://images.unsplash.com/photo-1551818255-e6e10975cd17?w=400&h=600&fit=crop',
      duration: '15-30 ثانية',
      format: '9:16 عمودي',
      platforms: ['Instagram', 'Facebook', 'TikTok']
    },
    {
      name: 'فيديوهات تيك توك',
      description: 'محتوى ترفيهي وتعليمي يناسب جمهور تيك توك',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=600&fit=crop',
      duration: '15-60 ثانية',
      format: '9:16 عمودي',
      platforms: ['TikTok', 'Instagram', 'YouTube Shorts']
    },
    {
      name: 'فيديوهات يوتيوب شورتس',
      description: 'محتوى قصير ومفيد للمنصة الأكبر للفيديو',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=600&fit=crop',
      duration: '15-60 ثانية',
      format: '9:16 عمودي',
      platforms: ['YouTube', 'Instagram', 'Facebook']
    },
    {
      name: 'فيديوهات تويتر',
      description: 'محتوى سريع ومباشر يناسب طبيعة تويتر',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop',
      duration: '15-45 ثانية',
      format: '16:9 أفقي',
      platforms: ['Twitter', 'LinkedIn', 'Facebook']
    }
  ]

  const contentCategories = [
    {
      category: 'المحتوى التعليمي',
      description: 'فيديوهات تعليمية سريعة ومفيدة',
      examples: ['نصائح سريعة', 'شرح المنتجات', 'دروس مصغرة'],
      icon: '📚',
      engagement: '85% معدل مشاهدة'
    },
    {
      category: 'المحتوى الترفيهي',
      description: 'فيديوهات ممتعة تجذب الجمهور',
      examples: ['تحديات', 'كوميديا', 'ترندات'],
      icon: '🎭',
      engagement: '92% معدل تفاعل'
    },
    {
      category: 'المحتوى التسويقي',
      description: 'إعلانات قصيرة ومؤثرة للمنتجات',
      examples: ['عروض المنتجات', 'شهادات العملاء', 'قصص النجاح'],
      icon: '📢',
      engagement: '78% معدل تحويل'
    },
    {
      category: 'المحتوى الإخباري',
      description: 'أخبار وتحديثات سريعة',
      examples: ['أخبار الشركة', 'إطلاق منتجات', 'فعاليات'],
      icon: '📰',
      engagement: '70% معدل وصول'
    }
  ]

  const productionProcess = [
    {
      step: 1,
      title: 'تطوير الفكرة',
      description: 'نبتكر أفكاراً إبداعية تناسب جمهورك',
      icon: '💡'
    },
    {
      step: 2,
      title: 'كتابة السيناريو',
      description: 'نكتب سيناريو مختصر ومؤثر',
      icon: '📝'
    },
    {
      step: 3,
      title: 'التصوير السريع',
      description: 'تصوير احترافي بتقنيات حديثة',
      icon: '📹'
    },
    {
      step: 4,
      title: 'المونتاج الإبداعي',
      description: 'مونتاج سريع مع مؤثرات جذابة',
      icon: '✂️'
    },
    {
      step: 5,
      title: 'التحسين للمنصات',
      description: 'تحسين الفيديو لكل منصة',
      icon: '⚙️'
    }
  ]

  const successfulVideos = [
    {
      client: 'ديجيتال ماركتنج برو',
      type: 'فيديو تعليمي',
      platform: 'Instagram Reels',
      views: '2.5M مشاهدة',
      engagement: '15% معدل تفاعل',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
    },
    {
      client: 'أزياء القاهرة',
      type: 'عرض منتجات',
      platform: 'TikTok',
      views: '1.8M مشاهدة',
      engagement: '22% معدل تفاعل',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop'
    },
    {
      client: 'تك سوليوشنز',
      type: 'شرح تقني',
      platform: 'YouTube Shorts',
      views: '3.2M مشاهدة',
      engagement: '18% معدل تفاعل',
      image: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=400&h=300&fit=crop'
    }
  ]

  const trendingFormats = [
    {
      format: 'Before & After',
      description: 'عرض التحول أو التطوير',
      usage: 'مناسب للخدمات والمنتجات',
      popularity: '95%'
    },
    {
      format: 'Tutorial سريع',
      description: 'شرح خطوات بسيطة وسريعة',
      usage: 'المحتوى التعليمي',
      popularity: '88%'
    },
    {
      format: 'Behind the Scenes',
      description: 'كواليس العمل والإنتاج',
      usage: 'بناء الثقة مع الجمهور',
      popularity: '82%'
    },
    {
      format: 'Q&A سريع',
      description: 'إجابات سريعة على الأسئلة',
      usage: 'التفاعل مع الجمهور',
      popularity: '75%'
    }
  ]

  const serviceOptions = [
    { value: 'instagram-reels', label: 'فيديوهات إنستغرام ريلز' },
    { value: 'tiktok-videos', label: 'فيديوهات تيك توك' },
    { value: 'youtube-shorts', label: 'فيديوهات يوتيوب شورتس' },
    { value: 'twitter-videos', label: 'فيديوهات تويتر' },
    { value: 'educational-content', label: 'المحتوى التعليمي' },
    { value: 'promotional-videos', label: 'الفيديوهات الترويجية' },
    { value: 'consultation', label: 'استشارة مجانية' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1551818255-e6e10975cd17?w=1920&h=1080&fit=crop"
            alt="Short Videos Hero"
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
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Play className="w-20 h-20 text-gold" />
            </motion.div>

            <h1 className="heading-1 mb-6 text-gradient-gold">
              فيديوهات قصيرة جذابة
              <br />
              <span className="text-white">تحقق انتشاراً واسعاً على السوشيال ميديا</span>
            </h1>

            <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
              نصنع فيديوهات قصيرة مؤثرة تجذب انتباه جمهورك وتحقق أهدافك التسويقية
              <br />
              على جميع منصات التواصل الاجتماعي الرائدة
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="#contact" className="btn-primary text-lg px-8 py-4">
                ابدأ إنتاج فيديوهاتك
                <ArrowRight className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0" />
              </Link>
              <Link href="#videos" className="btn-outline border-white text-white hover:bg-white hover:text-gold text-lg px-8 py-4">
                <Play className="w-5 h-5 ml-2 rtl:mr-2 rtl:ml-0" />
                شاهد أعمالنا
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
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
              مميزات فيديوهاتنا القصيرة
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم فيديوهات قصيرة احترافية مصممة خصيصاً لعصر السوشيال ميديا
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {shortVideoFeatures.map((feature, index) => (
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
                  <feature.icon className="w-12 h-12 text-gold" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Types Section */}
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
              أنواع الفيديوهات القصيرة
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم فيديوهات مخصصة لكل منصة تواصل اجتماعي
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {videoTypes.map((type, index) => (
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
                    src={type.image}
                    alt={type.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute top-4 right-4 bg-gold text-black px-2 py-1 rounded-full text-xs font-bold">
                    {type.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-800 mb-2">
                    {type.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {type.description}
                  </p>
                  <div className="mb-4">
                    <div className="text-sm text-gray-700 mb-2">
                      <strong>التنسيق:</strong> {type.format}
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {type.platforms.map((platform, platIndex) => (
                        <span
                          key={platIndex}
                          className="text-xs bg-gold/10 text-gold px-2 py-1 rounded-full"
                        >
                          {platform}
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

      {/* Content Categories Section */}
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
              فئات المحتوى
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم محتوى متنوع يناسب مختلف الأهداف التسويقية
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contentCategories.map((category, index) => (
              <motion.div
                key={index}
                className="card p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4 text-center">{category.icon}</div>
                <h3 className="font-bold text-gray-800 mb-3 text-center">
                  {category.category}
                </h3>
                <p className="text-gray-600 text-sm mb-4 text-center">
                  {category.description}
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2 text-sm">أمثلة:</h4>
                  <ul className="space-y-1">
                    {category.examples.map((example, exIndex) => (
                      <li key={exIndex} className="text-sm text-gray-600 flex items-center">
                        <CheckCircle className="w-3 h-3 text-gold mr-2 rtl:ml-2 rtl:mr-0 flex-shrink-0" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center">
                  <span className="text-gold font-bold text-sm">
                    {category.engagement}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Formats Section */}
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
              الصيغ الرائجة حالياً
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نواكب أحدث الاتجاهات في عالم الفيديوهات القصيرة
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trendingFormats.map((format, index) => (
              <motion.div
                key={index}
                className="card p-6 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-bold text-gray-800 mb-3">
                  {format.format}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {format.description}
                </p>
                <p className="text-gray-700 text-sm mb-4">
                  <strong>الاستخدام:</strong> {format.usage}
                </p>
                <div className="text-gold font-bold">
                  شعبية {format.popularity}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Process Section */}
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
              عملية الإنتاج السريع
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نتبع عملية إنتاج مبسطة وسريعة لضمان التسليم في الوقت المحدد
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {productionProcess.map((step, index) => (
              <motion.div
                key={step.step}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center text-black text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <div className="text-4xl mb-4">{step.icon}</div>
                  {index < productionProcess.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-gold to-transparent" />
                  )}
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Successful Videos Section */}
      <section id="videos" className="section-padding bg-gradient-dark text-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-6 text-gradient-gold">
              فيديوهات حققت نجاحاً باهراً
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              اكتشف بعض الفيديوهات القصيرة التي أنتجناها وحققت ملايين المشاهدات
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successfulVideos.map((video, index) => (
              <motion.div
                key={index}
                className="card bg-white/10 backdrop-blur-sm overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative h-48">
                  <Image
                    src={video.image}
                    alt={video.client}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gold mb-2">
                    {video.client}
                  </h3>
                  <p className="text-white mb-2">
                    {video.type}
                  </p>
                  <p className="text-gray-300 text-sm mb-4">
                    {video.platform}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-gold font-bold">
                      {video.views}
                    </span>
                    <span className="text-green-400 text-sm">
                      {video.engagement}
                    </span>
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
              title="ابدأ إنتاج فيديوهاتك القصيرة"
              subtitle="تواصل معنا لمناقشة أفكارك وكيف يمكننا إنتاج فيديوهات قصيرة تحقق أهدافك التسويقية"
              serviceOptions={serviceOptions}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
