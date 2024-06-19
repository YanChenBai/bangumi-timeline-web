<template>
  <a class="block" :href="data.url" target="_blank" :title="data.name">
    <div class="bangumi-card">
      <div class="cover">
        <img alt="cover" :src="`${baseUrl}/img?img=${data.cover}`" loading="lazy" />
        <div class="ep">{{ data.episode }}</div>
      </div>
      <div class="pl1 pt1 text-[14px]">
        <div class="text-ellipsis overflow-hidden text-nowrap font-600">
          {{ data.name }}
        </div>
        <div
          class="text-ellipsis overflow-hidden text-nowrap text-[rgb(60,60,60)] text-[12px]"
          :title="data.updateTime"
        >
          {{ data.updateTime }}
        </div>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import type { Bangumi } from '@/types'
import { baseUrl } from '@/shareds/env'
defineOptions({ name: 'BangumiCard' })

defineProps<{
  data: Bangumi
}>()
</script>

<style scoped>
.bangumi-card {
  --uno: flex-col p2 bg-white rounded-lg;
}

.cover {
  --uno: aspect-ratio-square overflow-hidden relative;
}

.cover img {
  --uno: object-cover size-full rounded-lg;
}

.ep {
  --uno: absolute text-white text-xl z-10 bottom-1 right-1 text-12px bg-black/70 px-1 py0 rounded-md;
}
</style>
