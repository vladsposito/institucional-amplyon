import { cn } from '@/lib/cn'

type LogoProps = {
  size?: 'md' | 'sm'
  className?: string
}

const BARS = [
  { height: 'h-(--logo-bar-h-1)', color: 'bg-pine' },
  { height: 'h-(--logo-bar-h-2)', color: 'bg-teal' },
  { height: 'h-(--logo-bar-h-3)', color: 'bg-sage' },
  { height: 'h-(--logo-bar-h-4)', color: 'bg-mint' },
]

/** Logo: escada de 4 barras + "Amplyon" em Syne 800 (única peça do site que usa Syne). */
export function Logo({ size = 'md', className }: LogoProps) {
  return (
    <span
      className={cn(
        'inline-flex items-end gap-(--logo-gap) text-ink',
        size === 'md' ? 'type-logo' : 'type-logo-sm',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="flex items-end gap-(--logo-bar-gap) pb-(--logo-symbol-pb)"
      >
        {BARS.map((bar) => (
          <span
            key={bar.color}
            className={cn(
              'w-(--logo-bar-w) rounded-(--logo-bar-radius)',
              bar.height,
              bar.color,
            )}
          />
        ))}
      </span>
      <span>Amplyon</span>
    </span>
  )
}
