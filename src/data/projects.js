import tmsImg from "@/assets/projects/Training Management.JPG";
import tmsWebp from "@/assets/projects/Training Management.webp";

import foodImg from "@/assets/projects/food-order.png";
import foodWebp from "@/assets/projects/food-order.webp";

export const projects = [
  {
    title: "Training Management System (TMS)",
    category: "Enterprise Platform",
    image: tmsImg,
    imageWebp: tmsWebp,
    demoUrl: "https://itvisionsoft.com/",
    githubUrl: "https://github.com/ITVHBaseCode/TrainingManagement",

    tags: ["Laravel", "Tailwind CSS", "N-Tier"],

    overview:
      "Enterprise system for managing courses, users, and schedules.",

    features: [
      "Automated course and module management",
      "Optimized MySQL database design",
      "Real-time dashboard with Tailwind CSS"
    ],

    impact:
      "Supports 10,000+ users with real-time reporting and stable performance"
  },

  {
    title: "Food Order Management System",
    category: "Restaurant Solution",
    image: foodImg,
    imageWebp: foodWebp,
    demoUrl: "https://github.com/winmyatphyo99/food-order",
    githubUrl: "https://github.com/winmyatphyo99/food-order",

    tags: ["PHP MVC", "MySQL", "Invoicing"],

    overview:
      "Restaurant ordering and billing system for small to mid-sized businesses.",

    features: [
      "Custom lightweight PHP MVC framework",
      "Optimized database queries with indexing",
      "Automated invoice and report generation"
    ],

    impact:
      "Reduced manual invoicing time by 80% and improved operational efficiency"
  }
];