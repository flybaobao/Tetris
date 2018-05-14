<template>
  <div class="vip-cell">
    <div class="vip-cell-item vip-cell-exp">
      <prettybutton :name="count" :head="imgs.exp"
                    :namestyle=" { color:'#c2a55f','font-size':'17px','font-weight': 'bold' } "></prettybutton>

    </div>
    <div class="vip-cell-item vip-cell-line">
      <div class="vip-cell-line-ra-t"></div>
      <div class="vip-cell-line-dash"></div>
      <div class="vip-cell-line-ra-b"></div>
    </div>
    <div  class="vip-cell-item vip-cell-content">
      <div class="vip-cell-des">{{des}}</div>
    </div>
  </div>
</template>

<script>
  import prettybutton from '../../components/prettybutton'
  import exp from '../../assets/vipcenter/vip_exp.png'
  export default {
    props: ['count', 'des'],
    components: {
      prettybutton
    },
    data () {
      return {
        imgs: {
          exp
        }
      }
    }
  }
</script>

<style scoped>
.vip-cell{
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  /*padding: 13px 10px;*/
  /*border-radius:4px;*/
  /*border-left:1px solid #EBECED;*/
  /*border-bottom:1px solid #EBECED;*/
  /*background-color: #ffffff;*/
  margin: 15px 0px;
}
.vip-cell-item{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 13px 10px;
  background-color: #ffffff;
}

.vip-cell-exp{
  border-radius:5px;
  /*border-left:1px solid #EBECED;*/
  /*border-bottom:1px solid #EBECED;*/
  /*border-top:1px solid #EBECED;*/
}
.vip-cell-content{
  flex: 1;
  padding-left: 20px;
  border-radius:5px;
  /*border-right:1px solid #EBECED;*/
  /*border-bottom:1px solid #EBECED;*/
  /*border-top:1px solid #EBECED;*/
}
  .vip-cell-des{
    font-size: 16px;
    color: #7f652d;
  }

  .vip-at-item{
    width: 75px;
  }
  /*虚线*/
  .vip-cell-line{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0px 0px;
  }
  .vip-cell-line-ra-t{
    width:10px;
    height:5px;   /*一半 */
    border-radius:0 0 5px 5px;
    background:#f3f4f6;
  }
  .vip-cell-line-ra-b{
    width:10px;
    height:5px;
    border-radius:5px 5px 0 0;
    background:#f3f4f6;
  }
  .vip-cell-line-dash{
    border:1px dashed #E6E8D7;
    flex: 1;
    margin: 3px 0px;
  }
</style>