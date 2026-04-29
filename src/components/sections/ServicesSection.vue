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
  <div id="services" class="bg-[#050608] py-28 relative overflow-hidden border-t border-white/5">
    
    <div class="absolute inset-0 bg-grid opacity-[0.02] pointer-events-none"></div>

    <div class="container-system relative z-10">
      
      <div class="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div class="space-y-4 max-w-2xl">
          <div class="flex items-center gap-3">
            <div class="h-[1px] w-8 bg-[var(--color-accent)]"></div>
            <p class="text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--color-accent)]">
              {{ services.header.tag }}
            </p>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-white tracking-tighter leading-none">
            {{ services.header.title }}
          </h2>
          <p class="text-slate-400 border-l border-white/10 pl-6 text-lg">
            {{ services.header.subtitle }}
          </p>
        </div>
        
        <div class="hidden lg:block px-6 py-3 border border-white/5 bg-white/[0.02] rounded-full">
          <span class="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
            STABLE_BUILD_v3.0
          </span>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 overflow-hidden shadow-2xl">
        <div
          v-for="(item, i) in services.items"
          :key="i"
          @click="openDetails(item)"
          class="bg-[var(--color-card-bg)] p-10 space-y-12 group relative cursor-pointer hover:bg-[#0d1017] transition-all duration-500"
        >
          <div class="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white/5 group-hover:border-[var(--color-accent)] transition-all duration-500"></div>
          
          <div class="flex justify-between items-start">
            <span class="text-[11px] font-mono text-slate-600 font-bold group-hover:text-[var(--color-accent)] transition-colors">
              // SEC_{{ i + 1 }}
            </span>
            <div class="w-2 h-[2px] bg-white/20 group-hover:bg-[var(--color-accent)] transition-all"></div>
          </div>

          <div class="space-y-4">
            <h3 class="text-xl font-bold text-white leading-tight group-hover:text-white transition-colors">
              {{ item.title }}
            </h3>
            <p class="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300">
              {{ item.desc }}
            </p>
          </div>

          <div class="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-[var(--color-accent)] transition-all">
            <span>Technical Documentation</span>
            <svg class="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-width="3" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <Transition name="slide-fade">
      <div v-if="activeService" class="fixed inset-0 z-[100] flex justify-end">
        <div @click="closeDetails" class="absolute inset-0 bg-black/95 backdrop-blur-sm transition-opacity"></div>

        <div class="relative w-full max-w-xl bg-[#080a0f] h-full shadow-2xl border-l border-white/10 p-8 md:p-16 overflow-y-auto">
          
          <button @click="closeDetails" class="absolute top-8 right-8 text-slate-500 hover:text-white transition-colors">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" stroke-width="1.5"/></svg>
          </button>

          <div class="space-y-12">
            <div class="space-y-4">
              <span class="text-[10px] font-mono text-[var(--color-accent)] uppercase tracking-[0.4em] font-bold">Architecture_Core</span>
              <h3 class="text-4xl font-bold text-white tracking-tight leading-tight">{{ activeService.title }}</h3>
            </div>

            <div class="space-y-10">
              <p class="text-slate-400 text-lg leading-relaxed">
                {{ activeService.desc }}
              </p>
              
              <div v-if="activeService.patterns" class="space-y-4">
                <h4 class="text-[10px] font-black text-white uppercase tracking-widest opacity-40">System Patterns</h4>
                <div class="grid grid-cols-1 gap-2">
                  <div v-for="tag in activeService.patterns" :key="tag"
                    class="group/item flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 hover:border-[var(--color-accent)]/30 transition-all"
                  >
                    <span class="text-xs text-slate-300 font-mono italic">{{ tag }}</span>
                    <div class="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] opacity-20 group-hover/item:opacity-100 transition-opacity"></div>
                  </div>
                </div>
              </div>

              <div class="space-y-4">
                <h4 class="text-[10px] font-black text-white uppercase tracking-widest opacity-40">Tech Stack</h4>
                <div class="flex flex-wrap gap-2">
                  <span v-for="tech in activeService.stack" :key="tech"
                    class="px-3 py-1 bg-white/5 border border-white/10 text-slate-300 text-[10px] font-bold rounded-sm uppercase"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>

            <div class="pt-10">
               <a href="#portfolio" @click="closeDetails" class="group flex items-center justify-center gap-4 w-full py-5 bg-[var(--color-accent)] text-black text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white transition-all">
                 Browse Case Studies
                 <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" stroke-width="2.5"/></svg>
               </a>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
#services {
  --color-accent: #10b981;         /* Emerald Green */
  --color-accent-soft: rgba(16, 185, 129, 0.1);
  --color-card-bg: #0a0c10;       /* Dark Carbon */
}

/* Slide Transition */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

/* Custom Scrollbar for Drawer */
.overflow-y-auto::-webkit-scrollbar {
  width: 3px;
}
.overflow-y-auto::-webkit-scrollbar-thumb {
  background: var(--color-accent);
}

.bg-grid {
  background-size: 30px 30px;
  background-image: linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
}
</style>