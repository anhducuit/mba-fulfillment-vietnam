import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { 
  Warehouse, 
  PackageCheck, 
  Truck, 
  ShieldCheck, 
  Zap, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight,
  MapPin,
  Clock,
  Briefcase,
  X,
  TrendingUp,
  Scale,
  Settings,
  Users,
  ShoppingCart,
  Mail,
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PriceCalculator from "@/components/PriceCalculator";
import { getSiteConfig } from "@/config/siteConfig";
import { useTranslation } from "react-i18next";

const DichVuKhoPage = () => {
  const config = getSiteConfig();
  const { t } = useTranslation();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Warehouse",
    "name": config.name,
    "image": "https://omsmba.online/warehouse_interior_premium_1773589774009.png",
    "@id": `https://omsmba.online/dichvukho`,
    "url": `https://omsmba.online/dichvukho`,
    "telephone": config.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "40/8 Lê Thị Ánh, Phường Tân Thới Nhất",
      "addressLocality": "Quận 12",
      "addressRegion": "TP.HCM",
      "postalCode": "70000",
      "addressCountry": "VN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 10.8266,
      "longitude": 106.6191
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": [
      config.socials.facebook,
      config.socials.linkedin
    ].filter(Boolean)
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-emerald-500/30">
      <Helmet>
        <title>{t("dichvukho_page.meta.title")}</title>
        <meta name="description" content={t("dichvukho_page.meta.description")} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Header />

      <main>
        {/* 1. Hero Section */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/warehouse_interior_premium_1773589774009.png" 
              alt={t("dichvukho_page.hero.image_alt")} 
              className="w-full h-full object-cover brightness-[0.3]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent" />
          </div>
          
          <div className="container-section relative z-10">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/30 text-white font-semibold text-sm mb-6 border border-emerald-500/40 backdrop-blur-md">
                  <TrendingUp size={16} />
                  {t("dichvukho_page.hero.badge")}
                </div>
                <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-8 leading-[1.1] drop-shadow-sm">
                  {t("dichvukho_page.hero.title_line_1")} <br />
                  <span className="text-emerald-400 italic">{t("dichvukho_page.hero.title_highlight")}</span> {t("dichvukho_page.hero.title_line_2")}
                </h1>
                <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed max-w-2xl font-medium drop-shadow-sm">
                  {t("common.description")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8 py-8 h-auto font-bold shadow-lg shadow-emerald-500/20 bg-emerald-500 hover:bg-emerald-600" onClick={() => window.location.href = "#contact"}>
                    {t("dichvukho_page.hero.cta_consult")}
                    <ArrowRight className="ml-2 w-6 h-6" />
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-8 h-auto bg-white/5 backdrop-blur-md text-white border-white/20 hover:bg-white/10" onClick={() => window.location.href = "#services"}>
                    {t("dichvukho_page.hero.cta_wms")}
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. Pain Points Section */}
        <section className="py-24 bg-slate-900">
          <div className="container-section">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                    {t("dichvukho_page.pain_points.title_line_1")} <br />{t("dichvukho_page.pain_points.title_line_2")}
                </h2>
                <div className="space-y-8">
                  {(t("dichvukho_page.pain_points.items", { returnObjects: true }) as any[]).map((item, i) => (
                    <div key={i} className="flex gap-5 p-6 rounded-2xl bg-white/5 shadow-sm border border-white/5 italic">
                      <div className="flex-shrink-0 w-12 h-12 bg-red-500/10 text-red-500 rounded-xl flex items-center justify-center">
                        <X size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-slate-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                  <img src="/professional_warehouse_team_1773589809209.png" alt={t("dichvukho_page.pain_points.image_alt")} className="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Comparison Section */}
        <section className="py-24 container-section">
          <div className="text-center mb-16 px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{t("dichvukho_page.comparison.title")}</h2>
            <p className="text-xl text-slate-400">{t("dichvukho_page.comparison.subtitle")}</p>
          </div>
          
          <div className="overflow-x-auto rounded-[2rem] border border-white/10 shadow-xl">
            <table className="w-full text-left bg-slate-900/50 backdrop-blur-sm">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="p-8 text-xl">{t("dichvukho_page.comparison.header_feature")}</th>
                  <th className="p-8 text-xl font-medium border-l border-white/10 opacity-60">{t("dichvukho_page.comparison.header_private")}</th>
                  <th className="p-8 text-xl font-bold border-l border-white/10 text-emerald-400">
                    {t("dichvukho_page.comparison.header_shared", { name: config.name })}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {(t("dichvukho_page.comparison.rows", { returnObjects: true }) as any[]).map((row, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="p-6 md:p-8 font-bold text-slate-300">{row.label}</td>
                    <td className="p-6 md:p-8 text-slate-500 border-l border-white/5">{row.private}</td>
                    <td className="p-6 md:p-8 font-medium text-slate-100 border-l border-white/5 bg-emerald-500/5 italic">{row.shared}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* PriceCalculator Section */}
        <section className="py-24 container-section bg-slate-900 rounded-[3rem] my-12 border border-white/5 shadow-inner">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                {t("dichvukho_page.calculator_intro.title")} <span className="text-emerald-400">{t("dichvukho_page.calculator_intro.title_highlight")}</span>
            </h2>
            <p className="text-lg text-slate-400">{t("dichvukho_page.calculator_intro.subtitle")}</p>
          </div>
          <PriceCalculator />
        </section>

        {/* 4. Services */}
        <section id="services" className="py-24 bg-slate-900">
          <div className="container-section">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(t("dichvukho_page.services.items", { returnObjects: true }) as any[]).map((service, i) => {
                const icons = [ShoppingCart, Warehouse, Truck, Scale, Settings, BarChart3];
                const Icon = icons[i];
                return (
                  <div key={i} className="group p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:border-emerald-500/50">
                    <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                      <Icon size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-slate-400 leading-relaxed mb-6">{service.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 7. CTA Section */}
        <section id="contact" className="py-24 relative overflow-hidden">
          <div className="container-section relative z-10">
            <div className="bg-emerald-500 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-emerald-500/20">
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                {t("dichvukho_page.cta.title")}
              </h2>
              <p className="text-emerald-50 text-xl mb-12 max-w-2xl mx-auto opacity-90">
                {t("dichvukho_page.cta.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button variant="secondary" size="lg" className="text-lg px-12 py-10 h-auto font-bold bg-white text-slate-900 hover:bg-slate-100 flex flex-col shadow-xl" onClick={() => window.open(`https://zalo.me/${config.phone}`, "_blank")}>
                  <span className="text-xs uppercase tracking-widest text-slate-500 mb-2">{t("dichvukho_page.cta.zalo_label")}</span>
                  <span className="text-2xl text-emerald-600">{config.phoneFormatted}</span>
                </Button>
                <Button variant="secondary" size="lg" className="text-lg px-12 py-10 h-auto font-bold bg-white text-slate-900 hover:bg-slate-100 flex flex-col shadow-xl" onClick={() => window.location.href = `tel:${config.phone}`}>
                  <span className="text-xs uppercase tracking-widest text-slate-500 mb-2">{t("dichvukho_page.cta.hotline_label")}</span>
                  <span className="text-2xl text-emerald-600">{config.phoneFormatted}</span>
                </Button>
                <Button variant="secondary" size="lg" className="text-lg px-12 py-10 h-auto font-bold bg-white text-slate-900 hover:bg-slate-100 flex flex-col shadow-xl" onClick={() => window.location.href = `mailto:${config.email}`}>
                  <span className="text-xs uppercase tracking-widest text-slate-500 mb-2">{t("dichvukho_page.cta.email_label")}</span>
                  <span className="text-lg text-emerald-600">{config.email}</span>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DichVuKhoPage;
