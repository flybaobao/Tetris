<template>
  <div class="success">
    <x-header :left-options="{showBack: false}" class="header" v-title="{'title': title}" :title="title">
      <a slot="right" class="right" @click="goIndex">{{titleRightText}}</a>
    </x-header>
    <div class="prompt">
      <i class="prompt-ico"></i>
      <div class="prompt-text">恭喜注册成功！</div>
    </div>
    <div class="planner-tit">挑选一个理财师<br>先你所想，懂你所需</div>
    <div class="planner-list" v-if="!planner && planners.length">
      <swiper :options="swiperOptions" ref="swiper">
        <swiper-slide v-for="(planner,index) in planners" :key="planner.id">
          <div class="panel">
            <div class="head" @click="goPlannerMain(planner.id)">
              <img :src="planner.head"/>
            </div>
            <div class="content">
              <div class="name">{{planner.name}}</div>
              <div class="job">明星理财师<i class="v-ico v1-ico"></i></div>
              <ul class="record">
                <li><em>管理资产</em>1200万</li>
                <li><em>服务客户</em>158人</li>
                <li><em>从业经验</em>10年</li>
              </ul>
              <div class="btn" @click="selectPlanner(planner.id,index,planner.name)">
                <i class="select-ico">选择该理财师</i>
              </div>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
    <div class="planner-list exclusive" v-if="planner">
      <div class="panel">
        <div class="head" @click="showVideo(planner.id)">
          <img :src="planner.head"/>
        </div>
        <div class="content">
          <div class="name">{{planner.name}}</div>
          <div class="job">明星理财师<i class="v-ico v1-ico"></i></div>
          <ul class="record">
            <li><em>管理资产</em>1200万</li>
            <li><em>服务客户</em>158人</li>
            <li><em>从业经验</em>10年</li>
          </ul>
          <div class="zx">
           <i class="zx-ico" @click="goIm(planner.user_id,planner.name,planner.head)">咨询</i>
          </div>
        </div>
      </div>
    </div>
    <div class="success-Planner" v-transfer-dom>
      <confirm v-model="modeShow" @on-confirm="onConfirm">
        <i class="planner-ico"></i>
        <p style="text-align:center;">{{modeTitle}}</p>
      </confirm>
    </div>
  </div>
</template>

<script>
  import { XDialog, XHeader, Confirm, TransferDomDirective as TransferDom} from 'vux'
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide} from 'vue-awesome-swiper'
  import apis from '@/service/apis';

  export default {
    data () {
      return {
        title: '注册成功',
        planner: null,
        planners:[],
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          loop: true,
          slidesPerView: 1.14,
          spaceBetween:0
        },
        modeShow: false,
        modeTitle: '确定要选择为专属理财师吗?',
        selectPlannerId: 0,
        selectPlannerIndex: 0
      }
    },
    created () {
      this.$nextTick(()=>{
        let params = {}
        this.nativeEvents.showLoading()
        this.request(apis.registerSuccess, params, (json) => {
          this.nativeEvents.dismissLoading()
          if (json.code === 1) {
            this.planners = json.data.list
            if(this.planners.length === 1){
              this.planner = this.planners[0]
            }
          }
        }, (json) => {
          this.nativeEvents.dismissLoading()
          this.nativeEvents.show_toast("请求数据出错")
        },0,'get')
      })
    },
    computed: {
      titleRightText() {
        return this.planner? '完成':'跳过'
      }
    },
    methods: {
      goPlannerMain(id){
        this.nativeEvents.goPlannerMain(id)
      },
      goIm(id,name,head){
        this.nativeEvents.toIm({
          id: id,
          name: name,
          head: head,
          type: 2
        })
      },
      selectPlanner(id,index,name){
        this.modeTitle = `确定要选择${name}为专属理财师吗`
        this.selectPlannerId = id
        this.modeShow = true
        this.selectPlannerIndex = index
      },
      goIndex() {
        this.nativeEvents.dismissView()
      },
      goBack() {
        this.nativeEvents.nativego_back()
      },
      onConfirm () {
        let params = {}
        params.planner_id = this.selectPlannerId
        this.nativeEvents.showLoading()
        this.request(apis.changePersonalPlanner, params, (json) => {
          if (json.code === 1) {
            this.planner = this.planners[this.selectPlannerIndex]
            this.nativeEvents.changePersonalPlanner({
              uid: this.planner.user_id,
              name: this.planner.name,
              head: this.planner.head,
              type: 2
            })
          }else{
            this.nativeEvents.show_toast("提交出错")
          }
          this.nativeEvents.dismissLoading()
        }, (json) => {
          this.nativeEvents.show_toast("提交出错")
          this.nativeEvents.dismissLoading()
        })
      }
    },
    components: {
      swiper,
      swiperSlide,
      XDialog,
      XHeader,
      Confirm
    },
    directives: {
      TransferDom
    }
  }
