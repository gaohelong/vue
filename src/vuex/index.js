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
        setAge(state, params) {
            state.userInfo.age = params.age;
        },
        setName(state, params) {
            state.userInfo.name = params.name;
        },
        setUserInfo(state, userInfo) {
            state.userInfo = userInfo;
        }
    },
    actions: {
        setAge({commit}, params) {
            commit('setAge', params);
        },
        setName({commit}, params) {
            commit('setName', params);
        },
        setUserInfo({ commit }, user) {
            commit('setUserInfo', user);
        }
    }
});

export default store;
