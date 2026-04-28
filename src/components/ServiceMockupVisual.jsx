import { motion, useReducedMotion } from 'framer-motion'

function Chip({ children }) {
  return (
    <div className="rounded-full bg-black/40 px-3 py-1 text-[11px] font-semibold tracking-[0.12em] uppercase text-white/70 ring-1 ring-white/10">
      {children}
    </div>
  )
}

function Frame({ children }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-3xl bg-black/35 ring-1 ring-white/10 shadow-soft">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(560px_260px_at_25%_20%,rgba(65,135,210,0.22),transparent_65%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(560px_260px_at_80%_10%,rgba(255,255,255,0.07),transparent_62%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(0,0,0,0))]" />
      {children}
    </div>
  )
}

export default function ServiceMockupVisual({ kind, active }) {
  const prefersReducedMotion = useReducedMotion()
  const glow = active ? 'rgba(65,135,210,0.34)' : 'rgba(65,135,210,0.18)'

  if (kind === 'strategy') {
    return (
      <Frame>
        <div className="relative h-full w-full p-5">
          <div className="flex flex-wrap gap-2">
            <Chip>Market</Chip>
            <Chip>Position</Chip>
            <Chip>Channel</Chip>
            <Chip>Action</Chip>
          </div>
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
              backgroundSize: '34px 34px',
              maskImage: 'radial-gradient(circle at 45% 55%, black 44%, transparent 80%)',
            }}
          />
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 560 280" fill="none">
            <path d="M120 180C180 130 230 118 280 118c70 0 110 30 160 22" stroke={glow} strokeWidth="2" opacity="0.85" />
            <path d="M160 210c52-28 86-52 120-64 62-22 108-6 170-36" stroke="rgba(255,255,255,0.14)" strokeWidth="2" opacity="0.75" />
          </svg>
          {[
            { x: 140, y: 165 },
            { x: 240, y: 132 },
            { x: 320, y: 132 },
            { x: 420, y: 146 },
          ].map((p, i) => (
            <motion.div
              key={`${p.x}-${p.y}`}
              className="absolute h-2.5 w-2.5 rounded-full bg-hcg-300/80"
              style={{
                left: p.x,
                top: p.y,
                boxShadow: `0 0 0 1px ${glow}, 0 0 26px ${glow}`,
              }}
              animate={prefersReducedMotion ? undefined : { opacity: [0.35, 0.9, 0.35], scale: [0.92, 1.1, 0.92] }}
              transition={prefersReducedMotion ? undefined : { duration: 3.8 + i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}
          <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-3">
            {['Signal', 'Tradeoffs', 'Next move'].map((t) => (
              <div key={t} className="rounded-2xl bg-black/35 p-3 ring-1 ring-white/10">
                <div className="text-xs font-semibold text-white/70">{t}</div>
                <div className="mt-1 h-1.5 rounded-full bg-white/5 ring-1 ring-white/10" />
              </div>
            ))}
          </div>
        </div>
      </Frame>
    )
  }

  if (kind === 'marketing') {
    return (
      <Frame>
        <div className="relative h-full w-full p-5">
          <div className="flex flex-wrap gap-2">
            <Chip>Message</Chip>
            <Chip>Audience</Chip>
            <Chip>Demand</Chip>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3">
            {['Creative', 'Channel', 'Offer'].map((t) => (
              <div key={t} className="rounded-2xl bg-black/35 p-3 ring-1 ring-white/10">
                <div className="text-xs font-semibold text-white/70">{t}</div>
                <div className="mt-2 h-2 rounded-full bg-white/5 ring-1 ring-white/10" />
                <div className="mt-2 h-2 w-4/5 rounded-full bg-white/5 ring-1 ring-white/10" />
              </div>
            ))}
          </div>

          {/* audience pulse */}
          <motion.div
            aria-hidden="true"
            className="absolute right-6 top-16 grid h-24 w-24 place-items-center rounded-3xl bg-black/35 ring-1 ring-white/10"
          >
            <motion.div
              className="h-2.5 w-2.5 rounded-full bg-hcg-300/80"
              style={{ boxShadow: `0 0 0 1px ${glow}, 0 0 26px ${glow}` }}
              animate={prefersReducedMotion ? undefined : { scale: [0.9, 1.25, 0.9], opacity: [0.4, 0.95, 0.4] }}
              transition={prefersReducedMotion ? undefined : { duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
            />
            {[0, 1, 2].map((i) => (
          <motion.div
                key={`ring-${i}`}
                className="absolute rounded-full border border-hcg-400/18"
                style={{ width: 30 + i * 18, height: 30 + i * 18 }}
                animate={prefersReducedMotion ? undefined : { opacity: [0.12, 0.38, 0.12] }}
                transition={prefersReducedMotion ? undefined : { duration: 4.6 + i * 0.6, repeat: Infinity, ease: 'easeInOut' }}
              />
            ))}
          </motion.div>

          <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-black/35 p-4 ring-1 ring-white/10">
            <div className="flex items-center justify-between">
              <div className="text-xs font-semibold tracking-[0.12em] uppercase text-white/55">Live</div>
              <div className="text-xs font-semibold text-hcg-200">CTR ↑</div>
            </div>
            <div className="mt-3 h-2 rounded-full bg-white/5 ring-1 ring-white/10">
              <motion.div
                className="h-2 rounded-full bg-hcg-500/55"
                initial={prefersReducedMotion ? { width: '62%' } : { width: '0%' }}
                whileInView={{ width: '62%' }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
              />
            </div>
          </div>
        </div>
      </Frame>
    )
  }

  if (kind === 'growth') {
    return (
      <Frame>
        <div className="relative h-full w-full p-5">
          <div className="flex flex-wrap gap-2">
            <Chip>Leads</Chip>
            <Chip>Conversion</Chip>
            <Chip>Revenue</Chip>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3">
            {[
              { k: 'Pipeline', v: '+18%' },
              { k: 'Conv.', v: '3.2x' },
              { k: 'ARR', v: '$' },
            ].map((m) => (
              <div key={m.k} className="rounded-2xl bg-black/35 p-3 ring-1 ring-white/10">
                <div className="text-xs font-semibold tracking-[0.12em] uppercase text-white/55">{m.k}</div>
                <div className="mt-1 text-sm font-semibold text-white">{m.v}</div>
              </div>
            ))}
          </div>
          <div className="absolute inset-x-5 bottom-5 top-[52%] overflow-hidden rounded-2xl bg-black/30 ring-1 ring-white/10">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 560 180" fill="none" preserveAspectRatio="none">
              <path d="M22 138C80 118 126 96 170 96c44 0 56 16 94 16 48 0 70-26 118-86" stroke="rgba(65,135,210,0.70)" strokeWidth="3" strokeLinecap="round" />
              <path d="M22 138h516" stroke="rgba(255,255,255,0.10)" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <motion.div
              aria-hidden="true"
              className="absolute left-0 top-0 h-full w-[45%] bg-[linear-gradient(90deg,transparent,rgba(65,135,210,0.18),transparent)] blur-xl"
              animate={prefersReducedMotion ? undefined : { x: ['-40%', '160%'] }}
              transition={prefersReducedMotion ? undefined : { duration: 6.2, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.2 }}
            />
          </div>
        </div>
      </Frame>
    )
  }

  if (kind === 'operations') {
    return (
      <Frame>
        <div className="relative h-full w-full p-5">
          <div className="flex flex-wrap gap-2">
            <Chip>Intake</Chip>
            <Chip>Review</Chip>
            <Chip>Deliver</Chip>
          </div>
          <div className="mt-5 grid gap-3 lg:grid-cols-3">
            {['Intake', 'Review', 'Deliver'].map((lane) => (
              <div key={lane} className="rounded-3xl bg-black/30 p-4 ring-1 ring-white/10">
                <div className="text-xs font-semibold tracking-[0.12em] uppercase text-white/55">{lane}</div>
                <div className="mt-3 grid gap-2">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={`${lane}-${i}`}
                      className="rounded-2xl bg-white/5 p-3 ring-1 ring-white/10"
                      animate={prefersReducedMotion ? undefined : { y: [0, -2, 0] }}
                      transition={prefersReducedMotion ? undefined : { duration: 5.8, repeat: Infinity, ease: 'easeInOut', delay: i * 0.25 }}
                    >
                      <div className="h-2 w-3/4 rounded-full bg-white/10" />
                      <div className="mt-2 h-2 w-1/2 rounded-full bg-white/10" />
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Frame>
    )
  }

  if (kind === 'technology') {
    return (
      <Frame>
        <div className="relative h-full w-full p-5">
          <div className="flex flex-wrap gap-2">
            <Chip>Automate</Chip>
            <Chip>Analyze</Chip>
            <Chip>Improve</Chip>
          </div>
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.16]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
              backgroundSize: '22px 22px',
              maskImage: 'radial-gradient(circle at 55% 45%, black 42%, transparent 78%)',
            }}
          />
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 560 280" fill="none" preserveAspectRatio="none">
            <path d="M120 160h140" stroke="rgba(65,135,210,0.55)" strokeWidth="3" strokeLinecap="round" />
            <path d="M300 120h160" stroke="rgba(255,255,255,0.12)" strokeWidth="3" strokeLinecap="round" />
            <path d="M300 220h190" stroke="rgba(65,135,210,0.35)" strokeWidth="3" strokeLinecap="round" />
          </svg>
          {[
            { x: 120, y: 160 },
            { x: 300, y: 120 },
            { x: 300, y: 220 },
            { x: 460, y: 120 },
            { x: 490, y: 220 },
          ].map((p, i) => (
            <motion.div
              key={`${p.x}-${p.y}`}
              className="absolute h-3 w-3 rounded-full bg-hcg-300/80"
              style={{
                left: p.x,
                top: p.y,
                transform: 'translate(-50%, -50%)',
                boxShadow: `0 0 0 1px ${glow}, 0 0 28px ${glow}`,
              }}
              animate={prefersReducedMotion ? undefined : { opacity: [0.25, 0.9, 0.25] }}
              transition={prefersReducedMotion ? undefined : { duration: 3.2 + i * 0.25, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}
          <div className="absolute bottom-5 left-5 right-5 grid grid-cols-2 gap-3">
            {['Sync', 'Automation'].map((t) => (
              <div key={t} className="rounded-2xl bg-black/35 p-4 ring-1 ring-white/10">
                <div className="text-xs font-semibold tracking-[0.12em] uppercase text-white/55">{t}</div>
                <div className="mt-2 h-2 rounded-full bg-white/5 ring-1 ring-white/10" />
              </div>
            ))}
          </div>
        </div>
      </Frame>
    )
  }

  // execution
  return (
    <Frame>
      <div className="relative h-full w-full p-5">
        <div className="flex flex-wrap gap-2">
          <Chip>Plan</Chip>
          <Chip>Build</Chip>
          <Chip>Launch</Chip>
        </div>
        <div className="mt-5 rounded-3xl bg-black/30 p-5 ring-1 ring-white/10">
          <div className="flex items-center justify-between text-xs font-semibold tracking-[0.12em] uppercase text-white/55">
            <span>Roadmap</span>
            <span className="text-white/45">Week 6</span>
          </div>
          <div className="mt-4 h-px bg-white/10" />
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {[
              { t: 'Milestone 1', done: true },
              { t: 'Milestone 2', done: true },
              { t: 'Milestone 3', done: active },
            ].map((m) => (
              <div key={m.t} className="rounded-2xl bg-black/35 p-4 ring-1 ring-white/10">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-white">{m.t}</div>
                  <div
                    className={[
                      'grid h-7 w-7 place-items-center rounded-full ring-1',
                      m.done ? 'bg-hcg-600/25 ring-hcg-300/35' : 'bg-white/5 ring-white/10',
                    ].join(' ')}
                    style={m.done ? { boxShadow: `0 0 26px ${glow}` } : undefined}
                  >
                    {m.done ? (
                      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-hcg-200">
                        <path d="M20 7 10 17l-4-4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : null}
                  </div>
                </div>
                <div className="mt-3 h-2 rounded-full bg-white/5 ring-1 ring-white/10">
                  <motion.div
                    className="h-2 rounded-full bg-hcg-500/55"
                    initial={prefersReducedMotion ? { width: m.done ? '82%' : '34%' } : { width: '0%' }}
                    whileInView={{ width: m.done ? '82%' : '34%' }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Frame>
  )
}
