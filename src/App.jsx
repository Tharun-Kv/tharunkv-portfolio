import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Education from "./components/Education";
import Leadership from "./components/Leadership";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* Floating glowing particles background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute w-3 h-3 bg-cyan-400 rounded-full blur-md animate-bounce top-20 left-1/3"></div>
        <div className="absolute w-2 h-2 bg-blue-500 rounded-full blur-sm animate-pulse top-1/3 right-1/4"></div>
        <div className="absolute w-4 h-4 bg-purple-500 rounded-full blur-md animate-spin bottom-20 left-1/4"></div>
      </div>

      {/* Main Portfolio Layout */}
      <div className="bg-[#050518] text-white font-poppins scroll-smooth selection:bg-cyan-400/40 selection:text-white">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certificates />
        <Education />
        <Leadership />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
