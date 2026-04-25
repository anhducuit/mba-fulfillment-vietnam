import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PriceCalculator from "@/components/PriceCalculator";
import { CheckCircle2, ShoppingCart, BarChart3, ShieldCheck, Zap, Globe, PackageOpen, LayoutDashboard } from "lucide-react";
import Logo from "@/components/Logo";
import { useTranslation } from "react-i18next";

const Solutions = () => {
    const { t } = useTranslation();
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": t("solutions_page.meta.title"),
        "provider": {
            "@type": "Organization",
            "name": "MBA Fulfillment Việt Nam"
        },
        "description": t("solutions_page.meta.description"),
        "areaServed": "VN",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": t("services.badge"),
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": t("services.items.storage.title")
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": t("services.items.fulfillment.title")
                    }
                }
            ]
        }
    };

    const categories = [
        {
            title: t("solutions_page.categories.ecommerce.title"),
            icon: ShoppingCart,
            description: t("solutions_page.categories.ecommerce.desc"),
            points: t("solutions_page.categories.ecommerce.points", { returnObjects: true }) as string[],
            image: "/images/ecommerce_fulfillment.png"
        },
        {
            title: t("solutions_page.categories.b2b.title"),
            icon: Truck,
            description: t("solutions_page.categories.b2b.desc"),
            points: t("solutions_page.categories.b2b.points", { returnObjects: true }) as string[],
            image: "/images/b2b_logistics.png"
        },
        {
            title: t("solutions_page.categories.technology.title"),
            icon: LayoutDashboard,
            description: t("solutions_page.categories.technology.desc"),
            points: t("solutions_page.categories.technology.points", { returnObjects: true }) as string[],
            image: "/images/oms_wms_technology.png"
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Helmet>
                <title>{t("solutions_page.meta.title")}</title>
                <meta name="description" content={t("solutions_page.meta.description")} />
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            </Helmet>
            <Header />
            <main className="pt-32 pb-20">
                {/* Hero Section */}
                <section className="container-section mb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                            {t("solutions_page.title_main")} <span className="text-primary">{t("solutions_page.title_highlight")}</span> {t("solutions_page.title_suffix")}
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            {t("solutions_page.subtitle")}
                        </p>
                    </motion.div>
                </section>

                {/* Categories Section */}
                <section className="container-section space-y-20">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                        >
                            <div className="flex-1 space-y-6">
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                    <cat.icon size={32} />
                                </div>
                                <h2 className="text-3xl font-bold text-foreground">{cat.title}</h2>
                                <p className="text-lg text-muted-foreground">{cat.description}</p>
                                <div className="grid sm:grid-cols-1 gap-4">
                                    {cat.points.map((point, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                                            <span className="text-foreground/80">{point}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex-1 w-full overflow-hidden rounded-3xl aspect-video flex items-center justify-center bg-secondary/10">
                                <motion.img
                                    src={cat.image}
                                    alt={cat.title}
                                    className="w-full h-full object-cover"
                                    initial={{ scale: 1.1, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </section>

                {/* Price Calculator Section */}
                <section className="py-24 container-section">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black mb-4">{t("solutions_page.calculator.title")}</h2>
                        <p className="text-xl text-muted-foreground">{t("solutions_page.calculator.subtitle")}</p>
                    </div>
                    <PriceCalculator />
                </section>

                {/* Value Propositions */}
                <section className="bg-secondary/20 py-24 mt-24">
                    <div className="container-section">
                        <h2 className="text-3xl font-bold text-center mb-16">{t("solutions_page.why_us.title")}</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { title: t("solutions_page.why_us.security.title"), desc: t("solutions_page.why_us.security.desc"), icon: ShieldCheck },
                                { title: t("solutions_page.why_us.speed.title"), desc: t("solutions_page.why_us.speed.desc"), icon: Zap },
                                { title: t("solutions_page.why_us.scale.title"), desc: t("solutions_page.why_us.scale.desc"), icon: Globe },
                            ].map((item, i) => (
                                <div key={i} className="bg-card p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow">
                                    <item.icon className="text-primary mb-6" size={32} />
                                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                    <p className="text-muted-foreground">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

// Placeholder for Truck icon since it wasn't in original imports
const Truck = ({ size, className }: { size?: number, className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 24}
        height={size || 24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M10 17h4V5H2v12h3" />
        <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" />
        <circle cx="7.5" cy="17.5" r="2.5" />
        <circle cx="17.5" cy="17.5" r="2.5" />
    </svg>
);

export default Solutions;
