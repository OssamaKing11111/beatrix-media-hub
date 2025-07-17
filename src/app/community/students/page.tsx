'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { GraduationCap, BookOpen, Users, Award, Star, ArrowRight, CheckCircle, Lightbulb } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export default function StudentsCommunityPage() {
  const studentBenefits = [
    {
      icon: BookOpen,
      title: 'برامج تعليمية',
      description: 'دورات تدريبية متخصصة في مجال الإعلام والتسويق'
    },
    {
      icon: Users,
      title: 'شبكة طلابية',
      description: 'تواصل مع زملاء من مختلف الجامعات والتخصصات'
    },
    {
      icon: Award,
      title: 'شهادات معتمدة',
      description: 'احصل على شهادات معتمدة تعزز سيرتك الذاتية'
    },
    {
      icon: Lightbulb,
      title: 'مشاريع عملية',
      description: 'شارك في مشاريع حقيقية واكتسب خبرة عملية'
    }
  ]

  const studyFields = [
    {
      name: 'الإعلام والصحافة',
      description: 'تعلم أساسيات الصحافة والإعلام الرقمي',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=300&fit=crop',
      courses: ['صحافة رقمية', 'إذاعة وتلفزيون', 'كتابة إعلامية'],
      duration: '6 أشهر'
    },
    {
      name: 'التسويق الرقمي',
      description: 'استراتيجيات التسويق عبر المنصات الرقمية',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      courses: ['وسائل التواصل', 'إعلانات رقمية', 'تحليل البيانات'],
      duration: '4 أشهر'
    },
    {
      name: 'التصميم الجرافيكي',
      description: 'تصميم الهويات البصرية والمطبوعات',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
      courses: ['Photoshop', 'Illustrator', 'تصميم الهوية'],
      duration: '5 أشهر'
    },
    {
      name: 'إنتاج المحتوى',
      description: 'إنتاج محتوى إبداعي للمنصات المختلفة',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
      courses: ['كتابة المحتوى', 'إنتاج الفيديو', 'البودكاست'],
      duration: '3 أشهر'
    }
  ]

  const studentStats = [
    { number: '3,200+', label: 'طالب نشط', icon: Users },
    { number: '50+', label: 'دورة تدريبية', icon: BookOpen },
    { number: '200+', label: 'مشروع تخرج', icon: Award },
    { number: '95%', label: 'معدل التوظيف', icon: Star },
  ]

  const successfulStudents = [
    {
      name: 'سارة أحمد',
      major: 'إعلام وصحافة',
      university: 'جامعة الملك سعود',
      achievement: 'مراسلة في قناة العربية',
      project: 'تقرير عن ريادة الأعمال',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'محمد علي',
      major: 'تسويق رقمي',
      university: 'الجامعة الأمريكية',
      achievement: 'مؤسس وكالة تسويق',
      project: 'حملة تسويقية لشركة ناشئة',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'نور الدين',
      major: 'تصميم جرافيكي',
      university: 'جامعة الأميرة نورة',
      achievement: 'مصممة في شركة عالمية',
      project: 'هوية بصرية لمؤسسة خيرية',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c9c0e8e0?w=150&h=150&fit=crop&crop=face'
    }
  ]

  const upcomingPrograms = [
    {
      title: 'برنامج الصحافة الاستقصائية',
      startDate: '1 مايو 2024',
      duration: '8 أسابيع',
      instructor: 'د. أحمد الصحفي',
      level: 'متقدم',
      seats: '25 مقعد متاح',
      price: 'مجاني للطلاب',
      description: 'تعلم تقنيات الصحافة الاستقصائية',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=300&fit=crop'
    },
    {
      title: 'ورشة إنتاج المحتوى الرقمي',
      startDate: '15 مايو 2024',
      duration: '4 أسابيع',
      instructor: 'سارة المحتوى',
      level: 'مبتدئ',
      seats: '30 مقعد متاح',
      price: '150 ريال',
      description: 'إنتاج محتوى جذاب للمنصات الرقمية',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop'
    },
    {
      title: 'دورة التصوير الصحفي',
      startDate: '1 يونيو 2024',
      duration: '6 أسابيع',
      instructor: 'محمد المصور',
      level: 'متوسط',
      seats: '20 مقعد متاح',
      price: '200 ريال',
      description: 'أساسيات التصوير الصحفي والوثائقي',
      image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop'
    }
  ]

  const scholarshipPrograms = [
    {
      name: 'منحة التميز الأكاديمي',
      description: 'للطلاب المتفوقين أكاديمياً',
      coverage: '100% من الرسوم',
      requirements: ['معدل 3.5 فأعلى', 'خطاب توصية', 'مقال شخصي'],
      deadline: '30 أبريل 2024'
    },
    {
      name: 'منحة الإبداع والابتكار',
      description: 'للطلاب أصحاب المشاريع الإبداعية',
      coverage: '75% من الرسوم',
      requirements: ['مشروع إبداعي', 'عرض تقديمي', 'خطة عمل'],
      deadline: '15 مايو 2024'
    },
    {
      name: 'منحة الحاجة المالية',
      description: 'للطلاب من ذوي الدخل المحدود',
      coverage: '50% من الرسوم',
      requirements: ['إثبات الحاجة المالية', 'خطاب دافع', 'سجل أكاديمي'],
      deadline: '31 مايو 2024'
    }
  ]

  const careerServices = [
    {
      service: 'التوجيه المهني',
      description: 'جلسات إرشاد فردية لتخطيط المسار المهني',
      icon: '🎯'
    },
    {
      service: 'تطوير السيرة الذاتية',
      description: 'مساعدة في كتابة وتحسين السيرة الذاتية',
      icon: '📄'
    },
    {
      service: 'التدريب على المقابلات',
      description: 'محاكاة مقابلات العمل والتدريب عليها',
      icon: '🎤'
    },
    {
      service: 'فرص التدريب',
      description: 'ربط الطلاب بفرص التدريب في الشركات',
      icon: '🏢'
    }
  ]

  const membershipOptions = [
    { value: 'basic-student', label: 'عضوية طلابية أساسية' },
    { value: 'premium-student', label: 'عضوية طلابية مميزة' },
    { value: 'graduate-program', label: 'برنامج الخريجين' },
    { value: 'scholarship-application', label: 'طلب منحة دراسية' },
    { value: 'internship-program', label: 'برنامج التدريب' },
    { value: 'career-counseling', label: 'استشارة مهنية' },
    { value: 'project-collaboration', label: 'مشروع تعاوني' },
    { value: 'consultation', label: 'استشارة مجانية' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&h=1080&fit=crop"
            alt="Students Community Hero"
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
                rotate: [0, 5, -5, 0],
                y: [0, -5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <GraduationCap className="w-20 h-20 text-gold" />
            </motion.div>

            <h1 className="heading-1 mb-6 text-gradient-gold">
              مجتمع الطلاب
              <br />
              <span className="text-white">مستقبلك يبدأ هنا</span>
            </h1>

            <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
              انضم إلى أكبر مجتمع طلابي في مجال الإعلام والتسويق
              <br />
              وابدأ رحلتك المهنية مع أفضل البرامج التدريبية والفرص العملية
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <Link href="#join" className="btn-primary text-lg px-8 py-4">
                انضم للطلاب
                <ArrowRight className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0" />
              </Link>
              <Link href="#programs" className="btn-outline border-white text-white hover:bg-white hover:text-gold text-lg px-8 py-4">
                تصفح البرامج
              </Link>
            </div>

            {/* Student Stats */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              {studentStats.map((stat, index) => (
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
              مزايا مجتمع الطلاب
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              اكتشف الفوائد الحصرية التي ستحصل عليها كعضو في مجتمع الطلاب
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {studentBenefits.map((benefit, index) => (
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

      {/* Study Fields Section */}
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
              مجالات الدراسة
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              استكشف المجالات الدراسية المختلفة المتاحة في مجتمعنا
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {studyFields.map((field, index) => (
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
                      {field.duration}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4">
                    {field.description}
                  </p>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">المقررات:</h4>
                    <div className="flex flex-wrap gap-2">
                      {field.courses.map((course, courseIndex) => (
                        <span
                          key={courseIndex}
                          className="text-xs bg-gold/10 text-gold px-2 py-1 rounded-full"
                        >
                          {course}
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

      {/* Successful Students Section */}
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
              طلاب متميزون
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              تعرف على بعض الطلاب المتميزين في مجتمعنا
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successfulStudents.map((student, index) => (
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
                    src={student.image}
                    alt={student.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">
                  {student.name}
                </h3>
                <p className="text-gold font-semibold text-sm mb-1">
                  {student.major}
                </p>
                <p className="text-gray-600 text-sm mb-3">
                  {student.university}
                </p>
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-gray-600">
                    <strong>الإنجاز:</strong> {student.achievement}
                  </div>
                  <div className="text-sm text-gray-600">
                    <strong>المشروع:</strong> {student.project}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Programs Section */}
      <section id="programs" className="section-padding">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-6 text-gradient-gold">
              البرامج القادمة
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              لا تفوت البرامج التدريبية القادمة المصممة خصيصاً للطلاب
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingPrograms.map((program, index) => (
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
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-gold text-black px-2 py-1 rounded-full text-xs font-bold">
                    {program.level}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-800 mb-2">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {program.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="text-sm text-gray-600">
                      <strong>تاريخ البدء:</strong> {program.startDate}
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>المدة:</strong> {program.duration}
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>المدرب:</strong> {program.instructor}
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>المقاعد:</strong> {program.seats}
                    </div>
                  </div>
                  <div className="text-gold font-bold text-lg">
                    {program.price}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarship Programs Section */}
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
              برامج المنح الدراسية
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              استفد من برامج المنح المتاحة لدعم رحلتك التعليمية
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {scholarshipPrograms.map((scholarship, index) => (
              <motion.div
                key={index}
                className="card p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold mb-3 text-gray-800">
                  {scholarship.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {scholarship.description}
                </p>
                <div className="mb-4">
                  <div className="text-gold font-bold text-lg mb-3">
                    {scholarship.coverage}
                  </div>
                  <h4 className="font-semibold text-gray-700 mb-2 text-sm">المتطلبات:</h4>
                  <ul className="space-y-1">
                    {scholarship.requirements.map((requirement, reqIndex) => (
                      <li key={reqIndex} className="text-sm text-gray-600 flex items-center">
                        <CheckCircle className="w-3 h-3 text-gold mr-2 rtl:ml-2 rtl:mr-0 flex-shrink-0" />
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-red-600 font-semibold text-sm">
                  آخر موعد: {scholarship.deadline}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Services Section */}
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
              خدمات التوظيف
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              نساعدك في بناء مسارك المهني وإيجاد الفرص المناسبة
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {careerServices.map((service, index) => (
              <motion.div
                key={index}
                className="card bg-white/10 backdrop-blur-sm p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-bold text-gold mb-3">
                  {service.service}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
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
              title="انضم إلى مجتمع الطلاب"
              subtitle="ابدأ رحلتك التعليمية والمهنية معنا واستفد من أفضل البرامج والفرص المتاحة"
              partnershipOptions={membershipOptions}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
