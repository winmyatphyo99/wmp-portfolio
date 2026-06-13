<script setup>
defineProps({
  about: Object
});

const scrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth"
    });
  }
};
</script>

<template>
  <section
    id="about"
    class="relative pt-24 pb-20 overflow-hidden bg-primary border-y border-border"
  >
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.04),transparent_70%)]"></div>
    <div 
      v-motion
      :initial="{ opacity: 0 }"
      :visible="{ opacity: 0.4, transition: { duration: 1200 } }"
      class="absolute top-0 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-600/5 blur-[120px] rounded-full"
    ></div>
    <div class="absolute inset-0 bg-grid opacity-20"></div>

    <div class="container-system relative z-10 px-6 mx-auto max-w-7xl">
      
      <div 
        v-motion
        :initial="{ opacity: 0, y: -20 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } }"
        class="max-w-3xl mx-auto text-center mb-16"
      >
        <span class="text-[10px] tracking-[0.2em] uppercase font-bold text-purple-400">
          {{ about.header.label }}
        </span>
        
        <h2 class="mt-4 text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-primary tracking-tight leading-tight">
          {{ about.header.title.line1 }} <span class="text-gradient">{{ about.header.title.highlight }}</span>
        </h2>
        <p class="mt-7 text-base md:text-lg text-secondary font-normal max-w-2xl mx-auto leading-relaxed">
          {{ about.content.summary }}
        </p>
      </div>

      <div class="max-w-5xl mx-auto space-y-12">

        <div 
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 800, delay: 100, ease: 'easeOut' } }"
          class="relative p-[1px] rounded-[2.5rem] overflow-hidden shadow-2xl"
        >
          <div class="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-transparent to-purple-600/10"></div>

          <div class="relative rounded-[2.4rem] bg-secondary p-8 md:p-10">
            <div class="grid md:grid-cols-3 gap-8 items-stretch">
              
              <div class="space-y-6 md:col-span-2 flex flex-col justify-between">
                <div class="space-y-4">
                  <span class="text-[10px] tracking-[0.2em] uppercase font-bold text-purple-400">
                    {{ about.content.tag }}
                  </span>
                  <h3 class="text-xl md:text-2xl font-bold text-primary leading-snug">
                    {{ about.content.headline }}
                  </h3>
                  <p class="text-secondary leading-relaxed text-base pt-1 font-normal">
                    {{ about.content.description }}
                  </p>
                </div>

                <div class="grid sm:grid-cols-2 gap-3 pt-6">
                  <div
                    v-for="(item, index) in about.highlights"
                    :key="index"
                    v-motion
                    :initial="{ opacity: 0, scale: 0.95 }"
                    :visible="{ opacity: 1, scale: 1, transition: { duration: 400, delay: 200 + (index * 50) } }"
                    class="flex items-center gap-3 p-3 rounded-xl bg-surface border border-border shadow-sm"
                  >
                    <div class="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0"></div>
                    <span class="text-secondary text-sm font-medium">
                      {{ item }}
                    </span>
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-2 md:grid-cols-1 gap-4 w-full h-full lg:pl-6 border-t md:border-t-0 md:border-l border-border/60 pt-6 md:pt-0">
                <div 
                  v-for="(card, index) in about.sidebarCards" 
                  :key="index"
                  v-motion
                  :initial="{ opacity: 0, x: 20 }"
                  :visible="{ opacity: 1, x: 0, transition: { duration: 500, delay: 300 + (index * 50) } }"
                  class="p-4 rounded-2xl bg-surface border border-border shadow-sm flex flex-col justify-center"
                >
                  <p class="text-[10px] font-bold text-muted uppercase tracking-wider">{{ card.label }}</p>
                  <p 
                    class="mt-1 font-bold tracking-tight transition-colors"
                    :class="card.isHighlight ? 'text-2xl font-black text-purple-400' : 'text-sm text-primary font-medium'"
                  >
                    {{ card.value }}
                  </p>
                </div>
              </div>

            </div>

            <div class="flex flex-wrap gap-4 pt-8 border-t border-border mt-8">
              <button
                @click="scrollTo(about.cta.primary.target)"
                class="px-8 py-4 rounded-xl bg-purple-600 text-white font-bold text-sm uppercase tracking-wider hover:bg-purple-500 transition-all shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                {{ about.cta.primary.label }}
              </button>

              <button
                @click="scrollTo(about.cta.secondary.target)"
                class="px-8 py-4 rounded-xl border border-border bg-surface text-primary font-bold text-sm uppercase tracking-wider hover:border-purple-500 transition-all hover:bg-secondary/40"
              >
                {{ about.cta.secondary.label }}
              </button>
            </div>

          </div>
        </div>

        <div 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 700, delay: 200 } }"
          class="rounded-[2.5rem] border border-border bg-secondary p-8 md:p-10 shadow-xl"
        >
          <div class="flex items-center gap-2.5 mb-10">
            
            <h4 class="text-[10px] tracking-[0.2em] uppercase font-bold text-muted">
              Professional Experience
            </h4>
          </div>

          <div class="space-y-0">
            <div
              v-for="(exp, i) in about.experience"
              :key="i"
              v-motion
              :initial="{ opacity: 0, x: -15 }"
              :visible="{ opacity: 1, x: 0, transition: { duration: 600, delay: 300 + (i * 100), ease: 'easeOut' } }"
              class="relative pl-8 border-l border-border last:border-transparent pb-10 last:pb-0"
            >
              <div class="absolute left-[-6px] top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-purple-500 z-10"></div>

              <div class="flex flex-wrap items-center gap-3">
                <span class="text-xs font-bold uppercase tracking-widest text-purple-400">
                  {{ exp.startYear }} — {{ exp.endYear }}
                </span>

                <span
                  v-if="exp.endYear === 'Present' || exp.endYear.toLowerCase().includes('present')"
                  class="px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 text-[10px] font-bold uppercase tracking-wide border border-green-500/20"
                >
                  Current
                </span>
              </div>

              <h4 class="mt-2 text-xl font-bold text-primary tracking-tight">
                {{ exp.position }}
              </h4>

              <div class="inline-flex items-center mt-2 px-3 py-1 rounded-md bg-surface border border-border text-xs font-semibold text-muted">
                {{ exp.company }}
              </div>

              <ul class="mt-4 space-y-2.5">
                <li
                  v-for="achievement in exp.achievements"
                  :key="achievement"
                  class="flex items-start gap-2.5 text-sm text-secondary"
                >
                  <span class="text-purple-500/70 select-none mt-0.5">→</span>
                  <span class="font-normal">{{ achievement }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div 
          v-if="about.education" 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 700, delay: 300 } }"
          class="rounded-[2.5rem] border border-border bg-secondary p-8 md:p-10 shadow-xl"
        >
          <div class="flex items-center gap-2.5 mb-6">
            
            <h4 class="text-[10px] tracking-[0.2em] uppercase font-bold text-muted">
              Education
            </h4>
          </div>

          <div class="relative pl-8 border-l border-purple-500/20">
            <div class="absolute left-[-6px] top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-purple-400 z-10"></div>
            
            <span class="text-xs font-bold uppercase tracking-widest text-purple-400 block">
              {{ about.education.timeline }}
            </span>
            
            <h4 class="mt-2 text-xl font-bold text-primary tracking-tight">
              {{ about.education.degree }}
            </h4>
            
            <div class="inline-flex items-center mt-2 px-3 py-1 rounded-md bg-surface border border-border text-xs font-semibold text-muted">
              {{ about.education.institution }}
            </div>
            
            <p class="mt-4 text-sm text-secondary leading-relaxed font-normal">
              {{ about.education.summary }}
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>