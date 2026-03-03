import mongoose from 'mongoose';

const ModuleSchema = new mongoose.Schema({
    title: { type: String, required: true }, // Ex: "Fundamentos", "Infraestrutura"
    description: { type: String },
    teacherId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    isActive: { type: Boolean, default: true }
}, { timestamps: true });

export const Module = mongoose.models.Module || mongoose.model('Module', ModuleSchema);
