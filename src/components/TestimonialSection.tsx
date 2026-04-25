import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";
import { useTranslation } from "react-i18next";

interface Testimonial {
    name: string;
    role: string;
    content: string;
}

// Testimonials are now managed in locale files

const TestimonialSection = () => {
    const { t } = useTranslation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const testimonials = t("testimonials.items", { returnObjects: true }) as Testimonial[];

    return (
        <section className="py-20 bg-background" ref={ref}>
            <div className="container-section">
                <div className="text-center mb-16">
                    <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                        {t("testimonials.badge")}
                    </span>
                    <h2 className="section-title mt-2">{t("testimonials.title")}</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-secondary/30 p-8 rounded-2xl relative"
                        >
                            <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />

                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-4 h-4 ${i < (index === 2 ? 4 : 5) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                                            }`}
                                    />
                                ))}
                            </div>

                            <p className="text-foreground/80 mb-6 italic">
                                "{testimonial.content}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm text-foreground">{testimonial.name}</h4>
                                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
