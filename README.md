# 🎬 بياتريكس ميديا هب | Beatrix Media Hub

منصة إعلامية احترافية متكاملة تخدم الشركات والعملاء في مجالات الإعلام والإنتاج والخدمات الرقمية

## ✨ المميزات

- 🌐 **دعم كامل للغة العربية (RTL) والإنجليزية (LTR)**
- 🎨 **تصميم فاخر بألوان ذهبية وفضية**
- 📱 **متجاوب بالكامل مع جميع الأجهزة**
- ⚡ **أداء عالي مع Next.js 14**
- 🎭 **أنيميشنات سينمائية متقدمة**
- 📊 **متصل بقاعدة بيانات Supabase**
- 🔍 **محسن لمحركات البحث (SEO)**
- 🎯 **8 قطاعات عملاء مختلفة**
- 📝 **نماذج تواصل فعالة**
- 🎪 **مكتبة إعلانات تفاعلية**

## 🛠️ التقنيات المستخدمة

- **Next.js 14** - إطار عمل React مع App Router
- **TypeScript** - للكتابة الآمنة
- **Tailwind CSS** - للتصميم السريع والمرن
- **Framer Motion** - للأنيميشنات المتقدمة
- **Supabase** - قاعدة البيانات والمصادقة
- **Lucide React** - مكتبة الأيقونات
- **React Hot Toast** - الإشعارات التفاعلية

## 🚀 التثبيت والتشغيل

### 1. استنساخ المشروع
```bash
git clone https://github.com/your-username/beatrix-media-hub.git
cd beatrix-media-hub
```

### 2. تثبيت التبعيات
```bash
npm install
```

### 3. إعداد متغيرات البيئة
انسخ ملف `.env.local.example` إلى `.env.local` وأضف قيمك:

```bash
cp .env.local.example .env.local
```

