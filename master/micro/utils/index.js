
// 给当前的路由跳转打补丁
export const patchRouter = (globalEvent, eventName) => {
    return function () {
        const e = new Event(eventName)
        globalEvent.apply(this, arguments)
        window.dispatchEvent(e)
    }
}

export const currentApp = () => {
    
}