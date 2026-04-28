import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useMemo, useRef, useState } from 'react'
import Section from './Section.jsx'
import MagneticButton from './MagneticButton.jsx'

const services = [
  {
    title: 'Strategy & Advisory',
    description: 'Clarify priorities and direction.',
    deliverable: 'Strategy deck + next steps.',
    icon: 'target',
    detail:
      'HCG helps organizations clarify priorities, evaluate growth opportunities, and build practical strategies that align with long-term goals.',
  },
  {
    title: 'Operations Excellence',
    description: 'Reduce friction and improve execution.',
    deliverable: 'Process map + operating rhythm.',
    icon: 'gear',
    detail:
      'We analyze workflows, systems, and bottlenecks to help teams improve efficiency, reduce friction, and operate with stronger execution discipline.',
  },
  {
    title: 'Growth & Transformation',
    description: 'Unlock growth and manage change.',
    deliverable: 'Roadmap + milestones.',
    icon: 'spark',
    detail:
      'We identify new growth paths, refine positioning, and support organizations through strategic change, market expansion, and business model improvement.',
  },
  {
    title: 'Financial & Performance Analysis',
    description: 'Turn metrics into decisions.',
    deliverable: 'KPI review + recommendations.',
    icon: 'chart',
    detail:
      'We review key metrics, cost structures, and performance indicators to help leaders make sharper, data-informed decisions.',
  },
  {
    title: 'Technology Consulting',
    description: 'Modernize systems with intent.',
    deliverable: 'Tech plan + quick wins.',
    icon: 'cpu',
    detail:
      'We help organizations understand where technology, automation, and AI can improve processes, customer experience, and decision-making.',
  },
  {
    title: 'Organizational Effectiveness',
    description: 'Strengthen teams and accountability.',
    deliverable: 'Role clarity + governance.',
    icon: 'people',
    detail:
      'We support stronger team structures, clearer responsibilities, better communication systems, and more resilient operating models.',
  },
]

function Icon({ name }) {
  const common = 'h-5 w-5 text-hcg-300'
  switch (name) {
    case 'target':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10Z"
            stroke="currentColor"
            strokeWidth="1.8"
            opacity="0.9"
          />
          <path
            d="M12 16a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z"
            stroke="currentColor"
            strokeWidth="1.8"
            opacity="0.9"
          />
          <path
            d="M12 8V2m0 20v-6M8 12H2m20 0h-6"
            stroke="currentColor"
            strokeWidth="1.6"
            opacity="0.55"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'gear':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 15.5a3.5 3.5 0 1 0-3.5-3.5 3.5 3.5 0 0 0 3.5 3.5Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M19.4 15a7.7 7.7 0 0 0 .1-2l2-1.2-2-3.4-2.3.6a7.8 7.8 0 0 0-1.6-1.1L15.3 5H8.7L8.4 7.9a7.8 7.8 0 0 0-1.6 1.1L4.5 8.4l-2 3.4 2 1.2a7.7 7.7 0 0 0 0 2l-2 1.2 2 3.4 2.3-.6a7.8 7.8 0 0 0 1.6 1.1L8.7 19h6.6l.3-2.9a7.8 7.8 0 0 0 1.6-1.1l2.3.6 2-3.4-2-1.2Z"
            stroke="currentColor"
            strokeWidth="1.6"
            opacity="0.9"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'spark':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2l1.3 5.2L18 8.5l-4.7 1.3L12 15l-1.3-5.2L6 8.5l4.7-1.3L12 2Z"
            stroke="currentColor"
            strokeWidth="1.6"
            opacity="0.9"
            strokeLinejoin="round"
          />
          <path
            d="M20 13l.8 3.2L24 17l-3.2.8L20 21l-.8-3.2L16 17l3.2-.8L20 13Z"
            stroke="currentColor"
            strokeWidth="1.3"
            opacity="0.55"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'chart':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M4 20V4m0 16h16"
            stroke="currentColor"
            strokeWidth="1.6"
            opacity="0.55"
            strokeLinecap="round"
          />
          <path
            d="M7 15l3-3 3 2 4-5"
            stroke="currentColor"
            strokeWidth="1.8"
            opacity="0.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 9h3v3"
            stroke="currentColor"
            strokeWidth="1.8"
            opacity="0.9"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'cpu':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M9 9h6v6H9V9Z"
            stroke="currentColor"
            strokeWidth="1.8"
            opacity="0.9"
            strokeLinejoin="round"
          />
          <path
            d="M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Z"
            stroke="currentColor"
            strokeWidth="1.6"
            opacity="0.55"
            strokeLinejoin="round"
          />
          <path
            d="M9 2v2m6-2v2M9 20v2m6-2v2M2 9h2M2 15h2m18-6h2m-2 6h2"
            stroke="currentColor"
            strokeWidth="1.6"
            opacity="0.55"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'people':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M16 11a3 3 0 1 0-3-3 3 3 0 0 0 3 3Z"
            stroke="currentColor"
            strokeWidth="1.8"
            opacity="0.9"
          />
          <path
            d="M8 12a2.5 2.5 0 1 0-2.5-2.5A2.5 2.5 0 0 0 8 12Z"
            stroke="currentColor"
            strokeWidth="1.6"
            opacity="0.55"
          />
          <path
            d="M19.5 20a5.5 5.5 0 0 0-11 0"
            stroke="currentColor"
            strokeWidth="1.8"
            opacity="0.9"
            strokeLinecap="round"
          />
          <path
            d="M11 20a4.5 4.5 0 0 0-9 0"
            stroke="currentColor"
            strokeWidth="1.6"
            opacity="0.55"
            strokeLinecap="round"
          />
        </svg>
      )
    default:
      return null
  }
}

