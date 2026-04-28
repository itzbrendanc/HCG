import { motion, useReducedMotion } from 'framer-motion'

function pill(status) {
  const base = 'inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1'
  switch (status) {
    case 'New':
      return `${base} bg-white/5 text-white/70 ring-white/10`
    case 'In Review':
      return `${base} bg-hcg-600/18 text-white ring-hcg-300/25`
    case 'Booked':
      return `${base} bg-white/10 text-white ring-white/15`
    case 'Sent':
      return `${base} bg-hcg-700/22 text-white ring-hcg-400/25`
    case 'Closed':
      return `${base} bg-white/10 text-white ring-white/15`
    default:
      return `${base} bg-white/5 text-white/70 ring-white/10`
  }
}

const rows = [
  { name: 'Northpoint Logistics', status: 'In Review', owner: 'J. Patel', next: 'Follow-up' },
  { name: 'Summit Healthcare', status: 'Sent', owner: 'A. Kim', next: 'Review call' },
  { name: 'Veritas Holdings', status: 'New', owner: 'M. Rivera', next: 'Intro email' },
  { name: 'Pioneer Partners', status: 'Booked', owner: 'S. Chen', next: 'Prep notes' },
]

export default function PortalDashboardVisual() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className="relative overflow-hidden rounded-3xl bg-black/35 p-7 ring-1 ring-hcg-400/25 shadow-card backdrop-blur glow-blue">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_520px_at_65%_35%,rgba(65,135,210,0.20),transparent_66%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(0,0,0,0))]" />

      <div className="relative">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">Dashboard</div>
            <div className="mt-2 text-2xl font-semibold tracking-tight text-white">Built like an operating system.</div>
            <div className="mt-2 text-sm text-white/75">Every project moves through a clear workflow.</div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[
              { k: 'Leads', v: '24' },
              { k: 'In flight', v: '7' },
              { k: 'This week', v: '+3' },
            ].map((m) => (
              <div key={m.k} className="rounded-2xl bg-black/30 px-4 py-3 ring-1 ring-white/10">
                <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">{m.k}</div>
                <div className="mt-1 text-sm font-semibold text-white">{m.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress bars */}
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {[
            { k: 'Status', v: 68 },
            { k: 'Follow-up', v: 52 },
            { k: 'Delivery', v: 36 },
          ].map((m) => (
            <div key={m.k} className="rounded-2xl bg-black/30 p-4 ring-1 ring-white/10">
              <div className="flex items-center justify-between text-xs font-semibold tracking-[0.14em] uppercase text-white/55">
                <span>{m.k}</span>
                <span className="text-white/45">{m.v}%</span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-white/5 ring-1 ring-white/10">
                <motion.div
                  className="h-2 rounded-full bg-hcg-500/55"
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
                className="group grid grid-cols-1 gap-3 border-t border-white/10 px-4 py-4 sm:grid-cols-12 sm:items-center"
              >
                <div className="sm:col-span-5">
                  <div className="text-sm font-semibold tracking-tight text-white">{r.name}</div>
                  <div className="mt-1 text-xs text-white/55">Notes</div>
                </div>
                <div className="sm:col-span-2">
                  <span className={pill(r.status)}>{r.status}</span>
                </div>
                <div className="sm:col-span-2 text-sm font-medium text-white">{r.owner}</div>
                <div className="sm:col-span-3 text-sm font-medium text-white/85 group-hover:text-white transition">
                  {r.next}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

