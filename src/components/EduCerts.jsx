import { motion } from "framer-motion";
import { GraduationCap, Globe2, Award } from "lucide-react";

const education = [
  {
    icon: <GraduationCap className="w-7 h-7" />,
    title: "Epitech — Software Engineering",
    period: "2021 – 2026",
    desc: "Five-year program in software engineering, project-based and autonomy-driven.",
  },
  {
    icon: <Globe2 className="w-7 h-7" />,
    title: "Erasmus — Vytautas Magnus University, Lithuania",
    period: "Aug 2024 – Jun 2025",
    desc: "One academic year abroad. International mobility, adaptability and cross-cultural experience.",
  },
];

const certifications = [
  { name: "Accessibility — WCAG / RGAA practices" },
  { name: "Eco-design / Sustainable Software Engineering (Capgemini)" },
  { name: "Google Cloud Certification (in progress)" },
];

export default function EduCerts() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-[#0B1225] py-20">
      <div className="container-section w-full max-w-6xl px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Education & Certifications
        </h2>

        <h3 className="text-2xl font-bold mb-6 text-cyan-200">Education</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {education.map((edu, index) => (
            <motion.div
              key={edu.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-[#10162B] to-[#1A1F3B] border border-cyan-500/20 rounded-2xl p-6 text-left transition-colors duration-300 hover:border-cyan-400/70"
            >
              <div className="flex items-center gap-3 mb-2 text-cyan-300">
                {edu.icon}
                <h4 className="text-xl font-semibold">{edu.title}</h4>
              </div>
              <p className="text-sm text-gray-500 mb-2">{edu.period}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{edu.desc}</p>
            </motion.div>
          ))}
        </div>

        <h3 className="text-2xl font-bold mb-6 text-cyan-200">Certifications</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-[#10162B] to-[#1A1F3B] border border-cyan-500/20 rounded-2xl p-6 text-center flex flex-col items-center justify-center transition-colors duration-300 hover:border-cyan-400/70"
            >
              <Award className="w-7 h-7 text-cyan-300 mb-3" />
              <p className="text-cyan-300 text-sm font-medium leading-relaxed">
                {cert.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
