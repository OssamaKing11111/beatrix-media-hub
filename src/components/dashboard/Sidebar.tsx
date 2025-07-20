'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { 
  LayoutDashboard, 
  FileText, 
  Image, 
  Video, 
  Users, 
  Building2, 
  Globe, 
  MessageSquare, 
  Star, 
  Settings, 
  Home,
  Briefcase,
  Heart,
  GraduationCap,
  Utensils,
  Car,
  Plane,
  Camera,
  Palette,
  Code,
  TrendingUp
} from "lucide-react";

const sidebarLinks = [
  {
    title: "Dashboard",
    items: [
      { href: "/dashboard", label: "dashboard", icon: LayoutDashboard },
    ]
  },
  {
    title: "Main Pages",
    items: [
      { href: "/dashboard/page-content/home", label: "homepage", icon: Home },
      { href: "/dashboard/page-content/about", label: "about", icon: FileText },
      { href: "/dashboard/page-content/contact", label: "contact", icon: MessageSquare },
    ]
  },
  {
    title: "Services",
    items: [
      { href: "/dashboard/page-content/production", label: "production", icon: Video },
      { href: "/dashboard/page-content/media", label: "media", icon: Image },
      { href: "/dashboard/page-content/ads-library", label: "ads_library", icon: Globe },
    ]
  },
  {
    title: "Client Categories",
    items: [
      { href: "/dashboard/page-content/clothing-companies", label: "clothing_companies", icon: Palette },
      { href: "/dashboard/page-content/food-companies", label: "food_companies", icon: Utensils },
      { href: "/dashboard/page-content/education-companies", label: "education_companies", icon: GraduationCap },
      { href: "/dashboard/page-content/doctors", label: "doctors", icon: Heart },
      { href: "/dashboard/page-content/startup-companies", label: "startup_companies", icon: TrendingUp },
      { href: "/dashboard/page-content/programming-companies", label: "programming_companies", icon: Code },
      { href: "/dashboard/page-content/digital-marketing-companies", label: "digital_marketing_companies", icon: Globe },
      { href: "/dashboard/page-content/tourism-companies", label: "tourism_companies", icon: Plane },
      { href: "/dashboard/page-content/transport-companies", label: "transport_companies", icon: Car },
    ]
  },
  {
    title: "Community",
    items: [
      { href: "/dashboard/page-content/community", label: "community", icon: Users },
      { href: "/dashboard/page-content/business", label: "business", icon: Building2 },
      { href: "/dashboard/page-content/creators", label: "creators", icon: Camera },
      { href: "/dashboard/page-content/initiatives", label: "initiatives", icon: Heart },
      { href: "/dashboard/page-content/startups", label: "startups", icon: TrendingUp },
      { href: "/dashboard/page-content/students", label: "students", icon: GraduationCap },
      { href: "/dashboard/page-content/civil-society", label: "civil_society", icon: Users },
    ]
  },
  {
    title: "Partners",
    items: [
      { href: "/dashboard/page-content/partners", label: "partners", icon: Building2 },
      { href: "/dashboard/page-content/advertising-partners", label: "advertising_partners", icon: Globe },
      { href: "/dashboard/page-content/production-partners", label: "production_partners", icon: Video },
      { href: "/dashboard/page-content/distribution-companies", label: "distribution_companies", icon: Briefcase },
    ]
  },
  {
    title: "Production Services",
    items: [
      { href: "/dashboard/page-content/cinematic-intro", label: "cinematic_intro", icon: Video },
      { href: "/dashboard/page-content/documentaries", label: "documentaries", icon: Camera },
      { href: "/dashboard/page-content/field-ads", label: "field_ads", icon: Video },
      { href: "/dashboard/page-content/short-videos", label: "short_videos", icon: Video },
    ]
  },
  {
    title: "Ads Library",
    items: [
      { href: "/dashboard/page-content/ads-archive", label: "ads_archive", icon: Globe },
      { href: "/dashboard/page-content/famous-ads-egypt", label: "famous_ads_egypt", icon: Star },
      { href: "/dashboard/page-content/global-ads", label: "global_ads", icon: Globe },
    ]
  },
  {
    title: "Management",
    items: [
      { href: "/dashboard/requests", label: "requests", icon: MessageSquare },
      { href: "/dashboard/testimonials", label: "testimonials", icon: Star },
      { href: "/dashboard/settings", label: "settings", icon: Settings },
    ]
  }
];

export default function Sidebar() {
  const { t } = useTranslation("common");
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen bg-white border-r overflow-y-auto">
      <div className="p-6 border-b">
        <h2 className="text-xl font-bold text-gray-900">{t("dashboard")}</h2>
        <p className="text-sm text-gray-600 mt-1">Beatrix Media Hub</p>
      </div>
      
      <nav className="p-4">
        {sidebarLinks.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-6">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">
              {t(section.title.toLowerCase())}
            </h3>
            <div className="space-y-1">
              {section.items.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;
                return (
          <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                      isActive 
                        ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{t(link.label)}</span>
          </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}
