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
  title: 'Como um projeto anda por aqui',
  description:
    'Quatro etapas. Você sempre sabe em qual está, e a próxima só começa depois do seu ok.',
}

export const PROCESS_STEPS: Array<{
  title: string
  description: string
  receive: string
}> = [
  {
    title: 'A gente conversa',
    description:
      'Você conta do negócio, do cliente e da meta. Sai com escopo, prazo e preço fechados.',
    receive: 'Escopo, prazo e preço',
  },
  {
    title: 'A gente constrói',
    description:
      'Design e código. Você acompanha por um link de prévia e aprova antes de publicar.',
    receive: 'Link de prévia para aprovar',
  },
  {
    title: 'Vai pro ar',
    description:
      'Página publicada, mensuração instalada e as primeiras campanhas rodando.',
    receive: 'Página no ar e campanhas rodando',
  },
  {
    title: 'A gente não some',
    description:
      'Todo mês lemos os números, ajustamos página e anúncio e mostramos o que mudou.',
    receive: 'Relatório todo mês',
  },
]

export const DIFFERENTIALS_INTRO = {
  title: 'O que muda quando é com a gente',
  description:
    'Em geral, quem faz o site e quem roda o anúncio são fornecedores diferentes que nunca se falam.',
}

export const DIFFERENTIALS: Array<{
  usual: string
  title: string
  description: string
}> = [
  {
    usual: 'O site fica com um fornecedor e o anúncio com outro.',
    title: 'Site e anúncio no mesmo time.',
    description:
      'Quem programa a página fala todo dia com quem roda a campanha. Nada se perde entre fornecedores.',
  },
  {
    usual: 'Você fala com um atendimento que repassa o recado.',
    title: 'Você fala com quem faz.',
    description:
      'Não tem atendimento no meio. Sua mensagem chega direto no desenvolvedor e no gestor de tráfego.',
  },
  {
    usual: 'A mensuração entra depois, quando entra.',
    title: 'Número desde o primeiro dia.',
    description:
      'A mensuração entra no projeto junto com o código. Você sabe de onde veio cada contato.',
  },
  {
    usual: 'A página sai de um modelo pronto, igual a muitas outras.',
    title: 'Código nosso, feito pra você.',
    description:
      'A gente escreve sua página do zero, leve e rápida, para aproveitar cada clique que você paga.',
  },
]

export const CONTACT_COPY = {
  title: 'Conta pra gente o que você quer vender',
  description:
    'A primeira conversa é um diagnóstico. Depois dela você recebe uma proposta com escopo, prazo e preço, sem compromisso.',
  caption: 'É assim que começa',
}

export const CHAT: Array<{ from: 'client' | 'amplyon'; text: string }> = [
  {
    from: 'client',
    text: 'Oi, tenho uma clínica e preciso de mais agendamentos.',
  },
  { from: 'amplyon', text: 'Boa. Você já tem site ou a gente começa do zero?' },
  { from: 'client', text: 'Tenho um, mas ninguém acha.' },
  {
    from: 'amplyon',
    text: 'Então dá para resolver. Me conta como o cliente chega hoje?',
  },
]

export const FOOTER_TEXT = '© 2026 Amplyon. Sites, sistemas e tráfego pago.'

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
