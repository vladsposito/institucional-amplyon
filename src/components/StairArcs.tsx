import type { CSSProperties } from 'react'

/**
 * Arcos concêntricos no canto superior direito da barra mint do mobile (Figma 17:65–67).
 * (No desktop os arcos ficam dentro do SVG da escada, em BrandStair.)
 * Círculos centrados no canto; o viewBox mostra só o quadrante visível e a barra recorta o excesso.
 * Traço 7, cor on-amp via currentColor.
 * Largura em proporção da barra: quando a escada encolhe, arcos e traço encolhem junto.
 * Motion (docs/motion/hero-mobile-referencia.html): cada círculo cresce a partir do canto
 * (scale 0 → 1, origem no centro do círculo = canto da barra), menor raio primeiro.
 */
const ARC_RADII = [14.5, 36.5, 58.5]

export function StairArcs() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className="absolute top-0 right-0 h-auto w-(--stair-arcs-w-mobile) text-on-amp"
      viewBox="-62 0 62 62"
      fill="none"
      stroke="currentColor"
      strokeWidth="7"
    >
      {ARC_RADII.map((r, j) => (
        <circle
          key={r}
          r={r}
          className="origin-center [transform-box:fill-box] motion-safe:stair-arc-grow"
          style={{ '--j': j } as CSSProperties}
        />
      ))}
    </svg>
  )
}
