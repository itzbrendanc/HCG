import { motion, useReducedMotion } from 'framer-motion'
import hilltopLogo from '../assets/hilltop-logo.png'

function Sparkle({ style, delay = 0 }) {
  return (
    <motion.span
      aria-hidden="true"
      className="absolute h-1.5 w-1.5 rounded-full bg-hcg-200/80"
      style={style}
      animate={{ opacity: [0.15, 0.9, 0.15], scale: [0.8, 1.35, 0.8] }}
      transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay }}
    />
  )
}

export default function HologramLogo({ className = '' }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className={['relative mx-auto w-full max-w-[520px] sm:max-w-[560px] lg:max-w-[620px]', className].join(' ')}>
      {/* Under-spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[72%] h-40 w-[92%] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(65,135,210,0.26),transparent_70%)] blur-2xl"
      />

      {/* Main hologram stack */}
      <motion.div
        className="relative"
        style={{
          perspective: 1100,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Aura */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 rounded-[40px] bg-[radial-gradient(closest-side,rgba(65,135,210,0.28),transparent_70%)] blur-3xl"
          animate={prefersReducedMotion ? undefined : { opacity: [0.35, 0.6, 0.35], scale: [0.98, 1.02, 0.98] }}
          transition={prefersReducedMotion ? undefined : { duration: 6.8, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Particles */}
        {!prefersReducedMotion ? (
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <Sparkle style={{ left: '12%', top: '22%' }} delay={0.2} />
            <Sparkle style={{ left: '22%', top: '68%' }} delay={1.1} />
            <Sparkle style={{ left: '58%', top: '16%' }} delay={0.7} />
            <Sparkle style={{ left: '78%', top: '44%' }} delay={1.5} />
            <Sparkle style={{ left: '88%', top: '72%' }} delay={0.9} />
          </div>
        ) : null}

        {/* Rotating hologram plane */}
        <motion.div
          animate={
            prefersReducedMotion
              ? { rotateY: 0, rotateX: 0 }
              : { rotateY: 360, rotateX: [-2, 2, -2] }
          }
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { rotateY: { duration: 18, repeat: Infinity, ease: 'linear' }, rotateX: { duration: 8, repeat: Infinity, ease: 'easeInOut' } }
          }
          className="relative"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Scanlines */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[40px] opacity-[0.22]"
            style={{
              backgroundImage: 'repeating-linear-gradient(180deg, rgba(255,255,255,0.10) 0px, rgba(255,255,255,0.10) 1px, transparent 2px, transparent 6px)',
              maskImage: 'radial-gradient(circle at 50% 45%, black 52%, transparent 78%)',
              mixBlendMode: 'screen',
            }}
          />

          {/* Light sweep */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-y-14 left-0 w-[42%] bg-[linear-gradient(90deg,transparent,rgba(65,135,210,0.22),transparent)] blur-2xl"
            animate={prefersReducedMotion ? undefined : { x: ['-70%', '190%'] }}
            transition={prefersReducedMotion ? undefined : { duration: 6.8, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.4 }}
            style={{ rotate: -12, mixBlendMode: 'screen' }}
          />

          {/* Logo */}
          <motion.img
            src={hilltopLogo}
            alt="Hilltop Consulting Group logo"
            draggable={false}
            className="pointer-events-none select-none w-full h-auto"
            style={{
              filter: 'brightness(1.1) contrast(1.08) saturate(1.05)',
            }}
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />

          {/* Neon edge glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[40px]"
            style={{
              boxShadow:
                '0 0 0 1px rgba(65,135,210,0.18), 0 0 42px rgba(65,135,210,0.18)',
              opacity: 0.8,
              mixBlendMode: 'screen',
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

