import { NextResponse } from 'next/server';
import { mockQuestionBanks } from '@/lib/mockQuestions';
import { mockDB } from '@/lib/mockDB';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { moduleId, answers, studentId, studentName, discipline, team, presentedQuestions } = data;

    const sourceBank = mockQuestionBanks[moduleId] || mockQuestionBanks['fundamentos'];

    let correctAnswers = 0;
    let incorrectAnswers = 0;
    let unansweredQuestions = 0;
    const studyGuideList: string[] = [];
    const detailedAnswers = [];

    // Agora a gente cruza as respostas enviadas pelo usuário contra o banco de dados oficial pra ver o que ele acertou
    if (presentedQuestions && Array.isArray(presentedQuestions)) {
      for (const q of presentedQuestions) {
        const submittedOptId = answers[q.id];

        const realQuestion = sourceBank.find(bq => bq._id === q.id);
        if (!realQuestion) continue;

        const correctOption = realQuestion.options.find((opt: any) => opt.isCorrect === true);
        let chosenOptionText = null;

        if (!submittedOptId) {
          unansweredQuestions++;
          if (!studyGuideList.includes(q.topic)) studyGuideList.push(q.topic);
        } else {
          const chosenOption = realQuestion.options.find((opt: any) => opt._id === submittedOptId);
          chosenOptionText = chosenOption ? chosenOption.text : 'Desconhecida';

          if (correctOption && correctOption._id === submittedOptId) {
            correctAnswers++;
          } else {
            incorrectAnswers++;
            if (!studyGuideList.includes(q.topic)) studyGuideList.push(q.topic);
          }
        }

        detailedAnswers.push({
          questionContent: realQuestion.content,
          chosenOptionText,
          correctOptionText: correctOption ? correctOption.text : 'Gabarito Indisponível',
          isCorrect: correctOption && correctOption._id === submittedOptId
        });
      }
    }

    const totalQuestions = presentedQuestions ? presentedQuestions.length : 15;
    const performancePercentage = Math.round((correctAnswers / totalQuestions) * 100);

    const mockAttemptResult = {
      attemptId: `attempt_${Date.now()}`,
      moduleId,
      totalQuestions,
      correctAnswers,
      incorrectAnswers,
      unansweredQuestions,
      performancePercentage,
      studyGuide: studyGuideList,
      completedAt: new Date().toISOString()
    };

    // Jogamos a prova todinha corrigida lá na memória para o professor baixar na planilha PDF / CSV depois
    mockDB.attempts.push({
      attemptId: mockAttemptResult.attemptId,
      studentId: studentId || 'N/A',
      studentName: studentName || 'N/A',
      discipline: discipline || 'N/A',
      team: team || 'N/A',
      moduleId,
      performancePercentage,
      completedAt: mockAttemptResult.completedAt,
      correctAnswers,
      incorrectAnswers,
      unansweredQuestions,
      totalQuestions,
      detailedAnswers
    });

    return NextResponse.json({ success: true, result: mockAttemptResult }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: 'Falha grave ao processar', details: error.message }, { status: 500 });
  }
}
