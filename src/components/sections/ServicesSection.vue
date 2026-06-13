<script setup>
import { ref } from "vue";

defineProps({
  services: {
    type: Object,
    required: true,
  },
});

const activeService = ref(null);

const openDetails = (service) => {
  activeService.value = service;
  document.body.style.overflow = "hidden";
};

const closeDetails = () => {
  activeService.value = null;
  document.body.style.overflow = "auto";
};
</script>

<template>
  <section
    id="services"
    class="relative pt-28 pb-20 bg-primary border-y border-border overflow-hidden"
  >
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.04),transparent_60%)]"
    ></div>
    <div
      class="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 blur-[120px] rounded-full opacity-20 animate-pulse"
    ></div>
    <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>

    <div class="relative container-system z-10 px-6 mx-auto max-w-7xl">
      
      <div class="flex flex-col items-center text-center mb-16">
        <div
          class="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-surface border border-border backdrop-blur-md mb-6"
        >
          <span class="flex h-2 w-2 relative">
            <span
              class="animate-ping absolute h-full w-full rounded-full bg-purple-400 opacity-75"
            ></span>
            <span
              class="relative inline-flex rounded-full h-2 w-2 bg-purple-500"
            ></span>
          </span>

          <span
            class="text-[11px] uppercase tracking-[0.3em] font-bold text-secondary"
          >
            {{ services.header.tag }}
          </span>
        </div>
        
        <h2
          class="max-w-xl text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-primary leading-tight tracking-tight mb-4"
        >
          {{ services.header.title }}
          <span class="text-gradient">{{ services.header.stitle }}</span>
        </h2>

        <p class="max-w-2xl text-base text-secondary font-light leading-relaxed">
          {{ services.header.subtitle }}
        </p>
      </div>

      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        <div
          v-for="(item, i) in services.items"
          :key="i"
          @click="openDetails(item)"
          class="group relative cursor-pointer rounded-2xl p-[1px] transition-all duration-500 hover:-translate-y-1.5 bg-border/40 hover:bg-gradient-to-br hover:from-cyan-500/20 hover:to-purple-500/20"
        >
          <div 
            class="relative h-full min-h-[320px] p-7 rounded-2xl bg-surface/90 backdrop-blur-sm flex flex-col justify-between transition-all duration-300"
          >
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-bold text-primary tracking-tight group-hover:text-cyan-400 transition-colors duration-300">
                  {{ item.title }}
                </h3>
                <div class="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]"></div>
              </div>

              <p class="text-xs md:text-sm text-secondary font-light leading-relaxed line-clamp-4">
                {{ item.desc }}
              </p>
            </div>

            <div class="pt-6 space-y-4">
              <div class="flex flex-wrap gap-1.5">
                <span
                  v-for="tech in item.stack.slice(0, 3)"
                  :key="tech"
                  class="px-2.5 py-1 text-[10px] font-semibold rounded-md bg-secondary/60 border border-border/80 text-cyan-400 text-center"
                >
                  {{ tech }}
                </span>
              </div>

              <div
                class="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted group-hover:text-purple-400 transition-colors duration-300"
              >
                <span>Explore Expertise</span>
                <svg
                  class="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <Transition name="panel">
      <div v-if="activeService" class="fixed inset-0 z-[100] flex justify-end">
        <div
          @click="closeDetails"
          class="absolute inset-0 bg-black/70 backdrop-blur-sm"
        ></div>

        <div
          class="relative w-full max-w-lg h-full bg-primary border-l border-border shadow-2xl overflow-y-auto"
        >
          <div
            class="sticky top-0 z-20 flex items-center justify-between p-8 bg-primary/80 backdrop-blur-md border-b border-border"
          >
            <span
              class="text-[10px] font-black tracking-[0.3em] text-cyan-500 uppercase"
            >
              Expertise Details
            </span>

            <button
              @click="closeDetails"
              class="p-2 rounded-full hover:bg-surface text-muted hover:text-primary transition"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6 18L18 6M6 6l12 12" stroke-width="1.5" />
              </svg>
            </button>
          </div>

          <div class="p-8 md:p-10 space-y-8">
            <div class="space-y-4">
              <h2 class="text-2xl font-black text-primary tracking-tight">
                {{ activeService.title }}
              </h2>

              <p class="text-sm text-secondary font-light leading-relaxed">
                {{ activeService.desc }}
              </p>
            </div>

            <div class="space-y-3">
              <h4
                class="text-xs font-black uppercase tracking-[0.25em] text-muted"
              >
                Key Capabilities
              </h4>

              <div class="grid gap-2.5">
                <div
                  v-for="pattern in activeService.patterns"
                  :key="pattern"
                  class="flex items-center gap-3 text-sm text-secondary"
                >
                  <div class="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.6)]"></div>
                  <span>{{ pattern }}</span>
                </div>
              </div>
            </div>

            <div class="space-y-3">
              <h4
                class="text-xs font-black uppercase tracking-[0.25em] text-muted"
              >
                Technology Stack
              </h4>

              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in activeService.stack"
                  :key="tech"
                  class="px-3.5 py-1.5 rounded-xl bg-surface border border-border text-cyan-400 font-semibold text-xs"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <div class="space-y-3">
              <h4
                class="text-xs font-black uppercase tracking-[0.25em] text-muted"
              >
                Expected Outcome
              </h4>

              <div class="p-5 rounded-2xl bg-surface border border-border">
                <p class="text-xs md:text-sm text-secondary font-light leading-relaxed">
                  {{ activeService.outcome }}
                </p>
              </div>
            </div>

            <div class="pt-4">
              <a
                href="#contact"
                @click="closeDetails"
                class="group flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-surface border border-border text-primary font-bold text-xs uppercase tracking-widest hover:bg-cyan-400 hover:text-black hover:border-transparent transition-all active:scale-[0.98]"
              >
                Let's Work Together
                <svg
                  class="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 7l5 5m0 0l-5 5m5-5H6" stroke-width="2" />
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
  background-image: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.03) 1px,
    transparent 1px
  );
  background-size: 24px 24px;
}

.text-gradient {
  background: linear-gradient(to right, #22d3ee, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.panel-enter-active,
.panel-leave-active {
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.panel-enter-from,
.panel-leave-to {
  transform: translateX(100%);
}
</style>