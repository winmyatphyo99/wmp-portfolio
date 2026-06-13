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
    class="relative pt-28 pb-20 bg-primary border-t border-border overflow-hidden"
  >
    <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.04),transparent_60%)]"
    ></div>

    <div class="container-system relative z-10 px-6 mx-auto max-w-7xl">

      <div class="flex flex-col items-center text-center mb-20">
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
            {{ contact.header.status }}
          </span>
        </div>

        <h2
          class="max-w-xl text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-primary leading-tight tracking-tight mb-4"
        >
          Let’s build something
          <span class="text-gradient">{{ contact.header.highlight }}</span>
        </h2>

        <p class="max-w-2xl text-base text-secondary font-light leading-relaxed">
          {{ contact.intro.subtitle }}
        </p>
      </div>

      <div class="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        <div class="lg:col-span-5 space-y-8">

          <div class="space-y-4">
            <h4
              class="text-[10px] font-black uppercase tracking-[0.25em] text-muted"
            >
              Available Expertise
            </h4>

            <div class="flex flex-wrap gap-2">
              <span
                v-for="cap in contact.capabilities"
                :key="cap.name"
                class="px-3.5 py-1.5 text-xs font-semibold rounded-xl bg-surface border border-border text-secondary flex items-center gap-2"
              >
                <div class="h-1 w-1 rounded-full bg-cyan-400/80 shadow-[0_0_6px_rgba(34,211,238,0.6)]"></div>
                {{ cap.name }}
              </span>
            </div>
          </div>

          <div
            class="rounded-2xl border border-border bg-surface p-5 flex items-center gap-5 shadow-xl shadow-black/5"
          >
            <div
              class="flex-shrink-0 w-10 h-10 rounded-xl border border-cyan-500/20 bg-secondary/30 flex items-center justify-center"
            >
              <div class="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse"></div>
            </div>

            <div class="space-y-0.5">
              <p
                class="text-[9px] font-black uppercase tracking-[0.15em] text-muted"
              >
                Current Status
              </p>
              <p class="text-xs md:text-sm font-medium text-primary">
                {{ contact.status.value }} <span class="text-muted font-light px-1">/</span> {{ contact.status.year }}
              </p>
            </div>
          </div>

        </div>

        <div class="lg:col-span-7">
          <div
            @click="copyEmail"
            class="group relative cursor-pointer rounded-2xl p-[1px] transition-all duration-500 bg-border/40 hover:bg-gradient-to-br hover:from-cyan-500/20 hover:to-purple-500/20 hover:shadow-[0_0_50px_rgba(168,85,247,0.12)]"
          >
            <div 
              class="relative p-6 md:p-8 rounded-2xl bg-surface/90 backdrop-blur-sm space-y-6 transition-all duration-300"
            >
              <div class="flex items-start justify-between gap-4">
                <div class="space-y-1.5">
                  <p
                    class="text-[10px] uppercase tracking-[0.2em] text-cyan-400 font-black"
                  >
                    {{ contact.email.label }}
                  </p>

                  <h3
                    class="text-base md:text-lg font-bold text-primary break-all group-hover:text-cyan-400 transition-colors duration-300 tracking-tight"
                  >
                    {{ contact.email.value }}
                  </h3>
                </div>

                <div class="p-2 rounded-lg bg-secondary border border-border group-hover:border-cyan-500/30 text-muted group-hover:text-cyan-400 transition-colors">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                </div>
              </div>

              <div class="h-5 flex items-center">
                <Transition name="fade" mode="out-in">
                  <p v-if="copied" class="text-xs text-purple-400 font-bold tracking-wide flex items-center gap-1.5">
                    <span class="flex h-1.5 w-1.5 rounded-full bg-purple-400"></span>
                    {{ contact.email.copyText }}
                  </p>
                  <p v-else class="text-xs text-muted font-light transition-colors group-hover:text-secondary">
                    Click anywhere inside this card interface to copy address copy target
                  </p>
                </Transition>
              </div>

              <div class="border-t border-border/60"></div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  v-for="link in contact.links"
                  :key="link.name"
                  :href="link.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  @click.stop
                  class="p-3.5 rounded-xl bg-secondary/40 border border-border hover:border-purple-500/40 flex justify-between items-center transition-all group/link"
                >
                  <span class="text-xs font-semibold text-secondary group-hover/link:text-primary transition-colors">
                    {{ link.name }}
                  </span>

                  <svg 
                    class="w-3 h-3 text-muted/60 group-hover/link:text-purple-400 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
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

.fade-enter-active,
.fade-leave-active {
  transition: all 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(2px);
}
</style>