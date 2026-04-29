export function useScroll() {
  const getOffset = () => {
    const header = document.querySelector("header");
    return header ? header.offsetHeight : 0;
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const offset = getOffset();

    const top =
      el.getBoundingClientRect().top +
      window.pageYOffset -
      offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });

    // accessibility
    el.setAttribute("tabindex", "-1");
    el.focus({ preventScroll: true });
  };

  return { scrollTo };
}