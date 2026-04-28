import { motion, useReducedMotion } from 'framer-motion'
import Section from './Section.jsx'

const cards = [
  {
    title: 'Local Growth Strategy',
    description:
      'Clarify positioning, strengthen acquisition channels, and build a practical roadmap.',
  },
  {
    title: 'Operational Improvement',
    description:
      'Find bottlenecks, streamline workflows, and improve execution discipline.',
  },
  {
    title: 'Marketing & Visibility',
    description:
      'Improve visibility, messaging, and conversion across key channels.',
  },
]

export default function ExampleEngagements() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <Section
      id="examples"
      eyebrow="Example Engagements"
      title="A look at the types of challenges HCG is built to support"
      subtitle="High-leverage engagements designed to produce measurable progress."
      className="bg-hcg-night bg-hcg-beams"
      innerClassName="min-h-[90vh] flex flex-col justify-center"
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
        {cards.map((c) => (
          <motion.div
            key={c.title}
            variants={{
              hidden: {
                opacity: 0,
                y: 12,
                x: prefersReducedMotion ? 0 : c.title === 'Marketing & Visibility' ? 18 : c.title === 'Local Growth Strategy' ? -18 : 0,
              },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            whileHover={prefersReducedMotion ? undefined : { y: -4 }}
            className="relative overflow-hidden rounded-2xl bg-black/35 p-6 ring-1 ring-white/10 shadow-soft backdrop-blur hcg-card-accent"
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-hcg-600/12 blur-3xl" />
            <div className="relative">
              <div className="text-lg font-semibold tracking-tight text-white">
                {c.title}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                {c.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
