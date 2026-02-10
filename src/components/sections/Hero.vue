<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import StarfieldBackground from '../backgrounds/StarfieldBackground.vue'

onMounted(async () => {
  const tl = gsap.timeline({ delay: 2 })
  
  tl.from('.hero-subtitle', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
  })
  .from('.hero-title', {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  }, '-=0.4')
  .from('.hero-tagline', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
  }, '-=0.4')
  .from('.hero-cta', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
  }, '-=0.4')
  .from('.hero-scroll', {
    y: 20,
    opacity: 0,
    duration: 0.6,
    ease: 'power3.out',
  }, '-=0.2')
})
</script>

<template>
  <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Live Wallpaper Background -->
    <StarfieldBackground :fixed="true" class="z-0" :count="520" :speed="0.7" :trail="0.4" star-color="#ffffff" :twinkle="true" />

    <!-- Gradient Overlays -->
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-bg/50 to-cyber-bg z-10"></div>
    <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-purple/20 rounded-full blur-[128px] z-5"></div>
    <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-cyan/20 rounded-full blur-[128px] z-5"></div>

    <!-- Content -->
    <div class="relative z-20 text-center px-6">
      <p class="hero-subtitle inline-block px-5 py-2.5 mb-7 text-xs md:text-sm font-mono text-cyber-cyan border border-cyber-cyan/30 rounded-full bg-cyber-cyan/5 tracking-[0.28em] uppercase">
        Full-Stack Developer • Digital Architect
      </p>

      <h1 class="hero-title text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-7 leading-[0.95]">
        <span class="text-white" data-text="Hi, I'm">Hi, I'm</span>
        <br>
        <span class="text-gradient">Zikrullo</span>
      </h1>

      <p class="hero-tagline max-w-3xl mx-auto text-xl md:text-2xl text-zinc-300/90 mb-12 leading-relaxed">
        Crafting immersive digital experiences with 
        <span class="text-cyber-purple">Vue.js</span>, 
        <span class="text-cyber-cyan">Laravel</span>, and 
        <span class="text-cyber-pink">creative code</span>.
        <br class="hidden md:block">
        Transforming ideas into elegant, high-performance solutions.
      </p>

      <div class="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="#projects" class="cyber-btn text-base md:text-lg">
          <span>Explore My Work</span>
        </a>
        <a 
          href="#contact" 
          class="px-8 py-4 font-display font-semibold text-base md:text-lg text-white border border-white/20 rounded-xl hover:border-cyber-purple hover:bg-cyber-purple/10 transition-all duration-300"
        >
          Get in Touch
        </a>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="hero-scroll absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
      <span class="text-xs font-mono text-zinc-500 uppercase tracking-widest">Scroll</span>
      <div class="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
        <div class="w-1 h-2 bg-cyber-purple rounded-full animate-bounce"></div>
      </div>
    </div>
  </section>
</template>
