export default function auth ({ next, store }){
    if(!store.getters.AUTH.loggedIn){
        return next({
            name: 'login'
        })
    }
    return next()
}