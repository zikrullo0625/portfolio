
<script setup>
import { ref } from 'vue'
import { profile } from '../../data/profile'

const input = ref('')
const lines = ref(['ZIKRULLO://UPLINK v1.0', 'Type: telegram | mail | stack | hello | clear'])

function run(cmdRaw) {
  const cmd = cmdRaw.trim().toLowerCase()
  if (!cmd) return
  lines.value.push('> ' + cmd)

  if (cmd === 'clear') {
    lines.value = ['ZIKRULLO://UPLINK v1.0', 'Type: telegram | mail | stack | hello | clear']
    return
  }

  if (cmd === 'telegram') {
    lines.value.push(`TG: ${profile.telegram}`)
    return
  }

  if (cmd === 'stack') {
    lines.value.push(profile.stack.join(' / '))
    return
  }

  if (cmd === 'mail') {
    lines.value.push(`Mail: ${profile.mail}`)
    return
  }

  if (cmd === 'hello') {
    lines.value.push('Signal received. Let’s build something unreal.')
    return
  }

  lines.value.push('Unknown command. Try: telegram | stack | hello | clear')
}

function onEnter() {
  run(input.value)
  input.value = ''
}
</script>

<template>
  <section id="contact" class="relative py-32 overflow-hidden">
    <div class="section-container">
      <p class="font-mono text-cyber-cyan text-sm uppercase tracking-widest mb-4">Uplink</p>
      <h2 class="section-title mb-10">Contact via <span class="text-gradient">Terminal</span></h2>

      <div class="glass-card p-6 md:p-8 text-left">
        <div class="flex items-center gap-2 mb-6">
          <div class="w-3 h-3 rounded-full bg-red-500"></div>
          <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div class="w-3 h-3 rounded-full bg-green-500"></div>
          <span class="ml-2 font-mono text-xs text-zinc-500">uplink.shell</span>
        </div>

        <div class="font-mono text-sm space-y-2 text-zinc-300 min-h-[220px] whitespace-pre-wrap">
          <div v-for="(l, idx) in lines" :key="idx" class="text-left">{{ l }}</div>
        </div>

        <div class="mt-6 flex items-center gap-3">
          <span class="font-mono text-zinc-500">$</span>
          <input
            v-model="input"
            @keydown.enter.prevent="onEnter"
            class="w-full bg-transparent outline-none font-mono text-sm text-white placeholder:text-zinc-600 text-left"
            placeholder="type command..."
            autocomplete="off"
          />
        </div>
      </div>

      <p class="mt-6 text-zinc-500 text-sm">
        Telegram: <span class="text-white font-mono">{{ profile.telegram }}</span><br>
        Mail: <span class="text-white font-mono">{{ profile.mail }}</span>
      </p>
    </div>
  </section>
</template>

