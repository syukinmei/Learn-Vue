// 引入的不再是Vue构造函数了，引入的是一个名为 createApp 的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

// 创建应用实例对象——app（类似于vue2中的vm，但app比vm更轻）
// createApp(App).mount('#app')
const app = createApp(App);
app.mount('#app');
console.log(app);
