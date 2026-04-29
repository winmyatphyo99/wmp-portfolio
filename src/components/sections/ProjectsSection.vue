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

const categories = ['All', 'Laravel', 'ASP.NET Core', 'API', 'PHP MVC', 'System Design'];

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
  <section id="projects" class="relative overflow-hidden border-t"
    style="
      padding: var(--space-16) var(--space-6);
      background: var(--color-bg-primary);
      border-color: var(--color-border);
    ">
    
    <div class="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] -z-0"
         style="background: var(--color-accent-soft)"></div>

    <div class="max-w-6xl mx-auto mb-16 relative z-10">
      <div class="flex items-center gap-4 mb-4">
        <div class="h-[1px] w-12" style="background: var(--color-accent); opacity: 0.5;"></div>
        <h2 class="text-[10px] font-bold uppercase tracking-[0.5em]" style="color: var(--color-accent)">Case Studies</h2>
      </div>
      <h3 class="font-bold" style="font-size: var(--text-4xl); color: var(--color-text-primary);">Production Systems</h3>

      <div class="flex flex-col lg:flex-row lg:items-center justify-between" 
           style="gap: var(--space-8); padding: var(--space-8) 0; margin-bottom: var(--space-12);">
        
        <div class="flex flex-wrap gap-3">
          <button 
            v-for="cat in categories" 
            :key="cat"
            @click="activeFilter = cat"
            :style="activeFilter === cat 
              ? `background: var(--color-accent); color: var(--color-bg-primary); border-color: var(--color-accent)` 
              : `color: var(--color-text-secondary); border-color: var(--color-border); background: var(--color-surface)`"
            class="px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-all duration-300 active:scale-95"
          >
            {{ cat }}
          </button>
        </div>

        <div class="relative max-w-sm w-full">
          <input 
            v-model="searchQuery"
            type="text" 
            placeholder="Search systems..." 
            class="w-full rounded-xl py-3 pl-12 pr-4 transition-all focus:outline-none focus:ring-1"
            style="
              background: var(--color-surface); 
              border: 1px solid var(--color-border); 
              color: var(--color-text-primary);
              --tw-ring-color: var(--color-accent);
            "
          />
          <svg class="absolute left-4 top-3.5" style="color: var(--color-text-muted)" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </div>
      </div>
    </div>

    <div class="max-w-6xl mx-auto space-y-32 relative z-10">
      
      <div v-if="filteredProjects.length === 0" class="py-20 text-center border border-dashed rounded-3xl" style="border-color: var(--color-border)">
        <p style="color: var(--color-text-secondary); font-size: var(--text-lg)">No systems match your current filters.</p>
        <button @click="activeFilter = 'All'; searchQuery = ''" class="mt-4 text-sm font-bold uppercase tracking-widest hover:underline" style="color: var(--color-accent)">Clear all filters</button>
      </div>

      <div v-for="(proj, idx) in filteredProjects" :key="proj.title" class="group grid lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-6 space-y-8" :class="idx % 2 === 0 ? 'order-2' : 'order-2 lg:order-1'">
          <div class="flex flex-wrap gap-2">
            <span v-for="tag in proj.tags" :key="tag"
              class="text-[9px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border"
              style="background: var(--color-surface); color: var(--color-accent); border-color: var(--color-border);">
              {{ tag }}
            </span>
          </div>
          
          <h3 class="text-1xl font-bold tracking-tight transition-colors duration-500 group-hover:text-[var(--color-accent)]" 
              style="color: var(--color-text-primary)">
            {{ proj.title }}
          </h3>
          
          <p class="leading-relaxed italic" style="color: var(--color-text-secondary); font-size: var(--text-lg)">
            "{{ proj.overview }}"
          </p>

          <button @click="openDetails(proj)" class="group/btn inline-flex items-center gap-4 font-medium transition-colors" style="color: var(--color-text-primary)">
            <span class="text-sm tracking-widest uppercase group-hover/btn:text-[var(--color-accent)]">View Case Study</span>
            <div class="w-10 h-10 rounded-full border flex items-center justify-center group-hover/btn:border-[var(--color-accent)] transition-all" style="border-color: var(--color-border)">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
            </div>
          </button>
        </div>

        <div class="lg:col-span-6 order-1" :class="idx % 2 === 0 ? '' : 'lg:order-2'">
          <div @click="openDetails(proj)" 
            class="cursor-pointer aspect-video rounded-[2.5rem] overflow-hidden border relative transition-all duration-700"
            style="background: var(--color-bg-secondary); border-color: var(--color-border); box-shadow: var(--shadow-lg);">
            <img :src="proj.image" class="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" :alt="proj.title" />
            <div class="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)] via-transparent to-transparent opacity-60"></div>
          </div>
        </div>
      </div>
    </div>

    <Transition name="modal-fade">
      <div v-if="selectedProject" 
        class="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-10 backdrop-blur-xl"
        style="background: rgba(11, 15, 26, 0.95);"
        @click.self="closeDetails"
      >
        <div class="w-full max-w-5xl max-h-full overflow-y-auto rounded-[2.5rem] relative custom-scrollbar border"
             style="background: var(--color-bg-secondary); border-color: var(--color-border); box-shadow: var(--shadow-lg);">
          
          <button @click="closeDetails" class="fixed md:absolute top-6 right-6 p-3 rounded-full transition-colors z-[1001]"
                  style="background: var(--color-surface); color: var(--color-text-secondary);">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>

          <div class="p-8 md:p-16 space-y-12">
            <div class="space-y-6">
              <div class="flex flex-wrap gap-2">
                 <span v-for="tag in selectedProject.tags" :key="tag" 
                       class="text-[10px] px-4 py-1 rounded-full font-bold uppercase tracking-widest border"
                       style="background: var(--color-accent-soft); color: var(--color-accent); border-color: var(--color-accent-soft);">
                  {{ tag }}
                </span>
              </div>
              <h2 class="text-4xl md:text-5xl font-bold tracking-tighter" style="color: var(--color-text-primary)">{{ selectedProject.title }}</h2>
              <p class="text-xl leading-relaxed italic border-l-2 pl-6" 
                 style="color: var(--color-text-secondary); border-color: var(--color-accent);">
                {{ selectedProject.overview }}
              </p>
            </div>

            <img :src="selectedProject.image" class="w-full aspect-video object-cover rounded-[2rem] border" style="border-color: var(--color-border)" />
            
            <div class="grid md:grid-cols-2 gap-16">
              <div class="space-y-6">
                <h4 class="font-bold uppercase tracking-widest text-xs" style="color: var(--color-text-primary)">Core Features</h4>
                <ul class="space-y-4">
                  <li v-for="feat in selectedProject.features" :key="feat" class="flex gap-4 text-base" style="color: var(--color-text-secondary)">
                     <span class="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style="background: var(--color-accent)"></span>
                     {{ feat }}
                  </li>
                </ul>
              </div>
              <div class="space-y-6">
                <h4 class="font-bold uppercase tracking-widest text-xs" style="color: var(--color-text-primary)">Architecture Impact</h4>
                <p class="text-lg leading-relaxed" style="color: var(--color-text-secondary)">{{ selectedProject.impact }}</p>
                
                <div class="pt-6 border-t flex gap-12" style="border-color: var(--color-border)">
                  <div>
                    <span class="block text-[10px] uppercase font-bold tracking-widest mb-1" style="color: var(--color-text-muted)">Role</span>
                    <span style="color: var(--color-text-primary)" class="text-sm">Full Stack Engineer</span>
                  </div>
                  <div>
                    <span class="block text-[10px] uppercase font-bold tracking-widest mb-1" style="color: var(--color-text-muted)">Status</span>
                    <span style="color: var(--color-accent)" class="text-sm">Production Ready</span>
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
.modal-fade-enter-active, .modal-fade-leave-active { transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1); }
.modal-fade-enter-from, .modal-fade-leave-to { opacity: 0; transform: scale(0.95); }

.custom-scrollbar::-webkit-scrollbar { width: 6px; }
.custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
.custom-scrollbar::-webkit-scrollbar-thumb { 
  background: var(--color-border-strong); 
  border-radius: 10px; 
}
</style>