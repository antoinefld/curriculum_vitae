import { motion } from "framer-motion";

const skills = [
  { name: "Docker", desc: "Conteneurisation & orchestration" },
  { name: "Kubernetes", desc: "Clusters & déploiements" },
  { name: "GitLab CI/CD", desc: "Automatisation & pipelines" },
  { name: "Terraform", desc: "Infrastructure as Code" },
  { name: "AWS", desc: "Cloud & scalabilité" },
  { name: "Linux", desc: "Automatisation & scripting" },
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center items-center bg-[#0B1225]">
      <h2 className="text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
        Compétences
      </h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-10 max-w-6xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
        }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className="bg-gradient-to-br from-[#10162B] to-[#1A1F3B] border border-cyan-500/20 rounded-2xl p-6 text-center hover:border-cyan-400 transition"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">{skill.name}</h3>
            <p className="text-gray-400 text-sm">{skill.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
