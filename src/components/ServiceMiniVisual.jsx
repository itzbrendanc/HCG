import { motion, useReducedMotion } from 'framer-motion'

export default function ServiceMiniVisual({ kind = 'strategy', active = false }) {
  const prefersReducedMotion = useReducedMotion()
  const glow = active ? 'rgba(65,135,210,0.42)' : 'rgba(65,135,210,0.22)'

  const common = 'absolute inset-0 rounded-2xl ring-1 ring-hcg-300/15 bg-black/30'

  if (kind === 'marketing') {
    return (
      <div className={common} aria-hidden="true">
        <motion.div
          className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ boxShadow: `0 0 0 1px ${glow}, 0 0 28px ${glow}` }}
          animate={prefersReducedMotion ? undefined : { scale: active ? [0.95, 1.1, 0.95] : [0.96, 1.04, 0.96] }}
          transition={prefersReducedMotion ? undefined : { duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        />
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-hcg-400/20"
            style={{ width: 44 + i * 22, height: 44 + i * 22 }}
            animate={prefersReducedMotion ? undefined : { opacity: [0.15, 0.45, 0.15], scale: [0.98, 1.02, 0.98] }}
            transition={prefersReducedMotion ? undefined : { duration: 4.6 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>
    )
  }

  if (kind === 'growth') {
    return (
      <div className={common} aria-hidden="true">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 220 120" fill="none">
          <path d="M18 96C50 80 70 66 92 66c22 0 30 10 48 10 22 0 32-16 62-52" stroke="rgba(65,135,210,0.65)" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M18 96h184" stroke="rgba(255,255,255,0.10)" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M18 20v76" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <motion.div
          className="absolute left-0 top-0 h-full w-[45%] bg-[linear-gradient(90deg,transparent,rgba(65,135,210,0.18),transparent)] blur-xl"
          animate={prefersReducedMotion ? undefined : { x: ['-40%', '160%'] }}
          transition={prefersReducedMotion ? undefined : { duration: 6.2, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.2 }}
        />
      </div>
    )
  }

  if (kind === 'operations') {
    return (
      <div className={common} aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '26px 26px',
            maskImage: 'radial-gradient(circle at 45% 40%, black 42%, transparent 80%)',
          }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 h-[74px] w-[74px] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-hcg-400/20"
          animate={prefersReducedMotion ? undefined : { rotate: 360 }}
          transition={prefersReducedMotion ? undefined : { duration: 16, repeat: Infinity, ease: 'linear' }}
          style={{ boxShadow: `0 0 28px ${glow}` }}
        />
      </div>
    )
  }

  if (kind === 'technology') {
    return (
      <div className={common} aria-hidden="true">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 220 120" fill="none">
          <path d="M36 86V44h58v42H36Z" stroke="rgba(65,135,210,0.55)" strokeWidth="2" />
          <path d="M126 32h58v56h-58V32Z" stroke="rgba(255,255,255,0.10)" strokeWidth="2" />
          <path d="M94 65h32" stroke="rgba(65,135,210,0.55)" strokeWidth="2" strokeLinecap="round" />
          <path d="M155 88v18M155 14v18M115 32h-18M207 60h-18" stroke="rgba(255,255,255,0.10)" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <motion.div
          className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-hcg-300/80"
          animate={prefersReducedMotion ? undefined : { opacity: [0.25, 0.9, 0.25] }}
          transition={prefersReducedMotion ? undefined : { duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ boxShadow: `0 0 0 1px ${glow}, 0 0 26px ${glow}` }}
        />
      </div>
    )
  }

  if (kind === 'execution') {
    return (
      <div className={common} aria-hidden="true">
        <div className="absolute left-6 right-6 top-[44%] h-px bg-hcg-400/25" />
        {[
          { left: '18%', on: true },
          { left: '42%', on: true },
          { left: '68%', on: active },
        ].map((m) => (
          <motion.div
            key={m.left}
            className="absolute top-[44%] h-3 w-3 -translate-y-1/2 rounded-full"
            style={{
              left: m.left,
              background: m.on ? 'rgba(65,135,210,0.85)' : 'rgba(255,255,255,0.20)',
              boxShadow: m.on ? `0 0 0 1px ${glow}, 0 0 26px ${glow}` : 'none',
            }}
            animate={prefersReducedMotion ? undefined : m.on ? { scale: [0.96, 1.12, 0.96] } : undefined}
            transition={prefersReducedMotion ? undefined : { duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>
    )
  }

  // strategy
  return (
    <div className={common} aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(65,135,210,0.18),transparent_60%)]" />
      <motion.div
        className="absolute left-10 top-10 h-2 w-2 rounded-full bg-hcg-300/80"
        animate={prefersReducedMotion ? undefined : { opacity: [0.25, 0.85, 0.25] }}
        transition={prefersReducedMotion ? undefined : { duration: 3.1, repeat: Infinity, ease: 'easeInOut' }}
        style={{ boxShadow: `0 0 0 1px ${glow}, 0 0 24px ${glow}` }}
      />
      <motion.div
        className="absolute right-10 bottom-10 h-2 w-2 rounded-full bg-hcg-300/80"
        animate={prefersReducedMotion ? undefined : { opacity: [0.25, 0.85, 0.25] }}
        transition={prefersReducedMotion ? undefined : { duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
        style={{ boxShadow: `0 0 0 1px ${glow}, 0 0 24px ${glow}` }}
      />
      <div className="absolute left-12 right-12 top-[52%] h-px bg-hcg-400/20" />
    </div>
  )
}

