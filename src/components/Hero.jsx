import { motion, useReducedMotion } from 'framer-motion'
import hilltopLogoTransparent from '../assets/hilltop-logo-transparent.png'

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()

  const handleExploreServices = (e) => {
    e.preventDefault()
    const el = document.getElementById('services')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleRequestConsultation = (e) => {
    e.preventDefault()
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="top" className="relative scroll-mt-24 bg-hcg-surface">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <div>
            <motion.p
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-semibold tracking-[0.14em] text-white/70 uppercase ring-1 ring-white/10"
            >
              Hilltop Consulting Group <span className="text-white/35">•</span> HCG
            </motion.p>

            <motion.h1
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="mt-6 text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              <span className="block">Strategic Solutions.</span>
              <span className="mt-2 block text-hcg-300">Measurable Impact.</span>
            </motion.h1>

            <motion.p
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: 'easeOut', delay: 0.05 }}
              className="mt-6 max-w-xl text-[18px] leading-relaxed text-white/75 sm:text-lg"
            >
              We help businesses find growth opportunities and solve operational challenges—with strategy,
              technology, and execution support.
            </motion.p>

            <motion.div
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: 0.08 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a
                href="#contact"
                onClick={handleRequestConsultation}
                className="rounded-xl bg-hcg-600 px-5 py-3 text-center text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow"
              >
                Request a Consultation
              </a>
              <a
                href="#services"
                onClick={handleExploreServices}
                className="rounded-xl bg-white/5 px-5 py-3 text-center text-sm font-semibold text-white ring-1 ring-white/12 transition hover:bg-white/10"
              >
                Explore Our Services
              </a>
            </motion.div>

            <div className="mt-10">
              <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/45">
                Trusted by forward-thinking teams
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4 text-white/40 sm:grid-cols-5">
                {['Aurora', 'Northpoint', 'Summit', 'Veritas', 'Pioneer'].map((n) => (
                  <div key={n} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-hcg-400/70" />
                    <span className="text-xs font-semibold tracking-[0.12em] uppercase">{n}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-8 text-sm font-semibold text-white/70">
              Built for strategy, execution, and lasting impact.
            </p>
          </div>

          <div className="lg:justify-self-end">
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="relative mx-auto flex w-full max-w-4xl items-center justify-center"
            >
              <div className="relative w-full">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(closest-side,rgba(65,135,210,0.22),transparent_60%)]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-10 -z-10 bg-[radial-gradient(closest-side,transparent_35%,rgba(0,0,0,0.92))]"
                />

                <motion.img
                  src={hilltopLogoTransparent}
                  alt="Hilltop Consulting Group logo"
                  initial={prefersReducedMotion ? { opacity: 0.9, scale: 1 } : { opacity: 0, scale: 0.96 }}
                  animate={
                    prefersReducedMotion
                      ? { opacity: 0.9, scale: 1 }
                      : { opacity: 0.9, scale: 1, y: [0, -8, 0] }
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
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="mt-10 flex items-center justify-center"
        >
          <a
            href="#services"
            onClick={handleExploreServices}
            className="group inline-flex items-center gap-3 rounded-full bg-white/5 px-5 py-2 text-xs font-semibold tracking-[0.14em] uppercase text-white/65 ring-1 ring-white/10 transition hover:bg-white/8"
          >
            <span>Scroll to Explore</span>
            <span className="relative h-5 w-3 rounded-full ring-1 ring-white/15">
              <motion.span
                aria-hidden="true"
                animate={prefersReducedMotion ? undefined : { y: [0, 8, 0] }}
                transition={prefersReducedMotion ? undefined : { duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute left-1/2 top-1 h-1 w-1 -translate-x-1/2 rounded-full bg-hcg-300"
              />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
