# Amplyon — site institucional

Site institucional da Amplyon, agência de sites/sistemas e tráfego pago. Página única em React.

## Stack

React + Vite + TypeScript (strict) · Tailwind CSS v4 (`@tailwindcss/vite`, sem config JS) · Fontsource (Bricolage Grotesque, Syne, DM Sans, DM Mono) · lucide-react · oxlint (linter do template) + Prettier (com prettier-plugin-tailwindcss) · npm.

## Comandos

- `npm run dev` — servidor de desenvolvimento
- `npm run build` — typecheck + build de produção
- `npm run lint` — oxlint
- `npm run format` — Prettier

## Estrutura

- `src/components/` — componentes reutilizáveis
- `src/sections/` — seções da página
- `src/assets/` — imagens e arquivos estáticos
- `src/lib/` — utilitários
- Alias: `@/` aponta para `src/`
- `.mcp.json` — MCP do Figma (autenticar com `/mcp`)

## Regras

- Tudo em português do Brasil (textos da interface); código e nomes de variáveis em inglês.
- Estilo só com Tailwind e tokens do `@theme`. Nada de cor ou fonte hardcoded.
- Nunca trocar uma fonte do design sem aprovação.
- Componentes funcionais com TypeScript, sem `any`.
