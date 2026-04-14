import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import conectDB from './config/db.js';
import tareasRoutes from './routes/tareas.routes.js';

// Cargar variables de entorno
dotenv.config();

// Conectar a la base de datos
conectDB();

const PORT = process.env.PORT;

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware to parse JSON
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Ruta 
app.use('/', tareasRoutes);

// iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando 😉 en http://localhost:${PORT}`);
});