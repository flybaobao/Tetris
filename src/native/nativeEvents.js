/**
 * Created by kanon on 2017/10/12.
 */
import call from './call-native'

export default {

  push: function (data) {
    call('push', data)
  },
  push3_2: function (data) {
    call('push3_2', data)
  },
  // 分享
  appShare: function (params) {
    call("app_share", params)
  },
  // 登录
  toLogin: function () {
    call("to_login")
  },
  // 返回
  nativego_back: function () {
    call("nativgo_back", {"func": "nativgo_back"})
  },
  // 显示toast
  show_toast: function (msg) {
    call("show_toast", {"msg": msg})
  },
  // 跳转至发现页面
  go_findView: function () {
    call("go_findView")
  },
  // 跳转至投资页面
  go_investView: function () {
    call("go_investView")
  },
  // 跳转理财师主页
  goPlannerMain: function (id) {
    call("mobile_go_plannerMainWithID", id)
  },
  // 跳转IM
  toIm: function (data) {
    call("im", data)
  },
  //显示hud
  showLoading () {
    call("showLoading")
  },
  //隐藏hud
  dismissLoading () {
    call("dismissLoading")
  },
  // 注册成功完成按钮点击
  dismissView() {
    call("dismissViewController")
  },
  // 设置专属理财后通知APP
  changePersonalPlanner(params){
    call("change_personalPlanner", params)
  },
  gotoUserMainPage (params) {
    call("gotoUserMainPage", params)
  },
  gotoVideoList (params) {
    call("gotoVideoList", params)
  }
}
