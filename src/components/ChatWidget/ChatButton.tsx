import { motion } from 'framer-motion';
import { Bot, X, Sparkles } from 'lucide-react';

interface ChatButtonProps {
    isOpen: boolean;
    onClick: () => void;
}

const ChatButton = ({ isOpen, onClick }: ChatButtonProps) => {
    return (
        <motion.button
            onClick={onClick}
            className="fixed bottom-6 right-6 w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center z-50 relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
            {/* Animated background gradient */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20"
                animate={{
                    rotate: [0, 360],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />

            {isOpen ? (
                <X className="w-6 h-6 md:w-7 md:h-7 relative z-10" />
            ) : (
                <div className="relative z-10">
                    <Bot className="w-6 h-6 md:w-7 md:h-7" />
                    {/* AI Sparkles Badge */}
                    <motion.div
                        className="absolute -top-1 -right-1"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Sparkles className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                    </motion.div>
                </div>
            )}
        </motion.button>
    );
};

export default ChatButton;
