export const resume = {
  header: {
    tag: "Career Timeline",
    title: "Professional Resume",
    description:
      "Senior Full Stack Developer specializing in Laravel ecosystem, architecting scalable business systems with a focus on security and performance.",
    cta: {
      label: "Download CV",
      email: "winmyatphy05@gmail.com"
    }
  },

  experience: {
    title: "Professional Experience",
    items: [
      {
        type: "work",
        period: "2024 — Present",
        title: "Senior Full Stack Developer",
        company: "ITVision Hub",
        points: [
          "Architected enterprise-grade systems using decoupled Service-Repository patterns.",
          "Engineered secure RBAC systems and RESTful APIs with multi-factor authentication (2FA).",
          "Led Docker-based CI/CD workflow containerization."
        ]
      },
      {
        type: "project",
        period: "Project Highlight",
        title: "Training Management System (TMS)",
        tech: "Laravel • Vue.js • MySQL • Docker",
        points: [
          "Built full-scale system covering enrollment, scheduling, attendance, and finance.",
          "Implemented Social Login (Google/GitHub), 2FA, and reCAPTCHA.",
          "Developed automated scheduling with conflict detection logic.",
          "Created exportable PDF/Excel reporting dashboards."
        ]
      },
      {
        type: "project",
        period: "Project Highlight",
        title: "POS & Food Order Management System",
        tech: "Enterprise Solutions",
        points: [
          "Built multi-tenant POS system with real-time order tracking.",
          "Implemented advanced reporting dashboards with export features."
        ]
      }
    ]
  },

  education: {
    title: "Education",
    items: [
      {
        period: "2017 — 2024",
        degree: "B.C.Sc (Computer Science)",
        school: "University of Computer Studies, Hinthada"
      }
    ]
  },

  skills: {
    backend: {
      title: "Backend & Architecture",
      items: [
        "Laravel (PHP)",
        "SOLID Principles",
        "RESTful API Design",
        "MySQL Optimization",
        "Docker",
        "Git/GitHub"
      ]
    },

    frontend: {
      title: "Frontend Stack",
      items: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "JQuery",
        "Vue.js",
        "Tailwind CSS",
        "Bootstrap",
        "Figma"
      ]
    }
  }
};