import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Avaliação TFC - Quiz Técnico',
  description: 'Sistema de Avaliação Técnica.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-[#0A0A0A] text-gray-100 min-h-screen flex flex-col`}>
        <main className="flex-grow flex flex-col items-center justify-center p-4">
          {children}
        </main>

        <footer className="w-full py-4 text-center border-t border-neutral-800 mt-auto bg-[#0a0a0a]">
          <p className="text-sm text-neutral-500 tracking-wider">
            Desenvolvido por <a href="https://instagram.com/notcostaip" target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-400 hover:text-emerald-300 transition-colors">notcostaip</a>
          </p>
        </footer>
      </body>
    </html>
  );
}
