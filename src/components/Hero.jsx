import { motion, useReducedMotion } from 'framer-motion'
import CinematicHeroEffects from './CinematicHeroEffects.jsx'
import HeroTitleSequence from './HeroTitleSequence.jsx'

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()

  const handleExploreServices = (e) => {
    e.preventDefault()
    const el = document.getElementById('services')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

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
          Hilltop Consulting Group <span className="text-white/35">•</span> HCG
        </motion.p>

        <HeroTitleSequence />

        <div className="mt-10">
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

        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="mt-10 flex items-center justify-center"
        >
          <a
            href="#services"
            onClick={handleExploreServices}
            className="group inline-flex items-center gap-3 rounded-full bg-white/5 px-5 py-2 text-xs font-semibold tracking-[0.14em] uppercase text-white/65 ring-1 ring-white/10 transition hover:bg-white/8"
          >
            <span>Scroll to Explore</span>
            <span className="relative h-5 w-3 rounded-full ring-1 ring-white/15">
              <motion.span
                aria-hidden="true"
                animate={prefersReducedMotion ? undefined : { y: [0, 8, 0] }}
                transition={prefersReducedMotion ? undefined : { duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute left-1/2 top-1 h-1 w-1 -translate-x-1/2 rounded-full bg-hcg-300"
              />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
