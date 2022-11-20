import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        user: {
            loggedIn: false,
            isAdmin: false,
        }
    },
    getters: {
        AUTH(state) {
            return state.user
        },
    },
    mutations: {},
    actions: {},
    modules: {}
})

export default store