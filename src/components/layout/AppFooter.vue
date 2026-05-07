<script setup>
import { footerData } from '../../data/footer';
</script>

<template>
  <footer class="relative bg-primary border-t border-border overflow-hidden pt-28 pb-16">

    <!-- background glow (softened) -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.06),transparent_60%)]"></div>
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.03),transparent_65%)]"></div>

    <div class="container-system relative z-10 space-y-20">

      <!-- HEADER -->
      <div class="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
        <p class="text-xl md:text-2xl text-gray-400 font-light leading-relaxed italic">
          "{{ footerData.brand.description }}"
        </p>

        <div class="w-20 h-px bg-border opacity-40"></div>
      </div>

      <!-- GRID -->
      <div class="grid md:grid-cols-3 gap-8">

        <!-- NAVIGATION (SIMPLIFIED WEIGHT) -->
        <div class="card glass p-7 border border-white/5 hover:border-white/10 transition">

          <p class="panel-label text-accent">
            {{ footerData.labels.navigation }}
          </p>

          <div class="space-y-2 mt-5">

            <a
              v-for="link in footerData.navigation"
              :key="link.label"
              :href="link.href"
              class="flex items-center justify-between text-sm text-secondary hover:text-primary transition px-2 py-1 rounded-md hover:bg-white/5"
            >

              <span class="flex items-center gap-2">
                <span class="text-accent/80">
                  {{ link.icon }}
                </span>
                <span>{{ link.label }}</span>
              </span>

            </a>

          </div>
        </div>

        <!-- SOCIAL -->
        <div class="card glass p-7 opacity-90 hover:opacity-100 transition">

          <p class="panel-label text-secondary">
            {{ footerData.labels.social }}
          </p>

          <div class="mt-5 space-y-2">

            <a
              v-for="social in footerData.social"
              :key="social.name"
              :href="social.href"
              target="_blank"
              class="list-item group"
            >

              <span class="flex items-center gap-2">
                <span class="text-accent/80 group-hover:text-accent transition">
                  {{ social.icon }}
                </span>
                <span>{{ social.name }}</span>
              </span>

              <span class="text-muted text-xs">
                {{ social.type }}
              </span>

            </a>

          </div>
        </div>

        <!-- SYSTEM (LOWEST VISUAL PRIORITY) -->
        <div class="card glass p-7 opacity-80 hover:opacity-100 transition">

          <p class="panel-label text-muted">
            {{ footerData.labels.system }}
          </p>

          <div class="mt-5 space-y-3">

            <div
              v-for="item in footerData.system.items"
              :key="item.label"
              class="list-item group"
            >

              <span class="flex items-center gap-2 text-secondary">
                <span class="text-accent/60">{{ item.icon }}</span>
                <span>{{ item.label }}</span>
              </span>

              <span class="text-muted">
                {{ item.value }}
              </span>

            </div>

          </div>
        </div>

      </div>

      <!-- BOTTOM BAR (UNIFIED SYSTEM STYLE) -->
      <div class="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-border opacity-80">

        <p class="text-[10px] text-muted tracking-[0.3em] uppercase">
          {{ footerData.meta.copyright }}
        </p>

        <div class="flex items-center gap-3 px-5 py-2 rounded-full border border-border bg-surface/40 backdrop-blur-md">

          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-50"></span>
            <span class="relative h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>

          <span class="text-[10px] text-muted tracking-[0.2em] uppercase">
            {{ footerData.contact.availabilityText }}
          </span>

          <span class="text-[10px] text-emerald-400 ml-2">
            ● system stable
          </span>

        </div>

      </div>

    </div>
  </footer>
</template>