<template>
  <section class="min-h-screen bg-[#FDFDFD] flex items-center justify-center px-6 py-12 selection:bg-blue-100">
    <div class="max-w-4xl w-full">
      
      <div class="flex items-center gap-3 mb-10 justify-center lg:justify-start">
        <span class="flex h-2 w-2 rounded-full bg-emerald-500"></span>
        <span class="text-xs font-bold tracking-widest text-slate-400 uppercase">Available for Senior Opportunities</span>
      </div>

      <div class="space-y-8 text-center lg:text-left">
        <div class="space-y-4">
          <h1 class="text-5xl md:text-6xl font-light text-slate-900 tracking-tight leading-tight">
            Hello, I’m <span class="font-semibold italic">Win Myat Phyo</span>.
          </h1>
          <h2 class="text-3xl md:text-4xl font-medium text-slate-500">
            A Full Stack Developer focusing on <span class="text-blue-600">scalable architectures</span>.
          </h2>
        </div>

        <p class="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
          With 4+ years of coding experience[cite: 1], I engineer high-performance systems using 
          <span class="font-medium text-slate-800 underline decoration-slate-200 underline-offset-4">Laravel</span>, 
          <span class="font-medium text-slate-800 underline decoration-slate-200 underline-offset-4">ASP.NET Core</span>, and 
          <span class="font-medium text-slate-800 underline decoration-slate-200 underline-offset-4">Vue.js</span>. 
          I prioritize SOLID principles [cite: 9, 27] to build software that is as maintainable as it is powerful.
        </p>

        <div class="flex flex-wrap gap-x-6 gap-y-3 justify-center lg:justify-start text-sm font-medium text-slate-400">
          <span class="hover:text-blue-600 transition-colors">PHP / Laravel</span>
          <span class="text-slate-200">•</span>
          <span class="hover:text-indigo-600 transition-colors">C# / ASP.NET Core</span>
          <span class="text-slate-200">•</span>
          <span class="hover:text-emerald-600 transition-colors">Vue.js / Tailwind</span>
          <span class="text-slate-200">•</span>
          <span class="hover:text-slate-900 transition-colors">MySQL</span>
          <span class="text-slate-200">•</span>
          <span class="hover:text-slate-900 transition-colors">Docker</span>
        </div>

        <div class="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-6">
          <router-link to="/projects" class="text-slate-900 font-bold border-b-2 border-slate-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition-all">
            View Projects
          </router-link>
          <a href="/resume.pdf" target="_blank" class="text-slate-500 font-medium hover:text-slate-900 transition-colors">
            Download CV
          </a>
          <router-link to="/contact" class="text-slate-500 font-medium hover:text-slate-900 transition-colors">
            Get in touch
          </router-link>
        </div>
      </div>

      <div class="mt-24 pt-12 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <p class="text-2xl font-semibold text-slate-900">4+</p>
          <p class="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Years Coding [cite: 1]</p>
        </div>
        <div>
          <p class="text-2xl font-semibold text-slate-900">2+</p>
          <p class="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Professional Experience [cite: 32]</p>
        </div>
        <div>
          <p class="text-2xl font-semibold text-slate-900">B.C.Sc</p>
          <p class="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Graduate [cite: 52]</p>
        </div>
        <div>
          <p class="text-2xl font-semibold text-slate-900">IT Vision Hub</p>
          <p class="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Experience [cite: 31]</p>
        </div>
      </div>
    </div>
  </section>
</template>