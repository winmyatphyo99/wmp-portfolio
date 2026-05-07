import { ref, onMounted, onUnmounted, nextTick } from "vue";

export function useScrollSpy({ ids = [], offset = 0, debug = false } = {}) {
  const activeSection = ref(null);
  let observer = null;

  const initObserver = () => {
    if (observer) observer.disconnect();

    observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let current = activeSection.value;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.intersectionRatio > maxRatio) {
              maxRatio = entry.intersectionRatio;
              current = entry.target.id;
            }
          }
        });

        if (current !== activeSection.value) {
          activeSection.value = current;

          if (debug) {
            console.log("Active section:", current);
          }
        }
      },
      {
        rootMargin: `-${offset}px 0px -40% 0px`,
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  };

  onMounted(async () => {
    await nextTick();
    initObserver();
  });

  onUnmounted(() => observer?.disconnect());

  return { activeSection };
}