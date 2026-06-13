<script setup>
import { ref, computed, watch, onUnmounted } from "vue";

const props = defineProps({
  projects: {
    type: Array,
    required: true,
  },
});

const searchQuery = ref("");
const activeFilter = ref("All");
const selectedProject = ref(null);

const categories = [
  "All",
  "Laravel",
  "PHP MVC",
  "MySQL",
  "ASP.NET Core",
];

const isFiltered = computed(
  () => searchQuery.value !== "" || activeFilter.value !== "All",
);

const filteredProjects = computed(() => {
  return props.projects.filter((project) => {
    const matchesFilter =
      activeFilter.value === "All" ||
      project.tags.some(
        (tag) => tag.toLowerCase() === activeFilter.value.toLowerCase(),
      );

    const query = searchQuery.value.toLowerCase();

    const matchesSearch =
      project.title.toLowerCase().includes(query) ||
      project.overview.toLowerCase().includes(query);

    return matchesFilter && matchesSearch;
  });
});

const clearAll = () => {
  activeFilter.value = "All";
  searchQuery.value = "";
};

const openDetails = (project) => {
  selectedProject.value = project;
  document.body.style.overflow = "hidden";
};

const closeDetails = () => {
  selectedProject.value = null;
  document.body.style.overflow = "auto";
};

const handleKeydown = (e) => {
  if (e.key === "Escape") closeDetails();
};

watch(selectedProject, (val) => {
  if (val) window.addEventListener("keydown", handleKeydown);
  else window.removeEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeydown);
});
</script>

