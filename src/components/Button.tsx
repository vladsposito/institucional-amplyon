import type { MouseEventHandler, ReactNode } from 'react'
import { cn } from '@/lib/cn'

type ButtonProps = {
  variant?: 'primary' | 'secondary'
  size?: 'md' | 'sm'
  href?: string
  fullWidth?: boolean
  onClick?: MouseEventHandler<HTMLElement>
  className?: string
  children: ReactNode
}

/** Botão em pílula. O rótulo é centralizado por flex (sem padding vertical). */
export function Button({
  variant = 'primary',
  size = 'md',
  href,
  fullWidth,
  onClick,
  className,
  children,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center rounded-pill whitespace-nowrap',
    size === 'md'
      ? 'h-(--height-control) px-6 type-button'
      : 'h-(--height-control-sm) px-4 type-button-sm',
    variant === 'primary'
      ? 'bg-amp text-on-amp'
      : 'border border-line-strong text-ink',
    fullWidth && 'w-full',
    className,
  )

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
