<template>
  <div v-title ="{title: '会员中心'}" style="height: 100%">
    <div class="viplevel">
      <div class="viphalo">
        <img src="../../assets/vipcenter/viphalo.png" alt="">
      </div>
      <div class="viplogo">
        <img :src="getLvlImage()" alt="">
      </div>
      <div class="vip-exp">
        <div class="vip-expdes">{{data.lvl.user_exp}}</div>
        <div class="vip-progress">
          <div class="vip-relprogress" :style="{width: data.lvl.user_exp/data.lvl.lvl_max_exp*100 + '%'}"></div>
        </div>
        <div class="vip-expdes">{{data.lvl.lvl_max_exp}}</div>
      </div>
      <div class="exp-des">还需{{data.lvl
        .lvl_left_exp}}经验值升级为<em style="color:#ff8800;font-style: normal;">{{data.lvl.next_lvl_des}}会员</em></div>
    </div>
    <div class="vip-acitons">
      <!--<prettybutton :head="imgs.vip_upgrade" @click.native="upgradeClick" name="如何升级" :namestyle=" { color: '#7A632D', 'font-weight': 'bold' } " :headstyle="{width:'30px', height:'30px'}"></prettybutton>-->
      <!--<div class="vip-at-border"></div>-->
      <prettybutton :head="imgs.vip_levelrule" @click.native="levelruleClick" name="等级规则" :namestyle=" { color: '#7A632D', 'font-weight': 'bold' } " :headstyle="{width:'30px', height:'30px'}"></prettybutton>
      <div class="vip-at-border"></div>
      <prettybutton :head="imgs.vip_record" @click.native="recordClick" name="经验值明细" :namestyle=" { color: '#7A632D', 'font-weight': 'bold' } " :headstyle="{width:'30px', height:'30px'}"></prettybutton>
    </div>
    <div class="vip-data">
      <vip-section v-for="(indexPath, index) in data.center" :key="index" v-if="indexPath.routes.length > 0"
                   :data="indexPath"
                   :group = "index"
                   v-on:didSeletctedCell="showAlert" v-on:selectedGroup ="selectedGroup"></vip-section>
    </div>
    <div>
      <x-dialog v-model="showDialogStyle" hide-on-blur
                :dialog-style="{'max-width': '100%', width: '70%', height: '60%', 'background-color': 'transparent'}">
        <div @click="showDialogStyle = false">
          <div class="vip-alert">
            <div class="vip-alert-title">
              <div class="vip-alert-name">{{dialogData.name}}</div>
              <div class="vip-alert-subname">经验值+{{dialogData.exp}}</div>
            </div>
            <div class="vip-alert-content">
              {{dialogData.des}}
            </div>
          </div>
          <br>
          <x-icon type="ios-close-outline" size="35" style="fill:#fff;"></x-icon>
        </div>
      </x-dialog>
    </div>
  </div>
</template>

<script>
  import prettybutton from '../../components/prettybutton'
  import vipSection from './vipcentersection'
  import { XDialog } from 'vux'
  import Vue from 'vue'
//  import { ConfigPlugin } from 'vux'
//  Vue.use(ConfigPlugin, {
//    $layout: 'VIEW_BOX'
//  })
  import vip_upgrade from '../../assets/vipcenter/vip_upgrade.png'
  import vip_levelrule from '../../assets/vipcenter/vip_levelrule.png'
  import vip_record from '../../assets/vipcenter/vip_record.png'
  import vip_sign from '../../assets/vipcenter/vip_sign.png'
  import vip_invest from '../../assets/vipcenter/vip_invest.png'
  import vip_interaction from '../../assets/vipcenter/vip_interaction.png'
  import vip_licai from '../../assets/vipcenter/vip_licai.png'
  import vip_more from '../../assets/vipcenter/vip_more.png'
  export default {
    components: {
      prettybutton,
      vipSection,
      XDialog
    },
    data () {
      return {
        showDialogStyle:false,
        dialogData : {},
        imgs: {
          vip_upgrade,
          vip_levelrule,
          vip_record,
          vip_sign,
          vip_invest,
          vip_interaction,
          vip_licai,
          vip_licai,
        },
        data: {
          lvl:{
            "lvl": 1,
            "lvl_desc": "原木",
            "lvl_max_exp": 0,
            "lvl_left_exp": 0,
            "next_lvl_des": "",
            "user_exp": 0
          },
          center:{
            1: {
              group: {
                name: '每日签到',
                image: vip_sign,
              },
              isSelected: false,
              routes: []
            },
            2: {
              group: {
                name: '邀请好友',
                image: vip_invest,
              }
              ,
              isSelected: false,
              routes: [
              ]
            },
            3: {
              group: {
                name: '参与互动',
                image: vip_interaction,
              }
              ,
              isSelected: false,
              routes: []
            },
            4: {
              group: {
                name: '购买理财产品',
                image: vip_licai,
              }
              ,
              isSelected: false,
              routes: []
            },
            5: {
              group: {
                name: '更多',
                image: vip_more,
              }
              ,
              isSelected: false,
              routes: []
            }
          }
        }
      }
    },
    mounted (){
      var that = this
      this.request(this.apis.vipCenter, null, function (rep) {
        that.data.lvl = rep.data.lvl
        var center = rep.data.center
        for (var p in center){
          var remoteData = center[p]
          var data = that.data.center[p]
          data.group.name = remoteData.group_name
          data.routes = remoteData.routes
        }
      },function (error) {
        console.log(error)
      })
    },
    methods: {
      getLvlImage () {
        return require('../../assets/vipcenter/v' + this.data.lvl.lvl + '.png')
      },
      upgradeClick () {
        this.$router.hx_push('/vip/explevelrule')
      },
      levelruleClick () {
        this.$router.hx_push('/vip/explevelrule')
      },
      recordClick () {
        this.$router.hx_push('/vip/scorehistory')
      },
      showAlert (group, index) {
        this.showDialogStyle = true
//        this.showDialogStyle = !this.showDialogStyle
        var _data = this.data.center[group]
        var route = _data.routes[index]
        var obj = {
          name: route.task.task_tile,
          des: route.task.task_detail_desc,
          exp: route.score
        }
        this.dialogData = obj
      },
      selectedGroup(group_id){
         switch (parseInt(group_id)){
           case 1:
             break;
           case 2:
             this.$router.hx_push3_2('inviteFriends/inviteBuyer')
             break;
           case 3:
             this.nativeEvents.go_findView()
             break;
           case 4:
             this.nativeEvents.go_investView()
             break;
           default:
             break;
         }
      }
    }
  }
