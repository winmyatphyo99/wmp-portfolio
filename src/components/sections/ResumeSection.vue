<script setup>
defineProps({
  resume: {
    type: Object,
    required: true
  }
});

const downloadCV = (email) => {
  window.location.href = `mailto:${email}`;
};
</script>

<template>
  <section 
    v-if="resume" 
    id="resume" 
    class="py-24 bg-primary relative overflow-hidden border-t border-white/5"
  >
    <div class="absolute inset-0 bg-grid opacity-20"></div>
    <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-accent-soft blur-[120px] rounded-full opacity-30"></div>

    <div class="container-system relative z-10">
      
      <div class="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-20 fade-up">
        <div class="max-w-2xl space-y-6">
          <div class="inline-flex items-center gap-3 px-3 py-1 rounded-sm bg-accent/10 border border-accent/20">
            <span class="text-[10px] font-black uppercase tracking-[0.3em] text-accent italic">
              {{ resume.header.tag }}
            </span>
          </div>

          <h2 class="text-4xl md:text-5xl font-bold text-primary tracking-tighter leading-[0.9]">
            {{ resume.header.title.split(' ')[0] }}
            <span class="text-accent italic font-light">{{ resume.header.title.split(' ')[1] }}</span>
          </h2>

          <p class="text-lg text-secondary leading-relaxed border-l-2 border-accent/30 pl-6">
            {{ resume.header.description }}
          </p>
        </div>

        <button
          @click="downloadCV(resume.header.cta.email)"
          class="group relative px-8 py-4 bg-white hover:bg-accent transition-all duration-500 overflow-hidden"
        >
          <span class="relative z-10 text-black font-bold text-[10px] uppercase tracking-widest group-hover:text-white transition-colors">
            {{ resume.header.cta.label }}
          </span>
          <div class="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </button>
      </div>

      <div class="grid lg:grid-cols-12 gap-px bg-white/5 border border-white/5">
        
        <div class="lg:col-span-8 bg-primary p-8 md:p-12 space-y-16">
          <h3 class="text-xs font-black uppercase tracking-[0.4em] text-muted mb-12 flex items-center gap-4">
            <span class="w-8 h-px bg-accent"></span> {{ resume.experience.title }}
          </h3>

          <div v-for="(item, index) in resume.experience.items" :key="index" class="relative group">
            <div class="grid md:grid-cols-4 gap-6">
              <div class="md:col-span-1 space-y-1">
                <p class="text-[10px] font-mono text-accent font-bold">{{ item.period }}</p>
                <p v-if="item.type === 'work'" class="text-[9px] uppercase tracking-tighter text-muted group-hover:text-primary transition-colors">
                  [ Verified_Entry ]
                </p>
              </div>

              <div class="md:col-span-3 space-y-4">
                <div>
                  <h4 class="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                    {{ item.title }}
                  </h4>
                  <p class="text-sm font-medium text-secondary opacity-70">
                    {{ item.company || item.tech }}
                  </p>
                </div>

                <ul class="space-y-3">
                  <li v-for="point in item.points" :key="point" 
                      class="text-sm text-secondary flex gap-4 leading-relaxed group-hover:text-primary transition-colors">
                    <span class="text-accent mt-1.5 shrink-0">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M0 5H10" stroke="currentColor" stroke-width="2"/></svg>
                    </span>
                    {{ point }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="h-px w-full bg-white/5 mt-16 group-last:hidden"></div>
          </div>
        </div>

        <div class="lg:col-span-4 bg-secondary/30 backdrop-blur-md p-8 md:p-12 space-y-16">
          
          <div class="space-y-8">
            <h3 class="text-xs font-black uppercase tracking-[0.4em] text-muted flex items-center gap-4">
               {{ resume.skills.backend.title.split(' ')[0] }} <span class="h-px flex-1 bg-white/10"></span>
            </h3>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="skill in [...resume.skills.backend.items, ...resume.skills.frontend.items]" 
                :key="skill"
                class="px-3 py-1.5 text-[10px] font-mono border border-white/5 bg-primary text-secondary hover:border-accent/50 hover:text-accent transition-all cursor-default"
              >
                {{ skill }}
              </span>
            </div>
          </div>

          <div class="space-y-8">
            <h3 class="text-xs font-black uppercase tracking-[0.4em] text-muted flex items-center gap-4">
               {{ resume.education.title }} <span class="h-px flex-1 bg-white/10"></span>
            </h3>
            <div v-for="edu in resume.education.items" :key="edu.degree" class="space-y-2 group">
              <p class="text-sm font-bold text-primary group-hover:text-accent transition-colors leading-tight">
                {{ edu.degree }}
              </p>
              <p class="text-xs text-muted font-medium italic">{{ edu.school }}</p>
              <p class="text-[10px] font-mono text-accent/70">{{ edu.period }}</p>
            </div>
          </div>

          <div class="pt-8 border-t border-white/5">
             <div class="flex items-center gap-3 px-4 py-3 rounded-sm bg-black/40 border border-white/5">
               <span class="relative flex h-2 w-2">
                 <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                 <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
               </span>
               <span class="text-[9px] font-mono text-muted uppercase tracking-widest">Available for Architecture Consulting</span>
             </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Leveraging your global Inter and Plus Jakarta Sans from style.css */
#resume {
  font-family: var(--font-sans);
}
h1, h2, h3, h4 {
  font-family: var(--font-heading);
}
</style>