import dotenv from 'dotenv';
// Load env vars immediately
dotenv.config();

import express from 'express';
import cors from 'cors';
import connectDB from './config/db';
import authRoutes from './routes/auth';

const startServer = async () => {
    const app = express();

    // Middleware
    app.use(cors());
    app.use(express.json());

    // Routes
    app.get('/', (req, res) => {
        res.send('InternHunt API Running');
    });

    app.use('/api/auth', authRoutes);

    // Connect to Database
    await connectDB();

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
};

startServer();
