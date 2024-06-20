<template>
    <button class="btn" @click="toggleTheme()">
        <div v-html="SunIcon" class="icon sun" v-if="theme === 'light'"></div>
        <div v-html="MoonIcon" class="icon moon" v-else></div>
    </button>
</template>

<script setup lang="ts">
import SunIcon from "@/assets/icons/sun.svg?raw";
import MoonIcon from "@/assets/icons/moon.svg?raw";
import { useTheme } from '@/hooks/useTheme'
defineOptions({ name: 'ThemeBtn' })

const { theme, toggleTheme } = useTheme()
</script>

<style scoped>
.btn {
    @apply flex h-fit p-0 border-0 bg-transparent cursor-pointer items-center
}

.icon {
    @apply text-[26px] flex;
}

.sun {
    @apply text-amber;
}

.moon {
    @apply text-purple;
}
</style>