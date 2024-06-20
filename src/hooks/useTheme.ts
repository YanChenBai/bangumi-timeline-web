import { storeToRefs } from 'pinia'
import { useThemeStore } from '@/stores/theme'
export function useTheme() {
  const themeStore = useThemeStore()
  const { theme } = storeToRefs(themeStore)

  function themeClass(light: string, dark: string) {
    return theme.value === 'dark' ? dark : light
  }

  return {
    theme,
    themeClass,
    toggleTheme: () => {
      themeStore.toggleTheme()
    }
  }
}
