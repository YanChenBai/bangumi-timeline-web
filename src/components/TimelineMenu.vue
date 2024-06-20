<template>
  <div class="gap-5 xl:flex hidden">
    <div v-for="(day, index) in Days" :key="index">
      <TimelineItem :activate="index === selectDay" :prefix="Prefixs[index]" :color="DayColors[index]" :content="day"
        @click="onSelect(index)"></TimelineItem>
    </div>
  </div>

  <div class="gap-5 xl:hidden flex">
    <n-popover trigger="click" :to="false" :show-arrow="false">
      <template #trigger>
        <TimelineItem :activate="true" :prefix="Prefixs[selectDay]" :color="DayColors[selectDay]"
          :content="Days[selectDay]"></TimelineItem>
      </template>

      <div class="flex flex-col">
        <div v-for="(day, index) in Days" :key="index">
          <TimelineItem class="w-full" :activate="index === selectDay" :prefix="Prefixs[index]" :color="DayColors[index]"
            :content="day" @click="onSelect(index)"></TimelineItem>
        </div>
      </div>
    </n-popover>
  </div>
</template>

<script setup lang="ts">
import TimelineItem from './TimelineItem.vue'
import { storeToRefs } from 'pinia'
import { useTimelineStore } from '@/stores/timeline'
import { DayColors, Days, Prefixs } from '@/shareds/configs'
import { scrollToElement } from '@/shareds/scrollToElement'

defineOptions({ name: 'TimelineMenu' })

const emits = defineEmits<{
  (e: 'select', index: number): void
}>()

const { selectDay } = storeToRefs(useTimelineStore())

function onSelect(index: number) {
  selectDay.value = index
  emits('select', index)
  scrollToElement(`week-${index}`, -60)
}
</script>
