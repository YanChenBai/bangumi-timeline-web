<template>
  <div class="gap-3 xl:flex hidden">
    <div v-for="(platform, index) in platforms" :key="index">
      <PlatformItem :logo="Logos[platform.key]" :name="platform.name" :color="Colors[platform.key]"
        :activate="platformNow === platform.key" @click="onSelect(platform.key)"></PlatformItem>
    </div>
  </div>

  <div class="gap-3 xl:hidden flex">
    <n-popover trigger="click" :to="false" :show-arrow="false">
      <template #trigger>
        <PlatformItem v-if="platformNow" :logo="Logos[platformNow]" :name="findNmae()" :color="Colors[platformNow]"
          :activate="true"></PlatformItem>
        <div v-else></div>
      </template>

      <div class="flex flex-col">
        <div v-for="(platform, index) in platforms" :key="index">
          <PlatformItem :logo="Logos[platform.key]" :name="platform.name" :color="Colors[platform.key]"
            :activate="platformNow === platform.key" @click="onSelect(platform.key)">
          </PlatformItem>
        </div>
      </div>
    </n-popover>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import PlatformItem from './PlatformItem.vue'
import { useTimelineStore } from '@/stores/timeline'
import TencentLogo from '@/assets/logos/tencent.png'
import BilibiliLogo from '@/assets/logos/bilibili.png'
import MikananiLogo from '@/assets/logos/mikanani.png'
import Tl5dmLogo from '@/assets/logos/tl5dm.png'
import { watchEffect } from 'vue'
import { usePlatform } from '@/hooks/usePlatform'

defineOptions({ name: 'PlatformMenu' })

const emits = defineEmits<{
  (e: 'select', key: string): void
}>()

const Logos: Record<string, string> = {
  tencent: TencentLogo,
  bilibili: BilibiliLogo,
  mikanani: MikananiLogo,
  tl5dm: Tl5dmLogo
}

const Colors: Record<string, string> = {
  tencent: '#0098FF',
  bilibili: '#00A2D8',
  mikanani: '#FAAA3B',
  tl5dm: '#FF5050'
}

const { platforms, selectPlatform } = storeToRefs(useTimelineStore())
const platformNow = usePlatform()

function findNmae() {
  const find = platforms.value.find((item) => item.key === platformNow.value)
  return find?.name || ''
}

function onSelect(key: string) {
  selectPlatform.value = key
}

watchEffect(() => {
  if (platformNow.value) {
    emits('select', platformNow.value)
  }
})
</script>