function ServiceCard({ title, description, deliverable, icon, selected, onSelect }) {
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      animate={selected ? { scale: 1.01 } : { scale: 1 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
      whileHover={{ y: -4, rotateX: 1.4, rotateY: -1.4 }}
      whileTap={{ scale: 0.99 }}
      className={[
        'group relative w-full overflow-hidden rounded-2xl bg-black/35 p-6 text-left ring-1 shadow-soft backdrop-blur transition hover:shadow-card hcg-card-accent',
        selected ? 'ring-hcg-400/55 glow-blue' : 'ring-white/10',
      ].join(' ')}
      style={{ transformStyle: 'preserve-3d', perspective: 900 }}
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-hcg-600/10 blur-3xl opacity-0 transition group-hover:opacity-100" />

      <div className="relative flex items-start gap-3">
        <div className="grid h-11 w-11 flex-none place-items-center rounded-2xl bg-hcg-600/15 ring-1 ring-hcg-400/30 shadow-soft">
          <div className="scale-110">
            <Icon name={icon} />
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold tracking-tight text-white">{title}</h4>
          <p className="mt-2 text-sm leading-relaxed text-white/75">{description}</p>
        </div>
      </div>

      <div
        className={[
          'relative mt-5 rounded-xl bg-black/30 p-4 ring-1 ring-white/10 transition',
          selected ? 'ring-hcg-400/25' : '',
        ].join(' ')}
      >
        <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">
          Deliverable
        </div>
        <div className="mt-2 text-sm font-semibold tracking-tight text-white">{deliverable}</div>
      </div>
    </motion.button>
  )
}

export default function Services() {
  const prefersReducedMotion = useReducedMotion()
  const [selectedTitle, setSelectedTitle] = useState(services[0]?.title ?? '')
  const cardsRef = useRef(null)

  const selected = useMemo(
    () => services.find((s) => s.title === selectedTitle) ?? services[0],
    [selectedTitle],
  )

  const { scrollYProgress } = useScroll({ target: cardsRef, offset: ['start end', 'end start'] })
  const driftY = useTransform(scrollYProgress, [0, 1], [14, -14])

  return (
    <Section
      id="services"
      eyebrow="What We Do"
      className="bg-hcg-night bg-hcg-beams"
      innerClassName="min-h-[90vh]"
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <div className="text-sm font-semibold tracking-[0.14em] uppercase text-white/55">
            What we do
          </div>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Solutions tailored to your goals
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            We deliver expert support across strategy, operations, growth, performance, technology,
            and organizational effectiveness.
          </p>
          <div className="mt-6">
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('services-cards')
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                if (services[0]?.title) setSelectedTitle(services[0].title)
              }}
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/15"
            >
              View All Services <span className="text-hcg-300">→</span>
            </button>
          </div>
        </div>

        <motion.div
          style={prefersReducedMotion ? undefined : { y: driftY }}
          id="services-cards"
          ref={cardsRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: prefersReducedMotion
                ? { staggerChildren: 0 }
                : { staggerChildren: 0.08, delayChildren: 0.05 },
            },
          }}
          className="grid gap-4 sm:grid-cols-2 lg:col-span-8"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
            >
              <ServiceCard
                title={s.title}
                description={s.description}
                deliverable={s.deliverable}
                icon={s.icon}
                selected={s.title === selectedTitle}
                onSelect={() => setSelectedTitle(s.title)}
              />
            </motion.div>
          ))}

          <div className="sm:col-span-2">
            <AnimatePresence mode="wait">
              {selected ? (
                <motion.div
                  key={selected.title}
                  initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 6 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="rounded-3xl bg-black/40 p-6 ring-1 ring-hcg-400/30 shadow-card backdrop-blur glow-blue"
                >
                  <div className="text-xs font-semibold tracking-[0.14em] uppercase text-white/55">
                    Selected Service
                  </div>
                  <div className="mt-3 text-xl font-semibold tracking-tight text-hcg-200">
                    {selected.title}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {selected.detail}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

          <div className="sm:col-span-2">
            <div className="mt-2 rounded-3xl bg-black/30 p-6 ring-1 ring-white/10 backdrop-blur">
              <p className="text-sm text-white/70">
                Not sure where to start? We’ll help you identify the highest-impact opportunities.
              </p>
          <div className="mt-4">
                <MagneticButton
                  as="a"
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl bg-hcg-600 px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow"
                >
                  Start With a Consultation
                </MagneticButton>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
