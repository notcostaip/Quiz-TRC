// "Banco de dados" temporário que mora na memória RAM
export const mockDB = {
    users: [
        {
            id: 'aluno_1',
            role: 'STUDENT',
            fullName: 'João Silva',
            email: 'joao@tfc.com',
            password: '123',
            studentId: 'TRC01',
        },
        {
            id: 'aluno_2',
            role: 'STUDENT',
            fullName: 'Maria Oliveira',
            email: 'maria@tfc.com',
            password: '123',
            studentId: 'TRC02',
        },
        {
            id: 'aluno_3',
            role: 'STUDENT',
            fullName: 'Carlos Costa',
            email: 'carlos@tfc.com',
            password: '123',
            studentId: 'TRC03',
        },
        {
            id: 'aluno_4',
            role: 'STUDENT',
            fullName: 'Ana Pereira',
            email: 'ana@tfc.com',
            password: '123',
            studentId: 'TRC04',
        },
        {
            id: 'prof_1',
            role: 'TEACHER',
            fullName: 'Professor Tarcísio',
            email: 'professor@tfc.com',
            password: 'admin',
        }
    ],
    attempts: [] as Array<{
        attemptId: string;
        studentId: string;
        studentName: string;
        discipline?: string;
        team?: string;
        moduleId: string;
        performancePercentage: number;
        completedAt: string;
        correctAnswers: number;
        incorrectAnswers: number;
        unansweredQuestions: number;
        totalQuestions: number;
        detailedAnswers?: Array<{
            questionContent: string;
            chosenOptionText: string | null;
            correctOptionText: string;
            isCorrect: boolean;
        }>;
    }>
};