<template>
  <section class="relative pt-28 pb-20 bg-primary border-t border-border overflow-hidden">
    <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.04),transparent_60%)]"></div>

    <div class="container-system relative z-10 px-6 mx-auto max-w-7xl">
      
      <div class="flex flex-col items-center text-center mb-16">
        <div class="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-surface border border-border backdrop-blur-md mb-6">
          <span class="flex h-2 w-2 relative">
            <span class="animate-ping absolute h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          <span class="text-[11px] uppercase tracking-[0.3em] font-bold text-secondary">
            Portfolio
          </span>
        </div>

        <div class="relative max-w-2xl mx-auto">
          <h2 class="text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-primary leading-tight tracking-tight mb-4">
            Production <span class="text-gradient">Systems</span>
          </h2>
          <p class="text-base text-secondary font-light leading-relaxed">
            Enterprise applications and robust architectures built to satisfy complex logic and operational workflows.
          </p>
        </div>

        <button @click="clearAll" v-show="isFiltered"
          class="mt-6 flex items-center gap-3 px-5 py-2.5 rounded-full border border-cyan-500/30 bg-surface hover:bg-cyan-500/10 transition-all group">
          <span class="text-[10px] font-black uppercase tracking-widest text-cyan-400">
            Reset Filters
          </span>
          <svg class="w-3 h-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M6 18L18 6M6 6l12 12" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>

      <div class="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 rounded-2xl border border-border bg-surface overflow-hidden mb-16 shadow-xl shadow-black/5">
        <div class="lg:col-span-8 p-4 flex flex-wrap gap-2 items-center justify-center lg:justify-start">
          <span class="text-[10px] font-black uppercase tracking-[0.2em] text-muted px-3">
            Categories
          </span>

          <button v-for="cat in categories" :key="cat" @click="activeFilter = cat"
            class="px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all" 
            :class="activeFilter === cat
              ? 'bg-primary text-primary border border-border shadow-md'
              : 'text-muted hover:text-primary'
            ">
            {{ cat }}
          </button>
        </div>

        <div class="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-border p-3">
          <div class="relative">
            <input v-model="searchQuery" type="text" placeholder="Search architectures..."
              class="w-full bg-secondary/40 border border-border text-primary py-2.5 pl-10 pr-4 rounded-xl text-xs focus:outline-none focus:border-cyan-500/50 placeholder:text-muted/60" />

            <svg class="absolute left-3.5 top-3 text-muted/60" width="14" height="14" fill="none" stroke="currentColor"
              stroke-width="2.5" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
        </div>
      </div>

      <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
        <div v-if="filteredProjects.length === 0"
          class="col-span-full py-24 text-center rounded-2xl border border-dashed border-border bg-surface">
          <p class="text-muted text-sm">
            No production systems match your current selection query.
          </p>
          <button @click="clearAll"
            class="mt-4 text-cyan-400 text-xs font-black uppercase tracking-widest hover:text-primary transition-colors">
            Clear all filters
          </button>
        </div>

        <div v-for="(proj, idx) in filteredProjects" :key="proj.title" @click="openDetails(proj)"
          class="group cursor-pointer w-full" v-motion :initial="{ opacity: 0, y: 30 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: idx * 60 } }">
          
          <div
            class="h-full flex flex-col overflow-hidden rounded-2xl border border-border bg-surface p-[1px] transition-all duration-500 hover:-translate-y-1.5 hover:bg-gradient-to-br hover:from-cyan-500/20 hover:to-purple-500/20 hover:shadow-[0_0_50px_rgba(168,85,247,0.12)]">
            
            <div class="relative h-full flex flex-col rounded-2xl bg-surface/90 backdrop-blur-sm overflow-hidden">
              <div class="flex items-center gap-1.5 px-5 py-3.5 border-b border-border bg-secondary/20">
                <span class="w-2.5 h-2.5 rounded-full bg-red-500/70"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-green-500/70"></span>

                <div class="ml-4 flex items-center flex-1 h-6 px-4 rounded-lg bg-surface/80 border border-border/60">
                  <span class="text-[9px] text-muted truncate tracking-wide font-mono">
                    {{ proj.title.toLowerCase().replace(/\s+/g, '-') }}.app
                  </span>
                </div>
              </div>

              <div class="aspect-video bg-slate-950 overflow-hidden border-b border-border/40 relative">
                <picture>
                  <source :srcset="proj.imageWebp" type="image/webp" />
                  <img :src="proj.image" :alt="proj.title"
                    class="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-[1.03]" />
                </picture>
              </div>

              <div class="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div class="mb-2 text-[9px] uppercase tracking-[0.25em] font-black text-cyan-400">
                    {{ proj.category }}
                  </div>
                  <h3 class="text-base font-bold text-primary group-hover:text-cyan-400 transition-colors tracking-tight">
                    {{ proj.title }}
                  </h3>

                  <p class="mt-3 text-xs md:text-sm text-secondary font-light line-clamp-2 leading-relaxed">
                    {{ proj.overview }}
                  </p>
                </div>

                <div class="pt-6 space-y-4">
                  <div class="flex flex-wrap gap-1.5">
                    <span v-for="tag in proj.tags" :key="tag"
                      class="px-2.5 py-1 rounded-md bg-secondary border border-border text-[9px] font-semibold tracking-wide text-cyan-400/90">
                      {{ tag }}
                    </span>
                  </div>

                  <div class="pt-2 flex items-center justify-between border-t border-border/40">
                    <span class="text-purple-400 text-[10px] font-black uppercase tracking-widest flex items-center gap-1 group-hover:text-cyan-400 transition-colors">
                      View Architecture 
                      <svg class="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M9 5l7 7-7 7" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </span>

                    <div class="flex items-center gap-3">
                      <a v-if="proj.demoUrl" :target="'_blank'" :href="proj.demoUrl" @click.stop
                        class="flex items-center gap-1 text-[11px] font-medium text-secondary hover:text-primary transition-colors">
                        🌐 Live
                      </a>

                      <a v-if="proj.githubUrl" :target="'_blank'" :href="proj.githubUrl" @click.stop
                        class="flex items-center gap-1 text-[11px] font-medium text-secondary hover:text-primary transition-colors">
                        ⚡ Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <Transition name="modal">
      <div v-if="selectedProject" class="fixed inset-0 z-[999] flex items-center justify-center p-4 backdrop-blur-md bg-black/60"
        @click.self="closeDetails">
        
        <div class="w-full max-w-4xl bg-primary border border-border rounded-2xl overflow-hidden shadow-2xl transition-all max-h-[90vh] flex flex-col">
          
          <div class="p-4 border-b border-border flex justify-between items-center bg-surface">
            <div class="flex items-center gap-2">
              <div class="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]"></div>
              <span class="text-[10px] font-black tracking-widest text-muted uppercase">Architecture Blueprint</span>
            </div>
            <button @click="closeDetails" class="p-1.5 rounded-lg hover:bg-secondary text-muted hover:text-primary transition-colors text-xs font-bold px-3">
              ✕ Close
            </button>
          </div>

          <div class="overflow-y-auto p-6 md:p-8 space-y-8">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              <div class="lg:col-span-5 space-y-6 text-left">
                <div class="space-y-2">
                  <div class="text-cyan-400 text-[10px] font-black uppercase tracking-widest">
                    {{ selectedProject.category }}
                  </div>
                  <h2 class="text-xl md:text-2xl font-black text-primary tracking-tight">
                    {{ selectedProject.title }}
                  </h2>
                </div>

                <p class="text-xs md:text-sm text-secondary font-light leading-relaxed border-l-2 border-cyan-400 pl-4">
                  {{ selectedProject.overview }}
                </p>

                <div class="flex flex-wrap gap-2 pt-2">
                  <a v-if="selectedProject.demoUrl" :href="selectedProject.demoUrl" target="_blank" 
                    class="px-4 py-2 text-xs font-bold rounded-xl bg-surface border border-border text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all">
                    Live Interface ↗
                  </a>
                  <a v-if="selectedProject.githubUrl" :href="selectedProject.githubUrl" target="_blank" 
                    class="px-4 py-2 text-xs font-bold rounded-xl bg-surface border border-border text-primary hover:border-purple-500/50 transition-all">
                    Source Repository
                  </a>
                </div>

                <div class="space-y-3 pt-4">
                  <h4 class="text-[10px] font-black uppercase tracking-[0.2em] text-muted">
                    Key Implementations
                  </h4>
                  <div class="space-y-2">
                    <div v-for="feat in selectedProject.features" :key="feat"
                      class="p-3 rounded-xl bg-surface/50 border border-border/80 flex items-start gap-3">
                      <div class="mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-400 flex-shrink-0 shadow-[0_0_6px_rgba(168,85,247,0.6)]"></div>
                      <span class="text-xs text-secondary leading-normal font-light">
                        {{ feat }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="lg:col-span-7 space-y-6">
                <div class="rounded-2xl overflow-hidden border border-border shadow-md">
                  <div class="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-surface">
                    <span class="w-2 h-2 rounded-full bg-red-500/40"></span>
                    <span class="w-2 h-2 rounded-full bg-yellow-500/40"></span>
                    <span class="w-2 h-2 rounded-full bg-green-500/40"></span>
                    <span class="text-[9px] text-muted/60 font-mono ml-2 truncate max-w-[180px]">{{ selectedProject.title.toLowerCase().replace(/\s+/g,'') }}-preview</span>
                  </div>

                  <div class="max-h-[360px] overflow-y-auto bg-slate-950/40">
                    <img :src="selectedProject.image" :alt="selectedProject.title" class="w-full object-contain p-2" />
                  </div>
                </div>

                <div v-if="selectedProject.impact" class="p-5 rounded-2xl bg-surface border border-border space-y-2">
                  <h4 class="text-purple-400 text-[10px] font-black uppercase tracking-[0.2em]">
                    Operational Metrics & Business Impact
                  </h4>
                  <p class="text-xs text-secondary font-light leading-relaxed">
                    {{ selectedProject.impact }}
                  </p>
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
.bg-grid-pattern {
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 24px 24px;
}

.text-gradient {
  background: linear-gradient(to right, #22d3ee, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.modal-enter-active,
.modal-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.97);
}
</style> 