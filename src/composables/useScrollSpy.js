import { ref, onMounted, onUnmounted } from "vue";

export function useScrollSpy(ids = []) {
  const activeSection = ref(null);
  let observer;

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection.value = entry.target.id;
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0.1,
      }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  });

  onUnmounted(() => observer?.disconnect());

  return { activeSection };
}