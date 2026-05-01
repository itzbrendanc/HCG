import { motion, useReducedMotion } from 'framer-motion'
import Section from './Section.jsx'

const items = [
  { title: 'Strategy', desc: 'Identify the highest-leverage opportunities.' },
  { title: 'Marketing', desc: 'Create demand and attention.' },
  { title: 'Growth', desc: 'Convert attention into measurable results.' },
  { title: 'Operations', desc: 'Build systems that scale.' },
  { title: 'Technology', desc: 'Leverage tools and automation.' },
  { title: 'Execution', desc: 'Move quickly with clear direction.' },
]

export default function WhatWeDo() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <Section
      id="what-we-do"
      eyebrow="What We Do"
      className="bg-hcg-night"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Clear capabilities. Built to execute.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
            Six levers that move organizations from intent to measurable outcomes.
          </p>
        </div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((it) => (
            <div
              key={it.title}
              className="group rounded-3xl bg-black/30 p-6 ring-1 ring-white/10 backdrop-blur transition hover:ring-hcg-400/25"
            >
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-hcg-400/80 shadow-[0_0_18px_rgba(65,135,210,0.35)]" />
                <div className="text-lg font-semibold tracking-tight text-white">
                  {it.title}
                </div>
              </div>
              <div className="mt-3 text-sm leading-relaxed text-white/70">
                {it.desc}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}

