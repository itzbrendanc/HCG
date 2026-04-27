import { motion, useReducedMotion } from 'framer-motion'
import Section from './Section.jsx'

const statuses = [
  'New',
  'Contacted',
  'Responded',
  'Call Booked',
  'Audit Sent',
  'Closed',
  'Not Fit',
]

const sampleLeads = [
  {
    company: 'Northpoint Logistics',
    status: 'Responded',
    analyst: 'J. Patel',
    lastContact: 'Apr 18',
    notes: 'Operating model review + KPI alignment for cross-functional delivery.',
    next: 'Confirm stakeholders and success metrics.',
  },
  {
    company: 'Summit Healthcare',
    status: 'Audit Sent',
    analyst: 'A. Kim',
    lastContact: 'Apr 22',
    notes: 'Assessment delivered; transformation roadmap drafted for Q2 execution.',
    next: 'Schedule review session with leadership.',
  },
  {
    company: 'Veritas Holdings',
    status: 'Contacted',
    analyst: 'M. Rivera',
    lastContact: 'Apr 24',
    notes: 'Initial outreach for performance analysis + technology modernization.',
    next: 'Send follow-up and propose a discovery call.',
  },
  {
    company: 'Pioneer Partners',
    status: 'Call Booked',
    analyst: 'S. Chen',
    lastContact: 'Apr 25',
    notes: 'Leadership alignment workshop for operational cadence and delivery rhythm.',
    next: 'Prepare agenda + pre-read questions.',
  },
]

function statusStyle(status) {
  const base =
    'inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1'
  switch (status) {
    case 'New':
      return `${base} bg-white/5 text-white/70 ring-white/10`
    case 'Contacted':
      return `${base} bg-hcg-600/20 text-white ring-hcg-400/25`
    case 'Responded':
      return `${base} bg-hcg-500/25 text-white ring-hcg-300/25`
    case 'Call Booked':
      return `${base} bg-white/10 text-white ring-white/15`
    case 'Audit Sent':
      return `${base} bg-hcg-700/25 text-white ring-hcg-400/25`
    case 'Closed':
      return `${base} bg-white/10 text-white ring-white/15`
    case 'Not Fit':
      return `${base} bg-white/5 text-white/60 ring-white/10`
    default:
      return `${base} bg-white/5 text-white/70 ring-white/10`
  }
}

export default function TeamPortalPreview() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <Section
      id="portal"
      className="bg-hcg-night"
      eyebrow="Internal Team Portal Preview"
      title="A structured operating system"
      subtitle="HCG runs a lightweight internal system to track leads, outreach, response notes, and next actions—so delivery stays coordinated."
    >
      <div className="grid gap-4 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="rounded-3xl glass p-6 ring-1 ring-white/10 shadow-soft">
            <h3 className="text-base font-semibold tracking-tight text-white">
              Lead statuses
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              A consistent pipeline view keeps outreach and follow-up clean.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {statuses.map((s) => (
                <span key={s} className={statusStyle(s)}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="rounded-3xl glass p-6 ring-1 ring-white/10 shadow-soft glow-blue">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="text-base font-semibold tracking-tight text-white">
                  Lead tracker (preview)
                </h3>
                <p className="mt-1 text-sm text-white/65">
                  Assigned analyst • last contact • response notes • next action
                </p>
              </div>
              <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">
                Demo data
              </div>
            </div>

            <div className="mt-5 overflow-hidden rounded-2xl ring-1 ring-white/10">
              <div className="grid grid-cols-12 gap-3 bg-white/5 px-4 py-3 text-xs font-semibold text-white/60">
                <div className="col-span-4">Company</div>
                <div className="col-span-2">Status</div>
                <div className="col-span-2">Analyst</div>
                <div className="col-span-2">Last Contact</div>
                <div className="col-span-2">Next</div>
              </div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: prefersReducedMotion
                      ? { staggerChildren: 0 }
                      : { staggerChildren: 0.08, delayChildren: 0.05 },
                  },
                }}
              >
                {sampleLeads.map((l) => (
                  <motion.div
                    key={l.company}
                    variants={{
                      hidden: { opacity: 0, y: 8 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="grid grid-cols-1 gap-3 border-t border-white/10 px-4 py-4 sm:grid-cols-12 sm:items-start"
                  >
                    <div className="sm:col-span-4">
                      <div className="text-sm font-semibold tracking-tight text-white">
                        {l.company}
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-white/70">
                        {l.notes}
                      </p>
                    </div>
                    <div className="sm:col-span-2">
                      <span className={statusStyle(l.status)}>{l.status}</span>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="text-sm font-medium text-white">{l.analyst}</div>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="text-sm font-medium text-white">{l.lastContact}</div>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="text-sm font-medium text-white">{l.next}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
