import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import VueTailwind from 'vue-tailwind'


Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  VueTailwind,
  render: (h) => h(App),
}).$mount("#app");
