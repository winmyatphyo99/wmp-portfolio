export const footerData = {
  brand: {
    name: "Win Myat Phyo",
    tagline: "Systems built with intent.",
    description:
      "Crafting digital experiences with a focus on performance, scalability, and pixel-perfect execution."
  },

  labels: {
    navigation: "Navigation Layer",
    social: "External Interfaces",
    system: "System Metadata"
  },

  navigation: [
    { label: "Overview", href: "#hero", icon: "⌁" },
    { label: "Expertise", href: "#services", icon: "⚙" },
    { label: "Work", href: "#projects", icon: "⟁" },
    { label: "Contact", href: "#contact", icon: "✉" },
  ],

  social: [
    { name: "GitHub", href: "https://github.com/winmyatphyo99", icon: "⚡", type: "Code" },
    { name: "LinkedIn", href: "https://linkedin.com/in/wint-myat-phyo", icon: "🔗", type: "Career" },
    { name: "Twitter", href: "#", icon: "𝕏", type: "Social" },
    { name: "Telegram", href: "https://t.me/doublewin9996", icon: "✈", type: "Chat" },
  ],

  system: {
    items: [
      { label: "Location", value: "Handcrafted in Yangon", icon: "📍" },
      { label: "Stack", value: "Laravel / Vue / ASP.NET", icon: "🧠" },
      { label: "Response", value: "24h", icon: "⚡" }
    ]
  },

  contact: {
    availabilityText: "Open for Collaboration",
    status: "system-stable"
  },

  meta: {
    copyright: `© ${new Date().getFullYear()} Win Myat Phyo`,
  },
};