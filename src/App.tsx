import { useState } from 'react'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Contact } from '@/sections/Contact'
import { Differentials } from '@/sections/Differentials'
import { Hero } from '@/sections/Hero'
import { Process } from '@/sections/Process'
import { Results } from '@/sections/Results'
import { Services } from '@/sections/Services'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div id="topo">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-60 focus:rounded-pill focus:bg-amp focus:px-4 focus:py-2 focus:type-button focus:text-on-amp"
      >
        Pular para o conteúdo
      </a>
      <Header menuOpen={menuOpen} onMenuOpenChange={setMenuOpen} />
      {/* O topo fixo ocupa espaço no fluxo, como no Figma (90px desktop / 64px mobile). */}
      <div
        aria-hidden="true"
        className="h-(--height-topbar-mobile) lg:h-(--height-topbar)"
      />
      <main id="conteudo" tabIndex={-1} inert={menuOpen}>
        <Hero />
        <Results />
        <Services />
        <Process />
        <Differentials />
        <Contact />
      </main>
      <Footer inert={menuOpen} />
    </div>
  )
}

export default App
