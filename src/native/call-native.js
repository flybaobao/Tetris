/**
 * Created by kanon on 2017/11/1.
 */
import platform from '../config/platform'
export default  function call(funcName, data = null) {
  if (platform.getCilent() === platform.clientType.iOS) {
    try {
      if (window.OCModel) {
        let evalStr = 'OCModel.' + funcName + '(' + ')'
        if (data) {
          let param = JSON.stringify(data)
          evalStr = 'OCModel.' + funcName + '(' + param + ')'
        }
        eval(evalStr)
      } else {
        let param = {func: funcName};
        if (data) {
          param = {func: funcName, content: data};
        }
        webkit.messageHandlers.HXJSModel.postMessage(JSON.stringify(param));
      }
    } catch (err) {}
  } else if (platform.getCilent() === platform.clientType.android) {
    let evalStr = 'OCModel.' + funcName + '(' + ')'
    if (data) {
      let param = JSON.stringify(data)
      evalStr = 'OCModel.' + funcName + '(\'' + param + '\')'
    }
    eval(evalStr)
  } else if (platform.getCilent() === platform.clientType.pc) {
  } else {
  }
}
