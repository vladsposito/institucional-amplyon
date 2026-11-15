import { useEffect, useRef } from 'react'
import type { CSSProperties, MouseEvent } from 'react'
import { ArrowRight } from 'lucide-react'
import { NAV_ITEMS } from '@/lib/nav'

type MobileMenuProps = {
  open: boolean
  onClose: () => void
  onNavigate: (id: string) => void
}

/**
 * Links do menu mobile, dentro do painel único do header (que cresce ao abrir).
 * Fica sempre montado: abrir/fechar é só estado (data-menu-open no <header>) + transições CSS.
 * Fechado, o bloco fica com visibility hidden (sem foco nem toque) depois da transição.
 */
export function MobileMenu({ open, onClose, onNavigate }: MobileMenuProps) {
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    // preventScroll: o bloco ainda está crescendo (0fr); sem isso o navegador rolaria o bloco
    // por dentro para mostrar o link e a lista entraria deslocada para cima.
    navRef.current
      ?.querySelector<HTMLElement>('a')
      ?.focus({ preventScroll: true })
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  // Rolar com o menu aberto fecha o menu (a página fica travada só enquanto ele está visível).
  // Efeito separado: onClose muda a cada render e não pode refazer o foco inicial acima.
  useEffect(() => {
    if (!open) return
    let startY: number | null = null
    const onWheel = (event: WheelEvent) => {
      if (event.deltaY !== 0) onClose()
    }
    const onTouchStart = (event: TouchEvent) => {
      startY = event.touches[0]?.clientY ?? null
    }
    const onTouchMove = (event: TouchEvent) => {
      const y = event.touches[0]?.clientY
      // limiar evita que um toque simples num link feche o menu
      if (startY !== null && y !== undefined && Math.abs(y - startY) > 10) {
        startY = null
        onClose()
      }
    }
    window.addEventListener('wheel', onWheel, { passive: true })
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: true })
    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
    }
  }, [open, onClose])

  const handleLink = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault()
    onNavigate(id)
  }

  return (
    <div id="mobile-menu" className="menu-links lg:hidden">
      <div className="min-h-0 overflow-hidden">
        <nav ref={navRef} aria-label="Principal">
          <ul className="flex flex-col gap-0.5 px-1.5 pt-1.5 pb-2">
            {NAV_ITEMS.map((item, index) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(event) => handleLink(event, item.id)}
                  style={{ '--i': index } as CSSProperties}
                  className="flex menu-link items-center justify-between rounded-pill py-3.5 pr-3.5 pl-4 type-title text-ink"
                >
                  {item.label}
                  <ArrowRight
                    size={20}
                    strokeWidth={2}
                    className="text-sage"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
