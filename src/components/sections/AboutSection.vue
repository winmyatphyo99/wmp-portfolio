<script setup>
defineProps({
  about: Object
});

// Define the scrollTo function
const scrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.warn(`Scroll target #${id} not found.`);
  }
};
</script>

<template>
  <section class="relative pt-28 pb-20 overflow-hidden bg-[#050505] border-y border-white/5">
    <!-- Flash Design Background Elements -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(168,85,247,0.05),transparent_70%)]"></div>
    <div
      class="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full opacity-30 animate-pulse">
    </div>
    <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>

    <div class="container-system relative z-10 px-6 mx-auto max-w-7xl">
      <div class="grid lg:grid-cols-12 gap-16 items-center">

        <!-- Left: Identity & Core Bio -->
        <div class="lg:col-span-5 space-y-12">
          <div class="space-y-6">
            <div
              class="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span class="flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-cyan-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span class="text-[11px] uppercase tracking-[0.3em] font-bold text-white/80">
                {{ about.header.label }}
              </span>
            </div>

            <h2 class="max-w-xl text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-white leading-tight tracking-tight">
              {{ about.header.title }}<br />
              <span class="text-gradient">{{ about.header.highlight }}</span>
            </h2>

            <p class="text-base md:text-lg text-gray-400 font-light max-w-md leading-relaxed">
              {{ about.intro.shortDescription }}
            </p>
          </div>

          <!-- Refined Profile Cards -->
          <div class="grid grid-cols-2 gap-4">
            <div v-for="(item, i) in about.profile" :key="i"
              class="group relative p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 overflow-hidden transition-all duration-500 hover:border-cyan-500/50">
              <div class="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <p class="text-[10px] text-gray-500 uppercase tracking-widest mb-2">{{ item.label }}</p>
              <p class="text-sm text-gray-100 font-bold group-hover:text-cyan-400 transition-colors">{{ item.value }}
              </p>
            </div>
          </div>
        </div>

        <!-- Right: Technical Card & Bouncing Metrics -->
        <div class="lg:col-span-7 space-y-8">

          <!-- Large Journey Card with Hover-Glow Border -->
          <div class="relative p-[1px] rounded-3xl overflow-hidden group">
            <div
              class="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 group-hover:from-cyan-500 group-hover:to-purple-500 transition-all duration-700">
            </div>

            <div class="relative p-10 rounded-[23px] bg-[#0a0a0a] space-y-8">
              <div class="flex justify-between items-start">
                <div class="space-y-2">
                  <span class="text-xs font-black text-purple-400 uppercase tracking-widest">{{ about.intro.tag
                    }}</span>
                  <h4 class="text-2xl text-white font-bold leading-tight mt-2">{{ about.intro.title }}</h4>
                </div>
                <div class="hidden md:block p-3 rounded-full bg-white/5 border border-white/10">
                  <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                      d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>

              <p class="text-base md:text-lg text-gray-400 leading-relaxed font-light">{{ about.intro.detailedDescription }}</p>

              <!-- Updated Buttons with proper scope -->
              <div class="flex flex-wrap gap-5 pt-4">
                <button @click="scrollTo(about.cta.primary.target)"
                  class="px-8 py-4 bg-white text-black rounded-full font-black text-sm uppercase tracking-wider hover:bg-cyan-400 hover:scale-105 active:scale-95 transition-all duration-300">
                  {{ about.cta.primary.label }}
                </button>
                <button @click="scrollTo(about.cta.secondary.target)"
                  class="px-8 py-4 border border-white/10 text-white rounded-full font-bold text-sm uppercase tracking-wider hover:bg-white/5 hover:border-white/20 transition-all">
                  {{ about.cta.secondary.label }}
                </button>
              </div>
            </div>
          </div>

          <!-- High-Performance Metrics -->
          <div class="grid grid-cols-2 gap-6">
            <div v-for="(item, i) in about.metrics" :key="i"
              class="h-36 rounded-3xl bg-[#0d0d0d] border border-white/5 flex flex-col justify-center items-center group hover:-translate-y-2 transition-all duration-500">
              <span class="text-3xl md:text-4xl font-black text-white group-hover:text-cyan-400 transition-colors">{{
                item.value }}</span>
              <span class="text-[9px] uppercase tracking-[0.3em] text-gray-500 font-bold mt-2">{{ item.label }}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-grid-pattern {
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 30px 30px;
}
</style>