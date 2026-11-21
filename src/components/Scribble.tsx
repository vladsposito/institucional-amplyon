import type { ReactNode } from 'react'

/**
 * Rabisco amarelo desenhado à mão sob o destaque do hero (versão final, opção A).
 * Fica no fluxo, como no Figma: o texto sobrepõe o rabisco por uma margem negativa.
 * Paths exportados do Figma v3 (71:59 desktop, 437 x 14; 71:262 mobile, 266 x 16), levados para as
 * coordenadas do frame "Rabisco"; só a cor virou currentColor. Traço 5 no desktop e 4 no mobile.
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
        viewBox="0 0 266 16"
        preserveAspectRatio="none"
        fill="none"
      >
        {/* Motion mobile (docs/motion/hero-mobile-referencia.html): mesmo desenho e relógio do desktop. */}
        <path
          d="M2.653 10.001C33.687 3.001 65.607 14.001 99.3 7.001C132.993 0.001 168.46 2.001 202.153 9.001C235.847 16.001 244.713 12.001 263.333 5.001"
          pathLength={1}
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          className="motion-safe:scribble-draw"
        />
      </svg>
      <svg
        aria-hidden="true"
        focusable="false"
        className="hidden h-(--scribble-h-desktop) w-full overflow-visible lg:block"
        viewBox="0 0 437 14"
        preserveAspectRatio="none"
        fill="none"
      >
        {/* Motion 4 (docs/motion/rabisco-referencia.html): desenhado como caneta no relógio da escada. */}
        <path
          d="M4.386 8.751C55.37 2.626 107.81 12.251 163.163 6.126C218.516 0.001 276.783 1.751 332.136 7.876C387.49 14.001 402.056 10.501 432.646 4.376"
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
