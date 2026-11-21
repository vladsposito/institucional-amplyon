import { BrandStair } from '@/components/BrandStair'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Scribble } from '@/components/Scribble'
import { SECTION_IDS } from '@/lib/nav'

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-ground lg:min-h-(--hero-h)"
    >
      {/* Padding superior e gaps diminuem em telas baixas (tokens --hero-* em index.css). */}
      <Container className="flex flex-col items-center gap-(--hero-gap-m) pt-(--hero-pt-m) pb-10 text-center lg:items-start lg:gap-7 lg:pt-(--hero-pt) lg:pb-0 lg:text-left">
        {/*
          Um único h1; as quebras mudam por breakpoint (Figma 71:52 desktop, 71:254 mobile).
          Desktop: "Seu concorrente vende / mais que você. / E ele nem é melhor."
          Mobile: "Seu concorrente / vende mais que / você. E ele / nem é melhor."
          Há um espaço antes de cada <br> para a leitura contínua. "E ele" + rabisco: no mobile
          `contents` (fica no fluxo); no desktop `inline-flex`, que descarta o espaço e usa o gap de 18.
        */}
        <h1
          id="hero-title"
          className="type-display-xl-mobile whitespace-nowrap text-ink lg:type-display-xl"
        >
          Seu concorrente <br className="lg:hidden" />
          vende <br className="hidden lg:inline" />
          mais que <br className="lg:hidden" />
          você. <br className="hidden lg:inline" />
          <span className="contents lg:inline-flex lg:gap-(--gap-title-line3-desktop)">
            E ele <br className="lg:hidden" />
            <Scribble>nem é melhor.</Scribble>
          </span>
        </h1>

        {/* Mobile: descrição menor (16/24) para sobrar altura para a escada na primeira tela. */}
        <p className="max-w-130 type-body-lg-mobile text-ink-muted lg:type-body-lg">
          Anúncio que gera demanda, sistema que organiza sua empresa e IA que
          atende seu cliente na hora. Venda mais, venda mais rápido e aumente
          seu faturamento.
        </p>

        {/* Mobile: escada entre o texto e os botões, de ponta a ponta da tela. */}
        <BrandStair
          variant="mobile"
          className="-mx-(--gutter) w-[calc(100%+2*var(--gutter))] md:mx-0 md:w-full lg:hidden"
        />

        <div className="flex w-full flex-col gap-3 lg:w-auto lg:flex-row">
          <Button
            href={`#${SECTION_IDS.contact}`}
            fullWidth
            className="lg:w-auto"
          >
            Quero uma consultoria
          </Button>
          <Button
            href={`#${SECTION_IDS.services}`}
            variant="secondary"
            fullWidth
            className="lg:w-auto"
          >
            Ver o que a gente faz
          </Button>
        </div>
      </Container>

      {/* Desktop: escada ancorada na base do hero. Decorativa: não pode capturar o ponteiro dos botões. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden lg:block">
        <Container>
          <BrandStair variant="desktop" />
        </Container>
      </div>
    </section>
  )
}
