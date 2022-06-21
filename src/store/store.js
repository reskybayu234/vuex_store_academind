import Vue from 'vue';
import Vuex from 'vuex';

// add vuex as a plugin
Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        registrations: [],
        users: [
            {id: 1, name: 'Max', registered: false},
            {id: 2, name: 'Anna', registered: false},
            {id: 3, name: 'Chris', registered: false},
            {id: 4, name: 'Sven', registered: false}
        ]
    }
})