import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import DescriptionBox from './components/DescriptionBox.jsx'
import ScrollStory from './components/ScrollStory.jsx'
import Services from './components/Services.jsx'
import ExampleEngagements from './components/ExampleEngagements.jsx'
import Process from './components/Process.jsx'
import MidPageCta from './components/MidPageCta.jsx'
import Offers from './components/Offers.jsx'
import TeamBasedIntelligence from './components/TeamBasedIntelligence.jsx'
import TeamPortalPreview from './components/TeamPortalPreview.jsx'
import ContactForm from './components/ContactForm.jsx'
import JoinTeam from './components/JoinTeam.jsx'
import Footer from './components/Footer.jsx'
import ParticleBackground from './components/ParticleBackground.jsx'
import ScrollRevealSection from './components/ScrollRevealSection.jsx'

export default function App() {
  return (
    <div className="relative min-h-screen bg-night-950">
      <ParticleBackground className="opacity-70" />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <ScrollRevealSection direction="right">
            <About />
          </ScrollRevealSection>
          <DescriptionBox />
          <ScrollRevealSection direction="left">
            <ScrollStory />
          </ScrollRevealSection>
          <ScrollRevealSection direction="right">
            <Services />
          </ScrollRevealSection>
          <ScrollRevealSection direction="left">
            <ExampleEngagements />
          </ScrollRevealSection>
          <ScrollRevealSection direction="right">
            <Process />
          </ScrollRevealSection>
          <ScrollRevealSection direction="left">
            <MidPageCta />
          </ScrollRevealSection>
          <ScrollRevealSection direction="right">
            <Offers />
          </ScrollRevealSection>
          <ScrollRevealSection direction="left">
            <TeamBasedIntelligence />
          </ScrollRevealSection>
          <ScrollRevealSection direction="right">
            <TeamPortalPreview />
          </ScrollRevealSection>
          <ScrollRevealSection direction="left">
            <ContactForm />
          </ScrollRevealSection>
          <ScrollRevealSection direction="right">
            <JoinTeam />
          </ScrollRevealSection>
        </main>
        <Footer />
      </div>
    </div>
  )
}
