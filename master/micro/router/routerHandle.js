import { isTurnChild } from '../utils/index'

export const turnApp = () => {
    if (!isTurnChild()) {
        return
    }
    console.log('路由切换')
    // 微前端的生命周期实现
}