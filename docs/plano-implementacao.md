# Plano de implementação — site institucional Amplyon

Fonte: Figma `B6YGuSp9kZKYE6QV6kSYYd`. Desktop `6:31` (1440), mobile `11:22` (390), menu aberto `46:32`, componentes `2:39`. Frames de "opção" e "v1 (anterior)" (`2:54`) ignorados.
Método de leitura: `get_metadata` (árvore completa), `get_variable_defs` (desktop, mobile, menu, componentes), `get_design_context` + screenshot de todas as seções desktop e mobile, `get_motion_context` (sem animações no arquivo) e `use_figma` somente leitura (opacidade e efeitos do header).

**Regra de precedência (única, vale para todo o plano):** onde o brief e o Figma divergem, eu **não decido sozinho**. O caso vira pergunta em §11 e a etapa afetada fica **bloqueada** até você responder (marcadas "🔒" em §9). A suposição padrão, só para dimensionar, é sempre **o Figma**. As regras proibitivas do brief (fontes, sem hardcode, tema escuro único, textos em PT-BR) nunca cedem ao Figma.

**Convenção de nomes:** código, arquivos, props e variáveis em **inglês** (CLAUDE.md); só os textos da interface em PT-BR.

---

## 1. O que li em cada frame

### Desktop 1440 (`6:31`, altura 4436)

| Seção                | Frame          | O que é                                                                                                                                                                                                                                                                                                                                                                                                          |
| -------------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Topo                 | `6:32` (90px)  | Barra em pílula `10:45`, 1160×66 em x=140,y=24: Logo, 3 links (DM Sans 16, ink-muted, gap 32), botão "Quero um orçamento". Fill **surface 100% opaco, sem blur**, borda line.                                                                                                                                                                                                                                    |
| Hero                 | `16:44` (760)  | Título 4 linhas em 72/72 (`A gente faz o site.` / `E` + `traz gente` com rabisco amp (Scribble) / `pra ele.`), parágrafo 18/28 ink-muted (520px), 2 botões (primário + secundário "Ver o que a gente faz"). "Escada da marca" `16:59`: 4 barras 280px de largura (alturas 90/160/240/320, gap 14, topo arredondado 14) coladas na base do hero; a barra mint tem 4 arcos concêntricos no canto superior direito. |
| Serviços             | `6:77` (1086)  | Título 48/52 + parágrafo. Duas metades: cartão teal "Do lado do código" (3 serviços) e cartão mint "Do lado do anúncio" (3 serviços), com desnível de 64px (direito mais baixo), botão `+` amp 84px no centro do vão. Frase final 16px ink-muted.                                                                                                                                                                |
| Como um projeto anda | `19:44` (698)  | Fundo surface, bordas line em cima/baixo. **Versão em escada/trilha**: linha de 2px com 4 círculos numerados de 56px, selos "seu ok" amp entre eles e selo "Repete todo mês" ao fim; abaixo, 4 colunas (título 28/34, texto, "Você recebe" em label + título 20 mint).                                                                                                                                           |
| Diferenciais         | `21:45` (1033) | **Fundo mist (claro)**. Cabeçalho "Em geral" / "Com a Amplyon" (label pine), 4 linhas separadas por borda sage: à esquerda ícone X + texto 24/32 pine; à direita círculo teal com check + título 36/40 on-amp + texto 16.                                                                                                                                                                                        |
| Contato              | `6:151` (688)  | Cartão 1160 com gradiente pine→teal→sage (122°), raio 14, padding 64. Esquerda: título 48/52, texto 18, 2 "campos a preencher" tracejados (WhatsApp / e-mail). Direita: chat de exemplo, 4 balões (cliente ground à esquerda, Amplyon mint à direita) + legenda "É assim que começa".                                                                                                                            |
| Rodapé               | `6:176` (81)   | Borda line em cima, Logo à esquerda, © à direita.                                                                                                                                                                                                                                                                                                                                                                |

### Mobile 390 (`11:22`, altura 5794)

| Seção                | Frame                    | O que é                                                                                                                                                                                                                                                                                                        |
| -------------------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Topo                 | `11:23` / Barra `11:24`  | Pílula 358×52 em x=16,y=12: Logo reduzido (16px de altura), botão "Orçamento" 38px, ícone hambúrguer 36px. Fill surface **78% + blur** (Figma `BACKGROUND_BLUR` 20 = CSS `blur(10px)`), borda line.                                                                                                            |
| Menu aberto          | `46:32` / painel `46:58` | Painel 358×238, raio **26**, mesmo fill 78% + blur, borda line. Barra com Logo + "Orçamento" + botão fechar (fundo amp-soft, ícone X) e 3 links 20/28 bold com seta à direita (itens com raio pílula, altura 56). Overlay "Fundo escurecido" `46:57`: **ground a 60%**, cobre a tela.                          |
| Hero                 | `17:44` (838)            | Título **centralizado**, 68/67, 4 linhas ("A gente faz" / "o site." / "E traz gente" com rabisco / "pra ele."), parágrafo centralizado, **escada** full-bleed (4 barras 91,5px; alturas 60/100/145/190; gap 8; raio 12; arcos no mint), **depois** os 2 botões empilhados 358px. (Ordem diferente do desktop.) |
| Serviços             | `11:61` (1296)           | Título 32/36, cartões empilhados (teal e mint), `+` amp 64px na emenda entre os dois, raios 14.                                                                                                                                                                                                                |
| Como um projeto anda | `19:92` (1253)           | Trilha **vertical**: linha de 2px à esquerda, círculos 40px, selos "seu ok" entre etapas, selo "Repete todo mês" dentro da etapa 4.                                                                                                                                                                            |
| Diferenciais         | `24:44` (1332)           | Fundo mist. Cada linha: texto "Em geral" **riscado** (20/28 pine) seguido de **cartão teal** (raio 14, padding 20) com check mint, título 24/28 ink e texto ink.                                                                                                                                               |
| Contato              | `11:133` (896)           | Mesmo cartão em gradiente (143,9°), padding 24, tudo empilhado: título 32/36, texto, campos, chat.                                                                                                                                                                                                             |
| Rodapé               | `11:157` (115)           | Logo **em tamanho cheio** (191×22) e © empilhados.                                                                                                                                                                                                                                                             |

### Componentes (`2:39`)

Logo `2:40` (escada de 4 barras 5px + "Amplyon" Syne 800 22px, -2%), Botão `2:51` (primário amp/on-amp; secundário borda line-strong/ink; 48px, pílula, px 24, DM Sans 700 16/16), Tag `2:52` (amp-soft, texto mint, label, raio 6, px10 py6).

### Ambiguidades e inconsistências encontradas (todas tratadas na seção 11)

