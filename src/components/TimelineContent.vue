<template>
  <div class="flex flex-col gap-20px pt-3 pb-[100px]">
    <div v-for="(item, index) in showData" :key="index">
      <DayCard :data="item" :day="index"></DayCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePlatform } from '@/hooks/usePlatform'
import { useTimelineStore } from '@/stores/timeline'
import { storeToRefs } from 'pinia'
import { computed, nextTick, onMounted, watch } from 'vue'
import DayCard from './DayCard.vue'
import { scrollToElement } from '@/shareds/scrollToElement'

defineOptions({ name: 'TimelineContent' })

const { data, selectDay } = storeToRefs(useTimelineStore())
const platformNow = usePlatform()

const showData = computed(() => {
  return data.value.find((item) => {
    return platformNow.value === item.key
  })?.value
})

onMounted(() => {
  watch(showData, () => {
    nextTick(() => {
      scrollToElement(`week-${selectDay.value}`, -60, false)
    })
  })
})
</script>
