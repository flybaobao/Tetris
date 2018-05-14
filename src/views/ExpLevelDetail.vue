<template>

  <div>

    <div class="container-wrapper">
      <div class="black">经验值</div>
      <div class="center">EXP</div>
      <div class="center">约财会员等级由经验值决定</div>
      <div class="line"></div>

      <div>用户获得经验值方式
        <ul style="padding-left: 20px" >
          <li v-for="(item, index) in items" :key="index">{{item.message}}</li>
        </ul>
      </div>

      <div style="padding-top: 15px">经验值反映了用户在约财的活跃程度及荣誉等级</div>
      <div>经验值越高，会员等级越高，享有的会员特权越多</div>
      <div style="padding-top: 15px">约财将持续丰富会员特权，以回馈会员们的支持与厚爱，更多尊享特权敬请期待。</div>
    </div>

    <group>
      <cell :title="'等级规则'" link="{}"></cell>
      <cell :title="'会员特权详情'" link="{}"></cell>
    </group>


  </div>
</template>


<script>
  import { Cell, CellBox, CellFormPreview, Group, Badge, Divider } from 'vux'

  export default {
    mounted () {
      setTimeout(() => {
        this.money = -1024
      }, 2000)
    },
    components: {
      Group,
      Cell,
      CellFormPreview,
      CellBox,
      Badge,
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
            'message': '约财APP签到',
          },
          {
            'message': '购买理财类项目',
          },
          {
            'message': '完成会员任务',
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .container-wrapper {
    background-color: #fff;
    font-size: 14px;
    color: #333333;
    padding: 20px;
  }

  .container-wrapper .black {
    text-align: center;
    font-size: 18px;
    color: black;
    font-weight:bold;
  }

  .container-wrapper .center {
    text-align: center;
  }

  .line {
    border: 0.5px dotted gray;
    margin-top: 10px;
    margin-bottom: 10px;
  }


</style>
