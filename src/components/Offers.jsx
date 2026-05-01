import { motion, useReducedMotion } from 'framer-motion'
import Section from './Section.jsx'
import axiomStrategyLogo from '../assets/axiom-strategy-logo.png'
import MagneticButton from './MagneticButton.jsx'

const approach = [
  {
    name: 'Diagnose with rigor',
    tagline: 'Find root causes, not surface symptoms.',
    points: ['Current-state assessment', 'Data and stakeholder alignment', 'Clear problem framing'],
    deliverable: 'Diagnostic summary + priorities',
    featured: true,
  },
  {
    name: 'Design for execution',
    tagline: 'Solutions that ship under real constraints.',
    points: ['Target-state design', 'Tradeoffs and options', 'Delivery planning'],
    deliverable: 'Solution blueprint + roadmap',
    featured: false,
  },
  {
    name: 'Deliver measurable outcomes',
    tagline: 'Cadence, clarity, and accountability.',
    points: ['Implementation support', 'Milestones and metrics', 'Stakeholder communication'],
    deliverable: 'Shipped work + KPI tracking',
    featured: false,
  },
]

export default function Offers() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <>
      <Section
        id="approach-method"
        eyebrow="Approach"
        title="A disciplined method built to drive outcomes"
        subtitle="We don’t operate like a traditional agency. Every engagement is structured around identifying leverage, executing quickly, and delivering measurable outcomes. Clear thinking. Focused execution. Real results."
        className="bg-hcg-night"
      >
        <div className="relative">
          <div className="pointer-events-none absolute -inset-x-10 -inset-y-10">
            <div className="absolute inset-0 bg-[radial-gradient(800px_520px_at_40%_25%,rgba(65,135,210,0.18),transparent_62%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(760px_520px_at_85%_70%,rgba(65,135,210,0.10),transparent_65%)]" />
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={{
              hidden: {},
              visible: {
                transition: prefersReducedMotion
                  ? { staggerChildren: 0 }
                  : { staggerChildren: 0.08, delayChildren: 0.05 },
              },
            }}
            className="relative grid gap-4 lg:grid-cols-3"
          >
          {approach.map((o) => (
            <motion.div
              key={o.name}
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className={[
                'relative overflow-hidden rounded-2xl p-7 ring-1 shadow-soft backdrop-blur transition',
                'bg-black/35 ring-white/10',
                'hover:-translate-y-0.5 hover:shadow-card',
                'hover:ring-hcg-400/25',
                o.featured ? 'ring-hcg-400/30 glow-blue-strong' : '',
              ].join(' ')}
            >
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(0,0,0,0))]" />
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-hcg-600/14 blur-3xl" />

              {/* Top accent bar */}
              <div className="pointer-events-none absolute left-0 top-0 h-1 w-full bg-[linear-gradient(90deg,rgba(65,135,210,0),rgba(65,135,210,0.55),rgba(65,135,210,0))]" />

              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold tracking-tight text-white">{o.name}</h3>
                  {o.featured ? (
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/15">
                      Core
                    </span>
                  ) : null}
                </div>

                <p className="mt-2 text-sm leading-relaxed text-white/70">{o.tagline}</p>

                <div className="mt-5 rounded-xl bg-black/25 p-4 ring-1 ring-white/10">
                  <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">
                    Deliverable
                  </div>
                  <p className="mt-2 text-sm font-semibold tracking-tight text-white">
                    {o.deliverable}
                  </p>
                </div>

                <ul className="mt-5 grid gap-2 text-sm text-white/70">
                  {o.points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-hcg-300/80 shadow-[0_0_14px_rgba(65,135,210,0.25)]" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7">
                  <a
                    href="#contact"
                    className="inline-flex w-full items-center justify-center rounded-xl bg-white/5 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/12 transition hover:bg-hcg-600/15 hover:ring-hcg-400/25 hover:shadow-soft"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
          </motion.div>
        </div>
      </Section>

      <Section
        id="work-with-us"
        className="bg-hcg-night"
      >
        <div className="rounded-3xl bg-black/35 p-6 ring-1 ring-hcg-400/25 shadow-card backdrop-blur sm:p-7">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <img
                src={axiomStrategyLogo}
                alt="Axiom Strategy"
                className="h-10 w-auto opacity-100 sm:h-12"
              />
              <div>
                <div className="text-lg font-semibold tracking-tight text-white">
                  Let’s build what’s next—together.
                </div>
                <div className="text-sm text-white/70">
                  Ready to take the next step? We’re here to help.
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <MagneticButton
                as="a"
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-hcg-600 px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow"
              >
                Work With Axiom
              </MagneticButton>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
