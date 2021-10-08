import Vue from 'vue'
import VueRouter from 'vue-router'
import Energy from '../pages/energy/index'
import Index from '../pages/index/index'
Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    name: 'Energy',
    component: Energy
  },
  {
    path: '/acs/index',
    name: 'Index',
    component: Index
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: '/',
  routes
})

export default router
