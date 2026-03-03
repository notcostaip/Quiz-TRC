import { NextResponse } from 'next/server';
import { mockDB } from '@/lib/mockDB';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { fullName, email, password } = body;

        if (!fullName || !email || !password) {
            return NextResponse.json({ error: 'Todos os campos são obrigatórios' }, { status: 400 });
        }

        if (mockDB.users.some(u => u.email === email)) {
            return NextResponse.json({ error: 'Este endereço de e-mail já está cadastrado no sistema.' }, { status: 409 });
        }

        const newUser = {
            id: `aluno_${Date.now()}`,
            role: 'STUDENT',
            fullName: fullName,
            email: email,
            password: password,
            studentId: `TFC${Math.floor(1000 + Math.random() * 9000)}`
        };

        mockDB.users.push(newUser);

        return NextResponse.json({
            success: true,
            user: {
                id: newUser.id,
                role: newUser.role,
                fullName: newUser.fullName,
                email: newUser.email,
                studentId: newUser.studentId
            }
        }, { status: 201 });

    } catch (error: any) {
        console.error("Register error:", error);
        return NextResponse.json({ error: 'Erro ao processar o registro no banco.', details: error.message }, { status: 500 });
    }
}
