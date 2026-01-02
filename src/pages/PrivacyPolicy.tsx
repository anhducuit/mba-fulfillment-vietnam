import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="container-section py-32 md:py-40">
                <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Chính sách bảo mật thông tin</h1>

                <div className="prose prose-lg text-foreground/80 max-w-none space-y-6">
                    <p>
                        MBA Fulfillment cam kết bảo mật những thông tin mang tính riêng tư của khách hàng. Quý khách vui lòng đọc bản “Chính sách bảo mật” dưới đây để hiểu hơn những cam kết mà chúng tôi thực hiện, nhằm tôn trọng và bảo vệ quyền lợi của người truy cập.
                    </p>

                    <h3 className="text-xl font-bold text-foreground mt-8">1. Mục đích và phạm vi thu thập</h3>
                    <p>
                        Để truy cập và sử dụng một số dịch vụ tại MBA Fulfillment, quý khách có thể sẽ được yêu cầu đăng ký với chúng tôi thông tin cá nhân (Email, Họ tên, Số ĐT liên lạc…). Mọi thông tin khai báo phải đảm bảo tính chính xác và hợp pháp. MBA Fulfillment không chịu mọi trách nhiệm liên quan đến pháp luật của thông tin khai báo.
                    </p>
                    <p>
                        Chúng tôi cũng có thể thu thập thông tin về số lần viếng thăm, bao gồm số trang quý khách xem, số links (liên kết) bạn click và những thông tin khác liên quan đến việc kết nối đến site MBA Fulfillment. Chúng tôi cũng thu thập các thông tin mà trình duyệt Web (Browser) quý khách sử dụng mỗi khi truy cập vào hệ thống, bao gồm: địa chỉ IP, loại Browser, ngôn ngữ sử dụng, thời gian và những địa chỉ mà Browser truy xuất đến.
                    </p>

                    <h3 className="text-xl font-bold text-foreground mt-8">2. Phạm vi sử dụng thông tin</h3>
                    <p>
                        MBA Fulfillment thu thập và sử dụng thông tin cá nhân quý khách với mục đích phù hợp và hoàn toàn tuân thủ nội dung của “Chính sách bảo mật” này. Khi cần thiết, chúng tôi có thể sử dụng những thông tin này để liên hệ trực tiếp với bạn dưới các hình thức như: gởi thư ngỏ, đơn đặt hàng, thư cảm ơn, sms, thông tin về kỹ thuật và bảo mật…
                    </p>

                    <h3 className="text-xl font-bold text-foreground mt-8">3. Thời gian lưu trữ thông tin</h3>
                    <p>
                        Dữ liệu cá nhân của Thành viên sẽ được lưu trữ cho đến khi có yêu cầu hủy bỏ hoặc tự thành viên đăng nhập và thực hiện hủy bỏ. Còn lại trong mọi trường hợp thông tin cá nhân thành viên sẽ được bảo mật trên máy chủ của MBA Fulfillment.
                    </p>

                    <h3 className="text-xl font-bold text-foreground mt-8">4. Cam kết bảo mật thông tin cá nhân khách hàng</h3>
                    <p>
                        Thông tin cá nhân của thành viên trên MBA Fulfillment được cam kết bảo mật tuyệt đối theo chính sách bảo vệ thông tin cá nhân của MBA Fulfillment. Việc thu thập và sử dụng thông tin của mỗi thành viên chỉ được thực hiện khi có sự đồng ý của khách hàng đó trừ những trường hợp pháp luật có quy định khác.
                    </p>
                    <p>
                        Không sử dụng, không chuyển giao, cung cấp hay tiết lộ cho bên thứ 3 nào về thông tin cá nhân của thành viên khi không có sự cho phép đồng ý từ thành viên.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