1. **Diferenciais é claro (mist `#F2FBFA`)**, no desktop e no mobile, mas a regra diz "tema único escuro". Interpretação: não há modo claro/escuro; é uma faixa de seção. Vou reproduzir a faixa clara com tokens (mist, pine, teal, on-amp).
2. **O par "Em geral" riscado vs. cartão teal só existe no mobile.** No desktop (`21:45`) é tabela de 4 linhas: ícone X + texto pine **sem risco**, e do outro lado check teal + título 36px **sem cartão**. O brief descreve o par riscado + cartão como conceito geral.
3. **Header desktop não é translúcido** no Figma (fill 100%, sem blur). Só mobile (barra e menu) tem 78% + blur. O brief pede translúcido nos dois.
4. **Blur:** o brief diz "20px"; no Figma o raio é 20, que em CSS equivale a `blur(10px)` (é o que o export gera). Vou usar 10px de CSS, a menos que você prefira 20px literais.
5. **Botão mobile do header tem 38px de altura** e texto 15px ("Orçamento"), e o hambúrguer é um alvo de 36px. A regra diz botões sempre 48px.
6. **Tokens de raio extras não previstos** (6/14/pílula): painel do menu 26px, balões de chat 18px com "cauda" de 4px. Raios 16/18/20/28/32/42 em círculos são pílula (metade do lado).
7. **Estilo `mobile/metric` (DM Mono 32/36, -2%) é usado nos números do desktop** (círculos 56px). O mobile usa um estilo sem nome: DM Mono 18/20, tracking +8%, uppercase. Criar token para os dois.
8. **Letter-spacing do Figma vem em %** (display -2 = -2% = -0,96px em 48px; label 8 = +8% = 0,96px). Converter para `em`.
9. **Tag existe nos componentes mas não aparece em nenhuma página.** Os selos das páginas ("seu ok", "Repete todo mês") são outra variante (pílula, amp ou contorno sage), sem componente no Figma.
10. **Logo mobile do header é versão reduzida** (15,844px, escala ≈0,72), no rodapé mobile é a cheia.
11. **Largura da escada desktop = 1162** (4×280 + 3×14), 2px além do container de 1160.
12. **Dados de contato inexistentes**: "WhatsApp da Amplyon entra aqui" e "E-mail da Amplyon entra aqui" são campos-guia tracejados.
13. **Rótulos de navegação vs. seções**: link "Como trabalhamos" aponta para a seção "Como um projeto anda". Não existe link para Contato (o CTA "Quero um orçamento" leva a ele).
14. **Fontes com eixo `opsz`**: o Figma renderiza Bricolage e DM Sans com `opsz 14` (`wdth 100` no Bricolage). O `index.css` atual importa só o eixo `wght` (sem `opsz`). Com `opsz` automático do navegador os títulos grandes mudam de desenho. Preciso importar o CSS com `opsz` (mesma família, não é troca de fonte) e fixar `opsz 14`.
15. **`rise #8EE07A`, `pulse`, `on-pulse`, `link` e `focus` não existem nas variáveis do Figma** (que só têm ground, surface, line, line-strong, ink, ink-muted, amp, on-amp, pine, teal, sage, mint, mist, amp-soft e os 3 raios). Todos vêm **só do brief** (valores citados por ele) e nenhum aparece nos frames, exceto o uso de `focus` no anel de foco pedido pelo brief.
16. **Sem animações no Figma** (`get_motion_context` vazio nos frames principais).
17. **"Como um projeto anda em escada":** no Figma desktop (`19:44`) a trilha é **horizontal reta** (4 círculos todos em y=0, sem desnível); "escada" aqui significa a sequência de 4 etapas numeradas (vs. as versões descartadas "fluxo opção"). Suposição: sigo o Figma (trilha reta). Pergunta em §11.
18. **Arcos (resolvido por leitura via `use_figma`, só leitura):** desktop = 4 elipses concêntricas (`16:64–67`: 60/128/196/264, centradas no canto superior direito da barra mint), traço **10px**, cor = variável `on-amp`/`ground` (`#0A2422`), opacidade 1, sem preenchimento. Mobile (`17:64`) = 3 elipses (36/80/124), traço **7px**, mesma cor, sem preenchimento. O `get_design_context` entrega a barra mint inteira como um SVG único, mas os arcos existem como nós separados e são exportáveis um a um.
19. **O `+` das duas versões não tem text style nomeado:** Bricolage 800, desktop 48/52 (= `display`) e mobile 32/36 (= `mobile/display`), -2%, cor on-amp sobre amp.

---

## 2. Mapeamento de tokens

### Cores → `@theme` (`--color-*`; gera `bg-ground`, `text-ink`, `border-line` …)

| Figma                                            | Valor                                   | Variável                                                                                                                                          | Uso observado                                                |
| ------------------------------------------------ | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| ground                                           | `#0A2422`                               | `--color-ground`                                                                                                                                  | fundo da página, balões do cliente, campos                   |
| surface                                          | `#12302D`                               | `--color-surface`                                                                                                                                 | header, seção "Como um projeto anda", selo contorno          |
| line                                             | `#24423F`                               | `--color-line`                                                                                                                                    | bordas de header, seção, rodapé                              |
| line-strong                                      | `#5F8A84`                               | `--color-line-strong`                                                                                                                             | borda do botão secundário, linha da trilha, borda dos campos |
| ink                                              | `#E4FBF8`                               | `--color-ink`                                                                                                                                     | texto principal                                              |
| ink-muted                                        | `#9DBDB8`                               | `--color-ink-muted`                                                                                                                               | texto secundário                                             |
| amp                                              | `#FFC94A`                               | `--color-amp`                                                                                                                                     | botão primário, rabisco, "+", selos "seu ok"                 |
| on-amp                                           | `#0A2422`                               | `--color-on-amp`                                                                                                                                  | texto sobre amp, sobre mint e sobre mist                     |
| pine / teal / sage / mint                        | `#2C5D57` `#3A766F` `#7FBFB6` `#D4FBF6` | `--color-pine/teal/sage/mint`                                                                                                                     | escada, cartões, bordas, balões                              |
| mist                                             | `#F2FBFA`                               | `--color-mist`                                                                                                                                    | fundo da seção Diferenciais                                  |
| amp-soft                                         | `#1B3A37`                               | `--color-amp-soft`                                                                                                                                | Tag, botão fechar do menu                                    |
| rise                                             | `#8EE07A`                               | `--color-rise`                                                                                                                                    | sem uso nos frames; só declarado                             |
| aliases (**fonte: brief**, não existem no Figma) |                                         | `--color-pulse: var(--color-mint)`, `--color-on-pulse: var(--color-on-amp)`, `--color-link: var(--color-sage)`, `--color-focus: var(--color-amp)` | `focus` usado no anel de foco; os outros sem uso             |

Translucidez e overlay (derivados de tokens, sem hex novo): tokens `--opacity-glass: 78%` e `--opacity-scrim: 60%`, usados como `bg-surface/(--opacity-glass)` (header translúcido e menu) e `bg-ground/(--opacity-scrim)` (overlay do menu). Blur: `--blur-glass: 10px` (= raio 20 do Figma) → `backdrop-blur-glass`.

Gradientes do Contato (o Tailwind v4 não tem namespace `--background-image-*` no `@theme`, então são `@utility` no `index.css`): `@utility bg-chat-desktop { background-image: linear-gradient(122deg, var(--color-pine) 0%, var(--color-teal) 55%, var(--color-sage) 100%) }` e `@utility bg-chat-mobile { background-image: linear-gradient(144deg, var(--color-pine) 0%, var(--color-teal) 50%, var(--color-sage) 83.333%) }`.

### Cor de texto por seção (conferida no `get_design_context`)

