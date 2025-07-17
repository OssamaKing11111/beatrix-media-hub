'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Film, Camera, Mic, Monitor, Star, ArrowRight, CheckCircle, Award } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export default function ProductionPartnersPage() {
  const productionBenefits = [
    {
      icon: Film,
      title: 'إنتاج متطور',
      description: 'الوصول إلى أحدث تقنيات الإنتاج والمعدات المتطورة'
    },
    {
      icon: Camera,
      title: 'جودة سينمائية',
      description: 'إنتاج بجودة سينمائية عالية تضاهي المعايير العالمية'
    },
    {
      icon: Mic,
      title: 'تسجيل صوتي احترافي',
      description: 'استوديوهات تسجيل متقدمة وتقنيات صوتية عالية الجودة'
    },
    {
      icon: Monitor,
      title: 'مونتاج متقدم',
      description: 'خدمات مونتاج وتحرير باستخدام أحدث البرامج والتقنيات'
    }
  ]

  const productionServices = [
    {
      name: 'إنتاج الأفلام',
      description: 'إنتاج أفلام سينمائية ووثائقية بجودة عالية',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=300&fit=crop',
      specialties: ['أفلام سينمائية', 'أفلام وثائقية', 'أفلام قصيرة'],
      equipment: 'كاميرات 8K'
    },
    {
      name: 'إنتاج الإعلانات',
      description: 'إنتاج إعلانات تجارية وترويجية مؤثرة',
      image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=400&h=300&fit=crop',
      specialties: ['إعلانات تلفزيونية', 'إعلانات رقمية', 'حملات ترويجية'],
      equipment: 'استوديوهات متكاملة'
    },
    {
      name: 'إنتاج المحتوى الرقمي',
      description: 'إنتاج محتوى رقمي للمنصات الإلكترونية',
      image: 'https://images.unsplash.com/photo-1551818255-e6e10975cd17?w=400&h=300&fit=crop',
      specialties: ['فيديوهات قصيرة', 'محتوى تفاعلي', 'بودكاست'],
      equipment: 'معدات رقمية متطورة'
    },
    {
      name: 'الإنتاج الصوتي',
      description: 'خدمات تسجيل وإنتاج صوتي متخصصة',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=300&fit=crop',
      specialties: ['تسجيل موسيقي', 'دبلجة', 'مؤثرات صوتية'],
      equipment: 'استوديوهات صوتية عازلة'
    }
  ]

  const partnershipTypes = [
    {
      type: 'الشراكة الإنتاجية',
      description: 'تعاون في إنتاج المشاريع الكبرى',
      benefits: ['تقاسم التكاليف', 'خبرات متنوعة', 'مخاطر أقل'],
      commitment: 'طويل المدى'
    },
    {
      type: 'تأجير المعدات',
      description: 'استئجار المعدات والاستوديوهات',
      benefits: ['تكلفة أقل', 'معدات متطورة', 'مرونة في الاستخدام'],
      commitment: 'حسب المشروع'
    },
    {
      type: 'الخدمات التقنية',
      description: 'تقديم خدمات تقنية متخصصة',
      benefits: ['خبرة تقنية', 'جودة عالية', 'سرعة في التنفيذ'],
      commitment: 'متوسط المدى'
    },
    {
      type: 'التطوير المشترك',
      description: 'تطوير تقنيات وحلول جديدة',
      benefits: ['ابتكار', 'تطوير مستمر', 'ميزة تنافسية'],
      commitment: 'استراتيجي'
    }
  ]

  const productionStats = [
    { number: '200+', label: 'مشروع مكتمل', icon: Film },
    { number: '50+', label: 'شريك إنتاج', icon: Camera },
    { number: '15+', label: 'استوديو', icon: Monitor },
    { number: '95%', label: 'معدل رضا العملاء', icon: Star },
  ]

  const successfulProjects = [
    {
      project: 'فيلم "رحلة النجاح"',
      partner: 'استوديو الإنتاج الذهبي',
      type: 'فيلم وثائقي',
      achievement: 'جائزة أفضل فيلم وثائقي',
      budget: '500,000 ريال',
      description: 'إنتاج مشترك لفيلم وثائقي عن ريادة الأعمال',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=300&fit=crop'
    },
    {
      project: 'حملة "المستقبل الرقمي"',
      partner: 'شركة الإبداع الإعلامي',
      type: 'حملة إعلانية',
      achievement: '10M مشاهدة',
      budget: '300,000 ريال',
      description: 'حملة إعلانية متكاملة للتحول الرقمي',
      image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=400&h=300&fit=crop'
    },
    {
      project: 'سلسلة "تقنيات المستقبل"',
      partner: 'استوديو المحتوى الرقمي',
      type: 'محتوى رقمي',
      achievement: '50 حلقة منتجة',
      budget: '200,000 ريال',
      description: 'سلسلة تعليمية عن التقنيات الحديثة',
      image: 'https://images.unsplash.com/photo-1551818255-e6e10975cd17?w=400&h=300&fit=crop'
    }
  ]

  const technicalCapabilities = [
    {
      category: 'معدات التصوير',
      capabilities: [
        'كاميرات 8K و 4K',
        'عدسات سينمائية متنوعة',
        'أنظمة استقرار متقدمة',
        'طائرات مسيرة للتصوير الجوي'
      ],
      icon: '📹'
    },
    {
      category: 'معدات الإضاءة',
      capabilities: [
        'إضاءة LED متطورة',
        'أنظمة إضاءة ذكية',
        'معدات إضاءة طبيعية',
        'تحكم لاسلكي في الإضاءة'
      ],
      icon: '💡'
    },
    {
      category: 'معدات الصوت',
      capabilities: [
        'ميكروفونات احترافية',
        'أنظمة تسجيل متعددة القنوات',
        'معالجة صوتية متقدمة',
        'استوديوهات عازلة للصوت'
      ],
      icon: '🎵'
    },
    {
      category: 'تقنيات المونتاج',
      capabilities: [
        'برامج مونتاج متقدمة',
        'محطات عمل عالية الأداء',
        'تقنيات الواقع المعزز',
        'مؤثرات بصرية متطورة'
      ],
      icon: '🎬'
    }
  ]

  const partnerRequirements = [
    {
      category: 'المتطلبات التقنية',
      requirements: [
        'معدات إنتاج حديثة',
        'فريق تقني مؤهل',
        'استوديوهات مجهزة',
        'أنظمة أمان وحماية'
      ]
    },
    {
      category: 'المتطلبات المهنية',
      requirements: [
        'خبرة لا تقل عن 5 سنوات',
        'سجل أعمال متميز',
        'شهادات جودة معتمدة',
        'التزام بالمواعيد'
      ]
    },
    {
      category: 'المتطلبات المالية',
      requirements: [
        'قدرة مالية مناسبة',
        'تأمين على المعدات',
        'ضمانات مالية',
        'مرونة في الدفع'
      ]
    }
  ]

  const serviceOptions = [
    { value: 'film-production', label: 'إنتاج الأفلام' },
    { value: 'commercial-production', label: 'إنتاج الإعلانات' },
    { value: 'digital-content', label: 'المحتوى الرقمي' },
    { value: 'audio-production', label: 'الإنتاج الصوتي' },
    { value: 'equipment-rental', label: 'تأجير المعدات' },
    { value: 'technical-services', label: 'الخدمات التقنية' },
    { value: 'joint-development', label: 'التطوير المشترك' },
    { value: 'consultation', label: 'استشارة مجانية' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&h=1080&fit=crop"
            alt="Production Partners Hero"
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
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <Film className="w-20 h-20 text-gold" />
            </motion.div>

            <h1 className="heading-1 mb-6 text-gradient-gold">
              شراكة الإنتاج
              <br />
              <span className="text-white">إبداع بلا حدود</span>
            </h1>

            <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
              انضم إلى شبكة شركاء الإنتاج الرائدة واستفد من أحدث التقنيات والخبرات
              <br />
              لإنتاج محتوى إعلامي متميز يحقق أهدافك ويتجاوز توقعاتك
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <Link href="#contact" className="btn-primary text-lg px-8 py-4">
                ابدأ شراكة الإنتاج
                <ArrowRight className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0" />
              </Link>
              <Link href="#services" className="btn-outline border-white text-white hover:bg-white hover:text-gold text-lg px-8 py-4">
                استكشف خدماتنا
              </Link>
            </div>

            {/* Production Stats */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              {productionStats.map((stat, index) => (
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
              مزايا شراكة الإنتاج
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم شراكات إنتاجية متكاملة تجمع بين الخبرة والتقنية والإبداع
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productionBenefits.map((benefit, index) => (
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

      {/* Production Services Section */}
      <section id="services" className="section-padding">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-6 text-gradient-gold">
              خدمات الإنتاج
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم مجموعة شاملة من خدمات الإنتاج الإعلامي بأعلى معايير الجودة
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productionServices.map((service, index) => (
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
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-bold text-lg mb-1">
                      {service.name}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2 text-sm">التخصصات:</h4>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {service.specialties.map((specialty, specIndex) => (
                        <span
                          key={specIndex}
                          className="text-xs bg-gold/10 text-gold px-2 py-1 rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>المعدات:</strong> {service.equipment}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types Section */}
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
              أنواع الشراكات
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم أنواعاً متعددة من الشراكات الإنتاجية لتناسب مختلف الاحتياجات
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={index}
                className="card p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold mb-3 text-gray-800">
                  {type.type}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {type.description}
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2 text-sm">المزايا:</h4>
                  <ul className="space-y-1">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-600 flex items-center">
                        <CheckCircle className="w-3 h-3 text-gold mr-2 rtl:ml-2 rtl:mr-0 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-gold font-semibold text-sm">
                  الالتزام: {type.commitment}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Capabilities Section */}
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
              القدرات التقنية
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نمتلك أحدث التقنيات والمعدات لضمان إنتاج عالي الجودة
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                className="card p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{capability.icon}</div>
                <h3 className="font-bold text-gray-800 mb-4">
                  {capability.category}
                </h3>
                <ul className="space-y-2">
                  {capability.capabilities.map((item, capIndex) => (
                    <li key={capIndex} className="text-sm text-gray-600 flex items-center">
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

      {/* Partner Requirements Section */}
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
              متطلبات الشراكة
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نحدد معايير واضحة لضمان نجاح شراكة الإنتاج
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerRequirements.map((category, index) => (
              <motion.div
                key={index}
                className="card p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-6 text-gray-800 text-center">
                  {category.category}
                </h3>
                <ul className="space-y-3">
                  {category.requirements.map((requirement, reqIndex) => (
                    <li key={reqIndex} className="flex items-start text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-gold mr-2 rtl:ml-2 rtl:mr-0 flex-shrink-0 mt-0.5" />
                      {requirement}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Successful Projects Section */}
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
              مشاريع إنتاج ناجحة
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              اكتشف بعض المشاريع الناجحة التي أنتجناها بالشراكة مع أفضل الاستوديوهات
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successfulProjects.map((project, index) => (
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
                    src={project.image}
                    alt={project.project}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-gold text-black px-2 py-1 rounded-full text-xs font-bold">
                    {project.budget}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gold mb-2">
                    {project.project}
                  </h3>
                  <p className="text-white text-sm mb-2">
                    {project.partner}
                  </p>
                  <p className="text-gray-300 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400 text-xs">
                      {project.type}
                    </span>
                  </div>
                  <div className="text-gold font-bold flex items-center">
                    <Award className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0" />
                    {project.achievement}
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
              type="partner"
              title="ابدأ شراكة الإنتاج الآن"
              subtitle="تواصل معنا لمناقشة كيف يمكننا التعاون في إنتاج محتوى إعلامي متميز يحقق أهدافك"
              partnershipOptions={serviceOptions}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
