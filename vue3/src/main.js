import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

let instance = null

const render = () => {
    instance = createApp(App)
    instance.use(store).use(router).mount('#app')
}

if (!window.__MICRO_WEB__) {
    render()
}


// 开始加载结构
export const bootstrap = () => {
    console.log('加载成功')
}

// 渲染成功
export const mount = () => {
    render()
    console.log('渲染成功')
}

// 卸载成功
export const unmount = () => {
    console.log('卸载', instance)
}