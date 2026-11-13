import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { FOOTER_TEXT } from '@/lib/content'

export function Footer({ inert }: { inert?: boolean }) {
  return (
    <footer inert={inert} className="border-t border-line">
      <Container className="flex flex-col gap-3 py-7 lg:flex-row lg:items-center lg:justify-between">
        <Logo />
        <p className="type-body text-ink-muted">{FOOTER_TEXT}</p>
      </Container>
    </footer>
  )
}
