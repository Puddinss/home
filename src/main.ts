import './assets/tailwind.css'
import './assets/fonts.css'
import './assets/fonts/Anton/Fonts/WEB/css/anton.css'
import './assets/fonts/ClashDisplay/Fonts/WEB/css/clash-display.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
