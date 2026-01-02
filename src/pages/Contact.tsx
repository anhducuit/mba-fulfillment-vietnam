import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageSquare, HeadphonesIcon } from "lucide-react";

const Contact = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-32 pb-20">
                {/* Intro */}
                <section className="container-section text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Liên Hệ Với <span className="text-primary">Chúng Tôi</span></h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng tư vấn giải pháp fulfillment
                            tối ưu nhất cho mô hình kinh doanh của bạn.
                        </p>
                    </motion.div>
                </section>

                {/* Info Grid */}
                <section className="container-section mb-20">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-card p-8 rounded-3xl border border-border text-center">
                            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
                                <Phone size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Điện thoại</h3>
                            <p className="text-muted-foreground mb-4">Tư vấn 24/7</p>
                            <a href="tel:0948078599" className="text-2xl font-bold text-primary hover:underline">0948 078 599</a>
                        </div>

                        <div className="bg-card p-8 rounded-3xl border border-border text-center">
                            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
                                <Mail size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Email</h3>
                            <p className="text-muted-foreground mb-4">Phản hồi trong 2h</p>
                            <a href="mailto:mbafulfillmentvn@gmail.com" className="text-lg font-bold text-primary hover:underline break-words">mbafulfillmentvn@gmail.com</a>
                        </div>

                        <div className="bg-card p-8 rounded-3xl border border-border text-center">
                            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
                                <Clock size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Giờ làm việc</h3>
                            <p className="text-muted-foreground mb-2">Thứ 2 - Thứ 7</p>
                            <p className="font-bold text-foreground">08:00 - 18:00</p>
                        </div>
                    </div>
                </section>

                {/* Form and Map Placeholder */}
                <section className="container-section">
                    <div className="bg-secondary/20 p-8 md:p-12 rounded-[40px] border border-border">
                        <div className="grid lg:grid-cols-2 gap-12">
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Gửi yêu cầu tư vấn</h2>
                                <p className="text-muted-foreground mb-8">
                                    Vui lòng điền thông tin vào biểu mẫu, chúng tôi sẽ liên hệ lại ngay để khảo sát nhu cầu và báo giá chi tiết.
                                </p>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 text-foreground/80">
                                        <CheckCircle2 size={24} className="text-primary" />
                                        <span>Tư vấn giải pháp miễn phí</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-foreground/80">
                                        <CheckCircle2 size={24} className="text-primary" />
                                        <span>Demo hệ thống OMS/WMS</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-foreground/80">
                                        <CheckCircle2 size={24} className="text-primary" />
                                        <span>Tham quan kho thực tế</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-card rounded-3xl p-8 border border-border shadow-sm h-full">
                                <ContactSection onlyForm={true} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Address Details */}
                <section className="container-section mt-24">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full font-semibold">
                                <MapPin size={18} />
                                <span>Trụ sở chính</span>
                            </div>
                            <h2 className="text-3xl font-bold">MBA Fulfillment Việt Nam</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                40/8 Lê Thị Ánh, Phường Tân Thới Nhất, Quận 12, TP. Hồ Chí Minh
                            </p>
                            <div className="pt-6">
                                <a
                                    href="https://maps.google.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-full"
                                >
                                    Xem trên Google Maps
                                </a>
                            </div>
                        </div>
                        <div className="flex-1 w-full aspect-video bg-muted rounded-3xl flex items-center justify-center border-2 border-dashed border-border">
                            <div className="text-center text-muted-foreground">
                                <MapPin size={48} className="mx-auto mb-4 opacity-20" />
                                <p>Interactive Map Placeholder</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

const CheckCircle2 = ({ size, className }: { size?: number, className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="m9 12 2 2 4-4" /></svg>
)

export default Contact;
