<template>
  <n-config-provider
    abstract
    :theme-overrides="{
      common: {
        popoverColor: themeClass('#FFF', '#48484E')
      },
      Popover: {
        borderRadius: '1rem',
        padding: '10px'
      },
      Skeleton: {
        color: themeClass('#eee', 'rgab(255,255,255,0.12)'),
        colorEnd: themeClass('#ddd', 'rgba(255,255,255,0.18)')
      }
    }"
  >
    <div
      class="min-h-screen w-full relative transition-all"
      :class="[themeClass('bg-[#EDF1F2]', 'bg-[#101014]')]"
    >
      <div class="container m-auto px-[20px] box-border">
        <RouterView />
      </div>
    </div>
  </n-config-provider>
</template>

<script setup lang="ts">
import { NConfigProvider } from 'naive-ui'
import { RouterView } from 'vue-router'
import { useTheme } from '@/hooks/useTheme'
import { onMounted } from 'vue';
import { QuickKeys } from '@/shareds/configs';
import { goDay } from './shareds/goDay';
const { themeClass } = useTheme()



onMounted(()=>{
  window.addEventListener('keydown', (event)=>{
    const index = QuickKeys[event.key]
    if(event.altKey && index!==undefined) goDay(index)
  })
})
</script>
