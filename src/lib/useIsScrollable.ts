import { useEffect, useState, type RefObject } from 'react'

/** true quando o conteúdo do elemento é mais largo que ele (rolagem horizontal possível). */
export function useIsScrollable(ref: RefObject<HTMLElement | null>) {
  const [scrollable, setScrollable] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const update = () => setScrollable(el.scrollWidth > el.clientWidth)
    update()
    const observer = new ResizeObserver(update)
    observer.observe(el)
    if (el.firstElementChild) observer.observe(el.firstElementChild)
    return () => observer.disconnect()
  }, [ref])

  return scrollable
}
