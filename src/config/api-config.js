/**
 * Created by kanon on 2017/10/23.
 */
module.exports =  {

  /*图片地址*/
  cdn_host: 'https://hxtz-8518.b0.upaiyun.com/',
  dev: {
    dev_host: 'http://121.40.87.90:8005', /*请求根路径*/
    relativePath: 'mobile',
    version: 'v9', /*接口版本*/
    token: 'be597514a4b37a2fb24a0277b480805e' /*测试用户token*/
  },
  mock: {
    dev_host: 'http://121.40.171.1:8080', /*请求根路径*/
    relativePath: 'mockjsdata',
    version: '23', /*接口版本*/
    token: '36c2d4491a8a016acd15c3127c7f31c2' /*测试用户token*/
  },
  production:{
    // 生产环境，要打包好部署到服务中
    relativePath: 'mobile',
    version: 'v9', /*接口版本*/
  }

}
