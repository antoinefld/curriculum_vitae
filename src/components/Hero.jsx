import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Arrière-plan animé */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1C] via-[#1B1F3B] to-[#0A0F1C]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00FFFF20,transparent_60%)] animate-pulse"></div>
      </div>

      <motion.div
        className="relative z-10 m-24"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
          Antoine FILLAUDEAU
        </h1>
        <p className="mt-6 text-xl text-gray-300">
          DevOps • Automation • Web Development
          <br />
          Petite phrase présentative
        </p>
        <div className="mt-10">
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-600 text-black font-semibold rounded-full hover:scale-105 transition-transform"
          >
            Explorer mes projets
          </a>
        </div>
      </motion.div>

      {/* Effet de particules */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 animate-[spin_30s_linear_infinite] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
    </section>
  );
}
