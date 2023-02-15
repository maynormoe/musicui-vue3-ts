import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from "@/router/router";
import SvgIcon from "@/components/SvgIcon/SvgIcon.vue";
const app = createApp(App)

import '@/assets/Icon/Icon.js'

app.use(createPinia())
app.use(router)

app.component('SvgIcon', SvgIcon);

app.mount('#app')
