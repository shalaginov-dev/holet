import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/auth',
        name: 'auth',
        component: () => import( '../layouts/AuthLayout')
    },
    {
        path: '/admin',
        name: 'admin',
        component: () => import( '../layouts/AdminLayout')
    },
    {
        path: '/main',
        name: 'home',
        component: () => import( '../pages/Main/HomePage'),
        alias: '/'

    },
    {
      path: '/single',
      name: 'single',
      component: () => import( '../pages/Main/SinglePage')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import( '../pages/Main/AboutUsPage')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import( '../pages/Main/ContactsPage')
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import( '../pages/Main/GalleryPage')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
