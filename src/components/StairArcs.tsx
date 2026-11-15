/**
 * Arcos concêntricos no canto superior direito da barra mint (Figma 16:64–67 desktop, 17:65–67 mobile).
 * Círculos centrados no canto; o viewBox mostra só o quadrante visível e a barra recorta o excesso.
 * Traço 10 (desktop) / 7 (mobile), cor on-amp via currentColor.
 * Largura em proporção da barra: quando a escada encolhe, arcos e traço encolhem junto.
 */
export function StairArcs({ variant }: { variant: 'desktop' | 'mobile' }) {
  if (variant === 'desktop') {
    return (
      <svg
        aria-hidden="true"
        focusable="false"
        className="absolute top-0 right-0 h-auto w-(--stair-arcs-w) text-on-amp"
        viewBox="-132 0 132 132"
        fill="none"
        stroke="currentColor"
        strokeWidth="10"
      >
        <circle r="25" />
        <circle r="59" />
        <circle r="93" />
        <circle r="127" />
      </svg>
    )
  }
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
