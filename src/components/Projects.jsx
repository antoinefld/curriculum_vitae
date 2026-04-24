import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, Eye, EyeOff } from "lucide-react";

const projects = [
  {
    title: "TaskManagerPlus",
    period: "2025 – En cours",
    description: (
      <>
        Outil DevOps permettant de <strong>gérer</strong> et exécuter{" "}
        <strong>automatiquement</strong> des <strong>tâches</strong> à l'aide d'
        <strong>agents IA</strong>. Intégration d'un service IA (<strong>Ollama</strong> +{" "}
        <strong>Llama 3.2</strong>) via <strong>Docker Compose</strong>. Automatisation des
        tests et <strong>CI/CD</strong> via GitHub Actions. Développement complet du{" "}
        <strong>frontend</strong> (React), <strong>backend</strong> (Node.js / Express) et
        base de données MySQL.
      </>
    ),
    skills: [
      { name: "React", desc: "Interface utilisateur dynamique" },
      { name: "Node.js / Express", desc: "API backend et logique serveur" },
      { name: "MySQL", desc: "Base de données conteneurisée" },
      { name: "Docker", desc: "Front, back, DB et service IA isolés" },
      { name: "GitHub Actions", desc: "CI/CD et automatisation de tests" },
      { name: "Ollama", desc: "Intégration du modèle Llama 3.2" },
    ],
  },
  {
    title: "StarsArena",
    period: "2025 – En cours",
    description: (
      <>
        Développement d'une <strong>plateforme sociale</strong> de{" "}
        <strong>compétitions musicales</strong>. Travail sur le{" "}
        <strong>backend (Node.js / Express)</strong> et l'intégration{" "}
        <strong>frontend (React)</strong>. Gestion de la{" "}
        <strong>base de données Supabase</strong> et mise en place de la{" "}
        <strong>conteneurisation Docker</strong>. Participation à l'
        <strong>automatisation</strong> du workflow et à la configuration <strong>DevOps</strong>.
      </>
    ),
    skills: [
      { name: "JavaScript", desc: "Node.js, React Native" },
      { name: "Supabase", desc: "Base de données et authentification" },
      { name: "Docker", desc: "Conteneurisation du projet complet" },
      { name: "DevOps", desc: "CI/CD, gestion des environnements" },
      { name: "GitHub", desc: "Collaboration et gestion de versions" },
    ],
  },
  {
    title: "PharmaXcess",
    period: "2024 – 2025",
    description: (
      <>
        Application web destinée à la <strong>gestion</strong> et l'
        <strong>accès simplifié</strong> à des <strong>ressources pharmaceutiques</strong>.
        Responsable de la <strong>conteneurisation Docker</strong> (frontend + backend +
        PostgreSQL). Contribution majeure sur le <strong>frontend React</strong> et l'
        <strong>intégration des APIs</strong>. Collaboration en{" "}
        <strong>équipe Agile</strong> avec suivi sur <strong>Notion</strong>.
      </>
    ),
    skills: [
      { name: "React", desc: "Développement du frontend" },
      { name: "Docker", desc: "docker-compose pour front, back et MySQL" },
      { name: "MySQL", desc: "Base de données conteneurisée" },
      { name: "Git", desc: "Versioning et branches collaboratives" },
      { name: "Agile", desc: "Méthodologie de travail d'équipe" },
    ],
  },
];

export default function Portfolio() {
  const [openProject, setOpenProject] = useState(null);
  const [showSkills, setShowSkills] = useState(false);

  const toggle = (index) => {
    setOpenProject((prev) => (prev === index ? null : index));
    setShowSkills(false);
  };

  return (
    <section aria-label="Portfolio" className="bg-[#ffffff] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-extrabold text-stone-900 mb-10 pb-3 border-b border-stone-200">
          Portfolio
        </h1>

        <div className="flex flex-col gap-4">
          {projects.map((project, index) => {
            const isOpen = openProject === index;
            return (
              <div
                key={index}
                className={`border rounded-2xl overflow-hidden transition-all ${
                  isOpen ? "border-[#dcfbfc] shadow-sm" : "border-stone-200"
                }`}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[#cff5f6] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06b6d4] focus-visible:ring-inset"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                >
                  <div>
                    <p className="text-xl font-bold text-stone-900">{project.title}</p>
                    <span className="text-sm text-stone-500 font-medium">{project.period}</span>
                  </div>
                  {isOpen ? (
                    <ChevronDown className="w-5 h-5 text-[#d08838] flex-shrink-0" aria-hidden="true" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-stone-400 flex-shrink-0" aria-hidden="true" />
                  )}
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      key="project-body"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 border-t border-stone-100">
                        <p className="text-stone-600 text-sm leading-relaxed mt-4 mb-5">
                          {project.description}
                        </p>

                        <button
                          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-600 border border-stone-300 rounded-lg hover:border-[#dcfbfc] hover:text-[#0e7490] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06b6d4] mb-4"
                          onClick={() => setShowSkills(!showSkills)}
                          aria-pressed={showSkills}
                        >
                          {showSkills ? (
                            <><EyeOff className="w-3.5 h-3.5" aria-hidden="true" /> Masquer les compétences</>
                          ) : (
                            <><Eye className="w-3.5 h-3.5" aria-hidden="true" /> Voir les compétences</>
                          )}
                        </button>

                        <AnimatePresence>
                          {showSkills && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="flex flex-wrap gap-2">
                                {project.skills.map((skill) => (
                                  <span
                                    key={skill.name}
                                    title={skill.desc}
                                    className="px-3 py-1 bg-[#edfefe] border border-[#dcfbfc] text-[#155e75] text-xs font-medium rounded-full"
                                  >
                                    {skill.name}
                                  </span>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
