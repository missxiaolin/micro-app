import { fetchResource } from '../utils/fetchResource'



/**
 * 加载html方法
 * @param {*} app 
 */
export const loadHtml = async (app) => {
    // 子应用需要显示的在哪里
    let container = app.container


    // 子应用的入口
    let entry = app.entry

    const html = await parseHtml(entry)
    const ct = document.querySelector(container)

    if (!ct) {
        throw new Error('容器不存在')
    }

    ct.innerHTML = html

    return app
}

/**
 * @param {*} entry 
 * @returns 
 */
export const parseHtml = async (entry) => {
    const html = await fetchResource(entry)
    const div = document.createElement('div')
    div.innerHTML = html

    // 标签、linke、script
    const [dom, scriptUrl, script] = await parseJs()

    return html
}

/**
 * 解析html
 * @returns 
 */
export const parseJs = async () => {
    return ['', '', '']
}