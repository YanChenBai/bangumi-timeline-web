<template>
  <a class="block" :href="data.url" target="_blank" :title="data.name">
    <div class="bangumi-card">
      <div class="cover">
        <n-skeleton v-show="!show" class="size-full rounded-md" />
        <img alt="cover" class="transition-all-500" :class="[show ? 'opacity-100' : 'opacity-0']"
          :src="`${baseUrl}/img?img=${data.cover}`" loading="lazy" ref="imgRef" />
        <div class="ep">{{ data.episode }}</div>
      </div>
      <div class="pl1 pt1 text-[14px]">
        <div class="text-ellipsis overflow-hidden text-nowrap font-600">
          {{ data.name }}
        </div>
        <div class="text-ellipsis overflow-hidden text-nowrap text-[rgb(60,60,60)] text-[12px]" :title="data.updateTime">
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
import { NImage } from 'naive-ui'
defineOptions({ name: 'BangumiCard' })

defineProps<{
  data: Bangumi
}>()

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
  --uno: flex-col p2 bg-white rounded-lg;
}

.cover {
  --uno: aspect-ratio-square overflow-hidden relative;
}

.cover img {
  --uno: size-full rounded-lg;
}

.ep {
  --uno: absolute text-white text-xl z-10 bottom-1 right-1 text-12px bg-black/70 px-1 py0 rounded-md;
}
</style>
