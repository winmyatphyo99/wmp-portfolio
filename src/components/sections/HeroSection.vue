<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  hero: Object
});

// Define the scrollTo function
const scrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.warn(`Scroll target #${id} not found.`);
  }
};

/* =========================
   TYPING SYSTEM
========================= */
const texts = [
  "Hi,I'm Win Myat Phyo",
  "Clean Code • Scalable Systems",
  "Full Stack Laravel Developer",
  "Backend System Builder",
  "API & Database Architect"
];

const typing = ref("");
let index = 0;
let char = 0;
let isDeleting = false;

function typeLoop() {
  const current = texts[index];

  if (!isDeleting) {
    typing.value = current.slice(0, char++);
    if (char > current.length) {
      isDeleting = true;
      setTimeout(typeLoop, 2000);
      return;
    }
  } else {
    typing.value = current.slice(0, char--);
    if (char === 0) {
      isDeleting = false;
      index = (index + 1) % texts.length;
    }
  }
  setTimeout(typeLoop, isDeleting ? 40 : 80);
}

onMounted(() => {
  typeLoop();
});
</script>

<template>
  <section
  id="hero"
  v-motion
  :initial="{ opacity: 0, y: 60 }"
  :enter="{ opacity: 1, y: 0, transition: { duration: 700 } }"
  class="relative pt-25 pb-20 overflow-hidden"
  style="background-color: #05070A !important;"
>

    <div class="absolute inset-0 bg-grid opacity-30"></div>

    <div
      class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_50%_0%,_rgba(168,85,247,0.2),transparent_70%)]">
    </div>

    <div class="container-system relative z-10">
      <div class="grid lg:grid-cols-2 gap-16 items-center">

        <div class="space-y-8">
          <div
            class="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/20 shadow-lg">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute h-full w-full rounded-full bg-purple-500 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span class="text-[10px] tracking-[0.2em] uppercase font-bold text-white/90">
              {{ typing }}<span class="animate-pulse text-purple-400">|</span>
            </span>
          </div>

          <div class="space-y-6">
            <h2 class="max-w-xl text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-white leading-tight tracking-tight">
              {{ hero.title.line1 }}<br />
              <span class="text-gradient">{{ hero.title.highlight }}</span>
            </h2>

            <p class="text-base md:text-lg text-gray-400 font-normal max-w-lg leading-relaxed">
              {{ hero.description.text }}
            </p>
          </div>

          <div class="flex items-center gap-6">
            <button @click="scrollTo(hero.cta.primary.target)"
              class="px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:-translate-y-1">
              {{ hero.cta.primary.label }}
            </button>

            <div class="flex gap-3">
              <a v-for="social in hero.cta.socials" :key="social.name" :href="social.url" target="_blank"
                class="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:border-accent-orange/50 hover:bg-accent-orange/10 transition-all group">
                <component :is="social.icon" :color="social.color"
                  class="w-5 h-5 transition-all group-hover:opacity-100"
                  @mouseover="$event.target.style.fill = social.hoverColor"
                  @mouseleave="$event.target.style.fill = social.color" />
              </a>
            </div>
          </div>
        </div>

        <div class="relative">
          <div class="absolute -inset-4 bg-purple-600/20 blur-[80px] rounded-full"></div>

          <div class="relative bg-[#0F1117] border border-white/10 rounded-[2.5rem] p-8 shadow-2xl">
            <div class="flex gap-2 mb-8">
              <div class="w-3 h-3 rounded-full bg-red-500/40"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500/40"></div>
              <div class="w-3 h-3 rounded-full bg-green-500/40"></div>
            </div>

            <div class="w-full h-95 rounded-2xl overflow-hidden mb-8 bg-slate-900 border border-white/5">
              <img :src="hero.profile.image" class="w-full h-full object-cover transition-all"
                @error="(e) => e.target.src = 'https://ui-avatars.com/api/?name=Win+Myat+Phyo&background=a855f7&color=fff'" />
            </div>

            <div class="space-y-5 text-[12px] tracking-wider">
              <div class="flex justify-between border-b border-white/5 pb-3">
                <span class="text-slate-500">NAME</span>
                <span class="text-purple-400 font-bold uppercase">{{ hero.profile.name }}</span>
              </div>
              <div class="flex justify-between border-b border-white/5 pb-3">
                <span class="text-slate-500">ROLE</span>
                <span class="text-slate-200 font-medium">{{ hero.profile.role }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-slate-500">LOCATION</span>
                <span class="text-slate-400">{{ hero.profile.location.display }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>