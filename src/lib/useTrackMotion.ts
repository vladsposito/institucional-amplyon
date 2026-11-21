import { useEffect, useRef, useState } from 'react'

export type TrackState = 'idle' | 'play'

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'
/** Mesmo valor do token --track-trigger-ratio; só é usado se o token não puder ser lido. */
const FALLBACK_TRIGGER_RATIO = 0.6
/** Mesmo valor do token --track-trigger-margin-mobile; só é usado se o token não puder ser lido. */
const FALLBACK_TRIGGER_MARGIN_MOBILE = '0px 0px -35% 0px'

const clamp01 = (value: number) => Math.min(1, Math.max(0, value))

/** Borda de cima sem o scale do estado inicial: o centro não muda com scale a partir do centro. */
const unscaledTop = (el: Element) => {
  const rect = el.getBoundingClientRect()
  return (
    (rect.top + rect.bottom) / 2 - parseFloat(getComputedStyle(el).height) / 2
  )
}

/**
 * Motion da trilha. Dispara uma vez e grava as frações medidas; os tempos ficam nos tokens do CSS.
 * Desktop (docs/motion/trilha-referencia.html): quando a faixa fica --track-trigger-ratio visível,
 * mede para cada [data-track-anchor] a fração da borda esquerda ao longo da linha (--track-f).
 * A linha vai da borda esquerda da faixa ao centro da última pílula.
 * Mobile (docs/motion/trilha-mobile-referencia.html): quando o topo da lista passa da margem
 * --track-trigger-margin-mobile, mede de cima para baixo. A linha vai do centro do 1º círculo ao
 * centro da última pílula ([data-track-end-mobile]); cada [data-track-anchor-mobile] recebe a fração
 * da borda de cima do primeiro filho e cada segmento (::before de [data-track-segment]) a fração do
 * início e do comprimento.
 * A faixa do desktop tem display none no mobile: é ela que diz qual layout está ativo.
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

    const rootStyle = getComputedStyle(document.documentElement)
    const tokenRatio = parseFloat(
      rootStyle.getPropertyValue('--track-trigger-ratio'),
    )
    const threshold = Number.isFinite(tokenRatio)
      ? tokenRatio
      : FALLBACK_TRIGGER_RATIO
    const marginMobile =
      rootStyle.getPropertyValue('--track-trigger-margin-mobile').trim() ||
      FALLBACK_TRIGGER_MARGIN_MOBILE

    const isDesktopLayout = () => getComputedStyle(band).display !== 'none'

    const measureDesktop = () => {
      // A linha começa na borda esquerda da faixa e termina, por construção, no centro da última
      // pílula. A largura computada é exata (sem arredondar) e não muda com o scaleX(0) inicial.
      const start = band.getBoundingClientRect().left
      const length = parseFloat(getComputedStyle(line).width)
      list
        .querySelectorAll<HTMLElement>('[data-track-anchor]')
        .forEach((anchor) => {
          const x = anchor.getBoundingClientRect().left - start
          anchor.style.setProperty('--track-f', String(clamp01(x / length)))
        })
    }

    const measureMobile = () => {
      const segments = list.querySelectorAll<HTMLElement>(
        '[data-track-segment]',
      )
      const firstSegment = segments[0]
      // fim da linha: centro da última pílula (o scale do estado inicial é a partir do centro)
      const endPill = list.querySelector(
        '[data-track-end-mobile] > :first-child',
      )
      if (!firstSegment || !endPill) return
      const segmentGeometry = (segment: HTMLElement) => {
        const style = getComputedStyle(segment, '::before')
        return {
          top: segment.getBoundingClientRect().top + parseFloat(style.top),
          height: parseFloat(style.height),
        }
      }
      const lineTop = segmentGeometry(firstSegment).top
      const endRect = endPill.getBoundingClientRect()
      const length = (endRect.top + endRect.bottom) / 2 - lineTop
      segments.forEach((segment) => {
        const { top, height } = segmentGeometry(segment)
        segment.style.setProperty(
          '--track-seg-f',
          String((top - lineTop) / length),
        )
        segment.style.setProperty('--track-seg-len-f', String(height / length))
      })
      list
        .querySelectorAll<HTMLElement>('[data-track-anchor-mobile]')
        .forEach((anchor) => {
          const node = anchor.firstElementChild
          if (!node) return
          const fraction = clamp01((unscaledTop(node) - lineTop) / length)
          anchor.style.setProperty('--track-f', String(fraction))
        })
    }

    const observers: IntersectionObserver[] = []
    const play = (measure: () => void) => {
      measure()
      setState('play')
      observers.forEach((observer) => observer.disconnect())
    }

    // Desktop: observa a faixa (display none no mobile, então lá nunca chega ao threshold).
    const desktopObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry || entry.intersectionRatio < threshold) return
        play(measureDesktop)
      },
      { threshold },
    )
    // Mobile: observa a lista inteira; ignora enquanto o layout ativo for o do desktop.
    const mobileObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry?.isIntersecting || isDesktopLayout()) return
        play(measureMobile)
      },
      { threshold: 0, rootMargin: marginMobile },
    )
    observers.push(desktopObserver, mobileObserver)
    desktopObserver.observe(band)
    mobileObserver.observe(list)
    return () => observers.forEach((observer) => observer.disconnect())
  }, [])

  return { listRef, bandRef, lineRef, state }
}
