import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const render = () => {
    createApp(App).use(store).use(router).mount('#app')
}

if (!window.__MICRO_WEB__) {
    render()
}

// 开始加载结构
export const bootstrap = () => {
}

// 渲染成功
export const mount = () => {
    render()
}

// 卸载成功
export const unmount = () => {
    // console.log('测试')
}


