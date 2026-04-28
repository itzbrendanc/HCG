import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

function useFinePointer() {
  const [fine, setFine] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    const onChange = () => setFine(mq.matches)
    onChange()
    mq.addEventListener?.('change', onChange)
    return () => mq.removeEventListener?.('change', onChange)
  }, [])
  return fine
}

export default function MagneticButton({
  as = 'a',
  strength = 10,
  className = '',
  children,
  ...props
}) {
  const prefersReducedMotion = useReducedMotion()
  const finePointer = useFinePointer()
  const ref = useRef(null)

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 160, damping: 18, mass: 0.5 })
  const sy = useSpring(my, { stiffness: 160, damping: 18, mass: 0.5 })
  const MotionTag = as === 'button' ? motion.button : motion.a

  const onMove = (e) => {
    if (!finePointer || prefersReducedMotion) return
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / Math.max(1, r.width)
    const py = (e.clientY - r.top) / Math.max(1, r.height)
    mx.set((px - 0.5) * strength)
    my.set((py - 0.5) * strength)
  }

  const onLeave = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <MotionTag
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={prefersReducedMotion ? undefined : { x: sx, y: sy }}
      whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.99 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={className}
      {...props}
    >
      {children}
    </MotionTag>
  )
}
