import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import chatRouter from './routes/chat.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:8080'],
    credentials: true
}));
app.use(express.json());

// Routes
app.use('/api', chatRouter);

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'ok', message: 'AI Chatbox API is running' });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 AI Chatbox API server running on http://localhost:${PORT}`);
    console.log(`📡 Health check: http://localhost:${PORT}/health`);
});
