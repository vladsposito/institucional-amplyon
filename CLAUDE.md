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
- Motion: as referências em `docs/motion/` são a fonte de verdade (geometria, tempos, easing, ordem); não alterar números sem aprovação. Tokens de motion no `@theme` de `index.css` (escada: `--ease-stair`, `--duration-stair-*`, `--stair-*`; trilha: `--track-*`, `--duration-track-*`, `--ease-track-*`); animação só com `motion-safe:`. Motion disparado por rolagem usa `IntersectionObserver` uma vez (`useTrackMotion`), com o estado inicial só em `lg` + `motion-safe` e atrasos por fração da posição real medida (nada de ms fixos por largura). Exceção aprovada: os arcos do mint mantêm o desenho do Figma (raios 25/59/93/127, traço 10), não os da referência.
- Menu mobile: header e menu são um painel único (`Header.tsx`) que cresce por `grid-template-rows: 0fr ↔ 1fr` no bloco dos links (sem medir altura); estado em `data-menu-open` no `<header>`, transições CSS (interrompíveis) nos utilitários `menu-*`, tokens `--*-menu-*`. Na referência do menu vale só o movimento; o visual segue o código.
- Hero: h1 e escada precisam caber na primeira tela, na área útil real do navegador (`svh`). Em telas baixas, primeiro diminui o padding entre o header e o h1, depois a escada encolhe por igual (presa à direita no desktop, centralizada no mobile, nunca achatada). No mobile a descrição usa `type-body-lg-mobile` (16/24) para sobrar altura para a escada. Tokens `--hero-*` e `--stair-*` em `index.css`; em telas altas o hero fica igual ao Figma.
