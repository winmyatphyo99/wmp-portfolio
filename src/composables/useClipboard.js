import { ref } from "vue";

export function useClipboard() {
  const copied = ref(false);

  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      copied.value = true;
      setTimeout(() => (copied.value = false), 2000);
    } catch (err) {
      console.error("Clipboard failed:", err);
    }
  };

  return { copied, copy };
}