import { motion } from "framer-motion";

const skills = [
  { name: "Communication", desc: "échanges réguliers et efficaces dans un cadre agile" },
  { name: "Rigueur", desc: "respect des process et amélioration continue du code" },
  { name: "Propreté du code", desc: "intégration des bonnes pratiques de revue et de test" },
];

const skills_lang = [
  { name: "Autonomie", desc: "gestion de bout en bout du projet et de son avancement" },
  { name: "Communication client", desc: "définition claire des besoins et feedbacks réguliers" },
  { name: "Priorisation", desc: "structuration du travail et respect des objectifs fixés" },
];

export default function Exp_Pro() {
  return (
    <section id="xp_pro" className="min-h-screen flex flex-col justify-center items-center bg-[#0B1225]">
    <div className="container-section">
      <h2 className="text-5xl py-2 font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
        Expérience Professionnelle
      </h2>

      <h2 className="text-4xl font-bold mb-4 py-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
        • Stage chez Senoee (Octobre 2022 - Décembre 2022)
      </h2>

      <motion.div
        key={"Description"}
        className="col-span-full bg-gradient-to-br from-[#10162B] to-[#1A1F3B] 
            border border-cyan-500/20 rounded-2xl p-4 text-center 
            hover:border-cyan-400 transition mb-2"
        whileHover={{ scale: 1.05 }}
        >
        <h3 className="text-xl font-semibold text-cyan-300 mb-2">Description</h3>
        <p className="text-gray-400 text-sm">
            Développement d’<b>API REST (Python Django)</b>.<br />
            Travail en <b>équipe agile (SCRUM)</b> avec <br />
            <b>revues de code</b> et <b>sprints hebdomadaires</b>.<br />
        </p>
      </motion.div>

      <h2 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
        Ce que j'ai appris
      </h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl"
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
            className="bg-gradient-to-br from-[#10162B] to-[#1A1F3B] border border-cyan-500/20 rounded-2xl p-4 text-center hover:border-cyan-400 transition"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">{skill.name}</h3>
            <p className="text-gray-400 text-sm">{skill.desc}</p>
          </motion.div>
        ))}
      </motion.div>


      <h2 className="text-4xl font-bold mb-4 py-2 mt-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
        • Auto-Entreprise (Mars 2024 - Juin 2024)
      </h2>

      <motion.div
        key={"Description"}
        className="col-span-full bg-gradient-to-br from-[#10162B] to-[#1A1F3B] 
            border border-cyan-500/20 rounded-2xl p-4 text-center 
            hover:border-cyan-400 transition mb-2"
        whileHover={{ scale: 1.05 }}
        >
        <h3 className="text-xl font-semibold text-cyan-300 mb-2">Description</h3>
        <p className="text-gray-400 text-sm">
            Développement d’un <b>projet complet</b> (frontend + backend + base de données) <br />
            <b>conteneurisé</b> avec <b>Docker</b>.<br />
            Organisation et suivi sur <b>Jira</b>, avec un workflow inspiré de la <b>méthode agile</b>.<br />
            Gestion de projet, relation client, <b>développement web</b>.
        </p>
      </motion.div>

      <h2 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
        Ce que j'ai appris
      </h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
        }}
      >
        {skills_lang.map((skill) => (
          <motion.div
            key={skill.name}
            className="bg-gradient-to-br from-[#10162B] to-[#1A1F3B] border border-cyan-500/20 rounded-2xl p-4 text-center hover:border-cyan-400 transition"
            whileHover={{ scale: 1.05 }}    
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">{skill.name}</h3>
            <p className="text-gray-400 text-sm">{skill.desc}</p>
          </motion.div>
        ))}
      </motion.div>
      </div>
    </section>
  );
}
