import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useMemo, useState } from 'react'

const items = [
  { key: 'think', label: 'Think Clearly.', micro: 'Find the signal.' },
  { key: 'move', label: 'Move Fast.', micro: 'Act with focus.' },
  { key: 'build', label: 'Build Systems.', micro: 'Create repeatable growth.' },
  { key: 'impact', label: 'Create Impact.', micro: 'Deliver measurable progress.' },
]

export default function ApproachSystemVisual() {
  const prefersReducedMotion = useReducedMotion()
  const [active, setActive] = useState(items[0].key)

  const activeItem = useMemo(() => items.find((i) => i.key === active) ?? items[0], [active])

  return (
    <div className="relative overflow-hidden rounded-3xl bg-black/35 p-7 ring-1 ring-hcg-400/25 shadow-card backdrop-blur glow-blue">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_520px_at_55%_45%,rgba(65,135,210,0.18),transparent_66%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(0,0,0,0))]" />

      {/* Hub */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-hcg-600/18 blur-2xl"
        animate={prefersReducedMotion ? undefined : { opacity: [0.16, 0.30, 0.16], scale: [0.98, 1.03, 0.98] }}
        transition={prefersReducedMotion ? undefined : { duration: 6.4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-hcg-300/70"
        style={{ boxShadow: '0 0 0 1px rgba(65,135,210,0.22), 0 0 36px rgba(65,135,210,0.22)' }}
      />

      {/* Connection diagram */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 900 420" fill="none" preserveAspectRatio="none">
          <path d="M450 210C360 150 300 130 240 130" stroke="rgba(65,135,210,0.24)" strokeWidth="2" />
          <path d="M450 210C560 150 610 140 660 140" stroke="rgba(65,135,210,0.24)" strokeWidth="2" />
          <path d="M450 210C360 270 300 290 240 292" stroke="rgba(65,135,210,0.24)" strokeWidth="2" />
          <path d="M450 210C560 270 610 284 670 292" stroke="rgba(65,135,210,0.24)" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative grid gap-4 md:grid-cols-2">
        {items.map((i) => {
          const selected = i.key === active
          return (
            <motion.button
              key={i.key}
              type="button"
              onMouseEnter={() => setActive(i.key)}
              onFocus={() => setActive(i.key)}
              onClick={() => setActive(i.key)}
              whileHover={prefersReducedMotion ? undefined : { y: -2 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.99 }}
              className={[
                'group relative w-full overflow-hidden rounded-2xl bg-black/30 p-5 text-left ring-1 transition',
                selected ? 'ring-hcg-400/55 glow-blue' : 'ring-white/10 hover:ring-white/15',
              ].join(' ')}
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-hcg-600/10 blur-3xl opacity-70" />
              <div className="relative">
                <div className="text-2xl font-semibold tracking-tight text-white">
                  <span className="text-hcg-200">{i.label.split(' ')[0]}</span>{' '}
                  {i.label.split(' ').slice(1).join(' ')}
                </div>
                <div className="mt-2 text-sm font-semibold text-white/60">
                  {i.micro}
                </div>
              </div>
            </motion.button>
          )
        })}
      </div>

      <div className="relative mt-6 rounded-2xl bg-black/30 p-5 ring-1 ring-white/10">
        <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">
          Operating philosophy
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem.key}
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 8, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -6, filter: 'blur(8px)' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="mt-3 flex flex-col gap-1"
          >
            <div className="text-lg font-semibold tracking-tight text-white">
              {activeItem.label}
            </div>
            <div className="text-sm text-white/75">{activeItem.micro}</div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

