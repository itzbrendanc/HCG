import Section from './Section.jsx'
import Card from './Card.jsx'
import { motion } from 'framer-motion'

const roles = [
  {
    title: 'Strategy analysts',
    description: 'Turn complex context into clear priorities, options, and decisions.',
  },
  {
    title: 'Operations associates',
    description: 'Map processes, define operating rhythms, and improve delivery performance.',
  },
  {
    title: 'Performance & finance analysts',
    description: 'Build KPI models, analyze performance drivers, and quantify impact.',
  },
  {
    title: 'Technology consultants',
    description: 'Align systems and tooling choices to outcomes and delivery reality.',
  },
  {
    title: 'Engagement coordinators',
    description: 'Maintain cadence, communication, and execution momentum across stakeholders.',
  },
]

export default function JoinTeam() {
  return (
    <Section
      id="join-hcg"
      eyebrow="Join ASG"
      title="Build with a premium consulting standard"
      subtitle="Axiom Strategy Group welcomes motivated builders who value clarity, discipline, and high-quality deliverables."
      className="bg-hcg-night"
    >
      <div className="grid gap-4 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Card
            title="What you’ll work on"
            description="Structured analysis, leadership-ready deliverables, and execution support across real consulting engagements."
            deliverable="High-quality work products with clear outcomes."
            tone="dark"
          >
            <ul className="mt-4 grid gap-2 text-sm text-white/70">
              {[
                'Structured analysis and prioritization',
                'Deck building and executive communication',
                'Operating model and process design',
                'Performance analysis and KPI definition',
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-hcg-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="lg:col-span-7">
          <div className="grid gap-4 sm:grid-cols-2">
            {roles.map((r) => (
              <Card key={r.title} title={r.title} description={r.description} tone="dark" />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="mt-16 relative p-8 rounded-3xl glass ring-1 ring-hcg-400/30 shadow-soft glow-blue-strong text-center">
              <div className="text-2xl sm:text-3xl font-semibold text-white text-center">
                Join Axiom Strategy Group
              </div>

              <div className="text-sm text-white/60 text-center mt-2">
                Build real systems. Drive real outcomes.
              </div>

              <div className="flex justify-center mt-10">
                <a
                  href="#contact"
                  className="w-full sm:w-auto rounded-2xl bg-gradient-to-r from-hcg-600 to-hcg-500 px-10 py-6 text-xl sm:text-2xl font-semibold text-white shadow-soft transition hover:-translate-y-1 hover:scale-[1.03] hover:shadow-glow"
                >
                  Apply to Join
                </a>
              </div>
              <p className="mt-6 text-sm text-white/65">
                Include your role interest and a link to any relevant work (portfolio, writing, projects).
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
