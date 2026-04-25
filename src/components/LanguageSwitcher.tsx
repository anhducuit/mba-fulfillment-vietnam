import React from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ChevronDown, Check } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const languages = [
  { code: "vi", name: "Tiếng Việt", flag: "🇻🇳" },
  { code: "zh", name: "中文 (Chinese)", flag: "🇨🇳" },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    document.documentElement.lang = code;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center gap-2 px-3 h-10 rounded-full hover:bg-white/10 text-white border border-white/20 transition-all active:scale-95"
        >
          <span className="text-lg">{currentLang.flag}</span>
          <span className="font-bold uppercase tracking-wider text-xs hidden md:block">
            {currentLang.code}
          </span>
          <ChevronDown className="w-3 h-3 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 p-1 bg-white/90 backdrop-blur-xl border-white/20 rounded-2xl shadow-2xl">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className="flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer focus:bg-primary/10 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">{lang.flag}</span>
              <span className={`font-medium ${i18n.language === lang.code ? "text-primary" : "text-slate-600"}`}>
                {lang.name}
              </span>
            </div>
            {i18n.language === lang.code && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Check className="w-4 h-4 text-primary" />
              </motion.div>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
