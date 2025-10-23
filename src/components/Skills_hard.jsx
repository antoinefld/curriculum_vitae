import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const scrollRef = useRef(null);
  const sectionRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const skillSections = [
    { title: "Compétences Développement", data: skills_dev },
    { title: "Compétences DevOps & Infra", data: skills_devops },
    { title: "Compétences Outils & Environnement", data: skills_utils },
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
      id="skills_hard"
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

      {/* --- Effets de fade latéraux --- */}
      {isVisible && (
        <>
          <div className="pointer-events-none fixed top-0 left-0 w-32 h-full z-40 bg-gradient-to-r from-[#0B1225] to-transparent" />
          <div className="pointer-events-none fixed top-0 right-0 w-32 h-full z-40 bg-gradient-to-l from-[#0B1225] to-transparent" />
        </>
      )}

      {/* --- Contenu scrollable horizontalement --- */}
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
            className="flex-shrink-0 w-screen h-full 
              flex flex-col items-center justify-center 
              snap-center bg-[#0B1225]"
          >
            <h2 className="text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Hard Skills
            </h2>

            <h2 className="text-4xl font-bold py-2 mb-24 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              {section.title}
            </h2>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-10 max-w-6xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.1 },
                },
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
                  {skill.desc && (
                    <p className="text-gray-400 text-sm">{skill.desc}</p>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
