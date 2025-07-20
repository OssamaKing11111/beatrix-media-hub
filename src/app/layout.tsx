import type { Metadata } from 'next'
import { Toaster } from 'react-hot-toast'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { TranslationProvider } from '@/components/TranslationProvider'
import { SupabaseProvider } from '@/lib/supabase/provider'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'بياتريكس ون | منصتك الشاملة',
    template: '%s | بياتريكس ون',
  },
  description: 'منصة بياتريكس ون - حلول إعلامية متكاملة',
  keywords: ['بياتريكس ون', 'إنتاج إعلامي', 'تسويق رقمي', 'تصوير', 'مونتاج', 'موشن جرافيك'],
  authors: [{ name: 'بياتريكس ون' }],
  creator: 'بياتريكس ون',
  publisher: 'بياتريكس ون',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${inter.className} font-arabic antialiased`}>
        <TranslationProvider>
          <SupabaseProvider>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-1 pt-20">{children}</main>
              <Footer />
            </div>
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: '#ffffff',
                  color: '#000000',
                },
              }}
            />
          </SupabaseProvider>
        </TranslationProvider>
      </body>
    </html>
  )
}
