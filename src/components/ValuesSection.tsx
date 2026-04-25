import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  MessageCircle,
  Layers,
  Handshake,
  Database,
  ClipboardCheck,
  Heart
} from "lucide-react";
import { useTranslation } from "react-i18next";

const ValuesSection = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: MessageCircle,
      title: t("values.list.consulting.title"),
      description: t("values.list.consulting.desc"),
    },
    {
      icon: Layers,
      title: t("values.list.platform.title"),
      description: t("values.list.platform.desc"),
    },
    {
      icon: Handshake,
      title: t("values.list.partner.title"),
      description: t("values.list.partner.desc"),
    },
    {
      icon: Database,
      title: t("values.list.wms.title"),
      description: t("values.list.wms.desc"),
    },
    {
      icon: ClipboardCheck,
      title: t("values.list.fulfillment.title"),
      description: t("values.list.fulfillment.desc"),
    },
    {
      icon: Heart,
      title: t("values.list.professional.title"),
      description: t("values.list.professional.desc"),
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-background" ref={ref}>
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            {t("values.badge")}
          </span>
          <h2 className="section-title mt-2">
            {t("values.title")}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 rounded-xl bg-secondary/30 hover:bg-secondary/60 transition-colors duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-primary/5 rounded-2xl border border-primary/20">
            <span className="text-primary font-bold text-4xl md:text-5xl">100+</span>
            <div className="text-left">
              <p className="font-semibold text-foreground">{t("values.trust.brands")}</p>
              <p className="text-sm text-muted-foreground">{t("values.trust.subtitle")}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesSection;
