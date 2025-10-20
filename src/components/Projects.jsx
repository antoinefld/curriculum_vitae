const projects = [
  {
    title: "CI/CD Pipeline automatisé",
    description:
      "Mise en place d’un pipeline GitLab pour builder, tester et déployer une application Node.js sur AWS ECS.",
  },
  {
    title: "Monitoring avec Prometheus & Grafana",
    description:
      "Déploiement d’un stack complet de monitoring pour observer la performance et la disponibilité des services.",
  },
  {
    title: "Infrastructure as Code avec Terraform",
    description:
      "Création et déploiement d’une infrastructure scalable sur AWS via Terraform et Ansible.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6">Projets</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
            <p className="text-sm text-gray-600">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
