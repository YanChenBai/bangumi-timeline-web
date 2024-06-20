<template>
  <div class="pt-[10px] w-full">
    <div
      class="w-full p2 sticky box-border top-[10px] z-20 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 rounded-full flex items-center justify-between">
      <TimelineMenu></TimelineMenu>
      <PlatformMenu></PlatformMenu>
    </div>

    <div>
      <TimelineContent></TimelineContent>
    </div>
  </div>
</template>
<script setup lang="ts">
import { TimelineMenu, PlatformMenu, TimelineContent } from '@/components'
defineOptions({
  name: 'HomeView'
})
</script>
