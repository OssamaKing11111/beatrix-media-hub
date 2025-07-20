"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { dbOperations } from "@/lib/supabase";
import { useTranslation } from "react-i18next";
import { ArrowLeft, Plus, Trash2, Edit } from "lucide-react";

interface PageContent {
  id: string;
  page_id: string;
  type: string;
  content?: string;
  media_url?: string;
  label?: string;
  order_num?: number;
}

interface Page {
  id: string;
  title: string;
  slug: string;
}

export default function PageContentManager() {
  const { t } = useTranslation("common");
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;
  const [items, setItems] = useState<PageContent[]>([]);
  const [page, setPage] = useState<Page | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [newType, setNewType] = useState("text");
  const [newContent, setNewContent] = useState("");
  const [newLabel, setNewLabel] = useState("");
  const [newMediaUrl, setNewMediaUrl] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);

  const contentTypes = [
    { value: "text", label: t("text") },
    { value: "image", label: t("image") },
    { value: "video", label: t("video") },
    { value: "link", label: t("link") },
    { value: "button", label: t("button") }
  ];

  useEffect(() => {
    if (slug) {
      loadPage();
      loadItems();
    }
  }, [slug]);

  const loadPage = async () => {
    try {
      const pages = await dbOperations.getPages();
      const pageData = pages.find(p => p.slug === slug);
      setPage(pageData || null);
    } catch (e) {
      console.error(t("error_loading_elements"), e);
    }
  };

  const loadItems = async () => {
    if (!page) return;
    
    setLoading(true);
    try {
      const data = await dbOperations.getPageContent(page.id);
      setItems(data || []);
    } catch (e) {
      setError(t("error_loading_elements"));
      console.error(t("error_loading_elements"), e);
    } finally {
      setLoading(false);
    }
  };

  const handleAddItem = async () => {
    if (!page) return;
    if (!newContent.trim()) {
      setError(t("please_enter_content"));
      return;
    }

    try {
      await dbOperations.createPageContent({
        page_id: page.id,
        type: newType,
        content: newContent,
        label: newLabel,
        media_url: newMediaUrl
      });
      setNewContent("");
      setNewLabel("");
      setNewMediaUrl("");
      setShowAddForm(false);
      setError(null);
      await loadItems();
    } catch (e) {
      setError(t("error_adding_element"));
      console.error(t("error_adding_element"), e);
    }
  };

  const handleDeleteItem = async (id: string) => {
    if (!confirm(t("are_you_sure_delete_element"))) return;
    try {
      await dbOperations.deletePageContent(id);
      await loadItems();
    } catch (e) {
      setError(t("error_deleting_element"));
      console.error(t("error_deleting_element"), e);
    }
  };

  const handleEditItem = (item: PageContent) => {
    setNewType(item.type);
    setNewContent(item.content || "");
    setNewLabel(item.label || "");
    setNewMediaUrl(item.media_url || "");
    setShowAddForm(true);
  };

  if (!page && !loading) {
    return (
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-gray-600 mb-6">The page you're looking for doesn't exist.</p>
          <Button onClick={() => router.push('/dashboard')}>
            {t("back_to_dashboard")}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            onClick={() => router.push('/dashboard')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("back_to_dashboard")}
          </Button>
          <div>
            <h1 className="text-2xl font-bold">
              {t("edit_page")}: {page?.title || t("loading")}
            </h1>
            <p className="text-gray-600">{t("page_content_management")}</p>
          </div>
        </div>
        <Button 
          onClick={() => setShowAddForm(true)}
          className="flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          {t("add_new_element")}
        </Button>
      </div>

      {/* Add Form */}
      {showAddForm && (
        <Card className="p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4">{t("add_new_element")}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              className="border rounded-lg px-3 py-2"
              value={newType}
              onChange={e => setNewType(e.target.value)}
            >
              {contentTypes.map(type => (
                <option key={type.value} value={type.value}>{type.label}</option>
              ))}
            </select>
            <input
              className="border rounded-lg px-3 py-2"
              placeholder={t("content_or_description")}
              value={newContent}
              onChange={e => setNewContent(e.target.value)}
            />
            <input
              className="border rounded-lg px-3 py-2"
              placeholder={t("label_optional")}
              value={newLabel}
              onChange={e => setNewLabel(e.target.value)}
            />
            <input
              className="border rounded-lg px-3 py-2"
              placeholder={t("media_url_optional")}
              value={newMediaUrl}
              onChange={e => setNewMediaUrl(e.target.value)}
            />
          </div>
          <div className="flex gap-2 mt-4">
            <Button onClick={handleAddItem}>{t("add_element")}</Button>
            <Button 
              variant="outline" 
              onClick={() => {
                setShowAddForm(false);
                setNewContent("");
                setNewLabel("");
                setNewMediaUrl("");
                setError(null);
              }}
            >
              {t("cancel")}
            </Button>
          </div>
        </Card>
      )}

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
          {error}
        </div>
      )}

      {/* Content Items */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">{t("page_elements")}</h3>
        {loading ? (
          <div className="text-center py-8">{t("loading")}</div>
        ) : items.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            {t("no_elements")}
          </div>
        ) : (
          <div className="space-y-3">
            {items.map((item, index) => (
              <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-semibold">
                    {index + 1}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{item.label || contentTypes.find(t => t.value === item.type)?.label}</span>
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded">{item.type}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{item.content}</p>
                    {item.media_url && (
                      <p className="text-xs text-blue-600 mt-1">{item.media_url}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleEditItem(item)}
                    className="flex items-center gap-1"
                  >
                    <Edit className="w-4 h-4" />
                    {t("edit")}
                  </Button>
                  <Button 
                    variant="destructive" 
                    size="sm"
                    onClick={() => handleDeleteItem(item.id)}
                    className="flex items-center gap-1"
                  >
                    <Trash2 className="w-4 h-4" />
                    {t("delete")}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
} 