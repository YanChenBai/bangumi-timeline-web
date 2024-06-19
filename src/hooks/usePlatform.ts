import { useTimelineStore } from '@/stores/timeline'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

export function usePlatform() {
  const { platforms, selectPlatform } = storeToRefs(useTimelineStore())

  return computed(() => {
    if (selectPlatform.value) return selectPlatform.value
    else {
      return platforms.value.length > 0 ? platforms.value[0].key : null
    }
  })
}
