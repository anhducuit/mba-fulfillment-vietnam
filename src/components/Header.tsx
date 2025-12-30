import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Trang chủ", href: "#home" },
    { label: "Giải pháp", href: "#solutions" },
    { label: "Dịch vụ", href: "#services" },
    { label: "Quy trình", href: "#process" },
    { label: "Liên hệ", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="container-section flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+84363382400" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="w-4 h-4" />
              <span>+84 036.338.2400</span>
            </a>
            <a href="mailto:contact@mbafulfillment.vn" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="w-4 h-4" />
              <span>contact@mbafulfillment.vn</span>
            </a>
          </div>
          <div className="text-primary-foreground/80">
            Giải pháp fulfillment hàng đầu Việt Nam
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container-section">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg md:text-xl">M</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-lg md:text-xl text-foreground leading-tight">MBA FULFILLMENT</h1>
              <p className="text-xs text-muted-foreground">VIỆT NAM</p>
            </div>
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

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button className="btn-primary">
              Truy cập tài khoản
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
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
              <Button className="btn-primary w-full mt-4">
                Truy cập tài khoản
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
