import { motion, useReducedMotion } from 'framer-motion'

export default function ContactPathCard({ title, subtitle, selected, onSelect, icon }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.button
      type="button"
      onClick={onSelect}
      whileHover={prefersReducedMotion ? undefined : { y: -3, scale: 1.01 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.99 }}
      className={[
        'group relative w-full overflow-hidden rounded-3xl bg-black/35 p-6 text-left ring-1 shadow-card backdrop-blur transition hcg-card-accent',
        selected ? 'ring-hcg-400/55 glow-blue-strong' : 'ring-white/10 hover:ring-white/15',
      ].join(' ')}
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-hcg-600/12 blur-3xl opacity-60" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-white/5 blur-3xl opacity-40" />

      <div className="relative flex items-start gap-3">
        <div
          className={[
            'grid h-11 w-11 flex-none place-items-center rounded-2xl ring-1 shadow-soft',
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

