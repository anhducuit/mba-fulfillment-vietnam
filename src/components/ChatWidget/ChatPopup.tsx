import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import AIChat from '../AIChat';

interface ChatPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

const ChatPopup = ({ isOpen, onClose }: ChatPopupProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop for mobile */}
                    <motion.div
                        className="fixed inset-0 bg-black/50 z-40 md:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Chat Popup */}
                    <motion.div
                        className="fixed z-50 bg-background rounded-t-2xl md:rounded-2xl shadow-2xl overflow-hidden
                                   bottom-0 left-0 right-0 md:bottom-24 md:right-6 md:left-auto
                                   h-[85vh] md:h-[600px] md:w-[400px]"
                        initial={{
                            opacity: 0,
                            y: 100,
                            scale: 0.95
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1
                        }}
                        exit={{
                            opacity: 0,
                            y: 100,
                            scale: 0.95
                        }}
                        transition={{
                            type: 'spring',
                            stiffness: 300,
                            damping: 30
                        }}
                    >
                        {/* Header */}
                        <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                                    <span className="text-lg font-bold">AI</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Trợ lý AI</h3>
                                    <p className="text-xs opacity-90">MBA Fulfillment Vietnam</p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="w-8 h-8 rounded-full hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Chat Content */}
                        <div className="h-[calc(100%-64px)]">
                            <AIChat />
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ChatPopup;
