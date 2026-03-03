import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full animate-in fade-in zoom-in duration-700">
      <div className="max-w-md w-full text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-emerald-500/20 rounded-full blur-[80px] -z-10"></div>
        <h2 className="mt-6 text-center text-4xl sm:text-5xl font-black text-white tracking-tight drop-shadow-lg">
          Quiz <span className="text-emerald-400">Educacional</span>
        </h2>
        <p className="mt-4 text-center text-base sm:text-lg text-neutral-400 font-medium tracking-wide">
          Teste seus conhecimentos de forma dinâmica e interativa
        </p>
      </div>

      <div className="mt-12 w-full max-w-sm">
        <div className="bg-[#171717] p-8 border border-neutral-800 shadow-2xl rounded-2xl flex flex-col gap-6 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <Link href="/login" className="relative w-full flex justify-center py-4 px-6 rounded-xl text-base font-bold text-[#0a0a0a] bg-emerald-500 hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 focus:ring-offset-[#171717] shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all duration-300 transform hover:scale-[1.02] active:scale-95">
            Acessar Sistema
          </Link>
          <Link href="/register" className="relative w-full flex justify-center py-4 px-6 rounded-xl text-base font-bold text-neutral-300 border border-neutral-700 bg-[#212121] hover:bg-[#2a2a2a] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:ring-offset-[#171717] transition-all duration-300 transform hover:scale-[1.02] active:scale-95">
            Cadastrar Conta
          </Link>
        </div>
      </div>
    </div>
  );
}
