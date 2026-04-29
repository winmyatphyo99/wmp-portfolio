<script setup>
defineProps({
  services: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <section 
    id="services" 
    class="py-20 md:py-32 bg-primary px-6 relative overflow-hidden"
  >
    <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-accent-soft rounded-full blur-[100px] pointer-events-none opacity-50"></div>
    
    <div class="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>

    <div class="container-system relative z-10">
      
      <div class="grid lg:grid-cols-12 gap-12 md:gap-16 items-start">

        <div class="lg:col-span-5 space-y-6 md:space-y-8 lg:sticky lg:top-32">
          
          <div class="flex items-center gap-3">
            <div class="h-px w-10 bg-purple-500/50"></div>
            <h2 class="text-xs uppercase tracking-[0.2em] text-purple-400 font-bold">
              {{ services.header.tag }}
            </h2>
          </div>

          <h1 class="text-white text-4xl md:text-5xl font-extrabold leading-tight">
            {{ services.header.title }} 
            <span class="text-gradient block">{{ services.header.title.highlight }}</span>
          </h1>

          <p class="text-slate-400 border-l-2 border-purple-500/30 pl-6 text-lg leading-relaxed">
            {{ services.header.subtitle }}
          </p>

        </div>

        <div class="lg:col-span-7 space-y-5 md:space-y-6">

          <div
            v-for="(item, i) in services.items"
            :key="i"
            class="p-8 md:p-10 rounded-[2rem] bg-secondary border border-white/5 backdrop-blur-md
                   transition-all duration-500 group
                   hover:bg-white/[0.03] hover:border-purple-500/30 hover:-translate-y-1 shadow-2xl"
          >
            <div class="flex gap-8 items-start">
              
              <span class="font-mono text-sm text-slate-600 group-hover:text-purple-400 transition-colors duration-300">
                // 0{{ i + 1 }}
              </span>

              <div class="space-y-4 w-full">
                
                <h4 class="text-xl text-white font-bold group-hover:text-purple-400 transition-colors duration-300">
                  {{ item.title }}
                </h4>

                <p class="text-slate-400 leading-relaxed text-base">
                  {{ item.desc }}
                </p>

                <div class="pt-4">
                  <div class="h-[2px] w-0 bg-gradient-to-r from-purple-500 to-cyan-400 group-hover:w-full transition-all duration-700 ease-out"></div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* Scoped tweak to match the Hero's section specific accent if needed */
#services {
  --color-accent: var(--color-accent-purple);
}
</style>