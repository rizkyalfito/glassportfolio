import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import SkillsSection from "./components/SkillsSection"
import ProjectsSection from "./components/ProjectsSection"
import ExperienceSection from "./components/ExperienceSection"
import ContactSection from "./components/ContactSection"
import FloatingElements from "./components/FloatingElements"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <>
      <FloatingElements />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </>
  )
}
