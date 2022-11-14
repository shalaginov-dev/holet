import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    headers: {},
})

export const postsAPI = {
    getPosts() {
        // return instance.get(`api/posts`).then(res => res.data)$$
        return new Promise(resolve => {
            resolve([
                {
                    name: 'House 1',
                    description: 'cool house',
                    price: 100000,
                    id: 'T1',
                    available: true,
                    category: 'house'
                },
                {
                    name: 'House 2',
                    description: 'home with perfect view',
                    price: 105000,
                    id: 'T2',
                    available: true,
                    category: 'apartment'
                },
                {
                    name: 'House 3',
                    description: 'very big house',
                    price: 143000,
                    id: 'T3',
                    available: false,
                    category: 'house'
                },
                {
                    name: 'House 4',
                    description: 'small and cosy apartment',
                    price: 98400,
                    id: 'T4',
                    available: true,
                    category: 'apartment'
                },
                {
                    name: 'House 5',
                    description: 'so expensive object',
                    price: 87050,
                    id: 'T5',
                    available: true,
                    category: 'apartment'
                }
            ])
        })
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