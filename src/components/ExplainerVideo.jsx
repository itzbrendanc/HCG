import { motion, useReducedMotion } from 'framer-motion'
import { useMemo, useRef, useState } from 'react'
import Section from './Section.jsx'

const concepts = ['Strategy', 'Marketing', 'Growth', 'Operations', 'Technology', 'Execution']

export default function ExplainerVideo() {
  const prefersReducedMotion = useReducedMotion()
  const videoRef = useRef(null)
  const [started, setStarted] = useState(false)

  // If the asset doesn't exist yet, this stays undefined and build still passes.
  // TODO: Add final HCG explainer video at src/assets/hcg-explainer.mp4
  const videoUrl = useMemo(() => {
    const matches = import.meta.glob('../assets/hcg-explainer.mp4', { eager: true, as: 'url' })
    return Object.values(matches)[0]
  }, [])

  const onPlayClick = async () => {
    if (!videoRef.current) return
    try {
      setStarted(true)
      // If there is no src yet, do nothing.
      if (!videoUrl) return
      await videoRef.current.play()
    } catch {
      // ignore autoplay/play errors
    }
  }

  return (
    <Section
      id="how"
      eyebrow="How HCG Works"
      title="How HCG Works"
      subtitle="A quick look at how we turn insight into action."
      className="bg-hcg-night bg-hcg-beams"
    >
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 14, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.85, ease: 'easeOut' }}
        className="relative overflow-hidden rounded-[34px] bg-black/35 ring-1 ring-hcg-400/30 shadow-card backdrop-blur glow-blue"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_520px_at_65%_35%,rgba(65,135,210,0.18),transparent_66%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(0,0,0,0))]" />

        <div className="relative p-6 sm:p-7">
          <div className="relative aspect-video overflow-hidden rounded-3xl bg-black/40 ring-1 ring-white/10">
            {videoUrl ? (
              <video
                ref={videoRef}
                className="h-full w-full object-cover"
                src={videoUrl}
                controls
                preload="metadata"
                muted
                playsInline
              />
            ) : (
              <div className="relative h-full w-full">
                <div className="absolute inset-0 bg-[radial-gradient(800px_520px_at_55%_40%,rgba(65,135,210,0.18),transparent_70%)]" />
                <div
                  className="absolute inset-0 opacity-[0.18]"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
                    backgroundSize: '54px 54px',
                    maskImage: 'radial-gradient(circle at 50% 45%, black 40%, transparent 78%)',
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="max-w-md px-6 text-center">
                    <div className="text-sm font-semibold tracking-[0.14em] uppercase text-white/55">
                      Video placeholder
                    </div>
                    <div className="mt-3 text-xl font-semibold tracking-tight text-white">
                      Add `src/assets/hcg-explainer.mp4`
                    </div>
                    <div className="mt-2 text-sm text-white/70">
                      The player will auto-load once the file exists.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Play overlay */}
            <motion.button
              type="button"
              onClick={onPlayClick}
              whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.99 }}
              className={[
                'absolute inset-0 grid place-items-center transition',
                started ? 'pointer-events-none opacity-0' : 'opacity-100',
              ].join(' ')}
              aria-label="Play explainer video"
            >
              <div className="relative grid place-items-center rounded-full bg-black/45 p-5 ring-1 ring-hcg-300/30 shadow-soft backdrop-blur">
                <div className="pointer-events-none absolute inset-0 rounded-full bg-hcg-600/15 blur-xl" />
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="relative h-7 w-7 text-hcg-200">
                  <path
                    d="M9 8.2v7.6L16.2 12 9 8.2Z"
                    fill="currentColor"
                    opacity="0.95"
                  />
                </svg>
              </div>
            </motion.button>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-6">
            {concepts.map((c) => (
              <div
                key={c}
                className="rounded-2xl bg-black/30 px-4 py-3 text-center ring-1 ring-white/10"
              >
                <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/70">
                  {c}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  )
}

