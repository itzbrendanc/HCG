import Section from './Section.jsx'
import Card from './Card.jsx'

const reasons = [
  {
    title: 'Trusted Partner',
    description:
      'We operate with discretion, clarity, and accountability—built for real decision-makers.',
  },
  {
    title: 'Client-Centered',
    description:
      'We tailor the work to your constraints, stakeholders, and timelines—without unnecessary complexity.',
  },
  {
    title: 'Measurable Impact',
    description:
      'Clear metrics, clear milestones, and a delivery plan that translates into outcomes.',
  },
  {
    title: 'Future-Focused',
    description:
      'We build stronger systems for the future: resilient operations, scalable execution, and strategic optionality.',
  },
]

export default function TeamBasedIntelligence() {
  return (
    <Section
      id="why"
      eyebrow="Why Clients Choose HCG"
      className="bg-hcg-night"
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <div className="text-sm font-semibold tracking-[0.14em] uppercase text-white/55">
            Why HCG
          </div>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Partnership. Integrity. Impact.
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            We’re more than consultants—we’re trusted advisors and long-term partners. Our approach
            is structured, transparent, and built to deliver measurable results.
          </p>
        </div>

        <div className="lg:col-span-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((r) => (
              <Card key={r.title} title={r.title} description={r.description} tone="dark" />
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
