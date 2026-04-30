export const resume = {
  header: {
    tag: "Career Timeline",
    title: "Professional Resume",
    description:
      "Senior Full Stack Developer specializing in Laravel ecosystem, architecting scalable business systems with a focus on security and performance.",
    cta: {
      label: "Download CV",
      email: "winmyatphy05@gmail.com",
    },
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
          "Architected and maintained Laravel-based systems using strict MVC and Service-Repository patterns for scalability and maintainability.",
          "Designed and secured RESTful APIs with advanced authentication, RBAC, and granular authorization via Policies and Middleware.",
          "Optimized MySQL schemas and query performance to ensure data integrity and high-throughput application efficiency.",
          "Streamlined development and deployment workflows through Docker-based containerization and CI/CD pipelines.",
        ],
      },
      {
        type: "project",
        period: "Project Highlight",
        title: "Training Management System (TMS)",
        tech: "Laravel • Vue.js • MySQL • Docker",
        points: [
          "Built a full-scale Training Management System covering courses, scheduling, enrollment, attendance, finance, and reporting.",
          "Implemented secure RBAC (Admin, Instructor, Editor, Staff, Student) with Social Login (Google/GitHub), 2FA, and Google reCAPTCHA.",
          "Developed recurring class scheduling with automatic session generation and instructor conflict detection.",
          "Engineered student enrollment, attendance tracking, and instructor workload management modules.",
          "Designed analytics dashboards with exportable reports (PDF/Excel) using jQuery DataTables.",
          "Applied Service-Repository architecture to decouple business logic, ensuring scalability and maintainability.",
        ],
      },
      {
        type: "project",
        period: "Project Highlight",
        title: "POS & Food Order Management System",
        tech: "Enterprise Solutions",
        points: [
          "Developed a multi-role POS system (Super Admin, Admin, User) with structured access control.",
          "Implemented real-time order status tracking for efficient operational visibility.",
          "Built daily sales reporting with analytics dashboards and export capabilities.",
        ],
      },
    ],
  },

  education: {
    title: "Education",
    items: [
      {
        period: "2017 — 2024",
        degree: "B.C.Sc (Computer Science)",
        school: "University of Computer Studies, Hinthada",
      },
    ],
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
        "Git/GitHub",
      ],
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
        "Figma",
      ],
    },
  },
};
