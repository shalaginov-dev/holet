import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        component: () => import( '../layouts/AuthLayout'),
        children: [
            {
                path: '',
                component: () => import( '../pages/Auth/LoginPage'),
            },
            {
                path: '/register',
                component: () => import( '../pages/Auth/RegisterPage'),
            }
        ]
    },
    {
        path: '/admin',
        component: () => import( '../layouts/AdminLayout'),
        children: [
            {
                path: '',
                component: () => import( '../pages/Admin/MainPage'),
            }
        ]
    },
    {
        path: '/',
        component: () => import( '../layouts/MainLayout'),
        children: [
            {
                path: '',
                component: () => import( '../pages/Main/HomePage'),
            },
            {
                path: '/single',
                component: () => import( '../pages/Main/SinglePage')
            },
            {
                path: '/about',
                component: () => import( '../pages/Main/AboutUsPage')
            },
            {
                path: '/contacts',
                component: () => import( '../pages/Main/ContactsPage')
            },
            {
                path: '/gallery',
                component: () => import( '../pages/Main/GalleryPage')
            },
        ]
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
