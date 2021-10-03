import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '../pages/index'
const routes = [
  // 首页
  {
    path: '/index',
    name: 'Index',
    component: Index
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
