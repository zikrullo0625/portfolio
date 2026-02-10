<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const props = defineProps({
  count: { type: Number, default: 400 },
  speed: { type: Number, default: 0.5 },
  starColor: { type: String, default: '#ffffff' },
  twinkle: { type: Boolean, default: true },
  trail: { type: Number, default: 0.22 },
})

const canvasRef = ref(null)
const containerRef = ref(null)

let animationId
let resizeObserver

onMounted(() => {
  const canvas = canvasRef.value
  const container = containerRef.value
  if (!canvas || !container) return

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  let width = 0
  let height = 0
  let tick = 0

  const maxDepth = 1500

  const resize = () => {
    const rect = container.getBoundingClientRect()
    width = Math.max(1, Math.floor(rect.width))
    height = Math.max(1, Math.floor(rect.height))

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = Math.floor(width * dpr)
    canvas.height = Math.floor(height * dpr)
    canvas.style.width = width + 'px'
    canvas.style.height = height + 'px'
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  }

  const createStar = (initialZ) => ({
    x: (Math.random() - 0.5) * width * 2,
    y: (Math.random() - 0.5) * height * 2,
    z: initialZ ?? Math.random() * maxDepth,
    twinkleSpeed: Math.random() * 0.02 + 0.01,
    twinkleOffset: Math.random() * Math.PI * 2,
  })

  resize()

  const stars = Array.from({ length: props.count }, () => createStar())

  resizeObserver = new ResizeObserver(() => {
    resize()
  })
  resizeObserver.observe(container)

  const animate = () => {
    tick++

    const trail = Math.max(0, Math.min(1, props.trail))
    ctx.fillStyle = `rgba(10, 10, 15, ${trail})`
    ctx.fillRect(0, 0, width, height)

    const cx = width / 2
    const cy = height / 2

    for (const star of stars) {
      star.z -= props.speed * 2

      if (star.z <= 0) {
        star.x = (Math.random() - 0.5) * width * 2
        star.y = (Math.random() - 0.5) * height * 2
        star.z = maxDepth
      }

      const scale = 400 / star.z
      const x = cx + star.x * scale
      const y = cy + star.y * scale

      if (x < -10 || x > width + 10 || y < -10 || y > height + 10) continue

      const size = Math.max(0.5, (1 - star.z / maxDepth) * 3)
      let opacity = (1 - star.z / maxDepth) * 0.9 + 0.1

      if (props.twinkle && star.twinkleSpeed > 0.015) {
        opacity *= 0.7 + 0.3 * Math.sin(tick * star.twinkleSpeed + star.twinkleOffset)
      }

      ctx.beginPath()
      ctx.arc(x, y, size, 0, Math.PI * 2)
      ctx.fillStyle = props.starColor
      ctx.globalAlpha = opacity
      ctx.fill()

      if (star.z < maxDepth * 0.3 && props.speed > 0.3) {
        const streakLength = (1 - star.z / maxDepth) * props.speed * 8
        const angle = Math.atan2(star.y, star.x)
        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.lineTo(x - Math.cos(angle) * streakLength, y - Math.sin(angle) * streakLength)
        ctx.strokeStyle = props.starColor
        ctx.globalAlpha = opacity * 0.3
        ctx.lineWidth = size * 0.5
        ctx.stroke()
      }
    }

    ctx.globalAlpha = 1
    animationId = requestAnimationFrame(animate)
  }

  ctx.fillStyle = '#0a0a0f'
  ctx.fillRect(0, 0, width, height)

  animationId = requestAnimationFrame(animate)
})

onUnmounted(() => {
  if (animationId) cancelAnimationFrame(animationId)
  resizeObserver?.disconnect()
})
</script>

<template>
  <div ref="containerRef" class="absolute inset-0 overflow-hidden bg-[#0a0a0f]">
    <canvas ref="canvasRef" class="absolute inset-0 h-full w-full" />

    <div
      class="pointer-events-none absolute inset-0 opacity-30"
      :style="{
        background:
          'radial-gradient(ellipse at 30% 40%, rgba(56, 100, 180, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 60%, rgba(100, 60, 150, 0.10) 0%, transparent 50%)',
      }"
    />

    <div
      class="pointer-events-none absolute inset-0"
      :style="{
        background:
          'radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(5,5,10,0.9) 100%)',
      }"
    />
  </div>
</template>
