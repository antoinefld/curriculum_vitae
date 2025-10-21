import { motion } from "framer-motion";

import ReactCountryFlag from "react-country-flag";

const skills = [
  {
    name: "Autonomie",
    desc: "Capable de comprendre rapidement un contexte et de trouver des solutions efficaces de manière indépendante.",
  },
  {
    name: "Curiosité",
    desc: "J’aime explorer, apprendre et expérimenter de nouveaux outils ou concepts pour mieux comprendre ce que je fais.",
  },
  {
    name: "Adaptabilité",
    desc: "Je m’intègre facilement dans de nouveaux environnements, aussi bien techniques que humains.",
  },
  {
    name: "Travail en équipe",
    desc: "J’aime collaborer, partager mes connaissances et aider à résoudre les problèmes ensemble.",
  },
  {
    name: "Communication",
    desc: "Diplomate et à l’écoute, je sais expliquer clairement la technique et échanger avec bienveillance.",
  },
  {
    name: "Joie de vivre",
    desc: "Toujours positif, j’apporte une bonne énergie au sein de l’équipe et contribue à une ambiance saine et motivante.",
  },
];


const skills_lang = [
  { code: "GB", name: "Anglais", desc: "Niveau C1" },
  { code: "DE", name: "Allemand", desc: "Niveau B2" },
  { code: "RU", name: "Russe", desc: "Niveau A1" },
  { code: "LT", name: "Lituanien", desc: "Bases" },
];

export default function Skills_soft() {
  return (
    <section id="skills_soft" className="min-h-screen flex flex-col justify-center items-center bg-[#0B1225]">
    <div className="container-section">
      <h2 className="text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
        Soft Skills
      </h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
        }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className="bg-gradient-to-br from-[#10162B] to-[#1A1F3B] border border-cyan-500/20 rounded-2xl p-6 text-center hover:border-cyan-400 transition"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">{skill.name}</h3>
            <p className="text-gray-400 text-sm">{skill.desc}</p>
          </motion.div>
        ))}
      </motion.div>


      <h2 className="text-5xl font-bold py-2 mb-12 mt-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
        Langues parlées
      </h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
        }}
      >
        {skills_lang.map((lang) => (
          <motion.div
            key={lang.name}
            className="bg-gradient-to-br from-[#10162B] to-[#1A1F3B] 
              border border-cyan-500/20 rounded-2xl p-4 text-center 
              hover:border-cyan-400 transition"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <ReactCountryFlag
                countryCode={lang.code}
                svg
                style={{ width: "1.5em", height: "1.5em" }}
              />
              <h3 className="text-xl font-semibold text-cyan-300">{lang.name}</h3>
            </div>
            <p className="text-gray-400 text-sm">{lang.desc}</p>
          </motion.div>
        ))}
      </motion.div>
      </div>
    </section>
  );
}
