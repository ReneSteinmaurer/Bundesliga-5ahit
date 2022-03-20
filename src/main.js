import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store"

import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

// register router and store 
createApp(App).use(router).use(BootstrapVue3).use(store).mount("#app")
