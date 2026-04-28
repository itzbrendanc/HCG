import { motion, useReducedMotion } from 'framer-motion'

export default function ContactPathCard({ title, subtitle, selected, onSelect, icon }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.button
      type="button"
      onClick={onSelect}
      animate={selected ? { scale: 1.02 } : { scale: 1 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
      whileHover={prefersReducedMotion ? undefined : { y: -4, scale: 1.03 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.99 }}
      className={[
        'group relative w-full overflow-hidden rounded-3xl bg-black/35 p-7 text-left ring-1 shadow-card backdrop-blur transition hcg-card-accent',
        selected ? 'ring-hcg-400/55 glow-blue-strong' : 'ring-white/10 hover:ring-white/15',
      ].join(' ')}
    >
      {selected ? (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-3xl"
          animate={prefersReducedMotion ? undefined : { opacity: [0.35, 0.65, 0.35] }}
          transition={prefersReducedMotion ? undefined : { duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            boxShadow: '0 0 0 1px rgba(65,135,210,0.32), 0 0 48px rgba(65,135,210,0.18)',
          }}
        />
      ) : null}

      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-hcg-600/12 blur-3xl opacity-60" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-white/5 blur-3xl opacity-40" />

      <div className="relative flex items-start gap-3">
        <div
          className={[
            'grid h-12 w-12 flex-none place-items-center rounded-2xl ring-1 shadow-soft',
            selected ? 'bg-hcg-600/22 ring-hcg-300/40' : 'bg-white/5 ring-white/10',
          ].join(' ')}
        >
          <div className="text-hcg-300">{icon}</div>
        </div>
        <div>
          <div className="text-base font-semibold tracking-tight text-white">
            {title}
          </div>
          <p className="mt-2 text-sm leading-relaxed text-white/75">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="relative mt-5 flex items-center justify-between">
        <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">
          {selected ? 'Selected' : 'Choose this path'}
        </div>
        <div
          className={[
            'text-sm font-semibold tracking-tight transition',
            selected ? 'text-hcg-200' : 'text-white/70 group-hover:text-white',
          ].join(' ')}
        >
          Continue <span className="text-hcg-300">→</span>
        </div>
      </div>
    </motion.button>
  )
}
