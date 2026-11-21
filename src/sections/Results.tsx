import { useRef } from 'react'
import { Container } from '@/components/Container'
import { CLIENT_LOGOS, RESULTS_LOGOS_TITLE, RESULTS_STATS } from '@/lib/content'
import { SECTION_IDS } from '@/lib/nav'
import { useIsScrollable } from '@/lib/useIsScrollable'

const FADE =
  'pointer-events-none absolute inset-y-0 w-(--logo-fade-mobile) from-ground to-transparent lg:w-(--logo-fade-w-desktop)'

export function Results() {
  const stripRef = useRef<HTMLDivElement>(null)
  const scrollable = useIsScrollable(stripRef)

  return (
    <section
      id={SECTION_IDS.results}
      aria-label="Resultados"
      className="flex scroll-mt-(--height-topbar-mobile) flex-col gap-10 bg-ground pt-16 pb-14 lg:scroll-mt-(--height-topbar) lg:gap-16 lg:pt-(--results-pt-desktop) lg:pb-(--results-pb-desktop)"
    >
      <div className="flex flex-col items-center gap-5 lg:gap-7">
        <h2 id="results-logos-title" className="type-label text-ink-muted">
          {RESULTS_LOGOS_TITLE}
        </h2>

        {/* Moldura dos fades. O anel de foco fica num ::after por cima deles (a faixa vai de ponta a ponta). */}
        <div className="@container relative w-full has-focus-visible:after:pointer-events-none has-focus-visible:after:absolute has-focus-visible:after:inset-0 has-focus-visible:after:z-10 has-focus-visible:after:outline-2 has-focus-visible:after:-outline-offset-2 has-focus-visible:after:outline-focus">
          {/* Mobile: rola com o dedo, sem barra. Desktop: nunca rola (gap e fade fluidos). */}
          <div
            ref={stripRef}
            role="region"
            aria-label="Logos de clientes"
            tabIndex={scrollable ? 0 : undefined}
            className="scrollbar-none overflow-x-auto overscroll-x-contain focus-visible:outline-none"
          >
            <ul
              aria-labelledby="results-logos-title"
              className="mx-auto flex w-max gap-6 px-(--logo-fade-mobile) lg:w-full lg:justify-center lg:gap-(--logo-gap-desktop) lg:px-(--gutter)"
            >
              {CLIENT_LOGOS.map((logo) => (
                <li key={logo.file} className="shrink-0">
                  <img
                    src={`${import.meta.env.BASE_URL}clientes/${logo.file}`}
                    alt={logo.name}
                    width={96}
                    height={96}
                    loading="lazy"
                    decoding="async"
                    className="size-16 rounded-pill lg:size-(--logo-size-desktop)"
                  />
                </li>
              ))}
            </ul>
          </div>
          <div aria-hidden="true" className={`${FADE} left-0 bg-linear-to-r`} />
          <div
            aria-hidden="true"
            className={`${FADE} right-0 bg-linear-to-l`}
          />
        </div>
      </div>

      <Container>
        <ul
          aria-label="Números da Amplyon"
          className="flex flex-col gap-6 lg:flex-row lg:gap-0"
        >
          {RESULTS_STATS.map((stat) => (
            <li
              key={stat.label}
              className="flex flex-col items-center gap-6 max-lg:not-first:before:block max-lg:not-first:before:h-px max-lg:not-first:before:w-(--stat-divider-w-mobile) max-lg:not-first:before:bg-line lg:h-18 lg:flex-1 lg:justify-center lg:border-line lg:not-first:border-l"
            >
              <div className="flex flex-col items-center gap-1.5 text-center">
                <p className="type-stat whitespace-nowrap text-ink lg:text-(length:--stat-size-desktop)">
                  <span className="text-amp">+</span>
                  {stat.value}
                </p>
                <p className="type-label text-ink-muted">{stat.label}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
