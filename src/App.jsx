import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { SectionWrapper, HallOfFame, Certificates, Education, Recommendations, sectionMeta } from './components/Sections'

const demoData = {
  hallOfFame: [
    { company: 'Acme Corp', title: 'Responsible Disclosure', description: 'Reported a critical IDOR leading to unauthorized access mitigation.', date: '2024', link: '#' },
    { company: 'Globex Security', title: 'Hall of Fame', description: 'Recognized for uncovering SSRF in internal asset discovery service.', date: '2023', link: '#' },
  ],
  certificates: [
    { name: 'eJPT', issuer: 'INE', date: '2024', summary: 'Entry-level penetration testing certification covering network and web security.' },
    { name: 'Security+ (SY0-701)', issuer: 'CompTIA', date: '2023', summary: 'Foundational cybersecurity concepts and best practices.' },
    { name: 'Certified AppSec Practitioner', issuer: 'The SecOps Group', date: '2023', summary: 'Application security concepts, OWASP Top 10, and secure SDLC.' },
  ],
  education: [
    { school: 'Tech University', degree: 'B.Sc. in Computer Science, Cybersecurity focus', years: '2019 — 2023' },
  ],
  recommendations: [
    { name: 'Jane Doe', role: 'Security Lead at Acme', quote: 'Demonstrated exceptional initiative and rigor in vulnerability research.' },
    { name: 'John Smith', role: 'CTO at Startup', quote: 'A meticulous ethical hacker with strong communication skills.' },
  ],
}

function Footer() {
  return (
    <footer id="contact" className="py-10 border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} Your Name — Cyber Security Portfolio</p>
        <p>Available for security research, bug bounty, and consulting.</p>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />

      <main className="relative">
        <SectionWrapper id="hall-of-fame" title={sectionMeta.hallOfFame.title} icon={sectionMeta.hallOfFame.icon}>
          <HallOfFame items={demoData.hallOfFame} />
        </SectionWrapper>

        <SectionWrapper id="certificates" title={sectionMeta.certificates.title} icon={sectionMeta.certificates.icon}>
          <Certificates items={demoData.certificates} />
        </SectionWrapper>

        <SectionWrapper id="education" title={sectionMeta.education.title} icon={sectionMeta.education.icon}>
          <Education items={demoData.education} />
        </SectionWrapper>

        <SectionWrapper id="recommendations" title={sectionMeta.recommendations.title} icon={sectionMeta.recommendations.icon}>
          <Recommendations items={demoData.recommendations} />
        </SectionWrapper>
      </main>

      <Footer />
    </div>
  )
}

export default App
