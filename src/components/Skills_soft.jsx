import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, Eye, EyeOff } from "lucide-react";
import ReactCountryFlag from "react-country-flag";

const skills = [
  { name: "Autonomie", desc: "Capable de comprendre rapidement un contexte et de trouver des solutions efficaces de manière indépendante." },
  { name: "Curiosité", desc: "J'aime explorer, apprendre et expérimenter de nouveaux outils ou concepts pour mieux comprendre ce que je fais." },
  { name: "Adaptabilité", desc: "Je m'intègre facilement dans de nouveaux environnements, aussi bien techniques que humains." },
  { name: "Travail en équipe", desc: "J'aime collaborer, partager mes connaissances et aider à résoudre les problèmes ensemble." },
  { name: "Communication", desc: "Diplomate et à l'écoute, je sais expliquer clairement la technique et échanger avec bienveillance." },
  { name: "Joie de vivre", desc: "Toujours positif, j'apporte une bonne énergie au sein de l'équipe et contribue à une ambiance saine et motivante." },
];

const skills_lang = [
  { code: "GB", name: "Anglais", desc: "Niveau C1" },
  { code: "DE", name: "Allemand", desc: "Niveau B2" },
  { code: "RU", name: "Russe", desc: "Niveau A1" },
  { code: "LT", name: "Lituanien", desc: "Bases" },
];

function AccordionHeader({ label, isOpen, onToggle, showDetailsBtn, detailsVisible, onToggleDetails }) {
  return (
    <div
      className="flex items-center justify-between cursor-pointer select-none py-3"
      onClick={onToggle}
      role="button"
      aria-expanded={isOpen}
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onToggle()}
    >
      <div className="flex items-center gap-3">
        {isOpen ? (
          <ChevronDown className="text-[#d08838] w-5 h-5" aria-hidden="true" />
        ) : (
          <ChevronRight className="text-[#d08838] w-5 h-5" aria-hidden="true" />
        )}
        <span className="text-xl font-bold text-stone-800">{label}</span>
      </div>

      {showDetailsBtn && isOpen && (
        <button
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-600 border border-stone-300 rounded-lg hover:border-[#dcfbfc] hover:text-[#0e7490] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06b6d4]"
          onClick={(e) => { e.stopPropagation(); onToggleDetails(); }}
          aria-pressed={detailsVisible}
        >
          {detailsVisible ? (
            <><EyeOff className="w-3.5 h-3.5" aria-hidden="true" /> Masquer détails</>
          ) : (
            <><Eye className="w-3.5 h-3.5" aria-hidden="true" /> Afficher détails</>
          )}
        </button>
      )}
    </div>
  );
}

export default function SkillsSoft() {
  const [openSection, setOpenSection] = useState("soft");
  const [showDetails, setShowDetails] = useState({ soft: false, lang: false });

  const toggleSection = (section) => setOpenSection((prev) => (prev === section ? null : section));
  const toggleDetails = (section) => setShowDetails((prev) => ({ ...prev, [section]: !prev[section] }));

  return (
    <section
      id="skills_soft"
      aria-label="Soft Skills et langues"
      className="bg-[#cff5f6] py-20 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold text-stone-900 mb-8 pb-3 border-b border-stone-200">
          Soft Skills &amp; Langues
        </h2>

        {/* Soft Skills */}
        <div className="mb-2">
          <AccordionHeader
            label="Soft Skills"
            isOpen={openSection === "soft"}
            onToggle={() => toggleSection("soft")}
            showDetailsBtn
            detailsVisible={showDetails.soft}
            onToggleDetails={() => toggleDetails("soft")}
          />
          <AnimatePresence>
            {openSection === "soft" && (
              <motion.div
                key="soft-section"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2 pb-6">
                  {skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="bg-[#ffffff] border border-stone-200 rounded-xl p-5 hover:border-[#dcfbfc] hover:shadow-sm transition-all"
                    >
                      <h3 className="text-sm font-semibold text-stone-800 mb-1">{skill.name}</h3>
                      <AnimatePresence>
                        {showDetails.soft && (
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
        </div>

        <div className="border-t border-stone-200" />

        {/* Languages */}
        <div className="mt-2">
          <AccordionHeader
            label="Langues parlées"
            isOpen={openSection === "lang"}
            onToggle={() => toggleSection("lang")}
            showDetailsBtn
            detailsVisible={showDetails.lang}
            onToggleDetails={() => toggleDetails("lang")}
          />
          <AnimatePresence>
            {openSection === "lang" && (
              <motion.div
                key="lang-section"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 pb-6">
                  {skills_lang.map((lang) => (
                    <div
                      key={lang.name}
                      className="bg-white border border-stone-200 rounded-xl p-5 flex flex-col items-center hover:border-[#dcfbfc] hover:shadow-sm transition-all"
                    >
                      <ReactCountryFlag
                        countryCode={lang.code}
                        svg
                        aria-label={lang.name}
                        style={{ width: "2em", height: "2em" }}
                        className="mb-2"
                      />
                      <h3 className="text-sm font-semibold text-stone-800">{lang.name}</h3>
                      <AnimatePresence>
                        {showDetails.lang && (
                          <motion.p
                            key={lang.name + "-desc"}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-stone-500 text-xs mt-1 text-center"
                          >
                            {lang.desc}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
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
