"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

export default function RequestsViewer() {
  const { t } = useTranslation("common");
  const [requests, setRequests] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    supabase
      .from("requests")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data, error }) => {
        if (error) setError(error.message);
        else setRequests(data || []);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>{t("loading")}</div>;
  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">{t("service_requests")}</h1>
      <div className="space-y-4">
        {requests.map((req) => (
          <Card key={req.id} className="p-4">
            <div className="font-bold">{req.name} ({req.email})</div>
            <div className="text-sm text-gray-600 mb-2">{req.service}</div>
            <div>{req.message}</div>
            <div className="text-xs text-gray-400 mt-2">{new Date(req.created_at).toLocaleString()}</div>
          </Card>
        ))}
      </div>
    </div>
  );
} 