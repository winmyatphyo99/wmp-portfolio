import GitHubIcon from "@/components/icons/GitHubIcon.vue";
import LinkedInIcon from "@/components/icons/LinkedInIcon.vue";

export const hero = {
 status: {
    label: "Hi, I'm Win Myat Phyo",
    color: "emerald"
  },
  title: {
    line1: "I build scalable systems that solve",
    highlight: "real business problems."
  },

 description: {
    text: "Full Stack Developer with 2+ years of experience in designing and building secure, high-performance web applications using Laravel, ASP.NET Core, and modern technologies.",
    highlights: ["Laravel", "Vue.js"]
  },

  cta: {
    
    primary: {
      label: "View Experience",
      target: "services"
    },
   socials: [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/wint-myat-phyo",
    icon: LinkedInIcon,
     color: "#0A66C2" // LinkedIn official
  },
  {
    name: "GitHub",
    url: "https://github.com/winmyatphyo99",
    icon: GitHubIcon,
    color: "#ffffff", // default (visible)
    hoverColor: "#181717"// GitHub official
  }
]
  },

  profile: {
    name: "Win Myat Phyo",
    role: "Full Stack Engineer",
    // image: "/assets/wmp.jpg"
    location: {
    city: "Yangon",
    country: "Myanmar",
    region: "Southeast Asia",
    display: "Yangon | Myanmar"
  },
  contact: {
    email: "winmyatphyo5@gmail.com",
    availability: "Open to opportunities"
  },
  }
};