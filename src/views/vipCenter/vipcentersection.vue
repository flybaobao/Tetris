<template>
  <div class="s-body" ref="sBody">
    <div class="vip-section-header" @click="selectedGroup">
      <div class="vip-sh">
        <img :src="a_data.group.image" alt="">
        <div>{{a_data.group.name}}</div>
      </div>
      <div class="vip-sh">
        <div>开始任务</div>
        <img src="../../assets/vipcenter/vip_dir_right.png" alt="">
      </div>
    </div>
    <div class="vip-cells" ref="cellsView">
      <hx-cell v-for="(indexPath, index) in a_data.routes"  v-bind:key="index" :count="indexPath.score"
               :des="indexPath.action_desc"
               @click.native="didSeletcteCell(index)" @touchstart.native="touchStart($event)"></hx-cell>
    </div>
    <div class="clip-btn" v-if="a_data.routes.length > 1" @click="clipClick">
      <div v-if="a_data.isSelected">收起</div>
      <div v-else>展开</div>
      <img :class="{'clip-btn-img-selected': a_data.isSelected}" src="../../assets/vipcenter/vip_unwind.png" alt="">
    </div>
  </div>
</template>

<script>
  import hxCell from  './vipcentercell'
  export default {
    props: ['data','group'],
    components: {
      hxCell
    },
    mounted () {
      var body = this.$refs.cellsView
      var first =  body.children[0]
      var fir_height = first.getBoundingClientRect().height
      body.style.height = fir_height  + 30 + 'px'
    },
    methods: {
      touchStart (a){
//        alert(a);
      },
      even () {
        if (this.a_data.isSelected) {
          return this.a_data.routes
        } else {
          return this.a_data.routes.slice(0, 1)
        }
      },
      clipClick () {
        var body = this.$refs.cellsView
        var first =  body.children[0]
        var fir_height = first.getBoundingClientRect().height
        var height = body.getBoundingClientRect().height
        this.a_data.isSelected = !this.a_data.isSelected
        if (!this.a_data.isSelected) {
          body.style.height = height + 'px'
          var f = document.body.offsetHeight
          body.style.height = fir_height  + 30 + 'px'
        } else {
          body.style.height = 'auto'
          height = body.getBoundingClientRect().height
          body.style.height = fir_height  + 30 + 'px'
          var f = document.body.offsetHeight
          var rel_height = 0
          var tag = 0
          for(var index in body.children){
            var element = body.children[index]
            if (element.nodeType === 1){
              tag ++
              var item_height =  element.getBoundingClientRect().height
              rel_height += item_height
            }
          }
          rel_height += ((tag+1)*15)
          height = Math.max(rel_height,height)
          body.style.height = height + 'px'
        }
      },
      selectedGroup(){
        this.$emit('selectedGroup', this.group)
      },
      didSeletcteCell (index) {
        this.$emit('didSeletctedCell', this.group,index)
      }
    },
    data () {
      return {
        a_data: this.data
      }
    }
  }
</script>

<style scoped>
.vip-section-header{
  display: flex;
  justify-content: space-between;
  height: 45px;
  padding: 0px 10px;
  background-color: #E8E0CA;
  /*border:21 solid;*/
  border-radius:4px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.12);
}
  .vip-sh{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #7f652d;
    font-weight: bold;
    font-size: 16px;
  }
  .vip-sh div{
    line-height: 16px;
  }
  .vip-sh:first-child img{
    width: 30px;
    height: 30px;
  }
  .vip-sh:first-child img{
    width: 30px;
    height: 30px;
  }
  .vip-sh:last-child img{
    width: 15px;
    height: 15px;
  }
  .clip-btn{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: #77653D;
    margin-bottom: 15px;
  }
  .clip-btn img{
    width: 15px;
    height: 15px;
  }
  .clip-btn-img-selected{
    transform:rotate(180deg);
  }

  .vip-cells{
    zoom:1;
    overflow: hidden;
    transition:height .5s ease-in-out;
    -moz-transition:height .5s ease-in-out; /* Firefox 4 */
    -webkit-transition:height .5s ease-in-out; /* Safari and Chrome */
    -o-transition:height .5s ease-in-out; /* Opera */
  }

</style>
