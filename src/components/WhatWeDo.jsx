import { motion, useReducedMotion } from 'framer-motion'
import Section from './Section.jsx'

const pillars = [
  {
    title: 'Identify Bottlenecks',
    desc: 'Find the constraint—where decisions, process, or funnel friction is slowing momentum.',
  },
  {
    title: 'Build Execution Systems',
    desc: 'Turn intent into repeatable workflows with clear owners, cadence, and tracking.',
  },
  {
    title: 'Drive Measurable Growth',
    desc: 'Focus on the few levers that compound and report progress with simple metrics.',
  },
]

const levers = [
  'Strategy',
  'Marketing',
  'Growth',
  'Operations',
  'Technology',
  'Execution',
]

export default function WhatWeDo() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <Section
      id="what-we-do"
      eyebrow="What We Do"
      className="bg-hcg-night"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            What we do
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
            Axiom works like a focused operating layer: diagnose the constraint, design the system, drive outcomes.
          </p>
        </div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mt-8 grid gap-4 lg:grid-cols-3"
        >
          {pillars.map((it) => (
            <div
              key={it.title}
              className="group rounded-3xl bg-black/30 p-6 ring-1 ring-white/10 backdrop-blur transition hover:ring-hcg-400/20"
            >
              <div className="flex items-start gap-3">
                <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-hcg-300/90 shadow-[0_0_18px_rgba(65,135,210,0.28)]" />
                <div>
                  <div className="text-lg font-semibold tracking-tight text-white">
                    {it.title}
                  </div>
                  <div className="mt-2 text-sm leading-relaxed text-white/70">
                    {it.desc}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="mt-8 rounded-3xl bg-black/20 p-6 ring-1 ring-white/10 backdrop-blur">
          <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">
            Six Growth Levers
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {levers.map((l) => (
              <span
                key={l}
                className="rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-white/75 ring-1 ring-white/10"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
