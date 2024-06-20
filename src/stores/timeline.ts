import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { GetTimelineResp } from '@/types'
import Apis from '@/apis'

export function getDay() {
  const date = new Date()
  const nowDay = date.getDay()
  return nowDay === 0 ? 7 : nowDay
}

export const useTimelineStore = defineStore(
  'timeline',
  () => {
    const data = ref<GetTimelineResp>([])
    const selectDay = ref(getDay() - 1)
    const selectPlatform = ref<string>()

    const platforms = computed(() =>
      data.value.map((item) => ({
        key: item.key,
        name: item.name
      }))
    )

    Apis.getTimeline().then((res) => {
      data.value = res
    })

    return { data, platforms, selectDay, selectPlatform }
  },
  {
    persist: {
      paths: ['selectPlatform', 'data']
    }
  }
)
