import { useMemo, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Section from './Section.jsx'

const initial = {
  name: '',
  businessName: '',
  email: '',
  link: '',
  industry: '',
  goals: '',
}

function Field({ label, htmlFor, children }) {
  return (
    <div className="grid gap-2">
      <label htmlFor={htmlFor} className="text-[13px] font-semibold tracking-[0.08em] uppercase text-white/80">
        {label}
      </label>
      {children}
    </div>
  )
}

export default function ContactForm() {
  const prefersReducedMotion = useReducedMotion()
  const [form, setForm] = useState(initial)
  const [submissions, setSubmissions] = useState([])
  const [status, setStatus] = useState('idle')

  const canSubmit = useMemo(() => {
    return (
      form.name.trim() &&
      form.businessName.trim() &&
      form.email.trim() &&
      form.goals.trim()
    )
  }, [form])

  const onChange = (key) => (e) => setForm((v) => ({ ...v, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!canSubmit) return

    const submission = {
      ...form,
      submittedAt: new Date().toISOString(),
    }

    // TODO: backend integration
    // - Send to your API endpoint (Vercel Function) or Notion/Sheet/CRM.
    // - Use `VITE_` env vars only when necessary (e.g., public form mode flags).
    console.log('[HCG lead submission]', submission)

    setSubmissions((prev) => [submission, ...prev].slice(0, 5))
    setForm(initial)
    setStatus('submitted')
    window.setTimeout(() => setStatus('idle'), 2500)
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Tell us about your business"
      subtitle="Share what you’re looking to improve, and our team will review your request to identify where HCG can create the most value."
      className="bg-hcg-night"
    >
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.form
            onSubmit={handleSubmit}
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="rounded-3xl glass p-7 ring-1 ring-white/10 shadow-soft"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" htmlFor="name">
                <input
                  id="name"
                  value={form.name}
                  onChange={onChange('name')}
                  className="w-full rounded-xl bg-black/40 px-4 py-3 text-sm text-white ring-1 ring-white/10 outline-none transition focus:ring-2 focus:ring-hcg-400/50"
                  placeholder="Your name"
                  required
                />
              </Field>
              <Field label="Business Name" htmlFor="businessName">
                <input
                  id="businessName"
                  value={form.businessName}
                  onChange={onChange('businessName')}
                  className="w-full rounded-xl bg-black/40 px-4 py-3 text-sm text-white ring-1 ring-white/10 outline-none transition focus:ring-2 focus:ring-hcg-400/50"
                  placeholder="Organization"
                  required
                />
              </Field>
              <Field label="Email" htmlFor="email">
                <input
                  id="email"
                  value={form.email}
                  onChange={onChange('email')}
                  type="email"
                  className="w-full rounded-xl bg-black/40 px-4 py-3 text-sm text-white ring-1 ring-white/10 outline-none transition focus:ring-2 focus:ring-hcg-400/50"
                  placeholder="name@company.com"
                  required
                />
              </Field>
              <Field label="Website / Social Link" htmlFor="link">
                <input
                  id="link"
                  value={form.link}
                  onChange={onChange('link')}
                  className="w-full rounded-xl bg-black/40 px-4 py-3 text-sm text-white ring-1 ring-white/10 outline-none transition focus:ring-2 focus:ring-hcg-400/50"
                  placeholder="Website or LinkedIn…"
                />
              </Field>
              <div className="sm:col-span-2">
                <Field label="Industry" htmlFor="industry">
                  <input
                    id="industry"
                    value={form.industry}
                    onChange={onChange('industry')}
                    className="w-full rounded-xl bg-black/40 px-4 py-3 text-sm text-white ring-1 ring-white/10 outline-none transition focus:ring-2 focus:ring-hcg-400/50"
                    placeholder="e.g., healthcare, logistics, professional services…"
                  />
                </Field>
              </div>
              <div className="sm:col-span-2">
                <Field
                  label="What are you looking to improve or solve?"
                  htmlFor="goals"
                >
                  <textarea
                    id="goals"
                    value={form.goals}
                    onChange={onChange('goals')}
                    rows={5}
                  className="w-full resize-none rounded-xl bg-black/40 px-4 py-3 text-sm text-white ring-1 ring-white/10 outline-none transition focus:ring-2 focus:ring-hcg-400/50"
                  placeholder="Growth, operations, marketing, systems, or a specific challenge…"
                  required
                />
              </Field>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={!canSubmit}
                className="rounded-xl bg-hcg-600 px-5 py-3 text-sm font-semibold text-white shadow-soft transition enabled:hover:-translate-y-0.5 enabled:hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-60"
              >
                Request Consultation
              </button>
              <div className="text-sm text-white/65">
                {status === 'submitted' ? (
                  <span className="font-semibold text-white">Received. We’ll follow up soon.</span>
                ) : (
                  <span className="text-white/75">We review every request and respond within 24–48 hours.</span>
                )}
              </div>
            </div>
          </motion.form>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-3xl glass p-7 text-white shadow-card ring-1 ring-white/10 glow-blue">
            <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">
              What happens next
            </div>
            <h3 className="mt-3 text-xl font-semibold tracking-tight">
              A clear plan with measurable outcomes
            </h3>
            <ul className="mt-5 grid gap-3 text-sm text-white/70">
              {[
                'We review context, goals, and constraints.',
                'We align on the right engagement approach and timeline.',
                'You receive a structured plan and delivery cadence.',
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-hcg-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            {submissions.length ? (
              <div className="mt-7 rounded-2xl bg-black/30 p-5 ring-1 ring-white/10">
                <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">
                  Recent submissions (local state)
                </div>
                <div className="mt-3 grid gap-3">
                  {submissions.slice(0, 2).map((s) => (
                    <div key={s.submittedAt} className="text-sm text-white">
                      <div className="font-semibold">{s.businessName}</div>
                      <div className="text-white/70">{s.goals}</div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </Section>
  )
}
