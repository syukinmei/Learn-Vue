import Vue from 'vue'
import App from './App.vue'

// 引入我们创建的store
import store from './store';
console.log(store);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // vue配置项中添加 store 项
  store, // 此时vm身上会有一个 $store 属性
}).$mount('#app')