### 4. إعداد Supabase
1. اذهب إلى [supabase.com](https://supabase.com)
2. أنشئ مشروع جديد
3. اذهب إلى Settings > API
4. انسخ URL و Anon Key
5. أضفهما في ملف `.env.local`

### 5. إنشاء جداول قاعدة البيانات
قم بتشغيل هذه الاستعلامات في Supabase SQL Editor:

```sql
-- جدول العملاء
CREATE TABLE clients (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  service TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- جدول الشركاء
CREATE TABLE partners (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  company_name TEXT NOT NULL,
  email TEXT NOT NULL,
  partnership_type TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- جدول التواصل
CREATE TABLE contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- جدول الإعلانات
CREATE TABLE ads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  video_url TEXT,
  category TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- جدول آراء العملاء
CREATE TABLE testimonials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  text TEXT NOT NULL,
  image_url TEXT,
  rating INTEGER DEFAULT 5,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 6. تشغيل المشروع
```bash
npm run dev
```

افتح [http://localhost:3000](http://localhost:3000) في المتصفح.

## 📁 هيكل المشروع

```
beatrix-media-hub/
├── src/
│   ├── app/                    # صفحات Next.js (App Router)
│   │   ├── about/             # صفحة من نحن
│   │   ├── clients/           # صفحات العملاء
│   │   ├── contact/           # صفحة التواصل
│   │   ├── globals.css        # الأنماط العامة
│   │   ├── layout.tsx         # التخطيط الأساسي
│   │   └── page.tsx           # الصفحة الرئيسية
│   ├── components/            # المكونات القابلة لإعادة الاستخدام
│   │   ├── ui/               # مكونات واجهة المستخدم
│   │   ├── Footer.tsx        # تذييل الصفحة
│   │   └── Navbar.tsx        # شريط التنقل
│   ├── config/               # ملفات الإعدادات
│   │   └── content.ts        # محتوى الموقع
│   ├── lib/                  # المكتبات والأدوات
│   │   └── supabase.ts       # إعدادات Supabase
│   └── types/                # تعريفات TypeScript
├── public/                   # الملفات العامة
│   ├── images/              # الصور
│   └── videos/              # الفيديوهات
├── .env.local               # متغيرات البيئة
├── tailwind.config.ts       # إعدادات Tailwind
└── next.config.js          # إعدادات Next.js
```

## 🎨 التخصيص

### الألوان
يمكنك تعديل الألوان في `tailwind.config.ts`:

```typescript
colors: {
  gold: {
    DEFAULT: '#FFD700',
    dark: '#FFC000',
  },
  silver: {
    DEFAULT: '#C0C0C0',
  },
  // ...
}
```

### المحتوى
عدّل المحتوى في `src/config/content.ts`:

```typescript
export const siteConfig = {
  name: {
    ar: 'اسم موقعك',
    en: 'Your Site Name'
  },
  // ...
}
```

## 🚀 النشر

### النشر على Vercel (مُوصى به)

1. ادفع الكود إلى GitHub
2. اذهب إلى [vercel.com](https://vercel.com)
3. اربط حساب GitHub
4. اختر المشروع
5. أضف متغيرات البيئة:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
6. اضغط Deploy

### النشر على Netlify

1. ادفع الكود إلى GitHub
2. اذهب إلى [netlify.com](https://netlify.com)
3. اربط حساب GitHub
4. اختر المشروع
5. أضف متغيرات البيئة
6. اضغط Deploy

### النشر اليدوي

```bash
# بناء المشروع
npm run build

# تشغيل الإنتاج
npm start
```

## 📊 قاعدة البيانات

### جداول Supabase المطلوبة:

1. **clients** - طلبات العملاء
2. **partners** - طلبات الشراكة
3. **contacts** - رسائل التواصل
4. **ads** - مكتبة الإعلانات
5. **testimonials** - آراء العملاء

### إعدادات الأمان (RLS)

قم بتفعيل Row Level Security وأضف هذه السياسات:

```sql
-- السماح بالقراءة للجميع
CREATE POLICY "Enable read access for all users" ON public.testimonials
FOR SELECT USING (true);

-- السماح بالإدراج للجميع
CREATE POLICY "Enable insert for all users" ON public.clients
FOR INSERT WITH CHECK (true);
```

## 🎯 الميزات الرئيسية

### 1. الصفحة الرئيسية
- Hero section مع فيديو خلفية
- شريط العملاء المتحرك (Film Strip)
- قسم المميزات
- آراء العملاء
- إحصائيات الشركة

### 2. صفحات العملاء
- 8 فئات مختلفة من العملاء
- نماذج استشارة لكل فئة
- قصص نجاح حقيقية
- خدمات متخصصة

### 3. صفحة التواصل
- نموذج تواصل متقدم
- معلومات التواصل الكاملة
- خريطة الموقع
- روابط وسائل التواصل

### 4. صفحة من نحن
- تاريخ الشركة
- فريق العمل
- الرؤية والرسالة
- الإنجازات والجوائز

## 🔧 الصيانة والتطوير

### إضافة صفحة جديدة
```bash
# إنشاء مجلد جديد في src/app
mkdir src/app/new-page
# إنشاء ملف الصفحة
touch src/app/new-page/page.tsx
```

### إضافة مكون جديد
```bash
# إنشاء مكون في src/components
touch src/components/NewComponent.tsx
```

### تحديث المحتوى
عدّل الملفات في `src/config/content.ts` لتحديث:
- معلومات الشركة
- قائمة العملاء
- الخدمات
- فريق العمل

## 🐛 استكشاف الأخطاء

### مشاكل شائعة:

1. **خطأ في Supabase:**
   - تأكد من صحة URL و API Keys
   - تحقق من إعدادات RLS

2. **مشاكل في التصميم:**
   - تأكد من تثبيت Tailwind بشكل صحيح
   - تحقق من ملف `globals.css`

3. **مشاكل في الأنيميشن:**
   - تأكد من تثبيت Framer Motion
   - تحقق من إعدادات المتصفح

## 📞 الدعم

إذا واجهت أي مشاكل:

1. تحقق من [الوثائق](https://nextjs.org/docs)
2. ابحث في [GitHub Issues](https://github.com/your-repo/issues)
3. تواصل معنا على [البريد الإلكتروني](mailto:support@beatrixmedia.com)

## 📄 الترخيص

هذا المشروع مرخص تحت رخصة MIT. راجع ملف `LICENSE` للمزيد من التفاصيل.

## 🤝 المساهمة

نرحب بالمساهمات! يرجى قراءة `CONTRIBUTING.md` للمزيد من المعلومات.

---

**تم التطوير بـ ❤️ في مصر**

© 2024 بياتريكس ميديا هب. جميع الحقوق محفوظة.
