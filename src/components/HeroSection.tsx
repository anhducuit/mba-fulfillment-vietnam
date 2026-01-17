import { motion } from "framer-motion";
import { Search, ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/modern-hero-warehouse.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 md:pt-40 pb-20 overflow-hidden bg-white"
    >
      {/* Background soft glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-section relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6 backdrop-blur-sm border border-primary/20">
                🚀 #1 Fulfillment Partner in Vietnam
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-foreground leading-[1.1] mb-8"
            >
              Nâng Tầm Vận Hành <br />
              <span className="text-primary italic">Bứt Phá</span> Doanh Số
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Hệ thống Fulfillment chuẩn 4.0 giúp bạn tự động hóa kinh doanh đa sàn,
              tối ưu chi phí và bùng nổ doanh số với công nghệ WMS hàng đầu.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
            >
              <Button
                className="btn-primary text-lg px-10 py-7 flex items-center gap-3 group shadow-lg shadow-primary/20"
                onClick={() => window.location.href = "/contact"}
              >
                <FileText className="w-6 h-6" />
                Dùng thử ngay
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
              </Button>
              <Button
                variant="outline"
                className="border-primary/30 text-primary hover:bg-primary/5 text-lg px-10 py-7"
                onClick={() => window.location.href = "/services"}
              >
                Khám phá dịch vụ
              </Button>
            </motion.div>
          </div>

          {/* 3D Master Illustration */}
          <div className="flex-1 w-full relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-10"
            >
              <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-2xl -rotate-6 scale-95" />
              <img
                src="/images/hero_master.png"
                alt="MBA Fulfillment Master Hub"
                className="w-full h-auto relative z-10 drop-shadow-2xl animate-float"
              />
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-primary/50 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