| Onde                        | Texto                                                                                                                                                                                                                                  | Cor                                                 |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| Header e links desktop      | links                                                                                                                                                                                                                                  | `ink-muted`; logo `ink`; botão `on-amp` sobre `amp` |
| Hero                        | título `ink`; parágrafo `ink-muted`; botão secundário `ink` com borda `line-strong`                                                                                                                                                    |
| Serviços                    | título/parágrafo da seção `ink` / `ink-muted`; cartão teal: label e textos `ink`; cartão mint: label `pine`, títulos e textos `on-amp`; divisores: borda superior `sage` (itens 2 e 3 de cada cartão, desktop e mobile)                |
| Como um projeto anda        | título `ink`, texto `ink-muted`, "Você recebe" label `sage`, valor `mint`; círculos 1–3 `ink` sobre `bg-ground` com borda `sage` 2px, círculo 4 `on-amp` sobre `mint`; selo `on-amp` sobre `amp`; selo contorno `sage` sobre `surface` |
| Diferenciais (fundo `mist`) | título e texto da abertura `on-amp`; label de cabeçalho `pine`; "Em geral" `pine`; títulos "Com a Amplyon" desktop `on-amp`, texto `on-amp`; mobile: cartão `teal` com título/texto `ink` e check `mint`                               |
| Contato                     | título/texto `ink`; campos: fundo `ground`, texto `ink-muted`, borda tracejada `line-strong`; balões cliente `ground`/`ink`, Amplyon `mint`/`on-amp`; legenda `on-amp`                                                                 |
| Rodapé                      | borda `line`; © `ink-muted`                                                                                                                                                                                                            |

### Fontes

| Token            | Valor                                               |
| ---------------- | --------------------------------------------------- |
| `--font-display` | `'Bricolage Grotesque Variable'` (títulos, 700/800) |
| `--font-logo`    | `'Syne Variable'` (**somente** o logo, 800)         |
| `--font-sans`    | `'DM Sans Variable'` (texto, botão)                 |
| `--font-mono`    | `'DM Mono'` (números e labels, 500)                 |

Cada token termina com o genérico do sistema (`ui-sans-serif, system-ui, sans-serif` / `ui-monospace, monospace`) **apenas como rede de segurança de carregamento** (`font-display: swap` do Fontsource); não é substituição de fonte. Se uma face não carregar, eu aviso.

Imports no `index.css`: **substituem** (não somam) os imports atuais de `@fontsource-variable/bricolage-grotesque` e `@fontsource-variable/dm-sans` por `.../opsz.css` (mesma família, mesmo nome `'… Variable'`, eixos `wght`+`opsz`); `@fontsource-variable/syne` permanece e `@fontsource/dm-mono/500.css` permanece (o 400 sai: todo estilo mono do Figma é 500). O `opsz.css` do Bricolage **não tem eixo `wdth`**, então o `"wdth" 100` do export do Figma é ignorado (100 é o padrão). Etapa 0 confere que existe uma única `@font-face` por família. Isso **não é troca de fonte**: `opsz.css` declara a mesma família (`'Bricolage Grotesque Variable'`, `'DM Sans Variable'`) com um eixo a mais, e o Figma usa `opsz 14`; por isso não é pergunta. Se alguma fonte não carregar, **aviso você** em vez de trocar.
Fixar `font-variation-settings: "opsz" 14` via `@utility font-opsz-ui` (valor em token `--font-opsz-ui`), e confirmar na verificação lado a lado que o desenho dos títulos bate com o Figma; se o `opsz` automático bater igual, mantém-se o automático.

### Tokens de dimensão (nada de px/vw "solto" nos componentes)

| Token                                          | Valor                                                                                                                                                                         | Uso                                                                                                                                                                       |
| ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--container-content`                          | 1160px                                                                                                                                                                        | largura do conteúdo                                                                                                                                                       |
| `--gutter`                                     | 16px (base) / 32px (`md`)                                                                                                                                                     | margens laterais. **Declarado em `:root` no `index.css` com `@media (width >= 48rem) { :root { --gutter: … } }`, fora do `@theme`** (variáveis do `@theme` são estáticas) |
| `--container-page`                             | `calc(var(--container-content) + 2 * var(--gutter))`                                                                                                                          | em `:root`, resolvida em tempo de execução; uso `max-w-(--container-page)`                                                                                                |
| `--blur-glass`                                 | 10px                                                                                                                                                                          | blur do header/menu                                                                                                                                                       |
| `--height-control` / `--height-control-sm`     | 48px / 38px                                                                                                                                                                   | botão `md` / `sm` (header mobile)                                                                                                                                         |
| `--size-icon-button`                           | 36px                                                                                                                                                                          | hambúrguer e fechar                                                                                                                                                       |
| `--compare-col`                                | 460px                                                                                                                                                                         | coluna "Em geral" (desktop)                                                                                                                                               |
| `--fluid-display-xl-mobile`                    | 17.436vw (= 68/390)                                                                                                                                                           | tamanho fluido do título mobile (fora do namespace `--text-*` de propósito)                                                                                               |
| `--stair-ratio-1..4` (desktop)                 | 280/90, 280/160, 280/240, 280/320                                                                                                                                             | proporção de cada barra                                                                                                                                                   |
| `--stair-ratio-m-1..4` (mobile)                | 91.5/60, 91.5/100, 91.5/145, 91.5/190                                                                                                                                         | idem mobile                                                                                                                                                               |
| `--bubble-max-desktop` / `--bubble-max-mobile` | 356px / 272px                                                                                                                                                                 | **max-width** do balão (balão `w-fit`: abraça o conteúdo; texto longo quebra em 320 / 240 = max − padding; "Tenho um, mas ninguém acha." fica em 258 / 254)               |
| padding dos balões                             | desktop 18/14, mobile 16/12                                                                                                                                                   | escala nativa: `px-4.5 py-3.5` / `px-4 py-3`                                                                                                                              |
| gap entre linhas do chat                       | 10px                                                                                                                                                                          | `gap-2.5`                                                                                                                                                                 |
| raios do balão                                 | 18 nos 3 cantos; cauda 4                                                                                                                                                      | cliente: `rounded-bl-tail` (inferior esquerdo 4); Amplyon: `rounded-br-tail` (inferior direito 4); alinhamento: cliente `justify-start`, Amplyon `justify-end`            |
| `--scribble-overlap-desktop` / `-mobile`       | 6px / 4px                                                                                                                                                                     | margem negativa do texto sobre o rabisco                                                                                                                                  |
| `--scribble-h-desktop` / `-mobile`             | 14px / 16px                                                                                                                                                                   | altura da faixa do rabisco                                                                                                                                                |
| `--border-badge`                               | 1.5px                                                                                                                                                                         | borda do selo "Repete todo mês" (desktop e mobile)                                                                                                                        |
| `--logo-symbol-*`                              | barras 5/8/12/16, gap 2, raio 1.5, `pb` 3 (símbolo) e gap 10 entre símbolo e texto, todos em `em` da base 22px (no `sm`: 7,202 de gap e 2,161 de `pb`, mesma proporção 0,72×) | Logo                                                                                                                                                                      |
| `--gap-title-line3-desktop` / `-mobile`        | 18px / 16px                                                                                                                                                                   | espaço entre "E" e "traz gente"                                                                                                                                           |
| `--header-pad-desktop`                         | 20 / 8 / 8 (esq/dir/vert)                                                                                                                                                     | padding da barra desktop                                                                                                                                                  |
| `--header-pad-mobile`                          | 16 / 6 / 6                                                                                                                                                                    | barra mobile e barra do menu (`46:59`); 6px entre "Orçamento" e o ícone                                                                                                   |
| `--height-topbar` / `--height-topbar-mobile`   | 90px / 64px                                                                                                                                                                   | espaçador do topo no fluxo                                                                                                                                                |
| `--max-w-column`                               | 640px                                                                                                                                                                         | coluna da composição mobile em tablet                                                                                                                                     |

O script do §10 reprova **qualquer** valor arbitrário com `px`, `vw`, `rem`, `#hex` ou `rgb(` em `src/` fora do `index.css`.

