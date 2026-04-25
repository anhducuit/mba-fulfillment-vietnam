import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{t("homepage.meta_title")}</title>
        <meta name="description" content={t("homepage.meta_description")} />
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
