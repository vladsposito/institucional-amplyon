export type NavItem = { label: string; id: string }

export const SECTION_IDS = {
  services: 'servicos',
  process: 'como-trabalhamos',
  differentials: 'diferenciais',
  contact: 'contato',
} as const

export const NAV_ITEMS: NavItem[] = [
  { label: 'Serviços', id: SECTION_IDS.services },
  { label: 'Como trabalhamos', id: SECTION_IDS.process },
  { label: 'Diferenciais', id: SECTION_IDS.differentials },
]