### Raios e espaçamento

`--radius-sm: 6px`, `--radius-md: 14px`, `--radius-pill: 999px`; extras do design: `--radius-panel: 26px` (menu), `--radius-bubble: 18px`, `--radius-bubble-tail: 4px`, `--radius-bar-mobile: 12px` (topo das barras da escada mobile; desktop usa `--radius-md`). Espaçamento: base `--spacing: 4px` do Tailwind (valores do design 4/6/8/10/12/14/16/18/20/24/28/32/48/56/64/96/112/140 usam a escala nativa do Tailwind v4, que aceita fracionários: `p-1.5`=6, `px-2.5`=10, `gap-3.5`=14, `pl-4.5`=18; sem calc nem px arbitrário).

### Text styles → utilitários `type-*`

Tamanho, line-height e tracking de cada estilo ficam no `@theme` (`--text-display-xl: 72px`, `--text-display-xl--line-height: 72px`, `--text-display-xl--letter-spacing: -0.03em`, que o Tailwind v4 já usa para gerar `text-display-xl`). Os **utilitários compostos** têm prefixo diferente para não colidir com os gerados pelo tema: `@utility type-display-xl { @apply text-display-xl font-display font-extrabold; }` (família e peso juntos). `type-display-xl-mobile` aplica `font-size: min(var(--text-display-xl-mobile), var(--fluid-display-xl-mobile))`. A coluna "Utilitário" abaixo usa só `type-*`.

| Style Figma                       | Spec                                  | Utilitário                                                  |
| --------------------------------- | ------------------------------------- | ----------------------------------------------------------- |
| display-xl                        | Bricolage 800 · 72/72 · -3%           | `type-display-xl` (≥lg)                                     |
| mobile/display-xl                 | Bricolage 800 · 68/67 · -3%           | `type-display-xl-mobile` (fluido, ver §5)                   |
| display                           | Bricolage 800 · 48/52 · -2%           | `type-display`                                              |
| mobile/display                    | Bricolage 800 · 32/36 · -2%           | `type-display-mobile`                                       |
| display-sm                        | Bricolage 800 · 36/40 · -2%           | `type-display-sm`                                           |
| mobile/display-sm                 | Bricolage 800 · 24/28 · -2%           | `type-display-sm-mobile`                                    |
| heading                           | Bricolage 700 · 28/34 · -1%           | `type-heading`                                              |
| mobile/heading                    | Bricolage 700 · 22/28 · -1%           | `type-heading-mobile`                                       |
| body-xl                           | DM Sans 500 · 24/32 · -1%             | `type-body-xl`                                              |
| mobile/body-xl                    | DM Sans 500 · 20/28 · -1%             | `type-body-xl-mobile`                                       |
| body-lg                           | DM Sans 500 · 18/28 · 0               | `type-body-lg`                                              |
| title                             | DM Sans 700 · 20/28 · 0               | `type-title`                                                |
| body                              | DM Sans 400 · 16/24 · 0               | `type-body`                                                 |
| button                            | DM Sans 700 · 16/16 · 0               | `type-button`                                               |
| label                             | DM Mono 500 · 12/16 · +8% · uppercase | `type-label`                                                |
| mobile/metric                     | DM Mono 500 · 32/36 · -2%             | `type-metric` (usado nos círculos **desktop**)              |
| (sem nome) círculo mobile         | DM Mono 500 · 18/20 · +8% · uppercase | `type-step-mobile`                                          |
| logo                              | Syne 800 · 22/22 · -2%                | `type-logo`; versão reduzida 15,844/15,844 → `type-logo-sm` |
| (sem nome) botão mobile do header | DM Sans 700 · 15                      | `type-button-sm`                                            |

Escala em %→em: -3% = `-0.03em`, -2% = `-0.02em`, -1% = `-0.01em`, 8% = `0.08em`. Conferidos contra `get_design_context`: 72 → -2,16px, 48 → -0,96px, 28 → -0,28px, 12 → +0,96px.

---

## 3. Árvore de arquivos

```
index.html                      # lang="pt-BR", <title> e meta description em PT-BR
src/
  index.css                     # imports de fonte + @theme + @utility (text styles) + base global
  main.tsx  App.tsx             # App monta Header + <main> com as seções + Footer
  assets/
    brand/                      # só o que o Figma tem e o lucide não cobre (§7)
  components/
    Logo.tsx  Button.tsx  Tag.tsx  Badge.tsx  Container.tsx  SectionHeading.tsx
    BrandStair.tsx              # escada da marca (desktop e mobile)
    StairArcs.tsx               # arcos concêntricos (SVG inline, currentColor)
    Scribble.tsx                # rabisco amarelo (SVG inline, currentColor)
    ChatBubble.tsx
    Header.tsx  MobileMenu.tsx  Footer.tsx    # layout: Header e Footer no mesmo critério
  sections/
    Hero.tsx  Services.tsx  Process.tsx  Differentials.tsx  Contact.tsx
  lib/
    cn.ts                       # junta classes
    contact.ts                  # dados de contato (null enquanto não vierem)
    nav.ts                      # itens de navegação e ids de âncora
    content.ts                  # textos (PT-BR) de serviços, etapas, diferenciais, chat
```

Layout (Header, MobileMenu, Footer) em `components/`; só as seções de conteúdo ficam em `sections/`, uma por arquivo. Textos em `lib/content.ts`. Ícones: `lucide-react` (ver §7), sem `Icon.tsx`.

---

## 4. Componentes reutilizáveis e props

