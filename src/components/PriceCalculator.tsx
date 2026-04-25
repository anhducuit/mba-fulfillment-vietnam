import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
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
  const { t, i18n } = useTranslation();
  const isVietnamese = i18n.language === "vi";

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
            <h3 className="text-2xl font-black uppercase tracking-tight">{t("calculator.title")}</h3>
          </div>
          <p className="text-slate-600 mb-8 leading-relaxed">
            {t("calculator.subtitle")}
          </p>

          <div className="space-y-6">
            <div className="space-y-2">
              <Label className="text-sm font-bold text-slate-700">{t("calculator.method.label")}</Label>
              <Select value={calculationMethod} onValueChange={setCalculationMethod}>
                <SelectTrigger className="py-6 rounded-xl border-slate-200 text-lg font-medium text-slate-900 !text-slate-900">
                  <SelectValue placeholder={t("calculator.method.placeholder")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="m3_day">{t("calculator.method.m3_day")}</SelectItem>
                  <SelectItem value="m2_month">{t("calculator.method.m2_month")}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="volume" className="text-sm font-bold text-slate-700">
                  {calculationMethod === "m3_day" ? t("calculator.volume_m3") : t("calculator.volume_m2")}
                </Label>
                <div className="relative">
                  <Input 
                    id="volume"
                    type="number" 
                    value={volume} 
                    onChange={(e) => setVolume(e.target.value)}
                    className="pl-10 py-6 rounded-xl border-slate-200 focus:border-primary focus:ring-primary/20 transition-all text-lg font-bold text-slate-900 !text-slate-900"
                  />
                  <Box className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="duration" className="text-sm font-bold text-slate-700">
                  {calculationMethod === "m3_day" ? t("calculator.duration_days") : t("calculator.duration_months")}
                </Label>
                <div className="relative">
                  <Input 
                    id="duration"
                    type="number" 
                    value={calculationMethod === "m3_day" ? duration : (parseInt(duration)/30).toString()} 
                    onChange={(e) => setDuration(calculationMethod === "m3_day" ? e.target.value : (parseInt(e.target.value)*30).toString())}
                    className="pl-10 py-6 rounded-xl border-slate-200 focus:border-primary focus:ring-primary/20 transition-all text-lg font-bold text-slate-900 !text-slate-900"
                  />
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-bold text-slate-700">{t("calculator.storage_type.label")}</Label>
              <Select 
                value={storageType} 
                onValueChange={setStorageType}
                disabled={calculationMethod === "m3_day"}
              >
                <SelectTrigger className="py-6 rounded-xl border-slate-200 text-lg font-medium text-slate-900 !text-slate-900">
                  <SelectValue placeholder={t("calculator.storage_type.placeholder")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="regular">{t("calculator.storage_type.regular")}</SelectItem>
                  <SelectItem value="cool">{t("calculator.storage_type.cool")}</SelectItem>
                </SelectContent>
              </Select>
              {calculationMethod === "m3_day" && (
                <p className="text-[10px] text-slate-400 italic"> {t("calculator.storage_type.note")}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="itemValue" className="text-sm font-bold text-slate-700">{t("calculator.item_value.label")}</Label>
              <div className="relative">
                <Input 
                  id="itemValue"
                  type="number" 
                  value={itemValue} 
                  onChange={(e) => setItemValue(e.target.value)}
                  placeholder={t("calculator.item_value.placeholder")}
                  className="pl-10 py-6 rounded-xl border-slate-200 focus:border-primary focus:ring-primary/20 transition-all text-lg font-bold text-slate-900 !text-slate-900"
                />
                <TrendingUp className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              </div>
              <p className="text-[10px] text-slate-400">{t("calculator.item_value.note")}</p>
            </div>

            <Button 
              onClick={calculatePrice}
              className="w-full py-8 rounded-xl text-lg font-bold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 transition-transform active:scale-95"
            >
              {t("calculator.button")}
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
                <h4 className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-1">{t("calculator.result.title")}</h4>
                <div className="text-4xl md:text-5xl font-black text-slate-900 mb-2">
                  {result.total.toLocaleString(isVietnamese ? "vi-VN" : "zh-CN")} <span className="text-xl text-slate-400 font-medium">{t("calculator.result.currency_full")}</span>
                </div>
                
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex justify-between text-slate-500">
                    <span>{t("calculator.result.storage_fee")}:</span>
                    <span className="font-bold text-slate-700">{result.storage.toLocaleString(isVietnamese ? "vi-VN" : "zh-CN")} {t("calculator.result.currency_short")}</span>
                  </div>
                  {result.insurance > 0 && (
                    <div className="flex justify-between text-slate-500">
                      <span>{t("calculator.result.insurance_fee")}:</span>
                      <span className="font-bold text-slate-700">{result.insurance.toLocaleString(isVietnamese ? "vi-VN" : "zh-CN")} {t("calculator.result.currency_short")}</span>
                    </div>
                  )}
                </div>

                <p className="text-[10px] text-slate-400 italic mb-6">
                  {t("calculator.result.note")}
                </p>
                <Button variant="outline" className="w-full py-6 rounded-xl border-primary text-primary hover:bg-primary/5 font-bold" onClick={() => window.location.href = "#contact"}>
                  {t("calculator.result.cta")}
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
                <p className="text-slate-500 font-medium text-center">
                  {t("calculator.result.placeholder")}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
          
          <div className="mt-auto pt-6 flex items-center gap-4 border-t border-slate-200/50 opacity-60">
            <div className="grid grid-cols-2 gap-4 w-full">
               <div className="text-center">
                 <div className="text-[10px] font-bold text-slate-400 italic">{t("calculator.footer.accuracy")}</div>
                 <div className="text-sm font-black text-slate-700">{t("calculator.footer.accuracy_val")}</div>
               </div>
               <div className="text-center">
                 <div className="text-[10px] font-bold text-slate-400 italic">{t("calculator.footer.latest_price")}</div>
                 <div className="text-sm font-black text-emerald-600">{t("calculator.footer.latest_price_val")}</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCalculator;
