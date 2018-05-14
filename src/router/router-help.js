/**
 * Created by kanon on 2017/10/18.
 */
import platform from '../config/platform'
import nativeEvents from '../native/nativeEvents'

var RouterHelper  = {
 push (router,url, data = null){
    if (platform.getCilent() === platform.clientType.pc) {
      console.log(this === router)
      router.push({ path: '/', query: { plan: 'private' }})
    } else {
      alert(platform.getCilent())
      data['path'] = url
      nativeEvents.call('push', data)
    }
  }
}
export default RouterHelper
