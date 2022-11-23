import Vue from 'vue'
import store from '../store/store'
import VueRouter from 'vue-router'

import auth from './middleware/auth'
import guest from './middleware/guest'
import admin from './middleware/admin'
import middlewarePipeline from './middlewarePipeline'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: () => import( '../layouts/AuthLayout'),
    meta: {
      middleware: [
        admin
      ]
    },
    children: [
      {
        path: '',
        name: 'login',
        component: () => import( '../pages/Auth/LoginPage'),
        meta: {
          middleware: [
            admin
          ]
        },
      },
      {
        path: '/register',
        component: () => import( '../pages/Auth/RegisterPage'),
        name: 'register',
        meta: {
          middleware: [
            admin
          ]
        },
      }
    ]
  },

  {
    path: '/admin',
    component: () => import( '../layouts/AdminLayout'),
    meta: {
      middleware: [
        guest
      ]
    },
    children: [
      {
        path: '',
        component: () => import( '../pages/Admin/MainPage'),
        name: 'admin',
        meta: {
          middleware: [
            guest
          ]
        },
      },
      {
        path: '/rights',
        component: () => import( '../pages/ErrorPage/AdminRights'),
        name: 'admin-rights',
      }
    ]
  },
  
  {
    path: '/',
    component: () => import( '../layouts/MainLayout'),
    meta: {
      middleware: [
        auth
      ]
    },
    children: [
      {
        path: '',
        component: () => import( '../pages/Main/HomePage'),
        name: 'home',
        meta: {
          middleware: [
            auth
          ]
        },
      },
      {
        path: '/single',
        component: () => import( '../pages/Main/SinglePage'),
        name: 'single',
        meta: {
          middleware: [
            auth
          ]
        },
      },
      {
        path: '/about',
        component: () => import( '../pages/Main/AboutUsPage'),
        name: 'about',
        meta: {
          middleware: [
            auth
          ]
        },
      },
      {
        path: '/contacts',
        component: () => import( '../pages/Main/ContactsPage'),
        name: 'contacts',
        meta: {
          middleware: [
            auth
          ]
        },
      },
      {
        path: '/gallery',
        component: () => import( '../pages/Main/GalleryPage'),
        name: 'gallery',
        meta: {
          middleware: [
            auth
          ]
        },
      },
    ]
  },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next()
  }
  const middleware = to.meta.middleware
  const context = {
    to,
    from,
    next,
    store
  }
  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1)
  })
})

export default router
