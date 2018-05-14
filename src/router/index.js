import Vue from 'vue'
import Router from 'vue-router'

import platform from '../config/platform'
import nativeEvents from '../native/nativeEvents'

import index from '@/views/index'
import feedback from '@/views/Feedback'
import scorehistory from '@/views/ScoreHistory'
import viphome from '@/views/vipCenter/vipHome'
import expleveldetail from '@/views/ExpLevelDetail'
import explevelrule from '@/views/ExpLevelRule'
import levelrule from '@/views/LevelRule/LevelRule'
import registerSuccess from '@/views/register/Success'
import masterlist from '@/views/MasterList'
import VipActivity from '@/views/VipActivity/VipActivityList';
import SuperStarPlaza from '@/views/superstar/SuperstarPlaza';
import ProtocolFxts from '@/views/protocol/fxts'
import ProtocolHgtz from '@/views/protocol/hgtz'

Vue.use(Router)
var R = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: feedback
    },
    {
      path: '/vip/scorehistory',
      name: 'scorehistory',
      component: scorehistory
    },{
      path: '/vip/index',
      name: 'viphome',
      component: viphome
    },
    {
      path: '/vip/expleveldetail',
      name: 'expleveldetail',
      component: expleveldetail
    },
    {
      path: '/vip/explevelrule',
      name: 'explevelrule',
      component: explevelrule
    },
    {
      path: '/vip/levelrule',
      name: 'levelrule',
      component: levelrule
    },
    {
      path: '/register/Success', //注册成功页
      name: 'registerSuccess',
      component: registerSuccess
    },
    {
      path: '/superstar/list',
      name: 'masterlist',
      component: masterlist
    },
    {
      path: '/activity/list',
      name: 'vipactivity',
      component: VipActivity
    },
    {
      path: '/starplaza',
      name: 'starplaza',
      component: SuperStarPlaza
    },
    {
      path: '/protocol/fxts', //证券投资基金-风险提示
      name: 'ProtocolFxts',
      component: ProtocolFxts
    },
    {
      path: '/protocol/hgtz', //证券投资基金-风险提示
      name: 'ProtocolHgtz',
      component: ProtocolHgtz
    }
  ],
})
/*
* data {
 refresh = 1,
 router = "product/appointment",
 params = {
     product_id = 504,
     int_access = 1,
     type = 1,
     planner_id = 0,
   },
 remember = 1,
 forget = 0,
}
* */
R.hx_push = function(url, data = {refresh:1,router:'',params:{},remember:1,forget:0}){
  if (platform.getCilent() === platform.clientType.pc) {
    this.push({ path: url, query: data})
  } else {
    data['router'] = url
    nativeEvents.push(data)
    // this.push({ path: url, query: data})
  }
}
R.hx_push3_2 = function(url, data = {refresh:1,router:'',params:{},remember:1,forget:0}){
  if (platform.getCilent() === platform.clientType.pc) {
    this.push({ path: url, query: data})
  } else {
    data['router'] = url
    nativeEvents.push3_2(data)
    // this.push({ path: url, query: data})
  }
}
export default R
