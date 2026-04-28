import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const words = ['Research.', 'Strategy.', 'Systems.', 'Execution.']

export default function CinematicWordWall() {
  const prefersReducedMotion = useReducedMotion()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const x = useTransform(scrollYProgress, [0, 1], ['-2%', '2%'])
  const glow = useTransform(scrollYProgress, [0, 0.5, 1], [0.12, 0.22, 0.12])

  const container = {
    hidden: {},
    show: {
      transition: prefersReducedMotion ? { staggerChildren: 0 } : { staggerChildren: 0.09, delayChildren: 0.06 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 18, filter: 'blur(10px)' },
    show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.85, ease: 'easeOut' } },
  }

  return (
    <div ref={ref} className="relative overflow-hidden rounded-[34px] bg-black/25 ring-1 ring-hcg-400/18 shadow-card backdrop-blur">
      <motion.div
        aria-hidden="true"
        style={prefersReducedMotion ? undefined : { opacity: glow }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_520px_at_50%_40%,rgba(65,135,210,0.22),transparent_66%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '52px 52px',
          maskImage: 'radial-gradient(circle at 45% 45%, black 40%, transparent 78%)',
        }}
      />

      {/* Light sweep */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-y-24 left-0 w-[36%] bg-[linear-gradient(90deg,transparent,rgba(65,135,210,0.18),transparent)] blur-2xl"
        animate={prefersReducedMotion ? undefined : { x: ['-70%', '190%'] }}
        transition={prefersReducedMotion ? undefined : { duration: 7.2, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.2 }}
        style={{ rotate: -12 }}
      />

      {/* Floating data panels */}
      <motion.div
        aria-hidden="true"
        style={prefersReducedMotion ? undefined : { x }}
        className="pointer-events-none absolute right-8 top-8 hidden gap-3 lg:grid"
      >
        {[
          { k: 'Signal', v: '+14%' },
          { k: 'Friction', v: '-9%' },
          { k: 'Momentum', v: 'Q2' },
        ].map((m) => (
          <motion.div
            key={m.k}
            className="rounded-2xl bg-black/35 px-4 py-3 ring-1 ring-white/10"
            animate={prefersReducedMotion ? undefined : { y: [0, -6, 0] }}
            transition={prefersReducedMotion ? undefined : { duration: 7.6, repeat: Infinity, ease: 'easeInOut', delay: m.k === 'Signal' ? 0 : m.k === 'Friction' ? 0.6 : 1.2 }}
          >
            <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">{m.k}</div>
            <div className="mt-1 text-sm font-semibold text-white">{m.v}</div>
          </motion.div>
        ))}
      </motion.div>

      <div className="relative px-7 py-12 sm:px-10 sm:py-14">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-sm font-semibold tracking-[0.14em] uppercase text-white/55"
        >
          Insight becomes action
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="mt-4"
        >
          <motion.div
            variants={item}
            className="text-[44px] font-semibold leading-[0.95] tracking-tight text-white sm:text-[60px] lg:text-[74px]"
          >
            Insight becomes <span className="text-hcg-300">action.</span>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
          >
            {words.map((w) => (
              <motion.div
                key={w}
                whileHover={prefersReducedMotion ? undefined : { y: -4 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="rounded-3xl bg-black/30 px-5 py-5 ring-1 ring-white/10 shadow-soft"
              >
                <div className="text-2xl font-semibold tracking-tight text-white">{w}</div>
                <div className="mt-2 text-sm font-semibold text-white/60">→</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

