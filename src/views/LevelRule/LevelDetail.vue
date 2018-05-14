<template>
  <div class="level-detail">
    <div class="level-desc-title">
      <div class="line"></div>
      <p class="detail">{{title}}</p>
    </div>
    <slot name="content"></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      title: ''
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  .level-detail
    margin: 15px 0
    .level-desc-title
      margin-bottom: 15px
      height: 20px
      line-height: 20px
      .line
        float: left
        height: 100%
        width: 6px
        border-radius: 3px
        background: #b29442
        margin-right: 8px
      .detail
        height: 20px
        line-height: 20px
        font-size: 17px
        color: #b29442
        font-weight: 700
</style>