</script>

<style lang="less">
  @import "../../common/less/function";
  .success-Planner{
    .weui-dialog__bd:first-child{
      padding-top: 1.2em;
    }
    .planner-ico{
      width: 65px;
      height: 65px;
      display: block;
      margin: 0 auto 10px auto;
      background-image: url('../../assets/register/success/planner-ico.png');
      background-repeat: no-repeat;
      background-size: 65px 65px;
    }
  }
  .success{
    .prompt{
      text-align: center;
      padding: 18px 0;
      .prompt-ico{
        background-image: url('../../assets/register/success/prompt-ico.png');
        background-repeat: no-repeat;
        background-size: 64px 59px;
        width: 64px;
        height: 59px;
        display: inline-block;
      }
      .prompt-text{
        padding-top: 10px;
      }
    }
    .planner-list{
      padding-left: 20px;
      .panel{
        padding: 8px;
        display: flex;
        height: 174px;
        background-color: #e5dbc3;
        text-align: center;
        border-radius: 5px;
        background-image: url('../../assets/register/success/planner-bg.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        box-shadow: 4px 4px 3px #ebeae8;
        .head{
          flex: 0 0 125px;
          width: 125px;
          height: 145px;
          position: relative;
          &:after{
            content: ' ';
            position: absolute;
            width: 23px;
            height: 23px;
            bottom: 10px;
            right: 10px;
            background-image: url('../../assets/register/success/player-ico.png');
            background-repeat: no-repeat;
            background-size: 23px 23px;
          }
          img{
            margin-top: 5px;
            width: 100%;
            height: 100%;
          }
        }
        .content{
          flex: 1;
          padding-left: 12px;
          text-align: left;
          .v-ico{
            display: inline-block;
            width: 17px;
            height: 17px;
            vertical-align: top;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            margin: -1px 0 0 3px;
          }
          .v1-ico{
            .level(1);
          }
          .v2-ico{
            .level(2);
          }
          .v3-ico{
            .level(3);
          }
          .v4-ico{
            .level(4);
          }
          .name{
            font-size: 18px;
            margin-top: 5px;
            font-weight: bold;
            em{
              font-style: normal;
              font-size: 13px;
              margin-left: 6px;
            }
          }
          .job{
            font-size: 13px;
            // font-weight: bold;
          }
          .record{
            font-size: 13px;
            margin-top: 12px;
            li{
              padding-bottom: 2px;
              em{
                font-style: normal;
                margin-right: 10px;
              }
            }
          }
          .btn{
            text-align: right;
            padding-top: 12px;
            font-size: 14px;
            color: #c2a55f;
            .select-ico{
              height: 20px;
              font-style: normal;
              background-image: url('../../assets/register/success/select-ico.png');
              display: inline-block;
              background-repeat: no-repeat;
              padding:0 4px 0 26px;
              background-size: 20px 20px;
            }
            @media screen and (max-width: 365px) {
              .select-ico{
                padding:0 4px 0 21px;
              }
            }
          }
          .zx{
            padding-top: 12px;
            .zx-ico{
              color: #c2a55f;
              font-size: 15px;
              border-radius: 5px;
              border: 1px solid #c2a55f;
              font-style: normal;
              padding: 5px 14px;
            }
          }
        }
      }
      .swiper-container{
        padding-bottom: 40px;
      }
      .swiper-slide{
        transition: all 0.2s;
        // transform: scale(0.9);
      }
      .swiper-slide-active{
        transform: scale(1);
      }
      .swiper-slide-next{
        transform: scale(0.9);
      }
      .swiper-pagination-bullet{
        /*background-color: #dcdcdc;*/
        transition: all 0.2s;
      }
      .swiper-pagination-bullet-active{
        width: 25px;
        border-radius:5px;
        transition: all 0.2s;
        background-color: #c2a55f;
      }
      .swiper-pagination{
        margin-left: -20px;
      }
    }
    .exclusive{
      padding-left: 0;
      margin: 0 20px;
    }
    .planner-tit{
      text-align: center;
      color: #c2a55f;
      font-size: 14px;
      margin-bottom: 15px;
    }
    .player{
      width: 100%;
    }
    .weui-dialog{
      width: 90%;
      max-width: 100%;
    }
    .vux-close {
      margin-top: 8px;
      margin-bottom: 8px;
      display: block;
      height: 50px;
    }
    .vux-header{
      background: none;
      .vux-header-title{
        color: #333;
      }
      .vux-header-left,.vux-header-right{
        top: 12px;
      }
    }
    .header{
      .left{
        color: #333;
        font-size: 18px;
      }
      .right{
        color: #333;
        font-size: 16px;
        vertical-align: top;
      }
    }
  }

</style>
