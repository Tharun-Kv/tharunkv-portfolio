import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 text-center bg-gradient-to-b from-[#050518] to-[#0a0a1a]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-8 text-cyan-300">Contact Me</h2>
        <p className="text-gray-400 mb-8">
          Let’s collaborate or discuss opportunities in AI & ML! 🚀
        </p>

        <div className="space-x-4">
          <a
            href="mailto:tharunkv742004@gmail.com"
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold shadow-lg hover:scale-105 transition"
          >
            Send Email
          </a>
          <a
            href="https://github.com/Tharun-Kv"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 border border-cyan-400 text-cyan-300 rounded-lg hover:bg-cyan-600/20 transition"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}
