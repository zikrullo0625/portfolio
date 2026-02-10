
<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const items = [
  { title: 'Commercial Experience', meta: '1.5 years at IOyandasoz', tone: 'purple' },
  { title: 'Hamroh Core Delivery', meta: 'Production-focused feature work', tone: 'cyan' },
  { title: 'UI Motion Discipline', meta: 'GSAP + micro-interactions', tone: 'pink' },
  { title: 'Full-Stack Range', meta: 'Laravel + Vue integration', tone: 'purple' },
]

onMounted(() => {
  gsap.from('.ach-item', {
    scrollTrigger: { trigger: '#achievements', start: 'top 70%' },
    y: 50,
    opacity: 0,
    duration: 0.9,
    stagger: 0.12,
    ease: 'power3.out',
  })
})

const toneBg = {
  purple: 'radial-gradient(circle at 30% 20%, rgba(168,85,247,.30), transparent 55%)',
  cyan: 'radial-gradient(circle at 30% 20%, rgba(6,182,212,.26), transparent 55%)',
  pink: 'radial-gradient(circle at 30% 20%, rgba(236,72,153,.24), transparent 55%)',
}
</script>

<template>
  <section id="achievements" class="relative py-32 overflow-hidden">
    <div class="section-container">
      <p class="font-mono text-cyber-cyan text-sm uppercase tracking-widest mb-4">Unlocks</p>
      <h2 class="section-title mb-12">Achievements as <span class="text-gradient">Artifacts</span></h2>

      <div class="grid md:grid-cols-2 gap-6">
        <div
          v-for="it in items"
          :key="it.title"
          class="ach-item glass-card p-8 relative overflow-hidden group"
        >
          <div
            class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            :style="{ background: toneBg[it.tone] }"
          ></div>

          <div class="relative z-10">
            <p class="font-mono text-xs text-zinc-500 uppercase tracking-widest">Unlocked</p>
            <h3 class="font-display font-bold text-2xl mt-2">{{ it.title }}</h3>
            <p class="text-zinc-400 mt-4 leading-relaxed">{{ it.meta }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

