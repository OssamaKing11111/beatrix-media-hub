"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Input from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useTranslation } from "react-i18next";

export default function MediaManager() {
  const { t } = useTranslation("common");
  const [files, setFiles] = useState<any[]>([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    const { data, error } = await supabase.storage.from("media").list();
    if (error) setError(error.message);
    else setFiles(data || []);
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const { error } = await supabase.storage.from("media").upload(file.name, file);
    setUploading(false);
    if (error) setError(error.message);
    else fetchFiles();
  };

  const handleDelete = async (name: string) => {
    const { error } = await supabase.storage.from("media").remove([name]);
    if (error) setError(error.message);
    else fetchFiles();
  };

  const handleCopyUrl = (name: string) => {
    const { data } = supabase.storage.from("media").getPublicUrl(name);
    navigator.clipboard.writeText(data.publicUrl);
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">{t("media_manager")}</h1>
      <Input type="file" onChange={handleUpload} disabled={uploading} />
      {error && <div className="text-red-600">{error}</div>}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {files.map((file) => (
          <div key={file.name} className="border rounded p-2 flex flex-col items-center">
            <img src={supabase.storage.from("media").getPublicUrl(file.name).data.publicUrl} alt={file.name} className="w-full h-24 object-cover mb-2" />
            <div className="text-xs truncate w-full">{file.name}</div>
            <div className="flex gap-2 mt-2">
              <Button onClick={() => handleCopyUrl(file.name)}>{t("copy_url")}</Button>
              <Button onClick={() => handleDelete(file.name)}>{t("delete")}</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 