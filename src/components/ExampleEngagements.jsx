import { motion, useReducedMotion } from 'framer-motion'
import Section from './Section.jsx'

const cards = [
  {
    title: 'Local Growth Strategy',
    description:
      'Helping a business clarify its positioning, identify stronger customer acquisition channels, and build a practical growth roadmap.',
  },
  {
    title: 'Operational Improvement',
    description:
      'Reviewing workflows, bottlenecks, and team processes to recommend leaner systems and clearer execution.',
  },
  {
    title: 'Marketing & Visibility',
    description:
      'Evaluating digital presence, content strategy, and customer outreach to improve visibility and conversion.',
  },
]

export default function ExampleEngagements() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <Section
      id="examples"
      eyebrow="Example Engagements"
      title="A look at the types of challenges HCG is built to support"
      subtitle="Clear, structured work that turns complexity into measurable progress."
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
        {cards.map((c) => (
          <motion.div
            key={c.title}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="relative overflow-hidden rounded-2xl bg-black/35 p-6 ring-1 ring-white/10 shadow-soft backdrop-blur"
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-hcg-600/10 blur-3xl" />
            <div className="relative">
              <div className="text-lg font-semibold tracking-tight text-white">
                {c.title}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {c.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}

