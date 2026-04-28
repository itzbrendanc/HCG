import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Section from './Section.jsx'
import AnimatedStrategyGrid from './AnimatedStrategyGrid.jsx'

const phrases = ['Think Clearly.', 'Move Fast.', 'Build Systems.', 'Create Impact.']

export default function TeamBasedIntelligence() {
  const prefersReducedMotion = useReducedMotion()
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    if (prefersReducedMotion) return undefined
    const id = window.setInterval(() => setIdx((v) => (v + 1) % phrases.length), 2600)
    return () => window.clearInterval(id)
  }, [prefersReducedMotion])

  return (
    <Section
      id="why"
      eyebrow="Why Clients Choose HCG"
      className="bg-hcg-night bg-hcg-beams"
      innerClassName="min-h-[90vh] flex flex-col justify-center"
    >
      <div className="grid gap-7 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <div className="text-sm font-semibold tracking-[0.14em] uppercase text-white/55">
            Why HCG
          </div>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Partnership. Integrity. Impact.
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-white/75">
            A sharper way to turn insight into action.
          </p>
        </div>

        <motion.div
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="lg:col-span-7"
        >
          <div className="relative overflow-hidden rounded-3xl bg-black/35 p-7 ring-1 ring-hcg-400/25 shadow-card backdrop-blur glow-blue">
            <div className="absolute inset-0">
              <AnimatedStrategyGrid density={20} />
              <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_70%_40%,rgba(65,135,210,0.18),transparent_66%)]" />
            </div>

            {/* System diagram / flow lines */}
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.30]"
              animate={prefersReducedMotion ? undefined : { opacity: [0.22, 0.34, 0.22] }}
              transition={prefersReducedMotion ? undefined : { duration: 6.2, repeat: Infinity, ease: 'easeInOut' }}
              style={{ maskImage: 'radial-gradient(circle at 55% 45%, black 52%, transparent 80%)' }}
            >
              <div className="absolute left-10 top-12 h-px w-[60%] bg-[linear-gradient(90deg,transparent,rgba(65,135,210,0.75),transparent)]" />
              <div className="absolute left-16 top-24 h-px w-[72%] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)]" />
              <div className="absolute right-10 bottom-20 h-px w-[64%] bg-[linear-gradient(90deg,transparent,rgba(65,135,210,0.55),transparent)]" />
            </motion.div>

            <div className="relative">
              <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">
                The HCG standard
              </div>

              <div className="mt-5 min-h-[112px] sm:min-h-[132px]">
                {prefersReducedMotion ? (
                  <div className="grid gap-2">
                    {phrases.map((p) => (
                      <div key={p} className="text-2xl font-semibold tracking-tight text-white">
                        {p}
                      </div>
                    ))}
                  </div>
                ) : (
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={phrases[idx]}
                      initial={{ opacity: 0, y: 14, filter: 'blur(10px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, y: -10, filter: 'blur(10px)' }}
                      transition={{ duration: 0.7, ease: 'easeOut' }}
                      className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl"
                    >
                      <span className="text-hcg-200">{phrases[idx].split(' ')[0]}</span>{' '}
                      {phrases[idx].split(' ').slice(1).join(' ')}
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  { k: 'Signal', v: 'Know what matters' },
                  { k: 'System', v: 'Operational clarity' },
                  { k: 'Momentum', v: 'Measurable progress' },
                ].map((m) => (
                  <motion.div
                    key={m.k}
                    initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.55, ease: 'easeOut' }}
                    className="rounded-2xl bg-black/35 p-4 ring-1 ring-white/10"
                  >
                    <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">
                      {m.k}
                    </div>
                    <div className="mt-2 text-sm font-semibold tracking-tight text-white">
                      {m.v}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
