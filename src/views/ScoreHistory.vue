<template>
  <div class="container-wrapper" v-title="{'title': '经验值明细'}">
    <scroller :on-refresh="refresh" :on-infinite="infinite">
      <ul>
        <li v-for="sign in signInfo" class="vux-1px-b" :key="sign.id">
          <div class="top">
            <div class="left">
              <img src="../assets/ScoreHistory/scorehistory_add.png" alt="">
              <p class="text">{{sign.name}}</p>
            </div>
            <div class="right">
              <img src="../assets/ScoreHistory/scorehistory_crystal.png" alt="">
              <p class="text">{{sign.score}}</p>
            </div>
          </div>
          <div class="bottom">
            <p class="left">{{sign.detail}}</p>
            <p class="right">{{sign.create_time}}</p>
          </div>
        </li>
      </ul>
    </scroller>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  import httpManager from '../service/httpManager'
  import VueScroller from 'vue-scroller'

  Vue.use(VueScroller)
  import apis from '../service/apis'

  export default {
    data () {
      return {
        signInfo: [],
        mPage: 1,
        mPageSize: 20,
        listCount: 0,
        hasMore: true,
        loading: false
      }
    },
    mounted () {
//      this.refresh()
    },
    methods: {
      refresh (done) {
        // console.log('下拉')
        console.log("refresh loading=" + this.loading)
        if (this.loading){
          done(true)
          return
        }
        this.loading = true;
        this.mPage = 1;
        var params = {
          'page': this.mPage,
          'pageSize': this.mPageSize,
        }
        var that = this
        this.request(apis.expHistorylist, params, function (json) {
          console.log(JSON.stringify(json))
          if (json.code === 1) {
            that.signInfo = json.data.list;
            done(true)
            if (that.signInfo.length >= json.data.count) {
              that.hasMore = false;
              done = true;
            }else{
              that.hasMore = true;
            }
          }

          that.loading = false;
        }, function (json) {
          that.loading = false;
        })
      },
      infinite (done) {
        console.log("infinite loading=" + this.loading + " hasmore=" + this.hasMore)
        if (this.loading || !this.hasMore){
          done(true)
          return
        }
        this.loading = true;
        console.log("infinite")
        var params = {
          'page': this.mPage,
          'pageSize': this.mPageSize,
          'token': this.$route.query.token
        }
        this.mPage += 1
        var that = this
        this.request(apis.expHistorylist, params, function (json) {
          console.log(JSON.stringify(json))
          if (json.code === 1) {
            that.signInfo = that.signInfo.concat(json.data.list);
            done(true)
            if (that.signInfo.length >= json.data.count) {
              done = true
            }
          }
          that.loading = false;
        }, function (json) {
          that.loading = false;
        })
      }
    },
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  .container-wrapper
    background-color: #f1f2f4
    height: 100%
    ul
      list-style: none
      padding: 0
      margin: 0
      li
        padding: 20px 15px 15px 15px
        margin: 0
        .top, .bottom
          display: flex
        .top
          .left
            display: table-cell
            vertical-align: middle
            height: 22px
            flex: auto
            overflow: hidden
            img
              float: left
              width: 22px
              height: 22px
              margin-top 2px
              margin-right: 5px
            .text
              font-size: 18px
              color: #333333
              overflow: hidden
              text-overflow: ellipsis
              white-space: nowrap
              word-wrap: break-word
          .right
            display: table-cell
            text-align: right
            width: 70px
            flex: 0 0 70px
            line-height: 22px
            .text
              float: right
              font-size: 20px
              line-height: 22px
              color: #b29442
            img
              float: right
              width: 18px
              height: 18px
              margin-top 2px
              margin-left: 5px
        .bottom
          display: flex
          margin-top: 6px
          .left
            flex 1
            margin-left: 27px
            font-size: 14
            overflow: hidden
            text-overflow: ellipsis
            white-space: nowrap
            color: #999
          .right
            flex: 1
            font-size: 14px
            text-align: right
            color: #999
</style>
