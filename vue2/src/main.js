import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false

const render = () => {
  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app-vue')
}

if (!window.__MICRO_WEB__) {
  render()
}

// 开始加载结构
export const bootstrap = () => {
  // console.log('加载成功 vue2')
}

// 渲染成功
export const mount = (app) => {
  // app.appInfo.header.changeHeader(false)
  render()
}

// 卸载成功
export const unmount = () => {
  // console.log('测试')
  // console.log('卸载', instance)
}
