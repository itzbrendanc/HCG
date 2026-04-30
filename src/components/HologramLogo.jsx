import { motion, useReducedMotion } from 'framer-motion'
import axiomMark from '../assets/axiom-mark.svg'

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

      <div className="relative" style={{ perspective: 900 }}>
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

        {/* Cube (true 6-face hologram cube) */}
        <motion.div
          className="relative mx-auto"
          style={{
            transformStyle: 'preserve-3d',
            width: 'clamp(200px, 36vw, 310px)',
            height: 'clamp(200px, 36vw, 310px)',
            ['--cube']: 'clamp(200px, 36vw, 310px)',
            ['--z']: 'calc(var(--cube) / 2)',
          }}
          animate={
            prefersReducedMotion
              ? { rotateX: -15, rotateY: 32 }
              : { rotateX: -15, rotateY: 360 }
          }
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : {
                  rotateY: { duration: 14, repeat: Infinity, ease: 'linear' },
                }
          }
        >
          {/* Light sweep across the cube volume */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-y-16 left-0 w-[44%] bg-[linear-gradient(90deg,transparent,rgba(65,135,210,0.22),transparent)] blur-2xl"
            animate={prefersReducedMotion ? undefined : { x: ['-70%', '190%'] }}
            transition={prefersReducedMotion ? undefined : { duration: 6.8, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.5 }}
            style={{ rotate: -12, mixBlendMode: 'screen', transform: 'translateZ(calc(var(--z) + 20px))' }}
          />

          {/* Six faces */}
          {[
            { name: 'front', transform: 'translateZ(var(--z))', hasLogo: true },
            { name: 'back', transform: 'rotateY(180deg) translateZ(var(--z))', hasLogo: true },
            { name: 'right', transform: 'rotateY(90deg) translateZ(var(--z))', hasLogo: true },
            { name: 'left', transform: 'rotateY(-90deg) translateZ(var(--z))', hasLogo: true },
            { name: 'top', transform: 'rotateX(90deg) translateZ(var(--z))', hasLogo: false },
            { name: 'bottom', transform: 'rotateX(-90deg) translateZ(var(--z))', hasLogo: false },
          ].map((face) => (
            <div
              key={face.name}
              className="absolute inset-0"
              style={{
                transform: face.transform,
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background: 'rgba(14, 165, 233, 0.08)',
                  border: '1px solid rgba(56, 189, 248, 0.45)',
                  boxShadow:
                    'inset 0 0 30px rgba(14,165,233,0.15), 0 0 25px rgba(14,165,233,0.20)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                {/* Subtle scanlines on every face */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-[0.16]"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(180deg, rgba(255,255,255,0.10) 0px, rgba(255,255,255,0.10) 1px, transparent 2px, transparent 6px)',
                    mixBlendMode: 'screen',
                  }}
                />

                {/* Top/bottom grid */}
                {!face.hasLogo ? (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-[0.22]"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)',
                      backgroundSize: '26px 26px',
                      maskImage: 'radial-gradient(circle at 50% 50%, black 55%, transparent 85%)',
                    }}
                  />
                ) : null}

                {/* Edge highlight overlay */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0"
                  style={{
                    boxShadow:
                      'inset 0 0 0 1px rgba(255,255,255,0.10), 0 0 0 1px rgba(65,135,210,0.28), 0 0 48px rgba(65,135,210,0.12)',
                    mixBlendMode: 'screen',
                  }}
                />

                {face.hasLogo ? (
                  <img
                    src={axiomMark}
                    alt=""
                    draggable={false}
                    className="pointer-events-none select-none h-full w-full object-contain p-10"
                    style={{
                      filter: 'brightness(1.12) contrast(1.08) saturate(1.05)',
                      opacity: 0.9,
                    }}
                  />
                ) : (
                  <div className="absolute inset-0" />
                )}
              </div>
            </div>
          ))}

          {/* Neon cube edges (outer outline on the cube volume) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              boxShadow: '0 0 0 1px rgba(56,189,248,0.22), 0 0 60px rgba(14,165,233,0.18)',
              transform: 'translateZ(0px)',
            }}
          />
        </motion.div>
      </div>
    </div>
  )
}
