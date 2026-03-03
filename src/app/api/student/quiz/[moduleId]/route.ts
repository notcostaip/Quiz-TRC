import { NextResponse } from 'next/server';
import { prepareQuizLoadout } from '@/utils/shuffle';
import { mockQuestionBanks } from '@/lib/mockQuestions';

export async function GET(request: Request, { params }: { params: Promise<{ moduleId: string }> }) {
  try {
    const moduleId = (await params).moduleId;

    // Se o cara tentar bular a URL e acessar um módulo que não existe, a gente chuta ele pros "Fundamentos"
    const sourceBank = mockQuestionBanks[moduleId] || mockQuestionBanks['fundamentos'];

    // Passar nosso algoritmo de embaralhamento nas questões pra gerar uma prova 100% inédita pro aluno
    const loadout = prepareQuizLoadout(sourceBank);

    return NextResponse.json({
      success: true,
      moduleId,
      title: `Módulo: ${moduleId}`,
      questions: loadout
    });
  } catch (error: any) {
    return NextResponse.json({ error: 'Falha ao processar o banco de questões', details: error.message }, { status: 500 });
  }
}
