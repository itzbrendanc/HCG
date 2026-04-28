import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useMemo, useRef, useState } from 'react'
import Section from './Section.jsx'
import MagneticButton from './MagneticButton.jsx'
import AnimatedSectionHeading from './AnimatedSectionHeading.jsx'
import ServiceMiniVisual from './ServiceMiniVisual.jsx'

const services = [
  {
    title: 'Strategy',
    description: 'Find the opportunity.',
    deliverable: 'Signal map + priority bets.',
    kind: 'strategy',
    detail:
      'Clarify priorities, assess options, and align the next move to outcomes.',
  },
  {
    title: 'Marketing',
    description: 'Create demand.',
    deliverable: 'Positioning + channel plan.',
    kind: 'marketing',
    detail:
      'Strengthen messaging and visibility so the right customers take action.',
  },
  {
    title: 'Growth',
    description: 'Convert attention.',
    deliverable: 'Funnel + conversion levers.',
    kind: 'growth',
    detail:
      'Identify scalable levers and build a roadmap for measurable lift.',
  },
  {
    title: 'Operations',
    description: 'Build systems.',
    deliverable: 'Workflow map + cadence.',
    kind: 'operations',
    detail:
      'Reduce friction, clarify ownership, and create consistent execution.',
  },
  {
    title: 'Technology',
    description: 'Use smarter tools.',
    deliverable: 'Automation + AI quick wins.',
    kind: 'technology',
    detail:
      'Apply technology with intent—automation where it matters most.',
  },
  {
    title: 'Execution',
    description: 'Move with clarity.',
    deliverable: 'Roadmap + checkpoints.',
    kind: 'execution',
    detail:
      'Drive progress with clear milestones, feedback loops, and accountability.',
  },
]

function ServiceCard({ title, description, deliverable, kind, selected, onSelect }) {
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      animate={selected ? { scale: 1.01 } : { scale: 1 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
      whileHover={{ y: -4, rotateX: 1.4, rotateY: -1.4 }}
      whileTap={{ scale: 0.99 }}
      className={[
        'group relative w-full overflow-hidden rounded-3xl bg-black/35 p-7 text-left ring-1 shadow-soft backdrop-blur transition hover:shadow-card hcg-card-accent',
        selected ? 'ring-hcg-400/55 glow-blue-strong' : 'ring-white/10',
      ].join(' ')}
      style={{ transformStyle: 'preserve-3d', perspective: 900 }}
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-hcg-600/10 blur-3xl opacity-0 transition group-hover:opacity-100" />

      <div className="relative grid gap-5">
        <div className="relative h-28 w-full overflow-hidden rounded-2xl ring-1 ring-white/10">
          <ServiceMiniVisual kind={kind} active={selected} />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(420px_180px_at_20%_20%,rgba(65,135,210,0.18),transparent_65%)]" />
        </div>

      <div
        className={[
          'relative rounded-2xl bg-black/30 p-4 ring-1 ring-white/10 transition',
          selected ? 'ring-hcg-400/25' : '',
        ].join(' ')}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="text-xl font-semibold tracking-tight text-white">
            {title}
          </div>
          <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">
            {selected ? 'Selected' : 'Explore'}
          </div>
        </div>
        <div className="mt-2 text-sm font-semibold text-hcg-200">{description}</div>
        <div className="mt-3 text-sm text-white/70">{deliverable}</div>
      </div>
      </div>
    </motion.button>
  )
}

export default function Services() {
  const prefersReducedMotion = useReducedMotion()
  const [selectedTitle, setSelectedTitle] = useState(services[0]?.title ?? '')
  const cardsRef = useRef(null)

  const selected = useMemo(
    () => services.find((s) => s.title === selectedTitle) ?? services[0],
    [selectedTitle],
  )

  const { scrollYProgress } = useScroll({ target: cardsRef, offset: ['start end', 'end start'] })
  const driftY = useTransform(scrollYProgress, [0, 1], [14, -14])

  return (
    <Section
      id="services"
      eyebrow="What We Do"
      className="bg-hcg-night bg-hcg-beams"
      innerClassName="min-h-[90vh]"
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <AnimatedSectionHeading
            lines={['What We Do', 'Six growth levers.']}
            accentLineIdx={1}
            className="max-w-sm"
            sweep={false}
          />
          <p className="mt-5 text-sm leading-relaxed text-white/75">
            Pick a lever to explore. Each expands with a clear outcome.
          </p>
          <div className="mt-6">
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('services-cards')
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                if (services[0]?.title) setSelectedTitle(services[0].title)
              }}
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/15"
            >
              View All Services <span className="text-hcg-300">→</span>
            </button>
          </div>
        </div>

        <motion.div
          style={prefersReducedMotion ? undefined : { y: driftY }}
          id="services-cards"
          ref={cardsRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: prefersReducedMotion
                ? { staggerChildren: 0 }
                : { staggerChildren: 0.08, delayChildren: 0.05 },
            },
          }}
          className="grid gap-4 sm:grid-cols-2 lg:col-span-8"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
            >
              <ServiceCard
                title={s.title}
                description={s.description}
                deliverable={s.deliverable}
                kind={s.kind}
                selected={s.title === selectedTitle}
                onSelect={() => setSelectedTitle(s.title)}
              />
            </motion.div>
          ))}

          <div className="sm:col-span-2">
            <AnimatePresence mode="wait">
              {selected ? (
                <motion.div
                  key={selected.title}
                  initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 6 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="rounded-3xl bg-black/40 p-7 ring-1 ring-hcg-400/35 shadow-card backdrop-blur glow-blue-strong"
                >
                  <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">
                    Focus
                  </div>
                  <div className="mt-3 text-2xl font-semibold tracking-tight text-hcg-200">
                    {selected.title}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">
                    {selected.detail}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

          <div className="sm:col-span-2">
            <div className="mt-2 rounded-3xl bg-black/30 p-6 ring-1 ring-white/10 backdrop-blur">
              <p className="text-sm text-white/70">
                Not sure where to start? We’ll help you identify the highest-impact opportunities.
              </p>
              <div className="mt-4">
                <MagneticButton
                  as="a"
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl bg-hcg-600 px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow"
                >
                  Start With a Consultation
                </MagneticButton>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
