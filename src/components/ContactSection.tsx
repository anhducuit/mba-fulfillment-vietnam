import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
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
        toast.success(t("contact.form.success"));
        form.reset();
      } else {
        toast.error(t("contact.form.error"));
      }
    } catch (error) {
      console.error(error);
      toast.error(t("contact.form.error"));
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
          <h3 className="text-2xl font-bold text-foreground mb-2">{t("contact.form.title")}</h3>
          <p className="text-muted-foreground mb-6">{t("contact.form.subtitle")}</p>

          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t("contact.form.name_label")}
                </label>
                <Input
                  type="text"
                  name="name"
                  placeholder={t("contact.form.name_placeholder")}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t("contact.form.phone_label")}
                </label>
                <Input
                  type="tel"
                  name="phone"
                  placeholder={t("contact.form.phone_placeholder")}
                  required
                  className="w-full"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {t("contact.form.email_label")}
              </label>
              <Input
                type="email"
                name="email"
                placeholder={t("contact.form.email_placeholder")}
                required
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {t("contact.form.company_label")}
              </label>
              <Input
                type="text"
                name="company"
                placeholder={t("contact.form.company_placeholder")}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {t("contact.form.message_label")}
              </label>
              <Textarea
                name="message"
                placeholder={t("contact.form.message_placeholder")}
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
                t("contact.form.submitting")
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  {t("contact.form.submit")}
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
              {t("contact.badge")}
            </span>
            <h2 className="section-title mt-2">
              {t("contact.title")}
            </h2>
            <p className="section-subtitle">
              {t("contact.subtitle")}
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
                    <h4 className="font-semibold text-foreground">{t("contact.info.manager_name")}</h4>
                    <p className="text-muted-foreground">{t("contact.info.support_247")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{t("footer.contact_info.phone")}</h4>
                    <a href={`tel:${config.phone}`} className="text-primary hover:underline">{config.phoneFormatted}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{t("footer.contact_info.email")}</h4>
                    <a href={`mailto:${config.email}`} className="text-primary hover:underline">{config.email}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{t("footer.contact_info.address")}</h4>
                    <p className="text-muted-foreground">
                      {config.domain === "dichvukho.vn" ? t("footer.contact_info.address_dichvukho") : t("footer.contact_info.address_main")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="mt-8 pt-8 border-t border-border">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-primary">↑</p>
                    <p className="text-sm text-muted-foreground">{t("contact.benefits.sales")}</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">⚡</p>
                    <p className="text-sm text-muted-foreground">{t("contact.benefits.operation")}</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">🎯</p>
                    <p className="text-sm text-muted-foreground">{t("contact.benefits.management")}</p>
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
              <h3 className="text-2xl font-bold text-foreground mb-2">{t("contact.form.title")}</h3>
              <p className="text-muted-foreground mb-6">{t("contact.form.subtitle")}</p>

              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("contact.form.name_label")}
                    </label>
                    <Input
                      type="text"
                      name="name"
                      placeholder={t("contact.form.name_placeholder")}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("contact.form.phone_label")}
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder={t("contact.form.phone_placeholder")}
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("contact.form.email_label")}
                  </label>
                  <Input
                    type="email"
                    name="email"
                    placeholder={t("contact.form.email_placeholder")}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("contact.form.company_label")}
                  </label>
                  <Input
                    type="text"
                    name="company"
                    placeholder={t("contact.form.company_placeholder")}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("contact.form.message_label")}
                  </label>
                  <Textarea
                    name="message"
                    placeholder={t("contact.form.message_placeholder")}
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
                    t("contact.form.submitting")
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      {t("contact.form.submit")}
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
