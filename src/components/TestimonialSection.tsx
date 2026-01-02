import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
    {
        name: "Nguyễn Văn Hùng",
        role: "Chủ shop Thời trang MenStyle",
        content: "Từ khi sử dụng MBA Fulfillment, tỷ lệ hoàn đơn của shop tôi giảm đáng kể nhờ quy trình đóng gói chắc chắn và giao hàng nhanh. Rất hài lòng với dịch vụ!",
        rating: 5,
    },
    {
        name: "Trần Thị Mai Phương",
        role: "Founder Mỹ phẩm Nature",
        content: "Hệ thống quản lý kho rất trực quan, tôi có thể kiểm soát tồn kho realtime ngay trên điện thoại. Đội ngũ support cũng rất nhiệt tình.",
        rating: 5,
    },
    {
        name: "Lê Thanh Tùng",
        role: "CEO TechGadget VN",
        content: "Giải pháp tối ưu cho các doanh nghiệp TMĐT vừa và nhỏ. Chi phí hợp lý, minh bạch, không phát sinh thêm các khoản vô lý.",
        rating: 4,
    },
];

const TestimonialSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-20 bg-background" ref={ref}>
            <div className="container-section">
                <div className="text-center mb-16">
                    <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                        Khách hàng nói gì về chúng tôi
                    </span>
                    <h2 className="section-title mt-2">Được tin tưởng bởi các đối tác</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-secondary/30 p-8 rounded-2xl relative"
                        >
                            <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />

                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-4 h-4 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                                            }`}
                                    />
                                ))}
                            </div>

                            <p className="text-foreground/80 mb-6 italic">
                                "{testimonial.content}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm text-foreground">{testimonial.name}</h4>
                                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
