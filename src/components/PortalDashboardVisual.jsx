import { motion, useReducedMotion } from 'framer-motion'

function pill(status) {
  const base =
    'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ring-1'
  switch (status) {
    case 'New':
      return `${base} bg-white/5 text-white/75 ring-white/12`
    case 'In Review':
      return `${base} bg-hcg-600/18 text-white ring-hcg-300/35`
    case 'Booked':
      return `${base} bg-white/10 text-white ring-white/18`
    case 'Sent':
      return `${base} bg-hcg-700/22 text-white ring-hcg-400/35`
    case 'Closed':
      return `${base} bg-white/10 text-white ring-white/18`
    default:
      return `${base} bg-white/5 text-white/75 ring-white/12`
  }
}

const rows = [
  { name: 'Northpoint Logistics', status: 'In Review', owner: 'J. Patel', next: 'Follow-up' },
  { name: 'Summit Healthcare', status: 'Sent', owner: 'A. Kim', next: 'Review call' },
  { name: 'Veritas Holdings', status: 'New', owner: 'M. Rivera', next: 'Intro email' },
  { name: 'Pioneer Partners', status: 'Booked', owner: 'S. Chen', next: 'Prep notes' },
]

function initials(name) {
  const parts = name.split(' ').filter(Boolean)
  const a = parts[0]?.[0] ?? 'A'
  const b = parts[1]?.[0] ?? parts[0]?.[1] ?? 'X'
  return `${a}${b}`.toUpperCase()
}

function MetricIcon({ kind }) {
  const common = 'h-9 w-9 rounded-xl ring-1 ring-white/10 bg-white/5 flex items-center justify-center'
  if (kind === 'Leads') {
    return (
      <div className={common}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M16 11c1.66 0 3-1.57 3-3.5S17.66 4 16 4s-3 1.57-3 3.5S14.34 11 16 11Z" stroke="rgba(255,255,255,0.75)" strokeWidth="1.7" />
          <path d="M8 11c1.66 0 3-1.57 3-3.5S9.66 4 8 4 5 5.57 5 7.5 6.34 11 8 11Z" stroke="rgba(65,135,210,0.9)" strokeWidth="1.7" />
          <path d="M3.5 20c.6-3.2 2.9-5 4.5-5h1c1.6 0 3.9 1.8 4.5 5" stroke="rgba(65,135,210,0.75)" strokeWidth="1.7" strokeLinecap="round" />
          <path d="M13.5 20c.35-2.2 1.9-3.9 3.5-3.9h.7c1.6 0 3.15 1.7 3.5 3.9" stroke="rgba(255,255,255,0.55)" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      </div>
    )
  }
  if (kind === 'In flight') {
    return (
      <div className={common}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M5 12h14" stroke="rgba(65,135,210,0.9)" strokeWidth="1.9" strokeLinecap="round" />
          <path d="M12 5v14" stroke="rgba(255,255,255,0.65)" strokeWidth="1.9" strokeLinecap="round" />
          <path d="M7 7h4" stroke="rgba(255,255,255,0.45)" strokeWidth="1.9" strokeLinecap="round" />
          <path d="M13 17h4" stroke="rgba(255,255,255,0.45)" strokeWidth="1.9" strokeLinecap="round" />
        </svg>
      </div>
    )
  }
  return (
    <div className={common}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M6 16l4-4 3 3 5-7" stroke="rgba(65,135,210,0.95)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 18h12" stroke="rgba(255,255,255,0.55)" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    </div>
  )
}

export default function PortalDashboardVisual() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className="relative overflow-hidden rounded-3xl bg-black/35 p-7 ring-1 ring-hcg-400/30 shadow-card backdrop-blur glow-blue-strong">
      {/* Outer glow */}
      <div className="pointer-events-none absolute -inset-24 bg-[radial-gradient(900px_520px_at_55%_35%,rgba(65,135,210,0.22),transparent_66%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_520px_at_20%_18%,rgba(255,255,255,0.06),transparent_64%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(0,0,0,0))]" />

      {/* Subtle internal grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)',
          backgroundSize: '84px 84px',
          maskImage: 'radial-gradient(circle at 50% 38%, black 42%, transparent 82%)',
        }}
      />

      <div className="relative">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-xs font-semibold tracking-[0.18em] uppercase text-white/55">
              Internal Team Portal Preview
            </div>
            <div className="mt-2 text-2xl font-semibold tracking-tight text-white">
              Built like an operating system.
            </div>
            <div className="mt-2 text-sm text-white/75">
              Every project moves through a clear workflow — from intake to follow-up to delivery.
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[
              { k: 'Leads', v: '24' },
              { k: 'In flight', v: '7' },
              { k: 'This week', v: '+3' },
            ].map((m) => (
              <div
                key={m.k}
                className="rounded-2xl bg-black/30 px-4 py-3 ring-1 ring-white/10 backdrop-blur"
              >
                <div className="flex items-center gap-3">
                  <MetricIcon kind={m.k} />
                  <div>
                    <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">
                      {m.k}
                    </div>
                    <div className="mt-1 text-sm font-semibold text-white">{m.v}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress bars */}
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {[
            { k: 'Status', label: 'On track', v: 68 },
            { k: 'Follow-up', label: 'In progress', v: 52 },
            { k: 'Delivery', label: 'In motion', v: 36 },
          ].map((m) => (
            <div key={m.k} className="rounded-2xl bg-black/30 p-4 ring-1 ring-white/10">
              <div className="flex items-center justify-between">
                <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">
                  {m.k}
                  <span className="ml-2 font-semibold tracking-normal text-white/45 normal-case">
                    — {m.label}
                  </span>
                </div>
                <span className="text-xs font-semibold text-white/45">{m.v}%</span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-white/5 ring-1 ring-white/10">
                <motion.div
                  className="h-2 rounded-full bg-gradient-to-r from-hcg-600/70 via-hcg-400/70 to-hcg-300/40 shadow-[0_0_18px_rgba(65,135,210,0.18)]"
                  initial={prefersReducedMotion ? { width: `${m.v}%` } : { width: '0%' }}
                  whileInView={{ width: `${m.v}%` }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.9, ease: 'easeOut' }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* CRM table */}
        <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-white/10">
          <div className="grid grid-cols-12 gap-3 bg-white/5 px-4 py-3 text-xs font-semibold text-white/60">
            <div className="col-span-5">Leads</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-2">Owner</div>
            <div className="col-span-3">Next Move</div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={{
              hidden: {},
              visible: { transition: prefersReducedMotion ? { staggerChildren: 0 } : { staggerChildren: 0.08, delayChildren: 0.05 } },
            }}
          >
            {rows.map((r) => (
              <motion.div
                key={r.name}
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className="group grid grid-cols-1 gap-3 border-t border-white/10 px-4 py-4 transition sm:grid-cols-12 sm:items-center sm:py-5 hover:bg-white/[0.03]"
              >
                <div className="sm:col-span-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-xs font-semibold text-white/70 ring-1 ring-white/10">
                      {initials(r.name)}
                    </div>
                    <div>
                      <div className="text-sm font-semibold tracking-tight text-white">{r.name}</div>
                      <div className="mt-1 text-xs text-white/55">Notes</div>
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <span className={pill(r.status)}>
                    <span className="h-1.5 w-1.5 rounded-full bg-hcg-300/70" />
                    {r.status}
                  </span>
                </div>
                <div className="sm:col-span-2 text-sm font-medium text-white">{r.owner}</div>
                <div className="sm:col-span-3 text-sm font-medium text-white/85 transition group-hover:text-white">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
                    {r.next}
                    <span className="text-hcg-300/80">→</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