- **Logo** `{ size?: 'md' | 'sm'; className? }` — símbolo (4 barras `bg-pine/teal/sage/mint`, larguras/alturas em `em` para escalar, raio proporcional) + "Amplyon" em `font-logo`. `sm` = 0,72× via `type-logo-sm` (header mobile). Único lugar com Syne.
- **Button** `{ variant?: 'primary' | 'secondary'; size?: 'md' | 'sm'; href?: string; fullWidth?: boolean; children }` — sempre `rounded-pill`; `md` = `h-(--height-control)` (48), `sm` = `h-(--height-control-sm)` (38, só header mobile, 🔒 §11-4); `inline-flex items-center justify-center leading-none`, padding **só horizontal**: o rótulo fica centrado por flex. `<a>` com `href`, senão `<button type="button">`.
- **Tag** `{ children }` — `bg-amp-soft text-mint type-label rounded-sm`, padding horizontal/vertical do Figma (10/6). Só componente, sem uso na página (§11-7).
- **Badge** `{ variant?: 'amp' | 'outline'; size?: 'md' | 'sm'; children }` — pílula label; `amp` = `bg-amp text-on-amp` ("seu ok"); `outline` = borda `--border-badge` (1,5px) `sage`, `bg-surface text-sage` ("Repete todo mês"). Padding: `md` = `px-3 py-1.5` (12/6, desktop) e `sm` = `px-2.5 py-1.25` (10/5, mobile) nas duas variantes.
- **BrandStair** `{ variant: 'desktop' | 'mobile'; className? }` — 4 barras `div` com `bg-pine / bg-teal / bg-sage / bg-mint`, **todas** em CSS (inclusive o fundo mint); largura `flex-1`, **altura por `aspect-ratio`** (`--stair-ratio-*`), então as proporções do desenho se mantêm em qualquer largura; raio de topo `rounded-t-md` (desktop) / token mobile 12. A barra mint contém `<StairArcs>` ancorado em `absolute top-0 right-0` com `overflow-hidden` na barra. Tudo `aria-hidden`.
- **StairArcs** `{ variant: 'desktop' | 'mobile' }` — SVG inline em TSX montado dos SVGs das elipses exportadas do Figma (desktop: 4 arcos, traço 10; mobile: 3 arcos, traço 7; `fill` none), com `stroke` = `currentColor`, colorido por `text-on-amp` (valor lido do Figma: variável `on-amp`, opacidade 1, sem token novo); tamanho fixo (não escala com a barra), ancorado no canto superior direito e recortado pela barra.
- **Scribble** `{ variant?: 'desktop' | 'mobile'; children }` — **no fluxo, como no Figma**: `inline-flex flex-col`; o texto "traz gente" leva margem inferior negativa `-mb-(--scribble-overlap-*)` (6 / 4) e abaixo vem o SVG inline do rabisco (`currentColor` = `text-amp`) em `block w-full` de altura `--scribble-h-*` (14 / 16), `aria-hidden`. Resultado: a "Linha" mede 72+14−6 = 80 (desktop) e 67+16−4 = 79 (mobile), "pra ele." cai em y=152 / 213 do título, e o rabisco acompanha a largura do texto quando o título encolhe em telas < 390.
- **Container** `{ as?; className?; children }` — `mx-auto w-full max-w-(--container-page) px-(--gutter)`.
- **SectionHeading** `{ id; title; description?; tone?: 'dark' | 'light' }` — h2 `type-display-mobile lg:type-display` + p `type-body` (`ink-muted`; `on-amp` no tom claro); título 820 / descrição 540 máx. no desktop via tokens.
- **Header** — `fixed inset-x-0 top-3 lg:top-6 z-50` + espaçador no fluxo (§5); estado do menu. **MobileMenu** `{ open; onClose; items }`. **Footer**. **ChatBubble** `{ from: 'client' | 'amplyon'; children }` — `w-fit max-w-(--bubble-max-*)`, cliente à esquerda (`bg-ground text-ink`, `rounded-bl-tail`), Amplyon à direita (`bg-mint text-on-amp`, `rounded-br-tail`), demais cantos `rounded-bubble`.
- **Ícones:** `lucide-react` `Menu`, `X`, `Check`, `ArrowRight`, com tamanho e `strokeWidth` conferidos contra os SVGs do Figma (§7). Cor por `currentColor`/token.
- Subcomponentes locais (não genéricos): `ServiceGroup` (Services), `ComparisonRow` (Differentials), `Step` (Process).

---

## 5. Estratégia responsiva

Mobile-first. Breakpoints do Tailwind: base (390 de referência), `md` 768, `lg` 1024, `xl` 1280.

- **Container e gutters:** tokens da §2 (`--container-content` 1160, `--gutter` 16/32). Em 1440 o conteúdo fica em x=140…1300; em 1024 tem 960 úteis; em 390 tem 358.
- **Duas composições:** mobile até 1023px, desktop de 1024 em diante (só há dois desenhos no Figma; não invento um terceiro). Entre 768 e 1023 a composição mobile fica numa coluna centralizada de `max-w-(--max-w-column)` (640) para linhas de leitura confortáveis, exceto fundos de seção que seguem full-bleed.
- **Título do hero mobile:** `font-size: min(var(--text-display-xl-mobile), var(--fluid-display-xl-mobile))` (68px token, 17.436vw = 68/390): em 390 vale exatamente 68; em 360 vale 62,8 e o `Scribble` (w-full do span) encolhe junto. Line-height proporcional (67/68). No `lg`, `type-display-xl` (72/72).
- **Header:** `< lg` pílula 52 (Logo `sm`, "Orçamento" `sm`, hambúrguer); `≥ lg` pílula 66 (Logo `md`, links gap 32, botão). Layout `flex items-center justify-between` (como o Figma `10:45`), padding da barra pelos tokens `--header-pad-*` (desktop 20/8/8, mobile e barra do menu 16/6/6, borda 1px); os links ficam em x=395,5 (centro 574, não 580) por consequência do `justify-between`, igual ao Figma. **O Topo ocupa espaço no fluxo** (90px desktop / 64px mobile no Figma): como o header é `fixed`, um espaçador `h-[altura do Topo]` (token `--height-topbar`/`-mobile`) abre o fluxo, então o Hero começa em y=90 / y=64 como no Figma.
- **Hero:** `< lg`: coluna centralizada, `pt` 36 (título em y=100 na página em 390), parágrafo centralizado, escada, botões empilhados 100%, respiro 16. A escada é full-bleed em `< md`; em `md…lg` fica limitada à coluna de 640 e **as barras mantêm a proporção por `aspect-ratio`** (não achatam). O título é um `<h1>` com 4 linhas em blocos `display:block` separadas por **espaço textual** (`{' '}`) para a leitura contínua "A gente faz o site. E traz gente pra ele."; o `Scribble` está no fluxo (§4), logo a linha 2/3 tem 80 / 79 de altura como no Figma; gap entre "E" e "traz gente" = tokens 18 / 16. `≥ lg`: `pt` 126 sobre o início do Hero (título em y=216 na página em 1440); texto à esquerda (título 542, parágrafo 520), botões lado a lado; escada absoluta na base do hero com barras `flex-1`, gap 14 e proporção por `aspect-ratio` (em 1440 a largura útil é 1160 e cada barra mede 279,5: **diferença de 0,5px por barra contra os 280 do Figma, aceita e registrada como exceção**, pois o Figma excede o container em 2px; alturas ≈89,8/159,6/239,4/319,3; em 1024, com 960 de conteúdo, escalam ×≈0,826: ≈74/132/198/264); `min-h` do hero = 760 em 1440 e cresce com o conteúdo.
- **Services:** `< lg`: cartões empilhados com `gap-4` (16px entre eles, como em `11:65`), padding 24 em cima e nos lados e 12 embaixo (`pt-6 px-6 pb-3`), `+` 64px (`<span aria-hidden>`, `type-display-mobile`) centralizado no meio do vão de 16px (y=488 no Figma); `≥ lg`: grid 2 colunas gap 16, padding 48, desnível por `pb-16` no esquerdo e `pt-16` no direito, `+` 84px (`type-display`) centralizado no vão (`absolute left-1/2 top-1/2 -translate-1/2`). **Divisores:** `border-t border-sage` nos serviços 2 e 3 de cada cartão (as duas cores de cartão, as duas versões). Parágrafos 400 máx. no desktop.
- **Process:** `<ol>` com 4 `<li>`. `< lg`: coluna; cada `li` = círculo 40 + texto; trilho vertical por pseudo-elemento (do centro do círculo ao fim do `li`, menos no último); selo "seu ok" no fim do `li` (exceto o 4º); "Repete todo mês" dentro da etapa 4. `≥ lg`: `ol grid-cols-4 gap-6` com **uma única linha** `line-strong` de 2px (`absolute`, na altura do centro dos círculos, largura total do `ol`, atrás dos círculos e do selo final, como em `19:49`: 1160×2 em y=27); cada `li` abre com a faixa do trilho (círculo 56 de `bg-ground` com borda 2px `sage`; o 4º `bg-mint`, borda `sage`, texto `on-amp`; selo "seu ok" no ponto médio entre o círculo e o próximo; "Repete todo mês" alinhado à direita da última coluna sobre a linha, com `bg-surface`), depois título/texto/"Você recebe". Os selos "seu ok" do desktop e do mobile são dois elementos no DOM, alternados por `hidden`/`lg:hidden` (`display:none` os tira da árvore de acessibilidade, sem duplicar leitura).
- **Differentials:** `< lg`: cada linha = "Em geral" (20/28 `pine`, riscado) + cartão `teal` (padding 20, raio 14); `≥ lg`: tabela de 4 linhas `grid-cols-[minmax(0,var(--compare-col))_minmax(0,1fr)] gap-12` (460 + 48 + 652 em 1440, igual ao Figma), cabeçalho "Em geral / Com a Amplyon" visível só no `lg`. DOM único; riscado só visual: `max-lg:line-through` em `<span>`; semântica por prefixo `sr-only` ("Em geral:", "Com a Amplyon:"). 🔒 §11-2.
- **Contact:** `< lg`: cartão padding 24, empilhado, `bg-chat-mobile`; `≥ lg`: duas colunas (texto `flex-1` / chat 420), padding 64, gap 64, `bg-chat-desktop`. Balões `w-fit` com `max-w` pelos tokens `--bubble-max-*` (§2); gap 10 entre linhas.
- **Footer:** `< lg` empilhado (Logo cheio + ©, gap 12); `≥ lg` linha `justify-between`.
- **Âncoras:** `scroll-margin-top` = altura do header + respiro.

