import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from "@/router/router";
import SvgIcon from "@/components/SvgIcon/SvgIcon.vue";

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

import '@/assets/Icon/Icon.js'
import '@/assets/Icon/search.js'

import request from "@/network/request";
app.config.globalProperties.$request = request

app.use(createPinia())
app.use(router)

// @ts-ignore
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.component('SvgIcon', SvgIcon);

app.mount('#app')
