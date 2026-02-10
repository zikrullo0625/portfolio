<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  // Animate text blocks on scroll
  gsap.from('.about-text', {
    scrollTrigger: {
      trigger: '.about-content',
      start: 'top 80%',
      end: 'bottom 60%',
      toggleActions: 'play none none reverse',
    },
    y: 60,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out',
  })

  // Animate stats
  gsap.from('.stat-item', {
    scrollTrigger: {
      trigger: '.stats-grid',
      start: 'top 85%',
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
  })

  // Animate image
  gsap.from('.about-image', {
    scrollTrigger: {
      trigger: '.about-image',
      start: 'top 80%',
    },
    scale: 0.9,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out',
  })
})

const stats = [
  { value: '1.5+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Delivered' },
  { value: '5K+', label: 'Lines of Code' },
  { value: '100%', label: 'Passion' },
]
</script>

<template>
  <section id="about" class="relative py-32 overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyber-purple/5 to-transparent"></div>
    <div class="absolute bottom-20 left-10 w-72 h-72 bg-cyber-cyan/10 rounded-full blur-[100px]"></div>

    <div class="section-container">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Image / Visual -->
        <div class="about-image relative order-2 lg:order-1">
          <div class="relative group">
            <!-- Decorative frame -->
            <div class="absolute -inset-4 bg-gradient-to-r from-cyber-purple via-cyber-cyan to-cyber-pink rounded-2xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
            
            <!-- Main visual container -->
            <div class="relative glass-card p-8 overflow-hidden">
              <!-- Code visualization -->
              <div class="font-mono text-sm space-y-3">
                <div class="flex items-center gap-2 mb-6">
                  <div class="w-3 h-3 rounded-full bg-red-500"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div class="w-3 h-3 rounded-full bg-green-500"></div>
                  <span class="ml-2 text-zinc-500">zikrullo.config.js</span>
                </div>
                <p><span class="text-cyber-pink">const</span> <span class="text-cyber-cyan">developer</span> = {</p>
                <p class="pl-4"><span class="text-zinc-400">name:</span> <span class="text-green-400">'Zikrullo'</span>,</p>
                <p class="pl-4"><span class="text-zinc-400">location:</span> <span class="text-green-400">'Tajikistan 🇹🇯'</span>,</p>
                <p class="pl-4"><span class="text-zinc-400">role:</span> <span class="text-green-400">'Full-Stack Developer'</span>,</p>
                <p class="pl-4"><span class="text-zinc-400">company:</span> <span class="text-green-400">'IOyandasoz'</span>,</p>
                <p class="pl-4"><span class="text-zinc-400">passions:</span> [</p>
                <p class="pl-8"><span class="text-green-400">'Clean Code'</span>,</p>
                <p class="pl-8"><span class="text-green-400">'User Experience'</span>,</p>
                <p class="pl-8"><span class="text-green-400">'Innovation'</span></p>
                <p class="pl-4">],</p>
                <p class="pl-4"><span class="text-zinc-400">currentlyBuilding:</span> <span class="text-cyber-purple">'Hamroh'</span></p>
                <p>}</p>
              </div>

              <!-- Animated cursor -->
              <div class="absolute bottom-8 right-8 w-3 h-6 bg-cyber-cyan animate-pulse"></div>
            </div>
          </div>
        </div>

        <!-- Text Content -->
        <div class="about-content order-1 lg:order-2 space-y-6">
          <p class="about-text text-sm font-mono text-cyber-cyan uppercase tracking-widest">
            About Me
          </p>
          
          <h2 class="about-text section-title">
            Crafting Digital
            <span class="text-gradient"> Experiences</span>
          </h2>

          <p class="about-text text-lg text-zinc-400 leading-relaxed">
            I'm a passionate Full-Stack Developer based in Tajikistan, currently building 
            innovative products at <span class="text-white font-medium">IOyandasoz</span>. 
            With 1.5 years of commercial experience, I specialize in creating seamless 
            digital solutions that blend beautiful design with robust functionality.
          </p>

          <p class="about-text text-lg text-zinc-400 leading-relaxed">
            My journey in tech started with curiosity and evolved into a deep love for 
            <span class="text-cyber-purple">Vue.js</span>, <span class="text-cyber-cyan">Laravel</span>, 
            and everything in between. I believe in writing code that not only works but inspires.
          </p>

          <div class="about-text pt-4">
            <a 
              href="#contact" 
              class="inline-flex items-center gap-2 text-cyber-purple hover:text-cyber-cyan transition-colors group"
            >
              <span class="font-medium">Let's create something amazing</span>
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Stats Grid -->
      <div class="stats-grid grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
        <div 
          v-for="stat in stats" 
          :key="stat.label"
          class="stat-item glass-card-hover p-6 text-center"
        >
          <p class="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
            {{ stat.value }}
          </p>
          <p class="text-sm text-zinc-500 uppercase tracking-wider">
            {{ stat.label }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
