import { useEffect, useRef } from 'react'
import type { KeyboardEvent as ReactKeyboardEvent, MouseEvent } from 'react'
import { ArrowRight, X } from 'lucide-react'
import { Button } from '@/components/Button'
import { IconButton } from '@/components/IconButton'
import { Logo } from '@/components/Logo'
import { NAV_ITEMS, SECTION_IDS } from '@/lib/nav'

type MobileMenuProps = {
  open: boolean
  onClose: () => void
  onNavigate: (id: string) => void
}

const FOCUSABLE = 'a[href], button:not([disabled])'

/** Painel arredondado e translúcido do menu mobile, com overlay escurecido. */
export function MobileMenu({ open, onClose, onNavigate }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    panelRef.current?.querySelector<HTMLElement>('nav a')?.focus()
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

  if (!open) return null

  const handleKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      event.stopPropagation()
      onClose()
      return
    }
    if (event.key !== 'Tab' || !panelRef.current) return
    const items = Array.from(
      panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE),
    )
    const first = items[0]
    const last = items[items.length - 1]
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }

  const handleLink = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault()
    onNavigate(id)
  }

  return (
    <div className="fixed inset-0 z-60 lg:hidden" onKeyDown={handleKeyDown}>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-ground/(--opacity-scrim)"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className="absolute inset-x-(--gutter) top-3 mx-auto max-w-(--max-w-column) overflow-hidden rounded-panel border border-line glass"
      >
        <div className="flex items-center justify-between py-1.5 pr-1.5 pl-4">
          <Logo size="sm" />
          <div className="flex items-center gap-1.5">
            <Button
              href={`#${SECTION_IDS.contact}`}
              size="sm"
              onClick={(event) => {
                event.preventDefault()
                onNavigate(SECTION_IDS.contact)
              }}
            >
              Orçamento
            </Button>
            <IconButton
              label="Fechar menu"
              onClick={onClose}
              icon={<X size={20} strokeWidth={2} aria-hidden="true" />}
              className="bg-amp-soft"
            />
          </div>
        </div>
        <nav aria-label="Principal">
          <ul className="flex flex-col gap-0.5 px-1.5 pt-1.5 pb-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(event) => handleLink(event, item.id)}
                  className="flex items-center justify-between rounded-pill py-3.5 pr-3.5 pl-4 type-title text-ink"
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
