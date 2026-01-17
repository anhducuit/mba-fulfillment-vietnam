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
    title: "Giải pháp Fulfillment",
    description: "Tối ưu toàn bộ quy trình từ lưu kho, đóng gói đến vận chuyển với chi phí tối thiểu.",
    image: "/images/services/fulfillment.png",
    color: "from-teal-500/20 to-teal-600/20",
  },
  {
    title: "Bán hàng Đa kênh B2B",
    description: "Kết nối đa sàn TMĐT, quản lý tập trung đơn hàng trên một nền tảng duy nhất.",
    image: "/images/services/b2b_logistics.png",
    color: "from-blue-500/20 to-blue-600/20",
  },
  {
    title: "Hệ thống WMS",
    description: "Quản lý kho thông minh, theo dõi tồn kho thời gian thực với độ chính xác tuyệt đối.",
    image: "/images/services/wms_tech.png",
    color: "from-indigo-500/20 to-indigo-600/20",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-32 bg-white" ref={ref}>
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-bold uppercase tracking-widest text-xs mb-3 inline-block">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Giải Pháp Vận Hành Toàn Diện</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Chúng tôi cung cấp các công cụ và dịch vụ hậu cần tốt nhất để giúp bạn
            mở rộng kinh doanh trên mọi nền tảng số.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-[2.5rem] rotate-3 group-hover:rotate-0 transition-transform duration-500`} />
              <div className="relative h-full bg-white border border-secondary/20 p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className="aspect-[4/3] mb-8 overflow-hidden rounded-2xl bg-secondary/10">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {service.description}
                </p>

                <Button
                  variant="ghost"
                  className="p-0 text-primary font-bold hover:bg-transparent group/btn flex items-center gap-2"
                  onClick={() => window.location.href = "/services"}
                >
                  Tìm hiểu thêm
                  <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-2" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
