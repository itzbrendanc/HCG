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

        <div className="mt-12">
          <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/45">
            Trusted by forward-thinking teams
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4 text-white/40 sm:grid-cols-5">
            {['Aurora', 'Northpoint', 'Summit', 'Veritas', 'Pioneer'].map((n) => (
              <div key={n} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-hcg-400/70" />
                <span className="text-xs font-semibold tracking-[0.12em] uppercase">{n}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
