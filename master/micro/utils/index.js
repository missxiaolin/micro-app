import { getList } from '../const/subApps'

// 给当前的路由跳转打补丁
export const patchRouter = (globalEvent, eventName) => {
    return function () {
        const e = new Event(eventName)
        globalEvent.apply(this, arguments)
        window.dispatchEvent(e)
    }
}

/**
 * @returns 
 */
export const currentApp = () => {
    const currentUrl = window.location.pathname

    return filterApp('activeRule', currentUrl)
}

/**
 * @param {*} key 
 * @param {*} value 
 * @returns 
 */
const filterApp = (key, value) => {
    const currentApp = getList().filter(item => item[key] === value)
    
    return currentApp && currentApp.length ? currentApp[0] : {}
}

/**
 * 子应用是否做了切换
 */
export const isTurnChild = () => {
    window.__ORIGIN_APP__ = window.__CURRENT_SUB_APP__
    if (window.__CURRENT_SUB_APP__ === window.location.pathname) {
        return false
    }
    const currentApp = window.location.pathname.match(/(\/\w+)/)
    if (!currentApp) {
        return
    }
    // /vue3 /vue2
    window.__CURRENT_SUB_APP__ = currentApp[0]
    return true
}