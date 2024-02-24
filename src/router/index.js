import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '@/views/layout/Index.vue'
import login from '@/views/login/Index.vue'
import home from '@/views/home/home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    component: layout,
    children: [
      {
        path: '/',
        name: 'home',
        component: home,
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: login,
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
