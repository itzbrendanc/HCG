import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Section from './Section.jsx'
import AnimatedStrategyGrid from './AnimatedStrategyGrid.jsx'
import AnimatedSectionHeading from './AnimatedSectionHeading.jsx'
import ApproachSystemVisual from './ApproachSystemVisual.jsx'

const phrases = ['Think Clearly.', 'Move Fast.', 'Build Systems.', 'Create Impact.']

export default function TeamBasedIntelligence() {
  const prefersReducedMotion = useReducedMotion()
  const [idx, setIdx] = useState(0)
  const wrapRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: wrapRef, offset: ['start end', 'end start'] })
  const shimmer = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  useEffect(() => {
    if (prefersReducedMotion) return undefined
    const id = window.setInterval(() => setIdx((v) => (v + 1) % phrases.length), 2600)
    return () => window.clearInterval(id)
  }, [prefersReducedMotion])

  return (
    <Section
      id="approach"
      eyebrow="Approach"
      className="bg-hcg-night bg-hcg-beams"
      innerClassName="min-h-[90vh] flex flex-col justify-center"
    >
      <div ref={wrapRef} className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <AnimatedSectionHeading
            lines={['Think Clearly.', 'Move Fast.']}
            accentLineIdx={1}
            className="max-w-xl"
            sweep
          />
          <motion.div
            style={prefersReducedMotion ? undefined : { x: shimmer }}
            className="mt-5 text-sm font-semibold text-white/75"
          >
            A sharper way to turn insight into action.
          </motion.div>

          <div className="mt-8 space-y-3">
            {phrases.slice(2).map((p) => (
              <motion.div
                key={p}
                initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="text-2xl font-semibold tracking-tight text-white"
              >
                <span className="text-hcg-200">{p.split(' ')[0]}</span> {p.split(' ').slice(1).join(' ')}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="lg:col-span-7"
        >
          <ApproachSystemVisual />
        </motion.div>
      </div>

      {/* Keep the timed cinematic phrase loop as a subtle background cue */}
      {!prefersReducedMotion ? (
        <div className="relative mt-10 hidden rounded-3xl bg-black/20 p-6 ring-1 ring-white/10 backdrop-blur lg:block">
          <div className="pointer-events-none absolute inset-0">
            <AnimatedStrategyGrid density={14} />
          </div>
          <div className="relative">
            <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">
              Loop
            </div>
            <div className="mt-4 min-h-[54px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={phrases[idx]}
                  initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -8, filter: 'blur(10px)' }}
                  transition={{ duration: 0.65, ease: 'easeOut' }}
                  className="text-2xl font-semibold tracking-tight text-white"
                >
                  {phrases[idx]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      ) : null}
    </Section>
  )
}
