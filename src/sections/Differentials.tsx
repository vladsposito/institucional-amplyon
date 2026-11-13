import { Check, X } from 'lucide-react'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { DIFFERENTIALS, DIFFERENTIALS_INTRO } from '@/lib/content'
import { SECTION_IDS } from '@/lib/nav'
import { cn } from '@/lib/cn'

const COLUMNS =
  'lg:grid lg:grid-cols-[minmax(0,var(--compare-col))_minmax(0,1fr)] lg:gap-12'

/**
 * Diferenciais. Mobile: texto riscado + cartão teal. Desktop: tabela "Em geral" × "Com a Amplyon".
 * (Faixa clara "mist" do design; não há modo claro.)
 */
export function Differentials() {
  const lastIndex = DIFFERENTIALS.length - 1
  return (
    <section
      id={SECTION_IDS.differentials}
      aria-labelledby="differentials-title"
      className="scroll-mt-(--height-topbar-mobile) bg-mist py-14 text-on-amp lg:scroll-mt-(--height-topbar) lg:py-28"
    >
      <Container>
        <SectionHeading
          id="differentials-title"
          title={DIFFERENTIALS_INTRO.title}
          description={DIFFERENTIALS_INTRO.description}
          tone="light"
        />

        <div
          aria-hidden="true"
          className={cn('mt-14 hidden pb-4 type-label text-pine', COLUMNS)}
        >
          <span>Em geral</span>
          <span>Com a Amplyon</span>
        </div>

        <ul className="mt-7 flex flex-col gap-8 lg:mt-0 lg:gap-0">
          {DIFFERENTIALS.map((item, index) => (
            <li
              key={item.title}
              className={cn(
                'flex flex-col gap-2.5 lg:border-t lg:border-sage lg:py-7',
                COLUMNS,
                index === lastIndex && 'lg:border-b',
              )}
            >
              <p className="flex gap-3.5 type-body-xl-mobile text-pine lg:pt-1.5 lg:type-body-xl">
                <X
                  size={24}
                  strokeWidth={1.667}
                  className="hidden shrink-0 lg:block"
                  aria-hidden="true"
                />
                <span>
                  <span className="sr-only">Em geral: </span>
                  <span className="max-lg:line-through">{item.usual}</span>
                </span>
              </p>

              <div className="grid grid-cols-[auto_1fr] gap-x-2.5 gap-y-2 rounded-md bg-teal p-5 text-ink lg:gap-x-4 lg:gap-y-1.5 lg:bg-transparent lg:p-0 lg:text-on-amp">
                <span className="grid size-7 place-items-center self-center rounded-pill bg-mint text-on-amp lg:size-8 lg:self-start lg:bg-teal lg:text-ink">
                  <Check className="size-4 lg:size-4.5" aria-hidden="true" />
                </span>
                <h3 className="type-display-sm-mobile lg:type-display-sm">
                  <span className="sr-only">Com a Amplyon: </span>
                  {item.title}
                </h3>
                <p className="col-span-2 type-body lg:col-span-1 lg:col-start-2 lg:max-w-130">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
