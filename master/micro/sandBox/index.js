import { performScriptForEval } from './performScript'


// 子应用生命周期处理， 环境变量设置
export const sandBox = (app, script) => {
    // 2. 运行js文件
    const lifecycle = performScriptForEval(script, app.name)
}
