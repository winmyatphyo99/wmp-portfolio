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
    class="relative pt-28 pb-20 bg-primary overflow-hidden"
  >

    <!-- Background -->
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(168,85,247,0.10),transparent_50%)]"
    ></div>

    <div class="container-system relative z-10">

      <!-- HEADER -->
      <div class="text-center max-w-2xl mx-auto mb-20 space-y-4">

        <p class="text-xs uppercase tracking-[0.3em] text-accent font-bold">
          {{ contact.header.status }}
        </p>

        <h2
          class="max-w-2xl text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-primary leading-tight tracking-tight"
        >
          Let’s build something
          <span class="text-gradient">
            {{ contact.header.highlight }}
          </span>
        </h2>

        <p class="text-secondary leading-relaxed">
          {{ contact.intro.subtitle }}
        </p>

      </div>

      <!-- GRID -->
      <div class="grid lg:grid-cols-12 gap-12 items-start">

        <!-- LEFT -->
        <div class="lg:col-span-5 space-y-12">

          <!-- CAPABILITIES -->
          <div class="space-y-6">

            <h4
              class="text-[10px] font-black uppercase tracking-[0.3em] text-muted"
            >
              Available Expertise
            </h4>

            <div class="flex flex-wrap gap-3">

              <span
                v-for="cap in contact.capabilities"
                :key="cap.name"
                class="px-4 py-2 text-xs font-bold rounded-xl surface text-secondary"
              >
                {{ cap.name }}
              </span>

            </div>

          </div>

          <!-- STATUS -->
          <div
            class="glass border border-border rounded-3xl p-6 flex items-center gap-6"
          >

            <div
              class="flex-shrink-0 w-12 h-12 rounded-full border border-accent/30 flex items-center justify-center"
            >
              <div class="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
            </div>

            <div>

              <p
                class="text-[10px] font-black uppercase tracking-widest text-muted"
              >
                Current Status
              </p>

              <p class="text-sm font-semibold text-primary italic">
                {{ contact.status.value }} — {{ contact.status.year }}
              </p>

            </div>

          </div>

        </div>

        <!-- RIGHT -->
        <div class="lg:col-span-7">

          <div
            @click="copyEmail"
            class="card glass glow-hover p-8 md:p-10 space-y-6 cursor-pointer"
          >

            <!-- EMAIL -->
            <div class="space-y-3">

              <p
                class="text-xs uppercase tracking-[0.25em] text-muted font-bold"
              >
                {{ contact.email.label }}
              </p>

              <h3
                class="text-sm md:text-base font-medium text-primary break-all hover:text-accent transition-colors"
              >
                {{ contact.email.value }}
              </h3>

              <p class="text-sm text-secondary">
                Click to copy email
              </p>

            </div>

            <!-- COPY FEEDBACK -->
            <Transition name="fade">
              <p v-if="copied" class="text-sm text-accent font-medium">
                ✔ {{ contact.email.copyText }}
              </p>
            </Transition>

            <!-- DIVIDER -->
            <div class="border-t border-border"></div>

            <!-- LINKS -->
            <div class="grid sm:grid-cols-2 gap-4">

              <a
                v-for="link in contact.links"
                :key="link.name"
                :href="link.url"
                target="_blank"
                rel="noopener noreferrer"
                class="surface rounded-2xl hover:border-accent flex justify-between items-center p-4 transition-all group"
              >

                <span class="text-secondary group-hover:text-primary transition">
                  {{ link.name }}
                </span>

                <span
                  class="text-muted group-hover:text-accent transition"
                >
                  ↗
                </span>

              </a>

            </div>

          </div>

        </div>

      </div>

    </div>

  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>