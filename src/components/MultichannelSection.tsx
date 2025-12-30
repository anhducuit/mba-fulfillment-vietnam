import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  ShoppingBag, 
  Store, 
  Globe, 
  Smartphone,
  BarChart3,
  Zap
} from "lucide-react";

const platforms = [
  { name: "Shopee", icon: ShoppingBag },
  { name: "Lazada", icon: Store },
  { name: "TikTok Shop", icon: Smartphone },
  { name: "Sendo", icon: Globe },
  { name: "Website", icon: Globe },
  { name: "Facebook", icon: Smartphone },
];

const MultichannelSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="solutions" className="py-20 md:py-28 bg-background relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container-section relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Quản lý bán hàng đa kênh
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Dễ dàng kết nối đa kênh & Quản lý tất cả cửa hàng với OMS MBA Fulfillment
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Kết nối và đồng bộ tất cả các sàn thương mại điện tử, quản lý đơn hàng tập trung 
              trên một nền tảng duy nhất. Tiết kiệm thời gian, tăng hiệu quả vận hành.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="p-4 bg-secondary/50 rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <BarChart3 className="w-6 h-6 text-primary" />
                  <span className="text-3xl font-bold text-primary">10+</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Năm kinh nghiệm trong lĩnh vực Logistic và hậu cần
                </p>
              </div>
              <div className="p-4 bg-secondary/50 rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="w-6 h-6 text-primary" />
                  <span className="text-3xl font-bold text-primary">5 phút</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Để kết nối và đồng bộ cửa hàng của bạn
                </p>
              </div>
            </div>

            {/* Platform icons */}
            <div>
              <p className="text-sm text-muted-foreground mb-4">Các sàn TMĐT đã kết nối:</p>
              <div className="flex flex-wrap gap-3">
                {platforms.map((platform, index) => (
                  <motion.div
                    key={platform.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg hover:border-primary/50 hover:shadow-card transition-all duration-300"
                  >
                    <platform.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">{platform.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right content - Dashboard illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-3xl p-8 md:p-12">
              {/* Mock Dashboard */}
              <div className="bg-card rounded-2xl shadow-card-hover overflow-hidden">
                {/* Header */}
                <div className="bg-foreground px-4 py-3 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-4 text-primary-foreground/60 text-sm">MBA Fulfillment Dashboard</span>
                </div>
                
                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: "Đơn hàng hôm nay", value: "1,234" },
                      { label: "Đang xử lý", value: "456" },
                      { label: "Đã giao", value: "778" },
                    ].map((stat) => (
                      <div key={stat.label} className="p-3 bg-secondary/50 rounded-lg text-center">
                        <p className="text-lg font-bold text-primary">{stat.value}</p>
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Chart placeholder */}
                  <div className="h-32 bg-gradient-to-t from-primary/10 to-transparent rounded-lg flex items-end justify-around p-4">
                    {[40, 65, 45, 80, 55, 70, 90].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={isInView ? { height: `${height}%` } : {}}
                        transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                        className="w-4 bg-primary rounded-t"
                      />
                    ))}
                  </div>

                  {/* Order list */}
                  <div className="space-y-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-3 p-2 bg-secondary/30 rounded-lg">
                        <div className="w-8 h-8 bg-primary/20 rounded flex items-center justify-center">
                          <ShoppingBag className="w-4 h-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="h-2 bg-muted rounded w-3/4" />
                          <div className="h-2 bg-muted/50 rounded w-1/2 mt-1" />
                        </div>
                        <div className="px-2 py-1 bg-green-500/20 text-green-600 text-xs rounded font-medium">
                          Hoàn thành
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-primary rounded-2xl shadow-button flex items-center justify-center"
              >
                <Store className="w-10 h-10 text-primary-foreground" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MultichannelSection;
