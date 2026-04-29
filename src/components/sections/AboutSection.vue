<script setup>
defineProps({
  about: Object
});
</script>


<template>
  <section id="about" class="relative py-32 overflow-hidden bg-[#05070A]">
    
    <div class="absolute inset-0 bg-grid opacity-20"></div>
    <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_70%_70%,_rgba(6,182,212,0.1),transparent_70%)]"></div>

    <div class="container-system relative z-10">
      <div class="grid lg:grid-cols-12 gap-16">

        <div class="lg:col-span-5 space-y-8">
          <div class="space-y-4">
            <div class="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              <span class="text-[10px] uppercase tracking-[0.2em] font-bold text-cyan-400">
                {{ about.header.label }}
              </span>
            </div>

            <h2 class="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              {{ about.header.title.split(' ').slice(0, -1).join(' ') }}
              <span class="text-gradient-cyan">{{ about.header.title.split(' ').pop() }}</span>
            </h2>
          </div>

          <p class="text-lg text-slate-400 leading-relaxed max-w-md">
            {{ about.intro.description }}
          </p>

          <div class="space-y-3 pt-4">
            <div v-for="(item, i) in about.profile" :key="i"
              class="flex justify-between p-4 rounded-xl glass-card group hover:border-cyan-500/30 transition-all"
            >
              <span class="text-slate-500 text-[10px] uppercase font-mono tracking-widest">{{ item.label }}</span>
              <span class="text-slate-200 text-sm font-medium">{{ item.value }}</span>
            </div>
          </div>
        </div>

        <div class="lg:col-span-7 space-y-8 lg:pt-12">
          
          <div class="relative group">
            <div class="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-all"></div>
            <div class="relative p-8 rounded-3xl bg-[#0F1117] border border-white/10 shadow-2xl">
              <div class="flex items-start justify-between mb-6">
                <div>
                  <p class="text-xs uppercase tracking-[0.2em] text-cyan-400 font-bold mb-2">
                    {{ about.intro.tag }}
                  </p>
                  <h3 class="text-2xl text-white font-bold">
                    {{ about.intro.title }}
                  </h3>
                </div>
                <div class="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div class="h-px w-full bg-gradient-to-r from-cyan-500/50 to-transparent mb-6"></div>
              <p class="text-slate-400">Focusing on high-performance architectures and seamless user experiences.</p>
            </div>
          </div>

          <div class="grid sm:grid-cols-2 gap-6">
            <div v-for="(item, i) in about.metrics" :key="i"
              class="p-8 rounded-2xl glass-card relative overflow-hidden group hover:-translate-y-1 transition-all"
            >
              <div class="absolute -right-4 -top-4 w-16 h-16 bg-cyan-500/10 blur-2xl group-hover:bg-cyan-500/20"></div>
              
              <p class="text-4xl font-black text-white mb-2">
                {{ item.value }}
              </p>
              <p class="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">
                {{ item.label }}
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>