import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, Eye, EyeOff } from "lucide-react";

const senoeeSkills = [
  { name: "Communication", desc: "Échanges réguliers et efficaces dans un cadre agile." },
  { name: "Rigueur", desc: "Respect des process et amélioration continue du code." },
  { name: "Propreté du code", desc: "Intégration des bonnes pratiques de revue et de test." },
];

const autoSkills = [
  { name: "Autonomie", desc: "Gestion de bout en bout du projet et de son avancement." },
  { name: "Communication client", desc: "Définition claire des besoins et feedbacks réguliers." },
  { name: "Priorisation", desc: "Structuration du travail et respect des objectifs fixés." },
];

export default function Exp_Pro() {
  const [openSection, setOpenSection] = useState("senoee");
  const [showDetails, setShowDetails] = useState({
    senoee: false,
    auto: false,
  });

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  const toggleDetails = (section) => {
    setShowDetails((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <section
      id="xp_pro"
      className="min-h-screen flex flex-col justify-center items-center bg-[#0B1225] py-20"
    >
      <div className="container-section w-full max-w-6xl px-6">
        <h2 className="text-5xl py-4 font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Expérience Professionnelle
        </h2>


        <div className="mb-10">
          <div
            className="flex items-center justify-between cursor-pointer select-none"
            onClick={() => toggleSection("senoee")}
          >
            <div className="flex items-center gap-3">
              {openSection === "senoee" ? (
                <ChevronDown className="text-cyan-400 w-8 h-8 transition-transform" />
              ) : (
                <ChevronRight className="text-cyan-400 w-8 h-8 transition-transform" />
              )}
              <h3 className="text-3xl py-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Stage chez Senoee (Octobre 2022 - Décembre 2022)
              </h3>
            </div>

            {openSection === "senoee" && (
              <button
                className="flex items-center gap-2 px-3 py-1 text-sm text-cyan-300 border border-cyan-400/30 rounded-xl hover:bg-cyan-400/10 transition"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDetails("senoee");
                }}
              >
                {showDetails.senoee ? (
                  <>
                    <EyeOff className="w-4 h-4" /> Masquer détails
                  </>
                ) : (
                  <>
                    <Eye className="w-4 h-4" /> Afficher détails
                  </>
                )}
              </button>
            )}
          </div>

          <AnimatePresence>
            {openSection === "senoee" && (
              <motion.div
                key="senoee-section"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden mt-6"
              >

                <motion.div
                  key="Description-Senoee"
                  className="bg-gradient-to-br from-[#10162B] to-[#1A1F3B] 
                    border border-cyan-500/20 rounded-2xl p-6 text-center 
                    transition mb-6 hover:border-cyan-400/70 hover:shadow-[0_0_10px_rgba(0,255,255,0.3)]"
                >
                  <h3 className="text-xl font-semibold text-cyan-300 mb-2">Description</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Développement d’<b>API REST (Python Django)</b>.<br />
                    Travail en <b>équipe agile (SCRUM)</b> avec <b>revues de code</b> et{" "}
                    <b>sprints hebdomadaires</b>.
                  </p>
                </motion.div>


                <h4 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                  Ce que j'ai appris
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {senoeeSkills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      className="bg-gradient-to-br from-[#10162B] to-[#1A1F3B]
                        border border-cyan-500/20 rounded-2xl p-6 text-center
                        h-full flex flex-col justify-center
                        transition-colors duration-300 hover:border-cyan-400/70"
                    >
                      <h3 className="text-xl font-semibold text-cyan-300 mb-2">{skill.name}</h3>
                      <AnimatePresence>
                        {showDetails.senoee && (
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
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>


        <div>
          <div
            className="flex items-center justify-between cursor-pointer select-none"
            onClick={() => toggleSection("auto")}
          >
            <div className="flex items-center gap-3">
              {openSection === "auto" ? (
                <ChevronDown className="text-cyan-400 w-8 h-8 transition-transform" />
              ) : (
                <ChevronRight className="text-cyan-400 w-8 h-8 transition-transform" />
              )}
              <h3 className="text-3xl py-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Auto-Entreprise (Mars 2024 - Juin 2024)
              </h3>
            </div>

            {openSection === "auto" && (
              <button
                className="flex items-center gap-2 px-3 py-1 text-sm text-cyan-300 border border-cyan-400/30 rounded-xl hover:bg-cyan-400/10 transition"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDetails("auto");
                }}
              >
                {showDetails.auto ? (
                  <>
                    <EyeOff className="w-4 h-4" /> Masquer détails
                  </>
                ) : (
                  <>
                    <Eye className="w-4 h-4" /> Afficher détails
                  </>
                )}
              </button>
            )}
          </div>

          <AnimatePresence>
            {openSection === "auto" && (
              <motion.div
                key="auto-section"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden mt-6"
              >

                <motion.div
                  key="Description-auto"
                  className="bg-gradient-to-br from-[#10162B] to-[#1A1F3B] 
                    border border-cyan-500/20 rounded-2xl p-6 text-center 
                    transition mb-6 hover:border-cyan-400/70 hover:shadow-[0_0_10px_rgba(0,255,255,0.3)]"
                >
                  <h3 className="text-xl font-semibold text-cyan-300 mb-2">Description</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Développement d’un <b>projet complet</b> (frontend + backend + base de données)
                    <br />
                    <b>Conteneurisé</b> avec <b>Docker</b>.<br />
                    Organisation et suivi sur <b>Jira</b> avec un workflow inspiré de la{" "}
                    <b>méthode agile</b>.<br />
                    Gestion de projet, relation client, <b>développement web</b>.
                  </p>
                </motion.div>

                <h4 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                  Ce que j'ai appris
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {autoSkills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      className="bg-gradient-to-br from-[#10162B] to-[#1A1F3B]
                        border border-cyan-500/20 rounded-2xl p-6 text-center
                        h-full flex flex-col justify-center
                        transition-colors duration-300 hover:border-cyan-400/70"
                    >
                      <h3 className="text-xl font-semibold text-cyan-300 mb-2">{skill.name}</h3>
                      <AnimatePresence>
                        {showDetails.auto && (
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
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
