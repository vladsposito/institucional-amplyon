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
- `public/favicon/` — favicons (SVG principal, ICO/PNG de fallback, apple-touch-icon) e `site.webmanifest` (ícones 192/512), todos ligados no `index.html`
- `public/clientes/` — logos circulares dos clientes (PNGs originais; não exportar do Figma). Referenciar com `import.meta.env.BASE_URL` (o `base` do Vite é `/institucional-amplyon/`)
- `public/socios/` — fotos dos sócios, `<id>.jpg` (pasta criada quando houver fotos; ver Sócios em "Regras")
- `src/lib/` — utilitários
- Alias: `@/` aponta para `src/`
- `.mcp.json` — MCP do Figma (autenticar com `/mcp`)

## Regras

- Tudo em português do Brasil (textos da interface); código e nomes de variáveis em inglês.
- Estilo só com Tailwind e tokens do `@theme`. Nada de cor ou fonte hardcoded.
- Nunca trocar uma fonte do design sem aprovação.
- Componentes funcionais com TypeScript, sem `any`.
- Hero: h1 e escada precisam caber na primeira tela, na área útil real do navegador (`svh`). Em telas baixas, primeiro diminui o padding entre o header e o h1, depois a escada encolhe por igual (presa à direita no desktop, centralizada no mobile, nunca achatada). No mobile a descrição usa `type-body-lg-mobile` (16/24) para sobrar altura para a escada. Tokens `--hero-*` e `--stair-*` em `index.css`; em telas altas o hero fica igual ao Figma.
- h1 da hero (Figma 71:52 / 71:254): quebras por breakpoint com `<br>` responsivos (espaço antes de cada um, para a leitura contínua). Desktop 3 linhas a 72/72; mobile 4 linhas a 42/44, 42px enquanto "Seu concorrente" couber (fator fluido medido no Chrome, `--fluid-display-xl-mobile`) e menor só abaixo de ~351px. "E ele" + rabisco: `contents` no mobile e `lg:inline-flex` com gap 18 no desktop. O rabisco fica sob "nem é melhor." (viewBox 437×14 / 266×16, traço 5 / 4).
- Contato: o botão "Chamar no WhatsApp" usa `WHATSAPP_URL` (`src/lib/contact.ts`, ainda com TODO: sem o número não publicar) e `Button external` (nova aba + aviso "abre em nova aba" para leitor de tela).
- Ids das seções em `SECTION_IDS` (`nav.ts`): o link "Resultado" do header leva a `#o-que-muda` (Process, "O que muda no seu negócio"), não a `#resultados` (logos e números).
- Resultados (`Results.tsx`, Figma 107:82 / 107:117, entre Hero e Serviços): faixa de logos de ponta a ponta. No desktop ela nunca rola: gap e fade são fluidos sobre `100cqw` (`--logo-gap-desktop`, `--logo-fade-w-desktop`; a moldura é `@container`), então o fade nunca cobre logo e em 1440 fica igual ao Figma. No mobile rola com o dedo, sem barra (`scrollbar-none`), com padding = largura do fade (a 1ª logo começa inteira, aprovado no lugar do x −29 do Figma) e `tabIndex` só quando rola (`useIsScrollable`). Números em `type-stat` (40/44); em `lg` o tamanho é `--stat-size-desktop` (encolhe abaixo de ~1143 para "+R$ 1.650.000" caber na coluna).
- Serviços (`Services.tsx`, Figma 71:74 / 71:277): título + 4 cards numerados de mesmo peso (`SERVICES` em `content.ts`; o número 01–04 sai do índice, `aria-hidden`, em `<ol role="list">`) + frase de fechamento (`SERVICES_CLOSING`: `lead` em `ink-muted`, `highlight` em `amp`). Desktop: grade 2×2 com `auto-rows-fr` (todos os cards com a altura do maior; `min-h` 230 só de proteção) e número com largura fixa `--service-number-w` (títulos alinhados). Mobile: empilhados, número em cima. Tipos: `type-service-number*`, `type-service-title*`, `type-services-closing*`. O título usa `SectionHeading` sem descrição e com `widthClassName="max-w-190"` (760, para quebrar como no Figma).
- `SectionHeading`: `description` é opcional e a largura vai por `widthClassName` (o `cn` só concatena, não resolve conflito de classes). O `h2` tem `tabIndex={-1}` porque o menu mobile foca o título da seção ao navegar.
- Sócios (`Partners.tsx`, Figma 131:82 / 131:101, entre Diferenciais e Contato): pb 40/24, menor que o padrão das seções (o respiro até o Contato vem do pt dele). Desktop: cards em `grid-cols-2` (mesma altura, mínimo 310), foto 208×260 à esquerda; mobile: empilhados, foto largura total × 340. Foto opcional por sócio: salvar em `public/socios/<id>.jpg` e preencher `photo: 'socios/<id>.jpg'` em `PARTNERS` (`content.ts`); sem `photo` o espaço fica vazio com `bg-line`. A img usa `alt=""` (o nome está no h3 ao lado) e `object-cover`. Área de atuação: `type-label` + `tracking-role` (0.1em, como no Figma).
- Escada da hero: no desktop é um SVG (`viewBox 1162 x 320`, `BrandStair.tsx`); no mobile ainda são `div`s com `aspect-ratio`.

