import { motion, useReducedMotion } from 'framer-motion'
import StickyFeatureSection from './StickyFeatureSection.jsx'
import StrategyVisual from './StrategyVisual.jsx'
import GrowthVisual from './GrowthVisual.jsx'
import SystemsVisual from './SystemsVisual.jsx'
import ExecutionVisual from './ExecutionVisual.jsx'

const features = [
  {
    eyebrow: 'Strategy',
    title: 'Strategy that moves',
    bullets: ['Find the signal.', 'Sharpen the strategy.', 'Choose the highest-leverage path.'],
    bigWord: 'STRATEGY',
    visual: <StrategyVisual />,
  },
  {
    eyebrow: 'Marketing',
    title: 'Marketing that converts',
    bullets: ['Clarify positioning.', 'Improve visibility.', 'Convert attention into outcomes.'],
    bigWord: 'GROWTH',
    visual: <GrowthVisual />,
  },
  {
    eyebrow: 'Systems',
    title: 'Systems that scale',
    bullets: ['Define the operating rhythm.', 'Reduce friction.', 'Build repeatable execution.'],
    bigWord: 'SYSTEMS',
    visual: <SystemsVisual />,
  },
  {
    eyebrow: 'Execution',
    title: 'Execution that lasts',
    bullets: ['Align stakeholders.', 'Ship the work.', 'Measure and improve.'],
    bigWord: 'EXECUTION',
    visual: <ExecutionVisual />,
  },
]

export default function ScrollStory() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="bg-hcg-night bg-hcg-beams">
      <div className="mx-auto max-w-6xl px-5 pt-6 sm:px-8 sm:pt-10">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="text-sm font-semibold tracking-[0.14em] uppercase text-white/55">
            How Axiom Delivers
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            A scroll-driven story of impact
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-white/75">
            Premium thinking, visual clarity, and a disciplined delivery cadence—built to move from
            ambiguity to measurable progress.
          </p>
        </motion.div>
      </div>

      <StickyFeatureSection items={features} />
    </section>
  )
}
