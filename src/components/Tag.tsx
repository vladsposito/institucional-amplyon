import type { ReactNode } from 'react'

/** Selo de serviço do kit de componentes (ainda sem uso na página). */
export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-sm bg-amp-soft px-2.5 py-1.5 type-label text-mint">
      {children}
    </span>
  )
}
