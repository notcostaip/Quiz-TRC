import { NextResponse } from 'next/server';
import { mockDB } from '@/lib/mockDB';

export async function GET() {
    try {
        // A gente pesca do banco as submissões guardadas e devolve pro front-end do professor ler
        // Vamos botar a prova mais nova lá no topo da lista pra ficar fácil de ver
        const reports = [...mockDB.attempts].sort((a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime());

        return NextResponse.json({ success: true, reports }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: 'Erro ao extrair banco de relatórios', details: error.message }, { status: 500 });
    }
}
