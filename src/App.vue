<script setup>
import { defineAsyncComponent, ref, onMounted } from "vue";//With lazy import:

//after creating a composable file for useLazySection
import { useLazySection } from "@/composables/useLazySection";
const { targetRef: projectsRef, isVisible: showProjects } = useLazySection();
// const { targetRef: resumeRef, isVisible: showResume } = useLazySection();

/* composables */
import { useScroll } from "@/composables/useScroll";
import { useScrollSpy } from "@/composables/useScrollSpy";

/* layout */
import AppHeader from "@/components/layout/AppHeader.vue";
import AppFooter from "@/components/layout/AppFooter.vue";

/* sections (light = keep normal) */
import HeroSection from "@/components/sections/HeroSection.vue";
import AboutSection from "@/components/sections/AboutSection.vue";
import ServicesSection from "@/components/sections/ServicesSection.vue";
import SkillsSection from "@/components/sections/SkillsSection.vue";
import ContactSection from "@/components/sections/ContactSection.vue";

/*lazy-loaded (heavy) */
// const ResumeSection = defineAsyncComponent(() =>
//   import("@/components/sections/ResumeSection.vue")
// );

const ProjectsSection = defineAsyncComponent(() =>
  import("@/components/sections/ProjectsSection.vue")
);



/* data */
import { hero } from "@/data/hero";
import { about } from "@/data/about";
// import { resume } from "@/data/resume";
import { skills } from "@/data/skills";
import { contact } from "@/data/contact";
import { sections } from "@/data/sections";
import { projects } from "@/data/projects";
import { services } from "@/data/services";


/* composables usage */
const { scrollTo } = useScroll();

const getHeaderOffset = () => {
  const header = document.querySelector("header");
  return header ? header.offsetHeight : 80; // fallback
};

const { activeSection } = useScrollSpy({
  ids: sections.map((s) => s.id),
  offset: getHeaderOffset(),
  debug: true, // remove in production
});

const handleNavigate = (id) => {
  scrollTo(id);
};
</script>
<template>
  <div class="bg-[#FDFDFD] text-slate-800 font-sans">

    <!-- HEADER -->
    <AppHeader :sections="sections" :activeSection="activeSection" @navigate="handleNavigate" />

    <!-- MAIN -->
    <main>
      <HeroSection id="hero" :hero="hero" />
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