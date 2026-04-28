import Section from './Section.jsx'
import Card from './Card.jsx'
import { motion, useReducedMotion } from 'framer-motion'

const reasons = [
  {
    title: 'Trusted Partner',
    description: 'Discreet, clear, accountable.',
  },
  {
    title: 'Client-Centered',
    description: 'Tailored to your constraints.',
  },
  {
    title: 'Measurable Impact',
    description: 'Metrics, milestones, outcomes.',
  },
  {
    title: 'Future-Focused',
    description: 'Systems that scale.',
  },
]

export default function TeamBasedIntelligence() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <Section
      id="why"
      eyebrow="Why Clients Choose HCG"
      className="bg-hcg-night bg-hcg-beams"
      innerClassName="min-h-[90vh] flex flex-col justify-center"
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="lg:col-span-4"
        >
          <div className="text-sm font-semibold tracking-[0.14em] uppercase text-white/55">
            Why HCG
          </div>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Why Work With HCG?
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Premium thinking with practical execution—without noise.
          </p>
          <ul className="mt-5 grid gap-2 text-sm text-white/70">
            {[
              'Structured analysis, not guesswork',
              'Strategy grounded in market research',
              'Practical recommendations built for execution',
              'Fresh perspective with professional discipline',
              'Clear deliverables and measurable next steps',
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-hcg-400" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="lg:col-span-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((r) => (
              <Card key={r.title} title={r.title} description={r.description} tone="dark" />
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
