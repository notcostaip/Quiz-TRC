import { NextResponse } from 'next/server';
import { mockDB } from '@/lib/mockDB';

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;

        const initialLength = mockDB.attempts.length;
        mockDB.attempts = mockDB.attempts.filter(a => a.attemptId !== id);

        if (mockDB.attempts.length === initialLength) {
            return NextResponse.json({ error: 'Relatório não encontrado' }, { status: 404 });
        }

        return NextResponse.json({ success: true, message: 'Relatório excluído com sucesso' }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: 'Erro ao excluir relatório', details: error.message }, { status: 500 });
    }
}
