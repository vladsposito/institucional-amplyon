import { ChatBubble } from '@/components/ChatBubble'
import { Container } from '@/components/Container'
import { CHAT, CONTACT_COPY } from '@/lib/content'
import { CONTACT, CONTACT_PLACEHOLDERS } from '@/lib/contact'
import { SECTION_IDS } from '@/lib/nav'

const FIELD =
  'rounded-sm border border-dashed border-line-strong bg-ground px-3.5 py-2.5 type-body text-ink-muted'

/** Contato no formato de conversa (chat de exemplo). */
export function Contact() {
  return (
    <section
      id={SECTION_IDS.contact}
      aria-labelledby="contact-title"
      className="scroll-mt-(--height-topbar-mobile) bg-ground py-14 lg:scroll-mt-(--height-topbar) lg:py-28"
    >
      <Container>
        <div className="flex flex-col gap-6 rounded-md bg-chat-mobile p-6 lg:flex-row lg:items-center lg:gap-16 lg:bg-chat-desktop lg:p-16">
          <div className="flex flex-col gap-6 lg:flex-1 lg:gap-5">
            <h2
              id="contact-title"
              tabIndex={-1}
              className="type-display-mobile text-ink lg:type-display"
            >
              {CONTACT_COPY.title}
            </h2>
            <p className="type-body-lg text-ink lg:max-w-110">
              {CONTACT_COPY.description}
            </p>
            <ul className="flex flex-col gap-2 lg:items-start">
              <li className={FIELD}>
                {CONTACT.whatsapp ? (
                  <a href={CONTACT.whatsapp}>{CONTACT.whatsapp}</a>
                ) : (
                  CONTACT_PLACEHOLDERS.whatsapp
                )}
              </li>
              <li className={FIELD}>
                {CONTACT.email ? (
                  <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                ) : (
                  CONTACT_PLACEHOLDERS.email
                )}
              </li>
            </ul>
          </div>

          <div className="lg:w-105 lg:shrink-0">
            <p className="sr-only">Exemplo de conversa</p>
            <ul className="flex flex-col gap-2.5">
              {CHAT.map((message) => (
                <ChatBubble key={message.text} from={message.from}>
                  {message.text}
                </ChatBubble>
              ))}
              <li className="flex justify-end type-label text-on-amp">
                {CONTACT_COPY.caption}
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
