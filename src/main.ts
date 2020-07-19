import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import Ionic from "@ionic/vue";
import { defineCustomElements } from "@ionic/pwa-elements/loader";


Vue.config.productionTip = false;

Vue.use(Ionic);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

defineCustomElements(window);