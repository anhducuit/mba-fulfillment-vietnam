# 🚀 Hướng dẫn Deploy AI Chatbox lên Vercel

## ✅ Đã hoàn thành

Code đã được push lên GitHub với Vercel Serverless Function. Bây giờ bạn chỉ cần deploy!

## 📝 Các bước Deploy

### Bước 1: Truy cập Vercel Dashboard

1. Đăng nhập vào https://vercel.com/
2. Click vào project **mba-fulfillment-vietnam** (hoặc tên project của bạn)

### Bước 2: Thêm Environment Variable

**QUAN TRỌNG**: Bạn PHẢI thêm API key vào Vercel Environment Variables

1. Vào **Settings** → **Environment Variables**
2. Thêm biến mới:
   - **Name**: `DEEPSEEK_API_KEY`
   - **Value**: `cb062267-ce40-4de3-bac0-faf3a27ca9bb`
   - **Environment**: Chọn **Production**, **Preview**, và **Development**
3. Click **Save**

### Bước 3: Redeploy

1. Vào tab **Deployments**
2. Click vào deployment mới nhất
3. Click nút **⋮** (3 chấm) → **Redeploy**
4. Chọn **Use existing Build Cache** → Click **Redeploy**

### Bước 4: Kiểm tra

Sau khi deploy xong (khoảng 1-2 phút):

1. Truy cập: https://www.omsmba.online/ai-assistant
2. Gửi câu hỏi test: "Chi phí dịch vụ nhập kho là bao nhiêu?"
3. AI sẽ trả lời với thông tin giá cụ thể!

---

## 🔧 Troubleshooting

### Nếu chatbox vẫn không hoạt động:

1. **Kiểm tra Environment Variable:**
   - Vào Settings → Environment Variables
   - Đảm bảo `DEEPSEEK_API_KEY` đã được thêm đúng

2. **Kiểm tra Function Logs:**
   - Vào tab **Functions**
   - Click vào `/api/chat`
   - Xem logs để debug

3. **Clear Cache và Redeploy:**
   - Redeploy lại nhưng KHÔNG chọn "Use existing Build Cache"

---

## 📊 Cấu trúc mới

```
/api/chat.js          → Vercel Serverless Function (Backend)
/src/components/AIChat.tsx  → Frontend component
```

**Lợi ích:**
- ✅ Không cần server riêng
- ✅ Auto-scale theo traffic
- ✅ Miễn phí trên Vercel
- ✅ Deploy tự động khi push GitHub

---

## 🎉 Kết quả mong đợi

Sau khi deploy thành công, chatbox sẽ:
- ✅ Hoạt động trên production (https://www.omsmba.online/ai-assistant)
- ✅ Trả lời với thông tin giá cụ thể
- ✅ Hiểu context về MBA Fulfillment Vietnam
- ✅ Tư vấn chuyên nghiệp cho khách hàng
