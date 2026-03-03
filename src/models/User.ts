import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    role: { type: String, enum: ['STUDENT', 'TEACHER'], required: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Criptografado no banco real
    // --- Registros Exclusivos para a área do Aluno ---
    classId: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
    modality: { type: String, enum: ['Regular', 'Technical', 'Other'] },
    callNumber: { type: Number, min: 1, max: 60 },
    studentId: { type: String, unique: true, sparse: true }, // Nomenclatura gerada automática (Ex: "TRC202601")
}, { timestamps: true });

export const User = mongoose.models.User || mongoose.model('User', UserSchema);
