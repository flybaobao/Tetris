<template>
  <div class="hx-scroller" @touchmove="touchMove($event)"
       @touchstart="touchStart($event)">
    <slot></slot>
    <div class="loadmore-view" v-if="load.loadMoreRefreshStatus === 1">正在加载更多</div>
  </div>
</template>

<script>
  export default {
    props: ['loadmore', 'refresh'],
    data () {
      return {
        load: {
          startY: 0,
          loadMoreRefreshStatus: 0, // 1 = 正在加载更多 2 = 加载更多完成 3 = 没有更多数据. 4 = 禁用
          pullRefreshStatus: 0 // 1 = 正在加载 2 = 加载完成  4 = 禁用
        }
      }
    },
    methods: {
      touchStart (e) {
        this.load.startY = e.targetTouches[0].pageY
      },
      touchMove (e) {
        var diff = e.targetTouches[0].pageY
        var scrollHeight = document.body.scrollHeight
        var scrollTop = document.body.scrollTop
        var height = document.body.offsetHeight
        console.log(scrollTop,height,scrollHeight)

        if (this.load.startY - diff > 50 && scrollHeight <= scrollTop + height) {
          if (this.load.loadMoreRefreshStatus === 0 ) {
            this._loadMore()
          }
        } else if (height >= 50 && this.load.startY - diff <= -50) {
          if (this.load.pullRefreshStatus === 0) {
            this._refresh()
          }
        }
      },
      _refresh () {
        this.load.pullRefreshStatus = 1
        this.load.loadMoreRefreshStatus = 4
        this.refresh()
      },
      _loadMore () {
        this.load.loadMoreRefreshStatus = 1
        this.load.pullRefreshStatus = 4
        this.loadmore()
      },
      endRef (){
        if (this.load.loadMoreRefreshStatus === 1 || this.load.loadMoreRefreshStatus === 4){
          this.load.loadMoreRefreshStatus = 0
        }
        if (this.load.pullRefreshStatus === 1 || this.load.pullRefreshStatus === 4){
          this.load.pullRefreshStatus = 0
        }
      }
    }
  }
</script>

<style scoped>
.hx-scroller{
  height: 100%;
}
.loadmore-view{
  margin-top: 15px;
  text-align: center;
  font-size: 13px;
}
</style>
