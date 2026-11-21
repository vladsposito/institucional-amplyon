import { Badge } from '@/components/Badge'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { PROCESS_INTRO, PROCESS_STEPS } from '@/lib/content'
import { SECTION_IDS } from '@/lib/nav'
import { cn } from '@/lib/cn'
import { useTrackMotion } from '@/lib/useTrackMotion'

/**
 * "O que muda no seu negócio" (link "Resultado" do header): trilha de 4 etapas, cada uma seguida
 * de uma pílula amp. Horizontal no desktop, vertical no mobile. A linha termina no centro da
 * última pílula.
 */
export function Process() {
  const lastIndex = PROCESS_STEPS.length - 1
  const lastPill = PROCESS_STEPS[lastIndex]?.pill
  const { listRef, bandRef, lineRef, state } = useTrackMotion()
  return (
    <section
      id={SECTION_IDS.process}
      aria-labelledby="process-title"
      className="scroll-mt-(--height-topbar-mobile) border-y border-line bg-surface py-14 lg:scroll-mt-(--height-topbar) lg:py-28"
    >
      <Container>
        <SectionHeading
          id="process-title"
          title={PROCESS_INTRO.title}
          description={PROCESS_INTRO.description}
        />

        <ol
          ref={listRef}
          data-track-state={state}
          className="relative mt-8 grid lg:mt-14 lg:grid-cols-4 lg:gap-6"
        >
          {/*
            Faixa do trilho (desktop), por construção: uma cópia invisível da última pílula ocupa as
            duas colunas max-content do fim, e o grid divide a largura dela igualmente entre as duas.
            A linha ocupa a 1ª e a 2ª coluna, então termina exatamente no centro da pílula.
          */}
          <span
            ref={bandRef}
            aria-hidden="true"
            className="absolute inset-x-0 top-0 hidden h-14 grid-cols-[1fr_max-content_max-content] items-center lg:grid"
          >
            <span
              ref={lineRef}
              className="col-start-1 col-end-3 row-start-1 h-0.5 track-line-motion rounded-pill bg-line-strong"
            />
            <Badge className="invisible col-start-2 col-end-4 row-start-1">
              {lastPill}
            </Badge>
          </span>
          {PROCESS_STEPS.map((step, index) => {
            const isLast = index === lastIndex
            return (
              <li
                key={step.title}
                data-track-segment=""
                className={cn(
                  'relative grid track-segment-motion-mobile grid-cols-[auto_1fr] gap-x-4 before:absolute before:top-5 before:left-4.75 before:w-0.5 before:bg-line-strong before:content-[""] lg:block lg:before:hidden',
                  // trilho vertical (mobile): do centro do círculo ao fim do item; no último, até o
                  // centro da pílula final (--track-end-mobile)
                  isLast
                    ? 'before:bottom-(--track-end-mobile)'
                    : 'before:bottom-0',
                )}
              >
                {/*
                  data-track-anchor: borda esquerda medida no disparo do motion (wrapper sem scale).
                  data-track-anchor-mobile: no mobile mede a borda de cima do primeiro filho.
                */}
                <div
                  data-track-anchor
                  data-track-anchor-mobile="circle"
                  className="relative z-10 lg:flex lg:h-14 lg:items-center"
                >
                  <span
                    className={cn(
                      'grid size-10 track-circle-motion track-circle-motion-mobile place-items-center rounded-pill border-2 border-sage type-step-mobile lg:size-14 lg:type-metric',
                      isLast
                        ? 'bg-mint text-on-amp'
                        : 'bg-surface text-ink lg:bg-ground',
                    )}
                  >
                    {index + 1}
                  </span>
                  {/* pílula (desktop): 1–3 pela borda esquerda em círculo + 140; a última presa à direita */}
                  <span
                    data-track-anchor
                    className={cn(
                      'absolute top-3.5 hidden lg:block',
                      isLast ? 'right-0' : 'left-(--seal-left)',
                    )}
                  >
                    <Badge className="track-seal-motion">{step.pill}</Badge>
                  </span>
                </div>

                <div className="flex flex-col gap-2 pt-1.5 lg:mt-8 lg:gap-2.5 lg:p-0">
                  <h3 className="type-heading-mobile text-ink lg:type-heading">
                    {step.title}
                  </h3>
                  <p className="type-body text-ink-muted">{step.description}</p>
                </div>

                {/* pílula (mobile): sobre a linha, depois da etapa; na última a linha termina no centro dela */}
                <div
                  data-track-anchor-mobile="seal"
                  data-track-end-mobile={isLast ? '' : undefined}
                  className="relative z-10 col-span-2 py-5 lg:hidden"
                >
                  <Badge size="sm" className="track-seal-motion-mobile">
                    {step.pill}
                  </Badge>
                </div>
              </li>
            )
          })}
        </ol>
      </Container>
    </section>
  )
}
