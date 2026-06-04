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

const categories = ["All", "Laravel", "Tailwind CSS", "PHP MVC", "MySQL"];

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
  <section
    id="projects"
    class="relative pt-28 pb-20 bg-primary border-t border-border overflow-hidden"
  >
    <!-- Background -->
    <div class="absolute inset-0 bg-grid opacity-10"></div>
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(168,85,247,0.03),transparent_70%)]"
    ></div>

    <div class="container-system relative z-10">
      <!-- HEADER -->
      <div class="mb-16 space-y-10">
        <div
          class="flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
        >
          <div class="space-y-4">
            <div
              class="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass border border-border"
            >
              <span class="status-dot"></span>
              <span
                class="text-[11px] uppercase tracking-[0.3em] font-bold text-muted"
              >
                Portfolio
              </span>
            </div>

            <h2
              class="max-w-2xl text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-primary leading-tight tracking-tight"
            >
              Production <span class="text-gradient">Systems</span>
            </h2>
          </div>

          <button
            @click="clearAll"
            v-show="isFiltered"
            class="flex items-center gap-3 px-6 py-3 rounded-full border border-accent/30 bg-accent-soft hover:bg-accent transition-all group"
          >
            <span
              class="text-[10px] font-black uppercase tracking-widest text-accent group-hover:text-black"
            >
              Reset Filters
            </span>

            <svg
              class="w-3 h-3 text-accent group-hover:text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6 18L18 6M6 6l12 12" stroke-width="3" />
            </svg>
          </button>
        </div>

        <!-- FILTER BAR -->
        <div
          class="grid lg:grid-cols-12 rounded-3xl border border-border bg-surface overflow-hidden"
        >
          <div class="lg:col-span-8 p-4 flex flex-wrap gap-2 items-center">
            <span
              class="text-[10px] font-black uppercase tracking-[0.2em] text-muted px-4"
            >
              Categories
            </span>

            <button
              v-for="cat in categories"
              :key="cat"
              @click="activeFilter = cat"
              class="px-5 py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-widest transition-all"
              :class="
                activeFilter === cat
                  ? 'bg-primary text-primary scale-105'
                  : 'text-muted hover:text-primary hover:bg-surface'
              "
            >
              {{ cat }}
            </button>
          </div>

          <div class="lg:col-span-4 border-l border-border p-3">
            <div class="relative">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search architecture..."
                class="w-full bg-surface border border-border text-primary py-3 pl-12 pr-4 rounded-2xl focus:outline-none focus:border-accent"
              />

              <svg
                class="absolute left-4 top-3.5 text-muted"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- GRID -->
      <!-- GRID: Forces 2 columns on tablets (md) and desktops (lg) -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
        <!-- Empty State -->
        <div
          v-if="filteredProjects.length === 0"
          class="col-span-full py-32 text-center rounded-3xl border border-dashed border-border bg-surface"
        >
          <p class="text-muted text-sm">
            No production systems match your query.
          </p>
          <button
            @click="clearAll"
            class="mt-4 text-accent text-xs font-black uppercase tracking-widest hover:text-primary"
          >
            Clear all filters
          </button>
        </div>

        <!-- Project Card -->
        <div
          v-for="(proj, idx) in filteredProjects"
          :key="proj.title"
          @click="openDetails(proj)"
          class="group cursor-pointer w-full"
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: idx * 80 } }"
        >
          <!-- CHANGED: Professional Browser Card -->
          <div
            class="h-full flex flex-col overflow-hidden rounded-[2rem] border border-border bg-surface transition-all duration-500 hover:border-accent/50 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(168,85,247,0.18)]"
          >
            <!-- ADDED: Browser Header -->
            <div
              class="flex items-center gap-2 px-5 py-4 border-b border-border bg-primary"
            >
              <span class="w-3 h-3 rounded-full bg-red-500"></span>
              <span class="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span class="w-3 h-3 rounded-full bg-green-500"></span>

              <div
                class="ml-4 flex items-center flex-1 h-7 px-4 rounded-full bg-surface border border-border"
              >
                <span class="text-[10px] text-muted truncate">
                  {{ proj.title }}
                </span>
              </div>
            </div>

            <!-- CHANGED: Screenshot Area -->
            <div class="aspect-video bg-black">
              <picture>
                <source :srcset="proj.imageWebp" type="image/webp" />

                <img
                  :src="proj.image"
                  :alt="proj.title"
                  class="w-full h-full object-contain bg-slate-950 p-2 transition-transform duration-700 group-hover:scale-105"
                />
              </picture>
            </div>

            <!-- ADDED: Content Area -->
            <div class="p-6 flex flex-col flex-1">
              <div
                class="mb-3 text-[10px] uppercase tracking-[0.25em] font-black text-accent"
              >
                {{ proj.category }}
              </div>
              <h3
                class="text-lg font-bold text-primary group-hover:text-accent transition-colors"
              >
                {{ proj.title }}
              </h3>

              <p
                class="mt-3 min-h-[56px] text-sm text-secondary line-clamp-2 leading-relaxed"
              >
                {{ proj.overview }}
              </p>

              <!-- ADDED: Tags Below Content -->
              <div class="flex flex-wrap gap-2 mt-5">
                <span
                  v-for="tag in proj.tags"
                  :key="tag"
                  class="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-[10px] font-bold uppercase tracking-wider text-accent"
                >
                  {{ tag }}
                </span>
              </div>
              <div class="mt-auto pt-6 flex items-center justify-between">
                <span
                  class="text-accent text-xs font-black uppercase tracking-widest"
                >
                  View Details →
                </span>

                <a
                  v-if="proj.demoUrl"
                  :href="proj.demoUrl"
                  target="_blank"
                  @click.stop
                  class="text-xs font-bold text-primary hover:text-accent"
                >
                  Live Demo ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- MODAL -->
    <Transition name="modal">
      <div
        v-if="selectedProject"
        class="fixed inset-0 z-[999] flex items-center justify-center p-4 backdrop-blur-xl"
        @click.self="closeDetails"
      >
        <div
          class="w-full max-w-4xl bg-primary border border-border rounded-[2.2rem] overflow-hidden"
        >
          <div
            class="p-6 border-b border-border flex justify-between bg-surface"
          >
            <button @click="closeDetails" class="text-muted hover:text-primary">
              ✕
            </button>
          </div>

          <div class="max-h-[85vh] overflow-y-auto p-6 md:p-10">
            <div class="grid lg:grid-cols-2 gap-10">
              <!-- LEFT SIDE -->
              <div class="space-y-10">
                <!-- Title + Overview -->
                <div class="space-y-4">
                  <div
                    class="text-accent text-xs font-black uppercase tracking-[0.25em]"
                  >
                    {{ selectedProject.category }}
                  </div>

                  <h2 class="text-2xl font-bold text-primary leading-tight">
                    {{ selectedProject.title }}
                  </h2>
                  <div class="flex gap-3">
                    <a
                      :href="selectedProject.demoUrl"
                      target="_blank"
                      class="btn-primary"
                    >
                      Live Demo ↗
                    </a>

                    <a
                      :href="selectedProject.githubUrl"
                      target="_blank"
                      class="btn-secondary"
                    >
                      GitHub
                    </a>
                  </div>

                  <p
                    class="text-secondary leading-relaxed border-l-4 border-accent pl-6 md:pl-8"
                  >
                    {{ selectedProject.overview }}
                  </p>
                </div>

                <!-- Key Technical Features -->
                <div class="space-y-6">
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 rounded-full bg-accent glow"></div>

                    <h4
                      class="text-xs font-black uppercase tracking-[0.25em] text-muted"
                    >
                      Key Technical Features
                    </h4>
                  </div>

                  <div class="space-y-3">
                    <div
                      v-for="feat in selectedProject.features"
                      :key="feat"
                      class="flex items-start gap-3 p-3 rounded-xl bg-surface border border-border"
                    >
                      <div
                        class="mt-1.5 h-2 w-2 rounded-full bg-accent flex-shrink-0 glow"
                      ></div>

                      <span class="text-sm text-secondary leading-relaxed">
                        {{ feat }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- RIGHT SIDE -->
              <div class="space-y-10">
                <!-- CHANGED: Scrollable Browser Preview -->
                <div class="rounded-3xl overflow-hidden border border-border">
                  <!-- Browser Header -->
                  <div
                    class="flex items-center gap-2 px-5 py-4 border-b border-border bg-surface"
                  >
                    <span class="w-3 h-3 rounded-full bg-red-500"></span>
                    <span class="w-3 h-3 rounded-full bg-yellow-500"></span>
                    <span class="w-3 h-3 rounded-full bg-green-500"></span>

                    <div
                      class="ml-4 flex items-center flex-1 h-7 px-4 rounded-full bg-primary border border-border"
                    >
                      <span class="text-[10px] text-muted truncate">
                        {{ selectedProject.title }}
                      </span>
                    </div>
                  </div>

                  <div class="max-h-[500px] overflow-auto bg-slate-950">
                    <img
                      :src="selectedProject.image"
                      :alt="selectedProject.title"
                      class="w-full object-contain p-4"
                    />
                  </div>
                </div>

                <div
                  class="p-6 rounded-2xl bg-accent/5 border border-accent/20 space-y-3"
                >
                  <h4
                    class="text-accent text-xs font-black uppercase tracking-[0.2em]"
                  >
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
