import { ref, onMounted, onUnmounted } from "vue";

export function useLazySection(options = {}) {
  const targetRef = ref(null);
  const isVisible = ref(false);

  let observer = null;

  onMounted(() => {
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          if (observer) observer.disconnect();
        }
      },
      {
        rootMargin: options.rootMargin || "200px 0px",
        threshold: options.threshold ?? 0,
      }
    );

    if (targetRef.value) {
      observer.observe(targetRef.value);
    }
  });

  onUnmounted(() => {
    if (observer) observer.disconnect();
  });

  return {
    targetRef,
    isVisible,
  };
}