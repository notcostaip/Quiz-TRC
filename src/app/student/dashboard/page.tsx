"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function StudentDashboard() {
    const router = useRouter();
    const [fullName, setFullName] = useState('');
    const [discipline, setDiscipline] = useState('');
    const [team, setTeam] = useState('');
    const [selectedModule, setSelectedModule] = useState('fundamentos');

    useEffect(() => {
        // Se o cara já estiver logado, a gente puxa do cache os dados de identificação para adiantar o processo
        const userStr = localStorage.getItem('tfc_user');
        if (userStr) {
            try {
                const u = JSON.parse(userStr);
                setFullName(u.fullName || '');
            } catch (e) { }
        }
    }, []);

    const handleStartQuiz = () => {
        if (!fullName || !discipline || !team) {
            alert("Por favor, preencha todos os campos.");
            return;
        }
        // Preparando os dados de disciplina e a turma pra anexar lá no banco do professor
        localStorage.setItem('tfc_session', JSON.stringify({ fullName, discipline, team }));
        router.push(`/student/quiz/${selectedModule}`);
    };

    return (
        <div className="w-full max-w-xl mx-auto flex items-center justify-center p-4 animate-in fade-in zoom-in duration-500">
            <div className="w-full bg-[#171717] border border-neutral-800 rounded-2xl p-8 lg:p-10 shadow-2xl relative overflow-hidden transition-all">

                {/* Fundo com efeito de luz brilhante pra dar aquele charme verde escuro tecnológico */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-green-400 to-teal-500 opacity-80"></div>

                <h1 className="text-3xl font-extrabold text-white mb-8 tracking-tight drop-shadow-md">
                    Sistema de Avaliação <span className="text-emerald-400">Técnica</span>
                </h1>

                <div className="space-y-6">
                    {/* Nome Completo */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-emerald-400/90 tracking-wide">Nome Completo:</label>
                        <input
                            type="text"
                            placeholder="Seu nome"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full bg-[#262626] border border-neutral-700 text-neutral-100 rounded-lg px-4 py-3 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition"
                        />
                    </div>

                    {/* Disciplina */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-emerald-400/90 tracking-wide">Disciplina:</label>
                        <input
                            type="text"
                            placeholder="Ex: Redes de Computadores"
                            value={discipline}
                            onChange={(e) => setDiscipline(e.target.value)}
                            className="w-full bg-[#262626] border border-neutral-700 text-neutral-100 rounded-lg px-4 py-3 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition"
                        />
                    </div>

                    {/* Turma */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-emerald-400/90 tracking-wide">Turma:</label>
                        <input
                            type="text"
                            placeholder="Ex: Técnico 2026.1"
                            value={team}
                            onChange={(e) => setTeam(e.target.value)}
                            className="w-full bg-[#262626] border border-neutral-700 text-neutral-100 rounded-lg px-4 py-3 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition"
                        />
                    </div>

                    {/* Módulo */}
                    <div className="flex flex-col gap-2 relative">
                        <label className="text-sm font-semibold text-emerald-400/90 tracking-wide">Módulo de Estudo:</label>
                        <select
                            value={selectedModule}
                            onChange={(e) => setSelectedModule(e.target.value)}
                            className="w-full bg-[#262626] border border-neutral-700 text-neutral-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition appearance-none cursor-pointer"
                        >
                            <option value="fundamentos">Fundamentos</option>
                            <option value="infraestrutura">Infraestrutura</option>
                            <option value="sistemas">Sistemas</option>
                            <option value="protocolos">Protocolos</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 pt-7 text-neutral-400">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>

                    {/* Botão de Start Gigante */}
                    <div className="pt-6 flex justify-end">
                        <button
                            onClick={handleStartQuiz}
                            className="px-8 py-3 bg-neutral-100 text-[#0a0a0a] font-bold rounded-full hover:bg-white hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:scale-105 transform transition-all active:scale-95 flex items-center gap-2"
                        >
                            Iniciar Quiz
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
