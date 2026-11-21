import { cn } from '@/lib/cn'

type SectionHeadingProps = {
  id: string
  title: string
  description?: string
  tone?: 'dark' | 'light'
  /** Largura máxima do bloco (o `cn` só concatena, então a largura não vai por className). */
  widthClassName?: 'max-w-205' | 'max-w-190'
}

export function SectionHeading({
  id,
  title,
  description,
  tone = 'dark',
  widthClassName = 'max-w-205',
}: SectionHeadingProps) {
  return (
    <div className={cn('flex flex-col gap-3 lg:gap-4', widthClassName)}>
      {/* tabIndex -1: o Header foca o h2 da seção de destino ao navegar (Header.tsx). */}
      <h2
        id={id}
        tabIndex={-1}
        className={cn(
          'type-display-mobile lg:type-display',
          tone === 'dark' ? 'text-ink' : 'text-on-amp',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'type-body lg:max-w-135',
            tone === 'dark' ? 'text-ink-muted' : 'text-on-amp',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
