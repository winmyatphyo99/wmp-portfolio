export const footerData = {
  brand: {
    name: "Win Myat Phyo",
    tagline: "Built with intent",
    description:
      "Focused on delivering high-performance, scalable software solutions."
  },

  labels: {
    navigation: "Navigation Layer",
    social: "External Interfaces",
    system: "System Metadata"
  },

  navigation: [
    { label: "Overview", href: "#hero", icon: "⌁" },
    { label: "Services", href: "#services", icon: "⚙" },
    { label: "Projects", href: "#projects", icon: "⟁" },
    { label: "Contact", href: "#contact", icon: "✉" }
  ],

  social: [
    { name: "GitHub", href: "https://github.com/winmyatphyo99", icon: "⚡", type: "Code" },
    { name: "LinkedIn", href: "https://linkedin.com/in/wint-myat-phyo", icon: "🔗", type: "Career" },
    { name: "Twitter", href: "#", icon: "𝕏", type: "Social" },
    { name: "Telegram", href: "https://t.me/doublewin9996", icon: "✈", type: "Chat" }
  ],

  system: {
    items: [
      { label: "Location", value: "Yangon", icon: "📍" },
      { label: "Stack", value: "Laravel / ASP.NET", icon: "🧠" },
      { label: "Response", value: "Within 24h", icon: "⚡" }
    ]
  },

  contact: {
    availabilityText: "Open for Collaboration",
    status: "Available"
  },

  meta: {
    copyright: `© ${new Date().getFullYear()} Win Myat Phyo`
  }
};