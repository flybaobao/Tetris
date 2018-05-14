<template>
  <div class="vip-activity-cell">
    <div class="wrapper">
      <div class="mask" v-if="activity.expired">
        <p class="tip-text">活动已结束</p>
      </div>
      <p class="title">{{ activity.title | textLineBreak(37) }}</p>
      <div class="banner">
        <div class="bracket"></div>
        <div class="target">
          <img :src="absoluteImageUrl(activity.img)" alt="">
        </div>
      </div>
      <p class="infos">
        <span class="time">活动时间 {{ activity.activity_time }}</span>
        <span class="other" v-if="activity.attend_count > 0">{{ activity.attend_count }}人参与</span>
      </p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      activity: {
        Type: Object,
        default: undefined
      }
    }
  };
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/theme.styl";

  .vip-activity-cell
    background-color transparent
    padding-bottom 10px
    .wrapper
      position relative
      background-color white
      padding 10px 15px
      > .mask
        position absolute
        display flex
        justify-content center
        align-items center
        top 0
        right 0
        bottom 0
        left 0
        background-color rgba(240, 240, 240, 0.3)
        z-index 11
        .tip-text
          padding 5px 20px
          height 18px
          line-height 18px
          font-size 13px
          border-radius 30px
          background-color rgba(255, 255, 255, 0.95)
      p.title
        line-height 22px
        font-size 17px
        color $color-title
        margin-bottom 10px
      .banner
        position relative
        width 100%
        margin-bottom 10px
        overflow hidden
        z-index 10
        .bracket
          margin-top 40%
        .target
          position absolute
          top 0
          bottom 0
          left 0
          right 0
          img
            height 100%
            width 100%
      p.infos
        display flex
        flex-direction row
        justify-content space-between
        .time
          font-size 14px
          color $color-golden
        .other
          font-size 14px
          color $color-secondary-title

</style>
