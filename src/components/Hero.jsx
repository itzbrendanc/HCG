import { motion, useReducedMotion } from 'framer-motion'
import CinematicHeroEffects from './CinematicHeroEffects.jsx'
import HeroTitleSequence from './HeroTitleSequence.jsx'

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="top" className="relative scroll-mt-24 bg-hcg-surface min-h-screen">
      <CinematicHeroEffects />
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-5 py-14 sm:px-8 sm:py-20">
        <motion.p
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-8 inline-flex w-fit items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-semibold tracking-[0.14em] text-white/70 uppercase ring-1 ring-white/10"
        >
          Axiom Strategy
        </motion.p>

        <HeroTitleSequence />

        <div className="mt-12 flex flex-wrap items-center gap-3 text-white/45">
          <div className="text-xs font-semibold tracking-[0.14em] uppercase">
            Trusted by forward-thinking teams
          </div>
          <div className="hidden h-3 w-px bg-white/10 sm:block" />
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-semibold tracking-[0.12em] uppercase text-white/40">
            {['Aurora', 'Northpoint', 'Summit', 'Veritas', 'Pioneer'].map((n, idx) => (
              <div key={n} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-hcg-400/60" />
                <span>{n}</span>
                {idx < 4 ? <span className="ml-1 hidden text-white/15 sm:inline">•</span> : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
