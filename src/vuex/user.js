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

export {user};
