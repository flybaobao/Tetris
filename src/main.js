// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import _apis from './service/apis'
import request from './service/httpManager'
import nativeEvents from './native/nativeEvents'
import './directives/product-directives'
import api_config from './config/api-config';

// http
Vue.prototype.request = request
Vue.prototype.apis = _apis

// 原生事件
Vue.prototype.nativeEvents = nativeEvents

// 点击延迟
FastClick.attach(document.body)
Vue.config.productionTip = false
// rem
import './config/rem'

Vue.mixin({
  methods: {
    absoluteImageUrl(image_url) {
      return api_config.cdn_host + image_url;
    }
  },
  filters: {
    // 用于处理限制字数显示省略号的过滤器
    textLineBreak: function (text, maxLength, lineBreakMode) {
      // 文字省略模式
      const LineBreakMode = {
        WrappingTruncatingTail: 1, // 显示头部文字内容，其他直接截断。
        WrappingTruncatingHead: 2, // 显示尾部文字内容，其他直接截断。
        EllipsisTruncatingTail: 3, // 结尾部分的内容以……方式省略，显示头的文字内容。
        EllipsisTruncatingMiddle: 4, // 中间的内容以……方式省略，显示头尾的文字内容。
        EllipsisTruncatingHead: 5 // 前面部分文字以……方式省略，显示尾部文字内容。
      };

      if (lineBreakMode === null || lineBreakMode === undefined) {
        lineBreakMode = LineBreakMode.EllipsisTruncatingTail;
      }
      switch (lineBreakMode) {
        case LineBreakMode.WrappingTruncatingTail:
          return text.substr(0, maxLength);
        case LineBreakMode.WrappingTruncatingHead:
          return text.substr(-maxLength);
        case LineBreakMode.EllipsisTruncatingTail:
          return text.substr(0, maxLength) + (text.length > maxLength ? '...' : '');
        case LineBreakMode.EllipsisTruncatingMiddle:
          let resultText = text.substr(0, maxLength);
          if (text.length > maxLength) {
            return resultText.substr(0, parseInt(maxLength / 2)) + '...' + resultText.substr(parseInt(maxLength / 2));
          }
          return resultText;
        case LineBreakMode.EllipsisTruncatingHead:
          return (text.length > maxLength ? '...' : '') + text.substr(-maxLength);
      }
      return text;
    }
  }
});

/* eslint-disable no-new */

new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
