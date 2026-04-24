import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, Eye, EyeOff } from "lucide-react";

const skillSections = [
  {
    title: "Développement",
    data: [
      { name: "Python", desc: "Django, scripts d'automatisation" },
      { name: "JavaScript", desc: "Node.js, React (Native)" },
      { name: "C / C++", desc: "Bases systèmes et réseau" },
      { name: "Java", desc: "Spring (notions)" },
      { name: "Git & GitHub", desc: "Gestion de versions, workflow collaboratif" },
    ],
  },
  {
    title: "DevOps & Infra",
    data: [
      { name: "Docker", desc: "Conteneurisation, docker-compose" },
      { name: "CI/CD", desc: "Pipelines automatisés via GitHub Actions" },
      { name: "Linux", desc: "Bash, gestion d'environnement, scripts" },
      { name: "DevOps", desc: "Automatisation, tests, intégration continue" },
    ],
  },
  {
    title: "Outils & Méthodo",
    data: [
      { name: "Gestion de projet", desc: "Agile / SCRUM, Jira / Notion" },
      { name: "Outils", desc: "VS Code, Postman, Docker Desktop" },
      { name: "Méthodologie", desc: "Autonomie, curiosité, apprentissage rapide" },
    ],
  },
];

export default function SkillsHard() {
  const [openSection, setOpenSection] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section aria-label="Hard Skills" className="bg-[#ffffff] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold text-stone-900 mb-8 pb-3 border-b border-stone-200">
          Hard Skills
        </h2>

        {skillSections.map((section, index) => {
          const isOpen = openSection === index;
          return (
            <div key={index} className="mb-2">
              <div
                className="flex items-center justify-between cursor-pointer select-none py-3"
                onClick={() => setOpenSection(isOpen ? -1 : index)}
                role="button"
                aria-expanded={isOpen}
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setOpenSection(isOpen ? -1 : index)}
              >
                <div className="flex items-center gap-3">
                  {isOpen ? (
                    <ChevronDown className="text-[#d08838] w-5 h-5" aria-hidden="true" />
                  ) : (
                    <ChevronRight className="text-[#d08838] w-5 h-5" aria-hidden="true" />
                  )}
                  <span className="text-xl font-bold text-stone-800">{section.title}</span>
                </div>

                {isOpen && (
                  <button
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-600 border border-stone-300 rounded-lg hover:border-[#dcfbfc] hover:text-[#0e7490] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06b6d4]"
                    onClick={(e) => { e.stopPropagation(); setShowDetails(!showDetails); }}
                    aria-pressed={showDetails}
                  >
                    {showDetails ? (
                      <><EyeOff className="w-3.5 h-3.5" aria-hidden="true" /> Masquer</>
                    ) : (
                      <><Eye className="w-3.5 h-3.5" aria-hidden="true" /> Détails</>
                    )}
                  </button>
                )}
              </div>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2 pb-6">
                      {section.data.map((skill) => (
                        <div
                          key={skill.name}
                          className="bg-white border border-stone-200 rounded-xl p-4 hover:border-[#dcfbfc] hover:shadow-sm transition-all"
                        >
                          <h3 className="text-sm font-semibold text-stone-800">{skill.name}</h3>
                          <AnimatePresence>
                            {showDetails && (
                              <motion.p
                                key={skill.name + "-desc"}
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="text-stone-500 text-xs leading-relaxed mt-1"
                              >
                                {skill.desc}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {index < skillSections.length - 1 && (
                <div className="border-t border-stone-100" />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
