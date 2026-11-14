import { createApp } from './app'
import './assets/main.css'

const { app, router } = createApp()
router.isReady().then(() => app.mount('#app'))
