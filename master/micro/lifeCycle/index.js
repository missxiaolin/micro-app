import { findAppByRoute } from '../utils/index'
import { getMainLifecycle } from '../const/mainLifeCycle'

export const lifecycle = () => {
    // 获取到上一个子应用
    const prevApp = findAppByRoute(window.__ORIGIN_APP__)

    // 获取要跳转的子应用，执行对应的生命周期
    const nextApp = findAppByRoute(window.__CURRENT_SUB_APP__)

    if (!nextApp) {
        return
    }    
    if (prevApp) {
        destroyed(prevApp)
    }
    beforeLoad(nextApp)
}

export const beforeLoad = () => {
    
}

export const mounted = () => {

}

export const destroyed = async (app) => {
    app && app.destroyed && app.destroyed()
    // 对应的执行以下主应用的生命周期
    await runMainLifeCycle('destroyed')
}

/**
 * 执行生命周期
 * @param {*} type 
 */
export const runMainLifeCycle = async (type) => {
    const mainlife = getMainLifecycle()
    
    await Promise.all(mainlife[type].map(async item => await item()))
}
