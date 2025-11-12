import { motion } from "framer-motion";

export default function Certificates() {
  const certs = [
    "AWS Cloud Essentials (2024)",
    "Tata Forage – GenAI Data Analytics Intern (2025)",
    "BCG GenAI Job Simulation (2025)",
    "Coursera – Artificial Intelligence (2024)",
  ];

  return (
    <section id="certificates" className="py-24 px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-10 text-cyan-300">Certifications</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-blue-900/30 backdrop-blur-lg rounded-2xl border border-cyan-700 shadow-lg hover:shadow-cyan-500/40 transition"
            >
              <h3 className="text-xl font-semibold text-white">{cert}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
