import { motion, useReducedMotion } from 'framer-motion'

const directionMap = {
  left: { x: -16, y: 0 },
  right: { x: 16, y: 0 },
  up: { x: 0, y: 10 },
}

export default function ScrollRevealSection({
  direction = 'up',
  className = '',
  children,
}) {
  const prefersReducedMotion = useReducedMotion()
  const offset = directionMap[direction] ?? directionMap.up

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, ...offset, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      className={['relative hcg-section-blend', className].join(' ')}
    >
      {children}
    </motion.div>
  )
}
