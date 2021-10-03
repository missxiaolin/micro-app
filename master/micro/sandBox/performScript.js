

/**
 * js 导入
 * @param {*} script 
 * @param {*} appName 
 * @param {*} global
 * @returns 
 */
export const performScriptForEval = (script, appName, global) => {
  const scriptText = `
    () => {
      ${script}
      return window['${appName}']
    }
  `
  // librart
  return eval(scriptText).call(global, global)  // app module mount
}

/**
 * js 导入
 * @param {*} script 
 * @param {*} appName 
 * @param {*} global
 * @returns 
 */
export const performScriptForFunction = (script, appName, global) => {
  const scriptText = `
    ${script}
    return window['${appName}']
  `
  return new Function(scriptText).call(global, global)
}
