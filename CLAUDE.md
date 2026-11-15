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
- Hero: h1 e escada precisam caber na primeira tela, na área útil real do navegador (`svh`). Em telas baixas, primeiro diminui o padding entre o header e o h1, depois a escada encolhe por igual (presa à direita no desktop, centralizada no mobile, nunca achatada). No mobile a descrição usa `type-body-lg-mobile` (16/24) para sobrar altura para a escada. Tokens `--hero-*` e `--stair-*` em `index.css`; em telas altas o hero fica igual ao Figma.
- Escada da hero: no desktop é um SVG (`viewBox 1162 x 320`, `BrandStair.tsx`); no mobile ainda são `div`s com `aspect-ratio`.

## Motion

- As referências em `docs/motion/` (escada, trilha, menu, rabisco) são a fonte de verdade: geometria, tempos, easing e ordem. Não alterar números sem aprovação. No menu, vale só o movimento; o visual segue o código.
- Só CSS (keyframes/transições), sem biblioteca. Tokens no `@theme` de `index.css` (`--*-stair-*`, `--*-track-*`, `--*-menu-*`, `--*-scribble-*`) e utilitários `@utility` com o mesmo prefixo. Animação sempre com `motion-safe:` (a regra global de reduced motion zera a duração, mas não o atraso).
- Escada + rabisco (hero desktop): animações CSS que nascem no mesmo commit e compartilham o `startTime`, sem temporizador próprio. O rabisco é um traço com `pathLength=1` + `stroke-dasharray`/`dashoffset`. Exceção aprovada: os arcos do mint mantêm o desenho do Figma (raios 25/59/93/127, traço 10), não os da referência.
- Trilha (Process, desktop): dispara uma vez por `IntersectionObserver` (`useTrackMotion`); estado inicial só em `lg` + `motion-safe`; atrasos por fração da posição real medida, nunca ms fixos por largura. A linha termina por construção na borda do selo "Repete todo mês" (cópia invisível do selo ao lado dela).
- Menu mobile: header e menu são um painel único (`Header.tsx`) que cresce por `grid-template-rows: 0fr ↔ 1fr` no bloco dos links (sem medir altura); estado em `data-menu-open` no `<header>`; transições interrompíveis. O foco inicial no primeiro link usa `preventScroll`, senão o bloco rola por dentro enquanto cresce.
- Pendente: no mobile ainda não há motion da escada, do rabisco nem da trilha (serão definidos depois).
- Verificação: comparar com a referência em frames congelados (`document.getAnimations()` + `pause()` + `currentTime`) via Chrome headless/CDP, nunca a olho. Atenção: `captureBeyondViewport` reinicia as animações.

## Fluxo de trabalho

- Em tarefas de layout ou motion: plano curto antes, terminar com "Aguardando aprovação" e só implementar depois do ok.
- Ao entregar: build e lint sem erro nem warning, verificação com medidas ou pixels (antes × depois) e dizer o que foi escrito no CLAUDE.md.
