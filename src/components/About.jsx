import { motion, useReducedMotion } from 'framer-motion'
import Section from './Section.jsx'
import HologramLogo from './HologramLogo.jsx'

export default function About() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <Section id="about" eyebrow="About Us" className="bg-hcg-night bg-hcg-beams">
      <div className="grid items-start gap-6 lg:grid-cols-12 lg:gap-10">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, x: -18, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
          className="lg:col-span-6"
        >
          <div className="rounded-3xl bg-black/30 p-7 ring-1 ring-white/10 shadow-card backdrop-blur">
            <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">
              About ASG
            </div>
            <h3 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              Axiom Strategy Group
            </h3>
            <div className="mt-4 grid gap-3 text-[15px] leading-relaxed text-white/75 sm:text-base">
              <p>
                Axiom Strategy Group is a student-led consulting and growth strategy firm focused on solving real business problems through structured execution.
              </p>
              <p>
                We operate at the intersection of strategy, marketing, and systems—helping organizations identify opportunities, move faster, and scale with clarity.
              </p>
            </div>
            <div className="mt-3 text-xs font-semibold tracking-[0.18em] uppercase text-white/50">
              Student-led • Project-based • Execution-focused
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {[
                { k: 'Strategy', v: 'Clarity on the next move.' },
                { k: 'Growth', v: 'Levers that compound.' },
                { k: 'Execution', v: 'Roadmaps that ship.' },
              ].map((m) => (
                <div key={m.k} className="relative overflow-hidden rounded-2xl bg-black/35 p-4 ring-1 ring-white/10">
                  <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-hcg-600/10 blur-3xl" />
                  <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">
                    {m.k}
                  </div>
                  <div className="mt-2 text-sm font-semibold tracking-tight text-white">
                    {m.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, x: 18, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
          className="lg:col-span-6"
        >
          <div className="relative">
            <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">
              Identity
            </div>

            {/* Hologram logo: no card/panel behind it */}
            <div className="mt-4">
              <HologramLogo />
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-semibold tracking-[0.14em] uppercase text-white/55">
              <span className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">Strategy</span>
              <span className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">Growth</span>
              <span className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">Execution</span>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
