import type { ReactNode } from 'react'

/**
 * Rabisco amarelo desenhado à mão sob o destaque do hero (versão final, opção A).
 * Fica no fluxo, como no Figma: o texto sobrepõe o rabisco por uma margem negativa.
 * Paths exportados do Figma (16:53 desktop, 17:53 mobile); só a cor virou currentColor.
 */
export function Scribble({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex flex-col text-amp">
      <span className="-mb-(--scribble-overlap-mobile) text-ink lg:-mb-(--scribble-overlap-desktop)">
        {children}
      </span>
      <svg
        aria-hidden="true"
        focusable="false"
        className="block h-(--scribble-h-mobile) w-full overflow-visible lg:hidden"
        viewBox="0 0 300 16"
        preserveAspectRatio="none"
        fill="none"
      >
        {/* Motion mobile (docs/motion/hero-mobile-referencia.html): mesmo desenho e relógio do desktop. */}
        <path
          d="M3 10C38 3 74 14 112 7C150 2.38419e-07 190 2 228 9C266 16 276 12 297 5"
          pathLength={1}
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          className="motion-safe:scribble-draw"
        />
      </svg>
      <svg
        aria-hidden="true"
        focusable="false"
        className="hidden h-(--scribble-h-desktop) w-full overflow-visible lg:block"
        viewBox="0 0 316 14"
        preserveAspectRatio="none"
        fill="none"
      >
        {/* Motion 4 (docs/motion/rabisco-referencia.html): desenhado como caneta no relógio da escada. */}
        <path
          d="M3.16 8.75C40.0267 2.625 77.9467 12.25 117.973 6.125C158 4.76837e-07 200.133 1.75 240.16 7.875C280.187 14 290.72 10.5 312.84 4.375"
          pathLength={1}
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          className="motion-safe:scribble-draw"
        />
      </svg>
    </span>
  )
}
