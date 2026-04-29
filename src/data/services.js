export const services = {
  header: {
    tag: "Technical Philosophy",
    title: "Engineered for Scale & Stability.",
    subtitle: "Prioritizing Clean Architecture and N-Tier separation to build enterprise software that grows with your business complexity."
  },
  items: [
    {
      title: "Clean N-Tier Architecture Design",
      desc: "Implementing strict separation of concerns using Service-Repository patterns, ensuring core business logic remains independent.",
      patterns: ["Onion Architecture", "CQRS", "Unit of Work", "Repository Pattern"],
      stack: ["Laravel", "ASP.NET Core", "Entity Framework"],
      outcome: "Decoupled logic allowing for 90%+ unit test coverage."
    },
    {
      title: "Backend Systems",
      desc: "Architecting secure, high-concurrency APIs with robust authentication, comprehensive logging, and optimized schemas.",
      patterns: ["Microservices", "RESTful API Design", "Event-Driven", "N-Tier"],
      stack: ["PHP 8.3", "C#", "MySQL", "Redis"],
      outcome: "High-performance systems capable of 99.9% uptime."
    },
    {
      title: "Reactive Frontend",
      desc: "Developing high-end Vue.js interfaces with modular components and clean state management for seamless user experiences.",
      patterns: ["Atomic Design", "Modular UI", "Composition API", "State Management"],
      stack: ["Vue.js 3", "Tailwind CSS", "TypeScript"],
      outcome: "Ultra-responsive dashboards with 0ms perceived latency."
    },
    {
      title: "DevOps & Cloud",
      desc: "Containerizing environments with Docker and streamlining deployments through CI/CD pipelines.",
      patterns: ["Infrastructure as Code", "CI/CD Pipelines", "Containerization"],
      stack: ["Docker", "GitHub Actions", "DigitalOcean"],
      outcome: "Automated deployment workflows with zero-downtime."
    },
    {
      title: "Object-Oriented Programming",
      desc: "Applying core OOP paradigms to create modular, extensible, and reusable codebases for complex logic.",
      patterns: ["Encapsulation", "Polymorphism", "Abstraction", "Inheritance"],
      stack: ["C#", "PHP 8+", "Design Patterns"],
      outcome: "Standardized codebase that reduces technical debt by 40%."
    },
    {
      title: "SOLID Design Principles",
      desc: "Strict adherence to SOLID principles to ensure code maintainability and scalability in enterprise systems.",
      patterns: ["Single Responsibility", "Open/Closed", "Liskov Substitution", "Interface Segregation", "Dependency Inversion"],
      stack: ["System Architecture", "Refactoring", "Clean Code"],
      outcome: "Extensible systems that accept new features without regression."
    }
  ]
};