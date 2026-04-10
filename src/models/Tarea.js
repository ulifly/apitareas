import mongoose from "mongoose";

const tareSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descripcion:{ type: String },
    completada: {type: Boolean, default: false}
});

const Tarea = mongoose.model('Tarea', tareSchema);

export default Tarea;