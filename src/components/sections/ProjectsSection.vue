<script setup>
import { ref, computed, watch } from 'vue';

const props = defineProps({
  projects: {
    type: Array,
    required: true
  }
});

const searchQuery = ref('');
const activeFilter = ref('All');
const selectedProject = ref(null);

const categories = ['All', 'Laravel', 'ASP.NET Core', 'API', 'System Design'];

const isFiltered = computed(() => searchQuery.value !== '' || activeFilter.value !== 'All');

const filteredProjects = computed(() => {
  return props.projects.filter(project => {
    const matchesFilter =
      activeFilter.value === 'All' ||
      project.tags.some(tag => tag.toLowerCase() === activeFilter.value.toLowerCase());

    const query = searchQuery.value.toLowerCase();

    const matchesSearch =
      project.title.toLowerCase().includes(query) ||
      project.overview.toLowerCase().includes(query);

    return matchesFilter && matchesSearch;
  });
});

const clearAll = () => {
  activeFilter.value = 'All';
  searchQuery.value = '';
};

const openDetails = (project) => {
  selectedProject.value = project;
  document.body.style.overflow = 'hidden';
};

const closeDetails = () => {
  selectedProject.value = null;
  document.body.style.overflow = 'auto';
};

const handleKeydown = (e) => {
  if (e.key === 'Escape') closeDetails();
};

watch(selectedProject, (val) => {
  if (val) window.addEventListener('keydown', handleKeydown);
  else window.removeEventListener('keydown', handleKeydown);
});
</script>

