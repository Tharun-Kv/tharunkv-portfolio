import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-8 bg-gradient-to-b from-[#050518] to-[#0a0a1a] text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-cyan-300 mb-10">Experience</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-blue-900/30 rounded-2xl border border-cyan-700 hover:scale-105 transition">
            <h3 className="text-2xl font-semibold">Frontend Developer Intern</h3>
            <p className="text-gray-400">Techverve Solutions | May–Jun 2025</p>
            <ul className="text-gray-300 mt-3 space-y-2">
              <li>Developed responsive UI with ReactJS and Firebase integration.</li>
              <li>Implemented authentication and admin dashboards.</li>
            </ul>
          </div>
          <div className="p-6 bg-blue-900/30 rounded-2xl border border-cyan-700 hover:scale-105 transition">
            <h3 className="text-2xl font-semibold">AI/ML Intern</h3>
            <p className="text-gray-400">Gitam University | Jan–Apr 2024</p>
            <ul className="text-gray-300 mt-3 space-y-2">
              <li>Built CNN for rose crop disease detection (95% accuracy).</li>
              <li>Optimized inference with OpenCV preprocessing.</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
