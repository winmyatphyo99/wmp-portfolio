export const projects = [
  {
    title: "Training Management System (TMS)",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
    tags: ["Laravel", "Tailwind CSS", "N-Tier"],
    overview: "An enterprise solution for course distribution and holiday management within corporate structures.",
    features: [
      "Engineered complex backend logic for automated course modules.",
      "Designed a normalized MySQL schema for high-volume datasets.",
      "Integrated Vue.js for real-time dashboard updates.",
    ],
    impact: "Successfully scaled to handle 10,000+ internal users with real-time reporting."
  },
  {
    title: "Food Order Management System",
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c02?auto=format&fit=crop&q=80&w=1200",
    tags: ["Pure PHP MVC", "MySQL", "Invoicing"],
    overview: "High-performance restaurant processing and accounting system designed for local business stability.",
    features: [
      "Built a custom lightweight PHP MVC framework from scratch.",
      "Optimized query performance using advanced database indexing.",
      "Developed automated financial reporting logic for tax compliance.",
    ],
    impact: "Reduced manual invoicing time by 80% for small to mid-sized restaurant chains."
  },
  {
    title: "SupportDesk Agent Portal",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1200",
    tags: ["ASP.NET Core", "SQL Server", "SignalR"],
    overview: "A professional support ticketing system featuring real-time agent collaboration and SLA tracking.",
    features: [
      "Implemented real-time ticket updates using SignalR websockets.",
      "Developed complex role-based access control (RBAC) for agents/admins.",
      "Automated email notifications based on ticket priority shifts.",
    ],
    impact: "Standardized support workflows across three departments, ensuring 99.9% SLA adherence."
  },
  {
    title: "Employee Self-Service Application",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1200",
    tags: ["C#", "ASP.NET Core MVC", "Razor"],
    overview: "A centralized platform for leave applications, payroll viewing, and personal data management.",
    features: [
      "Designed an intuitive approval workflow for multi-level management.",
      "Integrated secure PDF generation for automated payslips.",
      "Built a custom leave balance calculation engine based on tenure.",
    ],
    impact: "Removed paper-based HR processes for a team of 500+ employees."
  },
  {
    title: "Inventory & Warehouse Monitor",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
    tags: ["Laravel", "Redis", "Barcode API"],
    overview: "Real-time stock tracking system with automated re-ordering triggers and barcode scanning.",
    features: [
      "Integrated Redis for high-speed stock availability caching.",
      "Built a mobile-responsive scanner interface for warehouse floor staff.",
      "Implemented low-stock predictive analytics for procurement.",
    ],
    impact: "Reduced stock-out events by 35% within the first six months of deployment."
  },
  {
    title: "Modern Executive Portfolio",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200",
    tags: ["Vue.js 3", "Vite", "Glassmorphism"],
    overview: "A high-performance personal branding site with decoupled architecture and premium UI/UX.",
    features: [
      "Utilized Vite for lightning-fast HMR and optimized build assets.",
      "Implemented advanced CSS glassmorphism and ambient glow effects.",
      "Developed a modular component structure for easy content updates.",
    ],
    impact: "Achieved a 100/100 Lighthouse score for performance and accessibility."
  },
  {
    title: "Secure Auth & API Gateway",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1200",
    tags: ["Laravel Passport", "Docker", "REST"],
    overview: "A centralized authentication server managing OAuth2 flows across multiple microservices.",
    features: [
      "Configured Docker containers for consistent staging and production.",
      "Implemented JWT-based authentication with high-entropy encryption.",
      "Designed a throttled API gateway to prevent brute-force attacks.",
    ],
    impact: "Provided a secure single-sign-on (SSO) experience for four internal applications."
  },
  {
    title: "Real Estate Listing Engine",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200",
    tags: ["ASP.NET Core", "Entity Framework", "Maps API"],
    overview: "Scalable property search engine with geolocation and high-resolution media galleries.",
    features: [
      "Optimized spatial queries for property distance calculations.",
      "Built a custom lazy-loading gallery to handle high-res images efficiently.",
      "Implemented dynamic filtering for property types, prices, and amenities.",
    ],
    impact: "Improved site loading speed by 50% through optimized EF Core query patterns."
  }
];