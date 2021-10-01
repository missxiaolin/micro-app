

/**
 * js 导入
 * @param {*} script 
 * @param {*} appName 
 * @returns 
 */
export const performScriptForEval = (script) => {
    eval(script)// app module mount
}

/**
 * @param {*} script 
 */
export const performScriptForFunction = (script) => {
  new Function(script).call(window, window)
}
