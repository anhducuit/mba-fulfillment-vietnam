import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIChat from "@/components/AIChat";
import { motion } from "framer-motion";
import { Bot, Sparkles } from "lucide-react";

const AIAssistant = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />

            <main className="flex-1 pt-32 pb-8">
                <div className="container-section h-full">
                    {/* Compact Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-4"
                    >
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center">
                                <Bot className="w-5 h-5 text-primary-foreground" />
                            </div>
                            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                                Trợ Lý AI <span className="text-primary">MBA Fulfillment</span>
                            </h1>
                        </div>
                    </motion.div>

                    {/* Chat Container */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white dark:bg-secondary/20 rounded-3xl shadow-xl border border-secondary/20 overflow-hidden"
                        style={{ height: 'calc(100vh - 260px)', minHeight: '600px' }}
                    >
                        <AIChat />
                    </motion.div>

                    {/* Quick Tips */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-3 text-center"
                    >
                        <p className="text-xs text-muted-foreground mb-2">💡 Gợi ý:</p>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {[
                                'Dịch vụ fulfillment',
                                'Chi phí',
                                'Quy trình',
                                'Tích hợp sàn',
                                'Liên hệ'
                            ].map((question, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-secondary/50 hover:bg-secondary/70 rounded-full text-xs text-foreground cursor-pointer transition-colors"
                                    onClick={() => {
                                        // This would trigger sending the question
                                        // Implementation can be added later
                                    }}
                                >
                                    {question}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default AIAssistant;
