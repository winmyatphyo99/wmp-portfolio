<script setup>
import { ref, watch, onMounted, onUnmounted } from "vue";
import { headerData } from "../../data/header";

const props = defineProps({
  sections: Array,
  activeSection: String,
});

const emit = defineEmits(["navigate"]);
const isOpen = ref(false);

watch(isOpen, (v) => {
  document.body.classList.toggle("overflow-hidden", v);
});

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
});

const go = (id) => {
  emit("navigate", id);
  isOpen.value = false;
};
</script>

<template>
  <header class="fixed top-0 w-full z-50 bg-[#05070A]/80 backdrop-blur-md border-b border-white/5">

    <div class="container-system h-20 flex items-center justify-between">

      <div class="flex items-center gap-3 cursor-pointer group" @click="go('hero')">
        <div
          class="w-10 h-10 grid place-items-center rounded-xl bg-purple-600 text-white font-bold text-sm shadow-lg shadow-purple-500/20 group-hover:bg-purple-500 transition-colors">
          {{ headerData.brand.initials }}
        </div>

        <div class="leading-tight">
          <p class="text-white font-bold uppercase tracking-tight text-sm">
            {{ headerData.brand.name }}
          </p>
          <p class="text-[10px] text-purple-400 tracking-[0.2em] font-semibold">
            {{ headerData.brand.role }}
          </p>
        </div>
      </div>

      <nav class="hidden sm:flex items-center gap-5 lg:gap-10">
        <button v-for="s in sections" :key="s.id" @click="go(s.id)"
          class="text-[11px] font-bold uppercase tracking-[0.15em] transition-all relative py-2 group"
          :class="activeSection === s.id ? 'text-purple-400' : 'text-slate-400 hover:text-white'">
          {{ s.label }}
          <span v-if="activeSection === s.id"
            class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-purple-400"></span>
        </button>
      </nav>

      <button class="sm:hidden p-2" @click="isOpen = !isOpen">
        <div class="space-y-1.5">
          <span class="block w-6 h-0.5 bg-white transition-all" :class="isOpen ? 'rotate-45 translate-y-2' : ''"></span>

          <span class="block w-6 h-0.5 bg-white transition-all" :class="isOpen ? 'opacity-0' : ''"></span>

          <span class="block w-6 h-0.5 bg-white transition-all"
            :class="isOpen ? '-rotate-45 -translate-y-2' : ''"></span>
        </div>
      </button>

    </div>

    <transition name="fade">
      <div v-if="isOpen"
        class="fixed left-0 right-0 bottom-0 top-20 h-[calc(100vh-5rem)] bg-[#05070A] p-6 sm:hidden z-40 overflow-y-auto overscroll-contain">
        <div class="flex flex-col space-y-8 mt-10 pb-10">
          <button v-for="s in sections" :key="s.id" @click="go(s.id)"
            class="text-2xl font-bold tracking-tight text-left transition-colors"
            :class="activeSection === s.id ? 'text-purple-500' : 'text-white'">
            {{ s.label }}
          </button>
        </div>
      </div>
    </transition>

  </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>