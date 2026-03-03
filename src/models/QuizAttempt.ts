import mongoose from 'mongoose';

const QuizAttemptSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    moduleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Module', required: true },
    totalQuestions: { type: Number, default: 15 },
    correctAnswers: { type: Number, required: true },
    incorrectAnswers: { type: Number, required: true },
    performancePercentage: { type: Number, required: true },
    studyGuide: [{ type: String }], // Array puxando os tópicos ("studyTopic") que o aluno errou para ele focar nos estudos
    completedAt: { type: Date, default: Date.now }
});

export const QuizAttempt = mongoose.models.QuizAttempt || mongoose.model('QuizAttempt', QuizAttemptSchema);
