import { motion } from "framer-motion";
import { Server, ShieldCheck, GitBranch, Bot } from "lucide-react";

const impact = [
  {
    icon: <Server className="w-7 h-7" />,
    title: "Enterprise system delivery",
    desc: "Contributed end-to-end to an internal enterprise application for project cost estimation at Capgemini — from system design and data models to backend services and REST APIs in Java / Spring Boot.",
  },
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    title: "Security & identity architecture",
    desc: "Designed and integrated authentication and access control (Keycloak, OAuth2, OpenID Connect, SSO, IAM) and ran a GDPR / privacy audit with concrete compliance improvements.",
  },
  {
    icon: <GitBranch className="w-7 h-7" />,
    title: "Automation & delivery pipelines",
    desc: "Built CI/CD pipelines (GitHub Actions, Docker) and self-trained on Kubernetes, deployment and load balancing to ship cloud-native software reliably.",
  },
  {
    icon: <Bot className="w-7 h-7" />,
    title: "AI-native workflow systems",
    desc: "Building Orqea, an AI-native platform that orchestrates LLM agents to automate software delivery — applying context engineering to cut inference time and improve output quality.",
  },
];

export default function Engineering() {
  return (
    <section
      id="engineering"
      className="min-h-screen flex flex-col justify-center items-center bg-[#0B1225] py-20"
    >
      <div className="container-section w-full max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
        >
          Engineering Mindset
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mb-16"
        >
          I design <b className="text-cyan-300">systems</b>, not just interfaces. My
          focus is <b className="text-cyan-300">backend architecture</b>,{" "}
          <b className="text-cyan-300">automation pipelines</b>, and{" "}
          <b className="text-cyan-300">AI-driven workflows</b> — building software
          that runs reliably in production, from task to deployment.
        </motion.p>

        <h3 className="text-2xl font-bold mb-8 text-cyan-200">Concrete impact</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {impact.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-[#10162B] to-[#1A1F3B] border border-cyan-500/20 rounded-2xl p-6 text-left transition-colors duration-300 hover:border-cyan-400/70 hover:shadow-[0_0_10px_rgba(0,255,255,0.25)]"
            >
              <div className="flex items-center gap-3 mb-3 text-cyan-300">
                {item.icon}
                <h4 className="text-xl font-semibold">{item.title}</h4>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
