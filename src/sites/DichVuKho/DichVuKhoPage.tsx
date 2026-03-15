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
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DichVuKhoPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Dịch vụ kho hàng chuyên nghiệp dichvukho.vn",
    "provider": {
      "@type": "Organization",
      "name": "Dịch Vụ Kho VN"
    },
    "description": "Giải pháp 3PL chuyên nghiệp: Lưu kho, quản lý tồn, xử lý đơn hàng trọn gói tại TP.HCM và Hà Nội. Hệ thống kho bãi >10.000m².",
    "areaServed": ["TP.HCM", "Hà Nội", "Đà Nẵng"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Dịch vụ kho bãi",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Lưu kho chung & Kho linh hoạt" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Quản lý tồn kho WMS" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hoàn tất đơn hàng TMĐT (Fulfillment)" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Vận tải & Phân phối" } }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Dịch Vụ Kho Hàng Chuyên Nghiệp | Hệ Thống Kho 3PL Toàn Quốc | dichvukho.vn</title>
        <meta name="description" content="Hệ thống kho bãi hiện đại tại TP.HCM & Hà Nội. Dịch vụ lưu kho chung, quản lý tồn kho WMS, đóng gói & xử lý đơn hàng chuyên nghiệp. Tiết kiệm 40% chi phí logistics." />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* 1. Hero Section - Visual & Hook */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/warehouse_interior_premium_1773589774009.png" 
              alt="Hệ thống kho hàng chuyên nghiệp" 
              className="w-full h-full object-cover brightness-[0.4]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
          </div>
          
          <div className="container-section relative z-10">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary-foreground font-medium text-sm mb-6 border border-primary/30 backdrop-blur-md">
                  <TrendingUp size={16} />
                  Giải pháp Logistics 3PL tối ưu chi phí 40%
                </div>
                <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-8 leading-[1.1]">
                  Hệ Thống Kho Bãi <br />
                  <span className="text-primary italic">Thông Minh</span> & Chuyên Nghiệp
                </h1>
                <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
                  Dichvukho.vn cung cấp hệ thống kho chung hiện đại tại TP.HCM và Hà Nội. 
                  Chúng tôi thay bạn quản lý toàn bộ chuỗi cung ứng từ Nhập kho - Lưu trữ - Xử lý đơn hàng đến Giao khách cuối.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8 py-8 h-auto font-bold shadow-lg shadow-primary/20" onClick={() => window.location.href = "#contact"}>
                    Nhận tư vấn giải pháp
                    <ArrowRight className="ml-2 w-6 h-6" />
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-8 h-auto bg-white/5 backdrop-blur-md text-white border-white/20 hover:bg-white/10" onClick={() => window.location.href = "#services"}>
                    Công nghệ WMS
                  </Button>
                </div>
                
                <div className="mt-12 grid grid-cols-3 gap-8 border-t border-white/10 pt-8 max-w-xl">
                  <div>
                    <div className="text-3xl font-bold text-white">20.000m²+</div>
                    <div className="text-slate-400 text-sm">Diện tích kho</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">500+</div>
                    <div className="text-slate-400 text-sm">Đối tác tin dùng</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">99.9%</div>
                    <div className="text-slate-400 text-sm">Tỷ lệ chính xác</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. Pain Points Section */}
        <section className="py-24 bg-slate-50">
          <div className="container-section">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Tại sao doanh nghiệp <br />cần thuê kho chung?</h2>
                <div className="space-y-8">
                  {[
                    { title: "Áp lực chi phí cố định", desc: "Thuê kho riêng tốn kém tiền cọc, nhân sự, bảo vệ, điện nước dù hàng ít hay nhiều." },
                    { title: "Khó khăn trong quản lý tồn kho", desc: "Không có phần mềm, hàng hóa thất thoát, không kiểm soát được date và số lượng thực tế." },
                    { title: "Quá tải mùa cao điểm", desc: "Khi đơn hàng tăng đột biến, kho riêng không đủ chỗ và nhân sự không xử lý kịp hàng." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5 p-6 rounded-2xl bg-white shadow-sm border border-slate-100 italic">
                      <div className="flex-shrink-0 w-12 h-12 bg-destructive/10 text-destructive rounded-xl flex items-center justify-center">
                        <X size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="rounded-[2rem] overflow-hidden shadow-2xl">
                  <img src="/professional_warehouse_team_1773589809209.png" alt="Đội ngũ vận hành chuyên nghiệp" className="w-full h-auto" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-3xl shadow-xl max-w-xs border border-slate-100 hidden md:block">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="font-bold text-sm uppercase tracking-wider text-slate-500">Live Operation</span>
                  </div>
                  <p className="text-slate-700 font-medium">Hơn 5000 đơn hàng được xử lý chính xác hôm nay.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Comparison Section (New & Crucial) */}
        <section className="py-24 container-section">
          <div className="text-center mb-16 px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Kho Chung hay Kho Riêng?</h2>
            <p className="text-xl text-muted-foreground">Phân tích giúp bạn lựa chọn mô hình tối ưu nhất</p>
          </div>
          
          <div className="overflow-x-auto rounded-[2rem] border border-slate-200 shadow-xl">
            <table className="w-full text-left bg-white">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="p-8 text-xl">Đặc điểm comparison</th>
                  <th className="p-8 text-xl font-medium border-l border-white/10 opacity-60">Kho Độc Lập / Kho Riêng</th>
                  <th className="p-8 text-xl font-bold border-l border-white/10 text-primary">Kho Chung Dichvukho.vn</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { label: "Diện tích / Không gian", private: "Cố định, khó thay đổi", shared: "Thay đổi linh hoạt theo mùa vụ, dùng bao nhiêu thuê bấy nhiêu" },
                  { label: "Chi phí đầu tư hạ tầng", private: "Rất lớn (PCCC, kệ, WMS, CCTV...)", shared: "Chi phí đầu tư bằng 0, có sẵn hạ tầng hiện đại" },
                  { label: "Nhân sự & Vận hành", private: "Tự quản lý, tốn chi phí lương & BH", shared: "Có sẵn đội ngũ chuyên môn xử lý trọn gói" },
                  { label: "Công nghệ quản lý", private: "Thủ công hoặc tốn phí mua phần mềm", shared: "Hệ thống WMS thông minh, báo cáo Real-time" },
                  { label: "Rủi ro thất thoát", private: "Doanh nghiệp tự chịu", shared: "Dichvukho.vn cam kết bồi thường 100%" },
                  { label: "Tính linh động địa điểm", private: "Khó thay đổi do hợp đồng dài hạn", shared: "Linh hoạt, có thể thuê nhiều kho cùng lúc" }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="p-6 md:p-8 font-bold text-slate-700">{row.label}</td>
                    <td className="p-6 md:p-8 text-slate-500 border-l border-slate-100">{row.private}</td>
                    <td className="p-6 md:p-8 font-medium text-slate-900 border-l border-slate-100 bg-primary/5 italic">{row.shared}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Sử dụng dịch vụ tại <strong>dichvukho.vn</strong> giúp doanh nghiệp tiết kiệm đến <strong>40% chi phí vận hành</strong> và <strong>100% chi phí đầu tư hạ tầng</strong> ban đầu.
            </p>
          </div>
        </section>

        {/* 4. Core Services Showcase */}
        <section id="services" className="py-24 bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[50%] h-full opacity-10 pointer-events-none">
            <img src="/logistics_distribution_map_1773589826303.png" alt="Map decoration" className="w-full h-full object-contain" />
          </div>
          
          <div className="container-section relative z-10">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Dịch vụ 3PL Toàn Diện</h2>
              <p className="text-slate-400 text-lg">GGIT - Dịch vụ kho chuyên nghiệp & Giải pháp chuỗi cung ứng tối ưu.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: ShoppingCart, title: "Hoàn tất đơn hàng TMĐT", desc: "Quản lý toàn trình từ nhận đơn, pick & pack cho đến giao hàng và thu hộ (COD). Tích hợp đa kênh TikTok, Shopee, Lazada." },
                { icon: Warehouse, title: "Dịch vụ kho linh hoạt", desc: "Diện tích thuê linh hoạt từ 10m2. Hệ thống giá kệ selective, racking tiêu chuẩn quốc tế. Lưu trữ đa dạng mặt hàng." },
                { icon: Truck, title: "Vận tải & Phân phối", desc: "Vận chuyển đa phương thức toàn quốc. Tỷ lệ giao hàng đúng hẹn đạt 98%. Theo dõi lộ trình Real-time." },
                { icon: Scale, title: "Quản lý chuỗi cung ứng", desc: "Tối ưu hóa dòng chảy hàng hóa, giảm thiểu tồn kho ảo và rút ngắn thời gian quay vòng vốn cho doanh nghiệp." },
                { icon: Settings, title: "Dịch vụ giá trị gia tăng", desc: "Dán nhãn, đóng gói quà tặng, kiểm tra chất lượng (QC), xử lý hàng trả về (Reverse Logistics) chuyên nghiệp." },
                { icon: BarChart3, title: "Hệ thống WMS/TWMS", desc: "Phần mềm quản trị kho thông minh, giúp khách hàng kiểm soát tồn kho mọi lúc mọi nơi trên điện thoại." }
              ].map((service, i) => (
                <div key={i} className="group p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:border-primary/50">
                  <div className="w-16 h-16 bg-primary/20 text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <service.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-slate-400 leading-relaxed mb-6">{service.desc}</p>
                  <a href="#contact" className="inline-flex items-center text-primary font-bold hover:gap-2 transition-all">
                    Tìm hiểu thêm <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Technology Section (visual update) */}
        <section className="py-24 container-section">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="rounded-[3rem] overflow-hidden border-[12px] border-slate-100 shadow-2xl">
                <img src="/wms_tech_dashboard_1773589791942.png" alt="Công nghệ quản lý kho" className="w-full h-auto" />
              </div>
            </div>
            <div className="space-y-8 order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">Công nghệ dẫn đầu <br /><span className="text-primary italic">Vận hành vượt trội</span></h2>
              <p className="text-lg text-muted-foreground">
                Dichvukho.vn ứng dụng hệ thống quản trị kho WMS hiện đại nhất, cho phép bạn số hóa toàn bộ kho hàng.
              </p>
              <div className="grid gap-6">
                {[
                  { icon: Zap, title: "Xử lý đơn hàng siêu tốc", desc: "Hệ thống tự động hóa giúp giảm thời gian soạn hàng từ 30 phút xuống còn 2 phút mỗi đơn." },
                  { icon: ShieldCheck, title: "Bảo mật & Minh bạch", desc: "Lịch sử xuất nhập tồn được lưu trữ chi tiết, không lo sai sót, thất lạc hàng hóa." },
                  { icon: BarChart3, title: "Báo cáo thông minh", desc: "Hệ thống dashboard cung cấp báo cáo tồn kho, hiệu suất kinh doanh trực quan mọi lúc." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                      <item.icon size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. Industries Section (New) */}
        <section className="py-24 bg-slate-50">
          <div className="container-section">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Lưu trữ đa dạng mặt hàng</h2>
              <p className="text-xl text-muted-foreground">Chúng tôi có giải pháp bảo quản chuyên biệt cho từng ngành hàng</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { label: "Mỹ phẩm", icon: "✨" },
                { label: "Điện tử", icon: "📱" },
                { label: "Dầu nhớt", icon: "🛢️" },
                { label: "Thời trang", icon: "👕" },
                { label: "Bánh kẹo", icon: "🍬" },
                { label: "Gia dụng", icon: "🏠" }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-3xl bg-white border border-slate-100 flex flex-col items-center text-center hover:shadow-lg transition-all group">
                  <div className="text-4xl mb-4 group-hover:scale-125 transition-transform">{item.icon}</div>
                  <span className="font-bold text-slate-700">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. CTA & Map Section */}
        <section id="contact" className="py-24 container-section">
          <div className="bg-primary rounded-[4rem] p-12 md:p-24 text-center text-primary-foreground relative overflow-hidden shadow-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10 max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
                Bắt đầu hành trình <br /> tối ưu Logistics cùng chúng tôi
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto leading-relaxed">
                Đăng ký ngay để nhận tư vấn giải pháp kho chung miễn phí và tham quan hệ thống kho bãi trực tiếp tại TPHCM & Hà Nội.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button variant="secondary" size="lg" className="text-lg px-12 py-10 h-auto font-bold bg-white text-primary hover:bg-slate-100 flex flex-col" onClick={() => window.open("https://zalo.me/0948078599", "_blank")}>
                  <span className="text-xs uppercase tracking-widest opacity-60 mb-1">Tư vấn qua Zalo</span>
                  <span className="text-xl">0948 078 599</span>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-12 py-10 h-auto font-bold border-white/40 text-white hover:bg-white/10 flex flex-col" onClick={() => window.location.href = "tel:0948078599"}>
                  <span className="text-xs uppercase tracking-widest opacity-60 mb-1">Hotline 24/7</span>
                  <span className="text-xl">0948 078 599</span>
                </Button>
              </div>
              
              <div className="mt-16 flex justify-center gap-12 opacity-40">
                <img src="/images/partners/logistic_1.png" alt="Partner" className="h-8 grayscale brightness-[10]" />
                <img src="/images/partners/logistic_2.png" alt="Partner" className="h-8 grayscale brightness-[10]" />
                <img src="/images/partners/logistic_3.png" alt="Partner" className="h-8 grayscale brightness-[10]" />
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

// SVG Icon Components
const ShoppingCart = ({ size, className }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
  </svg>
);

export default DichVuKhoPage;
