import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Achievements from "@/components/sections/achievements";
import Certifications from "@/components/sections/certifications";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import { IntroAnimation } from "@/components/ui/intro-animation";
import { BackgroundAtmosphere } from "@/components/ui/background-atmosphere";

export default function Home() {
  return (
    <main className="relative isolate min-h-screen text-[#e5e5e5] selection:bg-[#ccff00]/30 selection:text-[#ccff00]">
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
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
