import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    { title: "E-Commerce Web App", desc: "Full-stack app with React & Firebase" },
    { title: "Rose Disease Detection", desc: "CNN model for rose leaf classification" },
    { title: "VisualAid", desc: "OCR + TTS tool for accessibility in education" },
  ];

  return (
    <section id="projects" className="py-24 px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-10 text-cyan-300">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-6 bg-[#0f1629]/70 backdrop-blur-xl rounded-2xl border border-cyan-700 shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-white">{p.title}</h3>
              <p className="text-gray-400 mt-3">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
