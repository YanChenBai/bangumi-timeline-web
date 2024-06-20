<template>
  <div class="item transition-all" :style="ItemStyle">
    <div class="px1.5 rounded-full transition-all" :style="{ color }"
      :class="{ [themeClass('bg-white', 'bg-#18181C')]: activate }">
      {{ prefix }}
    </div>
    <div class="px1 transition-all" :style="contentStyle">{{ content }}</div>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from '@/hooks/useTheme';
import { computed } from 'vue'

defineOptions({ name: 'TimelineItem' })
const props = defineProps<{
  color: string
  content: string
  prefix: string
  activate: boolean
}>()

const { themeClass } = useTheme()

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
      color: themeClass('#fff', '#222')
    }
    : {
      color: props.color
    }
})
</script>

<style scoped>
.item {
  @apply flex gap-0.5 p1 box-border rounded-full select-none cursor-pointer items-center justify-between text-[14px];
}
</style>
