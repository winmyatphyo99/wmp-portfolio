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
  <section id="services" class="relative pt-28 pb-20 bg-primary border-y border-border overflow-hidden">

    <!-- BACKGROUND -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,_rgba(6,182,212,0.05),transparent_70%)]"></div>

    <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/5 blur-[140px] rounded-full opacity-50">
    </div>

    <div class="absolute inset-0 bg-grid opacity-10"></div>

    <div class="relative container-system z-10 px-6 mx-auto max-w-7xl">

      <!-- HEADER -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-24">

        <div class="w-full">

          <div class="inline-flex items-center gap-3 px-4 py-1.5 rounded-full
            bg-surface border border-border backdrop-blur-md mb-6">

            <span class="flex h-2 w-2 relative">
              <span class="animate-ping absolute h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>

            <span class="text-[11px] uppercase tracking-[0.3em] font-bold text-secondary">
              {{ services.header.tag }}
            </span>

          </div>
          <h2 class="max-w-none text-3xl md:text-4xl lg:text-[2.5rem]
              font-bold text-primary leading-tight tracking-tight">
            {{ services.header.title }}
            <span class="text-gradient">{{ services.header.stitle }}</span>
          </h2>


          <p class="text-xl text-secondary font-light leading-relaxed">
            {{ services.header.subtitle }}
          </p>

        </div>

        <div class="hidden lg:flex items-center px-6 py-3 rounded-2xl
          border border-border bg-surface backdrop-blur-sm">

          <span class="text-[10px] tracking-[0.2em] text-muted uppercase font-black">
            Available for Hire
          </span>

        </div>

      </div>

      <!-- GRID -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <div v-for="(item, i) in services.items" :key="i" @click="openDetails(item)" class="group relative cursor-pointer rounded-3xl p-8
          bg-secondary border border-border
          hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden">

          <!-- glow -->
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition
            bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5">
          </div>

          <div class="relative z-10">

            <div class="flex justify-start items-center mb-12">

              <div class="p-3 rounded-2xl bg-surface border border-border
                group-hover:border-cyan-500/50 transition-colors">

                <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>

              </div>

            </div>

            <h3
              class="text-2xl font-bold text-primary mb-4 group-hover:text-cyan-400 transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
              {{ item.title }}
            </h3>

            <p class="text-secondary font-light leading-relaxed mb-8 line-clamp-3">
              {{ item.desc }}
            </p>

            <div class="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest
              text-muted group-hover:text-cyan-400 transition-all">

              <span>View Specifications</span>

              <svg class="w-4 h-4 transform group-hover:translate-x-2 transition-transform" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">

                <path d="M17 8l4 4m0 0l-4 4m4-4H3" stroke-width="2" />

              </svg>

            </div>

          </div>
        </div>

      </div>

    </div>

    <!-- DRAWER -->
    <Transition name="panel">
      <div v-if="activeService" class="fixed inset-0 z-[100] flex justify-end">

        <div @click="closeDetails" class="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

        <div class="relative w-full max-w-xl h-full
          bg-primary border-l border-border shadow-2xl overflow-y-auto">

          <!-- HEADER -->
          <div class="sticky top-0 z-20 flex items-center justify-between p-8
            bg-primary/80 backdrop-blur-md border-b border-border">

            <span class="text-[10px] font-black tracking-[0.3em] text-cyan-500 uppercase">
              System Specs
            </span>

            <button @click="closeDetails"
              class="p-2 rounded-full hover:bg-surface text-muted hover:text-primary transition">

              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12" stroke-width="1.5" />
              </svg>

            </button>

          </div>

          <!-- CONTENT -->
          <div class="p-8 md:p-12 space-y-12">

            <div class="space-y-4">

              <h2 class="text-2xl font-black text-primary tracking-tighter">
                {{ activeService.title }}
              </h2>

              <p class="text-lg text-secondary font-light leading-relaxed">
                {{ activeService.desc }}
              </p>

            </div>

            <!-- STACK -->
            <div class="space-y-6">

              <h4 class="text-xs font-black text-muted uppercase tracking-[0.2em]">
                Deployment Stack
              </h4>

              <div class="flex flex-wrap gap-2">

                <span v-for="tech in activeService.stack" :key="tech" class="px-4 py-2 text-xs font-bold rounded-xl
                  bg-surface border border-border text-cyan-400/80">

                  {{ tech }}

                </span>

              </div>

            </div>

            <div class="pt-8">

              <a href="#contact" @click="closeDetails" class="group flex items-center justify-center gap-4 w-full py-5
                rounded-2xl bg-primary text-primary font-black text-sm uppercase tracking-widest
                hover:bg-cyan-400 hover:text-black transition-all active:scale-95">

                Start a Project

                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">

                  <path d="M13 7l5 5m0 0l-5 5m5-5H6" stroke-width="2.5" />

                </svg>

              </a>

            </div>

          </div>

        </div>
      </div>
    </Transition>

  </section>
</template>

<style scoped>
.bg-grid-pattern {
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 30px 30px;
}

.text-gradient {
  background: linear-gradient(to right, #22d3ee, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.panel-enter-active,
.panel-leave-active {
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.panel-enter-from,
.panel-leave-to {
  transform: translateX(100%);
}

.panel-enter-from .backdrop-blur-sm {
  opacity: 0;
}
</style>