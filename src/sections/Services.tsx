import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { SECTION_IDS } from '@/lib/nav'
import { SERVICES_INTRO, SERVICE_GROUPS } from '@/lib/content'
import { cn } from '@/lib/cn'

function PlusMark({ className }: { className: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'absolute z-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-pill bg-amp text-on-amp',
        className,
      )}
    >
      +
    </span>
  )
}

export function Services() {
  return (
    <section
      id={SECTION_IDS.services}
      aria-labelledby="services-title"
      className="scroll-mt-(--height-topbar-mobile) bg-ground py-14 lg:scroll-mt-(--height-topbar) lg:py-28"
    >
      <Container>
        <SectionHeading
          id="services-title"
          title={SERVICES_INTRO.title}
          description={SERVICES_INTRO.description}
        />

        <div className="relative mt-8 grid gap-4 lg:mt-14 lg:grid-cols-2 lg:items-start">
          {SERVICE_GROUPS.map((group, index) => {
            const isCode = index === 0
            return (
              <div
                key={group.label}
                className={cn(
                  'relative flex flex-col gap-1 rounded-md px-6 pt-6 pb-3 lg:gap-2 lg:p-12',
                  isCode
                    ? 'bg-teal text-ink lg:mb-16'
                    : 'bg-mint text-on-amp lg:mt-16',
                )}
              >
                {!isCode && (
                  <PlusMark className="-top-2 left-1/2 grid size-16 type-display-mobile lg:hidden" />
                )}
                <h3 className={cn('type-label', !isCode && 'text-pine')}>
                  {group.label}
                </h3>
                <ul className="flex flex-col gap-1 lg:gap-2">
                  {group.items.map((item, itemIndex) => (
                    <li
                      key={item.title}
                      className={cn(
                        'flex flex-col gap-1.5 py-4 lg:py-5',
                        itemIndex > 0 && 'border-t border-sage',
                      )}
                    >
                      <p className="type-heading-mobile lg:type-heading">
                        {item.title}
                      </p>
                      <p className="type-body lg:max-w-100">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
          <PlusMark className="top-1/2 left-1/2 hidden size-21 type-display lg:grid" />
        </div>

        <p className="mt-8 max-w-130 type-body text-ink-muted lg:mt-14">
          {SERVICES_INTRO.footnote}
        </p>
      </Container>
    </section>
  )
}
