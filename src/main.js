import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
// SPA page component for SEO
import { createHead } from '@vueuse/head'
const app = createApp(App)

app.use(createHead())
app.mount('#app')