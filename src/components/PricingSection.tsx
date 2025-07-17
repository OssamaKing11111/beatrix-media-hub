'use client'

import { Check } from 'lucide-react'
import Link from 'next/link'

interface Feature {
  text: string
  included: boolean
}

interface PricingPlan {
  name: string
  price: number
  description: string
  features: Feature[]
  popularPlan?: boolean
}

interface PricingProps {
  title: string
  subtitle: string
  plans: PricingPlan[]
}

export default function PricingSection({ title, subtitle, plans }: PricingProps) {
  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-gray-600">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative rounded-2xl p-8 ${
              plan.popularPlan
                ? 'bg-gradient-to-br from-gold/20 to-silver/20 shadow-xl'
                : 'bg-white shadow-lg'
            }`}
          >
            {plan.popularPlan && (
              <div className="absolute -top-4 right-0 left-0 mx-auto w-fit">
                <span className="bg-gold text-white text-sm py-1 px-3 rounded-full">
                  الأكثر شعبية
                </span>
              </div>
            )}

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <div className="text-3xl font-bold text-gold">
                {plan.price.toLocaleString()} ج.م
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li
                  key={featureIndex}
                  className={`flex items-center ${
                    feature.included ? 'text-gray-800' : 'text-gray-400'
                  }`}
                >
                  <Check
                    className={`w-5 h-5 ml-2 ${
                      feature.included ? 'text-gold' : 'text-gray-300'
                    }`}
                  />
                  {feature.text}
                </li>
              ))}
            </ul>

            <div className="text-center">
              <Link
                href="/contact"
                className={`inline-block w-full py-3 px-6 rounded-lg transition-colors ${
                  plan.popularPlan
                    ? 'bg-gold hover:bg-gold/90 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}
              >
                اختر هذه الباقة
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <div className="text-xl font-semibold mb-4">نظام تقسيط مرن</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="bg-white shadow rounded-lg p-4">
            <div className="font-bold mb-2">3 أشهر</div>
            <div className="text-gray-600">بدون فوائد</div>
          </div>
          <div className="bg-white shadow rounded-lg p-4">
            <div className="font-bold mb-2">6 أشهر</div>
            <div className="text-gray-600">فائدة 5%</div>
          </div>
          <div className="bg-white shadow rounded-lg p-4">
            <div className="font-bold mb-2">12 شهر</div>
            <div className="text-gray-600">فائدة 10%</div>
          </div>
        </div>
        <div className="mt-6 text-gray-600">
          * جميع الباقات قابلة للتخصيص حسب احتياجاتك
        </div>
      </div>
    </section>
  )
}
