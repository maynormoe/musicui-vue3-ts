import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "@/router/router";
import SvgIcon from "@/components/SvgIcon/SvgIcon.vue";
import "undraw-ui/dist/style.css";

import "@icon-park/vue-next/styles/index.less";

import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "@/assets/Icon/Icon.js";
import "@/assets/Icon/search.js";

import request from "@/network/request";

const app = createApp(App);

app.config.globalProperties.$request = request;

app.use(createPinia());
app.use(router);

// @ts-ignore
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.component("SvgIcon", SvgIcon);

app.mount("#app");
