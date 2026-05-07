<script setup>
import { useClipboard } from "../../composables/useClipboard";

const { copied, copy } = useClipboard();

const props = defineProps({
  contact: Object
});

const copyEmail = () => {
  copy(props.contact.email.value);
};
</script>

<template>
  <section
    v-if="contact"
    id="contact"
    class="relative py-32 bg-primary overflow-hidden"
  >
    <!-- background glow -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(168,85,247,0.12),transparent_50%)]"></div>

    <div class="container-system relative z-10">

      <!-- HEADER (DATA DRIVEN) -->
      <div class="text-center max-w-2xl mx-auto mb-20 space-y-4">

        <p class="text-xs uppercase tracking-[0.3em] text-accent">
          {{ contact.header.status }}
        </p>

        <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.2] tracking-tight">
          Let’s build something
          <span class="text-gradient">{{ contact.header.highlight }}</span>
        </h2>

        <p class="text-secondary text-sm leading-relaxed">
          {{ contact.intro.subtitle }}
        </p>

      </div>

      <!-- MAIN GRID -->
      <div class="grid lg:grid-cols-12 gap-12 items-start">

        <!-- LEFT -->
        <div class="lg:col-span-5 space-y-12">
          <div class="space-y-6">
            <h4 class="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">Available Expertise</h4>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="cap in contact.capabilities"
                :key="cap.name"
                class="px-4 py-2 text-xs font-bold rounded-xl bg-white/5 border border-white/10 text-gray-300"
              >
                {{ cap.name }}
              </span>
            </div>
          </div>

          <div class="p-6 rounded-3xl bg-white/[0.02] border border-white/5 flex items-center gap-6">
            <div class="flex-shrink-0 w-12 h-12 rounded-full border border-cyan-500/30 flex items-center justify-center">
              <div class="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
            </div>
            <div>
              <p class="text-[10px] font-black uppercase tracking-widest text-white/30">Current Status</p>
              <p class="text-sm font-bold text-white italic">
                {{ contact.status.value }} — {{ contact.status.year }}
              </p>
            </div>
          </div>
        </div>

        <!-- RIGHT -->
        <div class="lg:col-span-7">

          <div
            @click="copyEmail"
            class="card glass glow-hover p-10 space-y-6 cursor-pointer"
          >

            <!-- EMAIL -->
            <div class="space-y-2">
              <p class="text-xs uppercase tracking-[0.25em] text-muted">
                {{ contact.email.label }}
              </p>

              <h3 class="text-sm md:text-base font-medium text-primary break-all group-hover:text-accent transition">
                {{ contact.email.value }}
              </h3>

              <p class="text-sm text-secondary">
                Click to copy email
              </p>
            </div>

            <!-- COPY FEEDBACK -->
            <Transition name="fade">
              <p v-if="copied" class="text-green-400 text-sm">
                ✔ {{ contact.email.copyText }}
              </p>
            </Transition>

            <div class="border-t border-border"></div>

            <!-- LINKS (DATA DRIVEN) -->
            <div class="grid sm:grid-cols-2 gap-4">

              <a
                v-for="link in contact.links"
                :key="link.name"
                :href="link.url"
                target="_blank"
                class="card surface hover:border-accent flex justify-between items-center p-4 transition"
              >
                <span class="text-secondary">{{ link.name }}</span>
                <span class="text-muted">↗</span>
              </a>

            </div>

          </div>

        </div>

      </div>

    </div>
  </section>
</template>