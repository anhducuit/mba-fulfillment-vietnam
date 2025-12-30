import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link2, Warehouse, Truck, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Link2,
    time: "5 phút",
    title: "Kết nối cửa hàng của bạn",
    description: "Kết nối sàn TMĐT, đồng bộ sản phẩm và tồn kho với MBA Fulfillment một cách nhanh chóng.",
    color: "bg-blue-500",
  },
  {
    icon: Warehouse,
    time: "1 Ngày",
    title: "Nhập hàng & lưu kho",
    description: "Lưu trữ hàng tồn kho ở bất kỳ trung tâm xử lý đơn hàng nào của MBA Fulfillment trên toàn quốc.",
    color: "bg-primary",
  },
  {
    icon: Truck,
    time: "1-2 Ngày",
    title: "Xử lý đóng gói và giao hàng",
    description: "Chúng tôi xử lý việc đặt hàng, đóng gói và vận chuyển từ trung tâm xử lý đơn hàng gần nhất.",
    color: "bg-green-500",
  },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-20 md:py-28 bg-foreground text-primary-foreground relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary/5 to-transparent" />
      
      <div className="container-section relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Quy trình của MBA Fulfillment
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Hệ thống tự động hoá giúp giảm đáng kể thời gian xử lý đơn hàng
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-6 relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-1">
            <div className="w-full h-full bg-gradient-to-r from-blue-500 via-primary to-green-500 rounded-full opacity-30" />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="flex flex-col items-center text-center">
                {/* Step number and icon */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 ${step.color} rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300`}>
                    <step.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-foreground text-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                </div>

                {/* Time badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-4">
                  <span className="font-bold text-primary">{step.time}</span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-primary-foreground/70 leading-relaxed">{step.description}</p>
              </div>

              {/* Arrow for mobile */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center my-6">
                  <ArrowRight className="w-6 h-6 text-primary rotate-90" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
