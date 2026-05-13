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
  <section id="projects" class="relative pt-28 pb-20 bg-primary border-t border-border overflow-hidden">

    <!-- Background -->
    <div class="absolute inset-0 bg-grid opacity-10"></div>
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(168,85,247,0.03),transparent_70%)]"></div>

    <div class="container-system relative z-10">

      <!-- HEADER -->
      <div class="mb-16 space-y-10">

        <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">

          <div class="space-y-4">

            <div class="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass border border-border">
              <span class="status-dot"></span>
              <span class="text-[11px] uppercase tracking-[0.3em] font-bold text-muted">
                Portfolio
              </span>
            </div>

            <h2 class="max-w-2xl text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-primary leading-tight tracking-tight">
              Production <span class="text-gradient">Systems</span>
            </h2>

          </div>

          <button @click="clearAll" v-show="isFiltered"
            class="flex items-center gap-3 px-6 py-3 rounded-full border border-accent/30 bg-accent-soft hover:bg-accent transition-all group">
            <span class="text-[10px] font-black uppercase tracking-widest text-accent group-hover:text-black">
              Reset Filters
            </span>

            <svg class="w-3 h-3 text-accent group-hover:text-black" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" stroke-width="3" />
            </svg>
          </button>

        </div>

        <!-- FILTER BAR -->
        <div class="grid lg:grid-cols-12 rounded-3xl border border-border bg-surface overflow-hidden">

          <div class="lg:col-span-8 p-4 flex flex-wrap gap-2 items-center">

            <span class="text-[10px] font-black uppercase tracking-[0.2em] text-muted px-4">
              Categories
            </span>

            <button v-for="cat in categories" :key="cat" @click="activeFilter = cat"
              class="px-5 py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-widest transition-all" :class="activeFilter === cat
                ? 'bg-primary text-primary scale-105'
                : 'text-muted hover:text-primary hover:bg-surface'">
              {{ cat }}
            </button>

          </div>

          <div class="lg:col-span-4 border-l border-border p-3">

            <div class="relative">
              <input v-model="searchQuery" type="text" placeholder="Search architecture..."
                class="w-full bg-surface border border-border text-primary py-3 pl-12 pr-4 rounded-2xl focus:outline-none focus:border-accent" />

              <svg class="absolute left-4 top-3.5 text-muted" width="18" height="18" fill="none" stroke="currentColor"
                stroke-width="2.5" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>

          </div>

        </div>
      </div>

      <!-- GRID -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">

        <div v-if="filteredProjects.length === 0"
          class="col-span-full py-32 text-center rounded-3xl border border-dashed border-border bg-surface">

          <p class="text-muted text-sm">
            No production systems match your query.
          </p>

          <button @click="clearAll"
            class="mt-4 text-accent text-xs font-black uppercase tracking-widest hover:text-primary">
            Clear all filters
          </button>

        </div>

        <div v-for="(proj, idx) in filteredProjects" :key="proj.title" @click="openDetails(proj)"
          class="group cursor-pointer" v-motion :initial="{ opacity: 0, y: 40 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: idx * 80 } }">

          <div class="relative aspect-[16/10] rounded-[2rem] overflow-hidden border border-border bg-primary">

            <picture>
              <source :srcset="proj.imageWebp" type="image/webp" />
              <img :src="proj.image"
                class="w-full h-full object-cover opacity-60 group-hover:scale-110 transition duration-1000" />
            </picture>

            <div class="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80"></div>

            <div class="absolute top-6 right-6 flex gap-2">
              <span v-for="tag in proj.tags.slice(0, 2)" :key="tag"
                class="px-4 py-1.5 rounded-full glass text-[10px] font-black text-accent uppercase">
                {{ tag }}
              </span>
            </div>

            <div class="absolute bottom-8 left-8 right-8">
              <span class="text-[10px] font-black text-accent uppercase tracking-[0.4em] mb-2 block">
                System 0{{ idx + 1 }}
              </span>

              <h3 class="text-2xl font-black text-primary group-hover:text-accent transition-colors">
                {{ proj.title }}
              </h3>
            </div>

          </div>

        </div>
      </div>

    </div>

    <!-- MODAL -->
    <Transition name="modal">
      <div v-if="selectedProject" class="fixed inset-0 z-[999] flex items-center justify-center p-4 backdrop-blur-xl"
        @click.self="closeDetails">

        <div class="w-full max-w-4xl bg-primary border border-border rounded-[2.2rem] overflow-hidden">

          <div class="p-6 border-b border-border flex justify-between bg-surface">

            <span class="text-[10px] font-black text-accent uppercase tracking-[0.3em]">
              Technical Deep-Dive
            </span>

            <button @click="closeDetails" class="text-muted hover:text-primary">
              ✕
            </button>

          </div>

          <div class="max-h-[85vh] overflow-y-auto p-6 md:p-10">

            <div class="grid lg:grid-cols-2 gap-16">

              <!-- LEFT SIDE -->
              <div class="space-y-10">

                <!-- Title + Overview -->
                <div class="space-y-4">

                  <h2 class="text-2xl md:text-3xl font-black text-primary tracking-tight">
                    {{ selectedProject.title }}
                  </h2>

                  <p class="text-secondary leading-relaxed border-l-4 border-accent pl-6 md:pl-8">
                    {{ selectedProject.overview }}
                  </p>

                </div>

                <!-- Key Technical Features -->
                <div class="space-y-6">

                  <div class="flex items-center gap-3">

                    <div class="w-2 h-2 rounded-full bg-accent glow"></div>

                    <h4 class="text-xs font-black uppercase tracking-[0.25em] text-muted">
                      Key Technical Features
                    </h4>

                  </div>

                  <div class="grid gap-4">

                    <div v-for="feat in selectedProject.features" :key="feat"
                      class="flex items-start gap-4 p-4 rounded-2xl glass border border-border hover:border-accent transition-all">

                      <div class="mt-1.5 h-2 w-2 rounded-full bg-accent flex-shrink-0 glow"></div>

                      <span class="text-sm text-secondary leading-relaxed">
                        {{ feat }}
                      </span>

                    </div>

                  </div>

                </div>

              </div>

              <!-- RIGHT SIDE -->
              <div class="space-y-10">

                <img :src="selectedProject.image" class="rounded-3xl border border-border" />

                <div class="p-8 rounded-3xl glass border border-border space-y-4">

                  <h4 class="text-accent text-xs font-black uppercase tracking-[0.2em]">
                    Business Impact
                  </h4>

                  <p class="text-secondary">
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
.modal-enter-active,
.modal-leave-active {
  transition: all 0.6s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>