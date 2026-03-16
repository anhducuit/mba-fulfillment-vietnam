import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Youtube,
  Linkedin,
  ArrowUp
} from "lucide-react";
import Logo from "./Logo";

import { getSiteConfig } from "@/config/siteConfig";

const Footer = () => {
  const config = getSiteConfig();
  const isDichVuKho = config.domain === "dichvukho.vn";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-section py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Logo />
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              {config.description}
            </p>
            {!isDichVuKho && (
              <div className="flex gap-4">
                {config.socials.facebook && (
                  <a href={config.socials.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                )}
                {config.socials.youtube && (
                  <a href={config.socials.youtube} className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                    <Youtube className="w-5 h-5" />
                  </a>
                )}
                {config.socials.linkedin && (
                  <a href={config.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">{isDichVuKho ? "Dịch vụ cốt lõi" : "Dịch vụ"}</h4>
            <ul className="space-y-3">
              {isDichVuKho ? (
                <>
                  <li className="text-primary-foreground/70 text-sm">Lưu kho hàng hóa</li>
                  <li className="text-primary-foreground/70 text-sm">Quản lý tồn kho</li>
                  <li className="text-primary-foreground/70 text-sm">Đóng gói chuyên nghiệp</li>
                  <li className="text-primary-foreground/70 text-sm">Xử lý đơn hàng trọn gói</li>
                  <li className="text-primary-foreground/70 text-sm">Tư vấn vận hành</li>
                </>
              ) : (
                <>
                  <li><a href="/services" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">Giải pháp Fulfillment</a></li>
                  <li><a href="/services" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">Bán hàng đa kênh B2B</a></li>
                  <li><a href="/services" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">Tùy chỉnh đóng gói</a></li>
                  <li><a href="/services" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">Quản lý kho hàng WMS</a></li>
                  <li><a href="/services" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">Đối tác Marketing</a></li>
                </>
              )}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Liên kết nhanh</h4>
            <ul className="space-y-3">
              {isDichVuKho ? (
                <>
                  <li><a href="/dichvukho#" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">Trang chủ</a></li>
                  <li><a href="/dichvukho#services" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">Dịch vụ</a></li>
                  <li><a href="/dichvukho#process" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">Quy trình</a></li>
                  <li><a href="/dichvukho#contact" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">Liên hệ</a></li>
                </>
              ) : (
                <>
                  <li><a href="/" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">Trang chủ</a></li>
                  <li><a href="/solutions" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">Giải pháp</a></li>
                  <li><a href="/process" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">Quy trình</a></li>
                  <li><a href="/blog" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">Blog kiến thức</a></li>
                  <li><a href="/admin-blog" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">Quản trị Blog</a></li>
                  <li><a href="/contact" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">Liên hệ</a></li>
                  <li><a href="/privacy-policy" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">Chính sách bảo mật</a></li>
                </>
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Liên hệ</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-primary-foreground/70">Điện thoại</p>
                  <a href={`tel:${config.phone}`} className="text-primary-foreground hover:text-primary transition-colors">
                    {config.phoneFormatted}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-primary-foreground/70">Email</p>
                  <a href={`mailto:${config.email}`} className="text-primary-foreground hover:text-primary transition-colors text-sm">
                    {config.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-primary-foreground/70">Địa chỉ</p>
                  <p className="text-primary-foreground text-sm">
                    {config.address}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-section py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60 text-center md:text-left">
            © {new Date().getFullYear()} {config.name}. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-primary-foreground" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
