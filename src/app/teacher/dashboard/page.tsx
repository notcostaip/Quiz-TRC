"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TeacherDashboard() {
    const router = useRouter();
    const [reports, setReports] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedReport, setSelectedReport] = useState<any>(null);

    useEffect(() => {
        const userStr = localStorage.getItem('tfc_user');
        if (!userStr) {
            router.push('/login');
            return;
        }

        try {
            const user = JSON.parse(userStr);
            if (user.role !== 'TEACHER') {
                router.push('/login');
                return;
            }
        } catch (e) {
            router.push('/login');
            return;
        }

        const fetchReports = async () => {
            try {
                const res = await fetch('/api/teacher/reports');
                if (res.ok) {
                    const data = await res.json();
                    setReports(data.reports || []);
                } else {
                    console.error("Falha ao buscar relatórios.");
                }
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchReports();
    }, [router]);

    const handleDeleteReport = async (attemptId: string) => {
        const confirm = window.confirm("Tem certeza que deseja apagar permanentemente este dossiê?");
        if (!confirm) return;

        try {
            const res = await fetch(`/api/teacher/reports/${attemptId}`, { method: 'DELETE' });
            if (res.ok) {
                setReports(prev => prev.filter(r => r.attemptId !== attemptId));
                setSelectedReport(null);
            } else {
                alert("Erro ao excluir relatório no banco.");
            }
        } catch (e) {
            console.error(e);
            alert("Falha de conexão.");
        }
    };

    const exportCSV = () => {
        if (reports.length === 0) return;

        const headers = [
            "Nome do Aluno", "Matrícula", "Disciplina", "Turma", "Módulo",
            "Nota (%)", "Acertos", "Erros", "Puladas", "Total de Questões", "Horário de Conclusão"
        ];

        const rows = reports.map(r => [
            `"${r.studentName}"`,
            `"${r.studentId}"`,
            `"${r.discipline}"`,
            `"${r.team}"`,
            `"${r.moduleId}"`,
            `"${r.performancePercentage}%"`,
            `"${r.correctAnswers}"`,
            `"${r.incorrectAnswers}"`,
            `"${r.unansweredQuestions}"`,
            `"${r.totalQuestions}"`,
            `"${new Date(r.completedAt).toLocaleString('pt-BR')}"`
        ]);

        const csvContent = "data:text/csv;charset=utf-8,"
            + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", `planilha_tfc_notas_${Date.now()}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="w-full min-h-screen bg-[#0a0a0a] text-neutral-300 relative">
            <div className="max-w-7xl mx-auto p-4 sm:p-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                    <div>
                        <h1 className="text-3xl font-extrabold text-white tracking-tight drop-shadow-md">
                            Painel do <span className="text-emerald-400">Professor</span>
                        </h1>
                        <p className="text-neutral-400 font-medium mt-1">Visão geral e relatórios de desempenho e notas dos alunos.</p>
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={exportCSV}
                            disabled={reports.length === 0}
                            className="px-6 py-2 bg-[#171717] border border-neutral-700 text-emerald-400 font-bold rounded-lg hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed transition transform hover:scale-105 shadow-[0_0_15px_rgba(16,185,129,0.1)] flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                            Baixar Planilha CSV
                        </button>

                        <button
                            onClick={() => {
                                localStorage.removeItem('tfc_user');
                                router.push('/login');
                            }}
                            className="px-6 py-2 bg-neutral-800 border border-neutral-700 text-white font-medium rounded-lg hover:bg-neutral-700 transition"
                        >
                            Sair
                        </button>
                    </div>
                </div>

                <div className="bg-[#171717] border border-neutral-800 rounded-2xl shadow-2xl relative overflow-hidden">
                    <div className="px-6 py-5 border-b border-neutral-800 bg-[#121212]/80 backdrop-blur-md flex justify-between items-center">
                        <h2 className="text-xl font-bold tracking-tight text-neutral-200 flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                            Logs Recentes ({reports.length})
                        </h2>
                    </div>

                    <div className="p-6 overflow-x-auto min-h-[400px]">
                        {loading ? (
                            <div className="flex flex-col items-center justify-center py-32 gap-4 text-emerald-400 animate-pulse">
                                <svg className="w-10 h-10 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                <span className="font-medium text-lg">Carregando métricas seguras do banco...</span>
                            </div>
                        ) : reports.length === 0 ? (
                            <div className="text-center py-32 px-6 border-2 border-dashed border-neutral-800 rounded-2xl bg-[#212121]/50">
                                <p className="text-neutral-500 font-medium text-lg tracking-wide uppercase">O servidor de testes está vazio no momento.</p>
                            </div>
                        ) : (
                            <table className="w-full text-left border-collapse min-w-[900px]">
                                <thead>
                                    <tr className="border-b border-neutral-800 text-neutral-500 text-xs tracking-widest uppercase font-black bg-[#121212]/50">
                                        <th className="pb-3 pt-3 px-4">Aluno</th>
                                        <th className="pb-3 pt-3 px-4">Localização Lógica</th>
                                        <th className="pb-3 pt-3 px-4">Módulo Foco</th>
                                        <th className="pb-3 pt-3 px-4 text-center">Rendimento</th>
                                        <th className="pb-3 pt-3 px-4 text-right">Ação</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-neutral-800/50">
                                    {reports.map((report) => {
                                        const formatMod = report.moduleId.split('_').join(' ').replace(/\b\w/g, (l: any) => l.toUpperCase());
                                        const isPassing = report.performancePercentage >= 70;
                                        return (
                                            <tr key={report.attemptId} className="hover:bg-[#212121]/80 transition-colors group cursor-pointer" onClick={() => setSelectedReport(report)}>
                                                <td className="py-5 px-4">
                                                    <div className="font-bold text-gray-100 flex items-center gap-2">
                                                        {report.studentName}
                                                    </div>
                                                    <div className="text-xs text-neutral-500 font-mono mt-1 tracking-wider opacity-70">{report.studentId} - {new Date(report.completedAt).toLocaleString('pt-BR')}</div>
                                                </td>
                                                <td className="py-5 px-4">
                                                    <div className="text-neutral-300 font-semibold">{report.discipline}</div>
                                                    <div className="text-[10px] bg-neutral-800 text-neutral-400 font-black mt-1 px-2 py-0.5 rounded-full inline-block uppercase tracking-wider">{report.team}</div>
                                                </td>
                                                <td className="py-5 px-4 font-bold text-emerald-400/80 uppercase tracking-widest text-xs">{formatMod}</td>
                                                <td className="py-5 px-4 text-center">
                                                    <span className={`inline-block px-4 py-1.5 text-sm font-black border rounded-full shadow-inner ${isPassing ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' : 'bg-rose-500/10 text-rose-400 border-rose-500/30'}`}>
                                                        {report.performancePercentage}%
                                                    </span>
                                                </td>
                                                <td className="py-5 px-4 text-right">
                                                    <button className="text-xs font-bold text-indigo-400 hover:text-indigo-300 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity bg-indigo-500/10 px-3 py-1.5 rounded-lg border border-indigo-500/20">
                                                        Ver Dossiê
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>

            {/* Modal de visualização completa do relatório do aluno */}
            {selectedReport && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-300">
                    <div className="w-full max-w-4xl bg-[#171717] border border-neutral-800 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-300 relative">

                        {/* Aquela barrinha fina colorida no alto da janela pra dar um destaque premium */}
                        <div className="h-1 w-full bg-gradient-to-r from-emerald-500 via-indigo-500 to-rose-500"></div>

                        <div className="px-8 py-6 border-b border-neutral-800 bg-[#121212] flex justify-between items-start">
                            <div>
                                <h2 className="text-3xl font-black text-white drop-shadow-sm leading-tight">Dossiê de Avaliação</h2>
                                <p className="text-neutral-400 mt-2 font-medium">Extração de Respostas Individuais: <span className="text-emerald-400 font-bold">{selectedReport.studentName}</span></p>
                            </div>
                            <div className="flex flex-col items-end">
                                <button onClick={() => handleDeleteReport(selectedReport.attemptId)} title="Apagar Dossiê Permanentemente" className="text-rose-500 hover:text-white hover:bg-rose-500 p-2 rounded-full transition mb-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                </button>
                                <button onClick={() => setSelectedReport(null)} title="Fechar" className="text-neutral-500 hover:text-white p-2 rounded-full hover:bg-neutral-800 transition">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                </button>
                                <span className="text-xs font-mono text-neutral-500 mt-4 tracking-widest">{selectedReport.attemptId}</span>
                            </div>
                        </div>

                        <div className="flex-grow overflow-y-auto p-8 space-y-6 bg-[#0f0f0f]">

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                <div className="bg-[#171717] border border-neutral-800 p-4 rounded-xl">
                                    <p className="text-[10px] text-neutral-500 uppercase font-black tracking-widest mb-1">Nota Final</p>
                                    <p className={`text-2xl font-bold ${selectedReport.performancePercentage >= 70 ? 'text-emerald-400' : 'text-rose-400'}`}>{selectedReport.performancePercentage}%</p>
                                </div>
                                <div className="bg-[#171717] border border-neutral-800 p-4 rounded-xl">
                                    <p className="text-[10px] text-neutral-500 uppercase font-black tracking-widest mb-1">Respostas Certas</p>
                                    <p className="text-2xl font-bold text-gray-200">{selectedReport.correctAnswers}</p>
                                </div>
                                <div className="bg-[#171717] border border-neutral-800 p-4 rounded-xl">
                                    <p className="text-[10px] text-neutral-500 uppercase font-black tracking-widest mb-1">Respostas Erradas</p>
                                    <p className="text-2xl font-bold text-rose-400">{selectedReport.incorrectAnswers}</p>
                                </div>
                                <div className="bg-[#171717] border border-neutral-800 p-4 rounded-xl">
                                    <p className="text-[10px] text-neutral-500 uppercase font-black tracking-widest mb-1">Omissões</p>
                                    <p className="text-2xl font-bold text-amber-500">{selectedReport.unansweredQuestions}</p>
                                </div>
                            </div>

                            <h3 className="text-sm text-neutral-400 font-bold tracking-widest uppercase border-b border-neutral-800 pb-2 mt-8">Transcrição das Questões</h3>

                            {selectedReport.detailedAnswers && selectedReport.detailedAnswers.length > 0 ? (
                                <div className="space-y-4">
                                    {selectedReport.detailedAnswers.map((ans: any, idx: number) => {
                                        let rowClass = "border-rose-900/30 bg-rose-500/5";
                                        let statusText = "INCORRETO";
                                        let statusColor = "text-rose-400 bg-rose-500/10 border-rose-500/20";

                                        if (ans.isCorrect) {
                                            rowClass = "border-emerald-900/30 bg-emerald-500/5";
                                            statusText = "CORRETO";
                                            statusColor = "text-emerald-400 bg-emerald-500/10 border-emerald-500/20";
                                        } else if (!ans.chosenOptionText) {
                                            rowClass = "border-amber-900/30 bg-amber-500/5";
                                            statusText = "EM BRANCO";
                                            statusColor = "text-amber-500 bg-amber-500/10 border-amber-500/20";
                                        }

                                        return (
                                            <div key={idx} className={`p-5 border rounded-xl relative ${rowClass}`}>
                                                <div className="absolute right-5 top-5">
                                                    <span className={`px-2 py-1 text-[10px] font-black tracking-widest rounded border uppercase ${statusColor}`}>{statusText}</span>
                                                </div>
                                                <p className="font-semibold text-gray-200 text-lg mb-4 pr-24 leading-snug"><span className="text-neutral-500 font-bold mr-2">{idx + 1}.</span>{ans.questionContent}</p>

                                                <div className="space-y-2 text-sm">
                                                    <div className="flex items-start gap-2">
                                                        <span className="text-neutral-500 font-bold uppercase min-w-[120px] pt-1">Escolhida:</span>
                                                        <span className={`font-medium ${ans.isCorrect ? 'text-emerald-400' : (!ans.chosenOptionText ? 'text-amber-500/70 italic' : 'text-rose-400')}`}>
                                                            {ans.chosenOptionText || "Você abandonou a pergunta e pulou para a próxima"}
                                                        </span>
                                                    </div>

                                                    {!ans.isCorrect && (
                                                        <div className="flex items-start gap-2 mt-2">
                                                            <span className="text-emerald-500/70 font-bold uppercase min-w-[120px] drop-shadow-sm pt-1">Gabarito Fiel:</span>
                                                            <span className="font-medium text-emerald-400">{ans.correctOptionText}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            ) : (
                                <p className="text-neutral-500 italic p-4 text-center">Os logs minuciosos não estão disponíveis para as submissões dessa versão de interface antiga.</p>
                            )}
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}
