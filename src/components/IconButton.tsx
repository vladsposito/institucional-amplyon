import type { MouseEventHandler, ReactNode, Ref } from 'react'
import { cn } from '@/lib/cn'

type IconButtonProps = {
  label: string
  icon: ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement>
  ref?: Ref<HTMLButtonElement>
  expanded?: boolean
  controls?: string
  className?: string
}

/**
 * Botão redondo só com ícone (hambúrguer, fechar). Área de toque ampliada pelo ::before.
 * Hover: fundo surface, cor do ícone mantida.
 */
export function IconButton({
  label,
  icon,
  onClick,
  ref,
  expanded,
  controls,
  className,
}: IconButtonProps) {
  return (
    <button
      ref={ref}
      type="button"
      aria-label={label}
      aria-expanded={expanded}
      aria-controls={controls}
      onClick={onClick}
      className={cn(
        "relative grid size-9 place-items-center rounded-pill text-ink interactive before:absolute before:-inset-1 before:content-[''] hover:bg-surface",
        className,
      )}
    >
      {icon}
    </button>
  )
}
