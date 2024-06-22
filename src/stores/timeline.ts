import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { GetTimelineResp } from '@/types'
import Apis from '@/apis'
import { SHA256 } from 'crypto-js'
import { cacheImages } from '@/shareds/cacheImages'
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
      for (const key in res) {
        res[key].value = res[key].value.map((list) =>
          list.map((item) => {
            const sha256 = SHA256(item.cover).toString()
            return {
              ...item,
              cover: `${sha256}.webp`
            }
          })
        )
      }

      data.value = res
      cacheImages(res)
    })

    return { data, platforms, selectDay, selectPlatform }
  },
  {
    persist: {
      paths: ['selectPlatform', 'data']
    }
  }
)
