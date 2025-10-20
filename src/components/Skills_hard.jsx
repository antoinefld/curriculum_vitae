import { motion } from "framer-motion";

const skills_dev = [
  { name: "Python", desc: "Django" },
  { name: "JavaScript", desc: "Node.js, React (Native)" },
  { name: "C, C++", desc: "Réseau" },
  { name: "Java", desc: "Spring" },
  { name: "Git", desc: "Cloud & scalabilité" },
  { name: "GitHub", desc: "" },
];

const skills_devops = [
  { name: "Docker", desc: "docker-compose" },
  { name: "Kubernetes", desc: "bases" },
  { name: "CI/CD", desc: "GitHub Actions" },
  { name: "Terraform, Ansible", desc: "Infrastructure as code" },
  { name: "Linux", desc: "bash, monitoring" },
];

const skills_utils = [
  { name: "Cloud", desc: "AWS, GCP, Azure" },
  { name: "Observabilité", desc: "Grafana, Prometheus" },
  { name: "CI/CD", desc: "pipelines, automatisation, infra-as-code" },
];

export default function Skills_hard() {
  const skillSections = [
    { title: "Compétences Développement", data: skills_dev },
    { title: "Compétences DevOps & Infra", data: skills_devops },
    { title: "Compétences Outils & Environnement", data: skills_utils },
  ];

  return (
    <section
      id="skills"
      className="
        relative 
        w-screen h-screen 
        flex 
        overflow-x-auto 
        overflow-y-hidden 
        snap-x snap-mandatory 
        scroll-smooth 
        no-scrollbar
      "
    >
      {skillSections.map((section, index) => (
        <div
          key={index}
          className="
            w-screen h-screen 
            flex flex-col items-center justify-center 
            snap-center 
            flex-shrink-0
            bg-[#0B1225]
          "
        >
          <h2 className="text-4xl font-bold mb-24 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
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
                className="bg-gradient-to-br from-[#10162B] to-[#1A1F3B] border border-cyan-500/20 rounded-2xl p-4 text-center hover:border-cyan-400 transition"
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
    </section>
  );
}
