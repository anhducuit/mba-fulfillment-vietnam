# 🔄 Cập nhật API Key - Groq API

## ✅ Đã chuyển sang Groq API (Miễn phí)

Chatbot đã được chuyển từ **Google Gemini** sang **Groq API** - hoàn toàn miễn phí và cực nhanh!

## 📝 Cập nhật Local (.env)

Mở file `.env` và thay đổi:

```bash
# Xóa dòng cũ (nếu có):
# GEMINI_API_KEY=AIzaSy...

# Thêm dòng mới:
GROQ_API_KEY=your_groq_api_key_here
PORT=8080
```

## 🚀 Cập nhật Vercel (Production)

1. **Vào Vercel Dashboard**: https://vercel.com/
2. **Chọn project**: mba-fulfillment-vietnam
3. **Settings** → **Environment Variables**
4. **Xóa biến cũ** (nếu có):
   - Xóa `GEMINI_API_KEY`
5. **Add New Variable**:
   - Name: `GROQ_API_KEY`
   - Value: `<your_groq_api_key_from_console>`
   - Environments: Chọn **Production**, **Preview**, **Development**
6. **Save**
7. **Redeploy**:
   - Vào Deployments → Click deployment mới nhất → ⋮ → Redeploy

## ✨ Lợi ích của Groq API

- ✅ **Hoàn toàn miễn phí** - 14,400 requests/day
- ✅ **Cực nhanh** - Tốc độ inference nhanh nhất thế giới
- ✅ **Model mạnh** - Llama 3.3 70B (chất lượng cao)
- ✅ **OpenAI-compatible** - Dễ migrate
- ✅ **Không cần thẻ tín dụng**

## 🧪 Test Local

```bash
npm run dev
```

Truy cập: http://localhost:8080

Mở chat widget và hỏi thử: "Chi phí dịch vụ nhập kho là bao nhiêu?"

AI sẽ trả lời với thông tin giá cụ thể!

## 📚 Tài liệu

- Groq Console: https://console.groq.com/
- Groq Docs: https://console.groq.com/docs
- Model: llama-3.3-70b-versatile
