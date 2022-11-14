import Vue from 'vue'
import Vuex from 'vuex'
import {postsAPI} from "@/api/posts-api";

Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        posts: [
            // {
            //     name: 'House 1',
            //     description: 'cool house',
            //     price: 100000,
            //     id: 'T1',
            //     available: true,
            //     category: 'house'
            // },
            // {
            //     name: 'House 2',
            //     description: 'home with perfect view',
            //     price: 105000,
            //     id: 'T2',
            //     available: true,
            //     category: 'apartment'
            // },
        ]
    },
    getters: {
        POSTS(state) {
            return state.posts
        }
    },
    mutations: {
        SET_POSTS_TO_STATE(state, posts) {
            state.posts = posts
        }
    },
    actions: {
        FETCH_POSTS_FROM_API({commit}) {
            return postsAPI.getPosts()
                .then((res) => {
                    commit('SET_POSTS_TO_STATE', res)
                    return res
                }).catch((error) => {
                    console.log(error)
                })
        }
    },
    modules: {}
})

export default store