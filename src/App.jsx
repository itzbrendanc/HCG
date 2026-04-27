import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import DescriptionBox from './components/DescriptionBox.jsx'
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

export default function App() {
  return (
    <div className="relative min-h-screen bg-night-950">
      <ParticleBackground className="opacity-70" />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <DescriptionBox />
          <Services />
          <ExampleEngagements />
          <Process />
          <MidPageCta />
          <Offers />
          <TeamBasedIntelligence />
          <TeamPortalPreview />
          <ContactForm />
          <JoinTeam />
        </main>
        <Footer />
      </div>
    </div>
  )
}
