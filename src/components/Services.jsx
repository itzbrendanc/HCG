import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useMemo, useRef, useState } from 'react'
import Section from './Section.jsx'
import MagneticButton from './MagneticButton.jsx'
import AnimatedSectionHeading from './AnimatedSectionHeading.jsx'
import ServiceMockupVisual from './ServiceMockupVisual.jsx'

const services = [
  {
    title: 'Strategy',
    description: 'Identify the highest-leverage opportunities',
    deliverable: 'Signal map + priority bets.',
    kind: 'strategy',
    detail:
      'Clarify priorities, assess options, and align the next move to outcomes.',
  },
  {
    title: 'Marketing',
    description: 'Create demand and attention',
    deliverable: 'Positioning + channel plan.',
    kind: 'marketing',
    detail:
      'Strengthen messaging and visibility so the right customers take action.',
  },
  {
    title: 'Growth',
    description: 'Convert attention into measurable results',
    deliverable: 'Funnel + conversion levers.',
    kind: 'growth',
    detail:
      'Identify scalable levers and build a roadmap for measurable lift.',
  },
  {
    title: 'Operations',
    description: 'Build systems that scale',
    deliverable: 'Workflow map + cadence.',
    kind: 'operations',
    detail:
      'Reduce friction, clarify ownership, and create consistent execution.',
  },
  {
    title: 'Technology',
    description: 'Leverage tools and automation',
    deliverable: 'Automation + AI quick wins.',
    kind: 'technology',
    detail:
      'Apply technology with intent—automation where it matters most.',
  },
  {
    title: 'Execution',
    description: 'Move quickly with clear direction',
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
      animate={selected ? { scale: 1.005 } : { scale: 1 }}
      transition={{ duration: 0.24, ease: 'easeOut' }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.99 }}
      className={[
        'group relative w-full overflow-hidden rounded-3xl bg-black/35 p-7 text-left ring-1 shadow-soft backdrop-blur transition hover:shadow-card hcg-card-accent',
        selected ? 'ring-hcg-400/55 glow-blue-strong' : 'ring-white/10',
      ].join(' ')}
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-hcg-600/10 blur-3xl opacity-0 transition group-hover:opacity-100" />

      <div className="relative grid gap-5">
        <div className="relative h-44 w-full overflow-hidden rounded-3xl ring-1 ring-white/10">
          <ServiceMockupVisual kind={kind} active={selected} />
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

      <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-6 opacity-0 transition duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
        <div className="mx-6 mb-6 rounded-2xl bg-black/40 p-4 ring-1 ring-hcg-400/20 backdrop-blur">
          <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">Detail</div>
          <div className="mt-2 text-sm font-semibold text-white/80">
            {kind === 'strategy'
              ? 'Priority bets • tradeoffs'
              : kind === 'marketing'
                ? 'Messaging • channel fit'
                : kind === 'growth'
                  ? 'Funnel levers • conversion'
                  : kind === 'operations'
                    ? 'Owners • cadence'
                    : kind === 'technology'
                      ? 'Automation • AI workflows'
                      : 'Milestones • checkpoints'}
          </div>
        </div>
      </div>
    </motion.button>
  )
}

function ServicesHologramPreview() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      aria-hidden="true"
      className="relative mt-6 hidden min-h-[220px] overflow-hidden rounded-2xl bg-black/35 p-6 ring-1 ring-hcg-400/25 shadow-soft backdrop-blur glow-blue-strong lg:block"
    >
      <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-hcg-600/22 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-hcg-500/18 blur-3xl" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.32]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(circle at 45% 35%, black 45%, transparent 78%)',
        }}
      />

      <motion.div
        animate={prefersReducedMotion ? undefined : { y: [0, -6, 0] }}
        transition={
          prefersReducedMotion ? undefined : { duration: 6.8, repeat: Infinity, ease: 'easeInOut' }
        }
        className="relative z-10"
      >
        <div className="flex items-center justify-between">
          <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">
            Execution Map
          </div>
          <div className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-hcg-200 ring-1 ring-white/10">
            + Growth Signal
          </div>
        </div>

        <div className="mt-5 grid gap-4">
          <div className="grid grid-cols-3 items-center gap-3">
            {['Diagnose', 'Systemize', 'Execute'].map((label) => (
              <div
                key={label}
                className="rounded-xl bg-black/25 px-3 py-2 text-center ring-1 ring-white/10"
              >
                <div className="text-xs font-semibold tracking-tight text-white/80">
                  {label}
                </div>
              </div>
            ))}
          </div>

          <div className="relative h-[92px] overflow-hidden rounded-2xl bg-black/20 ring-1 ring-white/10">
            <svg className="absolute inset-0" viewBox="0 0 600 180" preserveAspectRatio="none">
              <defs>
                <linearGradient id="svcHoloLine" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="rgba(65,135,210,0.10)" />
                  <stop offset="0.5" stopColor="rgba(65,135,210,0.72)" />
                  <stop offset="1" stopColor="rgba(65,135,210,0.10)" />
                </linearGradient>
                <filter id="svcHoloGlow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="2.8" />
                </filter>
              </defs>
              <path
                d="M90 112 C 170 60, 250 60, 300 96 S 420 150, 510 104"
                fill="none"
                stroke="url(#svcHoloLine)"
                strokeWidth="3.5"
                strokeLinecap="round"
                filter="url(#svcHoloGlow)"
                opacity="1"
              />
              {[
                { cx: 92, cy: 116 },
                { cx: 300, cy: 100 },
                { cx: 508, cy: 108 },
              ].map((n) => (
                <g key={`${n.cx}-${n.cy}`}>
                  <circle cx={n.cx} cy={n.cy} r="7" fill="rgba(65,135,210,0.82)" opacity="1" />
                  <circle
                    cx={n.cx}
                    cy={n.cy}
                    r="15"
                    fill="rgba(65,135,210,0.22)"
                    opacity="0.95"
                    filter="url(#svcHoloGlow)"
                  />
                </g>
              ))}
            </svg>

            <div className="absolute left-4 right-4 bottom-4 h-2 overflow-hidden rounded-full bg-white/5 ring-1 ring-white/10">
              <motion.div
                className="h-full w-[62%] bg-gradient-to-r from-hcg-600/40 via-hcg-400/80 to-hcg-300/30"
                animate={prefersReducedMotion ? undefined : { opacity: [0.78, 1, 0.78] }}
                transition={
                  prefersReducedMotion ? undefined : { duration: 3.8, repeat: Infinity, ease: 'easeInOut' }
                }
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
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

  return (
    <Section
      id="services"
      eyebrow="How We Drive Growth"
      className="bg-hcg-night bg-hcg-beams"
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <AnimatedSectionHeading
            lines={['How We Drive Growth', 'Six execution levers.']}
            accentLineIdx={1}
            className="max-w-sm"
            sweep={false}
          />
          <p className="mt-5 text-sm leading-relaxed text-white/75">
            We isolate the highest-leverage areas in your business and turn them into systems that drive measurable results.
          </p>

          <ServicesHologramPreview />

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
                : { staggerChildren: 0.05, delayChildren: 0.03 },
            },
          }}
          className="grid gap-4 sm:grid-cols-2 lg:col-span-8"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={{
                hidden: { opacity: 0, y: 6 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
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
