import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type BadgeProps = {
  variant?: 'amp' | 'outline'
  size?: 'md' | 'sm'
  className?: string
  children: ReactNode
}

/** Selo em pílula: "seu ok" (amp) e "Repete todo mês" (contorno sage). */
export function Badge({
  variant = 'amp',
  size = 'md',
  className,
  children,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex rounded-pill type-label whitespace-nowrap',
        size === 'md' ? 'px-3 py-1.5' : 'px-2.5 py-1.25',
        variant === 'amp'
          ? 'bg-amp text-on-amp'
          : 'border-(length:--border-badge) border-sage bg-surface text-sage',
        className,
      )}
    >
      {children}
    </span>
  )
}
