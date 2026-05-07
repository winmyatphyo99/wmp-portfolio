export function useScroll() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // accessibility
    el.setAttribute("tabindex", "-1");
    el.focus({ preventScroll: true });
  };

  return { scrollTo };
}