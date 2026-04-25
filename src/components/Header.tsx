import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

import { getSiteConfig } from "@/config/siteConfig";

const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const config = getSiteConfig();
  const isDichVuKho = config.domain === "dichvukho.vn";

  const navItems = isDichVuKho ? [
    { label: t("nav.home"), href: "/dichvukho#" },
    { label: t("nav.services"), href: "/dichvukho#services" },
    { label: t("nav.process"), href: "/dichvukho#process" },
    { label: t("nav.blog"), href: "/blog" },
    { label: t("nav.contact"), href: "/dichvukho#contact" },
  ] : [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.solutions"), href: "/solutions" },
    { label: t("nav.services"), href: "/services" },
    { label: t("nav.process"), href: "/process" },
    { label: t("nav.blog"), href: "/blog" },
    { label: t("nav.contact"), href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="container-section flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href={`tel:${config.phone}`} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="w-4 h-4" />
              <span>{config.phoneFormatted}</span>
            </a>
            <a href={`mailto:${config.email}`} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="w-4 h-4" />
              <span>{config.email}</span>
            </a>
          </div>
          <div className="text-primary-foreground/80">
            {isDichVuKho ? t("topbar.dichvukho") : t("topbar.main")}
          </div>
          <div className="md:ml-4">
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container-section">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <a href={isDichVuKho ? "/dichvukho" : "/"} className="flex items-center gap-2 group">
            <Logo />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary font-medium transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Button & Language Switcher */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="lg:hidden">
               <LanguageSwitcher />
            </div>
            {!isDichVuKho && (
              <a href="https://theodoimba.vercel.app/" target="_blank" rel="noopener noreferrer">
                <Button className="btn-primary">
                  {t("topbar.access_account")}
                </Button>
              </a>
            )}
            {isDichVuKho && (
              <Button className="btn-primary" onClick={() => window.location.href = "#contact"}>
                {t("topbar.get_quote")}
              </Button>
            )}
          </div>

          {/* Mobile Actions */}
          <div className="lg:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <button
              className="p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border"
          >
            <div className="container-section py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-2 text-foreground hover:text-primary font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              {!isDichVuKho && (
                <a href="https://theodoimba.vercel.app/" target="_blank" rel="noopener noreferrer" className="block w-full">
                  <Button className="btn-primary w-full mt-4">
                    {t("topbar.access_account")}
                  </Button>
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
