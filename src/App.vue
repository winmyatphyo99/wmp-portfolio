<script setup>
/* composables */
import { useScroll } from "@/composables/useScroll";
import { useScrollSpy } from "@/composables/useScrollSpy";

/* layout */
import AppHeader from "@/components/layout/AppHeader.vue";
import AppFooter from "@/components/layout/AppFooter.vue";

/* sections */
import HeroSection from "@/components/sections/HeroSection.vue";
import AboutSection from "@/components/sections/AboutSection.vue";
import ResumeSection from "@/components/sections/ResumeSection.vue";
import ServicesSection from "@/components/sections/ServicesSection.vue";
import ProjectsSection from "@/components/sections/ProjectsSection.vue";
import ContactSection from "@/components/sections/ContactSection.vue";

/* data */
import { hero } from "@/data/hero";
import { about } from "@/data/about";
import { resume } from "@/data/resume";
import { contact } from "@/data/contact";
import { sections } from "@/data/sections";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

/* composables usage */
const { scrollTo } = useScroll();
const { activeSection } = useScrollSpy(sections.map(s => s.id));

/* handler */
const handleNavigate = (id) => {
  scrollTo(id);
};
</script>

<template>
  <div class="bg-[#FDFDFD] text-slate-800 font-sans">

    <!-- HEADER -->
    <AppHeader
      :sections="sections"
      :activeSection="activeSection"
      @navigate="handleNavigate"
    />

    <!-- MAIN -->
    <main>
      <HeroSection id="hero" :hero="hero" />
      <AboutSection id="about" :about="about" />
      <ResumeSection id="resume" :resume="resume" />
      <ServicesSection id="services" :services="services" />
      <ProjectsSection id="projects" :projects="projects" />
      <ContactSection id="contact" :contact="contact" />
    </main>

    <!-- FOOTER -->
    <AppFooter />

  </div>
</template>