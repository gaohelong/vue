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

export {event};
