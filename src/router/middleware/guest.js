export default function guest ({ next, store }){
    if(store.getters.AUTH.loggedIn){
        return next({
            name: 'home'
        })
    }

    return next()
}