import type { MouseEventHandler, ReactNode } from 'react'
import { cn } from '@/lib/cn'

type ButtonProps = {
  variant?: 'primary' | 'secondary'
  size?: 'md' | 'sm'
  href?: string
  fullWidth?: boolean
  /** Link externo: abre em nova aba (com aviso para leitor de tela). Só vale com `href`. */
  external?: boolean
  onClick?: MouseEventHandler<HTMLElement>
  className?: string
  children: ReactNode
}

/**
 * Botão em pílula. O rótulo é centralizado por flex (sem padding vertical).
 * Hover (só com ponteiro real, via `hover:` do Tailwind v4):
 * - primário sobe 2px; uma seta filha com `data-arrow` anda 4px. Pressionado, volta ao lugar.
 * - secundário preenche com mint.
 * Com reduced motion não há deslocamento, só a troca de cor.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  href,
  fullWidth,
  external,
  onClick,
  className,
  children,
}: ButtonProps) {
  const classes = cn(
    'interactive inline-flex items-center justify-center rounded-pill whitespace-nowrap',
    size === 'md'
      ? 'h-(--height-control) px-6 type-button'
      : 'h-(--height-control-sm) px-4 type-button-sm',
    variant === 'primary'
      ? 'bg-amp text-on-amp motion-safe:hover:not-active:-translate-y-0.5 motion-safe:hover:not-active:[&_[data-arrow]]:translate-x-1'
      : 'border border-line-strong text-ink hover:border-mint hover:bg-mint hover:text-on-amp',
    fullWidth && 'w-full',
    className,
  )

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {children}
        {external && <span className="sr-only"> (abre em nova aba)</span>}
      </a>
    )
  }
  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
