import { motion, useReducedMotion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
}

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  variant = 'dark',
  className = '',
  children,
}) {
  const prefersReducedMotion = useReducedMotion()

  const isDark = variant === 'dark'
  const headingClass = isDark ? 'text-white' : 'text-night-50'
  const subClass = isDark ? 'text-white/70' : 'text-night-100/75'
  const eyebrowClass = isDark ? 'text-white/55' : 'text-night-100/70'

  return (
    <section
      id={id}
      className={[
        'scroll-mt-24',
        isDark ? 'bg-night-950 text-white' : 'bg-night-950 text-white',
        className,
      ].join(' ')}
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        {(eyebrow || title || subtitle) && (
          <motion.div
            initial={prefersReducedMotion ? 'visible' : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={variants}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            {eyebrow ? (
              <p
                className={[
                  'text-sm font-medium tracking-[0.14em] uppercase',
                  eyebrowClass,
                ].join(' ')}
              >
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2
                className={[
                  'mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl',
                  headingClass,
                ].join(' ')}
              >
                {title}
              </h2>
            ) : null}
            {subtitle ? (
              <p className={['mt-4 text-lg leading-relaxed', subClass].join(' ')}>
                {subtitle}
              </p>
            ) : null}
          </motion.div>
        )}

        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}
