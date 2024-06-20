<template>
  <div class="pt-[10px] w-full">
    <div
      class="w-full p2 sticky box-border top-[10px] z-20 backdrop-blur supports-[backdrop-filter]:bg-background/60 rounded-full flex items-center justify-between"
      :class="[themeClass('bg-white/80', 'bg-#111/80 ')]">
      <TimelineMenu></TimelineMenu>
      <div class="flex items-center gap-2">
        <PlatformMenu></PlatformMenu>
        <ThemeBtn></ThemeBtn>
      </div>
    </div>

    <div>
      <TimelineContent></TimelineContent>
    </div>
  </div>
</template>
<script setup lang="ts">
import { TimelineMenu, PlatformMenu, TimelineContent, ThemeBtn } from '@/components'
import { useTheme } from '@/hooks/useTheme';

defineOptions({
  name: 'HomeView'
})

const { themeClass } = useTheme()
</script>
