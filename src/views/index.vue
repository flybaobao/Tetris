<template>
  <hxscroller ref="ref" :loadmore="loademore" :refresh="ref">
    <div>欢迎来到约财
    </div>
  </hxscroller>
</template>

<script>
  import hxscroller from '../components/Scroller'
  export default {
    components: {
      hxscroller
    },
    mounted: function () {
      console.log(1)
      this.request('news/getSubscriptionNewsList', null, function (res) {
      }, function (error) {
      })
    },
    data () {
      return {
        msg: 'Hello World!'
      }
    },
    methods: {
      share: function () {
        alert(1)
        this.nativeEvents.call(this.nativeEvents.toLogin)
      },
      loademore(){
        console.log('上拉')
        var that = this
        setTimeout(function () {
          that.$refs.ref.endRef()
        },1000)
      },
      ref () {
        console.log('下拉')
      }
    }
  }
</script>

<style scoped>
.test{
  padding-top: 100px;
}
</style>
