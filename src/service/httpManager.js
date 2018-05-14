/**
 * Created by kanon on 2017/10/12.
 */
import { AjaxPlugin } from 'vux'
import api_config from '../config/api-config'


export default function (url, parameters, successCallback, failCallback,mock = 0,method = 'post') {
  let api = ''
  if (process.env.NODE_ENV === 'production') {
    api = '../' + api_config.production.relativePath + '/' + api_config.production.version + '/' + url
  } else {
    if (mock === 1){
      api = '/mock/' + url
    } else{
       api = '/api/' + url
    }
  }
  if (parameters === null){
    parameters = {}
  }

  // 将网页url中的token添加到参数中
  let querys = this.$route.query;
  if (querys['token'] === undefined) {

    if (parameters['token'] === undefined) {
      parameters['token'] = api_config.token
    }

  } else {
    parameters['token'] = querys['token'];
  }

  if (method === 'post') {
    AjaxPlugin.$http.post(api, parameters)
      .then(function (response) {
        successCallback(response.data)
      })
      .catch(function (response) {
        failCallback(response.data)
      })
  } else {
    AjaxPlugin.$http.get(api, {params:parameters})
      .then(function (response) {
        successCallback(response.data)
      })
      .catch(function (response) {
        failCallback(response.data)
      })
  }
}
