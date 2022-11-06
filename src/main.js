import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import JQuery from 'jquery'
window.$ = JQuery
import './assets/js/main'




Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
