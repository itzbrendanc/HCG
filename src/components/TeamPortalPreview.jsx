import Section from './Section.jsx'
import PortalDashboardVisual from './PortalDashboardVisual.jsx'

export default function TeamPortalPreview() {
  return (
    <Section
      id="portal"
      className="bg-hcg-night"
      eyebrow="Internal Team Portal Preview"
      title="Built like an operating system."
      subtitle="Every project moves through a clear workflow."
    >
      <PortalDashboardVisual />
    </Section>
  )
}
