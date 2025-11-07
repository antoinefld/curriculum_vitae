import { motion } from "framer-motion";
import { Linkedin, Mail, Github } from "lucide-react";

export default function Introducing() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">

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
          Étudiant en <b>5ᵉ année</b> à <b>Epitech</b> Lyon (2021–2026).
          <br />
          <b>Erasmus</b> à Vytautas Magnus University, Kaunas, <b>Lituanie</b> (Aout 2024 - Juin 2025)
          <br />
          Je suis passionné par le  <b>développement web</b> et l’<b>automatisation des workflows</b>.
          <br />
          Je recherche un stage de fin d’études de 6 mois à partir du 2 mars 2026.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">

          <a
            href="#skills_soft"
            className="px-8 mb-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-600 text-black font-semibold rounded-full hover:scale-105 transition-transform"
          >
            Me découvrir
          </a>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/antoine-fillaudeau-9428a3239/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2 bg-[#0B1225]/80 border border-cyan-500/40 text-cyan-300 rounded-full hover:bg-cyan-400/10 hover:text-white transition"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>

            <a
              href="mailto:antoine.fillaudeau@epitech.eu"
              className="flex items-center gap-2 px-6 py-2 bg-[#0B1225]/80 border border-cyan-500/40 text-cyan-300 rounded-full hover:bg-cyan-400/10 hover:text-white transition"
            >
              <Mail className="w-5 h-5" />
              Contact
            </a>

            <a
              href="https://github.com/antoinefld" // <-- Remplace par ton GitHub
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2 bg-[#0B1225]/80 border border-cyan-500/40 text-cyan-300 rounded-full hover:bg-cyan-400/10 hover:text-white transition"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
        </div>
      </motion.div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 animate-[spin_30s_linear_infinite] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
    </section>
  );
}
