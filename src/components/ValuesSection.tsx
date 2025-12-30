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

const values = [
  {
    icon: MessageCircle,
    title: "Tư vấn miễn phí 100%",
    description: "Hỗ trợ tư vấn chuyên nghiệp hoàn toàn miễn phí",
  },
  {
    icon: Layers,
    title: "Tất cả trên một nền tảng",
    description: "Quản lý tập trung mọi kênh bán hàng",
  },
  {
    icon: Handshake,
    title: "Đối tác tin cậy",
    description: "Cam kết đồng hành lâu dài cùng khách hàng",
  },
  {
    icon: Database,
    title: "Quản lý chính xác dữ liệu kho",
    description: "Theo dõi tồn kho real-time chính xác 100%",
  },
  {
    icon: ClipboardCheck,
    title: "Xử lý đơn hàng đúng cam kết",
    description: "Đảm bảo SLA và thời gian giao hàng",
  },
  {
    icon: Heart,
    title: "Tận tâm, chuyên nghiệp",
    description: "Đội ngũ chuyên gia giàu kinh nghiệm",
  },
];

const ValuesSection = () => {
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
            Tại sao chọn chúng tôi
          </span>
          <h2 className="section-title mt-2">
            Giá Trị Chúng Tôi Mang Lại Cho Khách Hàng
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
            <span className="text-primary font-bold text-4xl md:text-5xl">500+</span>
            <div className="text-left">
              <p className="font-semibold text-foreground">Nhãn hàng</p>
              <p className="text-sm text-muted-foreground">đã tin tưởng sử dụng dịch vụ</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesSection;
