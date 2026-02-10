
<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from '../../data/projects'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const scenes = gsap.utils.toArray('.project-scene')
  for (const el of scenes) {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      },
      y: 60,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    })
  }
})
</script>

<template>
  <section id="projects" class="relative py-32 overflow-hidden">
    <div class="section-container">
      <p class="font-mono text-cyber-cyan text-sm uppercase tracking-widest mb-4">Portals</p>
      <h2 class="section-title mb-12">Selected <span class="text-gradient">Projects</span></h2>

      <div class="space-y-10">
        <article
          v-for="p in projects"
          :key="p.title"
          class="project-scene glass-card p-10 md:p-12 relative overflow-hidden"
        >
          <div
            class="absolute inset-0 opacity-40"
            style="
              background: radial-gradient(circle at 20% 20%, rgba(168, 85, 247, 0.25), transparent 55%),
                radial-gradient(circle at 80% 30%, rgba(6, 182, 212, 0.2), transparent 60%),
                radial-gradient(circle at 40% 90%, rgba(236, 72, 153, 0.18), transparent 55%);
            "
          ></div>

          <div class="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p class="font-mono text-xs text-zinc-500 uppercase tracking-widest">Project</p>
              <h3 class="font-display font-bold text-4xl mt-2">{{ p.title }}</h3>
              <p class="text-zinc-400 mt-3 text-lg">{{ p.subtitle }}</p>

              <div class="mt-6 flex flex-wrap gap-2">
                <span
                  v-for="t in p.tags"
                  :key="t"
                  class="px-3 py-1 rounded-full border border-white/10 bg-white/5 font-mono text-xs text-zinc-300"
                >
                  {{ t }}
                </span>
              </div>

              <p class="mt-7 text-zinc-400 leading-relaxed">{{ p.vibe }}</p>
            </div>

            <div class="relative">
              <div class="aspect-[4/3] rounded-2xl border border-white/10 bg-black/30 overflow-hidden">
                <img
                  v-if="p.image"
                  :src="p.image"
                  :alt="`${p.title} screenshot`"
                  class="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />

                <div
                  v-else
                  class="w-full h-full"
                  style="
                    background: linear-gradient(
                      120deg,
                      rgba(168, 85, 247, 0.18),
                      rgba(6, 182, 212, 0.1),
                      rgba(236, 72, 153, 0.12)
                    );
                  "
                ></div>

                <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
              
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

