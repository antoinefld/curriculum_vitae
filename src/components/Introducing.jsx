import { motion } from "framer-motion";
import { Linkedin, Mail, Github } from "lucide-react";

const contacts = [
  {
    href: "https://www.linkedin.com/in/antoine-fillaudeau-9428a3239/",
    label: "LinkedIn",
    icon: <Linkedin className="w-4 h-4" aria-hidden="true" />,
    external: true,
  },
  {
    href: "mailto:antoine.fillaudeau@epitech.eu",
    label: "Email",
    icon: <Mail className="w-4 h-4" aria-hidden="true" />,
    external: false,
  },
  {
    href: "https://github.com/antoinefld",
    label: "GitHub",
    icon: <Github className="w-4 h-4" aria-hidden="true" />,
    external: true,
  },
];

export default function Introducing() {
  return (
    <section
      aria-label="Présentation"
      className="bg-[#ffffff] py-24 px-6 flex items-center justify-center min-h-[calc(100vh-4rem)]"
    >
      <motion.div
        className="max-w-2xl w-full text-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-[#0e7490] font-semibold text-sm tracking-widest uppercase mb-4">
          Bonjour, je suis
        </p>

        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-stone-900 mb-6">
          Antoine <span className="text-[#0e7490]">Fillaudeau</span>
        </h1>

        <p className="text-base text-stone-600 leading-relaxed mb-8 max-w-xl mx-auto">
          Étudiant en <strong className="text-stone-800">5ᵉ année</strong> à{" "}
          <strong className="text-stone-800">Epitech</strong> Lyon (2021–2026).{" "}
          <strong className="text-stone-800">Erasmus</strong> à Vytautas Magnus
          University, Kaunas, <strong className="text-stone-800">Lituanie</strong>{" "}
          (Août 2024 – Juin 2025).
          <span className="block mt-2">
            Passionné par le{" "}
            <strong className="text-stone-800">développement web</strong> et
            l'<strong className="text-stone-800">automatisation des workflows</strong>.
          </span>
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {contacts.map((btn) => (
            <motion.a
              key={btn.label}
              href={btn.href}
              {...(btn.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#ffffff] border border-stone-200 text-stone-700 rounded-full text-sm font-medium hover:border-[#dcfbfc] hover:text-[#0e7490] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06b6d4] focus-visible:ring-offset-2"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              {btn.icon}
              {btn.label}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
