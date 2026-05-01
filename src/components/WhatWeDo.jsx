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

function HologramSystemPreview() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      aria-hidden="true"
      className="relative overflow-hidden rounded-2xl bg-black/25 p-6 ring-1 ring-white/10 shadow-soft backdrop-blur"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      {/* Aura */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-hcg-600/18 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -right-24 h-72 w-72 rounded-full bg-hcg-500/12 blur-3xl" />

      {/* Grid lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(circle at 45% 35%, black 45%, transparent 78%)',
        }}
      />

      {/* Light sweep */}
      <motion.div
        className="pointer-events-none absolute -inset-y-14 left-0 w-[36%] bg-[linear-gradient(90deg,transparent,rgba(65,135,210,0.20),transparent)] blur-2xl"
        animate={prefersReducedMotion ? undefined : { x: ['-55%', '165%'] }}
        transition={
          prefersReducedMotion
            ? undefined
            : { duration: 10, repeat: Infinity, ease: 'easeInOut', repeatDelay: 2.2 }
        }
        style={{ rotate: -10 }}
      />

      {/* Floating motion (very subtle) */}
      <motion.div
        animate={prefersReducedMotion ? undefined : { y: [0, -6, 0] }}
        transition={
          prefersReducedMotion
            ? undefined
            : { duration: 6.6, repeat: Infinity, ease: 'easeInOut' }
        }
        className="relative"
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
                className="relative rounded-xl bg-black/25 px-3 py-2 text-center ring-1 ring-white/10"
              >
                <div className="text-xs font-semibold tracking-tight text-white/80">
                  {label}
                </div>
              </div>
            ))}
          </div>

          <div className="relative h-[88px] overflow-hidden rounded-2xl bg-black/20 ring-1 ring-white/10">
            {/* Connectors */}
            <svg
              className="absolute inset-0"
              viewBox="0 0 600 180"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="holoLine" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="rgba(65,135,210,0.10)" />
                  <stop offset="0.5" stopColor="rgba(65,135,210,0.70)" />
                  <stop offset="1" stopColor="rgba(65,135,210,0.10)" />
                </linearGradient>
                <filter id="holoGlow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="2.8" />
                </filter>
              </defs>
              <path
                d="M90 110 C 170 60, 250 60, 300 95 S 420 150, 510 100"
                fill="none"
                stroke="url(#holoLine)"
                strokeWidth="3.5"
                strokeLinecap="round"
                filter="url(#holoGlow)"
                opacity="0.9"
              />
              <path
                d="M90 118 C 170 70, 250 70, 300 102 S 420 150, 510 108"
                fill="none"
                stroke="rgba(255,255,255,0.10)"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.6"
              />

              {[
                { cx: 92, cy: 114 },
                { cx: 300, cy: 98 },
                { cx: 508, cy: 104 },
              ].map((n) => (
                <g key={`${n.cx}-${n.cy}`}>
                  <circle
                    cx={n.cx}
                    cy={n.cy}
                    r="6"
                    fill="rgba(65,135,210,0.75)"
                    opacity="0.9"
                  />
                  <circle
                    cx={n.cx}
                    cy={n.cy}
                    r="12"
                    fill="rgba(65,135,210,0.18)"
                    opacity="0.75"
                    filter="url(#holoGlow)"
                  />
                </g>
              ))}
            </svg>

            {/* Mini progress line */}
            <div className="absolute left-4 right-4 bottom-4 h-2 rounded-full bg-white/5 ring-1 ring-white/10 overflow-hidden">
              <motion.div
                className="h-full w-[62%] bg-gradient-to-r from-hcg-600/40 via-hcg-400/80 to-hcg-300/30"
                animate={prefersReducedMotion ? undefined : { opacity: [0.75, 1, 0.75] }}
                transition={
                  prefersReducedMotion
                    ? undefined
                    : { duration: 3.6, repeat: Infinity, ease: 'easeInOut' }
                }
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function WhatWeDo() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <Section
      id="what-we-do"
      eyebrow="How We Drive Growth"
      className="bg-hcg-night"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left: headline + hologram visual */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              How We Drive Growth
            </h2>
            <div className="mt-2 text-sm font-semibold tracking-[0.14em] uppercase text-white/55">
              Six execution levers.
            </div>
            <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
              We isolate the highest-leverage areas in your business and turn them into systems that drive measurable results.
            </p>
            <div className="mt-4 text-sm font-semibold text-white/60">
              Select a lever to explore how we work.
            </div>

            {/* Hologram preview (hidden on very small screens to avoid crowding) */}
            <div className="mt-7 hidden sm:block">
              <HologramSystemPreview />
            </div>
          </div>

          {/* Right: calm capability cards + lever chips */}
          <div className="lg:col-span-7">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="grid gap-4 lg:grid-cols-3"
            >
              {pillars.map((it) => (
                <div
                  key={it.title}
                  className="group rounded-3xl bg-black/30 p-6 ring-1 ring-white/10 backdrop-blur transition hover:ring-hcg-400/20"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-hcg-300/90 shadow-[0_0_18px_rgba(65,135,210,0.22)]" />
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

            <div className="mt-6 rounded-3xl bg-black/20 p-6 ring-1 ring-white/10 backdrop-blur">
              <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">
                Six execution levers
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
        </div>
      </div>
    </Section>
  )
}
