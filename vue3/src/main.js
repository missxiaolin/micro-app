
import { createApp, h } from 'vue';
import App from './App.vue';
import router from './router'

const render = () => {
  createApp(App).use(router).mount('#app');
}

if (!window.__MICRO_WEB__) {
  render()
}

// 开始加载结构
export const bootstrap = () => {
  console.log('加载成功 vue3')
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
