// Usando o algoritmo Fisher-Yates clássico para embaralhar a ordem do array sem vícios
export function shuffleArray<T>(array: T[]): T[] {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Formato base de como a questão vem "pura" do banco de dados simulado
interface RawQuestion {
    _id: string;
    content: string;
    options: { text: string; isCorrect: boolean; _id?: string }[];
    studyTopic: string;
}

// Processa o banco de perguntas puras preparando-as especialmente para o aluno
export function prepareQuizLoadout(questionBank: RawQuestion[]): any[] {
    // 1. Aqui a gente dá uma super bagunçada nas questões pra evitar que eles decorem a ordem
    const shuffledBank = shuffleArray(questionBank);

    // 2. Extraímos no máximo 15 questões (o limite da bateria)
    const selectedQuestions = shuffledBank.slice(0, 15);

    // 3. E depois embaralhamos também a ordem das alternativas "A, B, C, D" pra cada questão
    return selectedQuestions.map((q) => {
        return {
            id: q._id.toString(),
            content: q.content,
            // A gente corta o 'isCorrect' e esconde do envio pra impedir que algum espertinho tente visualizar a resposta no inspecionar elemento do navegador!
            options: shuffleArray(q.options).map(opt => ({
                id: opt._id?.toString(),
                text: opt.text
            })),
            studyTopic: q.studyTopic,
        };
    });
}
