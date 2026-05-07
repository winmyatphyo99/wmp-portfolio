<script setup>
import { ref } from "vue";

defineProps({
  skills: {
    type: Object,
    required: true
  }
});

const activeTab = ref("backend");

const setTab = (tab) => {
  activeTab.value = tab;
};
</script>

<template>
  <section id="skills" class="relative py-32 bg-[#050505] border-y border-white/5 overflow-hidden">
    
    <!-- Flash Design Background Elements -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(168,85,247,0.03),transparent_70%)]"></div>
    <div class="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 blur-[120px] rounded-full opacity-20 animate-pulse"></div>
    <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>

    <div class="container-system relative z-10 px-6 mx-auto max-w-7xl">
      
      <!-- HEADER -->
      <div class="max-w-2xl mb-20">
        <div class="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
          <span class="flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-purple-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          <span class="text-[11px] uppercase tracking-[0.3em] font-bold text-white/80">
            Technical Stack
          </span>
        </div>

        <h2 class="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight mb-6">
          Tools Behind the <span class="text-gradient">Systems</span>
        </h2>

        <p class="text-base md:text-lg lg:text-xl text-gray-400 font-light leading-relaxed">
  A curated stack focused on performance, scalability, and maintainability
  across modern backend architectures and responsive frontends.
</p>
      </div>

      <!-- TABS SYSTEM -->
      <div class="flex flex-wrap gap-3 mb-12">
        <button
          v-for="(category, key) in skills"
          :key="key"
          @click="setTab(key)"
          :class="[
            'px-8 py-3 rounded-full text-xs uppercase tracking-widest font-bold transition-all duration-300 border',
            activeTab === key
              ? 'bg-white text-black border-white shadow-lg shadow-white/10 transition-all duration-300 ease-out'
              : 'bg-white/5 border-white/10 text-white/50 hover:bg-white/10 hover:text-white'
          ]"
        >
          {{ key }}
        </button>
      </div>

      <!-- GRID -->
      <Transition name="fade" mode="out-in">
        <div
          :key="activeTab"
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <div
            v-for="(item, i) in skills[activeTab].items"
            :key="item"
            class="group relative p-1 rounded-2xl transition-all duration-500 hover:shadow-[0_10px_40px_rgba(34,211,238,0.08)]"
          >
            <!-- Border Glow effect -->
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:from-cyan-500/20 group-hover:to-purple-500/20 rounded-2xl transition-all duration-500"></div>
            
            <div class="relative p-6 rounded-2xl bg-[#0f1117] border border-white/10 hover:border-cyan-400/30 flex items-center justify-between overflow-hidden">
              <!-- Background Number -->
              <span class="absolute -right-2 -bottom-4 text-7xl font-black text-white/[0.02] group-hover:text-cyan-500/[0.05] transition-colors">
                {{ i + 1 }}
              </span>

              <div class="flex items-center gap-4">
                <div class="h-1.5 w-1.5 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                <h3 class="text-sm font-bold text-gray-300 group-hover:text-white transition-colors tracking-wide">
                  {{ item }}
                </h3>
              </div>

              <svg class="w-4 h-4 text-white/10 group-hover:text-purple-400 transition-all transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>
        </div>
      </Transition>

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
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>