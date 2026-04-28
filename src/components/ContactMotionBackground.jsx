import { motion, useReducedMotion } from 'framer-motion'

export default function ContactMotionBackground() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
      <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_20%_8%,rgba(65,135,210,0.16),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(800px_520px_at_85%_18%,rgba(255,255,255,0.06),transparent_62%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0))]" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
          maskImage: 'radial-gradient(circle at 40% 30%, black 40%, transparent 72%)',
        }}
      />

      {/* Flowing lines */}
      <motion.div
        className="absolute left-1/2 top-0 h-[140%] w-[90%] -translate-x-1/2 -translate-y-[10%] bg-[conic-gradient(from_180deg_at_50%_50%,transparent,rgba(65,135,210,0.14),transparent)] blur-2xl"
        animate={prefersReducedMotion ? undefined : { rotate: [0, 10, 0] }}
        transition={prefersReducedMotion ? undefined : { duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '50% 45%' }}
      />

      {/* Glowing nodes */}
      {[
        { left: '18%', top: '26%', s: 10 },
        { left: '70%', top: '22%', s: 8 },
        { left: '56%', top: '64%', s: 12 },
        { left: '30%', top: '72%', s: 7 },
      ].map((n, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-hcg-300/80 blur-[0.2px]"
          style={{
            left: n.left,
            top: n.top,
            width: n.s,
            height: n.s,
            boxShadow: '0 0 0 1px rgba(65,135,210,0.20), 0 0 28px rgba(65,135,210,0.18)',
          }}
          animate={prefersReducedMotion ? undefined : { opacity: [0.45, 0.85, 0.45], scale: [0.92, 1.06, 0.92] }}
          transition={prefersReducedMotion ? undefined : { duration: 5.8 + i * 0.6, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

