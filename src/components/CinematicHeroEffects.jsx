import { motion, useReducedMotion } from 'framer-motion'

export default function CinematicHeroEffects() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-hcg-surface opacity-60" />

      <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_72%_42%,rgba(65,135,210,0.26),transparent_62%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(900px_560px_at_22%_20%,rgba(255,255,255,0.06),transparent_62%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(800px_520px_at_70%_92%,rgba(65,135,210,0.12),transparent_65%)]" />

      {/* Soft “beam” */}
      <motion.div
        className="absolute left-1/2 top-0 h-[140%] w-[60%] -translate-x-1/2 -translate-y-[10%] bg-[conic-gradient(from_180deg_at_50%_50%,transparent,rgba(65,135,210,0.14),transparent)] blur-2xl"
        animate={prefersReducedMotion ? undefined : { rotate: [0, 4, 0] }}
        transition={prefersReducedMotion ? undefined : { duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '50% 45%' }}
      />

      {/* Subtle drifting lines */}
      <motion.div
        className="absolute -right-32 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full border border-hcg-400/20"
        animate={prefersReducedMotion ? undefined : { rotate: 360 }}
        transition={prefersReducedMotion ? undefined : { duration: 40, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute -right-44 top-1/2 h-[560px] w-[560px] -translate-y-1/2 rounded-full border border-hcg-400/12"
        animate={prefersReducedMotion ? undefined : { rotate: -360 }}
        transition={prefersReducedMotion ? undefined : { duration: 62, repeat: Infinity, ease: 'linear' }}
      />

      {/* Pulsing blue aura */}
      <motion.div
        className="absolute right-0 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-hcg-600/10 blur-3xl"
        animate={prefersReducedMotion ? undefined : { opacity: [0.14, 0.22, 0.14] }}
        transition={prefersReducedMotion ? undefined : { duration: 7.2, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
