<script setup>
import { footerData } from '../../data/footer';
</script>

<template>
  <footer
    class="relative bg-primary border-t border-border overflow-hidden pt-28 pb-16"
  >
    <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.04),transparent_60%)]"
    ></div>
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(34,211,238,0.02),transparent_65%)]"
    ></div>

    <div class="container-system relative z-10 px-6 mx-auto max-w-7xl space-y-20">

      <div class="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
        <p
          class="text-lg md:text-xl text-secondary font-light leading-relaxed tracking-wide italic"
        >
          "{{ footerData.brand.description }}"
        </p>
        <div class="w-16 h-[1px] bg-border/60"></div>
      </div>

      <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

        <div
          class="group rounded-2xl p-[1px] bg-border/40 hover:bg-gradient-to-br hover:from-cyan-500/20 hover:to-purple-500/20 transition-all duration-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.08)]"
        >
          <div class="h-full rounded-2xl bg-surface/90 backdrop-blur-sm p-6 space-y-5">
            <p class="text-[10px] font-black uppercase tracking-[0.25em] text-cyan-400">
              {{ footerData.labels.navigation }}
            </p>

            <div class="space-y-1">
              <a
                v-for="link in footerData.navigation"
                :key="link.label"
                :href="link.href"
                class="flex items-center justify-between text-xs text-secondary hover:text-primary transition-all px-3 py-2.5 rounded-xl hover:bg-secondary/40 border border-transparent hover:border-border/60 group/link"
              >
                <span class="flex items-center gap-2.5">
                  <span class="text-xs opacity-70 group-hover/link:opacity-100 transition-opacity">
                    {{ link.icon }}
                  </span>
                  <span class="font-medium tracking-wide">
                    {{ link.label }}
                  </span>
                </span>
                
                <svg class="w-3 h-3 text-muted/40 transform group-hover/link:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div
          class="group rounded-2xl p-[1px] bg-border/40 hover:bg-gradient-to-br hover:from-cyan-500/20 hover:to-purple-500/20 transition-all duration-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.08)]"
        >
          <div class="h-full rounded-2xl bg-surface/90 backdrop-blur-sm p-6 space-y-5">
            <p class="text-[10px] font-black uppercase tracking-[0.25em] text-secondary">
              {{ footerData.labels.social }}
            </p>

            <div class="space-y-1">
              <a
                v-for="social in footerData.social"
                :key="social.name"
                :href="social.href"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-between text-xs text-secondary hover:text-primary transition-all px-3 py-2.5 rounded-xl hover:bg-secondary/40 border border-transparent hover:border-border/60 group/link"
              >
                <span class="flex items-center gap-2.5">
                  <span class="text-xs opacity-70 group-hover/link:opacity-100 transition-opacity">
                    {{ social.icon }}
                  </span>
                  <span class="font-medium tracking-wide">
                    {{ social.name }}
                  </span>
                </span>

                <span class="text-[9px] font-mono uppercase tracking-wider text-muted/60 bg-secondary px-2 py-0.5 rounded border border-border/40 group-hover/link:text-purple-400 group-hover/link:border-purple-500/20 transition-colors">
                  {{ social.type }}
                </span>
              </a>
            </div>
          </div>
        </div>

        <div
          class="group rounded-2xl p-[1px] bg-border/40 hover:bg-gradient-to-br hover:from-cyan-500/20 hover:to-purple-500/20 transition-all duration-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.08)]"
        >
          <div class="h-full rounded-2xl bg-surface/90 backdrop-blur-sm p-6 space-y-5">
            <p class="text-[10px] font-black uppercase tracking-[0.25em] text-muted">
              {{ footerData.labels.system }}
            </p>

            <div class="space-y-2">
              <div
                v-for="item in footerData.system.items"
                :key="item.label"
                class="flex items-center justify-between p-3 rounded-xl bg-secondary/30 border border-border/50 text-xs"
              >
                <div class="flex items-center gap-2.5 text-secondary font-light">
                  <span class="text-xs opacity-60">
                    {{ item.icon }}
                  </span>
                  <span>
                    {{ item.label }}
                  </span>
                </div>

                <span class="font-mono text-[11px] font-semibold text-primary tracking-wide">
                  {{ item.value }}
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div
        class="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-border/60"
      >
        <p
          class="text-[9px] text-muted tracking-[0.25em] uppercase font-mono"
        >
          {{ footerData.meta.copyright }}
        </p>

        <div
          class="flex items-center gap-3 px-4 py-2 rounded-full border border-border bg-surface shadow-md"
        >
          <span class="flex h-1.5 w-1.5 relative">
            <span class="animate-ping absolute h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-400"></span>
          </span>

          <span
            class="text-[9px] text-secondary font-bold tracking-[0.15em] uppercase"
          >
            {{ footerData.contact.availabilityText }}
          </span>

          <div class="h-3 w-[1px] bg-border/80 mx-0.5"></div>

          <span class="text-[9px] font-mono uppercase tracking-wider text-cyan-400 font-semibold">
            ● system stable
          </span>
        </div>

      </div>
    </div>
  </footer>
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
</style>