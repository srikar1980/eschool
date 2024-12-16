// import express from 'express';
// import dotenv from 'dotenv';
// import connectDatabase from './config/MongoDb.js';
// import { errorHandler, notFound } from './Middleware/Error.js';
// import userRouter from './routes/UserRoutes.js'; // Ensure the path and file are correct

// dotenv.config(); // Load environment variables
// connectDatabase(); // Connect to MongoDB

// const app = express();
// app.use(express.json()); // Middleware to parse JSON

// // API Routes
// app.use('/api/users', userRouter);

// // Error Handling Middleware
// app.use(notFound);
// app.use(errorHandler);

// const PORT = process.env.PORT || 1000;
// app.listen(PORT, () => console.log(`Server running at port ${PORT}`)); // Fix the callback function


import express from 'express';
import cors from 'cors'; // Import CORS middleware
import dotenv from 'dotenv';
import connectDatabase from './config/MongoDb.js';
import { errorHandler, notFound } from './Middleware/Error.js';
import userRouter from './routes/UserRoutes.js';

dotenv.config(); // Load environment variables
connectDatabase(); // Connect to MongoDB

const app = express();

// Use CORS middleware
app.use(cors({
  origin: 'http://localhost:5173', // Update with the correct frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

app.use(express.json()); // Middleware to parse JSON

// API Routes
app.use('/api/users', userRouter);

// Error Handling Middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 1000;
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
