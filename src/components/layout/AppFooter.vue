<script setup>
import { footerData } from '../../data/footer';
</script>

<template>
  <footer class="relative bg-[#03050A] border-t border-white/5 overflow-hidden pt-28 pb-16">

    <!-- background glow -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.12),transparent_50%)]"></div>
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.08),transparent_55%)]"></div>

    <div class="container-system relative z-10 space-y-20">

      <!-- HEADER -->
      <div class="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">

        <h2 class="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
          {{ footerData.brand.tagline }}
        </h2>

        <p class="text-slate-400 text-sm md:text-base leading-relaxed max-w-xl">
          {{ footerData.brand.description }}
        </p>

        <div class="w-24 h-px bg-white/10"></div>

      </div>

      <!-- GRID -->
      <div class="grid md:grid-cols-3 gap-8">

        <!-- NAV -->
        <div class="panel group/nav">
          <p class="panel-label">Navigation Layer</p>

          <div class="space-y-3 mt-5">
            <a
              v-for="link in footerData.navigation"
              :key="link.label"
              :href="link.href"
              class="flex items-center justify-between text-sm text-slate-400 hover:text-white transition-colors duration-300"
            >
              <span>{{ link.label }}</span>
              <span class="opacity-0 group-hover/nav:opacity-100 transition">→</span>
            </a>
          </div>
        </div>

        <!-- SOCIAL -->
        <div class="panel">
          <p class="panel-label">External Interfaces</p>

          <div class="flex flex-wrap gap-3 mt-5">
            <a
              v-for="social in footerData.social"
              :key="social.name"
              :href="social.href"
              target="_blank"
              class="chip"
            >
              {{ social.name }}
            </a>
          </div>
        </div>

        <!-- META -->
        <div class="panel">
          <p class="panel-label">System Metadata</p>

          <div class="text-sm text-slate-400 space-y-4 mt-5">

            <div class="flex items-center gap-3">
              <span class="text-purple-500/60">📍</span>
              <span>{{ footerData.contact.location }}</span>
            </div>

            <div class="flex items-center gap-3">
              <span class="text-emerald-500/60">🧠</span>
              <span>Backend Systems • Laravel</span>
            </div>

            <div class="flex items-center gap-3">
              <span class="text-blue-500/60">⚡</span>
              <span>Response: 24h</span>
            </div>

          </div>
        </div>

      </div>

      <!-- BOTTOM BAR -->
      <div class="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/5">

        <p class="text-[10px] text-slate-500 tracking-[0.3em] uppercase">
          © {{ footerData.meta.copyright }}
        </p>

        <div class="flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">

          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>

          <span class="text-[10px] text-slate-400 tracking-[0.2em] uppercase">
            {{ footerData.contact.availabilityText }}
          </span>

        </div>

      </div>

    </div>
  </footer>
</template>
<style scoped>
.panel {
  padding: 1.75rem;
  border-radius: 1.25rem;
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.06);
  backdrop-filter: blur(14px);
  transition: all 0.25s ease;
}

.panel:hover {
  border-color: rgba(168,85,247,0.25);
  background: rgba(255,255,255,0.04);
}

.panel-label {
  font-size: 10px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #64748b;
  font-weight: 600;
}

.chip {
  font-size: 11px;
  padding: 7px 12px;
  border-radius: 999px;
  background: rgba(255,255,255,0.03);
  color: #94a3b8;
  border: 1px solid rgba(255,255,255,0.08);
  transition: all 0.25s ease;
}

.chip:hover {
  background: rgba(168,85,247,0.08);
  color: #c4b5fd;
  border-color: rgba(168,85,247,0.3);
}
</style>