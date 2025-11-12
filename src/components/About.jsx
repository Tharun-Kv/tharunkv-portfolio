import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-8 text-center overflow-hidden bg-gradient-to-b from-[#050518] to-[#0a0a1a]"
    >
      {/* Background glow */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_rgba(0,255,255,0.1),_transparent_70%)] blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        <h2 className="text-5xl font-extrabold text-cyan-300 mb-8 tracking-wide drop-shadow-md">
          About Me
        </h2>

        <p className="text-gray-300 leading-relaxed text-lg mb-8">
          Hey there! 👋 I’m <span className="text-cyan-300 font-semibold">Tharun K V</span>, 
          a passionate <span className="text-sky-400 font-medium">Artificial Intelligence & Machine Learning</span> student 
          from <span className="text-cyan-300">GITAM University</span>, Bengaluru.  
          My goal is to build intelligent systems that combine <span className="text-purple-400">data, algorithms, and creativity</span> 
          to make technology more human.
        </p>

        <p className="text-gray-300 leading-relaxed text-lg mb-8">
          I love exploring how neural networks, deep learning, and generative AI can solve 
          real-world challenges — whether it’s optimizing processes, detecting plant diseases, 
          or improving accessibility through AI-driven tools.  
          I’ve developed models using <span className="text-cyan-300">TensorFlow, OpenCV, and PyTorch</span> and implemented 
          them into practical applications with <span className="text-blue-400">React.js</span> and <span className="text-blue-400">Firebase</span>.
        </p>

        <p className="text-gray-300 leading-relaxed text-lg mb-8">
          Beyond machine learning, I’m equally drawn to <span className="text-cyan-400">frontend engineering</span> — crafting smooth, 
          futuristic web experiences that merge art and logic.  
          During my internship at <span className="text-sky-400">Techverve Solutions</span>, I built 
          a responsive e-commerce dashboard using React and Firebase that connected design and functionality seamlessly.
        </p>

        <p className="text-gray-300 leading-relaxed text-lg mb-8">
          I’m constantly learning — diving into <span className="text-purple-400">cloud computing, federated learning, and AI ethics</span>.  
          I believe the future belongs to those who can blend <span className="text-cyan-300">intelligence with imagination</span>.  
          My dream? To lead innovation in AI that transforms industries while keeping humanity at its core.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-10"
        >
          <a
            href="https://github.com/Tharun-Kv"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            Explore My GitHub
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
