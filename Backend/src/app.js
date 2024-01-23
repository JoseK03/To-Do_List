// Importamos bibliotecas necesarias
import express from "express";
import dotenv from 'dotenv';
dotenv.config(); // Configuracion de las variables de entorno
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js"; // importación de rutas 
import cookieParser from 'cookie-parser';

//Instanciamos express
const app = express();

app.use(morgan('combined'));//Usamos morgan para el registro de las solicitudes HTTP
app.use(express.json());//Habilitamos JSON en el cuerpo de las solicitudes
app.use(cookieParser())//nos permite agregar un middleware, convertir cookie a json

 
app.use('/api', authRoutes);

export default app;