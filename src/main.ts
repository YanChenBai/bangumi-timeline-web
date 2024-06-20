import './assets/main.css'
import 'virtual:uno.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { MotionPlugin } from '@vueuse/motion'

import App from './App.vue'
import router from './router'

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
