import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import path from 'path';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

// App Config
const app = express();
const port = process.env.PORT || 4000;
connectDB()
connectCloudinary()

// Validate environment variables
if (!process.env.MONGODB_URI || !process.env.CLOUDINARY_API_KEY || !process.env.JWT_SECRET) {
    console.error('Missing required environment variables');
    process.exit(1);
}

// Connect to services
connectDB();
connectCloudinary();

// Middlewares
app.use(express.json());
app.use(cors());

// API Endpoints
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

// Health Check
app.get('/', (req, res) => {
    res.send("API Working");
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Start Server
app.listen(port, () => console.log('Server started on PORT : ' + port));