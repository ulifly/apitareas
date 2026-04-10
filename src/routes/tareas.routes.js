import express from 'express';
import Tarea from '../models/Tarea.js';

const router = express.Router();

// Ruta de prueba

router.get('/', (req, res) => {
    res.send('¡Hola, Clase continuando con nuestra api desde el archivo de rutas');
});

// Ruta para crear una nueva tarea
// CREATE (POST)
router.post('/tareas', async (req, res) => {
    try {
        const tarea = new Tarea(req.body);
        await tarea.save();
        res.status(201).json(tarea);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Ruta para obtener todas las tareas
// READ (GET)
router.get('/tareas', async (req, res) => {
    try {
        const tareas = await Tarea.find();
        res.json(tareas);
    } catch (error) {        
        res.status(500).json({ error: error.message });
    }
});

// Ruta para actualizar una tarea por ID
// UPDATE (PUT)

// Ruta para Eliminar una tarea por ID
// DELETE (DELETE)



export default router;
