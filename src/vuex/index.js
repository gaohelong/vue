import Vue from 'vue';
import Vuex from 'vuex';
import {base as Base} from './base';
import {user as User} from './user';
import {event as Event} from './event';
Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        base: Base,
        user: User,
        event: Event
    }
});

export default store;
