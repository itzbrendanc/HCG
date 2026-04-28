import { motion, useReducedMotion } from 'framer-motion'

const directionMap = {
  left: { x: -24, y: 0 },
  right: { x: 24, y: 0 },
  up: { x: 0, y: 18 },
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
      initial={prefersReducedMotion ? false : { opacity: 0, ...offset, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.85, ease: 'easeOut' }}
      className={['relative hcg-section-blend', className].join(' ')}
    >
      {children}
    </motion.div>
  )
}
