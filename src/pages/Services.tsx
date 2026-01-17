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

const services = [
    {
        icon: Package,
        title: "Giải pháp Fulfillment",
        description: "MBA Fulfillment sẽ giúp bạn tối ưu toàn bộ quy trình từ lưu kho, đóng gói, vận chuyển và sau giao hàng với chi phí và thời gian tối thiểu.",
        details: [
            "Quản lý nhập kho và kiểm kê hàng hóa nghiêm ngặt.",
            "Lưu kho theo tiêu chuẩn, đảm bảo an toàn tuyệt đối.",
            "Quy trình Pick & Pack chuẩn hóa, chính xác 99.9%.",
            "Kết nối với tất cả các đơn vị vận chuyển hàng đầu."
        ],
        color: "from-orange-500 to-amber-500",
        image: "/images/services/fulfillment.png"
    },
    {
        icon: Store,
        title: "Bán hàng Đa kênh B2B",
        description: "MBA Fulfillment giúp bạn kết nối với các Nhà bán lẻ nhằm phân phối hàng hóa chỉ trên một nền tảng duy nhất nhưng vẫn tối ưu chi phí.",
        details: [
            "Đồng bộ tồn kho thời gian thực trên Shopee, Lazada, TikTok Shop.",
            "Quản lý đơn hàng tập trung từ tất cả các kênh bán lẻ.",
            "Xử lý đơn hàng sỉ (B2B) và lẻ (B2C) linh hoạt.",
            "Hỗ trợ phân phối hàng vào hệ thống siêu thị, đại lý."
        ],
        color: "from-blue-500 to-cyan-500",
        image: "/images/services/b2b_logistics.png"
    },
    {
        icon: Warehouse,
        title: "Quản lý kho hàng WMS",
        description: "Với hệ thống quản lý kho hàng (WMS) hiện đại, bạn có thể theo dõi tình trạng tồn kho theo thời gian thực và kiểm soát chặt chẽ hàng hóa.",
        details: [
            "Theo dõi vị trí hàng hóa chính xác trong kho.",
            "Báo cáo xuất-nhập-tồn chi tiết hàng ngày/tháng.",
            "Cảnh báo khi số lượng tồn kho xuống mức thấp.",
            "Tích hợp API dễ dàng với các sàn và phần mềm quản lý."
        ],
        color: "from-indigo-500 to-violet-500",
        image: "/images/services/wms_tech.png"
    },
    {
        icon: Gift,
        title: "Tùy chỉnh đóng gói",
        description: "Chúng tôi cung cấp các nhãn dán, ấn phẩm marketing, bao bì và hộp thương hiệu tùy chỉnh theo từng yêu cầu của nhà bán hàng.",
        details: [
            "Đóng gói theo yêu cầu (Co-packing).",
            "Dán tem phụ, nhãn mác sản phẩm.",
            "Kèm thiệp cảm ơn, quà tặng trong đơn hàng.",
            "Sử dụng bao bì thân thiện với môi trường."
        ],
        color: "from-purple-500 to-pink-500",
        image: "/images/services/packaging.png"
    },
    {
        icon: Megaphone,
        title: "Giải pháp Tăng trưởng",
        description: "Chúng tôi hỗ trợ các giải pháp marketing và chăm sóc khách hàng giúp tối ưu hiệu quả kinh doanh cho đối tác.",
        details: [
            "Tư vấn tối ưu gian hàng trên sàn TMĐT.",
            "Hỗ trợ xử lý khiếu nại và đổi trả hàng (Return Management).",
            "Báo cáo phân tích hành vi khách hàng.",
            "Hợp tác với các Agency marketing uy tín."
        ],
        color: "from-green-500 to-emerald-500",
        image: "/images/services/growth_marketing.png"
    },
];

const Services = () => {
    return (
        <div className="min-h-screen bg-background">
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
                            Dịch Vụ <span className="text-primary">Toàn Diện</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Từ lưu kho đến giao hàng, chúng tôi cung cấp mọi giải pháp hậu cần
                            cần thiết để bạn tập trung hoàn toàn vào việc phát triển thương hiệu.
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
                                        Nhận tư vấn ngay
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                            <div className="flex-1 w-full bg-secondary/20 rounded-3xl aspect-[4/3] flex items-center justify-center relative overflow-hidden group">
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                                <motion.img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-contain p-8 relative z-10"
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
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
                            Sẵn sàng tối ưu vận hành cho doanh nghiệp của bạn?
                        </h2>
                        <p className="text-primary-foreground/90 text-lg mb-10 max-w-2xl mx-auto relative z-10">
                            Liên hệ với đội ngũ chuyên gia của chúng tôi để được tư vấn giải pháp fulfillment
                            phù hợp nhất và nhận báo giá ưu đãi.
                        </p>
                        <div className="relative z-10">
                            <Button
                                variant="secondary"
                                size="lg"
                                className="text-lg px-8 py-6 group"
                                onClick={() => window.location.href = "/contact"}
                            >
                                Yêu cầu báo giá chi tiết
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
