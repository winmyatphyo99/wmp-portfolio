<script setup>
import { footerData } from '../../data/footer';
</script>

<template>
  <footer
    class="relative bg-primary border-t border-border overflow-hidden pt-28 pb-16"
  >

    <!-- Background -->
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.06),transparent_60%)]"
    ></div>

    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.03),transparent_65%)]"
    ></div>

    <div class="container-system relative z-10 space-y-20">

      <!-- HEADER -->
      <div
        class="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto"
      >

        <p
          class="text-lg md:text-2xl text-secondary font-light leading-relaxed italic"
        >
          "{{ footerData.brand.description }}"
        </p>

        <div class="w-20 h-px bg-border opacity-40"></div>

      </div>

      <!-- GRID -->
      <div class="grid md:grid-cols-3 gap-8">

        <!-- NAVIGATION -->
        <div
          class="card glass p-7 hover:border-accent transition-all"
        >

          <p class="text-xs font-black uppercase tracking-[0.25em] text-accent">
            {{ footerData.labels.navigation }}
          </p>

          <div class="space-y-2 mt-5">

            <a
              v-for="link in footerData.navigation"
              :key="link.label"
              :href="link.href"
              class="flex items-center justify-between text-sm text-secondary hover:text-primary transition-all px-3 py-2 rounded-xl hover:bg-surface group"
            >

              <span class="flex items-center gap-3">

                <span class="text-accent opacity-80 group-hover:opacity-100">
                  {{ link.icon }}
                </span>

                <span>
                  {{ link.label }}
                </span>

              </span>

            </a>

          </div>

        </div>

        <!-- SOCIAL -->
        <div
          class="card glass p-7 opacity-90 hover:opacity-100 transition-all"
        >

          <p class="text-xs font-black uppercase tracking-[0.25em] text-secondary">
            {{ footerData.labels.social }}
          </p>

          <div class="mt-5 space-y-2">

            <a
              v-for="social in footerData.social"
              :key="social.name"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="list-item group"
            >

              <span class="flex items-center gap-3">

                <span
                  class="text-accent opacity-80 group-hover:opacity-100 transition"
                >
                  {{ social.icon }}
                </span>

                <span>
                  {{ social.name }}
                </span>

              </span>

              <span class="text-muted text-xs">
                {{ social.type }}
              </span>

            </a>

          </div>

        </div>

        <!-- SYSTEM -->
        <div
          class="card glass p-7 opacity-80 hover:opacity-100 transition-all"
        >

          <p class="text-xs font-black uppercase tracking-[0.25em] text-muted">
            {{ footerData.labels.system }}
          </p>

          <div class="mt-5 space-y-3">

            <div
              v-for="item in footerData.system.items"
              :key="item.label"
              class="list-item group"
            >

              <span class="flex items-center gap-3 text-secondary">

                <span class="text-accent opacity-60">
                  {{ item.icon }}
                </span>

                <span>
                  {{ item.label }}
                </span>

              </span>

              <span class="text-muted text-sm">
                {{ item.value }}
              </span>

            </div>

          </div>

        </div>

      </div>

      <!-- BOTTOM BAR -->
      <div
        class="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-border opacity-80"
      >

        <p
          class="text-[10px] text-muted tracking-[0.3em] uppercase"
        >
          {{ footerData.meta.copyright }}
        </p>

        <!-- STATUS -->
        <div
          class="flex items-center gap-3 px-5 py-2 rounded-full border border-border glass"
        >

          <span class="status-dot animate-pulse"></span>

          <span
            class="text-[10px] text-muted tracking-[0.2em] uppercase"
          >
            {{ footerData.contact.availabilityText }}
          </span>

          <span class="text-[10px] text-accent ml-2">
            ● system stable
          </span>

        </div>

      </div>

    </div>

  </footer>
</template>