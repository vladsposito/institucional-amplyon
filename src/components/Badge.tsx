import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type BadgeProps = {
  size?: 'md' | 'sm'
  className?: string
  children: ReactNode
}

/**
 * Pílula amp da trilha ("Procura", "Velocidade"…). `sm` no mobile.
 * A altura do `sm` entra no token --badge-sm-h (index.css): mudou o padding, muda lá também.
 */
export function Badge({ size = 'md', className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex rounded-pill bg-amp type-label whitespace-nowrap text-on-amp',
        size === 'md' ? 'px-3 py-1.5' : 'px-2.5 py-1.25',
        className,
      )}
    >
      {children}
    </span>
  )
}
