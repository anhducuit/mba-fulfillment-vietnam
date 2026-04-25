import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
    Package,
    Store,
    Gift,
    Megaphone,
    Warehouse,
    CheckCircle2,
    ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const Services = () => {
    const { t } = useTranslation();

    const services = [
        {
            icon: Package,
            title: t("services_page.items.fulfillment.title"),
            description: t("services_page.items.fulfillment.desc"),
            details: t("services_page.items.fulfillment.details", { returnObjects: true }) as string[],
            color: "from-orange-500 to-amber-500",
            image: "/images/services/fulfillment.png"
        },
        {
            icon: Store,
            title: t("services_page.items.b2b.title"),
            description: t("services_page.items.b2b.desc"),
            details: t("services_page.items.b2b.details", { returnObjects: true }) as string[],
            color: "from-blue-500 to-cyan-500",
            image: "/images/services/b2b_logistics.png"
        },
        {
            icon: Warehouse,
            title: t("services_page.items.wms.title"),
            description: t("services_page.items.wms.desc"),
            details: t("services_page.items.wms.details", { returnObjects: true }) as string[],
            color: "from-indigo-500 to-violet-500",
            image: "/images/services/wms_tech.png"
        },
        {
            icon: Gift,
            title: t("services_page.items.packaging.title"),
            description: t("services_page.items.packaging.desc"),
            details: t("services_page.items.packaging.details", { returnObjects: true }) as string[],
            color: "from-purple-500 to-pink-500",
            image: "/images/services/packaging.png"
        },
        {
            icon: Megaphone,
            title: t("services_page.items.growth.title"),
            description: t("services_page.items.growth.desc"),
            details: t("services_page.items.growth.details", { returnObjects: true }) as string[],
            color: "from-green-500 to-emerald-500",
            image: "/images/services/growth_marketing.png"
        },
    ];
    return (
        <div className="min-h-screen bg-background">
            <Helmet>
                <title>{t("services_page.meta.title")}</title>
                <meta name="description" content={t("services_page.meta.description")} />
            </Helmet>
            <Header />
            <main className="pt-32 pb-20">
                {/* Header Section */}
                <section className="container-section mb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                            {t("services_page.title_main")} <span className="text-primary">{t("services_page.title_highlight")}</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            {t("services_page.subtitle")}
                        </p>
                    </motion.div>
                </section>

                {/* Services Grid */}
                <section className="container-section space-y-24">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
                        >
                            <div className="flex-1 space-y-6">
                                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-primary-foreground`}>
                                    <service.icon size={32} />
                                </div>
                                <h2 className="text-3xl font-bold text-foreground">{service.title}</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {service.description}
                                </p>
                                <div className="grid sm:grid-cols-1 gap-4">
                                    {service.details.map((detail, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                                            <span className="text-foreground/80">{detail}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="pt-4">
                                    <Button
                                        className="btn-primary"
                                        onClick={() => window.location.href = "/contact"}
                                    >
                                        {t("services_page.cta.consult")}
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                            <div className="flex-1 w-full bg-secondary/20 rounded-3xl aspect-[4/3] flex items-center justify-center relative overflow-hidden group">
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                                <motion.img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover relative z-10 transition-transform duration-500 group-hover:scale-110"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </section>

                {/* CTA Section */}
                <section className="container-section mt-32">
                    <div className="bg-primary rounded-3xl p-8 md:p-16 text-center text-primary-foreground relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full -ml-32 -mb-32" />

                        <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">
                            {t("services_page.cta.title")}
                        </h2>
                        <p className="text-primary-foreground/90 text-lg mb-10 max-w-2xl mx-auto relative z-10">
                            {t("services_page.cta.subtitle")}
                        </p>
                        <div className="relative z-10">
                            <Button
                                variant="secondary"
                                size="lg"
                                className="text-lg px-8 py-6 group"
                                onClick={() => window.location.href = "/contact"}
                            >
                                {t("services_page.cta.button")}
                                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Services;
