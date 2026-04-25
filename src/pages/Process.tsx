import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
    CheckCircle2,
    ArrowRight,
    Link2,
    SearchCheck,
    Warehouse,
    PackageCheck,
    Truck,
    RefreshCw
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const Process = () => {
    const { t } = useTranslation();

    const detailedSteps = [
        {
            title: t("process_page.steps.step1.title"),
            desc: t("process_page.steps.step1.desc"),
            image: "/images/process/step1.png",
            color: "bg-blue-500/10",
            icon: Link2,
            iconColor: "text-blue-500"
        },
        {
            title: t("process_page.steps.step2.title"),
            desc: t("process_page.steps.step2.desc"),
            image: "/images/process/step2.png",
            color: "bg-indigo-500/10",
            icon: SearchCheck,
            iconColor: "text-indigo-500"
        },
        {
            title: t("process_page.steps.step3.title"),
            desc: t("process_page.steps.step3.desc"),
            image: "/images/process/step3.png",
            color: "bg-primary/10",
            icon: Warehouse,
            iconColor: "text-primary"
        },
        {
            title: t("process_page.steps.step4.title"),
            desc: t("process_page.steps.step4.desc"),
            image: "/images/process/step4.png",
            color: "bg-purple-500/10",
            icon: PackageCheck,
            iconColor: "text-purple-500"
        },
        {
            title: t("process_page.steps.step5.title"),
            desc: t("process_page.steps.step5.desc"),
            image: "/images/process/step5.png",
            color: "bg-green-500/10",
            icon: Truck,
            iconColor: "text-green-500"
        },
        {
            title: t("process_page.steps.step6.title"),
            desc: t("process_page.steps.step6.desc"),
            image: "/images/process/step6.png",
            color: "bg-orange-500/10",
            icon: RefreshCw,
            iconColor: "text-orange-500"
        }
    ];
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-32 pb-20 overflow-hidden">
                {/* Intro */}
                <section className="container-section text-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-4 inline-block">
                            {t("process_page.badge")}
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight">
                            {t("process_page.title_main")} <br className="hidden md:block" />
                            <span className="text-primary">{t("process_page.title_highlight")}</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            {t("process_page.subtitle")}
                        </p>
                    </motion.div>
                </section>

                {/* Process Steps List (Alternating) */}
                <section className="container-section space-y-32">
                    {detailedSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center p-8 rounded-[3rem] bg-secondary/10 border border-secondary/20`}
                        >
                            <div className="flex-1 space-y-6">
                                <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center`}>
                                    <step.icon className={step.iconColor} size={32} />
                                </div>
                                <h2 className="text-3xl font-bold text-foreground">
                                    {step.title}
                                </h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {step.desc}
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-foreground/80">
                                        <CheckCircle2 className="text-primary" size={20} />
                                        <span>{t("process_page.features.automation")}</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-foreground/80">
                                        <CheckCircle2 className="text-primary" size={20} />
                                        <span>{t("process_page.features.accuracy")}</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="flex-1 w-full relative group">
                                <div className="absolute inset-0 bg-primary/5 rounded-[2rem] -rotate-3 scale-105 group-hover:rotate-0 transition-transform duration-500" />
                                <div className="relative overflow-hidden rounded-[2rem] bg-white border border-secondary/20 aspect-[4/3] shadow-xl">
                                    <motion.img
                                        src={step.image}
                                        alt={step.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        initial={{ scale: 1.2 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ duration: 1 }}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </section>

                {/* SLA Section */}
                <section className="mt-40">
                    <div className="container-section">
                        <div className="bg-foreground text-primary-foreground rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -mr-48 -mt-48 blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full -ml-48 -mb-48 blur-3xl" />

                            <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
                                <div>
                                    <h2 className="text-4xl font-bold mb-8">
                                        {t("process_page.sla.title").split("(SLA)")[0]} <br /> 
                                        <span className="text-primary">(SLA) {t("process_page.sla.title").split("(SLA)")[1]}</span>
                                    </h2>
                                    <p className="text-lg opacity-80 mb-10 leading-relaxed">
                                        {t("process_page.sla.subtitle")}
                                    </p>
                                    <div className="space-y-8">
                                        {[
                                            { label: t("process_page.sla.accuracy_label"), value: "99.9%" },
                                            { label: t("process_page.sla.shipping_label"), value: "> 98%" },
                                            { label: t("process_page.sla.dispute_label"), value: "< 24h" },
                                        ].map((sla, i) => (
                                            <div key={i} className="group flex justify-between items-center border-b border-primary-foreground/10 pb-4">
                                                <span className="text-xl opacity-70 group-hover:opacity-100 transition-opacity">{sla.label}</span>
                                                <span className="text-3xl font-bold text-primary">{sla.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-white/5 backdrop-blur-md rounded-3xl p-10 border border-white/10 text-center space-y-8 shadow-inner">
                                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle2 size={40} className="text-primary" />
                                    </div>
                                    <blockquote className="text-2xl font-light italic leading-relaxed opacity-95">
                                        "{t("process_page.sla.quote")}"
                                    </blockquote>
                                    <div className="pt-6">
                                        <Button
                                            className="btn-primary text-lg px-8 py-7"
                                            onClick={() => window.location.href = "/contact"}
                                        >
                                            {t("process_page.sla.cta")}
                                            <ArrowRight className="ml-2 w-5 h-5" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Process;
