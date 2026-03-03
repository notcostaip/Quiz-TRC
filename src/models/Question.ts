import mongoose from 'mongoose';

const QuestionSchema = new mongoose.Schema({
    moduleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Module', required: true },
    content: { type: String, required: true },
    options: [{
        text: { type: String, required: true },
        isCorrect: { type: Boolean, required: true }
    }],
    studyTopic: { type: String, required: true } // Tag que alimenta o relatório final do aluno (Ex: Camada OSI)
}, { timestamps: true });

export const Question = mongoose.models.Question || mongoose.model('Question', QuestionSchema);
