import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { SERVICES, SERVICES_CLOSING, SERVICES_TITLE } from '@/lib/content'
import { SECTION_IDS } from '@/lib/nav'

/**
 * Serviços: 4 cards numerados de mesmo peso. Desktop: grade 2x2 com linhas iguais (auto-rows-fr)
 * e número com largura fixa (títulos alinhados). Mobile: empilhados, número em cima.
 */
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
          title={SERVICES_TITLE}
          widthClassName="max-w-190"
        />

        {/* role="list": o preflight tira o list-style e o VoiceOver/Safari deixaria de anunciar a lista. */}
        <ol
          role="list"
          className="mt-8 flex flex-col gap-4 lg:mt-14 lg:grid lg:auto-rows-fr lg:grid-cols-2"
        >
          {SERVICES.map((service, index) => (
            <li
              key={service.title}
              className="flex flex-col gap-4 rounded-card border border-line bg-surface p-6 lg:min-h-(--service-card-min-h) lg:flex-row lg:gap-8 lg:p-10"
            >
              <span
                aria-hidden="true"
                className="type-service-number-mobile text-amp lg:w-(--service-number-w) lg:shrink-0 lg:type-service-number"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="flex min-w-0 flex-col gap-3 lg:flex-1">
                <h3 className="type-service-title-mobile text-ink lg:type-service-title">
                  {service.title}
                </h3>
                <p className="type-body text-ink-muted">
                  {service.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-8 max-w-205 type-services-closing-mobile text-ink-muted lg:mt-14 lg:type-services-closing">
          {SERVICES_CLOSING.lead}{' '}
          <span className="text-amp">{SERVICES_CLOSING.highlight}</span>
        </p>
      </Container>
    </section>
  )
}
