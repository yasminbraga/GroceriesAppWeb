This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# 🛒 GroceriesApp - Frontend

Frontend do **GroceriesApp**, desenvolvido em **Next.js**.  
App para organizar **receitas** e suas respectivas **listas de compras**.

---

## ✨ Funcionalidades

- 📋 Gerenciamento de **listas de compras**
- 🍳 Cadastro e visualização de **receitas**
- 📝 Criar uma lista com os ingredientes de uma receita
- 📱 Layout responsivo (desktop e mobile)
- 🔜 Compartilhamento de receitas e listas entre usuários
- 🔜 Gerenciamento colaborativo de listas de compras, com atualização em tempo real entre usuários.
- 🔜 Autenticação de usuários (em desenvolvimento)
- 🔜 Integração com backend NestJS (API REST + PostgreSQL)

## 🚀 Tecnologias

- [Next.js](https://nextjs.org/) – React Framework
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) – Estilização

---

## 📂 Estrutura de pastas (simplificada)

src/
├── app/ # Rotas do Next.js 13+
├── components/ # Componentes reutilizáveis
├── context/ # Contextos globais (ex: produtos, listas)
└── utils/ # Funções auxiliares

---

## ⚙️ Como rodar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/groceriesapp-frontend.git
cd groceriesapp-frontend
```

### 2. Instalar Dependências

```bash
npm install
# ou
yarn install
```

### 3. Rodar o Projeto

```bash
npm run dev
# ou
yarn dev
```

O app estará disponível em: http://localhost:3000

## 🌐 Integração com o backend

Este frontend se conecta a uma API desenvolvida em NestJS + PostgreSQL.
Configure a URL da API no arquivo .env.local:

```bash
NEXT_PUBLIC_API_URL=http://localhost:3001
```

## 📌 Próximos passos

◻ Implementar tela Login
◻ Implementar autenticação
◻ Melhorar UI/UX da navegação mobile

## 📝 Licença

Este projeto é de uso pessoal para estudo.
Sinta-se à vontade para clonar, testar e sugerir melhorias! 🚀
