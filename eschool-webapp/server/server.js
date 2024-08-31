import express from 'express';
import dotenv from 'dotenv';
import connectDatabase from './config/MongoDb.js';
import { errorHandler, notFound } from './Middleware/Error.js';
import userRouter from './routes/UserRoutes.js';

dotenv.config();
connectDatabase();
const app = express();
app.use(express.json());

//API

app.use('/api/users', userRouter);
//ERROR HANDLER
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 1000;
app.listen(PORT, console.log(`server running at port ${PORT}`));
