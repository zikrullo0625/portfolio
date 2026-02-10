
<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const item = {
  time: '2024 → Now',
  title: 'IOyandasoz',
  role: 'Full-Stack Developer',
  product: 'Hamroh — intercity ride sharing platform',
  note:
    'I work on Hamroh as a Full‑Stack Developer: building UI in Vue, implementing backend features in Laravel/PHP, integrating APIs, and polishing UX for real production users.',
  tags: ['Laravel', 'Vue', 'Tailwind', 'PHP', 'Product'],
  highlights: [
    'Developed and shipped production features for Hamroh',
    'Built responsive Vue interfaces and reusable UI components',
    'Implemented Laravel APIs, integrations, and business logic',
    'Worked with data flows, validation, and performance improvements',
  ],
}

onMounted(() => {
  gsap.from('.exp-kicker, .exp-title', {
    scrollTrigger: { trigger: '#experience', start: 'top 70%' },
    y: 30,
    opacity: 0,
    duration: 0.9,
    stagger: 0.12,
    ease: 'power3.out',
  })

  gsap.from('.exp-panel', {
    scrollTrigger: {
      trigger: '#experience',
      start: 'top 70%',
      toggleActions: 'play none none reverse',
    },
    y: 60,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  })

  gsap.from('.exp-chip', {
    scrollTrigger: { trigger: '#experience', start: 'top 65%' },
    y: 18,
    opacity: 0,
    duration: 0.7,
    stagger: 0.06,
    ease: 'power3.out',
  })

  gsap.from('.exp-highlight', {
    scrollTrigger: { trigger: '#experience', start: 'top 60%' },
    y: 18,
    opacity: 0,
    duration: 0.8,
    stagger: 0.08,
    ease: 'power3.out',
  })
})
</script>

<template>
  <section id="experience" class="relative py-32">
    <div class="section-container">
      <p class="font-mono text-cyber-cyan text-sm uppercase tracking-widest mb-4">Timeline</p>
      <h2 class="section-title mb-12">Current <span class="text-gradient">Mission</span></h2>

      <div class="grid lg:grid-cols-[1fr_1.2fr] gap-8 items-start">
        <div class="glass-card p-8">
          <p class="exp-kicker font-mono text-xs text-zinc-500 uppercase tracking-widest">{{ item.time }}</p>
          <h3 class="exp-title font-display font-bold text-4xl mt-3">{{ item.title }}</h3>
          <p class="text-cyber-cyan mt-2 font-medium text-lg">{{ item.role }}</p>

          <p class="text-zinc-400 mt-6 leading-relaxed">
            Building <span class="text-white font-medium">{{ item.product }}</span>.
          </p>

          <div class="mt-7 flex flex-wrap gap-2">
            <span
              v-for="t in item.tags"
              :key="t"
              class="exp-chip px-3 py-1 rounded-full border border-white/10 bg-white/5 font-mono text-xs text-zinc-300"
            >
              {{ t }}
            </span>
          </div>
        </div>

        <article class="exp-panel glass-card p-9 relative overflow-hidden">
          <div
            class="absolute inset-0 opacity-50"
            style="
              background: radial-gradient(circle at 20% 20%, rgba(168, 85, 247, 0.22), transparent 55%),
                radial-gradient(circle at 80% 30%, rgba(6, 182, 212, 0.16), transparent 60%),
                radial-gradient(circle at 40% 90%, rgba(236, 72, 153, 0.12), transparent 55%);
            "
          ></div>

          <div class="relative z-10">
            <p class="font-mono text-xs text-zinc-500 uppercase tracking-widest">Context</p>
            <p class="text-zinc-300/90 text-lg leading-relaxed mt-4">{{ item.note }}</p>

            <div class="mt-8">
              <p class="font-mono text-xs text-zinc-500 uppercase tracking-widest">Highlights</p>
              <div class="mt-4 grid sm:grid-cols-2 gap-3">
                <div
                  v-for="h in item.highlights"
                  :key="h"
                  class="exp-highlight rounded-2xl border border-white/10 bg-black/20 p-4"
                >
                  <p class="text-zinc-300 leading-relaxed">{{ h }}</p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
