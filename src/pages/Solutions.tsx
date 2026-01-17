import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { CheckCircle2, ShoppingCart, BarChart3, ShieldCheck, Zap, Globe, PackageOpen, LayoutDashboard } from "lucide-react";
import Logo from "@/components/Logo";

const Solutions = () => {
    const categories = [
        {
            title: "Fulfillment cho TMĐT",
            icon: ShoppingCart,
            description: "Giải pháp toàn diện giúp nhà bán hàng tối ưu quy trình từ khi khách chốt đơn đến khi nhận hàng.",
            points: [
                "Đồng bộ đơn hàng tự động từ Shopee, Lazada, TikTok Shop.",
                "Quy trình Pick & Pack chuẩn hóa, hạn chế sai sót 99.9%.",
                "Tự động cập nhật số lượng tồn kho lên tất cả các sàn.",
                "Xử lý đơn hàng siêu tốc trong vòng 2-4 giờ kể từ khi phát sinh."
            ],
            image: "/images/ecommerce_fulfillment.png"
        },
        {
            title: "Giải pháp Logistics B2B",
            icon: Truck,
            description: "Hỗ trợ phân phối hàng hóa số lượng lớn cho các đại lý, hệ thống siêu thị và cửa hàng bán lẻ.",
            points: [
                "Quản lý lô hàng (Batch Management) và hạn sử dụng (FEFO/FIFO).",
                "Vận chuyển cross-docking giúp tối ưu chi phí lưu kho.",
                "Dịch vụ dán tem phụ, đóng gói kiện lớn chuyên nghiệp.",
                "Báo cáo chi tiết luồng hàng đi và đến hàng ngày."
            ],
            image: "/images/b2b_logistics.png"
        },
        {
            title: "Công nghệ OMS & WMS",
            icon: LayoutDashboard,
            description: "Nền tảng công nghệ mạnh mẽ giúp bạn quản lý kinh doanh mọi lúc mọi nơi.",
            points: [
                "Hệ thống OMS (Order Management System) tập trung mọi đơn hàng.",
                "WMS (Warehouse Management System) quản lý vị trí kho chính xác.",
                "Dashboard báo cáo thông minh, phân tích doanh thu và sản phẩm bán chạy.",
                "Tích hợp API linh hoạt với các phần mềm kế toán và quản lý khác."
            ],
            image: "/images/oms_wms_technology.png"
        }
    ];

    return (
        <div className="min-h-screen bg-background">
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
                            Giải Pháp <span className="text-primary">Vận Hành</span> Thông Minh
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Chúng tôi không chỉ là kho lưu giữ hàng hóa, chúng tôi là đối tác chiến lược
                            giúp bạn mở rộng quy mô kinh doanh không giới hạn với công nghệ và quy trình chuyên nghiệp.
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

                {/* Value Propositions */}
                <section className="bg-secondary/20 py-24 mt-24">
                    <div className="container-section">
                        <h2 className="text-3xl font-bold text-center mb-16">Vì sao nên chọn MBA Fulfillment?</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { title: "Hệ thống bảo mật", desc: "Hàng hóa được giám sát camera 24/7 và hệ thống PCCC tiêu chuẩn.", icon: ShieldCheck },
                                { title: "Tốc độ vượt trội", desc: "Đơn hàng chốt trước 14h sẽ được bàn giao cho đơn vị vận chuyển ngay trong ngày.", icon: Zap },
                                { title: "Quy mô toàn quốc", desc: "Mạng lưới kho bãi tại các thành phố lớn giúp giảm phí ship và thời gian giao hàng.", icon: Globe },
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
