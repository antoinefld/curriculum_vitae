import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skills_dev = [
  { name: "Python", desc: "Django, scripts d’automatisation" },
  { name: "JavaScript", desc: "Node.js, React (Native)" },
  { name: "C / C++", desc: "Bases systèmes et réseau" },
  { name: "Java", desc: "Spring (notions)" },
  { name: "Git & GitHub", desc: "Gestion de versions, workflow collaboratif" },
];

const skills_devops = [
  { name: "Docker", desc: "Conteneurisation, docker-compose" },
  { name: "CI/CD", desc: "Pipelines automatisés via GitHub Actions" },
  { name: "Linux", desc: "Bash, gestion d’environnement, scripts" },
  { name: "DevOps", desc: "Automatisation, tests, intégration continue" },
];

const skills_utils = [
  { name: "Gestion de projet", desc: "Agile / SCRUM, Jira / Notion" },
  { name: "Outils", desc: "VS Code, Postman, Docker Desktop" },
  { name: "Langues", desc: "Anglais (B2), Allemand (B1/B2), notions de Russe & bases de Lituanien" },
  { name: "Méthodologie", desc: "Autonomie, curiosité, apprentissage rapide" },
];

export default function Skills_hard() {
  const skillSections = [
    { title: "Compétences Développement", data: skills_dev },
    { title: "Compétences DevOps & Infra", data: skills_devops },
    { title: "Compétences Outils & Environnement", data: skills_utils },
  ];

  const [openSection, setOpenSection] = useState(0);
  const [showPoints, setShowPoints] = useState(false);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-[#0B1225] py-16">
      <h2 className="text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
        Hard Skills
      </h2>

      {skillSections.map((section, index) => {
        const isOpen = openSection === index;
        return (
          <div key={index} className="w-full max-w-6xl mb-12">

            <div
              className="flex items-center cursor-pointer mb-4 select-none"
              onClick={() => setOpenSection(isOpen ? -1 : index)}
            >
              <span className="mr-3 text-cyan-400 text-2xl">
                {isOpen ? "▾" : "▸"}
              </span>
              <h3 className="text-3xl py-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                {section.title}
              </h3>
            </div>


            <AnimatePresence>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                  className="overflow-hidden"
                >

                  <button
                    onClick={() => setShowPoints(!showPoints)}
                    className="mb-4 text-cyan-300 font-semibold hover:text-cyan-400 transition flex items-center gap-2"
                  >
                    {showPoints ? "Masquer les détails" : "Afficher les détails"}
                    <span>{showPoints ? "▴" : "▾"}</span>
                  </button>

                  <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                    initial="hidden"
                    animate="visible"
                  >
                    {section.data.map((skill) => (
                      <motion.div
                        key={skill.name}
                        className="bg-gradient-to-br from-[#10162B] to-[#1A1F3B]
                          border border-cyan-500/20 rounded-2xl p-4 text-center
                          transition-colors duration-300 hover:border-cyan-400/70"
                      >
                        <h4 className="text-xl font-semibold text-cyan-300 mb-2">
                          {skill.name}
                        </h4>
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
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </section>
  );
}
