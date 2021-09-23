import { registerMicroApps, start } from '../../micro/index'

// import { loading } from '../store'

export const registerApp = (list) => {
    // 注册子应用
    registerMicroApps(list)
    start()
}