### Espaçamentos internos lidos no Figma (escala nativa do Tailwind)

| Onde                                            | Desktop (≥ lg)                                                                                        | Mobile (< lg)                                                                                                         |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Hero                                            | `pt` 126, texto: gap 28 entre título/parágrafo/ações, ações gap 12                                    | `pt` 36, gap 24 entre título/parágrafo/escada/botões, botões gap 12, respiro 16 no fim                                |
| Seções (padding vertical / gap título→conteúdo) | 112 / 56                                                                                              | 56 / 32 (Differentials 56 / 28)                                                                                       |
| Abertura (gap título→descrição)                 | 16                                                                                                    | 12                                                                                                                    |
| Services: cartão                                | padding 48, gap 8 (label→itens)                                                                       | padding 24/24/12, gap 4                                                                                               |
| Services: item                                  | `py` 20, gap 6 (título→texto)                                                                         | `py` 16, gap 6                                                                                                        |
| Process: coluna                                 | trilho→etapas gap 32, etapas gap 24, gap 10 no texto; "Você recebe" `pt` 10 gap 4                     | círculo→texto gap 16; texto gap 8, `pt` 6 `pb` 8; "Você recebe" `pt` 6 gap 4; selos `py` 20; "Repete todo mês" `pt` 8 |
| Differentials: linha                            | `py` 28 com `border-t sage`; X: gap 14 e `pt` 6; check: gap 16; título→texto gap 6; cabeçalho `pb` 16 | gap 32 entre linhas; gap 10 entre riscado e cartão; cartão padding 20, gap 8; título→check gap 10                     |
| Contact                                         | cartão padding 64, gap 64; texto gap 20; campos `px` 14 `py` 10, gap 8                                | cartão padding 24, gap 24                                                                                             |
| Footer                                          | `py` 28                                                                                               | `py` 28, gap 12                                                                                                       |
| Menu aberto                                     | links `pl-4 pr-3.5 py-3.5`; lista gap 2, `pt-1.5 pb-2 px-1.5`; barra `pl-4 pr-1.5 py-1.5`             | (somente mobile)                                                                                                      |

---

## 6. Como cada comportamento será implementado

- **Header em pílula flutuante.** `fixed`, container, barra `rounded-pill border border-line`. **Mobile (barra e menu):** `bg-surface/(--opacity-glass) backdrop-blur-glass` (= Figma: 78% + blur 20 ≙ CSS 10px). **Desktop:** o Figma é opaco (`bg-surface`); o brief pede translúcido. 🔒 §11-3: implemento a opção que você escolher, trocando só a classe. Fallback `@supports not (backdrop-filter)` → `bg-surface` sólido.
- **Menu mobile.** `useState` em `Header`. Botão: `aria-expanded`, `aria-controls="mobile-menu"`, `aria-label` "Abrir menu"/"Fechar menu". Painel `rounded-panel`, `border-line`, glass; barra (Logo, "Orçamento", fechar `bg-amp-soft`) + 3 links (altura 56, pílula, `type-title`, `ArrowRight`). Overlay `bg-ground/(--opacity-scrim)`. `role="dialog" aria-modal="true" aria-label="Menu"`. **Fecha** por Esc, overlay, mudança para `lg`, e ao clicar num link. **Ordem ao clicar num link:** (1) fechar o painel, (2) remover `inert` de `<main>`, `<footer>` e da barra do header (se o painel for nó irmão dela) e destravar o scroll do body, (3) navegar à âncora (`location.hash`/`scrollIntoView`), (4) mover o foco para o `<h2>` da seção (`tabindex="-1"`, `focus({preventScroll:true})`), (5) **não** devolver o foco ao hambúrguer nesse caso. Fechando por Esc/overlay/botão fechar: foco volta ao hambúrguer. Foco entra no primeiro link ao abrir e fica preso no painel (Tab cicla).
- **Rabisco amarelo.** `Scribble` sob "traz gente", **no fluxo** com a sobreposição negativa do Figma (tokens 6 / 4); mesmo desenho, sem edição de path, cor `text-amp`. Sem animação (o Figma não tem).
- **Título do hero mobile.** Centralizado, 4 linhas, 358 de largura em 390; fluido abaixo disso (§5).
- **Escada da marca e arcos.** `BrandStair` (barras em CSS) + `StairArcs` (traço `on-amp`, 10 / 7 de espessura).
- **Process em trilha.** Como em §5; etapa 4 destacada (círculo `mint`, texto `on-amp`).
- **Differentials.** Mobile: risco + cartão teal. Desktop: tabela do Figma. 🔒 §11-2.
- **Contato em conversa.** `<ul role="list">` de balões, prefixo `sr-only` "Cliente:" / "Amplyon:", legenda à direita. Campos tracejados = `<p>` de aparência de campo (sem link, sem `input`) até haver dados (§11-5).
- **Animações e hover.** O Figma não define estados de hover. Proposta mínima (🔒 §11-12): links de navegação `ink-muted`→`ink`; botão primário `bg-amp` com opacidade 90% (sem cor nova); botão secundário borda `line-strong`→`sage`; transição de 150 ms (token de duração), zerada em `prefers-reduced-motion: reduce`. Sem aprovação, nenhum hover é adicionado (etapa 10).