</script>

<style scoped>
  .viplevel{
    height:203px;
    background-color: #1f242b;
    padding-top: 60px;
  }
  .viplogo{
    position: relative;
    margin: 0px auto;
    /*background-image: url("../../assets/vipcenter/viplogo.png");*/
    /*background-size:105px 135px;*/
    /*background-repeat:no-repeat;*/
    width: 105px;
    height: 135px;
    z-index: 1000;
  }
  .viplogo img{
    height: 135px;
    width: 105px;
  }
  .viphalo{
    position: absolute;
    top:25px;
    left: 50%;
    margin-left: -105px;
    /*background-image: url("../../assets/vipcenter/viphalo.png");*/
    /*background-size:208px 208px;*/
    /*background-repeat:no-repeat;*/
    width: 208px;
    height: 208px;
    animation:7s linear infinite mymove;
    z-index: 1;
    /*width: 208px;*/
    /*height: 208px;*/
    /*opacity: 0.6;*/
    /*background: -webkit-radial-gradient(rgba(255,223,67,1), rgba(255,223,67,0) 70%);*/
    /*transition: all 800ms cubic-bezier(0.68, -0.55, 0.265, 1.55);*/
  }
  .viphalo img{
    height: 208px;
    width: 208px;
  }
  @keyframes mymove{
    from{transform:rotate(0deg)}
    to{transform:rotate(360deg)}
  }

  .vip-exp{
    height:20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .vip-progress{
    background-image: url("../../assets/vipcenter/vipprogress.png");
    background-size:4.88rem 4px;
    background-repeat:no-repeat;
    width: 4.88rem;
    height: 4px;
    position: relative;
  }
  .vip-relprogress{
    position: absolute;
    background-color: #ffb700;
    height: 4px;
    border-radius: 2px;
  }
  .vip-expdes{
    font-size: 14px;
    font-weight:bold;
    color: #c2a55f;
    padding: 0px 15px;
  }
  .exp-des{
    /*margin: 0 auto;*/
    color: #C2A55F;
    font-size:12px;
    text-align: center;
    margin-top: 5px;
  }

  /*事件栏*/
  .vip-acitons{
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-around;
    justify-content: space-around;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    height: 68px;
    background-color: #c2a55f;
  }
  .vip-at-item{
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
  }
  .vip-at-border{
    width: 0px;
    height: 68px;
    border-left:1px solid #AD9354;
  }

  /*内容*/
  .vip-data{
    padding: 15px 15px;
  }
  /*弹框*/
  .vip-alert{
    background-color: #E7DFCA;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: space-between;
    border-radius: 4px 4px 4px 4px;
  }
  .vip-alert-title{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 10px;
  }
  .vip-alert-name{
    font-size: 18px;
    color: #7f652d;
    font-weight: bold;
  }
  .vip-alert-subname{
    font-size: 14px;
    color: #99865F;
  }
  .vip-alert-content{
    flex: 1;
    text-align: left;
    background-color: #ffffff;
    font-size: 16px;
    margin-top: 0px;
    margin-bottom: 10px;
    margin-left: 6px;
    margin-right: 6px;
    padding: 13px 13px;
    color: #898358;
    word-wrap:break-word;
  }

</style>

