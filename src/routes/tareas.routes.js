import express from 'express';
import Tarea from '../models/Tarea.js';

const router = express.Router();

// Ruta de prueba


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

//ruta para obtener una tarea por ID
router.get('/tareas/:id', async (req, res) => {
    try {
        const tarea = await Tarea.findById(req.params.id);
        if (!tarea) {
            return res.status(404).json({ error: 'Tarea no encontrada' });
        }
        res.json(tarea);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Ruta para actualizar una tarea por ID
// UPDATE (PUT)
router.put('/tareas/:id', async (req, res) => {
    try {
        const tarea = await Tarea.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!tarea) {
            return res.status(404).json({ error: 'Tarea no encontrada' });
        } 
        res.json(tarea);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Ruta para Eliminar una tarea por ID
// DELETE (DELETE)
router.delete('/tareas/:id', async (req, res) => {
 try {
        const tarea = await Tarea.findByIdAndDelete(req.params.id);
        if (!tarea) {
            return res.status(404).json({ error: 'Tarea no encontrada' });
        }
        res.json({ message: 'Tarea eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
}
});



export default router;
