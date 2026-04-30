import Section from './Section.jsx'
import axiomStrategyLogo from '../assets/axiom-strategy-logo.png'
import MagneticButton from './MagneticButton.jsx'
import CinematicWordWall from './CinematicWordWall.jsx'

export default function MidPageCta() {
  return (
    <Section className="bg-hcg-night bg-hcg-beams">
      <div className="grid items-center gap-6 lg:grid-cols-12">
        <div className="lg:col-span-9">
          <CinematicWordWall />
        </div>
        <div className="lg:col-span-3">
          <div className="rounded-3xl bg-black/30 p-6 ring-1 ring-white/10 backdrop-blur shadow-soft">
            <div className="flex items-center gap-3">
              <img
                src={axiomStrategyLogo}
                alt="Axiom Strategy"
                className="h-9 w-auto opacity-100 sm:h-10"
                style={{ filter: 'brightness(1.12) contrast(1.06) saturate(1.02)' }}
              />
              <div>
                <div className="text-sm font-semibold tracking-tight text-white/90">Axiom Strategy</div>
                <div className="text-xs text-white/55">Next move</div>
              </div>
            </div>
            <div className="mt-5 text-lg font-semibold leading-snug tracking-tight text-white">
              Let’s build what’s next—together.
            </div>
            <div className="mt-3 text-sm text-white/70">
              Request a consultation and we’ll route you to the right engagement path.
            </div>
            <div className="mt-5">
              <MagneticButton
                as="a"
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-xl bg-hcg-600 px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow"
              >
                Request a Consultation
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
