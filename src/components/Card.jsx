import { motion, useReducedMotion } from 'framer-motion'

export default function Card({
  title,
  description,
  deliverable,
  tone = 'light',
  className = '',
  children,
}) {
  const prefersReducedMotion = useReducedMotion()

  const isDark = tone === 'dark'
  const base = isDark ? 'glass ring-1 ring-white/10' : 'glass ring-1 ring-white/10'
  const titleClass = isDark ? 'text-white' : 'text-white'
  const descClass = isDark ? 'text-white/70' : 'text-white/70'

  return (
    <motion.div
      initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={[
        'group rounded-2xl p-6 shadow-soft backdrop-blur transition',
        'hover:-translate-y-0.5 hover:shadow-card',
        base,
        className,
      ].join(' ')}
    >
      {title ? (
        <h3 className={['text-lg font-semibold tracking-tight', titleClass].join(' ')}>
          {title}
        </h3>
      ) : null}
      {description ? <p className={['mt-2 text-sm leading-relaxed', descClass].join(' ')}>{description}</p> : null}
      {deliverable ? (
        <div className="mt-4">
          <p className={['text-xs font-semibold uppercase tracking-[0.12em]', descClass].join(' ')}>
            Deliverable
          </p>
          <p className={['mt-1 text-sm leading-relaxed', titleClass].join(' ')}>
            {deliverable}
          </p>
        </div>
      ) : null}
      {children ? <div className="mt-4">{children}</div> : null}
    </motion.div>
  )
}
