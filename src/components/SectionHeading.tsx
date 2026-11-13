import { cn } from '@/lib/cn'

type SectionHeadingProps = {
  id: string
  title: string
  description: string
  tone?: 'dark' | 'light'
}

export function SectionHeading({
  id,
  title,
  description,
  tone = 'dark',
}: SectionHeadingProps) {
  return (
    <div className="flex max-w-205 flex-col gap-3 lg:gap-4">
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
      <p
        className={cn(
          'type-body lg:max-w-135',
          tone === 'dark' ? 'text-ink-muted' : 'text-on-amp',
        )}
      >
        {description}
      </p>
    </div>
  )
}
