<script setup>
import { useClipboard } from "../../composables/useClipboard";

const { copied, copy } = useClipboard();
const props = defineProps({
  contact: Object
});

const copyEmail = () => {
  copy(props.contact.email.value);
};
</script>

<template>
  <section 
    v-if="contact" 
    id="contact" 
    class="py-32 md:py-48 bg-[#05070A] px-6 relative overflow-hidden border-t border-white/5"
  >
    <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/[0.03] blur-[150px] rounded-full"></div>

    <div class="max-w-6xl mx-auto relative z-10">
      <div class="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">

        <div class="lg:col-span-5 space-y-10 lg:sticky lg:top-32">
          
          <div class="space-y-6">
            <div class="flex items-center gap-3">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <h2 class="text-[10px] font-bold uppercase tracking-[0.6em] text-emerald-500">
                {{ contact.header.status }}
              </h2>
            </div>

            <h3 class="text-4xl md:text-5xl font-bold text-white tracking-tighter leading-[0.9]">
              {{ contact.header.title }}
            </h3>

            <p class="text-slate-500 text-lg font-light leading-relaxed max-w-sm border-l border-white/10 pl-6">
              {{ contact.intro.subtitle }}
            </p>
          </div>

          <div class="hidden lg:block pt-12">
            <p class="font-mono text-[12px] text-slate-700 uppercase tracking-widest">
              Connectivity: Operational | 2026_Architecture
            </p>
          </div>
        </div>

        <div class="lg:col-span-7 space-y-8 md:space-y-12">

          <div
            @click="copyEmail"
            class="group relative p-10 md:p-14 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-emerald-500/50 transition-all duration-700 cursor-pointer overflow-hidden"
          >
            <div class="absolute inset-0 bg-emerald-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div class="relative z-10 space-y-4">
              <p class="font-mono text-[10px] text-emerald-500/60 uppercase tracking-[0.4em]">
                 {{ contact.email.label }}
              </p>

              <h4 class="text-2xl md:text-4xl font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors duration-500 break-all">
                {{ contact.email.value }}
              </h4>
            </div>

            <Transition name="fade">
              <span
                v-if="copied"
                class="absolute top-8 right-8 bg-emerald-500 text-slate-950 text-[10px] font-black px-4 py-2 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.3)]"
              >
                {{ contact.email.copyText }}
              </span>
            </Transition>

            <div class="absolute bottom-10 right-10 opacity-20 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="text-emerald-500">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              v-for="link in contact.links"
              :key="link.name"
              :href="link.url"
              target="_blank"
              class="group p-8 rounded-[2rem] border border-white/5 bg-white/[0.01] flex items-center justify-between hover:bg-white/[0.03] hover:border-emerald-500/30 transition-all duration-500"
            >
              <span class="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-widest group-hover:text-white transition-colors">
                {{ link.name }}
              </span>

              <div 
                class="w-2 h-2 rounded-full transition-all duration-500"
                :class="link.style === 'primary'
                  ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]'
                  : 'bg-slate-700 group-hover:bg-emerald-500/50'"
              ></div>
            </a>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  font-family: 'Inter', -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>