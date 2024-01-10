import express from "express";
import dotenv from 'dotenv';
dotenv.config();
import morgan from "morgan";

const app = express();

app.use(morgan('combined'));

export default app;