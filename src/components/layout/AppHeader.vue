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
    NAVIGATION ROUTING
========================= */
const go = (id) => {
  emit("navigate", id);
  isOpen.value = false;
};
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 border-b border-border/80 bg-primary/80 backdrop-blur-xl">
    <div class="container-system px-6 mx-auto max-w-7xl h-20 flex items-center justify-between">

      <div class="flex items-center gap-3.5 cursor-pointer group" @click="go('hero')">
        <div
          class="w-9 h-9 grid place-items-center rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 text-white font-black text-xs shadow-lg shadow-purple-500/10 transition-transform duration-300 group-hover:scale-[1.03]">
          {{ headerData.brand.initials }}
        </div>

        <div class="leading-tight space-y-0.5">
          <p class="text-primary font-bold uppercase tracking-tight text-xs md:text-sm">
            {{ headerData.brand.name }}
          </p>
          <p class="text-[9px] text-cyan-400 tracking-[0.2em] font-black uppercase font-mono">
            {{ headerData.brand.role }}
          </p>
        </div>
      </div>

      <nav class="hidden sm:flex items-center gap-6 lg:gap-8">
        <button v-for="s in sections" :key="s.id" @click="go(s.id)"
          class="relative py-2.5 text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-300 font-mono" 
          :class="activeSection === s.id ? 'text-purple-400' : 'text-muted hover:text-primary'">
          
          {{ s.label }}

          <span v-if="activeSection === s.id"
            class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span>
        </button>
      </nav>

      <div class="flex items-center gap-3">

        <button @click="toggleTheme"
          class="hidden sm:flex items-center justify-center w-9 h-9 rounded-xl bg-surface/80 border border-border/60 text-muted hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300 shadow-sm">
          
          <span v-if="theme === 'dark'" class="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364-1.414-1.414M7.05 7.05 5.636 5.636m12.728 0-1.414 1.414M7.05 16.95l-1.414 1.414M12 8a4 4 0 100 8 4 4 0 000-8z" />
            </svg>
          </span>

          <span v-else class="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9 9 0 1012 21a9 9 0 008.354-5.646z" />
            </svg>
          </span>
        </button>

        <button class="sm:hidden w-9 h-9 flex items-center justify-center rounded-lg text-primary relative z-[70] bg-secondary/40 border border-border/40" @click="isOpen = !isOpen">
          <div class="space-y-1.5 flex flex-col items-center justify-center">
            <span class="block w-5 h-[1.5px] bg-current transition-all duration-300 origin-center"
              :class="isOpen ? 'rotate-45 translate-y-[5px]' : ''"></span>
            <span class="block w-5 h-[1.5px] bg-current transition-all duration-300"
              :class="isOpen ? 'opacity-0 scale-x-0' : ''"></span>
            <span class="block w-5 h-[1.5px] bg-current transition-all duration-300 origin-center"
              :class="isOpen ? '-rotate-45 -translate-y-[5px]' : ''"></span>
          </div>
        </button>

      </div>
    </div>
  </header>

  <transition name="fade">
    <div v-if="isOpen"
      class="sm:hidden fixed inset-0 top-20 z-[60] bg-primary/95 backdrop-blur-xl border-t border-border/80 overflow-y-auto">
      
      <div class="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

      <div class="container-system relative z-10 px-6 py-8 mx-auto space-y-6">

        <div class="flex flex-col gap-2">
          <button v-for="s in sections" :key="s.id" @click="go(s.id)"
            class="w-full text-left text-sm font-bold tracking-wider px-5 py-3.5 rounded-xl transition-all duration-300 font-mono" 
            :class="activeSection === s.id
                ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                : 'text-primary hover:bg-secondary/50 border border-transparent hover:border-border/40'
              ">
            {{ s.label }}
          </button>
        </div>

        <div class="pt-2 border-t border-border/60">
          <button @click="toggleTheme"
            class="w-full rounded-xl bg-secondary/30 border border-border/60 p-4 flex items-center justify-between transition-colors hover:border-cyan-500/30">
            <span class="text-xs font-semibold text-secondary uppercase tracking-wider font-mono">
              Operational Theme
            </span>
            <span class="text-sm bg-surface p-1.5 rounded-lg border border-border/60 shadow-sm">
              {{ theme === 'dark' ? '☀️ Light' : '🌙 Dark' }}
            </span>
          </button>
        </div>

      </div>
    </div>
  </transition>
</template>

<style scoped>
.bg-grid-pattern {
  background-image: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.03) 1px,
    transparent 1px
  );
  background-size: 24px 24px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>