/**
 * Dados de contato reais da Amplyon. Enquanto forem `null`, a seção de contato
 * mostra os campos-guia tracejados do design (sem link).
 */
export const CONTACT: { whatsapp: string | null; email: string | null } = {
  whatsapp: null,
  email: null,
}

export const CONTACT_PLACEHOLDERS = {
  whatsapp: 'WhatsApp da Amplyon entra aqui',
  email: 'E-mail da Amplyon entra aqui',
} as const
