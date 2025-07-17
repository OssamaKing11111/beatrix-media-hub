'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { 
  LayoutDashboard, 
  Image, 
  FileText, 
  Users, 
  Settings 
} from 'lucide-react'
import { useLanguage } from '@/lib/i18n/provider'

const menuItems = [
  {
    href: '/dashboard',
    label: { en: 'Dashboard', ar: 'لوحة التحكم' },
    icon: LayoutDashboard
  },
  {
    href: '/dashboard/media',
    label: { en: 'Media', ar: 'الوسائط' },
    icon: Image
  },
  {
    href: '/dashboard/requests',
    label: { en: 'Requests', ar: 'الطلبات' },
    icon: FileText
  },
  {
    href: '/dashboard/users',
    label: { en: 'Users', ar: 'المستخدمين' },
    icon: Users
  },
  {
    href: '/dashboard/settings',
    label: { en: 'Settings', ar: 'الإعدادات' },
    icon: Settings
  }
]

export function Sidebar() {
  const pathname = usePathname()
  const { language } = useLanguage()

  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4">
      <div className="mb-8">
        <h1 className="text-xl font-bold">
          {language === 'en' ? 'Beatrix Admin' : 'بياتريكس أدمن'}
        </h1>
      </div>
      
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors',
              pathname === item.href 
                ? 'bg-gray-800 text-white' 
                : 'text-gray-400 hover:text-white hover:bg-gray-800'
            )}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label[language]}</span>
          </Link>
        ))}
      </nav>
    </div>
  )
}
