<template>
  <div class="level-rule-wrapper">
    <!-- 会员体系介绍 -->
    <div class="desc-wrapper">
      <div class="img-wrapper">
        <img src="../../assets/LevelRule/level-desc-title.png" alt="" class="title">
      </div>
      <p class="text">会员等级是基于用户一定时期内约财业务累计获取的经验值所决定的，用户达到相应的等级门槛即可升级。</p>
      <p class="text">用户可通过完成各项任务或操作来获取对应的经验值，从而提升等级。</p>
      <p class="text">经验值越高，会员等级越高，享有的会员特权越多。约财将持续丰富会员特权，以回馈会员们的支持与厚爱，更多尊享特权敬请期待。</p>
    </div>

    <!-- 徽章列表 -->
    <div class="level-table-wrapper">
      <div class="title-wrapper">
        <img src="../../assets/LevelRule/level-table-title.png" alt="" class="title">
      </div>
      <div class="level-badge-wrapper">
        <level-badge v-for="(item, index) in items" :data="item" :key="index"></level-badge>
      </div>
    </div>

    <!-- 详情解释 -->
    <div class="detail-wrapper">
      <level-detail :title="'关于N'">
        <p class="text" slot="content">
          系统自动根据用户购买理财类项目的每笔订单金额、对应投资期限计算并发放相应的经验值。
        </p>
      </level-detail>
      <level-detail :title="'经验值说明'">
        <level-rule-qa slot="content" v-for="question in questions" :data="question" :key="question.id"></level-rule-qa>
      </level-detail>
    </div>

    <!-- 底部 -->
    <div class="footer">
      <p class="text">约财有权根据市场变化、用户需求等各项因素，不定期对约财会员等级及特权相关内容进行调整。约财享有最终解释权。</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import level_badge from './LevelBadge'
  import level_rule_qa from './LevelRuleQA'
  import level_detail from './LevelDetail'
  import level_badge_01 from '../../assets/LevelRule/level_badge_sqare_01.png'
  import level_badge_02 from '../../assets/LevelRule/level_badge_sqare_02.png'
  import level_badge_03 from '../../assets/LevelRule/level_badge_sqare_03.png'
  import level_badge_04 from '../../assets/LevelRule/level_badge_sqare_04.png'
  import level_badge_05 from '../../assets/LevelRule/level_badge_sqare_05.png'
  import level_badge_06 from '../../assets/LevelRule/level_badge_sqare_06.png'
  import level_badge_07 from '../../assets/LevelRule/level_badge_sqare_07.png'
  import level_badge_08 from '../../assets/LevelRule/level_badge_sqare_08.png'

  export default {
    data () {
      return {
        items: [
          {
            'level': '原木会员',
            'score': '0',
            'image': level_badge_01,
          },
          {
            'level': '黑铁会员',
            'score': '200',
            'image': level_badge_02,
          },
          {
            'level': '青铜会员',
            'score': '400',
            'image': level_badge_03,
          },
          {
            'level': '白银会员',
            'score': '600',
            'image': level_badge_04,
          },
          {
            'level': '黄金会员',
            'score': '800',
            'image': level_badge_05,
          },
          {
            'level': '红钻会员',
            'score': '1000',
            'image': level_badge_06,
          },
          {
            'level': '皇冠会员',
            'score': '1200',
            'image': level_badge_07,
          },
          {
            'level': '至尊会员',
            'score': '1400',
            'image': level_badge_08,
          }
        ],
        questions: [
          {
            'question': '有哪些情况会扣经验值？',
            'answer': '当出现违规或者不符合经验值获取规则的行为，约财有权扣除相应的经验值。'
          },
          {
            'question': '经验值什么时间发放？',
            'answer': '当用户完成对应任务行为后，约财会计算发放经验值，部分时候可能会存在稍许延迟情况，稍后可在会员页面的历史记录中查看发放结果。'
          },
        ]
      }
    },
    components: {
      'level-badge': level_badge,
      'level-rule-qa': level_rule_qa,
      'level-detail': level_detail
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  .level-rule-wrapper
    background: #f1f2f4
    .desc-wrapper
      margin: 50px 15px 10px 15px
      padding: 20px
      border: 1px solid #b29442
      border-radius: 20px
      .img-wrapper
        width: 170px
        height: 40px
        margin: -45px auto 15px
        background: #f1f2f4
        img
          display: block
          width: 100%
          height: 100%
      .text
        font-size: 16px
        color: #666
        text-indent: 2em
    .level-table-wrapper
      flex-wrap: wrap
      margin: 50px 15px 10px 15px
      padding: 20px
      .title-wrapper
        width: 190px
        height: 60px
        margin: -50px auto 15px
        background: #f1f2f4
        img
          display: block
          width: 100%
          height: 100%
      .level-badge-wrapper
        display: flex
        flex-wrap: wrap
        .level-badge
          width: 50%
    .detail-wrapper
      margin: 0 20px
    .footer
      background: #ddd
      padding: 15px 20px
      .text
        text-align: center
        color: #888
        font-size: 15px
        line-height: 20px

</style>
