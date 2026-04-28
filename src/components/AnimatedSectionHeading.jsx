import { motion, useReducedMotion } from 'framer-motion'

export default function AnimatedSectionHeading({
  lines = [],
  accentLineIdx = -1,
  className = '',
  sweep = true,
}) {
  const prefersReducedMotion = useReducedMotion()

  const container = {
    hidden: {},
    show: {
      transition: prefersReducedMotion ? { staggerChildren: 0 } : { staggerChildren: 0.08, delayChildren: 0.05 },
    },
  }

  const line = {
    hidden: { opacity: 0, y: 14, filter: 'blur(10px)' },
    show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.85, ease: 'easeOut' } },
  }

  return (
    <div className={['relative', className].join(' ')}>
      {sweep ? (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-y-16 left-0 w-[40%] bg-[linear-gradient(90deg,transparent,rgba(65,135,210,0.20),transparent)] blur-2xl"
          animate={prefersReducedMotion ? undefined : { x: ['-60%', '180%'] }}
          transition={prefersReducedMotion ? undefined : { duration: 6.8, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.6 }}
          style={{ rotate: -10 }}
        />
      ) : null}

      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}>
        {lines.map((t, i) => (
          <motion.div
            key={`${t}-${i}`}
            variants={line}
            className={[
              'font-semibold leading-[0.95] tracking-tight',
              i === accentLineIdx ? 'text-hcg-300' : 'text-white',
              'text-[44px] sm:text-[60px] lg:text-[76px]',
            ].join(' ')}
          >
            {t}
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
