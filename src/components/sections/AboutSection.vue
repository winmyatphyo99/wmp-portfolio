<script setup>
defineProps({
  about: Object
});
</script>

<template>
  <section id="about" class="relative py-32 overflow-hidden bg-primary border-y border-white/5">
    <div class="absolute inset-0 bg-grid opacity-40"></div>
    
    <div class="absolute -top-24 -right-24 w-96 h-96 bg-accent-soft blur-[120px] rounded-full opacity-50"></div>

    <div class="container-system relative z-10">
      <div class="grid lg:grid-cols-12 gap-16 items-center">
        
        <div class="lg:col-span-5 space-y-8 fade-up">
          <div class="space-y-4">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft border border-accent/20">
              <span class="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
              <span class="text-[10px] uppercase tracking-[0.2em] font-bold text-accent">
                {{ about.header.label }}
              </span>
            </div>

            <h2 class="text-4xl md:text-5xl font-extrabold text-white leading-[1.2] tracking-tight">
              {{ about.header.title.split(' ').slice(0, -1).join(' ') }}
              <span class="text-accent">{{ about.header.title.split(' ').pop() }}</span>
            </h2>
          </div>

          <p class="text-lg text-secondary leading-relaxed">
            {{ about.intro.description }}
          </p>

          <div class="grid grid-cols-1 gap-3 pt-4">
            <div v-for="(item, i) in about.profile" :key="i"
              class="flex justify-between items-center p-4 rounded-lg bg-secondary/50 border border-white/5 hover:border-accent/30 transition-all group"
            >
              <span class="text-muted text-[10px] uppercase font-bold tracking-widest">{{ item.label }}</span>
              <span class="text-primary text-sm font-medium group-hover:text-accent transition-colors">{{ item.value }}</span>
            </div>
          </div>
        </div>

        <div class="lg:col-span-7 space-y-6">
          
          <div class="p-8 rounded-xl bg-secondary border border-white/10 shadow-lg relative overflow-hidden group">
            <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
              <svg class="w-16 h-16 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            
            <div class="relative z-10 space-y-4">
              <span class="text-xs font-bold text-accent uppercase tracking-tighter">{{ about.intro.tag }}</span>
              <h3 class="text-2xl text-primary">{{ about.intro.title }}</h3>
              <div class="h-1 w-12 bg-accent rounded-full"></div>
              <p class="text-secondary max-w-md">Focusing on high-performance architectures and seamless user experiences.</p>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-6">
            <div v-for="(item, i) in about.metrics" :key="i"
              class="p-8 rounded-xl bg-surface border border-white/5 flex flex-col justify-center items-center text-center animate-float"
              :style="{ animationDelay: i * 0.2 + 's' }"
            >
              <p class="text-4xl font-black text-primary mb-1 tracking-tighter">
                {{ item.value }}
              </p>
              <p class="text-[10px] uppercase tracking-[0.2em] text-muted font-bold">
                {{ item.label }}
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>