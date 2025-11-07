import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, Eye, EyeOff } from "lucide-react";
import ReactCountryFlag from "react-country-flag";

const skills = [
  { name: "Autonomie", desc: "Capable de comprendre rapidement un contexte et de trouver des solutions efficaces de manière indépendante." },
  { name: "Curiosité", desc: "J’aime explorer, apprendre et expérimenter de nouveaux outils ou concepts pour mieux comprendre ce que je fais." },
  { name: "Adaptabilité", desc: "Je m’intègre facilement dans de nouveaux environnements, aussi bien techniques que humains." },
  { name: "Travail en équipe", desc: "J’aime collaborer, partager mes connaissances et aider à résoudre les problèmes ensemble." },
  { name: "Communication", desc: "Diplomate et à l’écoute, je sais expliquer clairement la technique et échanger avec bienveillance." },
  { name: "Joie de vivre", desc: "Toujours positif, j’apporte une bonne énergie au sein de l’équipe et contribue à une ambiance saine et motivante." },
];

const skills_lang = [
  { code: "GB", name: "Anglais", desc: "Niveau C1" },
  { code: "DE", name: "Allemand", desc: "Niveau B2" },
  { code: "RU", name: "Russe", desc: "Niveau A1" },
  { code: "LT", name: "Lituanien", desc: "Bases" },
];

export default function SkillsSoft() {
  const [openSection, setOpenSection] = useState("soft");
  const [showDetails, setShowDetails] = useState({
    soft: false,
    lang: false,
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
      id="skills_soft"
      className="min-h-screen flex flex-col justify-center items-center bg-[#0B1225] py-20"
    >
      <div className="container-section w-full max-w-6xl px-6">


        <h2 className="text-5xl font-bold mb-28 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Soft Skills
        </h2>


        <div className="mb-10">
          <div
            className="flex items-center justify-between cursor-pointer select-none"
            onClick={() => toggleSection("soft")}
          >
            <div className="flex items-center gap-3">
              {openSection === "soft" ? (
                <ChevronDown className="text-cyan-400 w-8 h-8 transition-transform" />
              ) : (
                <ChevronRight className="text-cyan-400 w-8 h-8 transition-transform" />
              )}
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Soft Skills
              </h2>
            </div>

            {openSection === "soft" && (
              <button
                className="flex items-center gap-2 px-3 py-1 text-sm text-cyan-300 border border-cyan-400/30 rounded-xl hover:bg-cyan-400/10 transition"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDetails("soft");
                }}
              >
                {showDetails.soft ? (
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
            {openSection === "soft" && (
              <motion.div
                key="soft-section"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden mt-8"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      className="bg-gradient-to-br from-[#10162B] to-[#1A1F3B] border border-cyan-500/20 rounded-2xl p-6 text-center hover:border-cyan-400 transition h-full flex flex-col justify-center"
                    >
                      <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                        {skill.name}
                      </h3>

                      <AnimatePresence>
                        {showDetails.soft && (
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
            onClick={() => toggleSection("lang")}
          >
            <div className="flex items-center gap-3">
              {openSection === "lang" ? (
                <ChevronDown className="text-cyan-400 w-8 h-8 transition-transform" />
              ) : (
                <ChevronRight className="text-cyan-400 w-8 h-8 transition-transform" />
              )}
              <h2 className="text-4xl py-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Langues parlées
              </h2>
            </div>

            {openSection === "lang" && (
              <button
                className="flex items-center gap-2 px-3 py-1 text-sm text-cyan-300 border border-cyan-400/30 rounded-xl hover:bg-cyan-400/10 transition"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDetails("lang");
                }}
              >
                {showDetails.lang ? (
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
            {openSection === "lang" && (
              <motion.div
                key="lang-section"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden mt-8"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {skills_lang.map((lang) => (
                    <motion.div
                      key={lang.name}
                      className="bg-gradient-to-br from-[#10162B] to-[#1A1F3B] 
                        border border-cyan-500/20 rounded-2xl p-6 text-center 
                        hover:border-cyan-400 transition h-full flex flex-col justify-center"
                    >
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <ReactCountryFlag
                          countryCode={lang.code}
                          svg
                          style={{ width: "1.5em", height: "1.5em" }}
                        />
                        <h3 className="text-xl font-semibold text-cyan-300">
                          {lang.name}
                        </h3>
                      </div>

                      <AnimatePresence>
                        {showDetails.lang && (
                          <motion.p
                            key={lang.name + "-desc"}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4 }}
                            className="text-gray-400 text-sm leading-relaxed"
                          >
                            {lang.desc}
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
