<script setup>
import { onMounted, onUnmounted, provide, ref } from 'vue'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const lenis = ref(null)
const isLoading = ref(true)

provide('lenis', lenis)

onMounted(() => {
  // Initialize Lenis smooth scroll
  lenis.value = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    smoothTouch: false,
    touchMultiplier: 2,
  })

  // Connect Lenis to GSAP ScrollTrigger
  lenis.value.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis.value?.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)

  // Simulate loading
  setTimeout(() => {
    isLoading.value = false
  }, 2000)
})

onUnmounted(() => {
  lenis.value?.destroy()
})
</script>

<template>
  <!-- Preloader -->
  <Transition name="fade">
    <div 
      v-if="isLoading" 
      class="fixed inset-0 z-[9999] flex items-center justify-center bg-cyber-bg"
    >
      <div class="relative">
        <div class="w-20 h-20 border-4 border-cyber-purple/30 rounded-full"></div>
        <div class="absolute inset-0 w-20 h-20 border-4 border-transparent border-t-cyber-cyan rounded-full animate-spin"></div>
        <div class="absolute inset-2 w-16 h-16 border-4 border-transparent border-b-cyber-pink rounded-full animate-spin" style="animation-direction: reverse; animation-duration: 0.8s;"></div>
      </div>
    </div>
  </Transition>

  <!-- Main App -->
  <div class="min-h-screen bg-cyber-bg overflow-hidden">
    <RouterView v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.5s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
