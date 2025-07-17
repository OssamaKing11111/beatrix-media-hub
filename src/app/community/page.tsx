'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Users, MessageCircle, Calendar, Award, Star, ArrowRight, CheckCircle, Heart } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export default function CommunityPage() {
  const communityBenefits = [
    {
      icon: Users,
      title: 'شبكة مهنية قوية',
      description: 'انضم إلى مجتمع من المحترفين في مجال الإعلام والتسويق'
    },
    {
      icon: MessageCircle,
      title: 'تبادل الخبرات',
      description: 'شارك خبراتك وتعلم من تجارب الآخرين في المجال'
    },
    {
      icon: Calendar,
      title: 'فعاليات حصرية',
      description: 'احضر ورش عمل ومؤتمرات وفعاليات تطوير مهني'
    },
    {
      icon: Award,
      title: 'فرص تطوير',
      description: 'احصل على فرص تدريب وتطوير مهني متقدمة'
    }
  ]

  const communityTypes = [
    {
      name: 'مجتمع المبدعين',
      description: 'مجتمع للمصممين والمبدعين في مجال الإعلام',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop',
      members: '2,500+ عضو',
      activities: ['ورش تصميم', 'مسابقات إبداعية', 'معارض فنية'],
      href: '/community/creators'
    },
    {
      name: 'مجتمع رجال الأعمال',
      description: 'شبكة لرجال الأعمال والمستثمرين في القطاع',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop',
      members: '1,800+ عضو',
      activities: ['لقاءات استثمارية', 'ندوات أعمال', 'شراكات تجارية'],
      href: '/community/business'
    },
    {
      name: 'مجتمع الطلاب',
      description: 'مجتمع للطلاب والخريجين الجدد في الإعلام',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop',
      members: '3,200+ عضو',
      activities: ['برامج تدريبية', 'فرص تطوع', 'مشاريع تخرج'],
      href: '/community/students'
    }
  ]

  const communityStats = [
    { number: '7,500+', label: 'عضو نشط', icon: Users },
    { number: '150+', label: 'فعالية سنوياً', icon: Calendar },
    { number: '50+', label: 'شراكة مهنية', icon: Heart },
    { number: '95%', label: 'معدل رضا الأعضاء', icon: Star },
  ]

  const upcomingEvents = [
    {
      title: 'مؤتمر الإعلام الرقمي 2024',
      date: '15 مارس 2024',
      time: '10:00 ص - 6:00 م',
      location: 'فندق الريتز كارلتون، الرياض',
      type: 'مؤتمر',
      attendees: '500+ مشارك',
      description: 'مؤتمر سنوي يجمع خبراء الإعلام الرقمي',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop'
    },
    {
      title: 'ورشة التصوير السينمائي',
      date: '22 مارس 2024',
      time: '2:00 م - 8:00 م',
      location: 'استوديو بيتريكس، جدة',
      type: 'ورشة عمل',
      attendees: '30 مشارك',
      description: 'ورشة عملية في تقنيات التصوير السينمائي',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=300&fit=crop'
    },
    {
      title: 'لقاء رجال الأعمال الشهري',
      date: '28 مارس 2024',
      time: '7:00 م - 10:00 م',
      location: 'نادي الأعمال، دبي',
      type: 'لقاء شبكي',
      attendees: '100 مشارك',
      description: 'لقاء شهري لتبادل الخبرات والفرص',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop'
    }
  ]

  const successStories = [
    {
      name: 'أحمد محمد',
      role: 'مخرج سينمائي',
      story: 'بدأت رحلتي في مجتمع المبدعين كطالب، والآن أخرج أفلاماً وثائقية',
      achievement: 'إخراج 5 أفلام وثائقية',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      community: 'مجتمع المبدعين'
    },
    {
      name: 'فاطمة العلي',
      role: 'رائدة أعمال',
      story: 'من خلال مجتمع رجال الأعمال، تمكنت من إطلاق شركتي الإعلامية',
      achievement: 'تأسيس شركة بـ 50 موظف',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c9c0e8e0?w=150&h=150&fit=crop&crop=face',
      community: 'مجتمع رجال الأعمال'
    },
    {
      name: 'سارة أحمد',
      role: 'مصممة جرافيك',
      story: 'تطورت مهاراتي من خلال ورش المجتمع وأصبحت مصممة معتمدة',
      achievement: 'العمل مع 100+ عميل',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      community: 'مجتمع الطلاب'
    }
  ]

  const membershipBenefits = [
    {
      category: 'التطوير المهني',
      benefits: [
        'ورش عمل متخصصة شهرياً',
        'دورات تدريبية معتمدة',
        'شهادات مهنية',
        'برامج إرشاد مهني'
      ]
    },
    {
      category: 'الشبكة المهنية',
      benefits: [
        'لقاءات شبكية منتظمة',
        'منصة تواصل حصرية',
        'دليل الأعضاء',
        'فرص تعاون مهني'
      ]
    },
    {
      category: 'الفرص الوظيفية',
      benefits: [
        'إعلانات وظائف حصرية',
        'خدمات توظيف مجانية',
        'مراجعة السيرة الذاتية',
        'تدريب على المقابلات'
      ]
    }
  ]

  const membershipOptions = [
    { value: 'creators-community', label: 'مجتمع المبدعين' },
    { value: 'business-community', label: 'مجتمع رجال الأعمال' },
    { value: 'students-community', label: 'مجتمع الطلاب' },
    { value: 'general-membership', label: 'عضوية عامة' },
    { value: 'premium-membership', label: 'عضوية مميزة' },
    { value: 'corporate-membership', label: 'عضوية مؤسسية' },
    { value: 'consultation', label: 'استشارة مجانية' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop"
            alt="Community Hero"
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
                scale: [1, 1.1, 1],
                y: [0, -10, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Users className="w-20 h-20 text-gold" />
            </motion.div>

            <h1 className="heading-1 mb-6 text-gradient-gold">
              مجتمع بيتريكس
              <br />
              <span className="text-white">حيث تلتقي العقول المبدعة</span>
            </h1>

            <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
              انضم إلى أكبر مجتمع مهني في مجال الإعلام والتسويق في المنطقة
              <br />
              وكن جزءاً من شبكة تضم آلاف المحترفين والمبدعين
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <Link href="#join" className="btn-primary text-lg px-8 py-4">
                انضم للمجتمع
                <ArrowRight className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0" />
              </Link>
              <Link href="#communities" className="btn-outline border-white text-white hover:bg-white hover:text-gold text-lg px-8 py-4">
                استكشف المجتمعات
              </Link>
            </div>

            {/* Community Stats */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              {communityStats.map((stat, index) => (
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
              مزايا الانضمام للمجتمع
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              اكتشف الفوائد العديدة التي ستحصل عليها كعضو في مجتمع بيتريكس
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {communityBenefits.map((benefit, index) => (
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

      {/* Community Types Section */}
      <section id="communities" className="section-padding">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-6 text-gradient-gold">
              مجتمعاتنا المتخصصة
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              اختر المجتمع الذي يناسب اهتماماتك وأهدافك المهنية
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {communityTypes.map((community, index) => (
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
                    src={community.image}
                    alt={community.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-bold text-lg mb-1">
                      {community.name}
                    </h3>
                    <p className="text-gold text-sm font-semibold">
                      {community.members}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4">
                    {community.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">الأنشطة:</h4>
                    <div className="flex flex-wrap gap-2">
                      {community.activities.map((activity, actIndex) => (
                        <span
                          key={actIndex}
                          className="text-xs bg-gold/10 text-gold px-2 py-1 rounded-full"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href={community.href}
                    className="btn-outline w-full text-center"
                  >
                    انضم الآن
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
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
              الفعاليات القادمة
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              لا تفوت الفعاليات والأنشطة المثيرة القادمة في مجتمعنا
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
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
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-gold text-black px-2 py-1 rounded-full text-xs font-bold">
                    {event.type}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-800 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {event.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2 rtl:ml-2 rtl:mr-0 text-gold" />
                      {event.date} - {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2 rtl:ml-2 rtl:mr-0 text-gold" />
                      {event.attendees}
                    </div>
                  </div>
                  <div className="text-gold font-semibold text-sm">
                    {event.location}
                  </div>
                </div>
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
              قصص نجاح الأعضاء
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              اكتشف كيف غيّر مجتمع بيتريكس حياة أعضائنا المهنية
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                className="card bg-white/10 backdrop-blur-sm p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <Image
                    src={story.image}
                    alt={story.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="font-bold text-gold mb-2">
                  {story.name}
                </h3>
                <p className="text-white text-sm mb-3">
                  {story.role}
                </p>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  "{story.story}"
                </p>
                <div className="text-gold font-bold text-sm mb-2">
                  {story.achievement}
                </div>
                <div className="text-gray-400 text-xs">
                  {story.community}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Benefits Section */}
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
              مزايا العضوية
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              استفد من مجموعة شاملة من الخدمات والمزايا الحصرية للأعضاء
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipBenefits.map((category, index) => (
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
                  {category.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-gold mr-2 rtl:ml-2 rtl:mr-0 flex-shrink-0 mt-0.5" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Community Form Section */}
      <section id="join" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <ContactForm
              type="community"
              title="انضم إلى مجتمع بيتريكس"
              subtitle="ابدأ رحلتك المهنية مع أكبر مجتمع إعلامي في المنطقة واستفد من شبكة واسعة من المحترفين"
              partnershipOptions={membershipOptions}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
