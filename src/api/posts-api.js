import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://62.217.177.152/',
    headers: {},
})

export const postsAPI = {
    getPosts() {
        return instance.get(`api/posts/getall`).then(res => res.data)
    },
    deletePosts(itemId) {
        return instance.delete(`api/posts/del${itemId}`).then(res => res.data)
    },
    createPosts(RequestItemObj) {
        return instance.post(`api/posts/save`, RequestItemObj).then(res => res.data)
    },
    updatePosts(itemId, RequestItemObj) {
        return instance.put(`api/posts/edit${itemId}`, RequestItemObj).then(res => res.data)
    },
}