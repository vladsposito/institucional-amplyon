import type { ElementType, ReactNode } from 'react'
import { cn } from '@/lib/cn'

type ContainerProps = {
  as?: ElementType
  className?: string
  children: ReactNode
}

/** Conteúdo de 1160 no desktop; coluna de 640 abaixo de lg. */
export function Container({
  as: Tag = 'div',
  className,
  children,
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        'mx-auto w-full max-w-(--container-column) px-(--gutter) lg:max-w-(--container-page)',
        className,
      )}
    >
      {children}
    </Tag>
  )
}
