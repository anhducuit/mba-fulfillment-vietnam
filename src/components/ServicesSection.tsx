import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Package, 
  Store, 
  Gift, 
  Megaphone, 
  Warehouse,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Package,
    title: "Giải pháp Fulfillment",
    description: "MBA Fulfillment sẽ giúp bạn tối ưu toàn bộ quy trình từ lưu kho, đóng gói, vận chuyển và sau giao hàng với chi phí và thời gian tối thiểu.",
    features: ["Lưu kho an toàn", "Đóng gói chuyên nghiệp", "Vận chuyển nhanh chóng"],
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Store,
    title: "Bán hàng Đa kênh B2B",
    description: "MBA Fulfillment giúp bạn kết nối với các Nhà bán lẻ nhằm phân phối hàng hóa chỉ trên một nền tảng duy nhất nhưng vẫn tối ưu chi phí.",
    features: ["Kết nối đa sàn TMĐT", "Quản lý tập trung", "Tối ưu vận hành"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Gift,
    title: "Tùy chỉnh đóng gói",
    description: "Chúng tôi cung cấp các nhãn dán, ấn phẩm marketing, bao bì và hộp thương hiệu tùy chỉnh theo từng yêu cầu của nhà bán hàng.",
    features: ["Bao bì thương hiệu", "Ấn phẩm marketing", "Hộp quà tặng"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Megaphone,
    title: "Đối tác Marketing",
    description: "MBA Fulfillment và các đối tác luôn phối hợp cùng nhau để có các giải pháp hỗ trợ marketing và CSKH giúp tối ưu hiệu quả chiến dịch.",
    features: ["Hỗ trợ marketing", "Chăm sóc khách hàng", "Tối ưu chiến dịch"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Warehouse,
    title: "Quản lý kho hàng WMS",
    description: "Với hệ thống quản lý kho hàng (WMS) bạn có thể theo dõi tình trạng tồn kho theo thời gian thực, kiểm soát chặt chẽ hàng hóa.",
    features: ["Theo dõi real-time", "Kiểm kho dễ dàng", "Báo cáo chi tiết"],
    color: "from-indigo-500 to-violet-500",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 md:py-28 bg-secondary/50" ref={ref}>
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Về chúng tôi
          </span>
          <h2 className="section-title mt-2">Sứ mệnh</h2>
          <p className="section-subtitle">
            Chúng tôi xây dựng hệ thống MBA Fulfillment với nền tảng công nghệ thống nhất 
            một cách liền mạch để đáp ứng như là một hậu cần vững chắc, đáng tin cậy cho 
            nhà bán hàng đa kênh có thể mở rộng kinh doanh trên mọi thị trường
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-service group bg-card hover:bg-card"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-5">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-300"
              >
                Tìm hiểu thêm
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
