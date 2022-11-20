export default function auth ({ next, store }){
    if(!store.getters.AUTH.isAdmin){
        return next({
            name: 'admin-rights'
        })
    }
    return next()
}