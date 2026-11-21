export const SERVICES_TITLE = 'Quatro jeitos de fazer sua empresa vender mais.'

/** Ordem do Figma; o número (01–04) sai do índice. */
export const SERVICES: Array<{ title: string; description: string }> = [
  {
    title: 'Anúncio no Google e no Instagram',
    description:
      'Cliente novo chamando no seu WhatsApp todo dia. Chega de esperar indicação e de olhar pra agenda vazia.',
  },
  {
    title: 'IA de atendimento',
    description:
      'Seu cliente chama às 22h e é atendido na hora, com a resposta certa. Não é robô travado. É venda que esfriava e agora fecha antes do seu concorrente.',
  },
  {
    title: 'Sistema feito pra sua empresa',
    description:
      'Acabou planilha, caderninho e bagunça. Sua empresa organizada, sem retrabalho e sem dinheiro escapando pelo ralo.',
  },
  {
    title: 'Site que vende',
    description:
      'Seu cliente pesquisa sua empresa, entra no site e confia. Chega de site que espanta cliente e faz sua empresa parecer pequena.',
  },
]

/** Fechamento: `lead` em cor suave, `highlight` em amp. */
export const SERVICES_CLOSING = {
  lead: 'Cada um já muda o resultado da sua empresa.',
  highlight: 'Juntos, ela vende como nunca vendeu.',
}

export const PROCESS_INTRO = {
  title: 'O que muda no seu negócio',
  description:
    'Quatro coisas que você sente quando anúncio, sistema e atendimento por IA trabalham juntos.',
}

/** Etapas da trilha; `pill` é a pílula amp depois de cada etapa. */
export const PROCESS_STEPS: Array<{
  title: string
  description: string
  pill: string
}> = [
  {
    title: 'Sua demanda sobe.',
    description:
      'Cliente novo chamando todo dia. Chega de agenda vazia e de esperar indicação.',
    pill: 'Procura',
  },
  {
    title: 'Você vende mais rápido.',
    description: 'Quem chama é atendido na hora e fecha antes de esfriar.',
    pill: 'Velocidade',
  },
  {
    title: 'Seu faturamento cresce.',
    description:
      'Mês com previsibilidade, sem torcer pra não fechar no vermelho.',
    pill: 'Lucro',
  },
  {
    title: 'Você para de apagar incêndio.',
    description: 'Cada coisa no lugar, e você com a cabeça livre pra crescer.',
    pill: 'Tranquilidade',
  },
]

export const DIFFERENTIALS_INTRO = {
  title: 'O que muda quando é com a gente',
  description:
    'Três situações do dia a dia de quem vende, antes e depois da Amplyon.',
}

/** `usual`: sem a Amplyon (riscado no mobile); `title`: com a Amplyon. */
export const DIFFERENTIALS: Array<{ usual: string; title: string }> = [
  {
    usual: 'Mês bom, mês ruim, conta chegando e você torcendo',
    title: 'Venda todo mês e previsibilidade pra crescer',
  },
  {
    usual: 'Cliente chama, espera horas e compra do concorrente',
    title: 'Cliente atendido na hora e venda fechada',
  },
  {
    usual: 'Você paga pra aparecer e não sabe se voltou',
    title: 'Você sabe quanto entrou e de onde veio cada cliente',
  },
]

export const CONTACT_COPY = {
  title: 'Chega de perder venda. Fala com a gente.',
  description:
    'Se sua empresa já vende tudo o que poderia, pode fechar essa página. Se não, clica e fala com a gente agora.',
  cta: 'Chamar no WhatsApp',
  caption: 'É assim que começa',
}

export const CHAT: Array<{ from: 'client' | 'amplyon'; text: string }> = [
  {
    from: 'client',
    text: 'Oi, minhas vendas caíram e não sei mais o que fazer.',
  },
  {
    from: 'amplyon',
    text: 'Entendi. Quando um cliente te chama hoje, ele é atendido na hora?',
  },
  { from: 'client', text: 'Não. Às vezes só no outro dia.' },
  {
    from: 'amplyon',
    text: 'Então você já sabe onde está perdendo venda. Dá pra resolver.',
  },
]

export const FOOTER_TEXT = '© 2026 Amplyon. Venda mais, todo mês.'

export const RESULTS_LOGOS_TITLE = 'Empresas que já atendemos'

/** Arquivos em public/clientes/. Ordem do Figma. */
export const CLIENT_LOGOS: Array<{ name: string; file: string }> = [
  { name: 'Saccaro', file: 'saccaro.png' },
  { name: 'Essenburg', file: 'essenburg.png' },
  { name: 'Instituto Mix', file: 'instituto-mix.png' },
  { name: 'Gardner', file: 'gardner.png' },
  { name: 'Takuara', file: 'takuara.png' },
  { name: 'Uninter', file: 'uninter.png' },
  // provisório: marca "B" verde, nome do cliente ainda não definido
  { name: 'Cliente', file: 'cliente-b.png' },
  { name: 'Massaviva', file: 'massaviva.png' },
]

/** O "+" é renderizado à parte, na cor amp. */
export const RESULTS_STATS: Array<{ value: string; label: string }> = [
  { value: '7', label: 'anos de atuação' },
  { value: '50', label: 'clientes' },
  { value: 'R$ 500.000', label: 'gerenciados' },
  { value: 'R$ 1.650.000', label: 'faturados' },
]

export const PARTNERS_INTRO = {
  title: 'Quem está do outro lado',
  description:
    'Somos dois sócios. Cada um cuida de uma parte do crescimento da sua empresa, e você fala direto com a gente.',
}

/**
 * Foto: salvar em public/socios/<id>.jpg e preencher `photo: 'socios/<id>.jpg'`
 * (o componente prefixa com import.meta.env.BASE_URL). A img usa alt="", porque o
 * nome do sócio já está no h3 ao lado. Sem `photo`, o espaço fica vazio.
 */
export const PARTNERS: Array<{
  id: 'vladimir' | 'ricky'
  name: string
  role: string
  bio: string
  photo?: string
}> = [
  {
    id: 'vladimir',
    name: 'Vladimir',
    role: 'Sites, sistemas e IA',
    bio: 'Desenvolvedor de software. Especialista em design de sites, desenvolvimento de sistemas e inteligência artificial.',
  },
  {
    id: 'ricky',
    name: 'Ricky',
    role: 'Tráfego e vendas',
    bio: 'Gestor de tráfego. Especialista em tráfego, marketing comercial e anúncios.',
  },
]
