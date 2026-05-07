import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import AnimatedStrategyGrid from './AnimatedStrategyGrid.jsx'

function splitWords(text) {
  return text.split(' ').map((w) => w.trim()).filter(Boolean)
}

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

export default function CinematicTextScene() {
  const prefersReducedMotion = useReducedMotion()
  const finePointer = useFinePointer()
  const ref = useRef(null)

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 80, damping: 18, mass: 0.6 })
  const sy = useSpring(my, { stiffness: 80, damping: 18, mass: 0.6 })

  const textX = useTransform(sx, (v) => v * 6)
  const textY = useTransform(sy, (v) => v * 3.5)

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

  const container = {
    hidden: {},
    show: {
      transition: prefersReducedMotion
        ? { staggerChildren: 0 }
        : { staggerChildren: 0.045, delayChildren: 0.08 },
    },
  }

  const word = {
    hidden: { opacity: 0, y: 14, filter: 'blur(8px)' },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  }

  return (
    <div ref={ref} className="relative isolate overflow-hidden rounded-[34px] bg-black/15 ring-1 ring-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_50%_30%,rgba(65,135,210,0.22),transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(760px_520px_at_15%_15%,rgba(255,255,255,0.06),transparent_62%)]" />

      <AnimatedStrategyGrid density={16} />

      {/* Blue light sweep */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-y-24 left-0 w-[40%] bg-[linear-gradient(90deg,transparent,rgba(65,135,210,0.20),transparent)] blur-2xl"
        animate={prefersReducedMotion ? undefined : { x: ['-60%', '180%'] }}
        transition={prefersReducedMotion ? undefined : { duration: 8.6, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.8 }}
        style={{ transformOrigin: '50% 50%', rotate: -10 }}
      />

      <motion.div
        style={prefersReducedMotion ? undefined : { x: textX, y: textY }}
        className="relative mx-auto px-6 py-16 sm:px-10 sm:py-20 lg:px-14"
      >
        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="text-[56px] font-semibold leading-[0.96] tracking-tight text-white sm:text-[76px] lg:text-[104px] xl:text-[116px]"
        >
          <div className="block">
            {splitWords('Clarity.').map((w) => (
              <motion.span key={`l1-${w}`} variants={word} className="inline-block">
                {w}{' '}
              </motion.span>
            ))}
          </div>
          <div className="mt-3 block text-hcg-300">
            {splitWords('Execution. Measurable Growth.').map((w) => (
              <motion.span
                key={`l2-${w}`}
                variants={word}
                className="inline-block transition-[letter-spacing,text-shadow] duration-300 ease-out hover:tracking-[0.02em] hover:[text-shadow:0_0_28px_rgba(65,135,210,0.22)]"
              >
                {w}{' '}
              </motion.span>
            ))}
          </div>
        </motion.h1>

        <motion.div
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: prefersReducedMotion ? 0 : 0.25 }}
          className="mt-6 max-w-2xl text-[16px] leading-relaxed text-white/80 sm:text-lg"
        >
          Axiom Strategy helps organizations turn ideas into structured, execution-driven growth.
        </motion.div>
      </motion.div>
    </div>
  )
}
