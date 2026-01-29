import { useState, useEffect } from 'react';
import ChatButton from './ChatButton';
import ChatPopup from './ChatPopup';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Load saved state from localStorage
    useEffect(() => {
        const savedState = localStorage.getItem('chatWidgetOpen');
        if (savedState === 'true') {
            setIsOpen(true);
        }
    }, []);

    // Save state to localStorage
    useEffect(() => {
        localStorage.setItem('chatWidgetOpen', isOpen.toString());
    }, [isOpen]);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const closeChat = () => {
        setIsOpen(false);
    };

    return (
        <>
            <ChatButton isOpen={isOpen} onClick={toggleChat} />
            <ChatPopup isOpen={isOpen} onClose={closeChat} />
        </>
    );
};

export default ChatWidget;
