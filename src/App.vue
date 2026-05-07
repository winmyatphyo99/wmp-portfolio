<script setup>
import { defineAsyncComponent, onMounted } from "vue";

// SEO HEAD
import { useHead } from "@vueuse/head";

useHead({
  title: "Wint Myat Phyo | Backend Developer",
  meta: [
    {
      name: "description",
      content:
        "Backend Engineer specializing in Laravel, scalable systems, modern APIs, and performant frontend experiences."
    },
    {
      name: "keywords",
      content:
        "Laravel, Backend Engineer, Vue.js, Portfolio, Full Stack Developer"
    },
    {
      property: "og:title",
      content: "Wint Myat Phyo Portfolio"
    },
    {
      property: "og:description",
      content:
        "Portfolio showcasing backend engineering, scalable systems, and modern web development."
    }
  ]
});

/* composables */
import { useLazySection } from "@/composables/useLazySection";
import { useScroll } from "@/composables/useScroll";
import { useScrollSpy } from "@/composables/useScrollSpy";

/* layout */
import AppHeader from "@/components/layout/AppHeader.vue";
import AppFooter from "@/components/layout/AppFooter.vue";

/* sections */
import HeroSection from "@/components/sections/HeroSection.vue";
import AboutSection from "@/components/sections/AboutSection.vue";
import ServicesSection from "@/components/sections/ServicesSection.vue";
import SkillsSection from "@/components/sections/SkillsSection.vue";
import ContactSection from "@/components/sections/ContactSection.vue";

/* lazy-loaded */
const ProjectsSection = defineAsyncComponent(() =>
  import("@/components/sections/ProjectsSection.vue")
);

/* data */
import { hero } from "@/data/hero";
import { about } from "@/data/about";
import { skills } from "@/data/skills";
import { contact } from "@/data/contact";
import { sections } from "@/data/sections";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

/* lazy section */
const { targetRef: projectsRef, isVisible: showProjects } =
  useLazySection();

/* scroll system */
const { scrollTo } = useScroll();

const getHeaderOffset = () => {
  const header = document.querySelector("header");
  return header?.offsetHeight ?? 80;
};

const { activeSection } = useScrollSpy({
  ids: sections.map((s) => s.id),
  offset: getHeaderOffset(),
  debug: false
});

/* navigation */
const handleNavigate = (id) => {
  scrollTo(id);
};

/* SAFE HASH SCROLL */
const scrollToHash = (hash) => {
  if (!hash) return false;

  const el = document.querySelector(hash);
  if (!el) return false;

  el.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

  return true;
};

onMounted(() => {
  const hash = window.location.hash;

  if (!hash) return;

  const scrollToHash = () => {
    const el = document.querySelector(hash);
    if (!el) return false;

    const header = document.querySelector("header");
    const offset = header?.offsetHeight ?? 80;

    const top =
      el.getBoundingClientRect().top +
      window.pageYOffset -
      offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });

    return true;
  };

  // first attempt
  if (scrollToHash()) return;

  // retry after DOM + async/lazy render
  setTimeout(() => {
    scrollToHash();
  }, 300);
});
</script>
<template>
  <div class="bg-[#FDFDFD] text-slate-800 font-sans">

    <!-- HEADER -->
    <AppHeader :sections="sections" :activeSection="activeSection" @navigate="handleNavigate" />

    <!-- MAIN -->
    <main>
      <HeroSection :hero="hero" />
      <AboutSection id="about" :about="about" />
      <SkillsSection id="skills" :skills="skills" />
      <ServicesSection id="services" :services="services" />
      <!-- For Lazy Load for projectionSection -->
      <section id="projects" ref="projectsRef">
        <Suspense>
          <template #default>
            <ProjectsSection v-if="showProjects" :projects="projects" />
          </template>

          <template #fallback>
            <div class="py-24 text-center text-slate-400">
              Loading projects...
            </div>
          </template>
        </Suspense>
      </section>
      <ContactSection id="contact" :contact="contact" />
    </main>

    <!-- FOOTER -->
    <AppFooter />

  </div>
</template>