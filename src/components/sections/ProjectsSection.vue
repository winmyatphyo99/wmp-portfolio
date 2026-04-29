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

// Computed property to check if any filters are currently active
const isFiltered = computed(() => searchQuery.value !== '' || activeFilter.value !== 'All');

const filteredProjects = computed(() => {
  return props.projects.filter(project => {
    const matchesFilter = activeFilter.value === 'All' || 
                         project.tags.some(tag => tag.toLowerCase() === activeFilter.value.toLowerCase());
    
    const query = searchQuery.value.toLowerCase();
    const matchesSearch = project.title.toLowerCase().includes(query) ||
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
  <section id="projects" class="bg-[#030508] py-24 relative overflow-hidden border-t border-white/5">
    <div class="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none"></div>

    <div class="container-system relative z-10">
      
      <div class="mb-16 space-y-10">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div class="space-y-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-2 bg-[var(--color-accent)] animate-pulse"></span>
              <p class="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--color-accent)]">Live_Project_Database</p>
            </div>
            <h2 class="text-4xl md:text-5xl font-bold text-white tracking-tighter leading-none">Production Systems</h2>
          </div>

          <button 
            @click="clearAll"
            v-show="isFiltered"
            class="group flex items-center gap-2 px-4 py-2 border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5 hover:bg-[var(--color-accent)] transition-all rounded-sm"
          >
            <span class="text-[9px] font-black uppercase tracking-widest text-[var(--color-accent)] group-hover:text-black">Reset System Filters</span>
            <svg class="w-3 h-3 text-[var(--color-accent)] group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" stroke-width="3"/></svg>
          </button>
        </div>

        <div class="grid lg:grid-cols-12 gap-px bg-white/10 border border-white/10 overflow-hidden">
          <div class="lg:col-span-8 bg-[#080a0f] p-4 flex flex-wrap gap-2 items-center">
            <span class="text-[9px] font-mono text-slate-500 mr-4 tracking-tighter">FILTER_BY_STACK:</span>
            <button 
              v-for="cat in categories" 
              :key="cat"
              @click="activeFilter = cat"
              class="px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest transition-all"
              :class="activeFilter === cat 
                ? 'bg-[var(--color-accent)] text-black' 
                : 'text-slate-400 hover:text-white'"
            >
              {{ cat }}
            </button>
          </div>
          <div class="lg:col-span-4 bg-[#080a0f] border-l border-white/10 p-2">
            <div class="relative">
              <input 
                v-model="searchQuery"
                type="text" 
                placeholder="Search Archive..." 
                class="w-full bg-white/[0.03] border-none text-[11px] font-mono text-white py-3 pl-10 focus:ring-0 focus:outline-none"
              />
              <svg class="absolute left-3 top-3 text-slate-600" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
        
        <div v-if="filteredProjects.length === 0" class="col-span-full py-32 text-center border border-dashed border-white/10">
          <p class="text-slate-500 font-mono text-sm tracking-widest uppercase">// Null Results - Search Query Error //</p>
          <button @click="clearAll" class="mt-4 text-[var(--color-accent)] text-[10px] font-black uppercase underline tracking-widest">Re-Initialize Index</button>
        </div>

        <div v-for="(proj, idx) in filteredProjects" :key="proj.title" 
          @click="openDetails(proj)"
          class="group bg-[#080a0f] border border-white/5 flex flex-col cursor-pointer hover:border-[var(--color-accent)]/50 transition-all duration-500 overflow-hidden"
        >
          <div class="p-4 border-b border-white/5 flex justify-between items-center bg-white/[0.01]">
            <span class="text-[10px] font-mono text-slate-500">ID: 0{{ idx + 1 }}_PRODUCTION</span>
            <div class="flex gap-1">
              <span v-for="tag in proj.tags.slice(0, 2)" :key="tag" class="text-[8px] border border-white/10 px-2 py-0.5 text-slate-400 uppercase font-bold">{{ tag }}</span>
            </div>
          </div>

          <div class="aspect-video relative overflow-hidden bg-black">
            <img :src="proj.image" class="w-full h-full object-cover opacity-50 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
            <div class="absolute inset-0 bg-gradient-to-t from-[#080a0f] via-transparent to-transparent opacity-80"></div>
          </div>

          <div class="p-8 space-y-4">
            <h3 class="text-2xl font-bold text-white tracking-tight group-hover:text-[var(--color-accent)] transition-colors">
              {{ proj.title }}
            </h3>
            <p class="text-sm text-slate-400 leading-relaxed line-clamp-2 italic">
              "{{ proj.overview }}"
            </p>
            <div class="pt-4 flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-white transition-all">
              <span>Access Case Study</span>
              <div class="h-[1px] w-8 bg-white/10 group-hover:bg-[var(--color-accent)] group-hover:w-12 transition-all"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Transition name="modal">
      <div v-if="selectedProject" 
        class="fixed inset-0 z-[999] flex items-center justify-center p-0 md:p-12 backdrop-blur-md"
        @click.self="closeDetails"
      >
        <div class="w-full max-w-5xl bg-[#080a0f] border border-white/10 relative flex flex-col md:max-h-[90vh] overflow-hidden">
          <div class="p-4 border-b border-white/10 flex justify-between items-center bg-black/50">
             <span class="text-[10px] font-mono text-[var(--color-accent)] font-bold uppercase tracking-widest">System_Analysis_Mode</span>
             <button @click="closeDetails" class="text-slate-500 hover:text-white transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6 6 18M6 6l12 12"/></svg>
             </button>
          </div>

          <div class="overflow-y-auto custom-scrollbar">
            <div class="p-8 md:p-16 space-y-12">
              <div class="grid lg:grid-cols-2 gap-12">
                 <div class="space-y-6">
                    <h2 class="text-4xl font-bold text-white tracking-tighter">{{ selectedProject.title }}</h2>
                    <p class="text-slate-400 text-lg leading-relaxed italic border-l-2 border-[var(--color-accent)] pl-6">"{{ selectedProject.overview }}"</p>
                    <div class="pt-6 space-y-4">
                       <h4 class="text-[10px] font-black text-white uppercase tracking-widest">Engineering Specs</h4>
                       <ul class="grid gap-2">
                          <li v-for="feat in selectedProject.features" :key="feat" class="text-xs text-slate-500 flex gap-3">
                            <span class="text-[var(--color-accent)]">▣</span> {{ feat }}
                          </li>
                       </ul>
                    </div>
                 </div>
                 <div class="space-y-6">
                    <img :src="selectedProject.image" class="w-full aspect-video object-cover border border-white/10" />
                    <div class="p-6 bg-white/[0.02] border border-white/5 space-y-4">
                       <h4 class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Architectural Impact</h4>
                       <p class="text-sm text-slate-300 leading-relaxed">{{ selectedProject.impact }}</p>
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

/* Industrial Grid Background */
.bg-grid {
  background-size: 40px 40px;
  background-image: linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
}

.modal-enter-active, .modal-leave-active { transition: opacity 0.4s ease, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1); }
.modal-enter-from, .modal-leave-to { opacity: 0; transform: scale(0.98); }

.custom-scrollbar::-webkit-scrollbar { width: 4px; }
.custom-scrollbar::-webkit-scrollbar-track { background: #050608; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: var(--color-accent); }
</style>