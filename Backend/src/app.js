//Instalamos las dependencias necesarias para levantar el servidor
import express from "express";
import dotenv from 'dotenv';
dotenv.config();
//Morgan nos permite obtener informacion del usuario que realice una peticion
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(morgan('combined'));
app.use(express.json());

 
app.use('/api', authRoutes);

export default app;