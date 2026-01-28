# 🤖 AI Chatbox với DeepSeek-V3.2

Hướng dẫn chạy chatbox AI trên máy local.

## 📋 Yêu cầu

- Node.js (v16 trở lên)
- npm hoặc yarn

## 🚀 Cài đặt và Chạy

### Bước 1: Cài đặt dependencies

```bash
npm install
```

### Bước 2: Chạy ứng dụng

**Option A: Chạy cả Frontend + Backend cùng lúc (Khuyên dùng)**

```bash
npm run dev:all
```

**Option B: Chạy riêng từng phần**

Terminal 1 - Backend API:
```bash
npm run dev:api
```

Terminal 2 - Frontend:
```bash
npm run dev
```

### Bước 3: Truy cập

- **Frontend**: http://localhost:5173
- **AI Chatbox**: http://localhost:5173/ai-assistant
- **Backend API**: http://localhost:3001
- **Health Check**: http://localhost:3001/health

## 🎯 Tính năng

✅ **AI hiểu về MBA Fulfillment Vietnam**
- Biết về 5 dịch vụ chính
- Hiểu quy trình 6 bước
- Có thông tin liên hệ đầy đủ

✅ **Giao diện đẹp mắt**
- Markdown support (bold, lists, links)
- Typing indicator animation
- Auto-scroll to bottom
- Responsive design

✅ **Bảo mật**
- API key nằm trong `.env` (server-side)
- Không expose ra frontend
- CORS được cấu hình đúng

## 🔒 Bảo mật API Key

File `.env` đã được thêm vào `.gitignore` để đảm bảo API key không bị push lên GitHub.

**QUAN TRỌNG**: Khi deploy lên production (Vercel), bạn cần:
1. Vào Vercel Dashboard
2. Settings → Environment Variables
3. Thêm: `DEEPSEEK_API_KEY` = `0a7e8935-67cc-4f0d-a139-385e13998f70`

## 📝 Gợi ý câu hỏi để test

- "Dịch vụ fulfillment của MBA là gì?"
- "Quy trình xử lý đơn hàng như thế nào?"
- "Chi phí dịch vụ ra sao?"
- "Tích hợp với sàn TMĐT nào?"
- "Liên hệ tư vấn"

## 🛠️ Troubleshooting

**Lỗi: Cannot find module 'react-markdown'**
```bash
npm install react-markdown
```

**Lỗi: CORS blocked**
- Kiểm tra backend đang chạy trên port 3001
- Kiểm tra CORS config trong `api/server.js`

**Lỗi: DeepSeek API failed**
- Kiểm tra API key trong `.env`
- Kiểm tra còn tokens free không (500k tokens)

## 📦 Deploy lên Vercel

1. Push code lên GitHub
2. Import project vào Vercel
3. Thêm Environment Variable: `DEEPSEEK_API_KEY`
4. Deploy!

**Lưu ý**: Backend API cần deploy riêng hoặc sử dụng Vercel Serverless Functions.
