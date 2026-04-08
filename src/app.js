import express from 'express';

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Ruta de prueba

app.get('/', (req, res) => {
    res.send('¡Hola, Bartola ahi te dejo estos dos pesos!');
});

// iniciar el servidor
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor escuchando 😉 en http://localhost:${PORT}`);
});