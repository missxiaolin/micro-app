import { isTurnChild } from '../utils/index'
import { lifecycle } from '../lifeCycle/index'


export const turnApp = async () => {
    if (!isTurnChild()) {
        return
    }
    // 微前端的生命周期实现
    await lifecycle()
}