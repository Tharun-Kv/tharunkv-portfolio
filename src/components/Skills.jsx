import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "Python", "TensorFlow", "PyTorch", "React.js", "Node.js",
    "JavaScript", "Firebase", "AWS", "NumPy", "Pandas", "OpenCV",
    "SQL", "Git", "Machine Learning", "Deep Learning"
  ];

  return (
    <section id="skills" className="py-24 px-8 text-center bg-gradient-to-t from-[#050518] to-[#0a0a1a]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-8 text-cyan-300">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {skills.map((skill, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.1 }}
              className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full text-white font-semibold shadow-md border border-cyan-500/40 hover:shadow-cyan-500/40 transition"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
