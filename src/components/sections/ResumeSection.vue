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
    class="py-16 md:py-24 bg-[#05070A] px-6 relative border-t border-white/5"
  >
    <!-- subtle glow -->
    <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/[0.02] blur-[120px] rounded-full"></div>

    <div class="max-w-6xl mx-auto relative z-10">
      
      <!-- HEADER -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-10 mb-16 md:mb-20">
        
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <div class="h-px w-8 bg-emerald-500/50"></div>
            <h2 class="text-xs uppercase tracking-widest text-emerald-400 font-medium">
              {{ resume.header.tag }}
            </h2>
          </div>

          <h1 class="text-white text-4xl md:text-5xl font-extrabold leading-tight">
            {{ resume.header.title }}
          </h1>

          <p class="text-slate-400 border-l-2 border-slate-800 pl-4 max-w-xl">
            {{ resume.header.description }}
          </p>
        </div>

        <button
          @click="downloadCV(resume.header.cta.email)"
          class="px-6 py-3 rounded-full bg-white text-black font-medium text-xs uppercase tracking-widest
                 hover:bg-emerald-400 transition-all duration-300 active:scale-95 flex items-center gap-2"
        >
          {{ resume.header.cta.label }}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 3v12m0 0l-4-4m4 4l4-4"/>
          </svg>
        </button>
      </div>

      <!-- CONTENT -->
      <div class="grid lg:grid-cols-12 gap-8 md:gap-12">
        
        <!-- EXPERIENCE -->
        <div class="lg:col-span-8 space-y-12">
          <div 
            v-for="(item, index) in resume.experience.items" 
            :key="index" 
            class="relative pl-8 border-l border-white/5"
          >
            <div class="space-y-4">
              
              <!-- meta -->
              <div class="flex flex-wrap items-center gap-3">
                <span class="text-xs text-slate-500 uppercase tracking-widest">
                  {{ item.period }}
                </span>

                <span 
                  v-if="item.type === 'work'" 
                  class="text-xs text-emerald-400 uppercase tracking-widest"
                >
                  Verified
                </span>
              </div>

              <!-- title -->
              <h4 class="text-white font-medium">
                {{ item.title }}
              </h4>

              <!-- company -->
              <p class="text-slate-400">
                {{ item.company || item.tech }}
              </p>

              <!-- points -->
              <ul class="space-y-2 mt-4">
                <li 
                  v-for="point in item.points" 
                  :key="point" 
                  class="text-slate-500 flex gap-2"
                >
                  <span class="text-emerald-400">•</span>
                  {{ point }}
                </li>
              </ul>

            </div>
          </div>
        </div>

        <!-- SIDEBAR -->
        <div class="lg:col-span-4 space-y-12">
          
          <!-- EDUCATION -->
          <div class="space-y-6">
            <h5 class="text-xs uppercase tracking-widest text-slate-500 flex items-center gap-3">
              Academic <span class="h-px flex-1 bg-white/5"></span>
            </h5>

            <div 
              v-for="edu in resume.education.items" 
              :key="edu.degree"
              class="p-6 rounded-2xl border border-white/5 bg-white/[0.02]"
            >
              <p class="text-white font-medium mb-1">
                {{ edu.degree }}
              </p>
              <p class="text-slate-500 text-sm mb-3">
                {{ edu.school }}
              </p>
              <span class="text-xs text-emerald-400 tracking-widest">
                {{ edu.period }}
              </span>
            </div>
          </div>

          <!-- SKILLS -->
          <div class="space-y-6">
            <h5 class="text-xs uppercase tracking-widest text-slate-500 flex items-center gap-3">
              Core Stack <span class="h-px flex-1 bg-white/5"></span>
            </h5>

            <div class="flex flex-wrap gap-2">
              <span 
                v-for="skill in [...resume.skills.backend.items, ...resume.skills.frontend.items]" 
                :key="skill"
                class="px-4 py-2 rounded-lg bg-white/[0.03] text-sm text-slate-400 border border-white/5"
              >
                {{ skill }}
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>