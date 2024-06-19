<template>
  <n-config-provider
    abstract
    :theme-overrides="{
      Popover: {
        borderRadius: '1rem',
        padding: '10px'
      }
    }"
  >
    <div class="min-h-screen w-full bg-[#EDF1F2] relative">
      <div class="container m-auto px-[20px] box-border">
        <RouterView />
      </div>
    </div>
  </n-config-provider>
</template>

<script setup lang="ts">
import { NConfigProvider } from 'naive-ui'
import { RouterView } from 'vue-router'
</script>
