import Vue from "vue";
import App from "./App.vue";

import swButton from "../components/sw-button";

Vue.use(swButton);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
