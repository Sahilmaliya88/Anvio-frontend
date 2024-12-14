import './assets/main.css'
import VueLazyload from 'vue-lazyload'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    present: Aura,
  },
})
app.use(VueLazyload, {
  preLoad: 1.3,
  error: '/src/assets/3819627.jpg',
  loading: '/src/assets/load-142_256.gif',
  attempt: 1,
})
app.mount('#app')
