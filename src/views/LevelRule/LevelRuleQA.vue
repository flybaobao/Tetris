<template>
  <div class="level-rule-qa">
    <div class="question">
      <img src="../../assets/LevelRule/question.png" alt="">
      <p class="desc">{{data.question}}</p>
    </div>
    <div class="answer">
      <img src="../../assets/LevelRule/answer.png" alt="">
      <p class="desc">{{data.answer}}</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      data: {
        Type: Object
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  .level-rule-qa
    .question, .answer
      display: flex
      line-height: 25px
      vertical-align: middle
      margin-bottom: 5px
      img
        flex: 0 0 20px
        width: 20px
        height: 20px
        margin: 2px 10px 0 0
      .desc
        font-size: 16px
        color: #666
    .question
      .desc
        color: #333
        font-weight: 700
</style>
