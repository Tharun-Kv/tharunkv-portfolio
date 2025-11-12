import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden mt-16 bg-[#0a0a1a] py-10 border-t border-cyan-700/30 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute top-0 w-full h-[2px] bg-gradient-to-r from-blue-600 via-cyan-400 to-purple-600 animate-pulse"></div>

        <h2 className="text-2xl font-bold text-cyan-300 mb-2">Tharun K V</h2>
        <p className="text-gray-400 mb-4">
          Building intelligent solutions with AI, ML & Creativity 💡
        </p>

        <div className="flex justify-center gap-6 mb-4 text-xl">
          <a href="https://github.com/Tharun-Kv" className="hover:text-cyan-400"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/tharun-venkatesh-b811bb269" className="hover:text-cyan-400"><i className="fab fa-linkedin"></i></a>
          <a href="mailto:tharunkv742004@gmail.com" className="hover:text-cyan-400"><i className="fas fa-envelope"></i></a>
        </div>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} <span className="text-cyan-400 font-medium">Tharun K V</span>. All Rights Reserved.
        </p>
      </motion.div>
    </footer>
  );
}
