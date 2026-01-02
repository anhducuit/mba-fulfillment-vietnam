import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
    Link2,
    Warehouse,
    Truck,
    SearchCheck,
    PackageCheck,
    RefreshCw
} from "lucide-react";

const Process = () => {
    const detailedSteps = [
        {
            title: "1. Kết nối & Đồng bộ",
            icon: Link2,
            desc: "Chúng tôi kết nối API trực tiếp với các gian hàng trên Shopee, Lazada, TikTok Shop hoặc Website cá nhân của bạn. Chỉ mất 5 phút để hệ thống bắt đầu nhận dữ liệu sản phẩm và đơn hàng.",
            color: "bg-blue-500"
        },
        {
            title: "2. Nhập hàng & Kiểm tra (QC)",
            icon: SearchCheck,
            desc: "Hàng hóa khi nhập kho được kiểm tra số lượng và chất lượng nghiêm ngặt. Chúng tôi thực hiện phân loại, dán mã SKU và lưu trữ tại các vị trí tối ưu trong kho.",
            color: "bg-indigo-500"
        },
        {
            title: "3. Lưu kho Chuyên nghiệp",
            icon: Warehouse,
            desc: "Hệ thống WMS quản lý vị trí hàng hóa chính xác. Kho bãi được trang bị hệ thống kệ chứa hàng, điều hòa nhiệt độ (nếu cần) và camera an ninh 24/7.",
            color: "bg-primary"
        },
        {
            title: "4. Xử lý Đơn hàng (Pick & Pack)",
            icon: PackageCheck,
            desc: "Khi có đơn hàng, robot hoặc nhân viên sẽ lấy hàng theo lộ trình tối ưu. Sau đó hàng được đóng gói theo tiêu chuẩn của từng sàn TMĐT hoặc theo yêu cầu thương hiệu riêng của bạn.",
            color: "bg-purple-500"
        },
        {
            title: "5. Bàn giao & Vận chuyển",
            icon: Truck,
            desc: "MBA Fulfillment kết nối với tất cả các đơn vị vận chuyển lớn (GHTK, GHN, Viettel Post, J&T...). Đơn hàng được bàn giao nhiều lần trong ngày để đảm bảo tốc độ giao hàng nhanh nhất.",
            color: "bg-green-500"
        },
        {
            title: "6. Quản lý Đổi trả",
            icon: RefreshCw,
            desc: "Chúng tôi xử lý các đơn hàng hoàn về, kiểm tra tình trạng hàng hóa và cập nhật lại tồn kho nếu sản phẩm vẫn đảm bảo chất lượng bán ra.",
            color: "bg-orange-500"
        }
    ];

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
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Quy trình Vận hành <span className="text-primary">Chuẩn Quốc tế</span></h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Tại MBA Fulfillment, chúng tôi tối ưu từng khâu nhỏ nhất để đảm bảo hàng hóa của bạn
                            được xử lý an toàn, chính xác và đến tay khách hàng nhanh nhất có thể.
                        </p>
                    </motion.div>
                </section>

                {/* Process Steps List */}
                <section className="container-section">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {detailedSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-card border border-border p-8 rounded-3xl hover:shadow-card-hover transition-all duration-300"
                            >
                                <div className={`w-14 h-14 ${step.color} rounded-2xl flex items-center justify-center mb-6`}>
                                    <step.icon className="text-white" size={28} />
                                </div>
                                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* SLA Section */}
                <section className="mt-24 bg-foreground text-primary-foreground py-20">
                    <div className="container-section">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Cam kết Chất lượng (SLA)</h2>
                                <div className="space-y-6">
                                    {[
                                        { label: "Độ chính xác tồn kho", value: "99.9%" },
                                        { label: "Tỷ lệ đơn phát hàng trong ngày", value: "> 98%" },
                                        { label: "Thời gian xử lý khiếu nại", value: "< 24h" },
                                    ].map((sla, i) => (
                                        <div key={i} className="flex justify-between items-center border-b border-primary-foreground/10 pb-4">
                                            <span className="text-lg opacity-80">{sla.label}</span>
                                            <span className="text-2xl font-bold text-primary">{sla.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-primary/10 rounded-3xl p-8 border border-primary/20">
                                <blockquote className="text-xl italic opacity-90 leading-relaxed text-center">
                                    "Chúng tôi hiểu rằng đằng sau mỗi đơn hàng là niềm tin của khách hàng dành cho thương hiệu của bạn. Đó là lý do MBA Fulfillment không bao giờ thỏa hiệp với sai sót."
                                </blockquote>
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
