import { useEffect, useRef } from 'react'
import type { KeyboardEvent as ReactKeyboardEvent, MouseEvent } from 'react'
import { flushSync } from 'react-dom'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { IconButton } from '@/components/IconButton'
import { Logo } from '@/components/Logo'
import { MenuToggleIcon } from '@/components/MenuToggleIcon'
import { MobileMenu } from '@/components/MobileMenu'
import { cn } from '@/lib/cn'
import { NAV_ITEMS, SECTION_IDS } from '@/lib/nav'

type HeaderProps = {
  menuOpen: boolean
  onMenuOpenChange: (open: boolean) => void
}

const DESKTOP_QUERY = '(min-width: 64rem)'
const FOCUSABLE = 'a[href], button:not([disabled])'

/**
 * Pílula flutuante. Fixa no topo; o espaçador no fluxo fica no App.
 * No mobile, a pílula e o menu são um painel único que cresce para baixo ao abrir
 * (motion 3, docs/motion/menu-referencia.html): a barra não se mexe e os links entram abaixo dela.
 */
export function Header({ menuOpen, onMenuOpenChange }: HeaderProps) {
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

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

  // Menu aberto: Esc fecha e o Tab circula entre os itens visíveis do painel.
  const handleKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (!menuOpen) return
    if (event.key === 'Escape') {
      event.stopPropagation()
      closeAndRestoreFocus()
      return
    }
    if (event.key !== 'Tab' || !panelRef.current) return
    const items = Array.from(
      panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE),
    ).filter((el) => el.getClientRects().length > 0 && !el.closest('[inert]'))
    const first = items[0]
    const last = items[items.length - 1]
    if (!first || !last) return
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }

  const handleQuote = (event: MouseEvent<HTMLElement>) => {
    // Com o menu aberto, "Consultoria" fecha e navega (como no painel do menu); fechado, é link comum.
    if (!menuOpen) return
    event.preventDefault()
    navigateTo(SECTION_IDS.contact)
  }

  return (
    <header
      data-menu-open={menuOpen}
      className="fixed inset-x-0 top-3 z-50 lg:top-6"
    >
      {/* Fundo escurecido (mobile): fora do painel, para o vidro continuar desfocando-o por trás. */}
      <div
        aria-hidden="true"
        onClick={closeAndRestoreFocus}
        className="menu-scrim fixed inset-0 bg-ground/(--opacity-scrim) lg:hidden"
      />
      <Container>
        <div
          ref={panelRef}
          role={menuOpen ? 'dialog' : undefined}
          aria-modal={menuOpen || undefined}
          aria-label={menuOpen ? 'Menu' : undefined}
          onKeyDown={handleKeyDown}
          className="relative rounded-panel border border-line glass menu-panel max-lg:overflow-hidden lg:rounded-pill"
        >
          <div className="flex items-center justify-between py-1.5 pr-1.5 pl-4 lg:py-2 lg:pr-2 lg:pl-5">
            {/* aberto, o logo não é clicável (como era na barra do painel do menu) */}
            <a href="#topo" aria-label="Amplyon, início" inert={menuOpen}>
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
              {/* abaixo de 360 px o "Consultoria" só aparece com o menu aberto */}
              <span
                className={cn('hidden xs:block lg:hidden', menuOpen && 'block')}
              >
                <Button
                  href={`#${SECTION_IDS.contact}`}
                  size="sm"
                  onClick={handleQuote}
                >
                  Consultoria
                </Button>
              </span>
              <span className="hidden lg:block">
                <Button href={`#${SECTION_IDS.contact}`}>
                  Quero minha consultoria
                </Button>
              </span>
              <IconButton
                ref={menuButtonRef}
                label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
                expanded={menuOpen}
                controls="mobile-menu"
                onClick={() =>
                  menuOpen ? closeAndRestoreFocus() : onMenuOpenChange(true)
                }
                icon={
                  <>
                    {/* fundo do estado aberto; some no hover para manter o hover do IconButton */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 rounded-pill bg-amp-soft menu-toggle-fill group-hover:opacity-0 group-hover:duration-(--duration-control) group-hover:ease-out"
                    />
                    <MenuToggleIcon />
                  </>
                }
                className="group lg:hidden"
              />
            </div>
          </div>

          <MobileMenu
            open={menuOpen}
            onClose={closeAndRestoreFocus}
            onNavigate={navigateTo}
          />
        </div>
      </Container>
    </header>
  )
}
