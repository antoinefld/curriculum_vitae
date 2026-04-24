import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, Eye, EyeOff } from "lucide-react";

const experiences = [
  {
    id: "senoee",
    title: "Stage chez Senoee",
    period: "Octobre 2022 – Décembre 2022",
    description: (
      <>
        Développement d'<strong>API REST (Python Django)</strong>. Travail en{" "}
        <strong>équipe agile (SCRUM)</strong> avec <strong>revues de code</strong> et{" "}
        <strong>sprints hebdomadaires</strong>.
      </>
    ),
    skills: [
      { name: "Communication", desc: "Échanges réguliers et efficaces dans un cadre agile." },
      { name: "Rigueur", desc: "Respect des process et amélioration continue du code." },
      { name: "Propreté du code", desc: "Intégration des bonnes pratiques de revue et de test." },
    ],
  },
  {
    id: "auto",
    title: "Auto-Entreprise",
    period: "Mars 2024 – Juin 2024",
    description: (
      <>
        Développement d'un <strong>projet complet</strong> (frontend + backend + base de données){" "}
        <strong>conteneurisé</strong> avec <strong>Docker</strong>. Organisation et suivi sur{" "}
        <strong>Jira</strong> avec un workflow inspiré de la <strong>méthode agile</strong>. Gestion
        de projet, relation client, <strong>développement web</strong>.
      </>
    ),
    skills: [
      { name: "Autonomie", desc: "Gestion de bout en bout du projet et de son avancement." },
      { name: "Communication client", desc: "Définition claire des besoins et feedbacks réguliers." },
      { name: "Priorisation", desc: "Structuration du travail et respect des objectifs fixés." },
    ],
  },
];

export default function ExpPro() {
  const [openSection, setOpenSection] = useState("senoee");
  const [showDetails, setShowDetails] = useState({ senoee: false, auto: false });

  const toggleSection = (id) => setOpenSection((prev) => (prev === id ? null : id));
  const toggleDetails = (id) => setShowDetails((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <section aria-label="Expérience Professionnelle" className="bg-[#ffffff] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-extrabold text-stone-900 mb-10 pb-3 border-b border-stone-200">
          Expérience Professionnelle
        </h1>

        <div className="flex flex-col gap-4">
          {experiences.map((exp) => {
            const isOpen = openSection === exp.id;
            return (
              <div
                key={exp.id}
                className={`border rounded-2xl overflow-hidden transition-all ${
                  isOpen ? "border-[#dcfbfc] shadow-sm" : "border-stone-200"
                }`}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[#cff5f6] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06b6d4] focus-visible:ring-inset"
                  onClick={() => toggleSection(exp.id)}
                  aria-expanded={isOpen}
                >
                  <div>
                    <p className="text-xl font-bold text-stone-900">{exp.title}</p>
                    <span className="text-sm text-stone-500 font-medium">{exp.period}</span>
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
                      key={exp.id + "-body"}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 border-t border-stone-100">
                        <p className="text-stone-600 text-sm leading-relaxed mt-4 mb-5">
                          {exp.description}
                        </p>

                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-sm font-semibold text-stone-700">Ce que j'ai appris</h3>
                          <button
                            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-600 border border-stone-300 rounded-lg hover:border-[#dcfbfc] hover:text-[#0e7490] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06b6d4]"
                            onClick={() => toggleDetails(exp.id)}
                            aria-pressed={showDetails[exp.id]}
                          >
                            {showDetails[exp.id] ? (
                              <><EyeOff className="w-3.5 h-3.5" aria-hidden="true" /> Masquer</>
                            ) : (
                              <><Eye className="w-3.5 h-3.5" aria-hidden="true" /> Détails</>
                            )}
                          </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {exp.skills.map((skill) => (
                            <div
                              key={skill.name}
                              className="bg-white border border-stone-200 rounded-xl p-4 hover:border-[#dcfbfc] transition-all"
                            >
                              <h4 className="text-sm font-semibold text-stone-800 mb-1">
                                {skill.name}
                              </h4>
                              <AnimatePresence>
                                {showDetails[exp.id] && (
                                  <motion.p
                                    key={skill.name + "-desc"}
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-stone-500 text-xs leading-relaxed"
                                  >
                                    {skill.desc}
                                  </motion.p>
                                )}
                              </AnimatePresence>
                            </div>
                          ))}
                        </div>
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
