<template>
  <div class="flex flex-col gap-20px pt-3 pb-[100px]">
    <TransitionGroup @after-enter="onAfterEnter">
      <DayCard
        :data="item"
        :day="index"
        v-for="(item, index) in showData"
        :key="`${platformNow}-${index}`"
      ></DayCard>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { usePlatform } from '@/hooks/usePlatform'
import { useTimelineStore } from '@/stores/timeline'
import { storeToRefs } from 'pinia'
import { computed, nextTick, onMounted } from 'vue'
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

function onAfterEnter() {
  nextTick(() => scrollToElement(`week-${selectDay.value}`, -60, false))
}

onMounted(() => onAfterEnter())
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
