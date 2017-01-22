import Vue from 'vue';
import Vuex from 'vuex';
// import Base from './base';
// import User from './user';
// import Event from './event';
Vue.use(Vuex);

const base = {
    state: {
        pageTitle: ''
    },
    getters: {

    },
    mutations: {

    },
    actions: {

    }
};

const event = {
    state: {
        mouseInfo: {
            meS1Text: '我是mouseenter、mouseleave.'
        }
    },
    getters: {

    },
    mutations: {
        setMouseS1(state, params) {
            state.mouseInfo.meS1Text = params.text;
        }
    },
    actions: {
        setMouseS1({commit}, params) {
            commit('setMouseS1', params);
        }
    }
};

const user = {
    state: {
        userInfo: {
            id: 1,
            name: '张三',
            age: '28'
        }
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
};

const store = new Vuex.Store({
    modules: {
        base: base,
        user: user,
        event: event
    }
});

export default store;
