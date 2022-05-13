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
                ],
                // 独享路由守卫（进入 /home/information 之前触发）
                beforeEnter: (to, from, next) => {
                    console.log('%c 独显路由守卫', 'background-color:green', to.path);
                    next();
                }
            },
            {
                path: 'setting',
                component: Setting,
                children: [
                    {
                        name: 'setInfo',
                        path: 'setInfo/:id/:name', // 占位符展位
                        component: SetInfo,
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
const router = new VueRouter({
    routes, // 是routes 不是 routers！！！！写错了不展示 也不报错 这个很坑的
});

// 全局前置守卫（初始化的时候 以及 每次路由切换之前 被调用）
router.beforeEach((to, from, next) => {
    console.log('路由要切换了', to.path);
    next() // 放行
})

// 全局后置钩子（初始化的时候 以及 每次路由切换之后 被调用）
router.afterEach((to, from) => {
    console.log('路由切换完成了', to.path, from.path)
})

export default router;
