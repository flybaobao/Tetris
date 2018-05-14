<template>
  <div style="background-color: #F5F5F5;" v-title="{'title': '等级规则'}">
    <div class="container-wrapper">
      <div class="title">
        <img src="../assets/explevelrule/vip_level_intro.png" alt="">
      </div>
      <div class="border">
        <div class="text">会员等级是基于用户一定时期内约财业务累计获取的经验值所决定的，用户达到相应的等级门槛即可升级。
          <p>用户可通过完成各项任务或操作来获取对应的经验值，从而提升等级。</p>
          <p>经验值越高，会员等级越高，享有的会员特权越多。约财将持续丰富会员特权，以回馈会员们的支持与厚爱，更多尊享特权敬请期待。</p>
        </div>
      </div>
      <div class="title2">
        <img src="../assets/explevelrule/vip_level.png" alt="">
      </div>
      <div style="width: 100%;height: auto">
        <grid :cols="2" class="grid">
          <grid-item v-for="(item, index) in items" :key="index">
            <img :src="item.img" style="width: 70%;height: 70%">
            <div class="text-gold">
              {{item.level}}
            </div>
            <div class="text-bg">
              <div class="text-white">
                {{item.score}}
              </div>
              <img src="../assets/explevelrule/zuan.png" alt="">
            </div>
          </grid-item>
        </grid>
      </div>
      <div class="title-gold">
        <div
          class="vertical-line"></div>
        关于N
      </div>
      <div style="color: #333333;margin-top: 10px">系统自动根据用户购买理财类项目的每笔订单金额、对应投资期限计算并发放相应经验值。</div>
      <div class="title-gold">
        <div
          class="vertical-line"></div>
        经验值说明
      </div>
      <div class="question"><img src="../assets/explevelrule/question.png">有哪些情况会扣经验值？</div>
      <div class="answer"><img src="../assets/explevelrule/answer.png">当出现违规或者不符合经验值获取规则的行为，约财有权扣除相应经验值。</div>
      <div class="question" style="margin-top: 20px"><img src="../assets/explevelrule/question.png">经验值什么时间发放？</div>
      <div class="answer"><img src="../assets/explevelrule/answer.png">当用户完成对应任务或行为后，约财会计算发放经验值，部分时候可能存在稍许延迟情况，稍后可在会员页面的历史记录中查看发放结果！
      </div>
    </div>
    <div class="gray">约财有权根据市场变化、用户需求等各项因素，不定期对约财会员等级及特权相关内容进行调整。约财享有最终解释权。</div>

  </div>
</template>


<script>
  import { Grid, GridItem } from 'vux'
  import level_0 from '../assets/explevelrule/level_0.png'
  import level_200 from '../assets/explevelrule/level_200.png'
  import level_400 from '../assets/explevelrule/level_400.png'
  import level_600 from '../assets/explevelrule/level_600.png'
  import level_800 from '../assets/explevelrule/level_800.png'
  import level_1000 from '../assets/explevelrule/level_1000.png'
  import level_1200 from '../assets/explevelrule/level_1200.png'
  import level_1400 from '../assets/explevelrule/level_1400.png'

  export default {
    components: {
      Grid,
      GridItem,
    },
    methods: {
      onClick () {
        console.log('on click')
      }
    },
    data () {
      return {
        items: [
          {
            'level': '原木会员',
            'score': '1600',
            'img': level_0,
          },
          {
            'level': '黑铁会员',
            'score': '3520',
            'img': level_200,
          },
          {
            'level': '青铜会员',
            'score': '6889',
            'img': level_400,
          },
          {
            'level': '白银会员',
            'score': '15274',
            'img': level_600,
          },
          {
            'level': '黄金会员',
            'score': '34927',
            'img': level_800,
          },
          {
            'level': '红钻会员',
            'score': '70144',
            'img': level_1000,
          },
          {
            'level': '皇冠会员',
            'score': '149966',
            'img': level_1200,
          },
          {
            'level': '至尊会员',
            'score': '355222',
            'img': level_1400,
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .container-wrapper {
    font-size: 14px;
    color: #666666;
    padding: 15px;
  }

  .title {
    background-color: #F5F5F5;
    text-align: center;
    position: absolute;
    left: 50%;
    margin-left: -100px;
    width: 200px;
    height: 40px;
  }

  .title img {
    width: 90%;
    height: 100%;
  }

  .title2 {
    text-align: center;
    margin-top: 30px;
  }

  .title2 img {
    width: 50%;
    height: 50%;
  }

  .text {
    padding: 20px;
    text-align: left;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .border {
    width: 100%;
    height: auto;
    margin-top: 22px;
    text-align: center;
    border-radius: 10px;
    border: 1px solid;
    border-color: #c2a55f;
  }

  .grid {
    text-align: center;
    line-height: 1.4;
  }

  .text-gold {
    text-align: center;
    color: #c2a55f;
    font-weight: bold;
  }

  .text-bg {
    display: flex;
    margin: 0 auto;
    background: #c2a55f;
    border-radius: 30px;
    padding-left: 5px;
    padding-right: 5px;
    margin-top: 5px;
    width: 70px;
    height: auto;
    align-items: center;
  }

  .text-bg .text-white {
    align-self: center;
    flex: 1;
    color: white;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  .text-bg img {
    align-self: center;
    width: 30%;
    height: 30%;
    text-align: center;
  }

  .title-gold {
    display: flex;
    text-align: left;
    color: #C2A55F;
    font-weight: bold;
    font-size: 16px;
    margin-top: 40px;

  }

  .question {
    color: #333333;
    font-weight: bold;
    margin-top: 10px;
  }

  .answer {
    color: #666666;
    margin-top: 10px;
  }

  .question img {
    width: 20px;
    height: 20px;
    vertical-align: middle;
    margin-right: 10px
  }

  .answer img {
    width: 20px;
    height: 20px;
    vertical-align: middle;
    margin-right: 10px
  }

  .vertical-line {
    width: 6px;
    height: 18px;
    border-radius: 6px;
    background: #C2A55F;
    align-self: center;
    margin-right: 5px
  }

  .gray {
    background: #d2d2d2;
    text-align: center;
    color: #999999;
    padding: 20px;
    font-size: 11px;
    margin-top: 20px;
  }

  .grid .weui-grid {
    position: relative;
    float: left;
    padding: 10px;
    width: 33.33333333%;
    box-sizing: border-box;
  }

  .grid:before {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 1px;
    border-top: none;
    color: #D9D9D9;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }

  .grid:after {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 1px;
    border-left: none;
    color: #D9D9D9;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }

  .grid .weui-grid:before {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 1px;
    border-right: none;
    color: #D9D9D9;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }

  .grid .weui-grid:after {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 1px;
    border-bottom: none;
    color: #D9D9D9;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }
</style>
