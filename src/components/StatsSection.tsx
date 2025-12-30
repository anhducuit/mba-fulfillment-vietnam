import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Shield, Truck, Target, Users } from "lucide-react";

const stats = [
  {
    icon: Shield,
    value: 99,
    suffix: "%",
    label: "SLA đạt được với sàn TMĐT",
    description: "Cam kết chất lượng dịch vụ cao nhất",
  },
  {
    icon: Truck,
    value: 95,
    suffix: "%",
    label: "Vận chuyển trong 2 ngày",
    description: "Giao hàng nhanh chóng toàn quốc",
  },
  {
    icon: Target,
    value: 99,
    suffix: "%",
    label: "Độ chính xác",
    description: "Xử lý đơn hàng chính xác tuyệt đối",
  },
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Nhà bán hàng tin tưởng",
    description: "Đối tác đồng hành cùng chúng tôi",
  },
];

const CountUp = ({ end, suffix, inView }: { end: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    
    let startTime: number;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, inView]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 md:py-24 bg-foreground text-primary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-section relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Tối ưu hóa thời gian
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Cam kết chất lượng dịch vụ
          </h2>
          <p className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto">
            Thậm chí chỉ cần từ một kho hàng, MBA Fulfillment có thể hoàn thiện đơn hàng 
            vận chuyển đến người mua hàng chỉ trong vòng 2 ngày
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/20 flex items-center justify-center">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="stat-number text-primary-foreground mb-2">
                <CountUp end={stat.value} suffix={stat.suffix} inView={isInView} />
              </div>
              <h3 className="font-semibold text-primary-foreground mb-1">{stat.label}</h3>
              <p className="text-sm text-primary-foreground/60">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
