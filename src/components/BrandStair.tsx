import { cn } from '@/lib/cn'
import { StairArcs } from '@/components/StairArcs'

type BrandStairProps = {
  variant: 'desktop' | 'mobile'
  className?: string
}

const DESKTOP_BARS = [
  { color: 'bg-pine', ratio: 'aspect-(--stair-ratio-1)' },
  { color: 'bg-teal', ratio: 'aspect-(--stair-ratio-2)' },
  { color: 'bg-sage', ratio: 'aspect-(--stair-ratio-3)' },
  { color: 'bg-mint', ratio: 'aspect-(--stair-ratio-4)' },
]

const MOBILE_BARS = [
  { color: 'bg-pine', ratio: 'aspect-(--stair-ratio-m-1)' },
  { color: 'bg-teal', ratio: 'aspect-(--stair-ratio-m-2)' },
  { color: 'bg-sage', ratio: 'aspect-(--stair-ratio-m-3)' },
  { color: 'bg-mint', ratio: 'aspect-(--stair-ratio-m-4)' },
]

/**
 * "Escada da marca": 4 barras ascendentes pine → teal → sage → mint.
 * As alturas seguem a largura por aspect-ratio, então o desenho mantém a proporção em qualquer tela.
 * A largura da escada vem da altura disponível na primeira tela (--stair-w / --stair-w-m):
 * em telas baixas ela encolhe por igual (presa à direita no desktop, centralizada no mobile).
 */
export function BrandStair({ variant, className }: BrandStairProps) {
  const bars = variant === 'desktop' ? DESKTOP_BARS : MOBILE_BARS
  return (
    <div aria-hidden="true" className={className}>
      <div
        className={cn(
          'flex items-end',
          variant === 'desktop'
            ? 'ml-auto w-(--stair-w) gap-(--stair-gap)'
            : 'mx-auto w-(--stair-w-m) gap-(--stair-gap-mobile)',
        )}
      >
        {bars.map((bar) => (
          <div
            key={bar.color}
            className={cn(
              'relative min-w-0 flex-1 overflow-hidden',
              variant === 'desktop' ? 'rounded-t-md' : 'rounded-t-bar-mobile',
              bar.color,
              bar.ratio,
            )}
          >
            {bar.color === 'bg-mint' && <StairArcs variant={variant} />}
          </div>
        ))}
      </div>
    </div>
  )
}
