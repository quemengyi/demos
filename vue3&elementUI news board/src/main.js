import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import ElementUI from 'element-plus'
import 'element-plus/theme-chalk/index.css'

createApp(App).use(VueAxios,axios).use(ElementUI).use(store).use(router).mount("#app")