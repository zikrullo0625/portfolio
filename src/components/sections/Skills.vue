
<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const skills = [
  { name: 'Vue.js', level: 0.88, color: '#06b6d4' },
  { name: 'Laravel', level: 0.82, color: '#ec4899' },
  { name: 'PHP', level: 0.78, color: '#60a5fa' },
  { name: 'Tailwind', level: 0.86, color: '#a855f7' },
  { name: 'AI pipeline', level: 0.78, color: '#60a5fa' },
  { name: 'JavaScript', level: 0.84, color: '#22c55e' }
]

onMounted(() => {
  gsap.from('.core', {
    scrollTrigger: {
      trigger: '#skills',
      start: 'top 70%',
    },
    y: 60,
    opacity: 0,
    duration: 1,
    stagger: 0.12,
    ease: 'power3.out',
  })
})
</script>

<template>
  <section id="skills" class="relative py-32 overflow-hidden">
    <div class="section-container">
      <p class="font-mono text-cyber-cyan text-sm uppercase tracking-widest mb-4">Skill Cores</p>
      <h2 class="section-title mb-10">
        Powering Ideas with <span class="text-gradient">Precision</span>
      </h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <button
          v-for="s in skills"
          :key="s.name"
          class="core glass-card p-6 text-left group relative overflow-hidden"
          type="button"
        >
          <div
            class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            :style="{
              background: `radial-gradient(circle at 30% 20%, ${s.color}33, transparent 60%)`,
            }"
          ></div>

          <p class="font-display font-bold text-xl relative z-10">{{ s.name }}</p>
          <p class="text-zinc-400 text-sm mt-2 relative z-10">Mastery Signal</p>

          <div class="mt-5 h-2 rounded-full bg-white/5 overflow-hidden relative z-10">
            <div class="h-full rounded-full" :style="{ width: s.level * 100 + '%', background: s.color }"></div>
          </div>

          <div class="mt-4 text-xs font-mono text-zinc-500 relative z-10">
            {{ Math.round(s.level * 100) }}% stabilized
          </div>
        </button>
      </div>
    </div>
  </section>
</template>

