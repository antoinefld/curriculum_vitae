import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const starsarena = [
  { name: "JavaScript", desc: "Node.js, React" },
  { name: "Supabase", desc: "Base de données et authentification" },
  { name: "Docker", desc: "Conteneurisation du projet complet" },
  { name: "DevOps", desc: "CI/CD, gestion des environnements" },
  { name: "GitHub", desc: "Collaboration et gestion de versions" },
];

const pharmaxcess = [
  { name: "React", desc: "Développement du frontend" },
  { name: "Docker", desc: "docker-compose pour front, back et PostgreSQL" },
  { name: "PostgreSQL", desc: "Base de données conteneurisée" },
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
  const scrollRef = useRef(null);
  const sectionRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const skillSections = [
    { title: "StarsArena (2025 - En cours)", data: starsarena
      , description: `
      Développement d’une <b>plateforme</b> sociale de <b>compétitions musicales</b>.<br />
Travail principalement sur le <b>backend (Node.js / Express)</b> et l’intégration <b>frontend (React)</b>.<br />
Gestion de la <b>base de données Supabase</b> et mise en place de la <b>conteneurisation Docker</b>.<br />
Participation à l’<b>automatisation</b> du workflow et à la configuration <b>DevOps</b> du projet` },
    { title: "PharmaXcess (2024 - 2025)", data: pharmaxcess
      , description: `
      Développement d’une <b>application web</b> destinée à la <b>gestion</b> et l’<b>accès simplifié</b><br />
      à des <b>ressources pharmaceutiques</b>.<br />
Responsable de la <b>conteneurisation Docker</b> (frontend + backend + base PostgreSQL).<br />
Contribution majeure sur le <b>frontend React</b> et <b>intégration des APIs</b>.<br />
Collaboration en <b>équipe Agile</b> avec suivi sur <b>Notion</b>.`
     },
    { title: "TaskManagerPlus (2025 - En cours)", data: task_manager_plus
      , description: `
      <b>Outil DevOps</b> permettant de <b>gérer</b> et exécuter <b>automatiquement</b> des <b>tâches</b> à l’aide d’<b>agents IA</b>.<br />
<b>Développement complet</b> du <b>frontend</b> (React), <b>backend</b> (Node.js / Express) et <b>base de données</b> MySQL.<br />
<b>Intégration</b> d’un <b>service IA</b> (<b>Ollama</b> + modèle <b>Llama 3.2</b>) via <b>Docker Compose</b>.<br />
Automatisation de tests et intégration continue via GitHub Actions.`
     },
  ];

  // --- IntersectionObserver pour savoir si la section est visible à l’écran ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 } // visible à 30% minimum
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // --- Scroll par clic sur flèche ---
  const scrollByScreen = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = window.innerWidth;
    el.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  // --- Gestion du drag ---
  const startDragging = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };
  const stopDragging = () => setIsDragging(false);
  const onDrag = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.3;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative w-full h-screen bg-[#0B1225] flex items-center justify-center overflow-hidden"
    >
      {/* Flèches */}
      {isVisible && (
        <>
          <motion.button
            onClick={() => scrollByScreen("left")}
            className="fixed left-6 top-1/2 -translate-y-1/2 z-50 
              p-3 rounded-full bg-[#0B1225]/70 hover:bg-cyan-500/20 
              shadow-lg transition"
            whileHover={{ scale: 1.2 }}
            animate={{ x: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronLeft className="w-8 h-8 text-cyan-400" />
          </motion.button>

          <motion.button
            onClick={() => scrollByScreen("right")}
            className="fixed right-6 top-1/2 -translate-y-1/2 z-50 
              p-3 rounded-full bg-[#0B1225]/70 hover:bg-cyan-500/20 
              shadow-lg transition"
            whileHover={{ scale: 1.2 }}
            animate={{ x: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronRight className="w-8 h-8 text-cyan-400" />
          </motion.button>
        </>
      )}

      {/* Effets */}
      {isVisible && (
        <>
          <div className="pointer-events-none fixed top-0 left-0 w-32 h-full z-40 bg-gradient-to-r from-[#0B1225] to-transparent" />
          <div className="pointer-events-none fixed top-0 right-0 w-32 h-full z-40 bg-gradient-to-l from-[#0B1225] to-transparent" />
        </>
      )}

      {/* Scrolling */}
      <div
        ref={scrollRef}
        onMouseDown={startDragging}
        onMouseLeave={stopDragging}
        onMouseUp={stopDragging}
        onMouseMove={onDrag}
        className={`relative w-full h-full flex 
          overflow-x-auto overflow-y-hidden 
          snap-x snap-mandatory scroll-smooth 
          no-scrollbar select-none 
          ${isDragging ? "cursor-grabbing" : "cursor-grab"}
        `}
      >
        {skillSections.map((section, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-screen h-full flex flex-col items-center justify-center snap-center bg-[#0B1225]"
          >

            <h2 className="text-5xl font-bold mb-20 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Mes projets
            </h2>

            <h2 className="text-4xl font-bold mb-16 py-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              {section.title}
            </h2>

            <div className="w-full flex flex-col items-center px-4">
              {/* Description */}
              <motion.div
                key={"Description"}
                className="w-full max-w-4xl bg-gradient-to-br from-[#10162B] to-[#1A1F3B]
                  border border-cyan-500/20 rounded-2xl p-6 text-left 
                  hover:border-cyan-400 transition mb-8 shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-semibold text-cyan-300 mb-3">
                  Description
                </h3>
                <p
                  className="text-gray-400 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: section.description,
                  }}
                />
              </motion.div>

              {/* Grille des compétences */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-4xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
                }}
              >
                {section.data.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="bg-gradient-to-br from-[#10162B] to-[#1A1F3B] 
                      border border-cyan-500/20 rounded-2xl p-4 text-center 
                      hover:border-cyan-400 transition shadow-md"
                    whileHover={{ scale: 1.05 }}
                  >
                    <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                      {skill.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{skill.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
