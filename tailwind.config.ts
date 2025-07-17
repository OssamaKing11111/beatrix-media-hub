import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          DEFAULT: '#FFD700',
          dark: '#FFC000',
        },
        silver: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          DEFAULT: '#C0C0C0',
        },
        brand: {
          black: '#1A1A1A',
          white: '#FFFFFF',
          gray: {
            light: '#F8F9FA',
            dark: '#6C757D',
          }
        }
      },
      fontFamily: {
        arabic: ['Cairo', 'Tajawal', 'sans-serif'],
        english: ['Inter', 'Poppins', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee2': 'marquee2 25s linear infinite',
        'pulse-gold': 'pulse-gold 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'rotate-slow': 'rotate-slow 3s linear infinite',
        'fade-in': 'fade-in 0.5s ease-in-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'slide-down': 'slide-down 0.3s ease-out',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'pulse-gold': {
          '0%, 100%': {
            opacity: '1',
            boxShadow: '0 0 0 0 rgba(255, 215, 0, 0.7)',
          },
          '50%': {
            opacity: '.8',
            boxShadow: '0 0 0 10px rgba(255, 215, 0, 0)',
          },
        },
        'rotate-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #FFD700 0%, #FFC000 100%)',
        'gradient-silver': 'linear-gradient(135deg, #C0C0C0 0%, #A0A0A0 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1A1A1A 0%, #000000 100%)',
        'hero-gradient': 'linear-gradient(135deg, rgba(255, 215, 0, 0.9) 0%, rgba(26, 26, 26, 0.9) 100%)',
      },
      boxShadow: {
        'gold': '0 4px 14px 0 rgba(255, 215, 0, 0.39)',
        'silver': '0 4px 14px 0 rgba(192, 192, 192, 0.39)',
        'dark': '0 4px 14px 0 rgba(26, 26, 26, 0.39)',
      },
    },
  },
  plugins: [],
}
export default config
