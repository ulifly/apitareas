import express from 'express';
import dotenv from 'dotenv';
import conectDB from './config/db.js';
import tareasRoutes from './routes/tareas.routes.js';

// Cargar variables de entorno
dotenv.config();

// Conectar a la base de datos
conectDB();

const PORT = process.env.PORT;

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Ruta de prueba
app.use('/', tareasRoutes);

// iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando 😉 en http://localhost:${PORT}`);
});