import { motion, useReducedMotion } from 'framer-motion'
import { useMemo, useRef, useState } from 'react'
import Section from './Section.jsx'

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

function ServiceCard({ title, description, selected, onSelect }) {
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      animate={selected ? { scale: 1.003 } : { scale: 1 }}
      transition={{ duration: 0.24, ease: 'easeOut' }}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.99 }}
      className={[
        'group relative w-full overflow-hidden rounded-2xl bg-black/25 p-6 text-left ring-1 shadow-soft backdrop-blur transition',
        'hover:bg-black/30 hover:ring-white/15',
        selected ? 'ring-hcg-400/25' : 'ring-white/10',
      ].join(' ')}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-lg font-semibold tracking-tight text-white">{title}</div>
          <div className="mt-2 text-sm leading-relaxed text-white/70">{description}</div>
        </div>
        <span
          className={[
            'mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-xl ring-1 transition',
            selected
              ? 'bg-hcg-600/18 ring-hcg-400/25 text-hcg-200'
              : 'bg-white/5 ring-white/10 text-white/55',
          ].join(' ')}
          aria-hidden="true"
        >
          →
        </span>
      </div>
    </motion.button>
  )
}

function ExecutionMapVisual({ className = '' }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      aria-hidden="true"
      className={[
        'relative min-h-[320px] overflow-hidden rounded-3xl bg-black/30 p-8 ring-1 ring-hcg-400/30 shadow-card backdrop-blur',
        'glow-blue-strong',
        className,
      ].join(' ')}
    >
      <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-hcg-600/22 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-hcg-500/18 blur-3xl" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(circle at 45% 35%, black 45%, transparent 78%)',
        }}
      />

      <motion.div
        animate={prefersReducedMotion ? undefined : { y: [0, -5, 0] }}
        transition={
          prefersReducedMotion ? undefined : { duration: 6.8, repeat: Infinity, ease: 'easeInOut' }
        }
        className="relative z-10"
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold tracking-[0.16em] uppercase text-white/55">
              Execution Map
            </div>
            <div className="mt-1 text-lg font-semibold tracking-tight text-white">
              System view
            </div>
          </div>
          <div className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-hcg-200 ring-1 ring-white/10">
            + Growth Signal
          </div>
        </div>

        <div className="mt-6 grid gap-4">
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

          <div className="relative h-[120px] overflow-hidden rounded-2xl bg-black/20 ring-1 ring-white/10">
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

            <div className="absolute left-4 right-4 bottom-4 h-2.5 overflow-hidden rounded-full bg-white/5 ring-1 ring-white/10">
              <motion.div
                className="h-full w-[66%] bg-gradient-to-r from-hcg-600/45 via-hcg-400/85 to-hcg-300/35"
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

function LeveragePanel() {
  return (
    <div className="rounded-3xl bg-black/25 p-8 ring-1 ring-white/10 backdrop-blur">
      <div className="text-xs font-semibold tracking-[0.16em] uppercase text-white/55">
        Built around leverage
      </div>
      <div className="mt-5 grid gap-4">
        {[
          { k: 'Diagnose', v: 'the bottleneck' },
          { k: 'Systemize', v: 'the workflow' },
          { k: 'Execute', v: 'with accountability' },
        ].map((r) => (
          <div key={r.k} className="flex items-start gap-3">
            <span className="mt-1.5 h-2 w-2 rounded-full bg-hcg-300/80 shadow-[0_0_16px_rgba(65,135,210,0.18)]" />
            <div className="text-sm leading-relaxed text-white/75">
              <span className="font-semibold text-white">{r.k}</span> {r.v}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Services() {
  const prefersReducedMotion = useReducedMotion()
  const [selectedTitle, setSelectedTitle] = useState(services[0]?.title ?? '')
  const cardsRef = useRef(null)
  const [showAll, setShowAll] = useState(false)

  const primary = useMemo(() => {
    const order = ['Strategy', 'Marketing', 'Operations']
    return order.map((t) => services.find((s) => s.title === t)).filter(Boolean)
  }, [])

  const visibleServices = showAll ? services : primary

  return (
    <Section
      id="services"
      className="bg-hcg-night bg-hcg-beams"
    >
      <div className="grid gap-10">
        {/* Top intro area */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-[0.18em] uppercase text-white/55">
            HOW WE DRIVE GROWTH
          </div>
          <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            How We Drive Growth
          </h2>
          <div className="mt-3 text-sm font-semibold tracking-[0.14em] uppercase text-white/55">
            Six execution levers.
          </div>
          <p className="mt-4 text-[17px] leading-relaxed text-white/75 sm:text-lg">
            We isolate the highest-leverage areas in your business and turn them into systems that drive measurable results.
          </p>
        </div>

        {/* Two-column feature area */}
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <ExecutionMapVisual />
          </div>
          <div className="lg:col-span-5">
            <LeveragePanel />
          </div>
        </div>

        {/* Primary cards row */}
        <motion.div
          id="services-cards"
          ref={cardsRef}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="grid gap-4 lg:grid-cols-3"
        >
          {visibleServices.map((s) => (
            <ServiceCard
              key={s.title}
              title={s.title}
              description={`${s.description}.`}
              selected={s.title === selectedTitle}
              onSelect={() => setSelectedTitle(s.title)}
            />
          ))}
        </motion.div>

        {/* Subtle “View all” */}
        {!showAll ? (
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-white/5 px-4 py-2 text-sm font-semibold text-white/75 ring-1 ring-white/10 transition hover:bg-white/10"
            >
              View all levers <span className="text-hcg-300">→</span>
            </button>
          </div>
        ) : null}
      </div>
    </Section>
  )
}
