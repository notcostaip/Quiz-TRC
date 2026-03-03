"use client";

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import confetti from 'canvas-confetti';

export default function QuizPage() {
  const router = useRouter();
  const params = useParams();
  const moduleId = params.moduleId as string;

  const [questions, setQuestions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('tfc_user');
    if (!user) {
      router.push('/login');
      return;
    }

    async function loadQuiz() {
      try {
        const res = await fetch(`/api/student/quiz/${moduleId}`);
        if (res.ok) {
          const data = await res.json();
          setQuestions(data.questions || []);
        } else {
          console.error('Falha ao obter questões do quiz');
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadQuiz();
  }, [moduleId, router]);

  const handleSelectOption = (questionId: string, optionId: string) => {
    // Dispara aquele efeito massa de "click" na tela pro aluno sentir que selecionou a resposta
    setAnswers(prev => ({
      ...prev,
      [questionId]: optionId
    }));
  };

  const currentQuestion = questions[currentQuestionIndex];

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      // Soltar a chuva de confetes quando acabar a bateria de provas
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#34D399', '#10B981', '#059669', '#0A0A0A']
      });

      const user = JSON.parse(localStorage.getItem('tfc_user') || '{}');
      const session = JSON.parse(localStorage.getItem('tfc_session') || '{}');

      const payload = {
        moduleId,
        studentId: user.id || 'DEV_STUDENT_01',
        studentName: session.fullName || user.fullName || 'Aluno Desconhecido',
        discipline: session.discipline || '',
        team: session.team || '',
        answers,
        presentedQuestions: questions.map((q: any) => ({ id: q.id, topic: q.studyTopic }))
      };

      const res = await fetch('/api/student/attempt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        const data = await res.json();
        localStorage.setItem('latest_result', JSON.stringify(data.result));
        setTimeout(() => {
          router.push(`/student/result/${data.result.attemptId}`);
        }, 1200); // Dar aquele 1 segundinho pra chuva de confete brilhar na tela antes de mudar página
      } else {
        alert('Falha ao enviar a sua prova. Tente novamente!');
        setSubmitting(false);
      }
    } catch (err) {
      console.error(err);
      alert('Aconteceu um erro de conexão de rede. Tente mais uma vez!');
      setSubmitting(false);
    }
  };

  const handleExit = () => {
    const confirm = window.confirm("Atenção! Todo o seu progresso será perdido. Tem certeza de que quer sair da avaliação agora?");
    if (confirm) {
      router.push('/student/dashboard');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center text-emerald-400 font-medium">
        <div className="flex flex-col items-center gap-4 animate-pulse">
          <svg className="w-10 h-10 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
          <span>Iniciando ambiente cibernético e montando as questões...</span>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] text-red-500 font-bold gap-4">
      <span>No momento, não há questões cadastradas ativas para este módulo.</span>
      <button onClick={() => router.push('/student/dashboard')} className="px-6 py-2 bg-neutral-800 text-white rounded hover:bg-neutral-700">Voltar</button>
    </div>;
  }

  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;

  const displayModule = moduleId.split('_').join(' ').replace(/\b\w/g, l => l.toUpperCase());

  // Calcular barra de progresso verde lá em cima da HUD
  const totalAnswered = Object.keys(answers).length;

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col justify-center animate-in fade-in slide-in-from-bottom-8 duration-700 min-h-screen py-8 relative">

      {/* Botão de segurança no cantinho pra caso o aluno se sinta mal ou precise abandonar a sessão na hora */}
      <button onClick={handleExit} className="absolute top-4 right-4 flex items-center gap-2 text-rose-500 hover:text-rose-400 font-medium z-50 transition-colors">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
        Abandonar Prova
      </button>

      <div className="bg-[#171717] border border-neutral-800 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col h-[85vh] relative z-10 transition-all duration-300">

        {/* Barrinha de progresso que vai acompanhando as questões respondidas */}
        <div className="px-8 py-5 border-b border-neutral-800 bg-[#121212]/80 backdrop-blur-md">
          <div className="flex justify-between text-neutral-300 mb-3 items-center">
            <h2 className="text-xl font-bold tracking-tight">Avaliação Técnica: <span className="text-emerald-400/90">{displayModule}</span></h2>
            <div className="text-xs font-semibold bg-[#262626] border border-neutral-700 px-3 py-1 rounded-full text-emerald-400 tracking-wider">
              {totalAnswered} RESPONDIDAS / {questions.length} TOTAL
            </div>
          </div>
          <div className="w-full bg-[#262626] rounded-full h-2 overflow-hidden shadow-inner">
            <div
              className="bg-gradient-to-r from-emerald-500 to-teal-400 h-2 rounded-full transition-all duration-500 ease-out shadow-[0_0_10px_rgba(16,185,129,0.8)]"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* A caixa principal exibindo a questão gigante com as letras ABCD logo abaixo */}
        <div className="flex-grow flex flex-col px-8 py-10 overflow-y-auto">
          <div key={currentQuestionIndex} className="animate-in fade-in slide-in-from-right-8 duration-500 flex flex-col flex-grow">
            <h3 className="text-2xl font-semibold text-gray-100 mb-8 leading-relaxed drop-shadow-sm selection:bg-emerald-500/30">
              <span className="text-emerald-500 mr-2">{currentQuestionIndex + 1}.</span>
              {currentQuestion.content}
            </h3>

            <div className="flex flex-col gap-4 flex-grow selection-container">
              {currentQuestion.options.map((opt: any) => {
                const isSelected = answers[currentQuestion.id] === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectOption(currentQuestion.id, opt.id)}
                    className={`group w-full text-left px-6 py-4 rounded-xl border-2 transition-all duration-300 ease-in-out font-medium text-lg leading-relaxed shadow-sm drop-shadow-sm relative overflow-hidden ${isSelected
                      ? 'border-emerald-500 bg-emerald-500/10 text-emerald-300 transform scale-[1.01]'
                      : 'border-neutral-800 bg-[#212121] text-neutral-300 hover:border-emerald-500/50 hover:bg-[#2a2a2a]'
                      }`}
                  >
                    {/* Bolinha neon verde que acende do lado da resposta selecionada pra dar um charme! */}
                    <div className={`absolute left-0 top-0 h-full w-1 ${isSelected ? 'bg-emerald-500' : 'bg-transparent group-hover:bg-emerald-500/30'} transition-colors`}></div>
                    <div className="pl-4">
                      {opt.text}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Rodapé com os botões de Avançar e Voltar */}
        <div className="border-t border-neutral-800 px-8 py-5 flex justify-between bg-[#0f0f0f] items-center">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="px-6 py-2.5 bg-neutral-800 border border-neutral-700/50 rounded-lg text-neutral-300 font-medium hover:bg-neutral-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
          >
            Anterior
          </button>

          <div className="flex gap-4 items-center">
            {/* Mostramos o botão de finalizar apenas se o aluno já estiver na sua última questão da lista */}
            {isLastQuestion ? null : (
              <button
                onClick={handleNext}
                className="px-8 py-2.5 bg-[#262626] border border-neutral-700 rounded-lg text-white font-semibold hover:bg-[#333333] hover:border-emerald-500 transition-all duration-200"
              >
                Pular / Próxima
              </button>
            )}

            <button
              onClick={handleSubmit}
              disabled={submitting}
              className="px-8 py-3 bg-emerald-600 rounded-lg text-[#0a0a0a] font-bold hover:bg-emerald-500 disabled:opacity-30 border border-emerald-400/50 transition-all duration-300 active:scale-95 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] flex gap-2 items-center"
            >
              {submitting ? 'Aguarde...' : 'Finalizar Atividade Central'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
