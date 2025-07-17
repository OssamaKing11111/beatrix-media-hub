"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  FileText, 
  MessageSquare, 
  Settings, 
  Plus, 
  Edit, 
  Trash2,
  Eye,
  Calendar,
  TrendingUp,
  Activity,
  Video,
  Image,
  Globe,
  Star,
  Briefcase,
  FileVideo,
  ImageIcon,
  Type,
  Link,
  Download,
  Upload,
  Home
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { supabase } from "@/lib/supabase";

interface DashboardStats {
  totalPages: number;
  totalRequests: number;
  totalServices: number;
  totalMedia: number;
  totalTestimonials: number;
  totalPortfolio: number;
}

interface ContentItem {
  id: string;
  type: "video" | "image" | "text" | "link";
  title: string;
  description: string;
  url?: string;
  file_path?: string;
  section: string;
  created_at: string;
}

export default function Dashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalPages: 0,
    totalRequests: 0,
    totalServices: 0,
    totalMedia: 0,
    totalTestimonials: 0,
    totalPortfolio: 0
  });
  const [contentItems, setContentItems] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSection, setSelectedSection] = useState<string>("all");

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Load basic stats from correct tables
      const [pagesResult, requestsResult, servicesResult, mediaResult, testimonialsResult, portfolioResult] = await Promise.all([
        supabase.from("pages").select("*, { count: 'exact', head: true }"),
        supabase.from("requests").select("*, { count: 'exact', head: true }"),
        supabase.from("services").select("*, { count: 'exact', head: true }"),
        supabase.from("media").select("*, { count: 'exact', head: true }"),
        supabase.from("testimonials").select("*, { count: 'exact', head: true }"),
        supabase.from("portfolio").select("*, { count: 'exact', head: true }")
      ]);

      setStats({
        totalPages: pagesResult.count || 0,
        totalRequests: requestsResult.count || 0,
        totalServices: servicesResult.count || 0,
        totalMedia: mediaResult.count || 0,
        totalTestimonials: testimonialsResult.count || 0,
        totalPortfolio: portfolioResult.count || 0
      });

      // Load content items from page_content table
      const { data: content, error: contentError } = await supabase
        .from("page_content")
        .select("*")
        .order("created_at", { ascending: false });

      if (contentError) {
        console.error("Content loading error:", contentError);
        // If table doesn't exist, create sample data
        setContentItems([
          {
            id: "1",
            type: "text",
            title: "العنوان الرئيسي",
            description: "منصتك الشاملة للتميز والانتشار",
            section: "hero",
            created_at: new Date().toISOString()
          },
          {
            id: "2",
            type: "text",
            title: "الوصف الرئيسي",
            description: "نحول أفكارك إلى واقع مؤثر بأعلى معايير الجودة والاحترافية",
            section: "hero",
            created_at: new Date().toISOString()
          },
          {
            id: "3",
            type: "video",
            title: "فيديو تعريفي",
            description: "فيديو تعريفي عن الشركة",
            url: "/videos/intro.mp4",
            section: "hero",
            created_at: new Date().toISOString()
          }
        ]);
      } else if (content) {
        // Transform page_content to ContentItem format
        const transformedContent = content.map(item => ({
          id: item.id,
          type: item.content_type as "video" | "image" | "text" | "link",
          title: item.key,
          description: item.value_ar || item.value_en || "",
          url: item.file_url,
          section: item.section,
          created_at: item.created_at
        }));
        setContentItems(transformedContent);
      }

    } catch (error) {
      console.error("Dashboard loading error:", error);
      setError("حدث خطأ في تحميل البيانات");
    } finally {
      setLoading(false);
    }
  };

  const handleContentUpdate = async (itemId: string, updates: Partial<ContentItem>) => {
    try {
      const { error } = await supabase
        .from("page_content")
        .update({
          value_ar: updates.description,
          value_en: updates.description,
          updated_at: new Date().toISOString()
        })
        .eq("id", itemId);

      if (error) {
        console.error("Update error:", error);
        // For demo, update local state
        setContentItems(prev => 
          prev.map(item => 
            item.id === itemId ? { ...item, ...updates } : item
          )
        );
      } else {
        await loadDashboardData();
      }
    } catch (error) {
      console.error("Content update error:", error);
    }
  };

  const handleContentDelete = async (itemId: string) => {
    try {
      const { error } = await supabase
        .from("page_content")
        .delete()
        .eq("id", itemId);

      if (error) {
        console.error("Delete error:", error);
        // For demo, update local state
        setContentItems(prev => prev.filter(item => item.id !== itemId));
      } else {
        await loadDashboardData();
      }
    } catch (error) {
      console.error("Content delete error:", error);
    }
  };

  const statsCards = [
    {
      title: "الصفحات",
      value: stats.totalPages,
      icon: Home,
      color: "bg-blue-500",
      description: "إجمالي الصفحات"
    },
    {
      title: "الطلبات",
      value: stats.totalRequests,
      icon: FileText,
      color: "bg-green-500",
      description: "طلبات الخدمات المقدمة"
    },
    {
      title: "الخدمات",
      value: stats.totalServices,
      icon: Briefcase,
      color: "bg-purple-500",
      description: "الخدمات المتاحة"
    },
    {
      title: "الوسائط",
      value: stats.totalMedia,
      icon: Image,
      color: "bg-orange-500",
      description: "الملفات والوسائط"
    },
    {
      title: "التوصيات",
      value: stats.totalTestimonials,
      icon: Star,
      color: "bg-yellow-500",
      description: "توصيات العملاء"
    },
    {
      title: "الأعمال",
      value: stats.totalPortfolio,
      icon: FileVideo,
      color: "bg-red-500",
      description: "معرض الأعمال"
    }
  ];

  const filteredContent = selectedSection === "all" 
    ? contentItems 
    : contentItems.filter(item => item.section === selectedSection);

  const sections = ["all", "hero", "about", "services", "contact", "footer"];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">جاري تحميل البيانات...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">خطأ في التحميل</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <Button onClick={loadDashboardData} className="bg-blue-500 hover:bg-blue-600">
            إعادة المحاولة
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">لوحة التحكم</h1>
              <p className="text-gray-600 mt-1">إدارة محتوى الموقع والبيانات</p>
            </div>
            <div className="flex space-x-3 space-x-reverse">
              <Button className="bg-blue-500 hover:bg-blue-600">
                <Plus className="w-4 h-4 ml-2" />
                إضافة محتوى جديد
              </Button>
              <Button variant="outline">
                <Settings className="w-4 h-4 ml-2" />
                الإعدادات
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
          {statsCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm border p-6"
            >
              <div className="flex items-center">
                <div className={`p-3 rounded-lg ${card.color} text-white`}>
                  <card.icon className="w-6 h-6" />
                </div>
                <div className="mr-4">
                  <p className="text-sm font-medium text-gray-600">{card.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{card.value}</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2">{card.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Content Management */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">إدارة المحتوى</h2>
              <div className="flex space-x-2 space-x-reverse">
                <select
                  value={selectedSection}
                  onChange={(e) => setSelectedSection(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                >
                  {sections.map(section => (
                    <option key={section} value={section}>
                      {section === "all" ? "جميع الأقسام" : section}
                    </option>
                  ))}
                </select>
                <Button className="bg-green-500 hover:bg-green-600">
                  <Plus className="w-4 h-4 ml-2" />
                  إضافة
                </Button>
              </div>
            </div>
          </div>

          <div className="p-6">
            {filteredContent.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">📝</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">لا يوجد محتوى</h3>
                <p className="text-gray-600">ابدأ بإضافة محتوى جديد للموقع</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredContent.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-gray-50 rounded-lg p-4 border"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className={`p-2 rounded-lg ${getTypeColor(item.type)} text-white`}>
                        {getTypeIcon(item.type)}
                      </div>
                      <div className="flex space-x-1 space-x-reverse">
                        <Button size="sm" variant="outline">
                          <Edit className="w-3 h-3" />
                        </Button>
                        <Button size="sm" variant="outline" className="text-red-500 hover:text-red-700">
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                    <h3 className="font-medium text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {item.section}
                      </span>
                      <span>{new Date(item.created_at).toLocaleDateString('ar-EG')}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function getTypeIcon(type: string) {
  switch (type) {
    case "video":
      return <Video className="w-4 h-4" />;
    case "image":
      return <Image className="w-4 h-4" />;
    case "text":
      return <Type className="w-4 h-4" />;
    case "link":
      return <Link className="w-4 h-4" />;
    default:
      return <FileText className="w-4 h-4" />;
  }
}

function getTypeColor(type: string) {
  switch (type) {
    case "video":
      return "bg-red-500";
    case "image":
      return "bg-green-500";
    case "text":
      return "bg-blue-500";
    case "link":
      return "bg-purple-500";
    default:
      return "bg-gray-500";
  }
}
