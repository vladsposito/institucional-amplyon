export type NavItem = { label: string; id: string }

export const SECTION_IDS = {
  results: 'resultados',
  services: 'servicos',
  process: 'o-que-muda',
  differentials: 'diferenciais',
  partners: 'quem-somos',
  contact: 'contato',
} as const

export const NAV_ITEMS: NavItem[] = [
  { label: 'Serviços', id: SECTION_IDS.services },
  { label: 'Resultado', id: SECTION_IDS.process },
  { label: 'Diferenciais', id: SECTION_IDS.differentials },
]
