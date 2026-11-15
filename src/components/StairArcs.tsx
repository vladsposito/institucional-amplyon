/**
 * Arcos concêntricos no canto superior direito da barra mint do mobile (Figma 17:65–67).
 * (No desktop os arcos ficam dentro do SVG da escada, em BrandStair.)
 * Círculos centrados no canto; o viewBox mostra só o quadrante visível e a barra recorta o excesso.
 * Traço 7, cor on-amp via currentColor.
 * Largura em proporção da barra: quando a escada encolhe, arcos e traço encolhem junto.
 */
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
      <circle r="14.5" />
      <circle r="36.5" />
      <circle r="58.5" />
    </svg>
  )
}