---

## 7. Assets

Princípio: usar o **lucide-react** (já instalado) onde o ícone do Figma tem o mesmo nome e traço; exportar do Figma só o que não coincide. O **rabisco** e os **arcos** são exportados do Figma e entram como **componentes TSX com o `<svg>` inline**, mudando apenas `fill`/`stroke` para `currentColor` (sem editar paths, medidas ou `viewBox`); assim a cor vem do token (`text-amp`, `text-ground`) e nenhum hex fica em arquivo.

| Item            | Origem Figma                                                                                                                       | Destino                                                                      | Observação                                                                                            |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Rabisco desktop | `16:52` (316×14) / vetor `16:53`                                                                                                   | `Scribble.tsx` (variante desktop)                                            | `currentColor`                                                                                        |
| Rabisco mobile  | `17:52` (300×16) / vetor `17:53`                                                                                                   | `Scribble.tsx` (variante mobile)                                             | idem                                                                                                  |
| Arcos desktop   | 4 elipses `16:64–67` (dentro de `16:63`); exportar **cada elipse** (o export da barra `16:63` vem como SVG único com o fundo mint) | `StairArcs.tsx` (desktop)                                                    | traço 10, cor `on-amp`, opacidade 1, sem fill                                                         |
| Arcos mobile    | 3 elipses (36/80/124) dentro de `17:64`; exportar cada elipse                                                                      | `StairArcs.tsx` (mobile)                                                     | traço 7, cor `on-amp`, opacidade 1, sem fill                                                          |
| Ícones          | `42:34` Menu, `46:75` X (menu), `21:55` X (tabela), `21:61` Check (desktop), `24:54` Check (mobile), `46:81` seta                  | `lucide-react`: `Menu`, `X`, `Check`, `ArrowRight` com `absoluteStrokeWidth` | valores abaixo; se o glifo não coincidir, exportar o SVG e virar componente inline com `currentColor` |

**Ícones: tamanho, traço e cor lidos do Figma**

| Ícone      | Onde                                    | Tamanho | Traço | Cor      |
| ---------- | --------------------------------------- | ------- | ----- | -------- |
| Menu       | header mobile                           | 20      | 2     | `ink`    |
| X          | botão fechar do menu (sobre `amp-soft`) | 20      | 1,667 | `ink`    |
| X          | "Em geral" desktop                      | 24      | 1,667 | `pine`   |
| Check      | desktop, dentro do círculo `teal` 32    | 18      | 1,5   | `ink`    |
| Check      | mobile, dentro do círculo `mint` 28     | 16      | 1,333 | `on-amp` |
| ArrowRight | links do menu                           | 20      | 1,667 | `sage`   |

Nenhuma URL do Figma fica no código. A barra mint é um `div bg-mint`; nas **duas** versões o fundo mint é CSS e só os arcos são asset (o export da barra inteira não é usado; arcos exportados elipse por elipse). Favicon: `public/favicon.svg` existente permanece (aviso se estiver faltando).
Verificação de cada asset: arquivo/componente não vazio, `width`/`height`/`viewBox` iguais aos do Figma, posição e tamanho renderizados conferidos.

---

## 8. Acessibilidade

- **Landmarks e ordem:** `<header>`, `<nav aria-label="Principal">`, `<main id="conteudo">` com 5 seções (cada `<section aria-labelledby>` → `<h2>`), `<footer>`. Um único `<h1>` (as 4 linhas do hero, separadas por espaço textual; a leitura na árvore de acessibilidade deve ser "A gente faz o site. E traz gente pra ele."). `lang="pt-BR"`.
- **Skip link** "Pular para o conteúdo" como primeiro item.
- **Tabulação:** skip link → logo → links → botão (desktop) / logo → Orçamento → hambúrguer (mobile) → conteúdo na ordem visual; sem `tabindex` positivo.
- **Foco visível:** global `:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 2px }` (anel de 2px em amp, offset 2px). Em Differentials (fundo `mist`) não há elementos focáveis; se surgir algum, amp sobre mist (≈1,4:1) não passa em 3:1, então ali o anel usa `pine`, registrado como exceção justificada.
- **Contraste (AA 4,5:1 texto, 3:1 UI), calculado por script na verificação, pares:** ink/ground, ink-muted/ground, ink-muted/surface, on-amp/amp, ink/teal (≈4,9), ink e on-amp **sobre o gradiente do Contato nos pontos onde cada texto realmente fica** (título/parágrafo em pine→teal; **legenda `on-amp` sobre a região sage**, balões), label ink/teal e label pine/mint nos cartões de Services, mint/surface e sage/surface (Process), pine/mist e on-amp/mist (Differentials), ink-muted/ground (campos), amp sobre `surface`. Pares abaixo do limite vão no relatório; não troco token sem sua aprovação.
- **Menu mobile:** §6 (aria, Esc, foco preso, `inert`).
- **Decoração:** `aria-hidden` em escada, arcos, rabisco, ícones. Check/X: o texto "Em geral:" / "Com a Amplyon:" (`sr-only`) dá a semântica; o risco é só visual (não uso `<s>`).
- **Alvos:** hambúrguer/fechar de 36 com área clicável de 44 (padding invisível). Botões 48.
- **`prefers-reduced-motion`:** zera `transition`, `animation`; `scroll-behavior: smooth` só em `no-preference`.
- **Zoom:** tamanhos em tokens `rem`; `min-w-0` em filhos flex; nada de `overflow:hidden` cortando texto.

---

## 9. Ordem de implementação e critério de "pronto"

Toda etapa termina com `npm run lint` e `npm run build` sem erros. 🔒 = só começa após sua resposta em §11.

