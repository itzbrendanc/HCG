import { useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Section from './Section.jsx'
import ContactPathCard from './ContactPathCard.jsx'
import ContactMotionBackground from './ContactMotionBackground.jsx'
import MagneticButton from './MagneticButton.jsx'
import AnimatedSectionHeading from './AnimatedSectionHeading.jsx'

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

const initialStudent = {
  name: '',
  email: '',
  majorYear: '',
  roleInterest: '',
  portfolio: '',
  why: '',
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
      <span className="font-semibold text-green-400">
        ✓ Submitted successfully — check your email.
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

export default function ContactForm() {
  const prefersReducedMotion = useReducedMotion()
  const [path, setPath] = useState('business')
  const [businessForm, setBusinessForm] = useState(initialBusiness)
  const [studentForm, setStudentForm] = useState(initialStudent)
  const [submissions, setSubmissions] = useState([])
  const [status, setStatus] = useState('idle')
  const formRef = useRef(null)

  const canSubmit = useMemo(() => {
    if (path === 'student') {
      return (
        studentForm.name.trim() &&
        studentForm.email.trim() &&
        studentForm.roleInterest.trim() &&
        studentForm.why.trim()
      )
    }

    return (
      businessForm.name.trim() &&
      businessForm.businessName.trim() &&
      businessForm.email.trim() &&
      businessForm.goals.trim()
    )
  }, [path, businessForm, studentForm])

  const onBusinessChange = (key) => (e) =>
    setBusinessForm((v) => ({ ...v, [key]: e.target.value }))

  const onStudentChange = (key) => (e) =>
    setStudentForm((v) => ({ ...v, [key]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!canSubmit) return

    const submission =
      path === 'student'
        ? {
            type: 'student',
            name: studentForm.name,
            email: studentForm.email,
            company: '',
            message: studentForm.why,
            roleInterest: studentForm.roleInterest,
            linkedin: studentForm.portfolio,
            industry: '',
            majorYear: studentForm.majorYear,
            submittedAt: new Date().toISOString(),
          }
        : {
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

    await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(submission),
    })

    console.log('[HCG lead submission]', submission)

    setSubmissions((prev) => [submission, ...prev].slice(0, 5))

    if (path === 'student') {
      setStudentForm(initialStudent)
    } else {
      setBusinessForm(initialBusiness)
    }

    setStatus('submitted')
    setTimeout(() => setStatus('idle'), 3000)
  }

  return (
    <Section id="contact" eyebrow="Work With HCG" className="bg-hcg-night bg-hcg-beams">
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
              subtitle="Build smarter growth with HCG. Tell us what you’re trying to improve—we’ll identify the clearest next move."
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
              subtitle="Join the HCG team. Work on real projects, build strategy skills, and help organizations grow."
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
                    {path === 'student' ? 'Join the HCG team.' : 'Build smarter growth with HCG.'}
                  </div>

                  <div className="mt-3 text-sm leading-relaxed text-white/75">
                    {path === 'student'
                      ? 'Work on real projects, build strategy skills, and help organizations grow.'
                      : 'Tell us what you’re trying to improve. We’ll help identify the clearest next move.'}
                  </div>
                </div>

                <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">
                  Secure • Reviewed by our team
                </div>
              </div>

              <AnimatePresence mode="wait">
                {path === 'student' ? (
                  <motion.form
                    key="student"
                    onSubmit={handleSubmit}
                    initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: -12 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="mt-7 grid gap-4"
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field label="Name" htmlFor="studentName">
                        <input
                          id="studentName"
                          value={studentForm.name}
                          onChange={onStudentChange('name')}
                          className="hcg-input w-full rounded-xl bg-black/40 px-4 py-3 text-sm text-white outline-none"
                          placeholder="Your name"
                          required
                        />
                      </Field>

                      <Field label="Email" htmlFor="studentEmail">
                        <input
                          id="studentEmail"
                          value={studentForm.email}
                          onChange={onStudentChange('email')}
                          type="email"
                          className="hcg-input w-full rounded-xl bg-black/40 px-4 py-3 text-sm text-white outline-none"
                          placeholder="you@university.edu"
                          required
                        />
                      </Field>

                      <Field label="Major / Year" htmlFor="majorYear">
                        <input
                          id="majorYear"
                          value={studentForm.majorYear}
                          onChange={onStudentChange('majorYear')}
                          className="hcg-input w-full rounded-xl bg-black/40 px-4 py-3 text-sm text-white outline-none"
                          placeholder="e.g., Business • Junior"
                        />
                      </Field>

                      <Field label="Role Interest" htmlFor="roleInterest">
                        <input
                          id="roleInterest"
                          value={studentForm.roleInterest}
                          onChange={onStudentChange('roleInterest')}
                          className="hcg-input w-full rounded-xl bg-black/40 px-4 py-3 text-sm text-white outline-none"
                          placeholder="Strategy, marketing, ops, AI systems…"
                          required
                        />
                      </Field>

                      <div className="sm:col-span-2">
                        <Field label="LinkedIn / Portfolio" htmlFor="portfolio">
                          <input
                            id="portfolio"
                            value={studentForm.portfolio}
                            onChange={onStudentChange('portfolio')}
                            className="hcg-input w-full rounded-xl bg-black/40 px-4 py-3 text-sm text-white outline-none"
                            placeholder="Link"
                          />
                        </Field>
                      </div>

                      <div className="sm:col-span-2">
                        <Field label="Why do you want to join HCG?" htmlFor="why">
                          <textarea
                            id="why"
                            value={studentForm.why}
                            onChange={onStudentChange('why')}
                            rows={5}
                            className="hcg-input w-full resize-none rounded-xl bg-black/40 px-4 py-3 text-sm text-white outline-none"
                            placeholder="What you’re hoping to learn, build, and contribute…"
                            required
                          />
                        </Field>
                      </div>
                    </div>

                    <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <MagneticButton
                        as="button"
                        type="submit"
                        disabled={!canSubmit}
                        className="rounded-xl bg-hcg-600 px-6 py-3.5 text-base font-semibold text-white shadow-soft transition enabled:hover:-translate-y-0.5 enabled:hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        Apply to Join
                      </MagneticButton>

                      {status === 'submitted' ? <SuccessMessage /> : <ReviewMessage />}
                    </div>
                  </motion.form>
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
                        disabled={!canSubmit}
                        className="rounded-xl bg-hcg-600 px-6 py-3.5 text-base font-semibold text-white shadow-soft transition enabled:hover:-translate-y-0.5 enabled:hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        Request Consultation
                      </MagneticButton>

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