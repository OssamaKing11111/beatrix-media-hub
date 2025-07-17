"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { useTranslation } from "react-i18next";

export default function HomepageEditor() {
  const { t } = useTranslation("common");
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    supabase
      .from("homepage_content")
      .select("*")
      .single()
      .then(({ data, error }) => {
        if (error) setError(error.message);
        else setContent(data);
        setLoading(false);
      });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContent({ ...content, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    setSaving(true);
    setError(null);
    const { error } = await supabase
      .from("homepage_content")
      .update(content)
      .eq("id", content.id);
    setSaving(false);
    if (error) setError(error.message);
  };

  if (loading) return <div>{t("loading")}</div>;
  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">{t("homepage_manager")}</h1>
      <Input
        name="banner_image_url"
        value={content?.banner_image_url || ""}
        onChange={handleChange}
        placeholder={t("banner_image")}
      />
      <Input
        name="heading"
        value={content?.heading || ""}
        onChange={handleChange}
        placeholder={t("headline")}
      />
      <Input
        name="subheading"
        value={content?.subheading || ""}
        onChange={handleChange}
        placeholder={t("subheadline")}
      />
      <Input
        name="button_text"
        value={content?.button_text || ""}
        onChange={handleChange}
        placeholder={t("cta_text")}
      />
      <Input
        name="button_url"
        value={content?.button_url || ""}
        onChange={handleChange}
        placeholder={t("cta_url")}
      />
      <Button onClick={handleSave} className="mt-4">
        {saving ? t("save") + "..." : t("save")}
      </Button>
    </div>
  );
} 