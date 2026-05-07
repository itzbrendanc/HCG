import { useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Section from './Section.jsx'
import ContactPathCard from './ContactPathCard.jsx'
import ContactMotionBackground from './ContactMotionBackground.jsx'
import MagneticButton from './MagneticButton.jsx'
import AnimatedSectionHeading from './AnimatedSectionHeading.jsx'

const STUDENT_APPLICATION_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLScBNtwfSTwljojL8rQzNUD95eUc6Uq_-zFsMFyF9CN9gP0d1Q/viewform?usp=header'

const GOOGLE_SHEETS_URL =
  'https://script.google.com/macros/s/AKfycbzqz1VKuhY84aZTctaHNbOQqp3aJS76q13XevX-01ywuRR41t2q0a5Mm4FB1iXK2zpR/exec'

const initialBusiness = {
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

function SuccessMessage() {
  return (
    <div className="text-sm text-white/80">
      <span className="font-semibold text-white/90">
        ✓ Submitted — we’ll reach out within 24–48 hours.
      </span>
    </div>
  )
}

function ReviewMessage() {
  return (
    <div className="text-sm text-white/80">
      We review every request and respond within 24–48 hours.
    </div>
  )
}

function LoadingDots() {
  return (
    <span aria-hidden="true" className="inline-flex items-center gap-1">
      <span className="h-1.5 w-1.5 rounded-full bg-white/70 animate-pulse" />
      <span className="h-1.5 w-1.5 rounded-full bg-white/55 animate-pulse [animation-delay:120ms]" />
      <span className="h-1.5 w-1.5 rounded-full bg-white/45 animate-pulse [animation-delay:240ms]" />
    </span>
  )
}

export default function ContactForm() {
  const prefersReducedMotion = useReducedMotion()
  const [path, setPath] = useState('business')
  const [businessForm, setBusinessForm] = useState(initialBusiness)
  const [submissions, setSubmissions] = useState([])
  const [status, setStatus] = useState('idle')
  const formRef = useRef(null)

  const canSubmit = useMemo(() => {
    return (
      businessForm.name.trim() &&
      businessForm.businessName.trim() &&
      businessForm.email.trim() &&
      businessForm.goals.trim()
    )
  }, [businessForm])

  const onBusinessChange = (key) => (e) =>
    setBusinessForm((v) => ({ ...v, [key]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!canSubmit) return
    setStatus('submitting')

    const submission = {
      type: 'business',
      name: businessForm.name,
      email: businessForm.email,
      company: businessForm.businessName,
      message: businessForm.goals,
      roleInterest: '',
      linkedin: businessForm.link,
      industry: businessForm.industry,
      majorYear: '',
      submittedAt: new Date().toISOString(),
    }

    try {
      await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(submission),
      })
    } catch (err) {
      console.error('[AXIOM lead submission error]', err)
      setStatus('idle')
      return
    }

    console.log('[AXIOM lead submission]', submission)

    setSubmissions((prev) => [submission, ...prev].slice(0, 5))

    setBusinessForm(initialBusiness)

    setStatus('submitted')
    setTimeout(() => setStatus('idle'), 3000)
  }

  return (
    <Section id="contact" eyebrow="Work With Axiom" className="bg-hcg-night bg-hcg-beams">
      <div className="max-w-5xl">
        <AnimatedSectionHeading
          lines={['Ready to move?', 'Let’s build what’s next.']}
          accentLineIdx={1}
          className="max-w-4xl"
        />

        <motion.div
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
          className="mt-5 text-[16px] font-semibold text-white/75 sm:text-lg"
        >
          Choose your path. We’ll take it from there.
        </motion.div>
      </div>

      <div className="mt-12 grid gap-7 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <ContactPathCard
              title="I’m a Business"
              subtitle="Tell us what you're trying to improve. We’ll identify the clearest next step."
              selected={path === 'business'}
              onSelect={() => {
                setPath('business')
                formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              icon={
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                  <path d="M4 10h16v10H4V10Z" stroke="currentColor" strokeWidth="1.7" opacity="0.9" />
                  <path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.7" opacity="0.55" strokeLinecap="round" />
                  <path d="M9 14h6" stroke="currentColor" strokeWidth="1.7" opacity="0.9" strokeLinecap="round" />
                </svg>
              }
            />

            <ContactPathCard
              title="I’m a Student"
              subtitle="Work on real projects, build strategy skills, and help organizations grow."
              selected={path === 'student'}
              onSelect={() => {
                setPath('student')
                formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              icon={
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                  <path d="M12 3 2.5 8 12 13l9.5-5L12 3Z" stroke="currentColor" strokeWidth="1.7" opacity="0.9" strokeLinejoin="round" />
                  <path d="M5 10.2V16c2.3 2.7 5 4 7 4s4.7-1.3 7-4v-5.8" stroke="currentColor" strokeWidth="1.7" opacity="0.55" strokeLinecap="round" />
                </svg>
              }
            />
          </div>
        </div>

        <div className="lg:col-span-7">
          <motion.div
            ref={formRef}
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="relative overflow-hidden rounded-3xl glass p-7 ring-1 ring-hcg-400/35 shadow-soft glow-blue-strong"
          >
            <ContactMotionBackground />

            <div className="relative">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/60">
                    {path === 'student' ? 'For Students' : 'For Businesses'}
                  </div>

                  <div className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    {path === 'student' ? 'Student Application' : 'Build smarter growth with Axiom.'}
                  </div>

                  <div className="mt-3 text-sm leading-relaxed text-white/75">
                    {path === 'student'
                      ? 'Students apply through our official application portal so we can review your LinkedIn, resume, and interest statement in one place.'
                      : "Tell us what you're trying to improve. We’ll identify the clearest next step."}
                  </div>
                </div>

                <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">
                  Secure • Reviewed by our team
                </div>
              </div>

              <AnimatePresence mode="wait">
                {path === 'student' ? (
                  <motion.div
                    key="student"
                    initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: -12 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="mt-7"
                  >
                    <div className="relative overflow-hidden rounded-3xl bg-black/30 p-7 ring-1 ring-hcg-400/25 shadow-card backdrop-blur sm:p-8">
                      {/* Decorative layers (kept behind content) */}
                      <div aria-hidden="true" className="pointer-events-none absolute -z-10 -right-32 -top-32 h-80 w-80 rounded-full bg-hcg-600/18 blur-3xl" />
                      <div aria-hidden="true" className="pointer-events-none absolute -z-10 -bottom-32 -left-32 h-80 w-80 rounded-full bg-hcg-500/14 blur-3xl" />
                      <motion.div
                        aria-hidden="true"
                        className="pointer-events-none absolute -z-10 -inset-x-10 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(65,135,210,0.7),transparent)]"
                        animate={prefersReducedMotion ? undefined : { opacity: [0.18, 0.55, 0.18] }}
                        transition={prefersReducedMotion ? undefined : { duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
                      />

                      <div className="relative z-10">
                        <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/60">
                          Student application portal
                        </div>
                        <div className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl leading-tight">
                          Apply to Axiom Strategy
                        </div>
                        <div className="mt-4 text-sm leading-relaxed text-white/75">
                          Apply through our official portal to submit your LinkedIn, resume, and interest statement for structured review.
                        </div>

                        <div className="mt-8 grid gap-5 md:grid-cols-3">
                          {[
                            { k: '1', t: 'Submit application' },
                            { k: '2', t: 'Share resume + LinkedIn' },
                            { k: '3', t: 'Review for next steps' },
                          ].map((s) => (
                            <motion.div
                              key={s.k}
                              whileHover={prefersReducedMotion ? undefined : { y: -4, scale: 1.01 }}
                              transition={{ duration: 0.25, ease: 'easeOut' }}
                              className="relative overflow-hidden rounded-2xl bg-black/30 p-5 ring-1 ring-hcg-400/18 shadow-card backdrop-blur"
                            >
                              <div aria-hidden="true" className="pointer-events-none absolute -z-10 -right-12 -top-12 h-28 w-28 rounded-full bg-hcg-600/10 blur-2xl" />
                              <div className="flex items-start gap-3">
                                <div className="grid h-9 w-9 flex-none place-items-center rounded-xl bg-white/5 ring-1 ring-hcg-300/30 shadow-soft">
                                  <span className="text-sm font-semibold text-hcg-200">{s.k}</span>
                                </div>
                                <div className="text-sm font-semibold leading-snug tracking-tight text-white/90">
                                  {s.t}
                                </div>
                              </div>
                              <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-white/5 ring-1 ring-white/10">
                                <motion.div
                                  aria-hidden="true"
                                  className="h-full bg-gradient-to-r from-hcg-600 to-hcg-300"
                                  initial={{ width: '18%' }}
                                  animate={prefersReducedMotion ? { width: '62%' } : { width: ['18%', '78%', '38%'] }}
                                  transition={prefersReducedMotion ? { duration: 0.8 } : { duration: 5.6, repeat: Infinity, ease: 'easeInOut' }}
                                />
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        <div className="mt-6 text-center text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                          Selective review • Real projects • Execution-focused
                        </div>

                        <div className="my-8 h-px w-full bg-white/10" />

                        <div className="mt-0 text-center text-sm font-semibold text-white/70">
                          Join a select group of students working on real business problems.
                        </div>

                        <div className="mt-4 flex flex-col justify-center gap-3 sm:flex-row">
                          <MagneticButton
                            as="a"
                            href={STUDENT_APPLICATION_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full rounded-2xl bg-gradient-to-r from-hcg-600 to-hcg-500 px-10 py-6 text-xl font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-glow sm:w-auto"
                          >
                            Apply Now
                          </MagneticButton>
                          <MagneticButton
                            as="a"
                            href="#about"
                            onClick={(e) => {
                              e.preventDefault()
                              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                            }}
                            className="w-full rounded-2xl bg-white/5 px-10 py-6 text-xl font-semibold text-white/85 ring-1 ring-white/12 transition hover:bg-white/10 hover:text-white hover:scale-[1.01] sm:w-auto"
                          >
                            Explore the Program
                          </MagneticButton>
                        </div>
                        <div className="mt-3 text-center text-xs font-medium tracking-wide text-white/50">
                          Takes 2–3 minutes. Resume and LinkedIn recommended.
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="business"
                    onSubmit={handleSubmit}
                    initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: -12 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="mt-7 grid gap-4"
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field label="Name" htmlFor="name">
                        <input
                          id="name"
                          value={businessForm.name}
                          onChange={onBusinessChange('name')}
                          className="hcg-input w-full rounded-xl bg-black/40 px-4 py-3 text-sm text-white outline-none"
                          placeholder="Your name"
                          required
                        />
                      </Field>

                      <Field label="Business Name" htmlFor="businessName">
                        <input
                          id="businessName"
                          value={businessForm.businessName}
                          onChange={onBusinessChange('businessName')}
                          className="hcg-input w-full rounded-xl bg-black/40 px-4 py-3 text-sm text-white outline-none"
                          placeholder="Organization"
                          required
                        />
                      </Field>

                      <Field label="Email" htmlFor="email">
                        <input
                          id="email"
                          value={businessForm.email}
                          onChange={onBusinessChange('email')}
                          type="email"
                          className="hcg-input w-full rounded-xl bg-black/40 px-4 py-3 text-sm text-white outline-none"
                          placeholder="name@company.com"
                          required
                        />
                      </Field>

                      <Field label="Website / Social" htmlFor="link">
                        <input
                          id="link"
                          value={businessForm.link}
                          onChange={onBusinessChange('link')}
                          className="hcg-input w-full rounded-xl bg-black/40 px-4 py-3 text-sm text-white outline-none"
                          placeholder="Website or LinkedIn…"
                        />
                      </Field>

                      <div className="sm:col-span-2">
                        <Field label="Industry" htmlFor="industry">
                          <input
                            id="industry"
                            value={businessForm.industry}
                            onChange={onBusinessChange('industry')}
                            className="hcg-input w-full rounded-xl bg-black/40 px-4 py-3 text-sm text-white outline-none"
                            placeholder="e.g., healthcare, logistics, professional services…"
                          />
                        </Field>
                      </div>

                      <div className="sm:col-span-2">
                        <Field label="What are you looking to improve or solve?" htmlFor="goals">
                          <textarea
                            id="goals"
                            value={businessForm.goals}
                            onChange={onBusinessChange('goals')}
                            rows={5}
                            className="hcg-input w-full resize-none rounded-xl bg-black/40 px-4 py-3 text-sm text-white outline-none"
                            placeholder="Growth, operations, marketing, systems, or a specific challenge…"
                            required
                          />
                        </Field>
                      </div>
                    </div>

                    <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <MagneticButton
                        as="button"
                        type="submit"
                        disabled={!canSubmit || status === 'submitting'}
                        className="w-full sm:w-auto rounded-2xl bg-gradient-to-r from-hcg-600 to-hcg-500 px-8 py-5 text-lg font-semibold text-white shadow-soft transition enabled:hover:-translate-y-0.5 enabled:hover:shadow-glow enabled:hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        <span className="inline-flex items-center justify-center gap-2">
                          {status === 'submitting' ? 'Sending request...' : 'Request Consultation'}
                          {status === 'submitting' ? <LoadingDots /> : null}
                        </span>
                      </MagneticButton>
                      <div className="text-xs text-white/50 mt-2">
                        No spam. Clear next steps within 24–48 hours.
                      </div>

                      {status === 'submitted' ? <SuccessMessage /> : <ReviewMessage />}
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>

              {submissions.length ? (
                <div className="mt-7 rounded-2xl bg-black/30 p-5 ring-1 ring-white/10">
                  <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">
                    Recent submissions
                  </div>

                  <div className="mt-3 grid gap-3">
                    {submissions.slice(0, 2).map((s) => (
                      <div key={s.submittedAt} className="text-sm text-white">
                        <div className="font-semibold">
                          {s.type === 'student' ? s.name : s.company}
                          <span className="text-white/45"> • </span>
                          <span className="text-hcg-200">
                            {s.type === 'student' ? 'Student' : 'Business'}
                          </span>
                        </div>
                        <div className="text-white/70">
                          {s.type === 'student' ? s.roleInterest : s.message}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
