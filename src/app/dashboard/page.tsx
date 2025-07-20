import React from "react";
import { Home, FileText, Users, Settings, LogOut, Plus, Edit, Trash2, Menu, Search, Globe } from "lucide-react";

const pages = [
  { id: 1, name: "الرئيسية / Home", slug: "home" },
  { id: 2, name: "من نحن / About", slug: "about" },
  { id: 3, name: "الخدمات / Services", slug: "services" },
  { id: 4, name: "العملاء / Clients", slug: "clients" },
  { id: 5, name: "الميديا / Media", slug: "media" },
  { id: 6, name: "اتصل بنا / Contact", slug: "contact" },
  // ... أضف المزيد من الصفحات هنا
];

export default function DashboardHome() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg flex flex-col">
        <div className="h-20 flex items-center justify-center border-b">
          <span className="text-2xl font-bold text-gold flex items-center gap-2">
            <Menu className="w-6 h-6 text-gold" />
            Beatrix Admin
          </span>
        </div>
        <nav className="flex-1 py-6 px-4 space-y-2">
          <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gold/10 text-gray-800 font-medium">
            <Home className="w-5 h-5" /> Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gold/10 text-gray-800 font-medium">
            <FileText className="w-5 h-5" /> Pages
          </a>
          <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gold/10 text-gray-800 font-medium">
            <Users className="w-5 h-5" /> Users
          </a>
          <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gold/10 text-gray-800 font-medium">
            <Settings className="w-5 h-5" /> Settings
          </a>
        </nav>
        <div className="p-4 border-t flex items-center gap-3">
          <img src="/public/images/avatar.png" alt="User" className="w-10 h-10 rounded-full border" />
          <div className="flex-1">
            <div className="font-semibold text-gray-800">Admin</div>
            <div className="text-xs text-gray-500">admin@beatrix.com</div>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <LogOut className="w-5 h-5 text-gray-500" />
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="h-20 bg-white shadow flex items-center px-8 justify-between">
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full lg:hidden">
              <Menu className="w-6 h-6 text-gold" />
            </button>
            <div className="relative">
              <input type="text" placeholder="Search pages..." className="pl-10 pr-4 py-2 rounded-lg border bg-gray-50 focus:outline-gold" />
              <Search className="absolute left-2 top-2 w-5 h-5 text-gray-400" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Globe className="w-5 h-5 text-gold" />
            </button>
            <img src="/public/images/avatar.png" alt="User" className="w-10 h-10 rounded-full border" />
          </div>
        </header>

        {/* Content Area */}
        <section className="flex-1 p-8 overflow-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Pages</h1>
            <button className="flex items-center gap-2 bg-gold text-white px-4 py-2 rounded-lg hover:bg-yellow-600">
              <Plus className="w-5 h-5" /> Add Page
            </button>
          </div>
          <div className="bg-white rounded-lg shadow p-4 overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="text-left text-gray-600 border-b">
                  <th className="py-2 px-4">#</th>
                  <th className="py-2 px-4">Page Name</th>
                  <th className="py-2 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {pages.map((page, idx) => (
                  <tr key={page.id} className="border-b hover:bg-gray-50">
                    <td className="py-2 px-4 font-semibold text-gray-500">{idx + 1}</td>
                    <td className="py-2 px-4 font-medium text-gray-800">{page.name}</td>
                    <td className="py-2 px-4 flex gap-2">
                      <button className="p-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 flex items-center gap-1">
                        <Edit className="w-4 h-4" /> Edit
                      </button>
                      <button className="p-2 bg-red-100 text-red-700 rounded hover:bg-red-200 flex items-center gap-1">
                        <Trash2 className="w-4 h-4" /> Delete
                      </button>
                      <button className="p-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 flex items-center gap-1">
                        <Menu className="w-4 h-4" /> Reorder
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
