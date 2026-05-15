<div align="center">

<!-- HEADER BANNER -->
<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:7f1d1d,50:dc2626,100:991b1b&height=230&section=header&text=Quiz%20TRC&fontSize=70&fontColor=ffffff&animation=twinkling&fontAlignY=35&desc=Plataforma%20Avan%C3%A7ada%20de%20Quiz%20Educacional&descAlignY=55&descSize=18&descColor=fca5a5" />

<br/>

<!-- BADGES -->
<div>
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
</div>

<br/>

Uma aplicação web de avaliação técnica robusta, rápida e segura construída com Next.js (App Router), estruturada para proporcionar a melhor experiência tanto para alunos quanto para professores em um ambiente focado.

</div>

<br/>

<!-- RED ANIMATED DIVIDER -->
<img src="https://raw.githubusercontent.com/notcostaip/notcostaip/main/assets/red-divider.svg" width="100%">

<!-- FEATURES -->
<div align="center">

### &nbsp; 🚀 Funcionalidades Principais

</div>

- **Sistema de Fluxo Duplo:** Autenticação separada e rotas protegidas especificamente para o ambiente de Alunos (`/student`) e Painel de Controle de Professores (`/teacher`).
- **Interface Baseada em Neurociência:** Design "Dark Mode" de alto contraste, elementos minimalistas focados e micro-interações (como confetes ao atingir a aprovação).
- **Provas Automatizadas:** Alimentada pelo motor Fisher-Yates de randomização em duplo-nível (tanto as questões quanto alternativas "A, B, C, D" são embaralhadas).
- **HUD Integrado:** O aluno enxerga ativamente seu progresso (verde reluzente) e botões de emergência caso precise pausar a sessão.
- **Painel do Professor com Relatórios Completos:** Cada prova é guardada integralmente permitindo analisar a performance e falhas conceituais turma a turma. Inclui botão nativo para `Backup em CSV`.
- **Preparado para o Futuro e Serverless:** O fluxo de armazenamento funciona perfeitamente offline para testes e já tem mapeadas as rotas API para conexão com os clusters PostgreSQL do **Supabase**.

<!-- RED ANIMATED DIVIDER -->
<img src="https://raw.githubusercontent.com/notcostaip/notcostaip/main/assets/red-divider.svg" width="100%">

<!-- TECH STACK -->
<div align="center">

### &nbsp; 🛠️ Tech Stack

<br/>

<img src="https://skillicons.dev/icons?i=nextjs,react,ts,tailwind,supabase&theme=dark" alt="Tech" />

<br/><br/>

</div>

- **Front-End & Framework Base:** React 19 + Next.js 16 (Turbopack, App Router).
- **Estilizações:** TailwindCSS Vanilla com degradês customizados para um ambiente tech limpo e não-genérico.
- **Back-End API Routes:** Funções serverless dentro de `src/app/api/...`.
- **Tipagem Forte:** TypeScript.
- **Animação:** `canvas-confetti`.

<!-- RED ANIMATED DIVIDER -->
<img src="https://raw.githubusercontent.com/notcostaip/notcostaip/main/assets/red-divider.svg" width="100%">

<!-- HOW TO RUN -->
<div align="center">

### &nbsp; 📦 Como rodar este projeto

</div>

### 1. Instale as dependências
```bash
npm install
```

### 2. Inicie o servidor
```bash
npm run dev
```

Abra o seu navegador em **http://localhost:3000** e acesse a tela Base "Acessar Sistema".

### 👤 Credenciais de Teste
Para navegar instantaneamente no **Ambiente do Professor:**
- **E-mail:** `professor@tfc.com`
- **Senha:** `senha123`

*(Alunos podem criar conta livremente através do botão "Cadastrar Conta")*

<br/>

<!-- FOOTER -->
<div align="center">

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:7f1d1d,50:dc2626,100:991b1b&height=130&section=footer" />

<br/>

**Created by [Costa](https://github.com/notcostaip)**

</div>
