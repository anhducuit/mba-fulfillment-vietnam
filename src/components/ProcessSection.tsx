import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link2, Warehouse, Truck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    title: "Kết nối & Đồng bộ",
    image: "/images/process/step1.png",
  },
  {
    title: "Nhập hàng & QC",
    image: "/images/process/step2.png",
  },
  {
    title: "Lưu kho Chuyên nghiệp",
    image: "/images/process/step3.png",
  },
  {
    title: "Xử lý Đơn hàng",
    image: "/images/process/step4.png",
  },
  {
    title: "Bàn giao Vận chuyển",
    image: "/images/process/step5.png",
  },
  {
    title: "Quản lý Đổi trả",
    image: "/images/process/step6.png",
  },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-24 md:py-32 bg-foreground text-primary-foreground relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-section relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-bold uppercase tracking-widest text-xs mb-3 inline-block">
            Our Flow
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Hành Trình Đơn Hàng Tối Ưu</h2>
          <p className="text-xl text-primary-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Mọi khâu vận hành đều được tự động hóa bằng hệ thống WMS hiện đại,
            đảm bảo hàng hóa đến tay khách hàng nhanh nhất.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="relative mb-6 mx-auto w-full aspect-square max-w-[140px]">
                <div className="absolute inset-0 bg-primary/10 rounded-[2rem] rotate-3 group-hover:rotate-0 transition-transform duration-500" />
                <div className="relative h-full bg-white border border-white/10 rounded-[2rem] shadow-lg group-hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute -top-2 -right-1 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-extrabold shadow-lg z-20 border-2 border-foreground">
                  {index + 1}
                </div>
              </div>

              <h3 className="text-sm md:text-base font-bold text-primary-foreground group-hover:text-primary transition-colors">
                {step.title}
              </h3>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Button
            variant="outline"
            className="rounded-full px-8 py-7 border-primary/30 text-primary hover:bg-primary/10 font-bold"
            onClick={() => window.location.href = "/process"}
          >
            Chi tiết quy trình đạt chuẩn <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
