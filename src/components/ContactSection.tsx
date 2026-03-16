import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Send, User, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import Logo from "./Logo";
import { getSiteConfig } from "@/config/siteConfig";

interface ContactSectionProps {
  hideTitle?: boolean;
  onlyForm?: boolean;
}

const ContactSection = ({ hideTitle = false, onlyForm = false }: ContactSectionProps) => {
  const config = getSiteConfig();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xldbjwyb", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast.success("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.");
        form.reset();
      } else {
        toast.error("Có lỗi xảy ra. Vui lòng thử lại sau.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Có lỗi xảy ra. Vui lòng thử lại sau.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (onlyForm) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-0 shadow-none">
          <h3 className="text-2xl font-bold text-foreground mb-2">Liên hệ ngay</h3>
          <p className="text-muted-foreground mb-6">Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất</p>

          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Họ và tên *
                </label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Nhập họ và tên"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Số điện thoại *
                </label>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Nhập số điện thoại"
                  required
                  className="w-full"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email *
              </label>
              <Input
                type="email"
                name="email"
                placeholder="Nhập địa chỉ email"
                required
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Tên công ty / Shop
              </label>
              <Input
                type="text"
                name="company"
                placeholder="Nhập tên công ty hoặc shop"
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Nội dung cần tư vấn
              </label>
              <Textarea
                name="message"
                placeholder="Mô tả nhu cầu của bạn..."
                rows={4}
                className="w-full resize-none"
              />
            </div>

            <Button
              type="submit"
              className="btn-primary w-full flex items-center justify-center gap-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Đang gửi..."
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Gửi yêu cầu tư vấn
                </>
              )}
            </Button>
          </div>
        </form>
      </motion.div>
    );
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-secondary/50" ref={ref}>
      <div className="container-section">
        {!hideTitle && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Liên hệ với chúng tôi
            </span>
            <h2 className="section-title mt-2">
              Nhanh và dễ dàng
            </h2>
            <p className="section-subtitle">
              MBA Fulfillment - Fulfill mọi đơn hàng của bạn.
              Tiết kiệm thời gian, độ chính xác cao và minh bạch trong vận hành
            </p>
          </motion.div>
        )}

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <div className="flex items-center gap-4 mb-8">
                <Logo />
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Mr Dương - Sale Manager</h4>
                    <p className="text-muted-foreground">Hỗ trợ tư vấn 24/7</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Điện thoại</h4>
                    <a href={`tel:${config.phone}`} className="text-primary hover:underline">{config.phoneFormatted}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <a href={`mailto:${config.email}`} className="text-primary hover:underline">{config.email}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Địa chỉ</h4>
                    <p className="text-muted-foreground">{config.address}</p>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="mt-8 pt-8 border-t border-border">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-primary">↑</p>
                    <p className="text-sm text-muted-foreground">Tăng doanh số bán hàng</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">⚡</p>
                    <p className="text-sm text-muted-foreground">Tăng khả năng vận hành</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">🎯</p>
                    <p className="text-sm text-muted-foreground">Tập trung quản lý</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-card">
              <h3 className="text-2xl font-bold text-foreground mb-2">Liên hệ ngay</h3>
              <p className="text-muted-foreground mb-6">Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất</p>

              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Họ và tên *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Nhập họ và tên"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Số điện thoại *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Nhập số điện thoại"
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Nhập địa chỉ email"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Tên công ty / Shop
                  </label>
                  <Input
                    type="text"
                    name="company"
                    placeholder="Nhập tên công ty hoặc shop"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nội dung cần tư vấn
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Mô tả nhu cầu của bạn..."
                    rows={4}
                    className="w-full resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Đang gửi..."
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Gửi yêu cầu tư vấn
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
