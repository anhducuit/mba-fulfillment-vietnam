# 🔄 Cập nhật API Key cho Google Gemini

## ✅ Đã chuyển sang Google Gemini 2.0 Flash

Chatbot đã được chuyển từ DeepSeek sang **Google Gemini 2.0 Flash** - miễn phí và mạnh mẽ hơn!

## 📝 Cập nhật Local (.env)

Mở file `.env` và thay đổi:

```bash
# Xóa dòng cũ:
# DEEPSEEK_API_KEY=cb062267-ce40-4de3-bac0-faf3a27ca9bb

# Thêm dòng mới:
GEMINI_API_KEY=AIzaSyDpHYBE-zmRtS37x4FuyIAYVXhiDcXXeoE
PORT=3001
```

## 🚀 Cập nhật Vercel (Production)

1. **Vào Vercel Dashboard**: https://vercel.com/
2. **Chọn project**: mba-fulfillment-vietnam
3. **Settings** → **Environment Variables**
4. **Xóa biến cũ** (nếu có):
   - Xóa `DEEPSEEK_API_KEY` hoặc `EEPSEEK_API_KEY`
5. **Add New Variable**:
   - Name: `GEMINI_API_KEY`
   - Value: `AIzaSyDpHYBE-zmRtS37x4FuyIAYVXhiDcXXeoE`
   - Environments: Chọn **Production**, **Preview**, **Development**
6. **Save**
7. **Redeploy**:
   - Vào Deployments → Click deployment mới nhất → ⋮ → Redeploy

## ✨ Lợi ích của Gemini 2.0 Flash

- ✅ **Hoàn toàn miễn phí** với quota cao (15 req/phút, 1500 req/ngày)
- ✅ **Tiếng Việt xuất sắc** - tốt hơn DeepSeek
- ✅ **Nhanh và thông minh**
- ✅ **Context window lớn** (1M tokens)
- ✅ **Không cần thẻ tín dụng**

## 🧪 Test Local

```bash
npm run dev:all
```

Truy cập: http://localhost:8080/ai-assistant

Hỏi thử: "Chi phí dịch vụ nhập kho là bao nhiêu?"

AI sẽ trả lời với thông tin giá cụ thể!
