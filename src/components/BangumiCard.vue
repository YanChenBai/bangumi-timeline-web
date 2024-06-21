<template>
  <a class="block" :href="data.url" target="_blank" :title="data.name">
    <div class="bangumi-card" :class="[themeClass('bg-white', 'bg-[#212126]')]">
      <div class="cover">
        <n-skeleton v-show="!show" class="size-full rounded-md" />
        <img alt="cover" class="transition-all-500" :class="[show ? 'opacity-100' : 'opacity-0']"
          :src="`${baseUrl}/img/${data.cover}`" loading="lazy" ref="imgRef" placeholders="" />
        <div class="ep" :class="[themeClass('text-white', 'text-white/70')]">{{ data.episode }}</div>
      </div>
      <div class="pl1 pt1 text-[14px]">
        <div class="text-ellipsis overflow-hidden text-nowrap font-600"
          :class="[themeClass('text-black', 'text-white/70')]">
          {{ data.name }}
        </div>
        <div class="text-ellipsis overflow-hidden text-nowrap text-[12px]"
          :class="themeClass('text-[rgb(60,60,60)]', 'text-[rgb(120,120,120)] ')" :title="data.updateTime">
          {{ data.updateTime }}
        </div>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import type { Bangumi } from '@/types'
import { baseUrl } from '@/shareds/env'
import { onMounted, ref } from 'vue';
import { useTheme } from '@/hooks/useTheme';

defineOptions({ name: 'BangumiCard' })

defineProps<{
  data: Bangumi
}>()

const { themeClass } = useTheme()
const show = ref(false)
const imgRef = ref<HTMLImageElement>()

onMounted(() => {
  const el = imgRef.value
  if (el) {
    el.onload = () => show.value = true
  }
})
</script>

<style scoped>
.bangumi-card {
  @apply flex-col p2 rounded-lg;
}

.cover {
  @apply aspect-ratio-square overflow-hidden relative;
}

.cover img {
  @apply size-full rounded-lg;
}

.ep {
  @apply absolute text-xl z-10 bottom-1 right-1 text-12px bg-black/70 px-1 py0 rounded-md;
}
</style>
