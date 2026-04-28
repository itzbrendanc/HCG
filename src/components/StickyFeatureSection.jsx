import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import BigScrollWord from './BigScrollWord.jsx'

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

export default function StickyFeatureSection({ items }) {
  const prefersReducedMotion = useReducedMotion()
  const isDesktop = useIsDesktop()
  const wrapRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ['start start', 'end end'],
  })

  const activeIdx = useTransform(scrollYProgress, [0, 1], [0, Math.max(0, items.length - 1)])
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (!isDesktop) return
    const unsub = activeIdx.on('change', (v) => setActive(Math.round(v)))
    return () => unsub()
  }, [activeIdx, isDesktop])

  const containerHeight = useMemo(() => {
    // Tall story on desktop; compact on mobile.
    return isDesktop ? `${items.length * 85}vh` : 'auto'
  }, [isDesktop, items.length])

  if (!isDesktop) {
    return (
      <div className="mx-auto max-w-6xl px-5 pb-12 pt-10 sm:px-8">
        <div className="grid gap-4">
          {items.map((it) => (
            <div key={it.title} className="rounded-3xl bg-black/35 p-6 ring-1 ring-white/10 backdrop-blur">
              <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">
                {it.eyebrow}
              </div>
              <div className="mt-2 text-2xl font-semibold tracking-tight text-white">{it.title}</div>
              <ul className="mt-4 grid gap-2 text-sm text-white/75">
                {it.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-hcg-400" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">{it.visual}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div ref={wrapRef} style={{ height: containerHeight }} className="relative">
      <div className="sticky top-0">
        <div className="relative mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <BigScrollWord word={items[active]?.bigWord ?? 'STRATEGY'} align="left" />
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-12 bg-[radial-gradient(closest-side,rgba(65,135,210,0.20),transparent_62%)]"
                />
                <div className="relative rounded-[34px] bg-black/30 p-6 ring-1 ring-white/10 backdrop-blur">
                  <div className="hcg-card-accent rounded-[28px] bg-black/25 p-4 ring-1 ring-white/10">
                    {items[active]?.visual}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -left-6 top-0 hidden h-full w-px bg-hcg-400/25 lg:block" />

                {items.map((it, idx) => {
                  const isActive = idx === active
                  return (
                    <motion.div
                      key={it.title}
                      initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 18 }}
                      animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0.15, x: -10 }}
                      transition={{ duration: 0.55, ease: 'easeOut' }}
                      className={[
                        'rounded-3xl p-6',
                        isActive ? 'bg-black/35 ring-1 ring-hcg-400/25 glow-blue' : 'bg-transparent',
                      ].join(' ')}
                    >
                      <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">
                        {it.eyebrow}
                      </div>
                      <div className="mt-2 text-3xl font-semibold tracking-tight text-white">
                        {it.title}
                      </div>
                      <ul className="mt-4 grid gap-2 text-sm text-white/75">
                        {it.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-hcg-400" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )
                })}

                <motion.div
                  aria-hidden="true"
                  className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-white/10"
                >
                  <motion.div
                    style={{ scaleX: scrollYProgress }}
                    className="h-full origin-left rounded-full bg-hcg-400/70"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
