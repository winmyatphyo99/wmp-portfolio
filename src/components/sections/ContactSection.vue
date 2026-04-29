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
    class="relative py-32 bg-[#04060C] overflow-hidden"
  >
    <!-- background glow -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(168,85,247,0.12),transparent_50%)]"></div>

    <div class="container-system relative z-10">

      <!-- SaaS HEADER (CENTERED ONLY HERE) -->
      <div class="text-center max-w-2xl mx-auto mb-20 space-y-4">

        <p class="text-xs uppercase tracking-[0.3em] text-purple-400">
          Collaboration
        </p>

        <h2 class="text-4xl md:text-5xl font-bold text-white leading-tight">
          Let’s build something
          <span class="text-gradient">meaningful</span>
        </h2>

        <p class="text-slate-400 text-sm leading-relaxed">
          I design scalable backend systems, APIs, and architectures with performance and maintainability in mind.
        </p>

      </div>

      <!-- MAIN GRID (SaaS STRUCTURE) -->
      <div class="grid lg:grid-cols-12 gap-12 items-start">

        <!-- LEFT: capability / trust -->
        <div class="lg:col-span-5 space-y-10">

          <div class="space-y-4">
            <p class="text-xs uppercase tracking-widest text-slate-500">
              Capabilities
            </p>

            <div class="flex flex-wrap gap-3">
              <span class="chip">Laravel Architecture</span>
              <span class="chip">API Design</span>
              <span class="chip">Queue Systems</span>
              <span class="chip">Database Optimization</span>
            </div>
          </div>

          <div class="text-xs text-slate-600 font-mono">
            Status: Available for selected projects • 2026
          </div>

        </div>

        <!-- RIGHT: PRIMARY CONTACT CARD -->
        <div class="lg:col-span-7">

          <div
            @click="copyEmail"
            class="panel group cursor-pointer space-y-5"
          >

            <div class="space-y-2">
              <p class="panel-label">Primary Contact Channel</p>

              <h3 class="text-2xl md:text-3xl font-bold text-white group-hover:text-purple-400 transition break-all">
                {{ contact.email.value }}
              </h3>

              <p class="text-sm text-slate-500">
                Click to copy email
              </p>
            </div>

            <!-- copied feedback -->
            <Transition name="fade">
              <p v-if="copied" class="text-green-400 text-sm">
                ✔ Email copied
              </p>
            </Transition>

            <div class="border-t border-white/5"></div>

            <!-- LINKS -->
            <div class="grid sm:grid-cols-2 gap-4">

              <a
                v-for="link in contact.links"
                :key="link.name"
                :href="link.url"
                target="_blank"
                class="action-card"
              >
                <span>{{ link.name }}</span>
                <span class="arrow">↗</span>
              </a>

            </div>

          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
.panel {
  padding: 2rem;
  border-radius: 1.5rem;
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.06);
  backdrop-filter: blur(16px);
  transition: all 0.3s ease;
}

.panel:hover {
  border-color: rgba(168,85,247,0.35);
  transform: translateY(-3px);
}

.panel-label {
  font-size: 10px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #64748b;
}

.chip {
  font-size: 11px;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(168,85,247,0.12);
  color: #c4b5fd;
  border: 1px solid rgba(168,85,247,0.2);
}

.action-card {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 1rem;
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.05);
  transition: all 0.3s ease;
  color: #cbd5e1;
}

.action-card:hover {
  border-color: rgba(168,85,247,0.35);
  background: rgba(168,85,247,0.05);
  transform: translateY(-2px);
}

.arrow {
  opacity: 0.6;
  transition: all 0.3s ease;
}

.action-card:hover .arrow {
  transform: translate(3px, -3px);
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(6px);
}
</style>