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

    children: [
      {
        path: '/login',
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
        path: '/admin',
        component: () => import( '../pages/Admin/MainPage'),
        meta: {
          auth: ['manager']
        },
      },
      {
        path: '/users',
        component: () => import( '../pages/Admin/UsersPage'),
        name: 'users',
        meta: {
          auth: ['admin']
        },
      },
      {
        path: '/posts',
        component: () => import( '../pages/Admin/PostsPage'),
        name: 'posts',
        meta: {
          auth: ['admin']
        },
      },
      {
        path: '/rights',
        component: () => import( '../pages/ErrorPage/AdminRights'),
        name: 'admin-rights',
        meta: {
          auth: ['admin']
        },
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
        name: 'home',
      },
      {
        path: '/single',
        component: () => import( '../pages/Main/SinglePage'),
        name: 'single',
      },
      {
        path: '/about',
        component: () => import( '../pages/Main/AboutUsPage'),
        name: 'about',
      },
      {
        path: '/contacts',
        component: () => import( '../pages/Main/ContactsPage'),
        name: 'contacts',
      },
      {
        path: '/gallery',
        component: () => import( '../pages/Main/GalleryPage'),
        name: 'gallery',
      },
    ]
  },
  {
    path: '*',
    component: () => import( '../pages/ErrorPage/NotFoundPage'),
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const { auth } = to.meta;
  const role = 'manager'
  console.log(auth, role)

  if (auth) {
    if (!role) {
      return next({ path: '/login' });
    }
    if (auth.length && !auth.includes(role)) {
      return next({path: '/single'});
    }
  }
  next()

})

export default router
