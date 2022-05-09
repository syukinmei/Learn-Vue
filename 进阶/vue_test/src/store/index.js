// 该文件用于创建vuex中最为核心的store

import Vue from 'vue';

// 引入vuex
import Vuex from 'vuex';
// 使用vuex插件
Vue.use(Vuex);

// 准备 actions 用于响应组件中的动作
const actions = {
    increment: function (context, payload) {
        console.log('increment', context, payload);
        context.commit('INCREMENT', payload);
    },
    subtract: function (context, payload) {
        context.commit('SUBTRACT', payload);
    }
}
// 准备 mutations 用于操作数据（state）
const mutations = {
    INCREMENT: function (state, payload) {
        console.log('INCREMENT', state, payload);
        state.count += payload;
    },
    SUBTRACT: function (state, payload) {
        state.count -= payload;
    }
}
// 准备 state 用于存储
const state = {
    count: 0,
    info: [
        {
            name: 'zjm'
        },
        {
            name: 'cxt'
        }
    ]
}

const getters = {
    tenfoldCount(state) {
        return state.count * 10;
    }
}
// 创建并导出 store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
});