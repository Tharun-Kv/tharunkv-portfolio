import { motion } from "framer-motion";

export default function Leadership() {
  const leadership = [
    "Organized 5+ competitions in Gitam Quiz Club with 30+ participants.",
    "Runner-up at Biomed Bharat Hackathon 2024 for automated injection system.",
    "Collaborated with peers to develop AI-driven agricultural solutions.",
  ];

  return (
    <section id="leadership" className="py-24 px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-8 text-cyan-300">Leadership & Activities</h2>
        <ul className="max-w-4xl mx-auto space-y-4 text-gray-300">
          {leadership.map((act, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.02 }}
              className="p-5 bg-blue-900/30 rounded-xl border border-cyan-700 hover:shadow-cyan-400/30 transition"
            >
              {act}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