## Motion

- As referências em `docs/motion/` (escada, trilha, menu, rabisco; `hero-mobile` e `trilha-mobile` para o mobile) são a fonte de verdade: geometria, tempos, easing e ordem. Não alterar números sem aprovação. No menu, vale só o movimento; o visual segue o código. Rabisco e trilha: os textos e a geometria das referências são da copy antiga ("traz gente", "seu ok"); tempos e easing continuam valendo, a geometria agora é a do Figma v3.
- Só CSS (keyframes/transições), sem biblioteca. Tokens no `@theme` de `index.css` (`--*-stair-*`, `--*-track-*`, `--*-menu-*`, `--*-scribble-*`) e utilitários `@utility` com o mesmo prefixo. Animação sempre com `motion-safe:` (a regra global de reduced motion zera a duração, mas não o atraso).
- Escada + rabisco (hero desktop): animações CSS que nascem no mesmo commit e compartilham o `startTime`, sem temporizador próprio. O rabisco é um traço com `pathLength=1` + `stroke-dasharray`/`dashoffset`. Exceção aprovada: os arcos do mint mantêm o desenho do Figma (raios 25/59/93/127, traço 10), não os da referência.
- Escada + rabisco (hero mobile): os mesmos utilitários (`stair-rise`, `stair-arc-grow`, `scribble-draw`) e o mesmo relógio, sem esperar `document.fonts.ready` (igual ao desktop). Os degraus continuam `div`s: o contêiner recorta (`overflow-hidden`) e é `@container`, e cada degrau parte de `translateY(100% + --stair-bleed-mobile)` (os 10/390 a mais da referência, em `cqw`). Os arcos crescem com `transform-box: fill-box` a partir do centro do círculo (o canto da barra). Exceção: raios do código (14.5/36.5/58.5, borda externa 18/40/62), não os da referência.
- Trilha (Process, desktop): dispara uma vez por `IntersectionObserver` (`useTrackMotion`); estado inicial só em `lg` + `motion-safe`; atrasos por fração da posição real medida, nunca ms fixos por largura. A linha termina por construção no centro da 4ª pílula ("Tranquilidade"): a faixa é um grid `1fr max-content max-content`, a cópia invisível da pílula ocupa as duas últimas colunas (que dividem a largura dela ao meio) e a linha ocupa as duas primeiras. Pílulas 1–3 pela borda esquerda em `--seal-left` (círculo + 140 em 1440), a 4ª presa à direita. Atrasos medidos em 1440 (200 + f × 2100): círculos 200 / 768 / 1335 / 1903 ms, pílulas 469 / 1036 / 1604 / 2175 ms.
- Trilha (Process, mobile): o mesmo hook, com um segundo observer no `<ol>` (`rootMargin` = `--track-trigger-margin-mobile`, threshold 0), que só age quando a faixa do desktop está com `display:none`. A linha continua nos 4 segmentos `::before` dos `<li>` (`track-segment-motion-mobile`): cada um recebe a fração do início e do comprimento (`--track-seg-f`, `--track-seg-len-f`) e cresce em linear, o que equivale a uma linha única do centro do círculo 1 ao centro da última pílula (`[data-track-end-mobile]`; o último segmento termina a `--track-end-mobile` do fim do item). Círculos e pílulas usam `[data-track-anchor-mobile]` + `track-*-motion-mobile` (`max-lg` + `motion-safe`), e a borda de cima é medida sem o scale. Atrasos medidos em 390: círculos 200 / 677 / 1224 / 1771 ms, pílulas 516 / 1062 / 1609 / 2254 ms (tempos e easing da referência; a geometria agora é a do Figma v3).
- Menu mobile: header e menu são um painel único (`Header.tsx`) que cresce por `grid-template-rows: 0fr ↔ 1fr` no bloco dos links (sem medir altura); estado em `data-menu-open` no `<header>`; transições interrompíveis. O foco inicial no primeiro link usa `preventScroll`, senão o bloco rola por dentro enquanto cresce.
- Verificação: comparar com a referência em frames congelados (`document.getAnimations()` + `pause()` + `currentTime`) via Chrome headless/CDP, nunca a olho. Atenção: `captureBeyondViewport` reinicia as animações.

## Fluxo de trabalho

- Em tarefas de layout ou motion: plano curto antes, terminar com "Aguardando aprovação" e só implementar depois do ok.
- Ao entregar: build e lint sem erro nem warning, verificação com medidas ou pixels (antes × depois) e dizer o que foi escrito no CLAUDE.md.
