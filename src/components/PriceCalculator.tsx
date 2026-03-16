import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, Box, Clock, ChevronRight, CheckCircle2, AlertCircle, TrendingUp } from "lucide-react";
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
  const [calculationMethod, setCalculationMethod] = useState<string>("m3_day");
  const [volume, setVolume] = useState<string>("1");
  const [duration, setDuration] = useState<string>("30");
  const [storageType, setStorageType] = useState<string>("regular");
  const [itemValue, setItemValue] = useState<string>("0");
  const [result, setResult] = useState<{ total: number; storage: number; insurance: number } | null>(null);

  const calculatePrice = () => {
    const vol = parseFloat(volume);
    const dur = parseInt(duration);
    const val = parseFloat(itemValue);
    
    if (isNaN(vol) || isNaN(dur)) return;

    let storageFee = 0;
    if (calculationMethod === "m3_day") {
      // 8,000đ / m3 / ngày
      storageFee = vol * dur * 8000;
    } else {
      // m2 / tháng
      const months = dur / 30;
      const rate = storageType === "cool" ? 250000 : 120000;
      storageFee = vol * months * rate;
    }

    // Khai báo hàng giá trị cao: 0.30% (Hàng giá trị >= 500,000đ)
    const insuranceFee = val >= 500000 ? val * 0.003 : 0;
    
    setResult({
      total: storageFee + insuranceFee,
      storage: storageFee,
      insurance: insuranceFee
    });
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
            Dự toán chi phí lưu kho dựa trên bảng giá niêm yết mới nhất của MBA Fulfillment.
          </p>

          <div className="space-y-6">
            <div className="space-y-2">
              <Label className="text-sm font-bold text-slate-700">Phương thức tính phí</Label>
              <Select value={calculationMethod} onValueChange={setCalculationMethod}>
                <SelectTrigger className="py-6 rounded-xl border-slate-200 text-lg font-medium text-slate-900">
                  <SelectValue placeholder="Chọn phương thức" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="m3_day">Thể tích (m³ / Ngày)</SelectItem>
                  <SelectItem value="m2_month">Diện tích (m² / Tháng)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="volume" className="text-sm font-bold text-slate-700">
                  {calculationMethod === "m3_day" ? "Tổng m³" : "Tổng m²"}
                </Label>
                <div className="relative">
                  <Input 
                    id="volume"
                    type="number" 
                    value={volume} 
                    onChange={(e) => setVolume(e.target.value)}
                    className="pl-10 py-6 rounded-xl border-slate-200 focus:border-primary focus:ring-primary/20 transition-all text-lg font-bold text-slate-900"
                  />
                  <Box className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="duration" className="text-sm font-bold text-slate-700">
                  {calculationMethod === "m3_day" ? "Số ngày" : "Số tháng"}
                </Label>
                <div className="relative">
                  <Input 
                    id="duration"
                    type="number" 
                    value={calculationMethod === "m3_day" ? duration : (parseInt(duration)/30).toString()} 
                    onChange={(e) => setDuration(calculationMethod === "m3_day" ? e.target.value : (parseInt(e.target.value)*30).toString())}
                    className="pl-10 py-6 rounded-xl border-slate-200 focus:border-primary focus:ring-primary/20 transition-all text-lg font-bold text-slate-900"
                  />
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-bold text-slate-700">Loại hình lưu trữ</Label>
              <Select 
                value={storageType} 
                onValueChange={setStorageType}
                disabled={calculationMethod === "m3_day"}
              >
                <SelectTrigger className="py-6 rounded-xl border-slate-200 text-lg font-medium text-slate-900">
                  <SelectValue placeholder="Chọn loại kho" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="regular">Kho thông thường (Khô)</SelectItem>
                  <SelectItem value="cool">Kho mát (25°C)</SelectItem>
                </SelectContent>
              </Select>
              {calculationMethod === "m3_day" && (
                <p className="text-[10px] text-slate-400 italic"> * Tính theo m³ hiện chỉ áp dụng cho kho thông thường.</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="itemValue" className="text-sm font-bold text-slate-700">Giá trị hàng hóa định mức (VND)</Label>
              <div className="relative">
                <Input 
                  id="itemValue"
                  type="number" 
                  value={itemValue} 
                  onChange={(e) => setItemValue(e.target.value)}
                  placeholder="Vd: 500000"
                  className="pl-10 py-6 rounded-xl border-slate-200 focus:border-primary focus:ring-primary/20 transition-all text-lg font-bold text-slate-900"
                />
                <TrendingUp className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              </div>
              <p className="text-[10px] text-slate-400">Phí bảo hiểm 0.3% cho hàng giá trị cao (≥ 500k)</p>
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
                <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <h4 className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-1">Tổng chi phí ước tính</h4>
                <div className="text-4xl md:text-5xl font-black text-slate-900 mb-2">
                  {result.total.toLocaleString("vi-VN")} <span className="text-xl text-slate-400 font-medium">VNĐ</span>
                </div>
                
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex justify-between text-slate-500">
                    <span>Phí lưu kho:</span>
                    <span className="font-bold text-slate-700">{result.storage.toLocaleString("vi-VN")} đ</span>
                  </div>
                  {result.insurance > 0 && (
                    <div className="flex justify-between text-slate-500">
                      <span>Phí bảo hiểm (0.3%):</span>
                      <span className="font-bold text-slate-700">{result.insurance.toLocaleString("vi-VN")} đ</span>
                    </div>
                  )}
                </div>

                <p className="text-[10px] text-slate-400 italic mb-6">
                  * Giá chưa bao gồm VAT 8% và các phí nghiệp vụ (In, Out, Pick & Pack).
                </p>
                <Button variant="outline" className="w-full py-6 rounded-xl border-primary text-primary hover:bg-primary/5 font-bold" onClick={() => window.location.href = "#contact"}>
                  Nhận báo giá chi tiết
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
          
          <div className="mt-auto pt-6 flex items-center gap-4 border-t border-slate-200/50 opacity-60">
            <div className="grid grid-cols-2 gap-4 w-full">
               <div className="text-center">
                 <div className="text-[10px] font-bold text-slate-400 italic">Tỷ lệ chính xác</div>
                 <div className="text-sm font-black text-slate-700">~98% Phí lưu</div>
               </div>
               <div className="text-center">
                 <div className="text-[10px] font-bold text-slate-400 italic">Bảng giá mới nhất</div>
                 <div className="text-sm font-black text-emerald-600">Tháng 3/2026</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCalculator;
