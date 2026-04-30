<script setup>
import { ref } from 'vue';

defineProps({
  services: {
    type: Object,
    required: true
  }
});

const activeService = ref(null);

const openDetails = (service) => {
  activeService.value = service;
  document.body.style.overflow = 'hidden';
};

const closeDetails = () => {
  activeService.value = null;
  document.body.style.overflow = 'auto';
};
</script>

<template>
  <div id="services" class="relative py-32 bg-[#070A0F] text-white overflow-hidden">

    <!-- SOFT BACKGROUND DEPTH (replaces grid noise) -->
    <div class="absolute inset-0">
      <div class="absolute -top-40 -left-40 w-[600px] h-[600px] bg-emerald-500/10 blur-[140px] rounded-full"></div>
      <div class="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-500/10 blur-[160px] rounded-full"></div>
    </div>

    <div class="relative container-system z-10">

      <!-- HEADER -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-24">

        <div class="max-w-2xl space-y-6">

          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft border border-accent/20">
            <span class="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
            <p class="text-[10px] uppercase tracking-[0.2em] font-bold text-accent italic">
              {{ services.header.tag }}
            </p>
          </div>
          <h2 class="text-4xl md:text-5xl font-extrabold text-white leading-[1.2] tracking-tight">
            {{ services.header.title }}
          </h2>

          <p class="text-base md:text-lg text-white/60 leading-relaxed">
            {{ services.header.subtitle }}
          </p>

        </div>

        <div class="hidden lg:flex items-center px-6 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur">
          <span class="text-xs tracking-widest text-white/50 uppercase">
            Selected Services
          </span>
        </div>

      </div>

      <!-- GRID -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <div
          v-for="(item, i) in services.items"
          :key="i"
          @click="openDetails(item)"
          class="group relative cursor-pointer rounded-2xl p-8 bg-white/[0.02] border border-white/5 hover:border-emerald-400/30 transition-all duration-500 hover:-translate-y-1"
        >

          <!-- subtle glow edge -->
          <div class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-b from-emerald-500/5 to-transparent"></div>

          <!-- index -->
          <div class="flex justify-between items-center mb-10">
            <span class="text-xs tracking-widest text-white/40 group-hover:text-emerald-300 transition">
              0{{ i + 1 }}
            </span>
          </div>

          <!-- content -->
          <div class="space-y-4 relative">
            <h3 class="text-xl font-medium text-white group-hover:text-emerald-100 transition">
              {{ item.title }}
            </h3>

            <p class="text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition">
              {{ item.desc }}
            </p>
          </div>

          <!-- CTA -->
          <div class="mt-10 flex items-center gap-2 text-xs tracking-wide text-white/40 group-hover:text-emerald-300 transition">
            <span>Explore</span>
            <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M5 12h14m0 0l-6-6m6 6l-6 6" stroke-width="2" />
            </svg>
          </div>

        </div>

      </div>

    </div>

    <!-- DRAWER -->
    <Transition name="slide-fade">
      <div v-if="activeService" class="fixed inset-0 z-[100] flex justify-end">

        <!-- overlay -->
        <div @click="closeDetails" class="absolute inset-0 bg-black/70 backdrop-blur-md"></div>

        <!-- panel -->
        <div class="relative w-full max-w-xl h-full bg-[#0B0F16] border-l border-white/10 p-10 md:p-16 overflow-y-auto">

          <button @click="closeDetails"
            class="absolute top-6 right-6 text-white/40 hover:text-white transition">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" stroke-width="1.5"/>
            </svg>
          </button>

          <div class="space-y-10">

            <!-- header -->
            <div class="space-y-3">
              <p class="text-xs tracking-widest text-emerald-300 uppercase">
                Service Overview
              </p>

              <h3 class="text-3xl md:text-4xl font-light leading-tight">
                {{ activeService.title }}
              </h3>
            </div>

            <p class="text-white/60 leading-relaxed">
              {{ activeService.desc }}
            </p>

            <!-- patterns -->
            <div v-if="activeService.patterns" class="space-y-4">

              <h4 class="text-xs tracking-widest text-white/40 uppercase">
                System Patterns
              </h4>

              <div class="space-y-3">
                <div
                  v-for="tag in activeService.patterns"
                  :key="tag"
                  class="flex items-center justify-between px-4 py-3 rounded-lg bg-white/[0.02] border border-white/5 hover:border-emerald-400/20 transition"
                >
                  <span class="text-sm text-white/70">
                    {{ tag }}
                  </span>

                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400/40"></span>
                </div>
              </div>

            </div>

            <!-- tech -->
            <div class="space-y-4">

              <h4 class="text-xs tracking-widest text-white/40 uppercase">
                Tech Stack
              </h4>

              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in activeService.stack"
                  :key="tech"
                  class="px-3 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-white/70"
                >
                  {{ tech }}
                </span>
              </div>

            </div>

            <!-- CTA -->
            <div class="pt-10">
              <a
                href="#portfolio"
                @click="closeDetails"
                class="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-emerald-400 text-black font-medium hover:bg-white transition"
              >
                Browse Case Studies
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" stroke-width="2.5" />
                </svg>
              </a>
            </div>

          </div>

        </div>
      </div>
    </Transition>

  </div>
</template>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>