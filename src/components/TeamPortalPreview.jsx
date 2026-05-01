import Section from './Section.jsx'
import PortalDashboardVisual from './PortalDashboardVisual.jsx'

export default function TeamPortalPreview() {
  return (
    <Section
      id="portal"
      className="bg-hcg-night"
      eyebrow="INTERNAL TEAM PORTAL PREVIEW"
      title="Built like an operating system."
      subtitle="Every project moves through a clear workflow — from intake to follow-up to delivery."
    >
      <PortalDashboardVisual />
    </Section>
  )
}
