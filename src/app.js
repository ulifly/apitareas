import express from 'express';
import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

const PORT = process.env.PORT;

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Ruta de prueba

app.get('/', (req, res) => {
    res.send('¡Hola, Bartola ahi te dejo estos dos pesos!');
});

// iniciar el servidor

app.listen(PORT, () => {
    console.log(`Servidor escuchando 😉 en http://localhost:${PORT}`);
});