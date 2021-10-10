import { registerMicroApps, start } from '../../micro/index'

import { loading } from '../store'

export const registerApp = (list) => {
    // 注册子应用
    registerMicroApps(list, {
        beforeLoad: [
            () => {
                loading.changeLoading(true)
                // console.log('主应用开始加载')
            }
        ],
        mounted: [
            () => {
                loading.changeLoading(false)
                // console.log('主应用渲染完成')
            }
        ],
        destroyed: [
            () => {
                // console.log('主应用卸载完成')    
            }
        ]
    })
    start()
}
