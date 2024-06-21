import './assets/main.css'
import 'virtual:uno.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { MotionPlugin } from '@vueuse/motion'

import App from './App.vue'
import router from './router'
import { registerSW } from 'virtual:pwa-register'

registerSW({
  // 每小时检查一次
  onRegistered: (event) => {
    if (event) {
      setInterval(async () => await event.update(), 3600000)
    }
  },
  // 注册失败则报错到 console
  onRegisterError: (error) => console.error(error)
})

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}

const app = createApp(App)

const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)
app.use(MotionPlugin)
app.use(pinia)
app.use(router)

app.mount('#app')
