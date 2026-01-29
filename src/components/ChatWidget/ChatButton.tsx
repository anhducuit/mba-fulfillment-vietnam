import { motion } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

interface ChatButtonProps {
    isOpen: boolean;
    onClick: () => void;
}

const ChatButton = ({ isOpen, onClick }: ChatButtonProps) => {
    return (
        <motion.button
            onClick={onClick}
            className="fixed bottom-6 right-6 w-14 h-14 md:w-16 md:h-16 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center z-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
            {isOpen ? (
                <X className="w-6 h-6 md:w-7 md:h-7" />
            ) : (
                <>
                    <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
                    {/* AI Badge */}
                    <motion.span
                        className="absolute -top-1 -right-1 bg-green-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        AI
                    </motion.span>
                </>
            )}
        </motion.button>
    );
};

export default ChatButton;
