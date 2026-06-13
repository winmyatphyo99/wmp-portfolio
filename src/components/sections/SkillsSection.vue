<script setup>
import { ref, nextTick, onMounted, onUnmounted } from "vue";

defineProps({
  skills: {
    type: Object,
    required: true
  }
});

const activeTab = ref("backend");

const indicatorStyle = ref({
  width: "0px",
  transform: "translateX(0px)"
});

const tabRefs = ref({});

const setTab = async (tab) => {
  activeTab.value = tab;
  await nextTick();
  updateIndicator();
};

const updateIndicator = () => {
  const el = tabRefs.value[activeTab.value];
  if (!el) return;

  indicatorStyle.value = {
    width: `${el.offsetWidth}px`,
    transform: `translateX(${el.offsetLeft}px)`
  };
};

onMounted(() => {
  updateIndicator();
  window.addEventListener("resize", updateIndicator);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateIndicator);
});
</script>

<template>
  <section id="skills" class="relative pt-28 pb-20 bg-primary border-y border-border overflow-hidden">
    
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.04),transparent_60%)]"></div>
    <div class="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 blur-[120px] rounded-full opacity-20 animate-pulse"></div>
    <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>

    <div class="container-system relative z-10 px-6 mx-auto max-w-7xl">

      <div class="flex flex-col items-center text-center mb-16">
        <div class="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-surface border border-border backdrop-blur-md mb-6">
          <span class="flex h-2 w-2 relative">
            <span class="animate-ping absolute h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          <span class="text-[11px] uppercase tracking-[0.3em] font-bold text-secondary">
            Technical Stack
          </span>
        </div>

        <h2 class="max-w-xl text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-primary leading-tight tracking-tight mb-4">
          Tools Behind the <span class="text-gradient">Systems</span>
        </h2>

        <p class="max-w-2xl text-base text-secondary font-light leading-relaxed">
          A curated stack focused on performance, scalability, and maintainability across modern backend architectures and responsive frontends[cite: 37].
        </p>
      </div>

      <div class="flex justify-center mb-16">
        <div class="relative inline-flex p-1 rounded-full bg-surface border border-border overflow-hidden backdrop-blur-md">
          <div 
            class="absolute top-1 bottom-1 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-300 ease-out shadow-lg shadow-purple-500/10" 
            :style="indicatorStyle"
          ></div>

          <button 
            v-for="(category, key) in skills" 
            :key="key" 
            :ref="el => tabRefs[key] = el" 
            @click="setTab(key)" 
            class="relative z-10 px-7 py-3 rounded-full text-xs uppercase tracking-[0.2em] font-bold transition-colors duration-300" 
            :class="activeTab === key ? 'text-white' : 'text-secondary hover:text-primary'"
          >
            {{ key }}
          </button>
        </div>
      </div>

      <div class="max-w-5xl mx-auto">
        <Transition name="fade" mode="out-in">
          <div :key="activeTab" class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div class="lg:col-span-5 space-y-4 text-left lg:pr-6">
              <div class="text-xs font-bold uppercase tracking-widest text-cyan-400">
                Core Paradigm
              </div>
              <h3 class="text-xl md:text-2xl font-bold text-primary tracking-tight">
                {{ skills[activeTab].title || 'Engineering Architecture' }}
              </h3>
              <p class="text-sm md:text-base text-secondary font-light leading-relaxed">
                {{ skills[activeTab].description || 'Prioritizing decoupled logic, strict authentication layers, and reliable data flow for critical operating environments[cite: 18, 30].' }}
              </p>
            </div>

            <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div 
                v-for="(item) in skills[activeTab].items" 
                :key="item"
                class="group relative p-[1px] rounded-xl transition-all duration-500 bg-border/40 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20"
              >
                <div class="relative p-5 rounded-xl bg-surface/90 backdrop-blur-sm flex items-center justify-between border border-transparent transition-all duration-300">
                  <div class="flex items-center gap-3.5">
                    <div class="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]"></div>
                    <span class="text-xs font-semibold tracking-wide text-secondary group-hover:text-primary transition-colors">
                      {{ item }}
                    </span>
                  </div>
                  
                  <svg 
                    class="w-3.5 h-3.5 text-secondary/30 group-hover:text-purple-400 transition-all transform group-hover:translate-x-0.5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </Transition>
      </div>

    </div>
  </section>
</template>

<style scoped>
.bg-grid-pattern {
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 24px 24px;
}

.text-gradient {
  background: linear-gradient(to right, #22d3ee, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-enter-from {
  opacity: 0;
  transform: scale(0.98) translateY(10px);
}

.fade-leave-to {
  opacity: 0;
  transform: scale(0.98) translateY(-10px);
}
</style>