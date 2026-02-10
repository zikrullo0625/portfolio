<script setup>
import Hero from '../components/sections/Hero.vue'
import About from '../components/sections/About.vue'
import Skills from '../components/sections/Skills.vue'
import Experience from '../components/sections/Experience.vue'
import Projects from '../components/sections/Projects.vue'
import Achievements from '../components/sections/Achievements.vue'
import Contact from '../components/sections/Contact.vue'
import Navigation from '../components/Navigation.vue'
</script>

<template>
  <div class="relative">
    <Navigation />
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Contact />
    </main>
    
    <!-- Footer -->
    <footer class="py-8 text-center text-zinc-500 border-t border-white/5">
      <p class="font-mono text-sm">
        © 2024 <span class="text-cyber-purple">Zikrullo</span> — Crafted with 
        <span class="text-cyber-pink">♥</span> in Tajikistan
      </p>
    </footer>
  </div>
</template>
