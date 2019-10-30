import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/:username',
    name: 'User Repositories',
    props: true,
    component: () => import('../views/Repositories.vue')
  },
  {
    path: '/:username/:repository/readme',
    name: 'README',
    props: true,
    component: () => import('../views/Readme.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
