import { ref } from "vue";

const theme = ref("light");

function applyTheme(mode) {
  const root = document.documentElement;

  if (mode === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }

  theme.value = mode;
  localStorage.setItem("theme", mode);
}

export function useTheme() {
  const initTheme = () => {
    const saved = localStorage.getItem("theme");

    if (saved) {
      applyTheme(saved);
      return;
    }

    const systemDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    applyTheme(systemDark ? "dark" : "light");
  };

  const toggleTheme = () => {
    applyTheme(theme.value === "dark" ? "light" : "dark");
  };

  return {
    theme,
    initTheme,
    toggleTheme,
  };
}