<template>
  <div class="protocol" v-title="{title:'合格人投资协议'}">
    <h2>合格人投资协议</h2>
    <p>本人自愿申报成为合格投资人，并申明如下：</p>
    <p>本人申明在投资约财发布的理财产品之前，本人符合下列任意条件之一，且能够识别、判断和承担理财产品的投资风险：</p>
    <p>• 金融资产不低于300万元（金融资产包括银行存款、股票、债券、基金份额、资产管理计划、银行理财产品、 信托计划、保险产品、期货权益等）</p>
    <p>• 最近三年个人年均收入不低于50万元</p>
    <p>• 投资于所管理私募基金的私募基金管理人的从业人员</p>
    <p>本人申明在进行投资行为前，认真阅读并理解所有产品文件，并愿意依法承担相应的投资风险。</p>
    <p>本人申明成为合格投资人后，对交易涉及的事项保密，并依法缴纳投资活动所产生的各项税费。</p>
  </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {}
    },
    beforeCreate: function() {
      document.getElementsByTagName("body")[0].className="bg-white";
    },
    beforeDestroy: function() {
      document.body.removeAttribute("class","bg-white");
    }
  }
</script>

<style lang="less">
  .protocol{
    font-size: 14px;
    padding: 20px 20px;
    h2{
      font-size: 16px;
      text-align: center;
      padding-bottom: 15px;
    }
    p{
      padding-bottom: 10px;
    }
  }
  .bg-white{
    background-color: #fff;
  }
</style>
