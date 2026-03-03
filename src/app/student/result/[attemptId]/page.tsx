"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import confetti from 'canvas-confetti';

export default function ResultPage() {
    const router = useRouter();
    const [result, setResult] = useState<any>(null);

    useEffect(() => {
        const savedResult = localStorage.getItem('latest_result');
        if (!savedResult) {
            router.push('/student/dashboard');
            return;
        }

        try {
            const parsed = JSON.parse(savedResult);
            setResult(parsed);

            if (parsed.performancePercentage >= 70) {
                confetti({
                    particleCount: 200,
                    spread: 100,
                    origin: { y: 0.5 },
                    colors: ['#34D399', '#10B981', '#059669', '#3B82F6', '#8B5CF6']
                });
            }
        } catch (e) {
            console.error(e);
            router.push('/student/dashboard');
        }
    }, [router]);

    if (!result) return (
        <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a]">
            <div className="w-8 h-8 rounded-full border-4 border-emerald-500 border-t-transparent animate-spin"></div>
        </div>
    );

    const isPassing = result.performancePercentage >= 70;

    const displayModule = result.moduleId.split('_').join(' ').replace(/\b\w/g, (l: any) => l.toUpperCase());

    return (
        <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="max-w-2xl w-full bg-[#171717] rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden text-center relative border border-neutral-800 backdrop-blur-3xl">

                {/* Cabeçalho dinâmico que muda de cor verde/vermelho dependendo se o aluno passou ou não */}
                <div className={`px-8 pt-16 pb-20 relative overflow-hidden ${isPassing ? 'bg-gradient-to-br from-emerald-900 via-emerald-800/20 to-[#171717]' : 'bg-gradient-to-br from-rose-900 via-rose-800/20 to-[#171717]'} border-b border-neutral-800`}>
                    <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
                    <div className="relative z-10">
                        <h1 className="text-5xl font-extrabold mb-3 text-white tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                            {isPassing ? 'Parabéns!' : 'Não foi dessa vez!'}
                        </h1>
                        <p className="text-lg opacity-90 text-neutral-300 font-medium tracking-wide">Avaliação: <span className="text-white drop-shadow-sm font-bold">{displayModule}</span> Concluída</p>
                    </div>
                </div>

                <div className="p-8 pb-12">
                    <div className="flex justify-center -mt-24 mb-10 relative z-20">
                        <div className={`w-36 h-36 rounded-full flex flex-col items-center justify-center border-[6px] border-[#171717] shadow-[0_0_20px_rgba(0,0,0,0.6)] ${isPassing ? 'bg-emerald-500 text-[#0a0a0a]' : 'bg-rose-500 text-white'} ring-4 ${isPassing ? 'ring-emerald-900/50' : 'ring-rose-900/50'}`}>
                            <span className="text-5xl font-black drop-shadow-sm">{result.performancePercentage}%</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-left">
                        <div className="bg-[#212121] p-5 rounded-2xl border border-neutral-800 shadow-inner group hover:border-emerald-500/50 transition-colors">
                            <span className="block text-[10px] text-neutral-500 font-black uppercase tracking-widest mb-1 group-hover:text-emerald-500/70">Acertos</span>
                            <div className="flex items-end gap-2 text-white">
                                <span className="text-3xl font-bold text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]">{result.correctAnswers}</span>
                                <span className="text-neutral-500 font-medium mb-1 text-sm">/ {result.totalQuestions}</span>
                            </div>
                        </div>
                        <div className="bg-[#212121] p-5 rounded-2xl border border-neutral-800 shadow-inner group hover:border-rose-500/50 transition-colors">
                            <span className="block text-[10px] text-neutral-500 font-black uppercase tracking-widest mb-1 group-hover:text-rose-500/70">Erros</span>
                            <div className="flex items-end gap-2 text-white">
                                <span className="text-3xl font-bold text-rose-400 drop-shadow-[0_0_8px_rgba(244,63,94,0.4)]">{result.incorrectAnswers}</span>
                            </div>
                        </div>
                        <div className="bg-[#212121] p-5 rounded-2xl border border-neutral-800 shadow-inner group hover:border-amber-500/50 transition-colors">
                            <span className="block text-[10px] text-neutral-500 font-black uppercase tracking-widest mb-1 group-hover:text-amber-500/70">Puladas</span>
                            <div className="flex items-end gap-2 text-white">
                                <span className="text-3xl font-bold text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.4)]">{result.unansweredQuestions}</span>
                            </div>
                        </div>
                    </div>

                    <div className="text-left border-t border-neutral-800 pt-8 mt-4">
                        <h3 className="text-xl font-bold text-gray-100 mb-6 flex items-center gap-3">
                            <svg className="w-6 h-6 text-emerald-500 drop-shadow-[0_0_5px_rgba(16,185,129,0.5)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                            Guia de Estudos Personalizado
                        </h3>
                        {result.studyGuide.length > 0 ? (
                            <div className="bg-[#0f0f0f] border border-neutral-800 rounded-xl p-6 mb-6 shadow-inner relative overflow-hidden">
                                <div className="absolute left-0 top-0 w-1 h-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div>
                                <p className="text-sm text-neutral-400 mb-4 font-medium tracking-wide">
                                    Considerando o seu rendimento nesta bateria, recomendamos revisar ativamente os seguintes tópicos técnicos visando aprimoramento:
                                </p>
                                <ul className="space-y-3">
                                    {result.studyGuide.map((topic: string, index: number) => (
                                        <li key={index} className="flex items-center gap-3 text-neutral-200 font-semibold">
                                            <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_5px_rgba(99,102,241,0.8)]"></div>
                                            {topic}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            <div className="bg-emerald-900/20 border border-emerald-800/50 rounded-xl p-6 mb-6 text-center transform hover:scale-[1.02] transition-transform shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                                <p className="text-emerald-400 font-bold tracking-wide text-lg drop-shadow-[0_0_5px_rgba(16,185,129,0.3)]">
                                    Excelente resultado! Você cravou um resultado perfeito. O seu domínio neste campo é incontestável.
                                </p>
                            </div>
                        )}
                    </div>

                    <Link href="/student/dashboard" className="w-full mt-6 py-4 flex items-center justify-center font-extrabold tracking-wide text-[#0a0a0a] bg-emerald-500 rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:scale-[1.02] hover:bg-emerald-400 transition-all duration-300 active:scale-95 uppercase text-sm">
                        Retornar ao Hub de Testes
                    </Link>

                </div>
            </div>
        </div>
    );
}
