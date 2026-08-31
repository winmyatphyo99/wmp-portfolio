export const about = {
  header: {
    label: "PROFESSIONAL APPROACH",
    title: {
      line1: "Building secure, high-performance backends using",
      highlight: "proven design patterns"
    }
  },

  content: {
    tag: "How I Work",
    summary: "I focus on designing scalable, secure, and maintainable software that solves real business problems.",
    headline: "Building reliable applications through clean architecture and practical engineering.",
    description: "Experienced in ASP.NET Core, Laravel, C#, PHP, Vue.js, SQL Server, and Docker. I prioritize clean code, performance, maintainability, and collaboration."
  },

  experience: [
    // {
    //   company: "ITVision Hub",
    //   position: "Backend Developer (ASP.NET Core)",
    //   startYear: "Apr 2026",
    //   endYear: "Present",
    //   achievements: [
    //     "Architecting and building high-performance enterprise web applications using C#, ASP.NET Core, and .NET Framework architectures.",
    //     "Designing highly structured database schemas and processing logic within enterprise SQL Server instances.",
    //     "Developing robust RESTful API structures prioritizing clean architecture principles, strict authentication layers, and secure access bounds.",
    //     "Optimizing data-query flows and integrating vital third-party system components to serve high-availability business environments."
    //   ]
    // },
    {
      company: "ITVision Hub",
      position: "Full-Stack Web Developer (Laravel)",
      startYear: "Jun 2024",
      endYear: "Present",
      achievements: [
        "Engineered full-stack enterprise web systems, successfully delivering a dynamic Training Management System, custom POS environments, and Food Order Management workflows.",
        "Authored modular, maintainable RESTful services utilizing PHP, Laravel frameworks, and relational MySQL database engines.",
        "Integrated component-driven frontend user layers using Vue.js for seamless full-stack state management.",
        "Utilized Docker containers to streamline deployment cycles, verify environmental parity, and optimize system maintenance tracks."
      ]
    },
    // {
    //   company: "Global Earth Agro & Aqua",
    //   position: "Management Trainee (Operations & Technology)",
    //   startYear: "Jan 2023",
    //   endYear: "Dec 2023",
    //   achievements: [
    //     "Engaged in a comprehensive technology and facilities program, evaluating data center operations, network structures, and facility system controls.",
    //     "Analyzed industrial operations data streams across automated manufacturing components, quality checking bays, and multi-tier logistics workflows.",
    //     "Coordinated with cross-functional industrial operation panels to solve hardware-software bottlenecks in large-scale production spaces."
    //   ]
    // }
  ],

  cta: {
    primary: {
      label: "View Projects",
      target: "projects"
    },
    secondary: {
      label: "Contact Me",
      target: "contact"
    }
  },

  /* Unified list structure protects layout grids from asymmetry gaps */
  sidebarCards: [
    {
      label: "Core Stack",
      value: "LARAVEL & PHP",
      isHighlight: false
    },
    {
      label: "Enterprise Systems",
      value: "3+",
      isHighlight: true
    },
    {
      label: "Years Professional",
      value: "2+",
      isHighlight: true
    }
  ],

  highlights: [
    "Service-Repository Pattern",
    "N-Tier & Clean Architecture",
    "SOLID Design Principles",
    "Automated CI/CD Pipelines"
  ],

  /* OPTIONAL: You can append this new object to map your university degree perfectly */
  education: {
    institution: "University of Computer Studies, (Hinthada)",
    degree: "Bachelor of Computer Science (B.C.Sc)",
    timeline: "Dec 2017 – Sep 2024",
    summary: "Built a solid academic foundation covering advanced software engineering methodology, structured database management systems, operational algorithms, and practical web systems architecture."
  }
};