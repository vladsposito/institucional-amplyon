import { useEffect, useRef, useState } from 'react'

export type TrackState = 'idle' | 'play'

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'
/** Mesmo valor do token --track-trigger-ratio; só é usado se o token não puder ser lido. */
const FALLBACK_TRIGGER_RATIO = 0.6

/**
 * Motion da trilha (docs/motion/trilha-referencia.html): dispara uma vez, quando a faixa da trilha
 * fica --track-trigger-ratio visível. No disparo mede, para cada [data-track-anchor], a fração da
 * borda esquerda ao longo da linha e grava em --track-f; os tempos ficam nos tokens do CSS.
 * Com reduced motion não observa (o CSS mostra a trilha pronta).
 */
export function useTrackMotion() {
  const listRef = useRef<HTMLOListElement>(null)
  const bandRef = useRef<HTMLSpanElement>(null)
  const lineRef = useRef<HTMLSpanElement>(null)
  const [state, setState] = useState<TrackState>('idle')

  useEffect(() => {
    const list = listRef.current
    const band = bandRef.current
    const line = lineRef.current
    if (!list || !band || !line) return
    if (window.matchMedia(REDUCED_MOTION_QUERY).matches) return

    const tokenRatio = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue(
        '--track-trigger-ratio',
      ),
    )
    const threshold = Number.isFinite(tokenRatio)
      ? tokenRatio
      : FALLBACK_TRIGGER_RATIO

    const measure = () => {
      // A linha termina, por construção, onde começa o selo-espaçador ao lado dela. Medir por ele
      // dá o comprimento exato (sem arredondar) e não é afetado pelo scaleX(0) do estado inicial.
      const start = band.getBoundingClientRect().left
      const end =
        line.nextElementSibling?.getBoundingClientRect().left ??
        start + line.offsetWidth
      const length = end - start
      list
        .querySelectorAll<HTMLElement>('[data-track-anchor]')
        .forEach((anchor) => {
          const x = anchor.getBoundingClientRect().left - start
          const fraction = Math.min(1, Math.max(0, x / length))
          anchor.style.setProperty('--track-f', String(fraction))
        })
    }

    // A faixa só existe no desktop (display none no mobile), então no mobile nunca dispara.
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry || entry.intersectionRatio < threshold) return
        measure()
        setState('play')
        observer.disconnect()
      },
      { threshold },
    )
    observer.observe(band)
    return () => observer.disconnect()
  }, [])

  return { listRef, bandRef, lineRef, state }
}
