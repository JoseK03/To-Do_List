import express from "express";
import dotenv from 'dotenv';
dotenv.config();
import morgan from "morgan";
import authRoutes from "./src/routes/auth.routes.js";

const app = express();

app.use(morgan('combined'));
app.use(authRoutes);

export default app;