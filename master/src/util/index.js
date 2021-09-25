import { registerMicroApps, start } from '../../micro/index'

// import { loading } from '../store'

export const registerApp = (list) => {
    // 注册子应用
    registerMicroApps(list, {
        beforeLoad: [
            () => {
                console.log('开始加载')
            }
        ],
        mounted: [
            () => {
                console.log('渲染完成')
            }
        ],
        destoryed: [
            () => {
                console.log('卸载完成')
            }
        ]
    })
    start()
}
