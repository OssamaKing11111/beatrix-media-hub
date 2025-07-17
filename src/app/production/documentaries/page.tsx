'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Film, BookOpen, Users, Award, Star, ArrowRight, CheckCircle, Camera } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export default function DocumentariesPage() {
  const documentaryFeatures = [
    {
      icon: Film,
      title: 'إنتاج سينمائي احترافي',
      description: 'جودة إنتاج عالية تضاهي الأفلام الوثائقية العالمية'
    },
    {
      icon: BookOpen,
      title: 'سرد مؤثر ومقنع',
      description: 'نحكي قصتك بطريقة تلامس القلوب وتؤثر في المشاهدين'
    },
    {
      icon: Users,
      title: 'مقابلات متخصصة',
      description: 'نجري مقابلات احترافية مع الخبراء والشخصيات المؤثرة'
    },
    {
      icon: Camera,
      title: 'تصوير في مواقع متعددة',
      description: 'فريق تصوير متنقل يغطي جميع المواقع المطلوبة'
    }
  ]

  const documentaryTypes = [
    {
      name: 'الأفلام الوثائقية المؤسسية',
      description: 'توثيق تاريخ وإنجازات الشركات والمؤسسات',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=300&fit=crop',
      duration: '15-30 دقيقة',
      audience: 'العملاء والموظفون',
      examples: ['تاريخ الشركة', 'الإنجازات', 'الرؤية المستقبلية']
    },
    {
      name: 'الأفلام التعليمية',
      description: 'محتوى تعليمي وتوعوي بصيغة وثائقية',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop',
      duration: '10-20 دقيقة',
      audience: 'الطلاب والمتعلمون',
      examples: ['العلوم', 'التاريخ', 'التكنولوجيا']
    },
    {
      name: 'الأفلام الاجتماعية',
      description: 'توثيق القضايا والمبادرات الاجتماعية',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop',
      duration: '20-45 دقيقة',
      audience: 'المجتمع العام',
      examples: ['المبادرات الخيرية', 'القضايا البيئية', 'التنمية المجتمعية']
    },
    {
      name: 'الأفلام الطبية',
      description: 'توثيق الإجراءات والتقنيات الطبية',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop',
      duration: '5-15 دقيقة',
      audience: 'المرضى والأطباء',
      examples: ['العمليات الجراحية', 'العلاجات الحديثة', 'التوعية الصحية']
    }
  ]

  const productionStages = [
    {
      stage: 1,
      title: 'البحث والتطوير',
      description: 'نبحث في الموضوع بعمق ونطور المفهوم الأساسي',
      duration: '1-2 أسبوع',
      deliverables: ['خطة البحث', 'المفهوم الأولي', 'قائمة المصادر'],
      icon: '🔍'
    },
    {
      stage: 2,
      title: 'كتابة السيناريو',
      description: 'نكتب سيناريو مفصل يحدد هيكل الفيلم',
      duration: '1-2 أسبوع',
      deliverables: ['السيناريو النهائي', 'خطة التصوير', 'قائمة المقابلات'],
      icon: '📝'
    },
    {
      stage: 3,
      title: 'التصوير الأساسي',
      description: 'تصوير المشاهد الرئيسية والمقابلات',
      duration: '2-4 أسابيع',
      deliverables: ['المواد المصورة', 'المقابلات', 'اللقطات التكميلية'],
      icon: '🎬'
    },
    {
      stage: 4,
      title: 'المونتاج والتحرير',
      description: 'تجميع المواد وإنتاج النسخة النهائية',
      duration: '2-3 أسابيع',
      deliverables: ['النسخة الأولية', 'المراجعات', 'النسخة النهائية'],
      icon: '✂️'
    },
    {
      stage: 5,
      title: 'التسليم والتوزيع',
      description: 'تسليم الفيلم بصيغ مختلفة للنشر',
      duration: '1 أسبوع',
      deliverables: ['نسخ بجودات مختلفة', 'ملفات للنشر', 'المواد الترويجية'],
      icon: '🚀'
    }
  ]

  const successfulDocumentaries = [
    {
      title: 'رحلة النجاح - تك سوليوشنز',
      client: 'تك سوليوشنز',
      category: 'مؤسسي',
      duration: '25 دقيقة',
      views: '500K مشاهدة',
      description: 'فيلم وثائقي يحكي قصة نمو الشركة من البداية حتى النجاح',
      image: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=400&h=300&fit=crop',
      awards: ['أفضل فيلم مؤسسي 2023']
    },
    {
      title: 'التعليم في عصر التكنولوجيا',
      client: 'أكاديمية المستقبل',
      category: 'تعليمي',
      duration: '18 دقيقة',
      views: '1.2M مشاهدة',
      description: 'استكشاف تأثير التكنولوجيا على التعليم الحديث',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop',
      awards: ['جائزة أفضل محتوى تعليمي']
    },
    {
      title: 'أبطال الخط الأمامي',
      client: 'مستشفى النيل الطبي',
      category: 'طبي',
      duration: '12 دقيقة',
      views: '800K مشاهدة',
      description: 'تكريم للطاقم الطبي وجهودهم في خدمة المرضى',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop',
      awards: ['جائزة التميز الطبي']
    }
  ]

  const technicalSpecs = [
    {
      aspect: 'جودة التصوير',
      specs: ['4K Ultra HD', 'HDR متقدم', 'استقرار الصورة'],
      icon: '📹'
    },
    {
      aspect: 'جودة الصوت',
      specs: ['تسجيل صوتي احترافي', 'إلغاء الضوضاء', 'موسيقى تصويرية'],
      icon: '🎵'
    },
    {
      aspect: 'المعدات',
      specs: ['كاميرات سينمائية', 'طائرات مسيرة', 'إضاءة احترافية'],
      icon: '📷'
    },
    {
      aspect: 'التحرير',
      specs: ['مونتاج متقدم', 'مؤثرات بصرية', 'تصحيح الألوان'],
      icon: '🎨'
    }
  ]

  const interviewProcess = [
    {
      step: 'التحضير',
      description: 'إعداد الأسئلة والموقع والمعدات',
      tips: ['بحث مسبق عن الضيف', 'تحضير البيئة المناسبة', 'اختبار المعدات']
    },
    {
      step: 'التصوير',
      description: 'إجراء المقابلة بطريقة احترافية',
      tips: ['خلق جو مريح', 'طرح أسئلة مفتوحة', 'التقاط ردود فعل طبيعية']
    },
    {
      step: 'المعالجة',
      description: 'تحرير المقابلة وتحسين الجودة',
      tips: ['قص المقاطع غير المرغوبة', 'تحسين الصوت', 'إضافة العناوين']
    }
  ]

  const serviceOptions = [
    { value: 'corporate-documentary', label: 'الأفلام الوثائقية المؤسسية' },
    { value: 'educational-documentary', label: 'الأفلام التعليمية' },
    { value: 'social-documentary', label: 'الأفلام الاجتماعية' },
    { value: 'medical-documentary', label: 'الأفلام الطبية' },
    { value: 'historical-documentary', label: 'الأفلام التاريخية' },
    { value: 'interview-production', label: 'إنتاج المقابلات' },
    { value: 'consultation', label: 'استشارة مجانية' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&h=1080&fit=crop"
            alt="Documentaries Hero"
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
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <Film className="w-20 h-20 text-gold" />
            </motion.div>

            <h1 className="heading-1 mb-6 text-gradient-gold">
              أفلام وثائقية احترافية
              <br />
              <span className="text-white">تحكي قصتك بطريقة مؤثرة</span>
            </h1>

            <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
              نصنع أفلاماً وثائقية تحكي قصص النجاح والإنجازات والتجارب الملهمة
              <br />
              بجودة سينمائية عالية وسرد مؤثر يترك أثراً دائماً
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="#contact" className="btn-primary text-lg px-8 py-4">
                ابدأ فيلمك الوثائقي
                <ArrowRight className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0" />
              </Link>
              <Link href="#documentaries" className="btn-outline border-white text-white hover:bg-white hover:text-gold text-lg px-8 py-4">
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
              مميزات أفلامنا الوثائقية
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم إنتاجاً وثائقياً متكاملاً بأعلى معايير الجودة والاحترافية
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {documentaryFeatures.map((feature, index) => (
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

      {/* Documentary Types Section */}
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
              أنواع الأفلام الوثائقية
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم مجموعة متنوعة من الأفلام الوثائقية لتناسب مختلف الاحتياجات
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {documentaryTypes.map((type, index) => (
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
                    src={type.image}
                    alt={type.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4 bg-gold text-black px-2 py-1 rounded-full text-xs font-bold">
                    {type.duration}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-bold text-lg mb-1">
                      {type.name}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4">
                    {type.description}
                  </p>
                  <div className="mb-4">
                    <div className="text-sm text-gray-700 mb-2">
                      <strong>الجمهور:</strong> {type.audience}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2 text-sm">أمثلة:</h4>
                      <div className="flex flex-wrap gap-1">
                        {type.examples.map((example, exIndex) => (
                          <span
                            key={exIndex}
                            className="text-xs bg-gold/10 text-gold px-2 py-1 rounded-full"
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs Section */}
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
              المواصفات التقنية
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نستخدم أحدث التقنيات والمعدات لضمان أعلى جودة إنتاج
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalSpecs.map((spec, index) => (
              <motion.div
                key={index}
                className="card p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{spec.icon}</div>
                <h3 className="font-bold text-gray-800 mb-4">
                  {spec.aspect}
                </h3>
                <ul className="space-y-2">
                  {spec.specs.map((item, specIndex) => (
                    <li key={specIndex} className="text-sm text-gray-600 flex items-center">
                      <CheckCircle className="w-3 h-3 text-gold mr-2 rtl:ml-2 rtl:mr-0 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Stages Section */}
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
              مراحل الإنتاج
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نتبع منهجية علمية مدروسة لضمان إنتاج فيلم وثائقي متميز
            </p>
          </motion.div>

          <div className="space-y-8">
            {productionStages.map((stage, index) => (
              <motion.div
                key={stage.stage}
                className="card p-8"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col lg:flex-row items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center text-black text-xl font-bold mb-4">
                      {stage.stage}
                    </div>
                    <div className="text-4xl text-center">{stage.icon}</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2 lg:mb-0">
                        {stage.title}
                      </h3>
                      <span className="text-gold font-semibold">
                        {stage.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-6">
                      {stage.description}
                    </p>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">المخرجات:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        {stage.deliverables.map((deliverable, delIndex) => (
                          <div key={delIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-gold mr-2 rtl:ml-2 rtl:mr-0 flex-shrink-0" />
                            {deliverable}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interview Process Section */}
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
              عملية إجراء المقابلات
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نتبع منهجية احترافية في إجراء المقابلات للحصول على أفضل النتائج
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {interviewProcess.map((process, index) => (
              <motion.div
                key={index}
                className="card p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="font-bold text-gray-800 mb-4 text-xl">
                  {process.step}
                </h3>
                <p className="text-gray-600 mb-6">
                  {process.description}
                </p>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-3 text-sm">نصائح مهمة:</h4>
                  <ul className="space-y-2">
                    {process.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="text-sm text-gray-600 flex items-start">
                        <CheckCircle className="w-3 h-3 text-gold mr-2 rtl:ml-2 rtl:mr-0 flex-shrink-0 mt-0.5" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Successful Documentaries Section */}
      <section id="documentaries" className="section-padding bg-gradient-dark text-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-6 text-gradient-gold">
              أفلام وثائقية حائزة على جوائز
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              اكتشف بعض الأفلام الوثائقية المتميزة التي أنتجناها وحققت نجاحاً باهراً
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successfulDocumentaries.map((doc, index) => (
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
                    src={doc.image}
                    alt={doc.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <Film className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute top-4 right-4 bg-gold text-black px-2 py-1 rounded-full text-xs font-bold">
                    {doc.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gold mb-2">
                    {doc.title}
                  </h3>
                  <p className="text-white mb-2">
                    {doc.client}
                  </p>
                  <p className="text-gray-300 text-sm mb-4">
                    {doc.description}
                  </p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gold font-bold text-sm">
                      {doc.views}
                    </span>
                    <span className="text-gray-400 text-xs">
                      {doc.category}
                    </span>
                  </div>
                  {doc.awards.length > 0 && (
                    <div className="border-t border-gray-600 pt-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">الجوائز:</h4>
                      {doc.awards.map((award, awardIndex) => (
                        <div key={awardIndex} className="flex items-center text-sm text-gold">
                          <Award className="w-4 h-4 mr-2 rtl:ml-2 rtl:mr-0" />
                          {award}
                        </div>
                      ))}
                    </div>
                  )}
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
              title="ابدأ فيلمك الوثائقي الآن"
              subtitle="تواصل معنا لمناقشة قصتك وكيف يمكننا إنتاج فيلم وثائقي يحكيها بطريقة مؤثرة ومتميزة"
              serviceOptions={serviceOptions}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
