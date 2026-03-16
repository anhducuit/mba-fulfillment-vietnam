import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, Box, Clock, ChevronRight, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PriceCalculator = () => {
  const [volume, setVolume] = useState<string>("1");
  const [duration, setDuration] = useState<string>("30");
  const [storageType, setStorageType] = useState<string>("regular");
  const [result, setResult] = useState<number | null>(null);

  const calculatePrice = () => {
    const vol = parseFloat(volume);
    const dur = parseInt(duration);
    
    if (isNaN(vol) || isNaN(dur)) return;

    // Based on siteConfig/blog prices:
    // Regular: 8,000 VND / m3 / day
    // Cool (25C): 250,000 VND / m2 / month (approximated here as 15,000 / m3 / day for simplicity)
    const baseRate = storageType === "cool" ? 15000 : 8000;
    const total = vol * dur * baseRate;
    
    setResult(total);
  };

  return (
    <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-slate-100 max-w-4xl mx-auto overflow-hidden relative">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl animate-pulse" />
      
      <div className="relative z-10 grid lg:grid-cols-2 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-6 text-primary">
            <Calculator size={32} strokeWidth={2.5} />
            <h3 className="text-2xl font-black uppercase tracking-tight">Tính Phí Lưu Kho</h3>
          </div>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Nhập thông số lô hàng của bạn để nhận báo cáo ước tính chi phí lưu trữ tại hệ thống kho của MBA Fulfillment.
          </p>

          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="volume" className="text-sm font-bold text-slate-700">Tổng thể tích hàng hóa (m³)</Label>
              <div className="relative">
                <Input 
                  id="volume"
                  type="number" 
                  value={volume} 
                  onChange={(e) => setVolume(e.target.value)}
                  placeholder="Vd: 5.5"
                  className="pl-12 py-6 rounded-xl border-slate-200 focus:border-primary focus:ring-primary/20 transition-all text-lg font-bold"
                />
                <Box className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration" className="text-sm font-bold text-slate-700">Thời gian lưu trữ (ngày)</Label>
              <div className="relative">
                <Input 
                  id="duration"
                  type="number" 
                  value={duration} 
                  onChange={(e) => setDuration(e.target.value)}
                  placeholder="Vd: 30"
                  className="pl-12 py-6 rounded-xl border-slate-200 focus:border-primary focus:ring-primary/20 transition-all text-lg font-bold"
                />
                <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-bold text-slate-700">Loại hình lưu trữ</Label>
              <Select value={storageType} onValueChange={setStorageType}>
                <SelectTrigger className="py-6 rounded-xl border-slate-200 text-lg font-medium">
                  <SelectValue placeholder="Chọn loại kho" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="regular">Kho thông thường (Khô)</SelectItem>
                  <SelectItem value="cool">Kho mát (25°C)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button 
              onClick={calculatePrice}
              className="w-full py-8 rounded-xl text-lg font-bold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 transition-transform active:scale-95"
            >
              Xem ước tính ngay
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="bg-slate-50 rounded-3xl p-8 flex flex-col justify-center relative border border-slate-100 overflow-hidden">
          <AnimatePresence mode="wait">
            {result !== null ? (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h4 className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-2">Tổng chi phí ước tính</h4>
                <div className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
                  {result.toLocaleString("vi-VN")} <span className="text-xl text-slate-400 font-medium">VNĐ</span>
                </div>
                <p className="text-xs text-slate-400 italic mb-8">
                  * Giá chưa bao gồm VAT 8% và có thể thay đổi tùy lượng đơn hàng thực tế.
                </p>
                <Button variant="outline" className="w-full py-6 rounded-xl border-primary text-primary hover:bg-primary/5 font-bold" onClick={() => window.location.href = "#contact"}>
                  Nhận báo giá chi tiết qua Email
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key="placeholder"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-slate-200/50 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <AlertCircle size={40} />
                </div>
                <p className="text-slate-500 font-medium">
                  Điền thông tin bên trái để nhận <br /> kết quả ước tính tức thì.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
          
          <div className="mt-auto pt-8 flex items-center gap-4 border-t border-slate-200/50 opacity-60">
            <div className="grid grid-cols-2 gap-4 w-full">
               <div className="text-center">
                 <div className="text-xs font-bold text-slate-400">Đơn vị tính</div>
                 <div className="text-sm font-black text-slate-700">m³ / Ngày</div>
               </div>
               <div className="text-center">
                 <div className="text-xs font-bold text-slate-400">Độ chính xác</div>
                 <div className="text-sm font-black text-slate-700">~95% Phí lưu</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCalculator;
