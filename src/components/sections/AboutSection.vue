<script setup>
defineProps({
  about: Object
});

// Define the scrollTo function with a check for offset if needed
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
  <section class="relative pt-28 pb-20 overflow-hidden bg-primary border-y border-border">

    <!-- BACKGROUND EFFECTS -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(168,85,247,0.05),transparent_70%)]"></div>

    <div
      class="absolute top-0 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px]
      bg-purple-600/10 blur-[120px] rounded-full opacity-30 animate-pulse"
    ></div>

    <div class="absolute inset-0 bg-grid opacity-10"></div>

    <div class="container-system relative z-10 px-6 mx-auto max-w-7xl">

      <div class="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        <!-- LEFT -->
        <div class="lg:col-span-5 space-y-12">

          <!-- BADGE -->
          <div
            class="inline-flex items-center gap-3 px-4 py-1.5 rounded-full
            bg-surface border border-border backdrop-blur-md"
          >
            <span class="flex h-2 w-2 relative">
              <span class="animate-ping absolute h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>

            <span class="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-bold text-secondary">
              {{ about.header.label }}
            </span>
          </div>

          <!-- TITLE -->
          <h2 class="max-w-xl text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-primary leading-tight tracking-tight">
             {{ about.header.title.line1 }}
            <span class="text-gradient">{{ about.header.title.highlight }}</span>
          </h2>

          <!-- DESCRIPTION -->
          <p class="text-base md:text-lg text-secondary font-light max-w-md leading-relaxed">
            {{ about.content.summary }}
          </p>

          <!-- PROFILE CARDS -->
          <div class="grid grid-cols-2 gap-4">

            <div
              v-for="(item, i) in about.profile"
              :key="i"
              class="group relative p-5 md:p-6 rounded-2xl
              bg-surface border border-border overflow-hidden transition-all duration-500"
            >
              <div class="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <p class="text-[10px] text-muted uppercase tracking-widest mb-2">
                {{ item.label }}
              </p>

              <p class="text-sm text-primary font-bold group-hover:text-cyan-400 transition-colors">
                {{ item.value }}
              </p>
            </div>

          </div>
        </div>

        <!-- RIGHT -->
        <div class="lg:col-span-7 space-y-8">

          <!-- MAIN CARD -->
          <div class="relative p-[1px] rounded-3xl overflow-hidden group">

            <div
              class="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20"
            ></div>

            <div class="relative p-6 md:p-10 rounded-[23px] bg-secondary space-y-8">

              <div class="flex justify-between items-start">

                <div class="space-y-2">
                  <span class="text-xs font-black text-purple-400 uppercase tracking-widest">
                    {{ about.content.tag }}
                  </span>

                  <h4 class="text-xl md:text-2xl text-primary font-bold leading-tight mt-2">
                    {{ about.content.headline }}
                  </h4>
                </div>

              </div>

              <p class="text-base md:text-lg text-secondary leading-relaxed font-light">
                {{ about.content.description }}
              </p>

              <!-- BUTTONS -->
              <div class="flex flex-wrap gap-4 md:gap-5 pt-4">

                <button
                  @click="scrollTo(about.cta.primary.target)"
                  class="px-6 md:px-8 py-3 md:py-4 bg-primary text-primary
                  border border-border rounded-full font-black text-xs md:text-sm uppercase tracking-wider
                  hover:bg-accent hover:text-white transition-all"
                >
                  {{ about.cta.primary.label }}
                </button>

                <button
                  @click="scrollTo(about.cta.secondary.target)"
                  class="px-6 md:px-8 py-3 md:py-4 border border-border text-primary
                  rounded-full font-bold text-xs md:text-sm uppercase tracking-wider
                  hover:bg-surface transition-all"
                >
                  {{ about.cta.secondary.label }}
                </button>

              </div>

            </div>
          </div>

          <!-- METRICS -->
          <div class="grid grid-cols-2 gap-4 md:gap-6">

            <div
              v-for="(item, i) in about.metrics"
              :key="i"
              class="h-28 md:h-36 rounded-3xl bg-secondary border border-border
              flex flex-col justify-center items-center group hover:-translate-y-2 transition-all"
            >
              <span class="text-2xl md:text-4xl font-black text-primary group-hover:text-cyan-400 transition-colors">
                {{ item.value }}
              </span>

              <span class="text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-muted font-bold mt-2 text-center px-2">
                {{ item.label }}
              </span>
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

.text-gradient {
  background: linear-gradient(to right, #22d3ee, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Ensure smooth scrolling for the whole page if needed */
html {
  scroll-behavior: smooth;
}
</style>