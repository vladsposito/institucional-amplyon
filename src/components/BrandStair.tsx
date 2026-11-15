import { useId, type CSSProperties } from 'react'
import { cn } from '@/lib/cn'
import { StairArcs } from '@/components/StairArcs'

type BrandStairProps = {
  variant: 'desktop' | 'mobile'
  className?: string
}

/**
 * Geometria desktop em unidades do viewBox (Figma 16:59, 1162 x 320), igual à referência de motion
 * docs/motion/escada-referencia.html. Como tudo está no viewBox, a escada escala por igual.
 */
const VIEWBOX_W = 1162
const VIEWBOX_H = 320
const BAR_W = 280
const BAR_RADIUS = 14
/** Degrau 14 mais alto que o necessário: os cantos de baixo ficam fora do recorte e a base fica reta. */
const BAR_BLEED = 14

const DESKTOP_BARS = [
  { fill: 'fill-pine', x: 0, y: 230, h: 90 },
  { fill: 'fill-teal', x: 294, y: 160, h: 160 },
  { fill: 'fill-sage', x: 588, y: 80, h: 240 },
  { fill: 'fill-mint', x: 882, y: 0, h: 320 },
]

/** Arcos do mint (Figma 16:64–67): raios e traço do desenho atual, centrados no canto superior direito. */
const ARC_RADII = [25, 59, 93, 127]
const ARC_STROKE = 10

const MOBILE_BARS = [
  { color: 'bg-pine', ratio: 'aspect-(--stair-ratio-m-1)' },
  { color: 'bg-teal', ratio: 'aspect-(--stair-ratio-m-2)' },
  { color: 'bg-sage', ratio: 'aspect-(--stair-ratio-m-3)' },
  { color: 'bg-mint', ratio: 'aspect-(--stair-ratio-m-4)' },
]

/** Variáveis lidas pelos utilitários stair-rise / stair-arc-grow (índice e deslocamento inicial). */
const motionVars = (vars: Record<string, string | number>) =>
  vars as CSSProperties

/**
 * "Escada da marca": 4 barras ascendentes pine → teal → sage → mint.
 * A largura da escada vem da altura disponível na primeira tela (--stair-w / --stair-w-m):
 * em telas baixas ela encolhe por igual (presa à direita no desktop, centralizada no mobile).
 * Desktop: SVG com motion de entrada (opção A, "Subida firme"); estado base = escada pronta.
 */
export function BrandStair({ variant, className }: BrandStairProps) {
  const clipId = useId()

  if (variant === 'desktop') {
    const mint = DESKTOP_BARS[DESKTOP_BARS.length - 1]
    const corner = VIEWBOX_W
    return (
      <div aria-hidden="true" className={className}>
        <svg
          focusable="false"
          className="ml-auto block h-auto w-(--stair-w)"
          viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`}
        >
          <defs>
            <clipPath id={clipId}>
              <rect
                x={mint.x}
                y={mint.y}
                width={BAR_W}
                height={mint.h + BAR_BLEED}
                rx={BAR_RADIUS}
              />
            </clipPath>
          </defs>
          {DESKTOP_BARS.map((bar, i) => (
            <g
              key={bar.fill}
              className="motion-safe:stair-rise"
              style={motionVars({ '--i': i, '--h': `${bar.h + BAR_BLEED}px` })}
            >
              <rect
                className={bar.fill}
                x={bar.x}
                y={bar.y}
                width={BAR_W}
                height={bar.h + BAR_BLEED}
                rx={BAR_RADIUS}
              />
              {bar === mint && (
                <g clipPath={`url(#${clipId})`}>
                  {ARC_RADII.map((r, j) => (
                    <path
                      key={r}
                      className="origin-[1162px_0] fill-none stroke-ground [transform-box:view-box] motion-safe:stair-arc-grow"
                      style={motionVars({ '--j': j })}
                      strokeWidth={ARC_STROKE}
                      d={`M${corner - r} 0A${r} ${r} 0 0 0 ${corner} ${r}`}
                    />
                  ))}
                </g>
              )}
            </g>
          ))}
        </svg>
      </div>
    )
  }

  return (
    <div aria-hidden="true" className={className}>
      <div className="mx-auto flex w-(--stair-w-m) items-end gap-(--stair-gap-mobile)">
        {MOBILE_BARS.map((bar) => (
          <div
            key={bar.color}
            className={cn(
              'relative min-w-0 flex-1 overflow-hidden rounded-t-bar-mobile',
              bar.color,
              bar.ratio,
            )}
          >
            {bar.color === 'bg-mint' && <StairArcs />}
          </div>
        ))}
      </div>
    </div>
  )
}
