import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'

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

export default function AnimatedStrategyGrid({ density = 18, className = '' }) {
  const prefersReducedMotion = useReducedMotion()
  const finePointer = useFinePointer()
  const ref = useRef(null)

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 70, damping: 18, mass: 0.6 })
  const sy = useSpring(my, { stiffness: 70, damping: 18, mass: 0.6 })

  const shiftX = useTransform(sx, (v) => v * 18)
  const shiftY = useTransform(sy, (v) => v * 12)

  useEffect(() => {
    if (!finePointer || prefersReducedMotion) return
    const el = ref.current
    if (!el) return

    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      const px = (e.clientX - r.left) / Math.max(1, r.width)
      const py = (e.clientY - r.top) / Math.max(1, r.height)
      mx.set((px - 0.5) * 2)
      my.set((py - 0.5) * 2)
    }
    const onLeave = () => {
      mx.set(0)
      my.set(0)
    }

    el.addEventListener('mousemove', onMove, { passive: true })
    el.addEventListener('mouseleave', onLeave, { passive: true })
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [finePointer, prefersReducedMotion, mx, my])

  const nodes = useMemo(() => {
    const safe = Math.max(10, Math.min(28, density))
    const items = []
    for (let i = 0; i < safe; i += 1) {
      const seed = (i * 9301 + 49297) % 233280
      const rx = (seed / 233280) * 100
      const ry = (((seed * 3) % 233280) / 233280) * 100
      const size = 6 + (i % 4)
      items.push({ x: rx, y: ry, s: size, d: 4.8 + (i % 5) * 0.6 })
    }
    return items
  }, [density])

  return (
    <div ref={ref} className={['pointer-events-none absolute inset-0 overflow-hidden', className].join(' ')}>
      {/* Subtle grid */}
      <motion.div
        aria-hidden="true"
        style={prefersReducedMotion ? undefined : { x: shiftX, y: shiftY }}
        className="absolute inset-0 opacity-[0.18]"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '46px 46px',
            maskImage: 'radial-gradient(circle at 40% 40%, black 38%, transparent 78%)',
          }}
        />
      </motion.div>

      {/* Connection lines */}
      <motion.div
        aria-hidden="true"
        style={prefersReducedMotion ? undefined : { x: shiftX, y: shiftY }}
        className="absolute inset-0 opacity-[0.22]"
      >
        <motion.div
          className="absolute left-1/2 top-[34%] h-px w-[140%] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,rgba(65,135,210,0.55),transparent)] blur-[0.3px]"
          animate={prefersReducedMotion ? undefined : { x: ['-6%', '6%', '-6%'] }}
          transition={prefersReducedMotion ? undefined : { duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute left-1/2 top-[58%] h-px w-[140%] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)] blur-[0.3px]"
          animate={prefersReducedMotion ? undefined : { x: ['6%', '-6%', '6%'] }}
          transition={prefersReducedMotion ? undefined : { duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* Orbiting elements */}
      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-hcg-400/10"
        animate={prefersReducedMotion ? undefined : { rotate: 360 }}
        transition={prefersReducedMotion ? undefined : { duration: 42, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-hcg-400/6"
        animate={prefersReducedMotion ? undefined : { rotate: -360 }}
        transition={prefersReducedMotion ? undefined : { duration: 64, repeat: Infinity, ease: 'linear' }}
      />

      {/* Nodes */}
      <motion.div
        aria-hidden="true"
        style={prefersReducedMotion ? undefined : { x: shiftX, y: shiftY }}
        className="absolute inset-0"
      >
        {nodes.map((n, idx) => (
          <motion.div
            key={`${Math.round(n.x * 1000)}-${Math.round(n.y * 1000)}-${n.s}`}
            className="absolute rounded-full bg-hcg-300/80 blur-[0.2px]"
            style={{
              left: `${n.x}%`,
              top: `${n.y}%`,
              width: n.s,
              height: n.s,
              boxShadow: '0 0 0 1px rgba(65,135,210,0.18), 0 0 26px rgba(65,135,210,0.18)',
              transform: 'translate(-50%, -50%)',
              opacity: 0.55,
            }}
            animate={prefersReducedMotion ? undefined : { opacity: [0.35, 0.85, 0.35], scale: [0.92, 1.08, 0.92] }}
            transition={prefersReducedMotion ? undefined : { duration: n.d, repeat: Infinity, ease: 'easeInOut', delay: (idx % 6) * 0.12 }}
          />
        ))}
      </motion.div>

      {/* Data bars */}
      <motion.div
        aria-hidden="true"
        className="absolute bottom-10 left-10 hidden gap-2 lg:flex"
        animate={prefersReducedMotion ? undefined : { y: [0, -6, 0] }}
        transition={prefersReducedMotion ? undefined : { duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        {[36, 52, 28, 64, 44].map((h, i) => (
          <div
            key={`${h}-${i}`}
            className="w-2 rounded-full bg-hcg-400/25 ring-1 ring-hcg-300/15"
            style={{ height: h }}
          />
        ))}
      </motion.div>
    </div>
  )
}
