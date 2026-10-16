import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Achievements from "@/components/sections/achievements";
import Certifications from "@/components/sections/certifications";
import Resume from "@/components/sections/resume";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import { IntroAnimation } from "@/components/ui/intro-animation";
import { BackgroundAtmosphere } from "@/components/ui/background-atmosphere";
import PortfolioAssistant from "@/components/ui/portfolio-assistant";

export default function Home() {
  return (
    <main className="relative isolate min-h-screen text-[#e5e5e5] selection:bg-[#5EEAD4]/30 selection:text-[#5EEAD4]">
      <BackgroundAtmosphere />
      <IntroAnimation />
      <Navbar />
      <div className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Certifications />
        <Resume />
        <Contact />
        <Footer />
      </div>
      <PortfolioAssistant />
    </main>
  );
}
