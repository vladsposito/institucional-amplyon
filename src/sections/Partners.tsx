import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { PARTNERS, PARTNERS_INTRO } from '@/lib/content'
import { SECTION_IDS } from '@/lib/nav'

type Partner = (typeof PARTNERS)[number]

function PartnerCard({ id, name, role, bio, photo }: Partner) {
  const titleId = `partner-${id}`
  return (
    <article
      aria-labelledby={titleId}
      className="flex h-full flex-col gap-5 rounded-card border border-line bg-surface p-4 lg:flex-row lg:gap-7 lg:p-6"
    >
      {/* Espaço da foto: fica vazio (decorativo) até existir `photo` em content.ts. */}
      <div
        aria-hidden={photo ? undefined : true}
        className="h-(--partner-photo-h-mobile) w-full shrink-0 overflow-hidden rounded-photo bg-line lg:h-(--partner-photo-h) lg:w-(--partner-photo-w)"
      >
        {photo && (
          <img
            src={`${import.meta.env.BASE_URL}${photo}`}
            alt=""
            width={416}
            height={520}
            loading="lazy"
            decoding="async"
            className="size-full object-cover"
          />
        )}
      </div>

      <div className="flex min-w-0 flex-col gap-2.5 lg:flex-1 lg:pt-4">
        <p className="type-label tracking-role text-amp">{role}</p>
        <h3
          id={titleId}
          className="type-display-mobile text-ink lg:type-display-sm"
        >
          {name}
        </h3>
        <p className="type-body text-ink-muted">{bio}</p>
      </div>
    </article>
  )
}

/** Os dois sócios. Desktop: cards lado a lado, mesma altura. Mobile: empilhados, foto em cima. */
export function Partners() {
  return (
    <section
      id={SECTION_IDS.partners}
      aria-labelledby="partners-title"
      className="scroll-mt-(--height-topbar-mobile) bg-ground pt-14 pb-6 lg:scroll-mt-(--height-topbar) lg:pt-28 lg:pb-10"
    >
      <Container>
        <SectionHeading
          id="partners-title"
          title={PARTNERS_INTRO.title}
          description={PARTNERS_INTRO.description}
        />

        <ul className="mt-8 flex flex-col gap-9.25 lg:mt-14 lg:grid lg:grid-cols-2 lg:gap-4">
          {PARTNERS.map((partner) => (
            <li key={partner.id}>
              <PartnerCard {...partner} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
