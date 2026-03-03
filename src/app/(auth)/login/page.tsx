"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (res.ok) {
                const data = await res.json();
                localStorage.setItem('tfc_user', JSON.stringify(data.user));

                if (data.user.role === 'TEACHER' || data.user.role === 'teacher') {
                    router.push('/teacher/dashboard');
                } else {
                    router.push('/student/dashboard');
                }
            } else {
                const errData = await res.json();
                setError(errData.error || 'Credenciais inválidas.');
            }
        } catch (err) {
            setError('Falha de conexão com o servidor.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full flex items-center justify-center py-10 sm:py-20 animate-in fade-in duration-500">
            <div className="max-w-md w-full relative z-10">
                <div className="bg-[#0f0f0f] border border-neutral-800/80 rounded-[28px] p-8 sm:p-10 shadow-lg">
                    <div className="mb-8 text-center">
                        <h2 className="text-3xl font-bold text-white tracking-tight">
                            Login
                        </h2>
                        <p className="mt-3 text-[#A1A1AA] font-medium text-[15px]">Insira suas credenciais para continuar.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {error && (
                            <div className="bg-rose-500/10 border-l-4 border-rose-500 p-3 rounded-r-lg">
                                <p className="text-sm font-semibold text-rose-400">{error}</p>
                            </div>
                        )}

                        <div className="space-y-4">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                    <svg className="w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                </div>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-[#171717] border border-neutral-800 text-neutral-200 rounded-2xl pl-12 pr-4 py-4 focus:outline-none focus:ring-1 focus:ring-emerald-600 focus:border-emerald-600 transition-colors font-medium text-[15px] placeholder:text-neutral-500"
                                    placeholder="seu@email.com"
                                />
                            </div>

                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                    <svg className="w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                                </div>
                                <input
                                    id="password"
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-[#171717] border border-neutral-800 text-neutral-200 rounded-2xl pl-12 pr-4 py-4 focus:outline-none focus:ring-1 focus:ring-emerald-600 focus:border-emerald-600 transition-colors font-medium text-lg tracking-widest placeholder:text-neutral-500 placeholder:tracking-normal placeholder:text-[15px]"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-4 px-4 border border-transparent rounded-2xl text-[15px] font-semibold text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600 focus:ring-offset-[#0f0f0f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <svg className="w-5 h-5 animate-spin text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                ) : (
                                    <>
                                        Entrar
                                        <svg className="w-5 h-5 translate-y-[1px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </>
                                )}
                            </button>
                        </div>
                    </form>

                    <div className="mt-8 text-center pt-2 border-t border-neutral-800/50">
                        <p className="text-neutral-500 text-sm mt-6">
                            Não possui cadastro? <Link href="/register" className="text-white hover:text-neutral-300 font-medium transition-colors">Criar Credencial</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
