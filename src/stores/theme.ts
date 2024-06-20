import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore(
  'theme',
  () => {
    const theme = ref<'light' | 'dark'>('dark')
    const toggleTheme = () => {
      theme.value = theme.value === 'dark' ? 'light' : 'dark'
    }

    return {
      theme,
      toggleTheme
    }
  },
  {
    persist: {
      paths: ['theme']
    }
  }
)
