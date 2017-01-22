import Vue from 'vue';
import Vuex from 'vuex';
import User from './user';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        userInfo: User,
        mouseInfo: {
            meS1Text: '我是mouseenter、mouseleave.'
        },
        list: []
    },
    getters: {
        getUserInfo(state) {
            return state.userInfo;
        }
    },
    mutations: {
        setUserInfo(state, userInfo) {
            state.userInfo = userInfo;
        },
        setMouseS1(state, params) {
            state.mouseInfo.meS1Text = params.text;
        },
        setAge(state, params) {
            state.userInfo.age = params.age;
        },
        setName(state, params) {
            state.userInfo.name = params.name;
        }
    },
    actions: {
        setUserInfo({ commit }, user) {
            commit('setUserInfo', user);
        },
        setMouseS1({commit}, params) {
            commit('setMouseS1', params);
        },
        setAge({commit}, params) {
            commit('setAge', params);
        },
        setName({commit}, params) {
            commit('setName', params);
        }
    }
});

export default store;
