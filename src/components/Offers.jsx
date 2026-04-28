import { motion, useReducedMotion } from 'framer-motion'
import Section from './Section.jsx'
import hilltopLogo from '../assets/hilltop-logo.png'
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
        id="approach"
        eyebrow="Approach"
        title="A disciplined method built to drive outcomes"
        subtitle="We combine strategic clarity with execution support—so decisions turn into measurable progress."
        className="bg-hcg-night"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: {},
            visible: {
              transition: prefersReducedMotion
                ? { staggerChildren: 0 }
                : { staggerChildren: 0.09, delayChildren: 0.05 },
            },
          }}
          className="grid gap-4 lg:grid-cols-3"
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
                'relative overflow-hidden rounded-2xl p-7 ring-1 shadow-soft',
                'glass ring-white/10',
                o.featured ? 'glow-blue' : '',
              ].join(' ')}
            >
              {o.featured ? (
                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-hcg-600/20 blur-3xl" />
              ) : null}

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

                <div className="mt-5 rounded-xl bg-black/30 p-4 ring-1 ring-white/10">
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
                      <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-hcg-400" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7">
                  <a
                    href="#contact"
                    className="inline-flex w-full items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/15"
                  >
                    Let’s Talk
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section
        id="about"
        eyebrow="About Us"
        title="A professional advisory firm built for complex work"
        subtitle="Hilltop Consulting Group (HCG) supports leaders with structured strategy, operational clarity, and execution support—delivered with a premium standard."
        className="bg-hcg-night"
      >
        <div className="grid gap-4 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="rounded-3xl glass p-7 ring-1 ring-white/10 shadow-soft">
              <h3 className="text-xl font-semibold tracking-tight text-white">
                What HCG stands for
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                HCG partners with organizations that value clarity, momentum, and measurable impact.
                We focus on high-leverage problems: aligning stakeholders, designing operating systems,
                and translating strategy into delivery.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  {
                    k: 'Market Research',
                    v: 'Competitive landscape, customer insights, and opportunity sizing.',
                  },
                  {
                    k: 'Data-Driven Analysis',
                    v: 'Performance diagnostics, KPI frameworks, and decision support.',
                  },
                  {
                    k: 'Execution Support',
                    v: 'Roadmaps, cadence, and stakeholder alignment to ship outcomes.',
                  },
                ].map((m) => (
                  <div key={m.k} className="rounded-2xl bg-black/30 p-4 ring-1 ring-white/10">
                    <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">
                      {m.k}
                    </div>
                    <div className="mt-2 text-sm font-semibold tracking-tight text-white">
                      {m.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl glass p-7 ring-1 ring-white/10 shadow-soft glow-blue">
              <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">
                Identity
              </div>
              <div className="mt-4 grid place-items-center rounded-2xl bg-black/40 p-5 ring-1 ring-white/10">
                <img src={hilltopLogo} alt="HCG logo" className="w-full max-w-[360px] opacity-95" />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                Strategic advisory. Operational clarity. Measurable growth.
              </p>
            </div>
          </div>
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
                src={hilltopLogo}
                alt="Hilltop Consulting Group"
                className="h-12 w-auto opacity-95"
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
                Work With HCG
              </MagneticButton>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
