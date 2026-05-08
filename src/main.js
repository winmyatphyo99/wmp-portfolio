import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import { useTheme } from "./composables/useTheme";

import { createHead } from '@vueuse/head'
import { MotionPlugin } from '@vueuse/motion'

const app = createApp(App)
const { initTheme } = useTheme();
initTheme();

// plugins
app.use(createHead())
app.use(MotionPlugin)

app.mount('#app')