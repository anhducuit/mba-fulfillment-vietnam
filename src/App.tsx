import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Solutions from "./pages/Solutions";
import Process from "./pages/Process";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import ChatWidget from "./components/ChatWidget";
import DichVuKhoPage from "./sites/DichVuKho/DichVuKhoPage";

const queryClient = new QueryClient();

const App = () => {
  // Detection for multi-site
  const isDichVuKho = window.location.hostname === "dichvukho.vn" || 
                     window.location.search.includes("site=dichvukho") ||
                     window.location.pathname.startsWith("/dichvukho");

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            {isDichVuKho ? (
              <Routes>
                <Route path="/" element={<DichVuKhoPage />} />
                <Route path="/dichvukho" element={<DichVuKhoPage />} />
                <Route path="*" element={<DichVuKhoPage />} />
              </Routes>
            ) : (
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/dichvukho" element={<DichVuKhoPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/services" element={<Services />} />
                <Route path="/process" element={<Process />} />
                <Route path="/contact" element={<Contact />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            )}

            {/* Chat Widget - appears on all pages */}
            <ChatWidget />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
