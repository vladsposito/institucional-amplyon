import { Badge } from '@/components/Badge'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { PROCESS_INTRO, PROCESS_STEPS } from '@/lib/content'
import { SECTION_IDS } from '@/lib/nav'
import { cn } from '@/lib/cn'

/** "Como um projeto anda": trilha de 4 etapas (horizontal no desktop, vertical no mobile). */
export function Process() {
  const lastIndex = PROCESS_STEPS.length - 1
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

        <ol className="relative mt-8 grid lg:mt-14 lg:grid-cols-4 lg:gap-6">
          {/* Linha única do trilho (desktop), por trás dos círculos e do selo final. */}
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-6.75 hidden h-0.5 bg-line-strong lg:block"
          />
          {PROCESS_STEPS.map((step, index) => {
            const isLast = index === lastIndex
            return (
              <li
                key={step.title}
                className={cn(
                  'relative grid grid-cols-[auto_1fr] gap-x-4 lg:block',
                  // trilho vertical (mobile): do centro do círculo ao fim do item
                  !isLast &&
                    'before:absolute before:top-5 before:bottom-0 before:left-4.75 before:w-0.5 before:bg-line-strong before:content-[""] lg:before:hidden',
                )}
              >
                <div className="relative z-10 lg:flex lg:h-14 lg:items-center">
                  <span
                    className={cn(
                      'grid size-10 place-items-center rounded-pill border-2 border-sage type-step-mobile lg:size-14 lg:type-metric',
                      isLast
                        ? 'bg-mint text-on-amp'
                        : 'bg-surface text-ink lg:bg-ground',
                    )}
                  >
                    {index + 1}
                  </span>
                  {/* selo no ponto médio entre este círculo e o próximo (desktop) */}
                  {!isLast && (
                    <span className="absolute top-3.5 left-(--seal-mid) hidden -translate-x-1/2 lg:block">
                      <Badge>seu ok</Badge>
                    </span>
                  )}
                  {isLast && (
                    <span className="top-3.125 absolute right-0 hidden lg:block">
                      <Badge variant="outline">Repete todo mês</Badge>
                    </span>
                  )}
                </div>

                <div
                  className={cn(
                    'flex flex-col gap-2 pt-1.5 lg:mt-8 lg:gap-2.5 lg:p-0',
                    !isLast && 'pb-2',
                  )}
                >
                  <h3 className="type-heading-mobile text-ink lg:type-heading">
                    {step.title}
                  </h3>
                  <p className="type-body text-ink-muted">{step.description}</p>
                  <div className="flex flex-col gap-1 pt-1.5 lg:pt-2.5">
                    <span className="type-label text-sage">Você recebe</span>
                    <span className="type-title text-mint">{step.receive}</span>
                  </div>
                  {isLast && (
                    <div className="pt-2 lg:hidden">
                      <Badge variant="outline" size="sm">
                        Repete todo mês
                      </Badge>
                    </div>
                  )}
                </div>

                {!isLast && (
                  <div className="relative z-10 col-span-2 py-5 lg:hidden">
                    <Badge size="sm">seu ok</Badge>
                  </div>
                )}
              </li>
            )
          })}
        </ol>
      </Container>
    </section>
  )
}
