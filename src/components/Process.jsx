import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useMemo, useRef, useState } from 'react'
import Section from './Section.jsx'

const steps = [
  {
    name: 'Discover',
    hcg: 'Align on objectives, scope, constraints, stakeholders, and success metrics.',
    client: 'A clear engagement brief and success definition.',
    short: 'Goals + scope.',
  },
  {
    name: 'Analyze',
    hcg: 'Assess current state, data signals, and root causes behind performance gaps.',
    client: 'A diagnostic view of issues, opportunities, and constraints.',
    short: 'Current state.',
  },
  {
    name: 'Design',
    hcg: 'Develop the target state, solution options, and the path to delivery.',
    client: 'A strategy and design package with clear tradeoffs.',
    short: 'Plan + roadmap.',
  },
  {
    name: 'Execute',
    hcg: 'Support implementation, decision-making, and delivery with structured cadence.',
    client: 'Shipped work, aligned stakeholders, and measurable progress.',
    short: 'Ship outcomes.',
  },
  {
    name: 'Optimize',
    hcg: 'Measure outcomes, refine processes, and institutionalize improvements.',
    client: 'A sustainable operating rhythm and continuous improvement plan.',
    short: 'Improve + scale.',
  },
]

export default function Process() {
  const prefersReducedMotion = useReducedMotion()
  const wrapRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: wrapRef, offset: ['start end', 'end start'] })
  const glowX = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const [activeIdx, setActiveIdx] = useState(0)

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    if (prefersReducedMotion) return
    const idx = Math.max(0, Math.min(steps.length - 1, Math.round(v * (steps.length - 1))))
    setActiveIdx(idx)
  })

  const stepGlow = useMemo(() => {
    return 'shadow-[0_0_0_1px_rgba(47,111,180,0.28),0_0_34px_rgba(47,111,180,0.18)]'
  }, [])

  return (
    <Section
      id="process"
      eyebrow="Process"
      title="A proven approach to deliver results"
      subtitle="Axiom engagements are designed for clarity and execution: diagnose, design, deliver, and optimize with measurable outcomes."
      className="bg-hcg-night bg-hcg-beams"
    >
      <div ref={wrapRef} className="rounded-3xl bg-black/35 p-6 ring-1 ring-white/10 shadow-card backdrop-blur">
        <div className="relative">
          <div className="pointer-events-none absolute left-6 right-6 top-5 hidden h-px bg-hcg-400/40 lg:block" />
          <motion.div
            aria-hidden="true"
            style={{ left: glowX }}
            className="pointer-events-none absolute top-5 hidden h-px w-24 -translate-x-1/2 bg-hcg-300/70 blur-[0.5px] lg:block"
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={{
              hidden: {},
              visible: {
                transition: prefersReducedMotion
                  ? { staggerChildren: 0 }
                  : { staggerChildren: 0.08, delayChildren: 0.05 },
              },
            }}
            className="grid gap-6 lg:grid-cols-5"
          >
            {steps.map((s, idx) => (
              <motion.div
                key={s.name}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className="relative"
              >
                <div className="flex items-center gap-3 lg:flex-col lg:items-start">
                  <div className="relative">
                    <motion.div
                      animate={
                        prefersReducedMotion
                          ? { scale: 1 }
                          : idx === activeIdx
                            ? { scale: 1.08 }
                            : { scale: 1 }
                      }
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className={[
                        'grid h-12 w-12 place-items-center rounded-full bg-hcg-600/22 text-white ring-1 ring-hcg-300/45 shadow-soft',
                        idx === activeIdx ? stepGlow : '',
                      ].join(' ')}
                    >
                      <span className="text-base font-semibold">{idx + 1}</span>
                    </motion.div>
                    <div className="pointer-events-none absolute inset-0 rounded-full shadow-[0_0_0_1px_rgba(47,111,180,0.25),0_0_30px_rgba(47,111,180,0.18)]" />
                  </div>
                  <div className="lg:mt-4">
                    <div className="text-sm font-semibold tracking-tight text-white">
                      {s.name}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-white/75">
                      {s.short}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
