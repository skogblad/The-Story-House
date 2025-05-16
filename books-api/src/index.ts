import 'dotenv/config'
import express from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';

const app = express();

//Middelware
app.use(express.json()); 
app.use(cookieParser()); // This specific middleware parses Cookies
app.use(cors({
  origin: "http://localhost:5173", // This makes the Express server except request from other domains
  credentials: true    // Allows cookies sent to this API
}));   

//Routes
import usersRouter from './routes/usersRouter';
import reviewRouter from "./routes/reviewRouter";
import booksRouter from './routes/booksRouter';
import authRouter from './routes/auth';
app.use('/users', usersRouter);
app.use("/reviews", reviewRouter);
app.use('/books', booksRouter);
app.use('/auth', authRouter);

//connect to Mongoose db
mongoose.connect(process.env.MONGODB_URL || "");


// Start server express
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});