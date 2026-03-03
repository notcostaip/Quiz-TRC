# Plataforma Avançada de Quiz Educacional

Uma aplicação web de avaliação técnica robusta, rápida e segura construída com Next.js (App Router), estruturada para proporcionar a melhor experiência tanto para alunos quanto para os professores em um ambiente focado.

## 🚀 Funcionalidades Principais

- **Sistema de Fluxo Duplo:** Autenticação separada e rotas protegidas especificamente para o ambiente de Alunos (`/student`...) e para o Painel de Controle de Professores (`/teacher`...).
- **Interface Baseada em Neurociência:** Design "Dark Mode" de alto contraste, elementos minimalistas focados em foco contínuo e pequenos estímulos dinâmicos/micro-interações (como confetes ao atingir a aprovação).
- **Provas Automatizadas:** Alimentada pelo motor Fisher-Yates de randomização em duplo-nível (tanto as ordens das questões quanto a ordem das alternativas "A, B, C, D" são embaralhadas para cada sessão impedindo colas).
- **HUD Integrado:** O aluno enxerga ativamente seu progresso (verde reluzente), suas seleções momentâneas de "radios" customizados, e botões de emergência caso precise pausar ou abandonar seu questionário na hora. 
- **Painel do Professor com Relatórios Completos:** Cada prova é guardada integralmente permitindo revisar minuciosamente em um Dossiê Técnico a alternativa que o aluno apontou versus a alternativa do Gabarito Oficial (permitindo analisar a performance e falhas conceituais turma a turma). Inclui botão nativo para `Backup em CSV` (Baixar Planilha de Notas).
- **Preparado para o Futuro e Serverless:** O fluxo de armazenamento no Backend está temporariamente "Mockado" na variável volátil `mockDB.ts` (funcionando 100% de ponta a ponta perfeitamente online e offline para testes), mas estruturalmente o projeto inteiro já tem mapeadas as portas API para conexão imediata com os clusters PostgreSQL do **Supabase**. (Scripts `.sql` já estão prontos na pasta base).

## 🛠 Arquitetura e Tech Stack

Este projeto é completamente modularizado para fácil controle:

*   **Front-End & Framework Base:** React 19 + Next.js 16 (Turbopack, App Router).
*   **Estilizações e Identidade Visual:** TailwindCSS Vanilla (`bg-[#171717]`, `emerald-500`, degradês customizados para um ambiente tech limpo e não-genérico).
*   **Back-End API Routes:** Funções serveless contidas dentro da pasta `src/app/api/...` consumindo/escrevendo estados JSON puros.
*   **Tipagem Forte:** TypeScript.
*   **Animação:** `canvas-confetti`.

## 📦 Como rodar este projeto em sua máquina:

O escopo usa NodeJS, portanto instale as dependências:
```bash
npm install
```

Start no servidor local (com o Turbopack):
```bash
npm run dev
```

Abra o seu navegador principal em **http://localhost:3000** e acesse a tela Base "Acessar Sistema".


### 👤 Credenciais de Teste
Para navegar instantaneamente:

**Ambiente do Professor:**
- **E-mail:** `professor@tfc.com`
- **Senha:** `senha123`

**Observação:** Os alunos costumam criar e utilizar a rota livre clicando no botão base "Cadastrar Conta" ou através do link `<local>/register`. A API interna simulará a criação deles.

## 🔗 Sobre o Autor

* Desenvolvido e estilizado por notcostaip.
* **Acesse para mais insights!** 👉 [notcostaip | Instagram](https://instagram.com/notcostaip)
