"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Globe } from "lucide-react";
import { useTranslation } from "./TranslationProvider";

export default function LanguageSwitcher() {
  const { currentLanguage, setLanguage } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    const newLang = currentLanguage === "ar" ? "en" : "ar";
    setLanguage(newLang);
  };

  if (!mounted) {
    return (
      <Button variant="outline" size="sm" className="flex items-center gap-2">
        <Globe className="w-4" />
        Loading...
      </Button>
    );
  }

  return (
    <Button
      onClick={toggleLanguage}
      variant="outline"
      size="sm"
      className="flex items-center gap-2"
    >
      <Globe className="w-4" />
      {currentLanguage === "ar" ? "English" : "عربي"}
    </Button>
  );
} 