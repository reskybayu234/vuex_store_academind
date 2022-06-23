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
    },
    getters : {
        unregisteredUser(state){
            return state.users.filter(user => {
                return !user.registered
            });
        },
        registrations(state){
            return state.registrations;
        },
        totalRegistration(state){
            return state.registrations.length;
        }
    },
    mutations : {
        register(state, userId){
            const date = new Date; 
            const user = state.users.find(user => {return user.id == userId.id});
            user.registered = true;
            const registration = {
                userId : userId.id,
                name : userId.name,
                date : date.getMonth() + '/' + date.getDay()
            };
            state.registrations.push(registration);
        },
        unregister(state, data){
            const user = state.users.find(user => {
                return user.id == data.userId;
            }); 
            
            user.registered = false;
            const registration = state.registrations.find(registration => {
                return registration.userId == data.userId;
            });
            state.registrations.splice(state.registrations.indexOf(registration), 1);
        }
    },
    actions : {
        // register(context, userId){
        //     context.commit('register',userId);
        // },
        register({ commit }, userId){
            setTimeout(() => {
                commit('register',userId);
            },500)
        },

        unregister({ commit }, data){
            commit('unregister',data);
        }
    }
})