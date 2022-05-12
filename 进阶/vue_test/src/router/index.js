// 该文件用于创建整个应用的路由器

import Vue from 'vue';

// 引入vueRouter
import VueRouter from 'vue-router';
// 使用VueRouter插件
Vue.use(VueRouter);

// 引入路由组件
import Home from '../components/Router-home';
import About from '../components/Router-about';
import Information from '../components/Router-info';
import Setting from '../components/Router-setting';
import Detail from '../views/RouterDetail';
import SetInfo from '../views/RouterSettingInfo';

// 创建一个路由表
const routes = [
    {
        path: '/home',
        component: Home,
        children: [
            {
                name: 'Information', // 命名路由
                path: 'information',
                component: Information,
                children: [
                    { path: 'detail', component: Detail }
                ]
            },
            {
                path: 'setting',
                component: Setting,
                children: [
                    {
                        name: 'setInfo',
                        path: 'setInfo/:id/:name', // 占位符展位
                        component: SetInfo
                    }
                ]
            },
        ]
    },
    {
        path: '/about',
        component: About
    },
]

// 创建并导出一个路由器
export default new VueRouter({
    routes, // 是routes 不是 routers！！！！写错了不展示 也不报错 这个很坑的
});
