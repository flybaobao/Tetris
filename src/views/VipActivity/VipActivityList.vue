<template>
  <div class="vip-activity-list" v-title="{'title': 'VIP活动'}">
    <scroller :on-refresh="refresh" :on-infinite="infinite">
      <vip-activity-cell v-for="(activity,index) in activities" :key="activity.id" :activity="activity"
                         @click.native="didSelectedVideoCell(index)"></vip-activity-cell>
    </scroller>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  import VueScroller from 'vue-scroller'
  import VipActivityCell from '@/views/VipActivity/VipActivityCell';
  import apis from '../../service/apis';

  Vue.use(VueScroller);

  export default {
    data () {
      return {
        activities: [],
        mPage: 1,
        mPageSize: 20,
        listCount: 0,
        hasMore: true,
        loading: false
      };
    },
    created() {
      this.refresh(null);
    },
    methods: {
      refresh (done) {
        console.log('下拉')
        if (this.loading){
          done(true);
          return;
        }
        this.loading = true;
        this.mPage = 1;
        let params = {
          'type': 1,
          'page': this.mPage,
          'page_size': this.mPageSize,
          'token': ''
        }
        let that = this
        this.request(apis.resourceList, params, function (json) {
          console.log(json)
          if (json.code === 1) {
            that.activities = json.data.activity.data;
            done(true)
            if (that.activities.length >= json.data.activity.count) {
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
        let params = {
//          'tag_ids':'1',
          'type': 1,
          'page': this.mPage,
          'page_size': this.mPageSize,
          'token': this.$route.query.token
        }
        this.mPage += 1
        let that = this
        this.request(apis.resourceList, params, function (json) {
          console.log(json)
          if (json.code === 1) {
            that.activities = that.activities.concat(json.data.activity.data);
            done(true);
            if (that.activities.length >= json.data.activity.count) {
              that.hasMore = false;
              done = true;
            }
          }
          that.loading = false;
        }, function (json) {
          that.loading = false;
        })
      },
      didSelectedVideoCell(index){
        var obj = this.activities[index]
        var link = obj.link
        this.$router.hx_push3_2(link)
      }
    },
    components: {
      'vip-activity-cell': VipActivityCell
    }
  };


</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  .vip-activity-list
    background-color transparent

</style>
