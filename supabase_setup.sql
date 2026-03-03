-- ==============================================================================
-- 1. TABELA DE PERFIS (PROFILES) E LIMPEZA INICIAL
-- Esta tabela guarda os dados adicionais dos usuários, vinculada ao auth do Supabase.
-- ==============================================================================
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user();
DROP TABLE IF EXISTS public.quiz_attempts;
DROP TABLE IF EXISTS public.profiles;

CREATE TABLE public.profiles (
    id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    role TEXT NOT NULL DEFAULT 'STUDENT', -- 'STUDENT' ou 'TEACHER'
    full_name TEXT NOT NULL,
    student_id TEXT UNIQUE, -- Ex: TFC1234 (Apenas para alunos)
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Habilitar Row Level Security (RLS) para Segurança
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Política: Alunos podem ver seu próprio perfil. Professores podem ver todos.
CREATE POLICY "Usuários podem ver seus perfis" ON public.profiles
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Professores podem ver todos perfis" ON public.profiles
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'TEACHER'
        )
    );

-- Atualiza o perfil automaticamente quando uma conta for criada no Supabase Auth
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
DECLARE
  v_count NUMERIC;
  v_new_student_id TEXT;
BEGIN
  -- Cria a Base TRC + Ano Atual + Numero de Usuarios (excedentes) para gerar ID unico visual (TRC202601)
  IF COALESCE(new.raw_user_meta_data->>'role', 'STUDENT') = 'STUDENT' THEN
      SELECT COUNT(*) INTO v_count FROM public.profiles WHERE role = 'STUDENT';
      v_new_student_id := 'TRC' || to_char(CURRENT_DATE, 'YYYY') || LPAD((v_count + 1)::TEXT, 2, '0');
  ELSE
      v_new_student_id := NULL;
  END IF;

  INSERT INTO public.profiles (id, full_name, role, student_id)
  VALUES (
    new.id, 
    new.raw_user_meta_data->>'full_name', 
    COALESCE(new.raw_user_meta_data->>'role', 'STUDENT'),
    -- Usa o metadado (se for enviado via sign up) ou cria nosso ID auto-gerado especial 
    COALESCE(new.raw_user_meta_data->>'student_id', v_new_student_id)
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Cria o gatilho "Trigger" no Supabase para rodar a função acima
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();


-- ==============================================================================
-- 2. TABELA DE RELATÓRIOS E PROVAS (QUIZ ATTEMPTS)
-- Armazena o dossiê, nota final e gabarito escolhido pelos alunos.
-- ==============================================================================
CREATE TABLE public.quiz_attempts (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    student_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
    module_id TEXT NOT NULL,
    discipline TEXT,
    team TEXT,
    correct_answers INTEGER NOT NULL,
    incorrect_answers INTEGER NOT NULL,
    unanswered_questions INTEGER NOT NULL DEFAULT 0,
    total_questions INTEGER NOT NULL,
    performance_percentage NUMERIC NOT NULL,
    detailed_answers JSONB, -- Guarda a transcrição em JSON (Perguntas, sua resposta, gabarito)
    study_guide JSONB, -- Guarda os tópicos (Array) que o aluno precisa estudar
    completed_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Habilitar a política de segurança na tabela de Simulações
ALTER TABLE public.quiz_attempts ENABLE ROW LEVEL SECURITY;

-- Política: Alunos só conseguem ver/cadastrar os PRÓPRIOS relatórios
CREATE POLICY "Alunos inserem próprias provas" ON public.quiz_attempts
    FOR INSERT WITH CHECK (auth.uid() = student_id);

CREATE POLICY "Alunos veem próprias provas" ON public.quiz_attempts
    FOR SELECT USING (auth.uid() = student_id);

-- Política: Professores têm acesso a TUDO (Dashboards, download de planilhas)
CREATE POLICY "Professores veem todas as notas" ON public.quiz_attempts
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'TEACHER'
        )
    );

-- ==============================================================================
-- 3. INSERÇÃO DO PROFESSOR (CONTA MASTER)
-- IMPORTANTE: Para criar a primeira conta do professor, crie a conta de forma
-- manual pela área "Authentication" > "Add User" no painel do Supabase.
-- 
-- Após o usuário existir na tabela auth.users, atualize a role dele para TEACHER 
-- rodando este script separadamente com o ID dele (que começa com uuid):
--
-- UPDATE public.profiles SET role = 'TEACHER' WHERE id = 'ID_DO_USUARIO_GERADO_AQUI';
-- ==============================================================================
