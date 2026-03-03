import mongoose from 'mongoose';

const ClassSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Nomenclatura da turma (Ex: "1B", "Turma Manhã 2")
    teacherId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    active: { type: Boolean, default: true }
}, { timestamps: true });

export const Class = mongoose.models.Class || mongoose.model('Class', ClassSchema);
