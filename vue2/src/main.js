import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

let instance = null

const render = () => {
  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}

if (!window.__MICRO_WEB__) {
  render()
}

// 开始加载结构
export const bootstrap = () => {
  console.log('加载成功')
}

// 渲染成功
export const mount = (store, props) => {
  render()
  console.log('渲染成功')
}

// 卸载成功
export const unmount = () => {
  console.log('卸载', instance)
}