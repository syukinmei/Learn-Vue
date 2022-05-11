import Vue from 'vue'
import App from './App.vue'

// 引入我们创建的store
import store from './store';
console.log(store);

// 引入路由器
import router from './router';
console.log(router);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  // vue配置项中添加 store 项
  store, // 此时vm身上会有一个 $store 属性

  // vue配置项中添加 router 项
  router, // 此时url从原来的 http://localhost:8080/ 变为 http://localhost:8080/#/
}).$mount('#app')