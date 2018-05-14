<template>
  <div class="level-badge">
    <img :src="data.image" alt="">
    <p>{{data.level}}</p>
    <div class="score-wrapper">
      <div class="text-wrapper">
        <p class="text">{{data.score}}</p>
      </div>
      <div class="img-wrapper">
        <img src="../../assets/LevelRule/level_crystal_white.png" alt="">
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      data: {
        type: Object
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  .level-badge
    text-align: center
    padding: 10px 0
    img
      width: 70%
    p
      color: #b29442
      font-weight: 800
    .score-wrapper
      display: flex
      margin: 5px auto 5px
      padding-left: 5px
      background: #b29442
      width: 70px
      height: 22px
      line-height: 22px
      border-radius: 11px
      .text-wrapper
        flex: 2
        p
          color: #fff
          text-align: center
          font-size: 15px
      .img-wrapper
        flex:1
        display: table-cell
        height: 22px
        line-height: 22px
        img
          width: 18px
          height: 18px
          margin-top: 2px
</style>
