import { motion } from "framer-motion";

export default function Education() {
  const education = [
    { title: "GITAM Deemed University", desc: "B.Tech in Artificial Intelligence & Machine Learning | 2022–2026 | CGPA: 7.52/10" },
    { title: "Mandavya Excellence PU College", desc: "PCMB | 2020–2022 | 91%" },
    { title: "RK Educational Institution", desc: "SSLC | 2019–2020 | 93.94%" },
  ];

  return (
    <section id="education" className="py-24 px-8 text-center bg-gradient-to-b from-[#050518] to-[#0a0a1a]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-10 text-cyan-300">Education</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-blue-900/30 backdrop-blur-lg rounded-2xl border border-cyan-700 hover:shadow-cyan-500/30 transition"
            >
              <h3 className="text-2xl font-semibold text-white">{edu.title}</h3>
              <p className="text-gray-300 mt-2">{edu.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
