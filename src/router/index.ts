import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import store from '@/store';

import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/profile',
    component: () => import('@/views/Profile.vue'),
    beforeEnter: (to: any, from: any, next: any ): void => {
      if(store.getters.getUser) next();
      else next("/login");
    }
  },
  {
    path: '/settings',
    component: () => import('@/views/Settings.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
