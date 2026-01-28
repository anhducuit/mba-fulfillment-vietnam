# 🔧 Cập nhật API Key - BytePlus

## Bước 1: Cập nhật file .env

Mở file `.env` và thay đổi API key:

**Từ:**
```bash
DEEPSEEK_API_KEY=0a7e8935-67cc-4f0d-a139-385e13998f70
```

**Thành:**
```bash
DEEPSEEK_API_KEY=cb062267-ce40-4de3-bac0-faf3a27ca9bb
```

## Bước 2: Restart server

```bash
# Stop server hiện tại (Ctrl+C)
# Sau đó chạy lại:
npm run dev:all
```

## Bước 3: Test chatbox

Truy cập: http://localhost:8080/ai-assistant

Gửi câu hỏi test: "Dịch vụ fulfillment của MBA là gì?"

---

**Lưu ý:** Backend đã được cập nhật để sử dụng BytePlus (Volcano Engine) API endpoint thay vì DeepSeek API trực tiếp.
