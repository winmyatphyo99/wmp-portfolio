<script setup>
import { ref, watch, onMounted, onUnmounted } from "vue";
import { headerData } from "../../data/header";
import { useTheme } from "@/composables/useTheme";

const { theme, toggleTheme } = useTheme();

defineProps({
  sections: Array,
  activeSection: String,
});

const emit = defineEmits(["navigate"]);

const isOpen = ref(false);

/* =========================
   LOCK BODY SCROLL
========================= */
watch(isOpen, (v) => {
  document.body.style.overflow = v ? "hidden" : "";
});

/* =========================
   AUTO CLOSE ON DESKTOP
========================= */
const handleResize = () => {
  if (window.innerWidth >= 640) {
    isOpen.value = false;
    document.body.style.overflow = "";
  }
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
  document.body.style.overflow = "";
});

/* =========================
   NAVIGATION
========================= */
const go = (id) => {
  emit("navigate", id);
  isOpen.value = false;
};
</script>

<template>

  <!-- =====================================================
       HEADER
  ====================================================== -->
  <header class="fixed top-0 left-0 right-0 z-50 border-b border-border bg-primary/80 backdrop-blur-xl">

    <div class="container-system h-20 flex items-center justify-between">

      <!-- BRAND -->
      <div class="flex items-center gap-3 cursor-pointer group" @click="go('hero')">

        <!-- LOGO -->
        <div
          class="w-10 h-10 grid place-items-center rounded-xl bg-accent text-white font-bold text-sm glow transition-all duration-300 group-hover:scale-105">
          {{ headerData.brand.initials }}
        </div>

        <!-- BRAND TEXT -->
        <div class="leading-tight">

          <p class="text-primary font-bold uppercase tracking-tight text-sm">
            {{ headerData.brand.name }}
          </p>

          <p class="text-[10px] text-accent tracking-[0.2em] font-semibold uppercase">
            {{ headerData.brand.role }}
          </p>

        </div>

      </div>

      <!-- DESKTOP NAV -->
      <nav class="hidden sm:flex items-center gap-5 lg:gap-10">

        <button v-for="s in sections" :key="s.id" @click="go(s.id)"
          class="relative py-2 text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-300" :class="activeSection === s.id
              ? 'text-accent'
              : 'text-muted hover:text-primary'
            ">

          {{ s.label }}

          <!-- ACTIVE DOT -->
          <span v-if="activeSection === s.id"
            class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-accent glow"></span>

        </button>

      </nav>

      <!-- RIGHT ACTIONS -->
      <div class="flex items-center gap-3">

        <!-- THEME TOGGLE -->
        <button @click="toggleTheme"
          class="hidden sm:flex items-center justify-center w-10 h-10 rounded-xl glass border border-border text-primary hover:border-accent transition-all duration-300">

          <span v-if="theme === 'dark'" class="flex items-center justify-center">

            <!-- Sun Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364-1.414-1.414M7.05 7.05 5.636 5.636m12.728 0-1.414 1.414M7.05 16.95l-1.414 1.414M12 8a4 4 0 100 8 4 4 0 000-8z" />
            </svg>

          </span>

          <span v-else class="flex items-center justify-center">

            <!-- Moon Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M20.354 15.354A9 9 0 018.646 3.646 9 9 0 1012 21a9 9 0 008.354-5.646z" />
            </svg>

          </span>

        </button>

        <!-- MOBILE MENU BUTTON -->
        <button class="sm:hidden p-2 rounded-lg text-primary relative z-[70]" @click="isOpen = !isOpen">

          <div class="space-y-1.5">

            <!-- TOP -->
            <span class="block w-6 h-0.5 bg-current transition-all duration-300"
              :class="isOpen ? 'rotate-45 translate-y-2' : ''"></span>

            <!-- MIDDLE -->
            <span class="block w-6 h-0.5 bg-current transition-all duration-300"
              :class="isOpen ? 'opacity-0' : ''"></span>

            <!-- BOTTOM -->
            <span class="block w-6 h-0.5 bg-current transition-all duration-300"
              :class="isOpen ? '-rotate-45 -translate-y-2' : ''"></span>

          </div>

        </button>

      </div>

    </div>

  </header>

  <!-- =====================================================
       MOBILE NAVIGATION
  ====================================================== -->
  <transition name="fade">

    <div v-if="isOpen"
      class="sm:hidden fixed inset-0 top-20 z-[60] bg-primary/95 backdrop-blur-xl border-t border-border overflow-y-auto">

      <div class="container-system py-10">

        <!-- MOBILE LINKS -->
        <div class="flex flex-col space-y-3">

          <button v-for="s in sections" :key="s.id" @click="go(s.id)"
            class="text-left text-xl font-bold tracking-tight px-5 py-4 rounded-2xl transition-all duration-300" :class="activeSection === s.id
                ? 'bg-accent-soft text-accent border border-accent/20'
                : 'text-primary hover:bg-surface'
              ">

            {{ s.label }}

          </button>

        </div>

        <!-- MOBILE THEME -->
        <button @click="toggleTheme"
          class="mt-8 w-full glass border border-border rounded-2xl p-4 flex items-center justify-between transition-all duration-300 hover:border-accent">

          <span class="text-sm font-medium text-primary">
            Theme
          </span>

          <span class="text-xl">
            {{ theme === 'dark' ? '☀️' : '🌙' }}
          </span>

        </button>

      </div>

    </div>

  </transition>

</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>