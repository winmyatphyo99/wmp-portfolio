import tmsImg from "@/assets/projects/tms.png";
import tmsWebp from "@/assets/projects/tms.webp";

import foodImg from "@/assets/projects/food-order.png";
import foodWebp from "@/assets/projects/food-order.webp";

export const projects = [
  {
    title: "Training Management System (TMS)",
    image: tmsImg,
    imageWebp: tmsWebp,
    tags: ["Laravel", "Tailwind CSS", "N-Tier"],

    overview:
      "Enterprise system for managing courses, users, and schedules.",

    features: [
      "Automated course and module management",
      "Optimized MySQL database design",
      "Real-time dashboard with Vue.js"
    ],

    impact:
      "Supports 10,000+ users with real-time reporting and stable performance"
  },

  {
    title: "Food Order Management System",
    image: foodImg,
    imageWebp: foodWebp,
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