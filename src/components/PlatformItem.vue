<template>
  <div
    class="platform-menu-item"
    :style="{ color: activate ? '#fff' : color, background: activate ? color : 'transparent' }"
  >
    <div class="h-4 flex bg-white p1 rounded-full">
      <img :src="logo" alt="logo" class="h-full" />
    </div>
    <div class="flex font-800">{{ name }}</div>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'PlatformItem' })
defineProps<{
  logo: string
  name: string
  color: string
  activate: boolean
}>()
</script>

<style scoped>
.platform-menu-item {
  @apply flex text-[12px] items-center font-500 gap-1 select-none cursor-pointer rounded-full
    pl1 pr3 py1 transition-all;
}
</style>
