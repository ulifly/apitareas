import express from 'express';

const router = express.Router();

// Ruta de prueba

router.get('/', (req, res) => {
    res.send('¡Hola, Clase continuando con nuestra api desde el archivo de rutas');
});


export default router;
