# Projeto Adenofrin ES - Landing Page

Este é um projeto Vite + React + TypeScript com Tailwind CSS.

## 🚀 Como Rodar o Projeto

### Pré-requisitos
Você precisa ter o Node.js instalado no seu sistema. Se não tiver, baixe em: https://nodejs.org/

### Instalação das Dependências

```bash
npm install
```

### Executar Localmente

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:3000`

### Build para Produção

```bash
npm run build
```

Os arquivos compilados estarão na pasta `dist/`.

## 📁 Estrutura do Projeto

```
ADENOFRIN_ES/
├── components/        # Componentes React
├── api/              # Serverless functions (Vercel)
├── public/           # Arquivos estáticos
├── index.html        # Template HTML
├── index.tsx         # Entry point da aplicação
├── App.tsx           # Componente principal
├── index.css         # Estilos globais + Tailwind
└── vite.config.ts    # Configuração do Vite
```

## 🌐 Deploy no Vercel

O projeto está configurado para deploy automático no Vercel. Certifique-se de que o comando de build está configurado como:

```
npm run build
```

E o diretório de output como:

```
dist
```

## ⚙️ Tecnologias

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Lucide React (ícones)
