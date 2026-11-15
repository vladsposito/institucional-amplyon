import { useEffect, useRef } from 'react'
import { flushSync } from 'react-dom'
import { Menu } from 'lucide-react'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { IconButton } from '@/components/IconButton'
import { Logo } from '@/components/Logo'
import { MobileMenu } from '@/components/MobileMenu'
import { NAV_ITEMS, SECTION_IDS } from '@/lib/nav'

type HeaderProps = {
  menuOpen: boolean
  onMenuOpenChange: (open: boolean) => void
}

const DESKTOP_QUERY = '(min-width: 64rem)'

/** Pílula flutuante. Fixa no topo; o espaçador no fluxo fica no App. */
export function Header({ menuOpen, onMenuOpenChange }: HeaderProps) {
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  // Ao chegar no desktop, o painel mobile não faz mais sentido.
  useEffect(() => {
    const query = window.matchMedia(DESKTOP_QUERY)
    const onChange = () => {
      if (query.matches) onMenuOpenChange(false)
    }
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [onMenuOpenChange])

  const closeAndRestoreFocus = () => {
    flushSync(() => onMenuOpenChange(false))
    menuButtonRef.current?.focus()
  }

  const navigateTo = (id: string) => {
    // 1) fecha e confirma no DOM (remove inert e destrava o scroll) antes de navegar
    flushSync(() => onMenuOpenChange(false))
    const section = document.getElementById(id)
    if (!section) return
    section.scrollIntoView()
    // 2) foco vai para o título da seção de destino
    const heading = section.querySelector<HTMLElement>('h2')
    heading?.focus({ preventScroll: true })
    history.replaceState(null, '', `#${id}`)
  }

  return (
    <header className="fixed inset-x-0 top-3 z-50 lg:top-6">
      <Container>
        <div
          inert={menuOpen}
          className="flex items-center justify-between rounded-pill border border-line glass py-1.5 pr-1.5 pl-4 lg:py-2 lg:pr-2 lg:pl-5"
        >
          <a href="#topo" aria-label="Amplyon, início">
            <span className="lg:hidden">
              <Logo size="sm" />
            </span>
            <span className="hidden lg:block">
              <Logo />
            </span>
          </a>

          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex gap-8">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="type-body text-ink-muted interactive hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-1.5">
            <span className="hidden xs:block lg:hidden">
              <Button href={`#${SECTION_IDS.contact}`} size="sm">
                Orçamento
              </Button>
            </span>
            <span className="hidden lg:block">
              <Button href={`#${SECTION_IDS.contact}`}>
                Quero um orçamento
              </Button>
            </span>
            <IconButton
              ref={menuButtonRef}
              label="Abrir menu"
              expanded={menuOpen}
              controls="mobile-menu"
              onClick={() => onMenuOpenChange(true)}
              icon={<Menu size={20} strokeWidth={2.4} aria-hidden="true" />}
              className="lg:hidden"
            />
          </div>
        </div>
      </Container>

      <MobileMenu
        open={menuOpen}
        onClose={closeAndRestoreFocus}
        onNavigate={navigateTo}
      />
    </header>
  )
}
