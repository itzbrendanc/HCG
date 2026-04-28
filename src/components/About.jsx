import { motion, useReducedMotion } from 'framer-motion'
import Section from './Section.jsx'
import hilltopLogo from '../assets/hilltop-logo.png'
import AnimatedStrategyGrid from './AnimatedStrategyGrid.jsx'

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
              About HCG
            </div>
            <h3 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              Built to turn insight into action.
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-white/75 sm:text-base">
              Hilltop Consulting Group is a student-led marketing and growth strategy organization built to turn ideas into clear action.
            </p>

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
          <div className="relative overflow-hidden rounded-3xl glass p-7 ring-1 ring-hcg-400/28 shadow-soft glow-blue">
            <div className="pointer-events-none absolute inset-0">
              <AnimatedStrategyGrid density={16} />
              <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_60%_35%,rgba(65,135,210,0.22),transparent_66%)]" />
            </div>

            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-y-24 left-0 w-[38%] bg-[linear-gradient(90deg,transparent,rgba(65,135,210,0.18),transparent)] blur-2xl"
              animate={prefersReducedMotion ? undefined : { x: ['-70%', '190%'] }}
              transition={prefersReducedMotion ? undefined : { duration: 7.2, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.2 }}
              style={{ rotate: -10 }}
            />

            <div className="relative">
              <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">
                Identity
              </div>
              <div className="mt-4 grid place-items-center rounded-3xl bg-black/30 p-6 ring-1 ring-white/10">
                <div className="pointer-events-none absolute -inset-10 rounded-full bg-hcg-600/14 blur-3xl" />
                <img
                  src={hilltopLogo}
                  alt="Hilltop Consulting Group logo"
                  className="relative w-full max-w-[380px] opacity-95"
                  style={{ transform: 'translateY(-10px)' }}
                />
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-2 text-xs font-semibold tracking-[0.14em] uppercase text-white/55">
                <span className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">Strategy</span>
                <span className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">Growth</span>
                <span className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">Execution</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