<template>
  <section class="bg-[#030508] py-24 relative overflow-hidden border-t border-white/5">

    <!-- kept grid but softened visually (no terminal feel) -->
    <div class="absolute inset-0 bg-white/[0.02] pointer-events-none"></div>

    <div class="container-system relative z-10">

      <div class="mb-16 space-y-10">

        <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">

          <div class="space-y-2">

            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft border border-accent/20">
              <span class="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
              <span class="text-[10px] uppercase tracking-[0.2em] font-bold text-accent italic">
                Projects
              </span>
            </div>
            <h2 class="text-4xl md:text-5xl font-extrabold text-white leading-[1.2] tracking-tight">
              Production Systems
            </h2>

          </div>

          <button
            @click="clearAll"
            v-show="isFiltered"
            class="group flex items-center gap-2 px-4 py-2 border border-emerald-400/30 bg-emerald-400/5 hover:bg-emerald-400 transition-all rounded-sm"
          >
            <span class="text-xs font-medium uppercase tracking-widest text-emerald-400 group-hover:text-black">
              Reset Filters
            </span>

            <svg class="w-3 h-3 text-emerald-400 group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" stroke-width="3"/>
            </svg>
          </button>

        </div>

        <div class="grid lg:grid-cols-12 gap-px bg-white/10 border border-white/10 overflow-hidden">

          <div class="lg:col-span-8 bg-[#080a0f] p-4 flex flex-wrap gap-2 items-center">

            <!-- removed monospace “FILTER_BY_STACK” feel -->
            <span class="text-xs text-white/50 mr-4">
              Filter
            </span>

            <button
              v-for="cat in categories"
              :key="cat"
              @click="activeFilter = cat"
              class="px-3 py-1.5 text-xs font-medium uppercase tracking-widest transition-all"
              :class="activeFilter === cat
                ? 'bg-emerald-400 text-black'
                : 'text-white/50 hover:text-white'"
            >
              {{ cat }}
            </button>

          </div>

          <div class="lg:col-span-4 bg-[#080a0f] border-l border-white/10 p-2">

            <div class="relative">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search projects..."
                class="w-full bg-white/5 border border-white/10 text-white py-3 pl-10 focus:outline-none focus:ring-0 rounded-sm"
              />

              <svg class="absolute left-3 top-3 text-white/40" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.3-4.3"/>
              </svg>
            </div>

          </div>

        </div>

      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">

        <div v-if="filteredProjects.length === 0" class="col-span-full py-32 text-center border border-dashed border-white/10">

          <!-- removed terminal error-style message -->
          <p class="text-white/40 text-sm">
            No results found
          </p>

          <button
            @click="clearAll"
            class="mt-4 text-emerald-400 text-xs uppercase tracking-widest underline"
          >
            Clear filters
          </button>

        </div>

        <div
          v-for="(proj, idx) in filteredProjects"
          :key="proj.title"
          @click="openDetails(proj)"
          class="group bg-[#080a0f] border border-white/5 flex flex-col cursor-pointer hover:border-emerald-400/50 transition-all duration-500 overflow-hidden"
        >

          <div class="p-4 border-b border-white/5 flex justify-between items-center bg-white/[0.01]">

            <!-- removed “ID: 0X_PRODUCTION” system labeling -->
            <span class="text-xs text-white/50">
              {{ idx + 1 }}
            </span>

            <div class="flex gap-1">
              <span
                v-for="tag in proj.tags.slice(0, 2)"
                :key="tag"
                class="text-[10px] border border-white/10 px-2 py-0.5 text-white/60 uppercase"
              >
                {{ tag }}
              </span>
            </div>

          </div>

          <div class="aspect-video relative overflow-hidden bg-black">

            <img
              :src="proj.image"
              class="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
            />

            <div class="absolute inset-0 bg-gradient-to-t from-[#080a0f] via-transparent"></div>

          </div>

          <div class="p-8 space-y-4">

            <h3 class="text-2xl font-semibold text-white group-hover:text-emerald-400 transition-colors">
              {{ proj.title }}
            </h3>

            <p class="text-sm text-white/50 leading-relaxed line-clamp-2 italic">
              {{ proj.overview }}
            </p>

            <div class="pt-4 flex items-center gap-3 text-xs uppercase tracking-widest text-white/50 group-hover:text-white transition">
              <span>View Case Study</span>
              <div class="h-[1px] w-8 bg-white/10 group-hover:bg-emerald-400 group-hover:w-12 transition-all"></div>
            </div>

          </div>

        </div>

      </div>

    </div>

    <!-- DRAWER unchanged logic, only de-terminalized labels -->
    <Transition name="modal">
      <div v-if="selectedProject"
        class="fixed inset-0 z-[999] flex items-center justify-center p-0 md:p-12 backdrop-blur-md"
        @click.self="closeDetails"
      >

        <div class="w-full max-w-5xl bg-[#080a0f] border border-white/10 relative flex flex-col md:max-h-[90vh] overflow-hidden">

          <div class="p-4 border-b border-white/10 flex justify-between items-center bg-black/30">

            <!-- removed “System_Analysis_Mode” -->
            <span class="text-xs text-emerald-400 uppercase tracking-widest">
              Project Details
            </span>

            <button @click="closeDetails" class="text-white/50 hover:text-white transition">
              ✕
            </button>

          </div>

          <div class="overflow-y-auto custom-scrollbar">

            <div class="p-8 md:p-16 space-y-12">

              <div class="grid lg:grid-cols-2 gap-12">

                <div class="space-y-6">

                  <h2 class="text-4xl font-semibold text-white tracking-tight">
                    {{ selectedProject.title }}
                  </h2>

                  <p class="text-white/60 leading-relaxed italic border-l-2 border-emerald-400 pl-6">
                    {{ selectedProject.overview }}
                  </p>

                  <div class="pt-6 space-y-4">

                    <h4 class="text-xs uppercase tracking-widest text-white/50">
                      Features
                    </h4>

                    <ul class="grid gap-2">
                      <li
                        v-for="feat in selectedProject.features"
                        :key="feat"
                        class="text-sm text-white/60 flex gap-3"
                      >
                        <span class="text-emerald-400">•</span> {{ feat }}
                      </li>
                    </ul>

                  </div>

                </div>

                <div class="space-y-6">

                  <img
                    :src="selectedProject.image"
                    class="w-full aspect-video object-cover border border-white/10"
                  />

                  <div class="p-6 bg-white/5 border border-white/10 space-y-4">

                    <h4 class="text-xs uppercase tracking-widest text-white/50">
                      Impact
                    </h4>

                    <p class="text-sm text-white/70 leading-relaxed">
                      {{ selectedProject.impact }}
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </Transition>

  </section>
</template>

<style scoped>
#projects {
  --color-accent: #10b981;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.4s ease, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.98);
}

.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: #050608;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: var(--color-accent);
}
</style>