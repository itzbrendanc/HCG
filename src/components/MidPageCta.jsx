import Section from './Section.jsx'
import hilltopLogo from '../assets/hilltop-logo.png'

export default function MidPageCta() {
  return (
    <Section className="bg-hcg-night">
      <div className="rounded-3xl bg-black/35 p-6 ring-1 ring-hcg-400/25 shadow-card backdrop-blur sm:p-7">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <img src={hilltopLogo} alt="Hilltop Consulting Group" className="h-12 w-auto opacity-95" />
            <div>
              <div className="text-lg font-semibold tracking-tight text-white">
                Let’s build what’s next—together.
              </div>
              <div className="text-sm text-white/70">
                Whether you’re looking to grow faster, improve operations, or explore new opportunities, HCG is ready to help.
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-hcg-600 px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow"
            >
              Request a Consultation
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}

