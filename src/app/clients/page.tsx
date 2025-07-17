'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Utensils, 
  Stethoscope, 
  Truck, 
  MapPin, 
  Code, 
  GraduationCap, 
  Shirt, 
  Megaphone,
  ArrowRight,
  Users,
  Star
} from 'lucide-react'

import PricingSection from '@/components/PricingSection'

export default function ClientsPage() {
  const clientCategories = [
    {
      id: 'food-companies',
      title: 'شركات الأغذية',
      description: 'حلول متخصصة لشركات الأغذية والمشروبات لتعزيز علامتها التجارية',
      icon: Utensils,
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop',
      clientsCount: 45,
      projectsCount: 120,
      services: [
        'إعلانات تلفزيونية للمنتجات الغذائية',
        'تصوير فوتوغرافي احترافي للأطعمة',
        'حملات تسويقية رقمية',
        'فيديوهات وصفات وطبخ'
      ],
      successStory: 'زيادة المبيعات بنسبة 85% لشركة الأهرام للأغذية'
    },
    {
      id: 'doctors',
      title: 'الأطباء والمراكز الطبية',
      description: 'خدمات طبية متخصصة تبني الثقة وتعزز السمعة المهنية',
      icon: Stethoscope,
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop',
      clientsCount: 32,
      projectsCount: 95,
      services: [
        'فيديوهات توعوية طبية',
        'إعلانات للعيادات والمراكز الطبية',
        'محتوى تعليمي طبي',
        'حملات توعية صحية'
      ],
      successStory: 'زيادة المرضى بنسبة 60% لمستشفى النيل الطبي'
    },
    {
      id: 'transport-companies',
      title: 'شركات النقل والشحن',
      description: 'حلول إعلامية لشركات النقل والشحن لتعزيز الثقة والموثوقية',
      icon: Truck,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      clientsCount: 28,
      projectsCount: 75,
      services: [
        'إعلانات خدمات النقل',
        'فيديوهات توضيحية للخدمات',
        'حملات الأمان والموثوقية',
        'محتوى رقمي للشركات'
      ],
      successStory: 'تحسين الصورة الذهنية لشركة النقل السريع'
    },
    {
      id: 'tourism-companies',
      title: 'شركات السياحة والسفر',
      description: 'إنتاج سياحي يبرز جمال الوجهات ويجذب السياح',
      icon: MapPin,
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop',
      clientsCount: 22,
      projectsCount: 68,
      services: [
        'فيديوهات ترويجية للوجهات السياحية',
        'إعلانات الرحلات والعروض',
        'محتوى سياحي تفاعلي',
        'حملات تسويق الوجهات'
      ],
      successStory: 'زيادة الحجوزات بنسبة 70% لسياحة الشرق الأوسط'
    },
    {
      id: 'programming-companies',
      title: 'شركات البرمجة والتكنولوجيا',
      description: 'محتوى تقني متخصص يوضح الحلول التكنولوجية بطريقة مبسطة',
      icon: Code,
      image: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=600&h=400&fit=crop',
      clientsCount: 35,
      projectsCount: 110,
      services: [
        'فيديوهات شرح المنتجات التقنية',
        'إعلانات الحلول البرمجية',
        'محتوى تعليمي تقني',
        'حملات التحول الرقمي'
      ],
      successStory: 'زيادة العملاء بنسبة 90% لشركة تك سوليوشنز'
    },
    {
      id: 'education-companies',
      title: 'المؤسسات التعليمية',
      description: 'محتوى تعليمي يبرز قيمة التعليم ويجذب الطلاب',
      icon: GraduationCap,
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop',
      clientsCount: 18,
      projectsCount: 52,
      services: [
        'فيديوهات ترويجية للمؤسسات التعليمية',
        'محتوى تعليمي تفاعلي',
        'إعلانات الدورات والبرامج',
        'حملات التسجيل والقبول'
      ],
      successStory: 'زيادة التسجيل بنسبة 65% لأكاديمية المستقبل'
    },
    {
      id: 'clothing-companies',
      title: 'شركات الأزياء والملابس',
      description: 'إنتاج أنيق يبرز جمال الأزياء ويعكس الهوية التجارية',
      icon: Shirt,
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
      clientsCount: 25,
      projectsCount: 80,
      services: [
        'جلسات تصوير أزياء احترافية',
        'إعلانات المجموعات الجديدة',
        'فيديوهات عروض الأزياء',
        'محتوى موضة وستايل'
      ],
      successStory: 'زيادة المبيعات بنسبة 75% لأزياء القاهرة'
    },
    {
      id: 'digital-marketing-companies',
      title: 'شركات التسويق الرقمي',
      description: 'محتوى تسويقي متقدم يعكس خبرة الشركة في التسويق الرقمي',
      icon: Megaphone,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      clientsCount: 30,
      projectsCount: 95,
      services: [
        'فيديوهات شرح استراتيجيات التسويق',
        'إعلانات خدمات التسويق الرقمي',
        'محتوى تعليمي تسويقي',
        'حملات العلامة التجارية'
      ],
      successStory: 'تعزيز السمعة المهنية لديجيتال ماركتنج برو'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=1080&fit=crop"
            alt="Clients Background"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="relative z-10 container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading-1 mb-6 text-gradient-gold">
              عملاؤنا في جميع القطاعات
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              نخدم أكثر من 200 عميل في 8 قطاعات مختلفة، ونقدم حلولاً مخصصة تناسب طبيعة كل قطاع
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-gold mb-2">200+</div>
                <div className="text-gray-300">عميل راضٍ</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gold mb-2">8</div>
                <div className="text-gray-300">قطاعات مختلفة</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gold mb-2">600+</div>
                <div className="text-gray-300">مشروع مكتمل</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Categories */}
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
              اختر قطاعك واكتشف خدماتنا المتخصصة
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              لكل قطاع احتياجاته الخاصة، ونحن نفهم هذه الاحتياجات ونقدم الحلول المناسبة
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {clientCategories.map((category, index) => (
              <motion.div
                key={category.id}
                className="card overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse text-white">
                      <div className="p-2 bg-gold rounded-lg">
                        <category.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{category.title}</h3>
                        <div className="flex items-center space-x-4 rtl:space-x-reverse text-sm">
                          <span className="flex items-center">
                            <Users className="w-4 h-4 ml-1 rtl:mr-1 rtl:ml-0" />
                            {category.clientsCount} عميل
                          </span>
                          <span className="flex items-center">
                            <Star className="w-4 h-4 ml-1 rtl:mr-1 rtl:ml-0" />
                            {category.projectsCount} مشروع
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">خدماتنا المتخصصة:</h4>
                    <ul className="space-y-1">
                      {category.services.slice(0, 3).map((service, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-gold rounded-full ml-2 rtl:mr-2 rtl:ml-0" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gold/10 rounded-lg p-3 mb-4">
                    <div className="text-sm font-medium text-gold mb-1">قصة نجاح:</div>
                    <div className="text-sm text-gray-700">{category.successStory}</div>
                  </div>

                  <Link
                    href={`/clients/${category.id}`}
                    className="btn-primary w-full flex items-center justify-center"
                  >
                    اكتشف المزيد
                    <ArrowRight className="w-4 h-4 mr-2 rtl:ml-2 rtl:mr-0" />
                  </Link>
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
              لم تجد قطاعك؟ لا مشكلة!
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              نحن نعمل مع جميع القطاعات ونقدم حلولاً مخصصة تناسب احتياجاتك الخاصة
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
                تواصل معنا
              </Link>
              <Link href="/about" className="btn-outline border-white text-white hover:bg-white hover:text-gold text-lg px-8 py-4">
                تعرف علينا أكثر
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* قسم الباقات */}
      <section className="py-16 bg-gradient-to-br from-gold/5 to-silver/5">
        <PricingSection
          title="باقاتنا المتخصصة"
          subtitle="اختر الباقة المناسبة لاحتياجات عملك"
          plans={[
            {
              name: "الباقة الأساسية",
              price: 25000,
              description: "مثالية للشركات الصغيرة والمتوسطة",
              popularPlan: false,
              features: [
                { text: "تصوير فيديو احترافي (يوم كامل)", included: true },
                { text: "مونتاج فيديو احترافي", included: true },
                { text: "تصوير فوتوغرافي للمنتجات (20 صورة)", included: true },
                { text: "إدارة حسابات التواصل الاجتماعي لمدة شهر", included: true },
                { text: "تصميم 10 منشورات شهرياً", included: true },
                { text: "تقرير تحليلي شهري", included: true },
                { text: "دعم فني على مدار الساعة", included: false },
                { text: "استشارات تسويقية", included: false }
              ]
            },
            {
              name: "الباقة الاحترافية",
              price: 45000,
              description: "الأفضل للشركات المتوسطة والكبيرة",
              popularPlan: true,
              features: [
                { text: "تصوير فيديو احترافي (يومان كاملان)", included: true },
                { text: "مونتاج فيديو احترافي مع مؤثرات خاصة", included: true },
                { text: "تصوير فوتوغرافي للمنتجات (50 صورة)", included: true },
                { text: "إدارة حسابات التواصل الاجتماعي لمدة 3 أشهر", included: true },
                { text: "تصميم 20 منشور شهرياً", included: true },
                { text: "تقارير تحليلية أسبوعية", included: true },
                { text: "دعم فني على مدار الساعة", included: true },
                { text: "استشارات تسويقية شهرية", included: true }
              ]
            },
            {
              name: "الباقة المتقدمة",
              price: 75000,
              description: "حل متكامل للشركات الكبرى",
              popularPlan: false,
              features: [
                { text: "تصوير فيديو احترافي (3 أيام كاملة)", included: true },
                { text: "مونتاج فيديو احترافي مع رسوم متحركة", included: true },
                { text: "تصوير فوتوغرافي غير محدود", included: true },
                { text: "إدارة حسابات التواصل الاجتماعي لمدة 6 أشهر", included: true },
                { text: "تصميم 30 منشور شهرياً", included: true },
                { text: "تقارير تحليلية يومية", included: true },
                { text: "دعم فني مخصص 24/7", included: true },
                { text: "استشارات تسويقية أسبوعية", included: true }
              ]
            }
          ]}
        />
      </section>
    </div>
  )
}
