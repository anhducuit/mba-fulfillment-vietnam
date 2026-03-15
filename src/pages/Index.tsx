import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MultichannelSection from "@/components/MultichannelSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import ValuesSection from "@/components/ValuesSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialSection from "@/components/TestimonialSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>MBA Fulfillment Việt Nam | Giải pháp Fulfillment 4.0 hàng đầu</title>
        <meta name="description" content="Nâng tầm vận hành doanh nghiệp với giải pháp Fulfillment 4.0. Lưu kho, đóng gói, vận chuyển tự động hóa đa sàn thương mại điện tử. SLA 99.9%." />
        <link rel="canonical" href="https://omsmba.online/" />
      </Helmet>
      <Header />
      <main>
        <HeroSection />

        {/* Wave Divider */}
        <div className="relative h-20 bg-white overflow-hidden -mt-10 z-20">
          <svg className="absolute bottom-0 w-full h-full preserve-3d" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 100h1440V0c-240 66.7-480 100-720 100S240 66.7 0 0v100z" fill="white" />
          </svg>
        </div>

        <MultichannelSection />
        <StatsSection />
        <ServicesSection />
        <ValuesSection />
        <ProcessSection />
        <TestimonialSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
