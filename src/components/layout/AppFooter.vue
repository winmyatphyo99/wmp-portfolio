<script setup>
import { footerData } from '../../data/footer';
</script>

<template>
  <footer class="relative overflow-hidden border-t border-default bg-primary pt-16 pb-8">
    
    <!-- glow -->
    <div class="absolute inset-0 bg-accent-soft blur-[160px] opacity-20 pointer-events-none"></div>

    <div class="container-system relative z-10">
      
      <!-- GRID -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
        
        <!-- LEFT -->
        <div class="lg:col-span-5 space-y-8">
          
          <div class="flex items-center gap-2">
            <div class="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_10px_var(--color-accent)]"></div>
            <span class="text-xs tracking-[0.4em] text-accent uppercase opacity-80">
              {{ footerData.brand.status }}
            </span>
          </div>

          <h2 class="text-4xl text-primary leading-tight">
            {{ footerData.brand.tagline.split(' ')[0] }} <br/>
            <span class="text-muted">
              {{ footerData.brand.tagline.split(' ').slice(1).join(' ') }}
            </span>
          </h2>

          <p class="text-secondary border-l border-default pl-4 max-w-sm">
            {{ footerData.brand.description }}
          </p>
        </div>

        <!-- RIGHT -->
        <div class="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-10">
          
          <!-- NAV -->
          <div class="space-y-6">
            <p class="text-xs tracking-[0.3em] text-muted uppercase">
              01 | Index
            </p>

            <nav class="flex flex-col gap-3">
              <a
                v-for="link in footerData.navigation"
                :key="link.label"
                :href="link.href"
                class="flex items-center gap-3 text-sm text-secondary hover:text-accent transition group"
              >
                <span class="w-4 h-px bg-default group-hover:w-6 group-hover:bg-accent transition-all"></span>
                {{ link.label }}
              </a>
            </nav>
          </div>

          <!-- SOCIAL -->
          <div class="space-y-6 md:col-span-2">
            <p class="text-xs tracking-[0.3em] text-muted uppercase">
              02 | Coordinates
            </p>

            <div class="flex flex-wrap gap-2">
              <a
                v-for="social in footerData.social"
                :key="social.name"
                :href="social.href"
                target="_blank"
                class="px-4 py-2 rounded-lg border border-default bg-surface text-xs text-secondary hover:border-accent hover:text-primary transition"
              >
                {{ social.name }}
              </a>
            </div>
          </div>

        </div>
      </div>

      <!-- BOTTOM -->
      <div class="pt-8 border-t border-default flex flex-col md:flex-row justify-between items-end gap-6">
        
        <!-- COPYRIGHT -->
        <div>
          <div class="text-[10px] tracking-[0.2em] text-muted uppercase">
            COPYRIGHT_NOTICE
          </div>

          <div class="text-sm text-secondary">
            {{ footerData.meta.copyright }} — {{ footerData.contact.location }}
          </div>
        </div>

        <!-- AVAILABILITY -->
        <div class="group">
          <div class="text-[10px] text-muted text-right mb-2 tracking-[0.2em] uppercase">
            {{ footerData.contact.availabilityLabel }}
          </div>

          <div class="flex items-center gap-3 px-4 py-2 rounded-full bg-surface border border-default group-hover:border-accent transition">
            
            <span class="relative flex h-1.5 w-1.5">
              <span class="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping"></span>
              <span class="relative inline-flex h-1.5 w-1.5 bg-accent rounded-full"></span>
            </span>

            <span class="text-xs tracking-[0.2em] text-secondary group-hover:text-accent uppercase">
              {{ footerData.contact.availabilityText }}
            </span>
          </div>
        </div>

      </div>
    </div>
  </footer>
</template>