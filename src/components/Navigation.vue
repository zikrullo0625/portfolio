
<script setup>
import { inject, onMounted, ref } from 'vue'

const links = [
  { id: 'hero', label: 'Boot' },
  { id: 'about', label: 'Identity' },
  { id: 'skills', label: 'Cores' },
  { id: 'experience', label: 'Timeline' },
  { id: 'projects', label: 'Portals' },
  { id: 'achievements', label: 'Unlocks' },
  { id: 'contact', label: 'Uplink' },
]

const active = ref('hero')

const lenis = inject('lenis', null)

const onNavClick = (e, id) => {
  e.preventDefault()
  const el = document.getElementById(id)
  if (!el) return

  if (lenis?.value) {
    lenis.value.scrollTo(el, { offset: -90, duration: 1.2 })
  } else {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  history.replaceState(null, '', `#${id}`)
}

onMounted(() => {
  const obs = new IntersectionObserver(
    (entries) => {
      const top = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (top?.target?.id) active.value = top.target.id
    },
    { threshold: [0.25, 0.5, 0.75] },
  )

  for (const l of links) {
    const el = document.getElementById(l.id)
    if (el) obs.observe(el)
  }
})
</script>

<template>
  <nav class="fixed top-5 left-1/2 -translate-x-1/2 z-[1000]">
    <div class="relative px-2 py-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
      <div class="flex items-center gap-1">
        <a
          v-for="l in links"
          :key="l.id"
          :href="'#' + l.id"
          class="relative px-3 py-2 rounded-xl font-mono text-[11px] tracking-[0.22em] uppercase transition-colors duration-300"
          :class="active === l.id ? 'text-white' : 'text-zinc-400 hover:text-white'"
          @click="(e) => onNavClick(e, l.id)"
        >
          <span class="relative z-10">{{ l.label }}</span>
          <span
            v-if="active === l.id"
            class="absolute inset-0 rounded-xl bg-gradient-to-r from-cyber-purple/25 via-cyber-cyan/15 to-cyber-pink/20 border border-white/10"
          ></span>
        </a>
      </div>

      <div class="pointer-events-none absolute -inset-2 rounded-3xl opacity-40 blur-2xl"
        style="background: radial-gradient(circle at 30% 20%, rgba(168,85,247,.25), transparent 55%), radial-gradient(circle at 70% 50%, rgba(6,182,212,.18), transparent 60%);">
      </div>
    </div>
  </nav>
</template>

