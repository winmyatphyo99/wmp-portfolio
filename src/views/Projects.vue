<template>
  <section class="min-h-screen bg-[#05070a] pt-32 pb-24 px-6 font-sans">
    <div class="max-w-5xl mx-auto">
      <header class="mb-20 border-b border-white/5 pb-12">
        <div class="flex items-center gap-3 mb-6">
          <span class="text-[10px] font-mono text-slate-500 tracking-[0.3em] uppercase">Directory: /Archived_Builds</span>
          <div class="h-[1px] flex-grow bg-white/5"></div>
          <span class="text-[10px] font-mono text-slate-600">v1.2.0-STABLE</span>
        </div>
        <h1 class="text-6xl md:text-7xl font-black text-[#86e9f9] tracking-tighter mb-6">
          Project_Repositories
        </h1>
        <p class="text-slate-400 text-lg max-w-2xl leading-relaxed font-light">
          A technical catalog of developed systems. Each entry represents a structural solution to specific architectural challenges.
        </p>
      </header>

      <div class="grid md:grid-cols-2 gap-12">
        
        <div class="group relative border-l border-t border-white/10 p-8 pt-10 bg-gradient-to-br from-white/[0.02] to-transparent hover:border-[#86e9f9]/30 transition-all duration-500">
          <div class="absolute top-0 right-0 w-4 h-4 border-r border-t border-white/10 group-hover:border-[#86e9f9]/50"></div>
          
          <div class="flex justify-between items-center mb-8">
            <span class="font-mono text-[10px] tracking-widest text-[#86e9f9]">INTERNAL_TOOL // 001</span>
            <svg class="w-5 h-5 text-slate-600 group-hover:text-[#86e9f9] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          </div>

          <h3 class="text-3xl font-bold text-white mb-6 tracking-tight">Training Management System</h3>
          
          <div class="aspect-video mb-8 bg-slate-900/50 border border-white/5 rounded overflow-hidden relative group-hover:border-[#86e9f9]/20 transition-all">
             <div class="absolute inset-0 bg-[#86e9f9]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <div class="p-4">
                <div class="h-2 w-12 bg-white/10 rounded mb-2"></div>
                <div class="h-2 w-full bg-white/5 rounded"></div>
             </div>
          </div>

          <p class="text-slate-500 text-sm leading-relaxed mb-8 font-light">
            Production system for managing multi-role enrollments, automated holiday logic, and repository-patterned financial modules.
          </p>

          <div class="space-y-6">
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in ['Laravel', 'Vue.js', 'PostgreSQL', 'Docker']" :key="tech" class="px-3 py-1 bg-white/5 border border-white/10 text-[9px] font-mono text-slate-400 uppercase tracking-widest">{{ tech }}</span>
            </div>
            
            <div class="flex items-center justify-between pt-4 border-t border-white/5">
              <span class="text-[10px] font-mono text-slate-500 uppercase">Status: <span class="text-emerald-500">Deployed</span></span>
              <router-link to="/projects/tms" class="text-[10px] font-mono font-black text-[#86e9f9] uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
                View_Docs <span class="text-xs">↗</span>
              </router-link>
            </div>
          </div>
        </div>

        <div class="group relative border-l border-t border-white/10 p-8 pt-10 bg-gradient-to-br from-white/[0.02] to-transparent hover:border-[#86e9f9]/30 transition-all duration-500">
          <div class="absolute top-0 right-0 w-4 h-4 border-r border-t border-white/10 group-hover:border-[#86e9f9]/50"></div>
          
          <div class="flex justify-between items-center mb-8">
            <span class="font-mono text-[10px] tracking-widest text-[#86e9f9]">CONSUMER_LOGIC // 002</span>
            <svg class="w-5 h-5 text-slate-600 group-hover:text-[#86e9f9]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
          </div>

          <h3 class="text-3xl font-bold text-white mb-6 tracking-tight">Food Order System</h3>
          
          <div class="aspect-video mb-8 bg-slate-900/50 border border-white/5 rounded overflow-hidden relative group-hover:border-[#86e9f9]/20 transition-all">
             <div class="absolute inset-0 bg-[#86e9f9]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <div class="p-4 flex items-center justify-center h-full">
                <div class="w-16 h-16 border border-white/10 rounded-full flex items-center justify-center animate-pulse">
                   <div class="w-8 h-8 bg-[#86e9f9]/20 rounded-full"></div>
                </div>
             </div>
          </div>

          <p class="text-slate-500 text-sm leading-relaxed mb-8 font-light">
            High-integrity retail solution focusing on real-time inventory synchronization, RBAC, and daily accounting summaries.
          </p>

          <div class="space-y-6">
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in ['Next.js', 'Supabase', 'Tailwind', 'Redis']" :key="tech" class="px-3 py-1 bg-white/5 border border-white/10 text-[9px] font-mono text-slate-400 uppercase tracking-widest">{{ tech }}</span>
            </div>
            
            <div class="flex items-center justify-between pt-4 border-t border-white/5">
              <span class="text-[10px] font-mono text-slate-500 uppercase">Status: <span class="text-orange-500">Staging</span></span>
              <router-link to="/projects/pos" class="text-[10px] font-mono font-black text-[#86e9f9] uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
                View_Docs <span class="text-xs">↗</span>
              </router-link>
            </div>
          </div>
        </div>

      </div>

      <section class="mt-24 p-10 bg-white/5 border border-white/10 rounded-xl relative overflow-hidden">
        <div class="absolute top-0 right-0 p-4 opacity-10">
          <svg class="w-24 h-24 text-[#86e9f9]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2v-4h2v4zm4 0h-2v-6h2v6zm-8 0H8v-2h2v2z"/></svg>
        </div>
        
        <h2 class="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <span class="w-2 h-2 bg-[#86e9f9] shadow-[0_0_8px_#86e9f9]"></span>
          Architectural_Summary
        </h2>
        <p class="text-slate-400 text-sm max-w-2xl mb-10 font-light">
          Development focus remains on modular scalability. All current systems utilize containerized environments to ensure consistent deployment cycles across multiple nodes.
        </p>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <p class="text-3xl font-black text-white">12</p>
            <p class="text-[9px] font-mono text-slate-600 uppercase tracking-widest">Deployed_Units</p>
          </div>
          <div>
            <p class="text-3xl font-black text-white text-[#86e9f9]">99.8%</p>
            <p class="text-[9px] font-mono text-slate-600 uppercase tracking-widest">Uptime_Ratio</p>
          </div>
          <div class="col-span-2 md:col-span-1">
            <p class="text-3xl font-black text-white">4.2ms</p>
            <p class="text-[9px] font-mono text-slate-600 uppercase tracking-widest">Avg_Latency</p>
          </div>
        </div>
      </section>

      <button class="mt-12 w-full py-10 bg-[#00f2ff] hover:bg-white text-black font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-4 transition-all group">
        <span class="text-2xl group-hover:rotate-90 transition-transform">+</span>
        Initiate New Project Build
      </button>
    </div>
  </section>
</template>