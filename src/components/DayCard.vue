<template>
  <div class="mb-[50px]">
    <div class="mb-[10px]" :id="`week-${day}`">
      <div class="w-full rounded-full flex justify-center p1.5 box-border relative">
        <TimelineItem
          class="relative z-2"
          :activate="true"
          :prefix="Prefixs[day]"
          :color="DayColors[day]"
          :content="Days[day]"
        ></TimelineItem>
        <div
          class="absolute w-full h2px top-[calc(50%-1px)]"
          :style="{ background: DayColors[day] }"
        ></div>
      </div>
    </div>

    <div class="day-card">
      <BangumiCard v-for="(item, index) in data" :key="index" :data="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Bangumi } from '@/types'
import BangumiCard from './BangumiCard.vue'
import TimelineItem from './TimelineItem.vue'
import { DayColors, Days, Prefixs } from '@/shareds/configs'

defineOptions({ name: 'DayCard' })
defineProps<{
  data: Bangumi[]
  day: number
}>()
</script>

<style scoped>
.day-card {
  @apply grid md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 grid-cols-2 gap-3 w-full;
}
</style>
