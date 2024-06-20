<template>
  <div class="platform-menu-item"
    :style="{ color: activate ? '#fff' : color, background: activate ? color : 'transparent' }">
    <div class="h-4 flex p1 rounded-full" :class="[themeClass('bg-white', 'bg-#212126')]">
      <img :src="logo" alt="logo" class="h-full" />
    </div>
    <div class="flex font-800 h-5 leading-5"
      :class="[themeClass('text-#fff', activate ? 'text-#212126' : 'text-white/80')]">{{ name
      }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from '@/hooks/useTheme';

defineOptions({ name: 'PlatformItem' })
defineProps<{
  logo: string
  name: string
  color: string
  activate: boolean
}>()

const { themeClass } = useTheme()
</script>

<style scoped>
.platform-menu-item {
  @apply flex text-[12px] items-center font-500 gap-1 select-none cursor-pointer rounded-full pl1 pr3 py1 transition-all;
}
</style>
