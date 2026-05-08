<script setup>
import { ref, nextTick, onMounted } from "vue";

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
});
</script>

<template>
  <section id="skills" class="relative pt-28 pb-20 bg-primary border-y border-border overflow-hidden">

    <!-- BACKGROUND -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(168,85,247,0.03),transparent_70%)]"></div>

    <div
      class="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 blur-[120px] rounded-full opacity-20 animate-pulse">
    </div>

    <div class="absolute inset-0 bg-grid opacity-10"></div>

    <div class="container-system relative z-10 px-6 mx-auto max-w-7xl">

      <!-- HEADER -->
      <div class="mb-20">

        <div class="inline-flex items-center gap-3 px-4 py-1.5 rounded-full
          bg-surface border border-border backdrop-blur-md mb-6">

          <span class="flex h-2 w-2 relative">
            <span class="animate-ping absolute h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>

          <span class="text-[11px] uppercase tracking-[0.3em] font-bold text-secondary">
            Technical Stack
          </span>

        </div>

        <h2 class="max-w-xl text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-primary leading-tight tracking-tight">
          Tools Behind the <span class="text-gradient">Systems</span>
        </h2>

        <p class="text-base md:text-lg lg:text-xl text-secondary font-light leading-relaxed">
          A curated stack focused on performance, scalability, and maintainability
          across modern backend architectures and responsive frontends.
        </p>

      </div>

      <!-- TABS -->
      <div class="relative inline-flex p-1 rounded-full bg-surface border border-border mb-12 overflow-hidden">

        <!-- ACTIVE POINTER -->
        <div class="absolute top-1 bottom-1 rounded-full
           bg-gradient-to-r from-cyan-500 to-purple-500
           transition-all duration-300 ease-out shadow-lg" :style="indicatorStyle"></div>

        <!-- TAB BUTTONS -->
        <button v-for="(category, key) in skills" :key="key" :ref="el => tabRefs[key] = el" @click="setTab(key)" class="relative z-10 px-7 py-3 rounded-full
           text-xs uppercase tracking-[0.2em]
           font-bold transition-colors duration-300" :class="activeTab === key
              ? 'text-white'
              : 'text-secondary hover:text-primary'
            ">
          {{ key }}
        </button>

      </div>
      <!-- GRID -->
      <Transition name="fade" mode="out-in">

        <div :key="activeTab" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          <div v-for="(item) in skills[activeTab].items" :key="item"
            class="group relative p-1 rounded-2xl transition-all duration-500">

            <!-- glow -->
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-border to-transparent
              group-hover:from-cyan-500/20 group-hover:to-purple-500/20 rounded-2xl transition-all duration-500">
            </div>

            <div class="relative p-6 rounded-2xl bg-secondary border border-border
              hover:border-cyan-400/30 flex items-center justify-between overflow-hidden">


              <div class="flex items-center gap-4">

                <div class="h-1.5 w-1.5 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>

                <h3 class="text-sm font-bold text-secondary group-hover:text-primary transition-colors tracking-wide">
                  {{ item }}
                </h3>

              </div>

              <svg
                class="w-4 h-4 text-border group-hover:text-purple-400 transition-all transform group-hover:translate-x-1"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">

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