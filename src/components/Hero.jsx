import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center">
      {/* background glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[480px] h-[480px] rounded-full bg-cyan-500/10 blur-3xl top-10 left-10 animate-[pulse_6s_infinite]"></div>
        <div className="absolute w-[360px] h-[360px] rounded-full bg-purple-500/8 blur-3xl bottom-10 right-10 animate-[pulse_7s_infinite]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,_rgba(0,255,245,0.04),transparent_15%),radial-gradient(circle_at_85%_80%,_rgba(125,80,255,0.03),transparent_20%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Left: Text / CTA */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-200 rounded-full text-sm font-medium backdrop-blur-sm border border-cyan-500/30">
              Aspiring AI/ML Engineer
            </span>
            <span className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-sm font-medium border border-purple-600/20">
              React • TensorFlow • PyTorch
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-sky-400 to-purple-400 drop-shadow-lg">
            Tharun K V
          </h1>

          <p className="mt-6 max-w-2xl text-gray-300 text-lg">
            I build intelligent systems and futuristic UIs — blending AI models with seamless web experiences.
            Passionate about creating scalable, data-driven solutions that connect innovation with real-world impact.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <a
              href="https://github.com/Tharun-Kv"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 border border-cyan-400 text-cyan-300 rounded-lg hover:bg-cyan-600/20 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/tharun-venkatesh-b811bb269"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 border border-purple-400 text-purple-300 rounded-lg hover:bg-purple-600/10 transition"
            >
              LinkedIn
            </a>
          </div>

          {/* Skill Chips */}
          <div className="mt-8 flex flex-wrap gap-3">
            {["Python", "TensorFlow", "PyTorch", "React", "Firebase", "OpenCV"].map((s, i) => (
              <motion.span
                key={s}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="px-4 py-2 text-sm bg-[#0f1629]/60 border border-cyan-600/30 rounded-full text-gray-100"
              >
                {s}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Right: Profile / Hologram */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* hologram rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 rounded-full border border-cyan-500/20 blur-sm"></div>

                <div className="absolute inset-6 rounded-full border-2 border-cyan-400/40 transform rotate-12 animate-[spin_14s_linear_infinite]"></div>
                <div className="absolute inset-12 rounded-full border border-purple-500/30 transform -rotate-20 animate-[spin_18s_linear_infinite]"></div>

                {/* profile image */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-white/10 shadow-lg bg-gradient-to-br from-slate-800 to-slate-900">
                  <img
                    src="/profile.jpg"
                    alt="Tharun K V"
                    onError={(e) => {
                      e.currentTarget.src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='600' viewBox='0 0 600 600'%3E%3Crect width='100%25' height='100%25' fill='%23020b1a'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23a0f0ff' font-family='Arial' font-size='36'%3ETharun K V%3C/text%3E%3C/svg%3E";
                    }}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* floating nodes */}
                <div className="absolute -left-10 -top-6 w-6 h-6 bg-cyan-400 rounded-full blur-sm animate-pulse"></div>
                <div className="absolute -right-6 bottom-8 w-4 h-4 bg-purple-400 rounded-full blur-sm animate-pulse"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* subtle bottom wave */}
      <div className="absolute left-0 right-0 bottom-0 h-24 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#02021a" fillOpacity="1" d="M0,160L60,154.7C120,149,240,139,360,133.3C480,128,600,128,720,149.3C840,171,960,213,1080,229.3C1200,245,1320,235,1380,229.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}
