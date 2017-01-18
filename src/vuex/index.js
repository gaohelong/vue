import Vue from 'vue';
import Vuex from 'vuex';
import User from './user';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        userInfo: User,
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
        setAge({commit}, params) {
            commit('setAge', params);
        },
        setName({commit}, params) {
            commit('setName', params);
        }
    }
});

export default store;
