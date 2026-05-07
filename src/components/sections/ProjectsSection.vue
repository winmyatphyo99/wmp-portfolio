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
  <section id="projects" class="relative py-32 bg-[#050505] border-t border-white/5 overflow-hidden">
    
    <!-- Flash Design Background Elements -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_rgba(168,85,247,0.03),transparent_70%)]"></div>
    <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>

    <div class="container-system relative z-10 px-6 mx-auto max-w-7xl">

      <!-- HEADER -->
      <div class="mb-16 space-y-10">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div class="space-y-4">
            <div class="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span class="flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-cyan-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span class="text-[11px] uppercase tracking-[0.3em] font-bold text-white/80">
                Portfolio
              </span>
            </div>
            <h2 class="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Production <span class="text-gradient">Systems</span>
            </h2>
          </div>

          <button
            @click="clearAll"
            v-show="isFiltered"
            class="flex items-center gap-3 px-6 py-3 border border-cyan-500/30 bg-cyan-500/5 hover:bg-cyan-500 transition-all rounded-full group"
          >
            <span class="text-[10px] font-black uppercase tracking-widest text-cyan-400 group-hover:text-black">
              Reset Filters
            </span>
            <svg class="w-3 h-3 text-cyan-400 group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" stroke-width="3"/>
            </svg>
          </button>
        </div>

        <!-- FILTER BAR -->
        <div class="grid lg:grid-cols-12 rounded-3xl border border-white/5 bg-[#0a0a0a] overflow-hidden shadow-2xl">
          <div class="lg:col-span-8 p-4 flex flex-wrap gap-2 items-center bg-white/[0.01]">
            <span class="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 px-4">Categories</span>
            <button
              v-for="cat in categories"
              :key="cat"
              @click="activeFilter = cat"
              class="px-5 py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-widest transition-all duration-300"
              :class="activeFilter === cat
                ? 'bg-white text-black scale-105'
                : 'text-white/40 hover:text-white hover:bg-white/5'"
            >
              {{ cat }}
            </button>
          </div>

          <div class="lg:col-span-4 bg-black/40 border-l border-white/5 p-3">
            <div class="relative">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search architecture..."
                class="w-full bg-white/5 border border-white/10 text-white py-3 pl-12 pr-4 focus:outline-none focus:border-cyan-500/50 rounded-2xl transition-all text-sm"
              />
              <svg class="absolute left-4 top-3.5 text-white/20" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- PROJECTS GRID -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 relative">
        <div v-if="filteredProjects.length === 0" class="col-span-full py-32 text-center rounded-3xl border border-dashed border-white/10 bg-white/[0.01]">
          <p class="text-white/40 text-sm font-medium tracking-wide">No production systems match your query.</p>
          <button @click="clearAll" class="mt-4 text-cyan-400 text-xs font-black uppercase tracking-widest hover:text-white transition">
            Clear all filters
          </button>
        </div>

        <div
          v-for="(proj, idx) in filteredProjects"
          :key="proj.title"
          @click="openDetails(proj)"
          class="group relative flex flex-col cursor-pointer transition-all duration-500"
        >
          <div class="relative aspect-[16/10] rounded-[2rem] overflow-hidden border border-white/5 bg-[#0a0a0a]">
            <img
              :src="proj.image"
              class="w-full h-full object-cover opacity-50 group-hover:scale-110 group-hover:opacity-80 transition-all duration-1000"
            />
            
            <!-- Overlay Info -->
            <div class="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80"></div>
            
            <div class="absolute top-6 right-6 flex gap-2">
              <span v-for="tag in proj.tags.slice(0, 2)" :key="tag"
                class="px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-black text-cyan-400 uppercase tracking-tighter">
                {{ tag }}
              </span>
            </div>

            <div class="absolute bottom-8 left-8 right-8">
               <span class="text-[10px] font-black text-cyan-500/60 uppercase tracking-[0.4em] mb-2 block">System 0{{ idx + 1 }}</span>
               <h3 class="text-2xl font-black text-white group-hover:text-cyan-400 transition-colors">
                 {{ proj.title }}
               </h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- SYSTEM ANALYSIS MODAL -->
    <Transition name="modal">
      <div v-if="selectedProject"
        class="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-12 backdrop-blur-xl"
        @click.self="closeDetails"
      >
        <div class="w-full max-w-6xl bg-[#050505] border border-white/10 rounded-[2.5rem] shadow-[0_0_100px_rgba(0,0,0,0.5)] relative flex flex-col md:max-h-[90vh] overflow-hidden">
          
          <div class="p-6 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
            <span class="text-[10px] font-black text-cyan-500 uppercase tracking-[0.3em]">Technical Deep-Dive</span>
            <button @click="closeDetails" class="p-2 rounded-full hover:bg-white/10 text-white/40 hover:text-white transition">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" stroke-width="2"/></svg>
            </button>
          </div>

          <div class="overflow-y-auto custom-scrollbar p-8 md:p-16">
            <div class="grid lg:grid-cols-2 gap-16">
              <div class="space-y-10">
                <div class="space-y-4">
                  <h2 class="text-2xl font-black text-white tracking-tighter">{{ selectedProject.title }}</h2>
                  <p class="text-xl text-gray-400 font-light leading-relaxed border-l-4 border-purple-500 pl-8">
                    {{ selectedProject.overview }}
                  </p>
                </div>

                <div class="space-y-6">
                  <h4 class="text-xs font-black uppercase tracking-[0.2em] text-white/30">Key Technical Features</h4>
                  <div class="grid gap-4">
                    <div v-for="feat in selectedProject.features" :key="feat"
                         class="flex items-start gap-4 text-gray-300">
                      <div class="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-500 flex-shrink-0 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
                      <span class="text-sm font-medium leading-relaxed">{{ feat }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="space-y-10">
                <div class="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <img :src="selectedProject.image" class="w-full aspect-video object-cover" />
                </div>

                <div class="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 space-y-4 relative overflow-hidden">
                  <div class="absolute top-0 right-0 p-6 opacity-10">
                    <svg class="w-16 h-16 text-cyan-400" fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <h4 class="text-xs font-black uppercase tracking-[0.2em] text-cyan-500">Business Impact</h4>
                  <p class="text-sm text-gray-400 leading-relaxed relative z-10">{{ selectedProject.impact }}</p>
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
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 30px 30px;
}

.text-gradient {
  background: linear-gradient(to right, #22d3ee, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.modal-enter-active, .modal-leave-active {
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.modal-enter-from, .modal-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(20px);
}

.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: #050505;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #22d3ee;
  border-radius: 10px;
}
</style>