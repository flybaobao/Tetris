/**
 * Created by kanon on 2017/10/12.
 */
 var clientType = {
  pc: 'pc',
  iOS: 'iOS',
  android: 'android'
}
var getCilent = function () {
  var u = navigator.userAgent
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 //android终端
  var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) //ios终端!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  if (isAndroid) {
    return clientType.android
  } else if (isiOS) {
    return clientType.iOS
  } else {
    return clientType.pc
  }
}
export default {clientType, getCilent}
