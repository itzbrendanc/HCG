import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import axiomMark from '../assets/axiom-mark.svg'

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(true)
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const onChange = () => setIsDesktop(mq.matches)
    onChange()
    mq.addEventListener?.('change', onChange)
    return () => mq.removeEventListener?.('change', onChange)
  }, [])
  return isDesktop
}

export default function MouseParallaxLogo() {
  const prefersReducedMotion = useReducedMotion()
  const isDesktop = useIsDesktop()
  const ref = useRef(null)

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 90, damping: 18, mass: 0.6 })
  const sy = useSpring(my, { stiffness: 90, damping: 18, mass: 0.6 })

  const x = useTransform(sx, (v) => v * 16)
  const y = useTransform(sy, (v) => v * 12)
  const ringRotate = useTransform(sx, (v) => v * 10)
  const glowShiftX = useTransform(sx, (v) => v * 10)
  const glowShiftY = useTransform(sy, (v) => v * 8)

  useEffect(() => {
    if (!isDesktop || prefersReducedMotion) return
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
  }, [isDesktop, prefersReducedMotion, mx, my])

  return (
    <div ref={ref} className="relative w-full">
      <motion.div
        aria-hidden="true"
        style={prefersReducedMotion ? undefined : { x: glowShiftX, y: glowShiftY }}
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(closest-side,rgba(65,135,210,0.30),transparent_58%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-12 -z-10 bg-[radial-gradient(closest-side,transparent_35%,rgba(0,0,0,0.92))]"
      />

      <motion.div
        style={prefersReducedMotion ? undefined : { x, y }}
        className="relative mx-auto grid place-items-center py-10 sm:py-12 lg:py-0"
      >
        {/* Pulsing aura behind logo (no panel/container) */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-hcg-600/12 blur-3xl"
          animate={prefersReducedMotion ? undefined : { opacity: [0.16, 0.30, 0.16], scale: [0.98, 1.02, 0.98] }}
          transition={prefersReducedMotion ? undefined : { duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Subtle particle streams */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/2 opacity-[0.22] blur-[0.5px]"
          animate={prefersReducedMotion ? undefined : { x: ['-6%', '6%', '-6%'] }}
          transition={prefersReducedMotion ? undefined : { duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          style={{ maskImage: 'radial-gradient(closest-side, black 55%, transparent 78%)' }}
        >
          <div className="absolute inset-x-0 top-[28%] h-px bg-[linear-gradient(90deg,transparent,rgba(65,135,210,0.7),transparent)]" />
          <div className="absolute inset-x-0 top-[54%] h-px bg-[linear-gradient(90deg,transparent,rgba(65,135,210,0.5),transparent)]" />
          <div className="absolute inset-x-0 top-[72%] h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.22),transparent)]" />
        </motion.div>

        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={prefersReducedMotion ? undefined : { rotate: ringRotate }}
        >
          <motion.div
            className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-hcg-400/20"
            animate={prefersReducedMotion ? undefined : { rotate: 360 }}
            transition={prefersReducedMotion ? undefined : { duration: 28, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute left-1/2 top-1/2 h-[660px] w-[660px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-hcg-400/10"
            animate={prefersReducedMotion ? undefined : { rotate: -360 }}
            transition={prefersReducedMotion ? undefined : { duration: 44, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>

        <motion.img
          src={axiomMark}
          alt="Axiom Strategy logo"
          initial={prefersReducedMotion ? { opacity: 0.9, scale: 1 } : { opacity: 0, scale: 0.96 }}
          animate={
            prefersReducedMotion
              ? { opacity: 0.9, scale: 1 }
              : { opacity: 0.92, scale: 1, y: [0, -8, 0] }
          }
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : {
                  opacity: { duration: 0.9, ease: 'easeOut' },
                  scale: { duration: 0.9, ease: 'easeOut' },
                  y: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.9 },
                }
          }
          draggable={false}
          className="pointer-events-none select-none hero-logo-blend mx-auto h-auto w-full max-w-[850px] drop-shadow-[0_0_34px_rgba(65,135,210,0.28)]"
        />
      </motion.div>
    </div>
  )
}
