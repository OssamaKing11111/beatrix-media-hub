'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Users, 
  Award, 
  Target, 
  Heart, 
  Star, 
  TrendingUp,
  Camera,
  Zap,
  Shield,
  Globe
} from 'lucide-react'
import { teamMembers } from '@/config/content'

export default function AboutPage() {
  const stats = [
    { number: '500+', label: 'عميل راضٍ', icon: Users },
    { number: '1000+', label: 'مشروع مكتمل', icon: Award },
    { number: '15+', label: 'سنة خبرة', icon: TrendingUp },
    { number: '50+', label: 'جائزة', icon: Star },
  ]

  const values = [
    {
      icon: Target,
      title: 'الرؤية',
      description: 'أن نكون الشركة الرائدة في مجال الإنتاج والتسويق الرقمي في الشرق الأوسط'
    },
    {
      icon: Heart,
      title: 'الرسالة',
      description: 'نساعد الشركات والأفراد في تحقيق أهدافهم من خلال حلول إبداعية ومبتكرة'
    },
    {
      icon: Star,
      title: 'القيم',
      description: 'الجودة، الإبداع، الالتزام، الشفافية، والتميز في كل ما نقوم به'
    }
  ]

  const services = [
    {
      icon: Camera,
      title: 'الإنتاج الإعلامي',
      description: 'إنتاج فيديوهات احترافية وإعلانات تلفزيونية عالية الجودة'
    },
    {
      icon: Zap,
      title: 'التسويق الرقمي',
      description: 'استراتيجيات تسويق رقمي متقدمة لزيادة الوصول والتفاعل'
    },
    {
      icon: Shield,
      title: 'إدارة العلامة التجارية',
      description: 'بناء وتطوير الهوية البصرية والعلامة التجارية'
    },
    {
      icon: Globe,
      title: 'الحلول المتكاملة',
      description: 'حلول شاملة تغطي جميع احتياجاتك التسويقية'
    }
  ]

  const timeline = [
    {
      year: '2009',
      title: 'البداية',
      description: 'تأسيس بياتريكس ون كشركة ناشئة في مجال الإنتاج'
    },
    {
      year: '2012',
      title: 'التوسع',
      description: 'توسيع الخدمات لتشمل التسويق الرقمي وإدارة العلامات التجارية'
    },
    {
      year: '2015',
      title: 'الريادة',
      description: 'أصبحنا من الشركات الرائدة في مجال الإنتاج في مصر'
    },
    {
      year: '2018',
      title: 'التطوير',
      description: 'إطلاق قسم التكنولوجيا والحلول الرقمية المتقدمة'
    },
    {
      year: '2021',
      title: 'الانتشار',
      description: 'توسيع العمليات لتشمل دول الشرق الأوسط وشمال أفريقيا'
    },
    {
      year: '2024',
      title: 'المستقبل',
      description: 'إطلاق منصة رقمية متكاملة لخدمة العملاء في جميع أنحاء العالم'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop"
            alt="About Background"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="relative z-10 container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="heading-1 mb-6 text-gradient-gold">
                من نحن؟
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                بياتريكس ون هي شركة رائدة في مجال الإنتاج والتسويق الرقمي، تأسست عام 2009 برؤية واضحة لتقديم حلول مبتكرة تساعد الشركات والأفراد في تحقيق أهدافهم وبناء حضور قوي في السوق.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-1">15+</div>
                  <div className="text-gray-400 text-sm">سنة خبرة</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-1">500+</div>
                  <div className="text-gray-400 text-sm">عميل راضٍ</div>
                </div>
              </div>

              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                تواصل معنا
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop"
                  alt="Our Team"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-white">
                    <div className="text-lg font-bold mb-2">فريق العمل</div>
                    <div className="text-sm text-gray-300">
                      مجموعة من الخبراء المتخصصين في الإنتاج
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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
              أرقامنا تتحدث عنا
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              خلال مسيرتنا المهنية، حققنا إنجازات مميزة وبنينا علاقات قوية مع عملائنا
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="p-4 bg-gold/10 rounded-xl w-fit mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-gold" />
                </div>
                <div className="text-4xl font-bold text-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
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
              رؤيتنا ورسالتنا وقيمنا
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نؤمن بأن النجاح يأتي من خلال رؤية واضحة ورسالة محددة وقيم راسخة
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="card p-8 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="p-4 bg-gold/10 rounded-xl w-fit mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
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
              خدماتنا الأساسية
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم مجموعة شاملة من الخدمات التسويقية المتخصصة
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4 rtl:space-x-reverse p-6 bg-white rounded-xl shadow-lg"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="p-3 bg-gold/10 rounded-xl">
                  <service.icon className="w-8 h-8 text-gold" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
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
              رحلتنا عبر السنين
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              من البداية المتواضعة إلى الريادة في المجال، هذه قصة نجاحنا
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gold to-silver"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="card p-6">
                      <div className="text-2xl font-bold text-gold mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-gray-800">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-gold rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              فريق العمل
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              مجموعة من الخبراء والمتخصصين الذين يعملون بشغف لتحقيق رؤيتنا
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="card overflow-hidden text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {member.name}
                  </h3>
                  <div className="text-gold font-semibold mb-3">
                    {member.position}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-gold text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-6">
              هل أنت مستعد للانضمام إلى قصة نجاحنا؟
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              انضم إلى أكثر من 500 عميل وثقوا بنا لتحقيق أهدافهم التسويقية
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
                تواصل معنا الآن
              </Link>
              <Link href="/clients" className="btn-outline border-white text-white hover:bg-white hover:text-gold text-lg px-8 py-4">
                استكشف خدماتنا
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
