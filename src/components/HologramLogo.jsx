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
    <div
      className={[
        'relative mx-auto w-full max-w-[520px] sm:max-w-[560px] lg:max-w-[620px]',
        'overflow-visible',
        className,
      ].join(' ')}
    >
      {/* Under-spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[78%] h-40 w-[92%] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(65,135,210,0.26),transparent_70%)] blur-2xl"
      />

      <div className="relative" style={{ perspective: 1200 }}>
        {/* Aura */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 rounded-[48px] bg-[radial-gradient(closest-side,rgba(65,135,210,0.28),transparent_70%)] blur-3xl"
          animate={prefersReducedMotion ? undefined : { opacity: [0.32, 0.6, 0.32], scale: [0.98, 1.02, 0.98] }}
          transition={prefersReducedMotion ? undefined : { duration: 7.2, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Particles */}
        {!prefersReducedMotion ? (
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <Sparkle style={{ left: '10%', top: '18%' }} delay={0.2} />
            <Sparkle style={{ left: '22%', top: '70%' }} delay={1.1} />
            <Sparkle style={{ left: '56%', top: '10%' }} delay={0.7} />
            <Sparkle style={{ left: '80%', top: '40%' }} delay={1.5} />
            <Sparkle style={{ left: '90%', top: '74%' }} delay={0.9} />
          </div>
        ) : null}

        {/* Cube */}
        <motion.div
          className="relative mx-auto aspect-square w-full max-w-[460px] sm:max-w-[520px] lg:max-w-[560px]"
          style={{
            transformStyle: 'preserve-3d',
          }}
          animate={
            prefersReducedMotion
              ? { rotateY: 32, rotateX: -10 }
              : { rotateY: 360, rotateX: [-10, -7, -10] }
          }
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : {
                  rotateY: { duration: 22, repeat: Infinity, ease: 'linear' },
                  rotateX: { duration: 9, repeat: Infinity, ease: 'easeInOut' },
                }
          }
        >
          {/* Light sweep across cube */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-y-16 left-0 w-[44%] bg-[linear-gradient(90deg,transparent,rgba(65,135,210,0.22),transparent)] blur-2xl"
            animate={prefersReducedMotion ? undefined : { x: ['-70%', '190%'] }}
            transition={prefersReducedMotion ? undefined : { duration: 6.8, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.5 }}
            style={{ rotate: -12, mixBlendMode: 'screen', transform: 'translateZ(140px)' }}
          />

          {/* Faces */}
          {[
            { name: 'front', transform: 'rotateY(0deg) translateZ(140px)' },
            { name: 'right', transform: 'rotateY(90deg) translateZ(140px)' },
            { name: 'back', transform: 'rotateY(180deg) translateZ(140px)' },
            { name: 'left', transform: 'rotateY(-90deg) translateZ(140px)' },
          ].map((f) => (
            <div
              key={f.name}
              className="absolute inset-0 grid place-items-center"
              style={{ transform: f.transform, backfaceVisibility: 'hidden' }}
            >
              <div className="relative h-[82%] w-[82%] overflow-hidden rounded-[40px] bg-white/5 ring-1 ring-hcg-300/20 backdrop-blur-[6px]">
                {/* Scanlines */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-[0.18]"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(180deg, rgba(255,255,255,0.10) 0px, rgba(255,255,255,0.10) 1px, transparent 2px, transparent 6px)',
                    mixBlendMode: 'screen',
                    maskImage: 'radial-gradient(circle at 50% 45%, black 54%, transparent 82%)',
                  }}
                />

                {/* Edge glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0"
                  style={{
                    boxShadow:
                      '0 0 0 1px rgba(65,135,210,0.22), 0 0 42px rgba(65,135,210,0.18)',
                    mixBlendMode: 'screen',
                  }}
                />

                <img
                  src={hilltopLogo}
                  alt=""
                  draggable={false}
                  className="pointer-events-none select-none h-full w-full object-contain p-8"
                  style={{ filter: 'brightness(1.12) contrast(1.08) saturate(1.05)', opacity: 0.92 }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
