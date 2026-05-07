export function useScroll() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const header = document.querySelector("header");
    const offset = header?.offsetHeight ?? 80;

    const top =
      el.getBoundingClientRect().top +
      window.pageYOffset -
      offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });

    // update URL hash
    history.pushState(null, "", `#${id}`);

    // accessibility focus (safe)
    el.setAttribute("tabindex", "-1");
    el.focus({ preventScroll: true });
  };

  return { scrollTo };
}