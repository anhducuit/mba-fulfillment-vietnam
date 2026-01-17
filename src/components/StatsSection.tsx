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
    value: 100,
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
    <section className="py-24 md:py-32 bg-foreground text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 blur-[120px] rounded-full -mr-48 -mt-48 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-primary/5 blur-[120px] rounded-full -ml-48 -mb-48 pointer-events-none" />

      <div className="container-section relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 inline-block">
              Proven Excellence
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
              Tối Ưu Vận Hành <br />
              <span className="text-primary">Cam Kết Chất Lượng</span>
            </h2>
            <p className="text-xl text-primary-foreground/70 mb-12 leading-relaxed">
              Dù quy mô kinh doanh của bạn là gì, MBA Fulfillment mang đến sự an tâm tuyệt đối
              với các chỉ số vận hành chuẩn quốc tế, giúp bạn tập trung hoàn toàn vào tăng trưởng.
            </p>
            <div className="flex gap-6">
              <div className="flex flex-col">
                <span className="text-5xl font-extrabold text-primary mb-2">99.9%</span>
                <span className="text-sm opacity-60">Độ chính xác tồn kho</span>
              </div>
              <div className="w-px h-16 bg-primary/20 self-center" />
              <div className="flex flex-col">
                <span className="text-5xl font-extrabold text-primary mb-2">98%+</span>
                <span className="text-sm opacity-60">Đơn phát trong ngày</span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 mb-6 rounded-2xl bg-primary/20 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  <CountUp end={stat.value} suffix={stat.suffix} inView={isInView} />
                </div>
                <p className="text-sm font-medium opacity-80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
