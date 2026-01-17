import { motion } from "framer-motion";
import { Search, ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/modern-hero-warehouse.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 md:pt-40 pb-20 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(15, 35, 30, 0.9) 20%, rgba(20, 45, 40, 0.7) 100%), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Background soft glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[120px] pointer-events-none opacity-40" />

      <div className="container-section relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 bg-primary/20 text-primary-foreground rounded-full text-sm font-semibold mb-6 backdrop-blur-md border border-primary/30">
            🚀 #1 Fulfillment Partner in Vietnam
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-primary-foreground leading-[1.1] mb-8 max-w-4xl"
        >
          Nâng Tầm Vận Hành <br />
          <span className="text-primary italic">Bứt Phá</span> Doanh Số
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-primary-foreground/80 mb-12 max-w-3xl leading-relaxed"
        >
          Hệ thống Fulfillment chuẩn 4.0 giúp bạn tự động hóa kinh doanh đa sàn,
          tối ưu chi phí và bùng nổ doanh số với công nghệ WMS hàng đầu.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-5 justify-center"
        >
          <Button
            className="btn-primary text-lg px-10 py-8 flex items-center gap-3 group shadow-xl shadow-primary/20"
            onClick={() => window.location.href = "/contact"}
          >
            <FileText className="w-6 h-6" />
            Dùng thử ngay
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
          </Button>
          <Button
            variant="outline"
            className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-10 py-8"
            onClick={() => window.location.href = "/services"}
          >
            Khám phá dịch vụ
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-white/50 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
