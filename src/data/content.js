export const content = {
  hero: {
    eyebrow: "Software Engineer · AI Systems · Cloud Architecture",
    subheading:
      "Currently working on enterprise software at Capgemini while building Orqea and documenting architecture decisions through System Design Notes.",
    status: "Available for work",
    cta: {
      primary: "View projects",
      tertiary: "Get in touch",
    },
  },

  about: {
    eyebrow: "About",
    body1:
      "This interest led me to work across several domains: AI agents and context engineering, cloud infrastructure and deployment strategies, authentication and security systems, CI/CD automation and platform engineering, and observability and monitoring architectures.",
    body2:
      "Alongside my work at Capgemini, I am building Orqea — an AI-native workflow orchestration platform — and documenting architecture decisions through my System Design Notes repository. Together, these projects allow me to explore both enterprise software engineering and modern AI platform design.",
    highlights: [
      { label: "AI Systems", desc: "Agents, context engineering & orchestration" },
      { label: "Cloud Architecture", desc: "Infrastructure, deployment & observability" },
      { label: "DevOps Automation", desc: "CI/CD, platform engineering & delivery" },
    ],
  },

  expertise: [
    {
      num: "01",
      title: "Software Engineering",
      description:
        "Clean, type-safe architecture and well-designed APIs. Full-stack delivery of maintainable products that scale with the business.",
      tags: ["Java", "Spring Boot", "Angular", "TypeScript", "JavaScript", "REST APIs", "System Design", "Testing"],
    },
    {
      num: "02",
      title: "Cloud Architecture & Platform Engineering",
      description:
        "Infrastructure as code, containerized workloads and CI/CD pipelines with real observability — repeatable environments that deploy themselves.",
      tags: ["Docker", "Kubernetes", "GitHub Actions", "CI/CD", "Google Cloud", "Cloud Run", "Cloud SQL"],
    },
    {
      num: "03",
      title: "Security",
      description:
        "Secure-by-design systems: least-privilege access, secrets management and supply-chain hardening baked into the pipeline, not bolted on.",
      tags: ["Secure by design", "Keycloak", "IAM", "Secrets mgmt"],
    },
    {
      num: "04",
      title: "AI Systems Engineering",
      description:
        "AI agents and context engineering applied to real workflows — orchestrating the manual steps between intent and shipped software.",
      tags: ["AI Agents", "Context Engineering", "RAG Systems", "Workflow Orchestration"],
    },
  ],

  technologies: [
    { category: "Languages", items: ["Java", "TypeScript", "JavaScript", "SQL"] },
    { category: "Frameworks", items: ["Spring Boot", "Angular", "React", "Node.js"] },
    { category: "Cloud & DevOps", items: ["Docker", "Kubernetes", "GitHub Actions", "Google Cloud", "Cloud Run", "Cloud SQL", "CI/CD"] },
    { category: "Security & Quality", items: ["Keycloak", "IAM", "Accessibility (WCAG)", "Eco-design"] },
    { category: "AI & Automation", items: ["AI Agents", "Context Engineering", "RAG", "Workflow Orchestration"] },
  ],

  orqea: {
    eyebrow: "Featured project",
    tagline:
      "An AI-native workflow orchestration platform that turns requests into reviewed, deployable pull requests through context-aware AI execution.",
    description:
      "Orqea orchestrates AI agents inside your real engineering context — repos, pipelines, and integrations — so work flows from request to reviewed pull request without manual handoffs.",
    features: [
      "AI agents that plan & execute work",
      "Context engineering over your codebase",
      "GitHub & GitLab integrations",
      "CI/CD automation end-to-end",
    ],
    status: "● Live beta",
    link: "https://www.orqea.dev",
  },

  experience: [
    {
      period: "2026",
      place: "Lyon, France",
      company: "Capgemini",
      role: "Software Engineering Intern",
      points: [
        "Contributed to the design and implementation of an enterprise project estimation platform.",
        "Worked across system architecture, authentication & security (Keycloak, OAuth2, OIDC), accessibility (WCAG/RGAA), data modelling, and technical documentation.",
        "Delivered within enterprise engineering standards while collaborating across teams on software delivery processes.",
      ],
    },
    {
      period: "2025 — Present",
      place: "Independent project",
      company: "Orqea",
      role: "Creator & Software Engineer",
      points: [
        "Designing and building a platform that automates the software delivery lifecycle with AI agents.",
        "Implemented GitHub / GitLab integrations and end-to-end CI/CD automation.",
        "Owning the full stack — product, cloud infrastructure and delivery — through to live beta.",
      ],
    },
  ],

  certifications: [
    {
      title: "Accessibility",
      description:
        "Building inclusive, standards-compliant interfaces that work for every user.",
      status: "Certified",
      icon: "accessibility",
      tags: ["WCAG", "Inclusive design", "A11y"],
    },
    {
      title: "Eco-design & Sustainability",
      description:
        "Designing software and digital products with sustainability and resource efficiency in mind.",
      status: "Certified",
      icon: "eco",
      tags: ["Eco-design", "Digital sustainability"],
    },
    {
      title: "Cloud Certification",
      description:
        "Pursuing a Google Cloud certification to formalize hands-on infrastructure and delivery work.",
      status: "In progress",
      icon: "cloud",
      tags: ["Google Cloud"],
    },
  ],

  languages: [
    { code: "FR", name: "French", level: "Native · C2", score: 5 },
    { code: "DE", name: "German", level: "Intermediate · B2", score: 3 },
    { code: "EN", name: "English", level: "Professional · B2", score: 3 },
    { code: "RU", name: "Russian", level: "Basics · A1", score: 1 },
    { code: "LT", name: "Lithuanian", level: "Basics · A1", score: 1 },
  ],

  contact: {
    subheading:
      "Have an AI system to design, a cloud architecture to plan, or a delivery pipeline to automate? I'm open to full-time roles and relocation to Switzerland.",
    email: "fillaudeau.antoine@gmail.com",
    links: {
      email: "mailto:fillaudeau.antoine@gmail.com",
      linkedin: "https://www.linkedin.com/in/antoine-fillaudeau-9428a3239/",
      github: "https://github.com/antoinefld",
    },
  },
};
