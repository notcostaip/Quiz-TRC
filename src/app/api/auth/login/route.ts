import { NextResponse } from 'next/server';
import { mockDB } from '@/lib/mockDB';

export async function POST(request: Request) {
    try {
        const data = await request.json();

        const user = mockDB.users.find(u => u.email === data.email && u.password === data.password);

        if (!user) {
            return NextResponse.json({ error: 'Credenciais inválidas' }, { status: 401 });
        }

        return NextResponse.json({
            success: true,
            user: {
                id: user.id,
                role: user.role,
                fullName: user.fullName,
                email: user.email,
                studentId: user.studentId
            }
        }, { status: 200 });

    } catch (error: any) {
        console.error("Login error:", error);
        return NextResponse.json({ error: 'Falha no login', details: error.message }, { status: 500 });
    }
}
