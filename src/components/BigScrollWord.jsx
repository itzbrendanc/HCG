import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

export default function BigScrollWord({ word, align = 'left' }) {
  const prefersReducedMotion = useReducedMotion()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  const x = useTransform(scrollYProgress, [0, 1], align === 'left' ? ['-8%', '8%'] : ['8%', '-8%'])
  const scale = useTransform(scrollYProgress, [0, 1], [0.98, 1.02])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.0, 0.26, 0.26, 0.0])

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        aria-hidden="true"
        style={prefersReducedMotion ? undefined : { x, scale, opacity }}
        className={[
          'select-none font-semibold tracking-[0.18em] text-white/10',
          'text-[72px] sm:text-[120px] lg:text-[180px]',
          align === 'left' ? 'left-0' : 'right-0',
          'absolute top-1/2 -translate-y-1/2 whitespace-nowrap',
        ].join(' ')}
      >
        {word}
      </motion.div>
    </div>
  )
}
