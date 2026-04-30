import { motion, useReducedMotion } from 'framer-motion'

export default function DescriptionBox() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className="bg-hcg-night">
      <div className="mx-auto max-w-6xl px-5 pb-8 sm:px-8 sm:pb-12">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-[30px] bg-black/40 px-6 py-6 ring-1 ring-hcg-400/35 shadow-soft glow-blue backdrop-blur sm:px-8 sm:py-7"
        >
          <div className="pointer-events-none absolute -left-20 -top-24 h-56 w-56 rounded-full bg-hcg-600/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -right-28 h-72 w-72 rounded-full bg-hcg-500/12 blur-3xl" />

          <p className="relative text-[16px] font-medium leading-relaxed tracking-tight text-white/85 sm:text-[17px]">
            Axiom Strategy helps businesses identify{' '}
            <span className="font-semibold text-hcg-200">growth opportunities</span>,{' '}
            <span className="font-semibold text-hcg-200">strengthen operations</span>, and make{' '}
            <span className="font-semibold text-hcg-200">smarter strategic decisions</span> — combining{' '}
            <span className="font-semibold text-hcg-200">market research</span>,{' '}
            <span className="font-semibold text-hcg-200">data-driven analysis</span>,{' '}
            <span className="font-semibold text-hcg-200">technology insight</span>, and{' '}
            <span className="font-semibold text-hcg-200">execution support</span> to turn complexity into{' '}
            <span className="font-semibold text-hcg-200">clear, measurable progress</span>.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
