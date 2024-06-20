<template>
    <button class="btn" :class="[themeClass('bg-[#EDF1F2]', 'bg-#212126')]" @click="toggleTheme()">
        <div v-html="SunIcon" class="icon sun" v-if="theme === 'light'"></div>
        <div v-html="MoonIcon" class="icon moon" v-else></div>
    </button>
</template>

<script setup lang="ts">
import SunIcon from "@/assets/icons/sun.svg?raw";
import MoonIcon from "@/assets/icons/moon.svg?raw";
import { useTheme } from '@/hooks/useTheme'
defineOptions({ name: 'ThemeBtn' })

const { theme, toggleTheme, themeClass } = useTheme()
</script>

<style scoped>
.btn {
    @apply flex h-full p1 border-0 cursor-pointer items-center rounded-full
}

.icon {
    @apply text-[24px] flex;
}

.sun {
    @apply text-amber;
}

.moon {
    @apply text-purple;
}
</style>