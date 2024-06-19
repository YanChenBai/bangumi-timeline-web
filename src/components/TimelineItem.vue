<template>
  <div class="item transition-all" :style="ItemStyle">
    <div
      class="px1.5 rounded-full transition-all"
      :style="{ color }"
      :class="{ 'bg-white': activate }"
    >
      {{ prefix }}
    </div>
    <div class="px1 transition-all" :style="contentStyle">{{ content }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

defineOptions({ name: 'TimelineItem' })
const props = defineProps<{
  color: string
  content: string
  prefix: string
  activate: boolean
}>()

const ItemStyle = computed(() => {
  return props.activate
    ? {
        backgroundColor: props.color
      }
    : {}
})

const contentStyle = computed(() => {
  return props.activate
    ? {
        color: '#fff'
      }
    : {
        color: props.color
      }
})
</script>

<style scoped>
.item {
  --uno: flex gap-0.5 p1.5 rounded-full select-none cursor-pointer items-center justify-center
    text-[14px];
}
</style>
