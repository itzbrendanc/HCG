import { motion, useReducedMotion } from 'framer-motion'
import CinematicTextScene from './CinematicTextScene.jsx'
import MagneticButton from './MagneticButton.jsx'

export default function HeroTitleSequence() {
  const prefersReducedMotion = useReducedMotion()

  const handleExploreServices = (e) => {
    e.preventDefault()
    const el = document.getElementById('services')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleRequestConsultation = (e) => {
    e.preventDefault()
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="relative">
      <CinematicTextScene />

      <motion.div
        initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: prefersReducedMotion ? 0 : 0.2 }}
        className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
      >
        <MagneticButton
          as="a"
          href="#contact"
          onClick={handleRequestConsultation}
          className="rounded-xl bg-hcg-600 px-5 py-3 text-center text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow"
        >
          Request a Consultation
        </MagneticButton>
        <MagneticButton
          as="a"
          href="#services"
          onClick={handleExploreServices}
          className="rounded-xl bg-white/5 px-5 py-3 text-center text-sm font-semibold text-white ring-1 ring-white/12 transition hover:bg-white/10"
        >
          Explore Our Services
        </MagneticButton>

        <div className="text-sm font-semibold text-white/70 sm:ml-auto">
          Built for strategy, execution, and lasting impact.
        </div>
      </motion.div>
    </div>
  )
}

