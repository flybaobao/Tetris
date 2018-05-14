/**
 * Created by kanon on 2017/10/25.
 */
import Vue from 'vue'
var a = Vue.directive('title', {
  bind: function (el, binding) {
    document.title = binding.value.title
  }
})
export default a
