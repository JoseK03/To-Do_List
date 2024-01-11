import express from "express";
import dotenv from 'dotenv';
dotenv.config();
import morgan from "morgan";
import authRoutes from "./src/routes/auth.routes.js";

const app = express();

app.use(morgan('combined'));
app.use(express.json());

 
app.use('/api', authRoutes);

export default app;