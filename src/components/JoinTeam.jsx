import Section from './Section.jsx'
import Card from './Card.jsx'

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
      eyebrow="Join HCG"
      title="Build with a premium consulting standard"
      subtitle="Hilltop Consulting Group welcomes motivated builders who value clarity, discipline, and high-quality deliverables."
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

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="rounded-xl bg-hcg-600 px-5 py-3 text-center text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow"
            >
              Apply to Join
            </a>
            <p className="text-sm text-white/65">
              Include your role interest and a link to any relevant work (portfolio, writing, projects).
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
