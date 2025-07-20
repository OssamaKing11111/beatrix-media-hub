"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface FieldAd {
  id: string;
  title: string;
  description: string;
  image_url?: string;
  video_url?: string;
  link?: string;
  location?: string;
  created_at: string;
}

export default function FieldAdsPage() {
  const [ads, setAds] = useState<FieldAd[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAds();
  }, []);

  const loadAds = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("ads")
      .select("*")
      .eq("category", "field")
      .order("created_at", { ascending: false });
    setAds(data || []);
    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">إعلانات الميدان (اليفط والشاشات والمنتجات في الشارع والسوبرماركت...)</h1>
      {loading ? (
        <div>جاري التحميل...</div>
      ) : ads.length === 0 ? (
        <div className="text-gray-500">لا يوجد إعلانات ميدانية حالياً.</div>
      ) : (
        <div className="grid gap-6">
          {ads.map(ad => (
            <div key={ad.id} className="border rounded-lg p-4 bg-white shadow-sm">
              <h2 className="text-xl font-semibold mb-2">{ad.title}</h2>
              <p className="mb-2 text-gray-700">{ad.description}</p>
              {ad.image_url && (
                <img src={ad.image_url} alt={ad.title} className="mb-2 rounded max-h-64" />
              )}
              {ad.video_url && (
                <video src={ad.video_url} controls className="mb-2 rounded max-h-64 w-full" />
              )}
              {ad.link && (
                <a href={ad.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">رابط الإعلان</a>
              )}
              {ad.location && (
                <div className="text-xs text-gray-400 mt-2">الموقع: {ad.location}</div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
