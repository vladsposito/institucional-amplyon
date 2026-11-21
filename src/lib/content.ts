export type ServiceItem = { title: string; description: string }

export const SERVICES_INTRO = {
  title: 'Dois ofícios, um time só',
  description:
    'Site bonito sem visita não vende. Anúncio bom apontando para página ruim queima verba. Por isso a gente cuida das duas pontas.',
  footnote:
    'Dá para contratar só um lado. Quando os dois andam juntos, a página já nasce pronta para receber anúncio.',
}

export const SERVICE_GROUPS: Array<{ label: string; items: ServiceItem[] }> = [
  {
    label: 'Do lado do código',
    items: [
      {
        title: 'Sites institucionais',
        description:
          'Seu negócio explicado com clareza, rápido no celular e fácil de achar no Google.',
      },
      {
        title: 'Landing pages',
        description:
          'Uma página, uma oferta, um objetivo. Feita para o clique do anúncio virar contato.',
      },
      {
        title: 'Sistemas sob medida',
        description:
          'Painéis, áreas de cliente e automações para o processo que a planilha já não resolve.',
      },
    ],
  },
  {
    label: 'Do lado do anúncio',
    items: [
      {
        title: 'Google Ads',
        description:
          'Para aparecer na hora em que o cliente já está procurando o que você vende.',
      },
      {
        title: 'Meta Ads',
        description:
          'Para chegar em quem ainda não conhece você, no Instagram e no Facebook.',
      },
      {
        title: 'Mensuração e relatório',
        description:
          'Pixel, eventos e conversões instalados. Todo mês, um relatório que você entende.',
      },
    ],
  },
]

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