0. **Pré-requisitos.** `index.html` (`lang`, título, meta); imports de fonte **substituindo** os atuais por `opsz.css` (mesma família, sem troca de fonte) e remoção do DM Mono 400; conferir nomes de família. **Pronto:** uma única `@font-face` por família (inspecionado), `document.fonts.check` verdadeiro para as 4 famílias, build ok.
1. **Tokens e base.** `@theme` (cores, aliases, fontes, raios, dimensões, opacidades, blur), `:root` (`--gutter`, `--container-page`), `@utility` dos text styles e dos gradientes, base global (fundo ground, texto ink, foco, reduced-motion) e o **espaçador do topo** (`--height-topbar` / `--height-topbar-mobile`) no `App`, para as etapas seguintes medirem a posição real das seções. **Pronto:** página de teste temporária (apagada depois) mostra cada text style/cor; estilos computados batem com a §2; o script de varredura (§10.2) retorna zero ocorrências fora do `index.css`.
2. **Átomos:** Logo, Button (`md`), Tag, Badge, Container. **Pronto:** bate com `2:39` (Logo 191×22; Botão 215×48 / 217×48; Tag 117×28); rótulo centrado em x e y.
3. **Assets:** `Scribble`, `StairArcs` (exportar **cada elipse** dos arcos, desktop `16:64–67` e mobile as 3 de `17:64`, sem o fundo mint), ícones lucide com `absoluteStrokeWidth`. **Pronto:** cada componente renderiza com as medidas do Figma; arcos com traço 10 / 7 e cor `on-amp`, sobre barra `bg-mint`, **comparados lado a lado com `16:63` e `17:64`** (cor e espessura); ícones conferidos pela tabela do §7 (tamanho, traço, cor); nenhum hex em `src/`.
4. 🔒 **Header + MobileMenu** (§11-3, §11-4; hover §11-12 só na etapa 10). **Pronto:** barra 1160×66 (x=140,y=24) e 358×52 (x=16,y=12), sobre o espaçador da etapa 1; menu aberto bate com `46:32` (painel 358×238, raio 26, overlay 60%); abre/fecha por clique, Esc, overlay; ordem de foco do §6 testada.
5. **Hero + BrandStair** (depende da etapa 3). **Pronto:** em 1440 título em y=216 e em 390 y=100; **"pra ele." em y=152 (desktop) e y=213 (mobile) relativos ao título**, parágrafo e botões nas posições do Figma (confirma que o rabisco está no fluxo); `h1` lido como uma frase na árvore de acessibilidade; rabisco e escada nas posições do Figma; em 360 o título cabe e o rabisco tem a largura do texto; em 768 a escada mantém proporção (captura).
6. **Services.** **Pronto:** 1440 (cartões 572, desnível 64, `+` 84 no centro, divisores) e 390 (empilhados, `+` 64 na emenda, divisores).
7. 🔒 **Process** (§11-11). **Pronto:** 1440 círculos em x=0/296/592/888 e selos conforme o Figma; 390 trilha vertical; etapa 4 destacada.
8. 🔒 **Differentials** (§11-1, §11-2). **Pronto:** faixa `mist`; 1440 tabela 460/48/652; 390 riscado + cartão teal.
9. **Contact + Footer.** **Pronto:** gradiente, balões e campos conforme o Figma; rodapé 81/115.
10. **Intermediários e acessibilidade.** 360, 390, 768, 1024, 1280, 1440, 1920; Tab completo; árvore de acessibilidade. **Pronto:** sem rolagem horizontal; sem corte de texto; anel de foco em tudo que é focável.
11. **Verificação final** (§10) e relatório.

---

## 10. Plano de verificação

**Ferramentas:** o projeto não tem navegador de teste instalado. Para as capturas e o axe preciso adicionar `playwright` e `@axe-core/playwright` como **devDependencies, com a sua aprovação (§11-10)**. Se você não aprovar, faço: (a) um script de medição pronto para colar no console do navegador (lista de seletores → `getBoundingClientRect` comparado com os valores do Figma, saída em tabela ok/diferença), mais inspeção visual, (b) cálculo de contraste e a varredura de tokens por script Node sem dependência nova, e (c) declaro no relatório o que **não** foi verificado automaticamente.

**Exceções aceitas à tolerância de ±1px (declaradas antes de medir):** escada 4×279,5 vs 280 em 1440 (container 1160 vs 1162 do Figma); barras mobile de 91,5; Logo `sm` 15,844px (≈137,9 de largura); links do header centrados em 574 por `justify-between`.

1. **Lado a lado com o Figma**, seção a seção, em **1440** e **390**: `get_screenshot` do nó Figma × captura do site na mesma largura (`deviceScaleFactor` 1, fontes carregadas). Além do olhar, medição por `getBoundingClientRect` contra o `get_metadata` (tolerância ±1px em posição e tamanho; cor exata). Pares: Topo+Hero, Services, Process, Differentials, Contact, Footer (desktop); as mesmas no mobile; menu aberto `46:32`; componentes `2:39`.
2. **Tokens:** script que varre `src/` fora de `index.css` por `#hex`, `rgb(`, `hsl(`, `font-family`, qualquer valor arbitrário com `px`, `vw`, `rem` em classes (`[...]`), `style={{` e `any`. Resultado esperado: zero.
3. **Fontes:** `document.fonts.check` das 4 famílias; só o logo usa Syne (busca por `font-logo`).
4. **Intermediários:** capturas em 360, 768, 1024, 1280, 1920 e `scrollWidth === innerWidth`.
5. **Acessibilidade:** axe-core sem violações sérias; contraste calculado dos pares do §8; teclado do menu mobile; `prefers-reduced-motion` emulado.
6. **Comandos:** `npm run lint`, `npm run build`, `npm run format:check`, todos código 0, saída real reportada.
7. **Relatório final:** tabela seção × (1440, 390) com "ok" ou diferença residual + decisões tomadas por causa das ambiguidades.

---

## 11. Perguntas em aberto para você

Suposição padrão em todas = **o Figma** (regra de precedência). As marcadas 🔒 bloqueiam etapas.

1. 🔒 **Diferenciais em fundo claro (`mist`).** O Figma usa uma faixa clara nas duas versões, mas o brief diz "tema único escuro". Reproduzo a faixa clara com tokens (sem criar modo claro)?
2. 🔒 **Diferenciais no desktop.** Figma desktop = tabela (X + texto pine sem risco; check + título grande, sem cartão); riscado + cartão teal só no mobile. Sigo o Figma em cada tamanho, ou quer o par riscado + cartão também no desktop?
3. 🔒 **Header desktop:** Figma = opaco; só a barra mobile e o menu têm 78% + blur. Quer translucidez também no desktop (brief)? E blur `10px` de CSS (= raio 20 do Figma) ou 20px literais?
4. 🔒 **Botão do header mobile 38px/15px e hambúrguer 36px**, contra "botões sempre 48px". Mantenho o Figma (38px só ali)?
5. **Contatos reais** (WhatsApp, e-mail): enquanto não vierem, ficam os dois campos tracejados, sem link. "Quero um orçamento" aponta para `#contato`.
6. **Tokens de raio extras:** 26 (menu), 18 e 4 (balões), 12 (barras da escada mobile). Ok como tokens adicionais?
7. **Tag:** existe nos componentes, mas não aparece na página. Implemento como componente, sem uso. Ok?
8. **Formulário:** o Figma só mostra campos-guia. Não crio envio de mensagem. Ok?
9. **Meta description e título** em PT-BR no `index.html`: eu escrevo o texto ou você dita?
10. **Ferramentas de teste:** posso instalar `playwright` e `@axe-core/playwright` como devDependencies para capturas e axe?
11. 🔒 **"Escada" em "Como um projeto anda":** o brief diz "em escada"; no Figma desktop (`19:44`) é uma trilha horizontal reta, 4 círculos em y=0, sem degraus. Sigo o Figma (trilha reta) ou quer degraus visuais?
12. 🔒 **Hover:** o Figma não define hover. Aceita a proposta mínima do §6 (link `ink-muted`→`ink`, botão primário opacidade 90%, secundário borda `line-strong`→`sage`), ou prefere nenhum hover?
