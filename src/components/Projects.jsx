import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const starsarena = [
  { name: "JavaScript", desc: "Node.js, React" },
  { name: "Supabase", desc: "Base de données et authentification" },
  { name: "Docker", desc: "Conteneurisation du projet complet" },
  { name: "DevOps", desc: "CI/CD, gestion des environnements" },
  { name: "GitHub", desc: "Collaboration et gestion de versions" },
];

const pharmaxcess = [
  { name: "React", desc: "Développement du frontend" },
  { name: "Docker", desc: "docker-compose pour front, back et MySQL" },
  { name: "MySQL", desc: "Base de données conteneurisée" },
  { name: "Git", desc: "Versioning et branches collaboratives" },
  { name: "Agile", desc: "Méthodologie de travail d’équipe" },
];

const task_manager_plus = [
  { name: "React", desc: "Interface utilisateur dynamique" },
  { name: "Node.js / Express", desc: "API backend et logique serveur" },
  { name: "MySQL", desc: "Base de données conteneurisée" },
  { name: "Docker", desc: "Front, back, DB et service IA isolés" },
  { name: "GitHub Actions", desc: "CI/CD et automatisation de tests" },
  { name: "Ollama", desc: "Intégration du modèle Llama 3.2" },
];

export default function Projects() {
  const projectSections = [
    {
      title: "TaskManagerPlus (2025 - En cours)",
      description: `
        <b>Outil DevOps</b> permettant de <b>gérer</b> et exécuter <b>automatiquement</b> des <b>tâches</b> à l’aide d’<b>agents IA</b>.<br />
        <b>Intégration</b> d’un <b>service IA</b> (<b>Ollama</b> + modèle <b>Llama 3.2</b>) via <b>Docker Compose</b><br />
        <b>Automatisation</b> de tests et <b>intégration continue</b> via GitHub Actions.<br />
        <b>Développement complet</b> du <b>frontend</b> (React), <b>backend</b> (Node.js / Express) et <b>base de données</b> MySQL.
      `,
      data: task_manager_plus,
    },
    {
      title: "StarsArena (2025 - En cours)",
      description: `
        Développement d’une <b>plateforme</b> sociale de <b>compétitions musicales</b>.<br />
        Travail principalement sur le <b>backend (Node.js / Express)</b> et l’intégration <b>frontend (React)</b>.<br />
        Gestion de la <b>base de données Supabase</b> et mise en place de la <b>conteneurisation Docker</b>.<br />
        Participation à l’<b>automatisation</b> du workflow et à la configuration <b>DevOps</b> du projet
      `,
      data: starsarena,
    },
    {
      title: "PharmaXcess (2024 - 2025)",
      description: `
        Développement d’une <b>application web</b> destinée à la <b>gestion</b> et l’<b>accès simplifié</b>
        à des <b>ressources pharmaceutiques</b>.<br />
        Responsable de la <b>conteneurisation Docker</b> (frontend + backend + base PostgreSQL).<br />
        Contribution majeure sur le <b>frontend React</b> et <b>intégration des APIs</b>.<br />
        Collaboration en <b>équipe Agile</b> avec suivi sur <b>Notion</b>.
      `,
      data: pharmaxcess,
    }
  ];

  const [openSection, setOpenSection] = useState(-1);
  const [showPoints, setShowPoints] = useState(false);


  const { ref: sectionRef, inView: isVisible } = useInView({
    threshold: 0.1,
  });

  const renderProjectContent = (project) => (
    <motion.div
      key="content"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-6xl"
    >
      <h2 className="text-5xl py-2 font-bold mb-16 text-left pl-16 md:pl-32 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
        {project.title}
      </h2>

      <motion.div className="w-full bg-gradient-to-br from-[#10162B] to-[#1A1F3B] border border-cyan-500/20 rounded-2xl p-6 mb-6 transition-colors duration-300 hover:border-cyan-400/70">
        <h4 className="text-2xl font-semibold text-cyan-300 mb-3">Description</h4>
        <p
          className="text-gray-400 text-sm leading-relaxed"
          dangerouslySetInnerHTML={{ __html: project.description }}
        />
      </motion.div>

      <button
        onClick={() => setShowPoints(!showPoints)}
        className="mb-4 text-cyan-300 font-semibold hover:text-cyan-400 transition flex items-center gap-2"
      >
        {showPoints ? "Masquer les compétences" : "Afficher les compétences"}
        <span>{showPoints ? "▴" : "▾"}</span>
      </button>

      <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {project.data.map((skill) => (
          <motion.div
            key={skill.name}
            className="bg-gradient-to-br from-[#10162B] to-[#1A1F3B] border border-cyan-500/20 rounded-2xl p-4 text-center transition-colors duration-300 hover:border-cyan-400/70"
          >
            <h4 className="text-xl font-semibold text-cyan-300 mb-2">{skill.name}</h4>
            <AnimatePresence>
              {showPoints && (
                <motion.p
                  key={skill.name + "-desc"}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-gray-400 text-sm leading-relaxed"
                >
                  {skill.desc}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );

  return (
    <section ref={sectionRef} className="min-h-screen flex flex-col md:flex-row bg-[#0B1225] py-16 relative">

      <AnimatePresence>
        {isVisible && openSection !== -1 && (
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="flex flex-col gap-4 px-6 py-4 fixed left-4 top-32 md:w-56 z-50 bg-[#0B1225]/70 rounded-lg shadow-lg"
          >
            <h2 className="text-3xl py-4 font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Mes projets
            </h2>
            {projectSections.map((project, index) => (
              <motion.div
                key={index}
                onClick={() => setOpenSection(index)}
                className={`cursor-pointer select-none px-2 py-1 rounded-md transition-colors ${
                  openSection === index
                    ? "bg-cyan-500/40 text-white"
                    : "text-cyan-300 hover:bg-cyan-400/20"
                }`}
                layout
              >
                {project.title}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex-1 flex flex-col justify-center items-start px-8">
        <AnimatePresence>
          {openSection !== -1
            ? renderProjectContent(projectSections[openSection])
            : (
              <motion.div
                key="intro"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full max-w-6xl"
              >
                <h2 className="text-5xl py-2 font-bold mb-16 pl-16 md:pl-36 text-left bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                  Mes projets
                </h2>

                {projectSections.map((project, index) => {
                  const isOpen = openSection === index;
                  return (
                    <motion.div key={index} className="w-full mb-6" layout>
                      <div
                        className="flex items-center cursor-pointer mb-2 select-none"
                        onClick={() => setOpenSection(index)}
                      >
                        <span className="mr-3 text-cyan-400 text-2xl">
                          {isOpen ? "▾" : "▸"}
                        </span>
                        <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 text-left">
                          {project.title}
                        </h3>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
        </AnimatePresence>
      </div>
    </section>
  );
}
