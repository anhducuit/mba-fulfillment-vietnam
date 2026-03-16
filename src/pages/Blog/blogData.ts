import { BlogPost } from "./types";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "huong-dan-toi-uu-chi-phi-logistics-2024",
    title: "Hướng Dẫn Tối Ưu Chi Phí Logistics & Kho Bãi Năm 2024",
    excerpt: "Làm thế nào để cắt giảm 30-40% chi phí vận hành kho bãi mà vẫn đảm bảo tốc độ giao hàng? Khám phá ngay các chiến lược từ chuyên gia 3PL.",
    content: `
      <h2>Tại sao chi phí Logistics thường tăng cao?</h2>
      <p>Trong bối cảnh TMĐT bùng nổ, việc quản lý kho bãi truyền thống đang lộ rõ nhiều khuyết điểm gây lãng phí ngân sách...</p>
      <h3>1. Sử dụng mô hình Kho Chung (Shared Warehouse)</h3>
      <p>Thay vì thuê kho riêng và trả tiền cho toàn bộ diện tích ngay cả khi không dùng hết, kho chung cho phép bạn chỉ trả tiền cho diện tích thực tế sử dụng.</p>
      <h3>2. Áp dụng công nghệ quản lý kho WMS</h3>
      <p>Phần mềm giúp giảm thiểu sai sót trong soạn hàng (Pick & Pack), từ đó giảm chi phí xử lý khiếu nại và đổi trả.</p>
      <h3>3. Tối ưu quy trình đóng gói</h3>
      <p>Sử dụng bao bì phù hợp với kích thước sản phẩm không chỉ bảo vệ hàng hóa tốt hơn mà còn giảm phí vận chuyển tính theo thể tích.</p>
    `,
    author: "MBA Team",
    date: "2024-03-15",
    image: "/warehouse_interior_premium_1773589774009.png",
    category: "Kiến thức Logistics",
    tags: ["Logistics", "Tiết kiệm chi phí", "Kho bãi"]
  },
  {
    id: "2",
    slug: "loi-ich-cua-fulfillment-doi-voi-nha-ban-hang-tmdt",
    title: "5 Lợi Ích Vượt Trội Khi Sử Dụng Dịch Vụ Fulfillment Đa Kênh",
    excerpt: "Bán hàng trên Shopee, TikTok Shop, Lazada khiến bạn quá tải? Dịch vụ fulfillment trọn gói chính là chìa khóa để bạn tập trung vào marketing và doanh số.",
    content: `
      <h2>Fulfillment là gì và tại sao nó quan trọng?</h2>
      <p>Fulfillment là quy trình từ lúc hàng được nhập kho cho đến khi trao tận tay khách hàng. Đối với nhà bán hàng đa kênh, việc tự vận hành thường dẫn đến 'vỡ trận' vào ngày sale...</p>
      <h3>1. Tự động hóa hoàn toàn quy trình nhận đơn</h3>
      <p>Hệ thống kết nối trực tiếp với các sàn, giúp đơn hàng đổ về kho và được xử lý ngay lập tức.</p>
      <h3>2. Giao hàng siêu tốc</h3>
      <p>Với vị trí kho tại trung tâm TP.HCM và Hà Nội, hàng hóa được bàn giao cho đơn vị vận chuyển sớm nhất, tăng tỷ lệ hài lòng của khách.</p>
    `,
    author: "Senior Consultant",
    date: "2024-03-10",
    image: "/wms_tech_dashboard_1773589791942.png",
    category: "E-commerce",
    tags: ["Fulfillment", "TMĐT", "Shopee", "TikTok Shop"]
  }
];
