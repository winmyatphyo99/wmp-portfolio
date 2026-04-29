<template>
  <section class="min-h-screen py-24 px-6">
    <div class="max-w-5xl mx-auto">
      <header class="mb-20">
        <h1 class="text-6xl font-black text-slate-900 tracking-tighter">About.</h1>
        <div class="h-1.5 w-20 bg-blue-600 mt-4"></div>
      </header>

      <div class="grid lg:grid-cols-12 gap-16">
        <div class="lg:col-span-7 space-y-12">
          <div class="space-y-6 text-xl text-slate-600 leading-relaxed font-light">
            <p>
              I turn complex business logic into <span class="text-slate-900 font-medium">elegant digital architecture.</span> 
              With over 4 years of coding experience, I focus on the "why" as much as the "how."
            </p>
            <p>
              Specializing in the Laravel and ASP.NET Core ecosystems, I apply SOLID principles and the Service-Repository pattern to ensure systems remain maintainable for years.
            </p>
          </div>

          <div class="space-y-8">
            <h3 class="text-xs font-black uppercase tracking-widest text-slate-400">Professional Journey</h3>
            <div class="relative pl-8 border-l border-slate-100 space-y-12">
              <div>
                <div class="absolute -left-[5px] w-2 h-2 rounded-full bg-blue-600"></div>
                <h4 class="text-xl font-bold text-slate-900">ITVision Hub</h4>
                <p class="text-sm font-bold text-blue-600 uppercase tracking-widest mt-1">Full Stack Lead • 2024 - Present</p>
                <p class="mt-4 text-slate-500 leading-relaxed">Architecting enterprise-grade Training Management Systems and POS platforms with a focus on RBAC and performance.</p>
              </div>
              <div>
                <div class="absolute -left-[5px] w-2 h-2 rounded-full bg-slate-200"></div>
                <h4 class="text-xl font-bold text-slate-900">B.C.Sc Graduation</h4>
                <p class="text-sm font-bold text-slate-400 uppercase tracking-widest mt-1">Class of 2024</p>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-5 space-y-6">
          <div class="p-8 bg-slate-50 rounded-3xl border border-slate-100">
            <h4 class="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">Technical Mastery</h4>
            <div class="space-y-4">
              <div v-for="(level, skill) in {'Backend Architecture': 'Expert', 'Database Design': 'Advanced', 'Frontend UX': 'Modern'}" :key="skill" class="flex justify-between items-center">
                <span class="text-sm font-bold text-slate-700">{{ skill }}</span>
                <span class="text-[10px] font-black text-blue-600 bg-white px-2 py-1 rounded-md shadow-sm">{{ level }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>