"use client";
import { useState, useEffect } fromreact";
import { useTranslation } fromreact-i18next;
import { Button } from@/components/ui/Button";
import[object Object] Globe } fromlucide-react;

export default function LanguageSwitcher() [object Object]  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState("ar");

  useEffect(() =>[object Object]   const savedLang = localStorage.getItem(language") || "ar";
    setCurrentLang(savedLang);
    i18angeLanguage(savedLang);
    document.documentElement.lang = savedLang;
    document.documentElement.dir = savedLang ===ar" ? "rtl:ltr;
  }, [i18n]);

  const toggleLanguage = () => {
    const newLang = currentLang ===ar" ? "en" : "ar";
    setCurrentLang(newLang);
    localStorage.setItem("language, newLang);
    i18changeLanguage(newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang ===ar" ? "rtl : r";
  };

  return (
    <Button
      onClick={toggleLanguage}
      variant="outline   size="sm"
      className=flex items-center gap-2    >
      <Globe className="w-4" />
      {currentLang === ar ?English : ربي}   </Button>
  );
} 