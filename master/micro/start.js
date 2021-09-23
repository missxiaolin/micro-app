import { getList, setList } from './const/subApps'
import { rewriteRouter } from './router/rewriteRouter'
import { currentApp } from './utils/index'

// 实现路由拦截
rewriteRouter()

export const registerMicroApps = (appList) => {
    setList(appList)
}

// 启动微前端框架
export const start = () => {
    // 验证子应用列表是否为空
    const apps = getList()
    if (!apps.length) {
        throw Error('子应用列表为空，请正确注册')
    }
    // 子应用， 查找符合当前子应用内容
    const app = currentApp()
}