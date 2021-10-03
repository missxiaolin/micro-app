

/**
 * js 导入
 * @param {*} script 
 * @param {*} appName 
 * @returns 
 */
export const performScriptForEval = (script, appName) => {
  const scriptText = `
    () => {
      ${script}
      return window['${appName}']
    }
  `
  // librart
  return eval(scriptText).call(window, window)  // app module mount
}

/**
 * js 导入
 * @param {*} script 
 * @param {*} appName 
 */
export const performScriptForFunction = (script, appName) => {
  const scriptText = `
    ${script}
    return window['${appName}']
  `
  return new Function(scriptText).call(window, window)
}
