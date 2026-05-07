export function useScroll() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

      // smooth scroll
    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

     // update URL hash
    history.pushState(null, '', `#${id}`);


    // accessibility
    el.setAttribute("tabindex", "-1");
    el.focus({ preventScroll: true });
  };

  return { scrollTo };
}