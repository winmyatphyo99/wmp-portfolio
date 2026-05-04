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
  <div id="skills" class="relative py-32 bg-[#070A0F] text-white overflow-hidden">

    <!-- BACKGROUND GLOW -->
    <div class="absolute inset-0">
      <div class="absolute top-[-200px] right-[-150px] w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full"></div>
      <div class="absolute bottom-[-200px] left-[-150px] w-[500px] h-[500px] bg-emerald-500/10 blur-[150px] rounded-full"></div>
    </div>

    <div class="relative container-system z-10">

      <!-- HEADER -->
      <div class="max-w-2xl space-y-6 mb-20">

        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft border border-accent/20">
          <span class="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
          <p class="text-[10px] uppercase tracking-[0.2em] font-bold text-accent italic">
            Technical Stack
          </p>
        </div>

        <h2 class="text-4xl md:text-5xl font-extrabold tracking-tight">
          Tools Behind the Systems
        </h2>

        <p class="text-white/60 leading-relaxed">
          A curated stack focused on performance, scalability, and maintainability across frontend and backend systems.
        </p>

      </div>

      <!-- TABS -->
      <div class="flex gap-4 mb-16">

        <button
          @click="setTab('backend')"
          :class="[
            'px-6 py-2 rounded-full text-sm transition border',
            activeTab === 'backend'
              ? 'bg-emerald-400 text-black border-emerald-400'
              : 'bg-white/[0.03] border-white/10 text-white/60 hover:text-white'
          ]"
        >
          Backend
        </button>

        <button
          @click="setTab('frontend')"
          :class="[
            'px-6 py-2 rounded-full text-sm transition border',
            activeTab === 'frontend'
              ? 'bg-emerald-400 text-black border-emerald-400'
              : 'bg-white/[0.03] border-white/10 text-white/60 hover:text-white'
          ]"
        >
          Frontend
        </button>

      </div>

      <!-- GRID -->
      <Transition name="fade" mode="out-in">

        <div
          :key="activeTab"
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >

          <div
            v-for="(item, i) in skills[activeTab].items"
            :key="item"
            class="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-400/30 transition-all duration-500 hover:-translate-y-1"
          >

            <!-- glow hover -->
            <div class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-b from-emerald-500/5 to-transparent"></div>

            <!-- index -->
            <span class="text-xs text-white/30 group-hover:text-emerald-300 transition">
              0{{ i + 1 }}
            </span>

            <!-- skill -->
            <h3 class="mt-6 text-sm font-medium text-white/80 group-hover:text-white transition">
              {{ item }}
            </h3>

          </div>

        </div>

      </Transition>

    </div>

  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>