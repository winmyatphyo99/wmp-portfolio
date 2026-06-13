import tmsImg from "@/assets/projects/Training Management.png";
import tmsWebp from "@/assets/projects/Training Management.webp";
import empImg from "@/assets/projects/employee-management.png";
import empWebp from "@/assets/projects/employee-management.webp";
import foodImg from "@/assets/projects/food-order.png";
import foodWebp from "@/assets/projects/food-order.webp";

export const projects = [
  {
    title: "Training Management System (TMS)",
    category: "Enterprise Platform",
    image: tmsImg,
    imageWebp: tmsWebp,
    demoUrl: "https://itvisionsoft.com/",
    githubUrl: "https://itvisionsoft.com/",

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

    tags: ["PHP MVC", "MySQL", "N-Tier Architecture"],

    overview:
      "Restaurant ordering and billing system for small to mid-sized businesses.",

    features: [
      "Custom lightweight PHP MVC framework",
      "Optimized database queries with indexing",
      "Automated invoice and report generation"
    ],

    impact:
      "Reduced manual invoicing time by 80% and improved operational efficiency"
  },
  {
  title: "Employee Management System",
  category: "Enterprise HR Solution",

  image: empImg,
  imageWebp: empWebp,

  demoUrl: "https://github.com/winmyatphyo99/EmployeeManagementApp",
  githubUrl: "https://github.com/winmyatphyo99/EmployeeManagementApp",

  tags: ["ASP.NET Core", "SQL Server", "Clean Architecture"],

  overview:
    "Enterprise HR system for managing employees, payroll, and leave workflows.",

  features: [
    "Employee and department management",
    "Payroll and leave approval workflows",
    "Role-based authentication and authorization"
  ],

  impact:
    "Improved HR efficiency through centralized employee records and automated workflows."
}
];