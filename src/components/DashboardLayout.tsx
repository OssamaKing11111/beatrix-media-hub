"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/card";
import {
  Menu,
  X,
  Home,
  Upload,
  Settings,
  Users,
  FileText,
  LogOut,
  Globe
} from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const { t } = useTranslation("common");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: t("dashboard"), href: "/dashboard", icon: Home },
    { name: t("media_manager"), href: "/media", icon: Upload },
    { name: t("homepage_manager"), href: "/homepage", icon: Settings },
    { name: t("service_requests"), href: "/requests", icon: FileText },
    { name: t("users"), href: "/users", icon: Users },
  ];

  const handleLogout = async () => {
    // TODO: Implement logout
    console.log("Logout clicked");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
        sidebarOpen ? "translate-x-0" : "translate-x-full"
      } lg:translate-x-0`}>
        <div className="flex items-center justify-between h-16 border-b">
          <h1 className="text-xl font-bold text-gray-900">Beatrix One</h1>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <nav className="mt-8 px-4">
          <div className="space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                    pathname === item.href
                      ? "bg-blue-100 text-blue-600"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Topbar */}
        <div className="sticky top-0 z-40 bg-white shadow-sm border-b">
          <div className="flex items-center justify-between h-16 px-4">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600">
                <Menu className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Language Switcher */}
              <Button
                className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                {t("language")}
              </Button>
              
              {/* Logout Button */}
              <Button
                onClick={handleLogout}
                className="flex items-center gap-2">
                <LogOut className="w-4 h-4" />
                {t("logout")}
              </Button>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="p-6">
          {children}
        </main>
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-75 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
} 