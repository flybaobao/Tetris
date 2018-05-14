<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div class="container-wrapper" v-title="{'title':'大咖列表'}">

    <scroller :on-refresh="refresh" :on-infinite="infinite">
      <div v-for="(item,index) in data.list" class="item-paading" @click="didSelectedRow(index)">
        <div v-if="item.is_cover==='1'">
          <img :src='item.cover_img' class="cover-img">
        </div>
        <div class="item">
          <img :src="baseImgUrl+item.img" style="width: 110px;height: 110px;align-self: center;flex: none;">
          <div style="margin-left: 10px; flex-shrink:1;">
            <div style="display: flex;">
              <div style="flex: 1;font-size: 16px;font-weight: bold">{{item.name}}</div>
              <div class="add-friend-text">
                <div v-if="item.is_friend"></div>
                <div v-else-if="item.is_apply_friend">已申请</div>
                <div v-else="item.is_friend" v-on:click="addFriend">+好友</div>
              </div>
            </div>
            <div class="introduction">{{item.introduction}}</div>
          </div>
        </div>

      </div>
    </scroller>

  </div>
</template>

<script>
  import Vue from 'vue'
  import VueScroller from 'vue-scroller'
  import apis from '../service/apis';
  import api_config from '../config/api-config';
  import level_0 from '../assets/explevelrule/level_0.png'
  import vip_level_intro from '../assets/explevelrule/vip_level_intro.png'

  Vue.use(VueScroller)

  export default {

    data () {
      return {
        page: 1,
        pageSize: 20,
        listCount: 0,
        hasMore: false,
        loading: false,

        baseImgUrl: api_config.cdn_host,

        code: 0,
        response_message: '',
        data: {
          count: 0,
          list: [
//            {
//              uid: 0,
//              name: '王小二',
//              introduction: '1968年出生浙江宁波，毕业华师大哈哈斯卡哈介绍的哈就开始等会撒娇客服哈市东方大厦开发商打发时间客服哈数据库地负海涵',
//              img: level_0,
//              is_cover: true,
//              cover_img: vip_level_intro,
//              is_friend: true,
//              is_apply_friend: true,
//
//            },

          ],
        }
      };
    },

    mounted: function () {
      this.refresh();
    },

    methods: {
      addFriend () {
        console.log('on click....')
      },

      refresh (done) {
        this.page = 1;
        this.getSupersatrList(this.page)
      },

      infinite (done) {

        if (!this.hasMore) {
          done();
          return;
        }
        console.log(this.hasMore)
        this.page += this.page;

        this.getSupersatrList(this.page)

      },

      getSupersatrList: function (page) {
        let params = {
          'page': page,
          'page_size': this.pageSize,
        }
        var that = this;
        this.request(apis.getSupersatrList, params, function (json) {
          console.log(json)
          if (json.code === 1) {
            if (that.page === 1) {
              that.data.list = json.data.list;
            } else {
              that.data.list.concat(json.data.list)
            }

            console.log(that.data.list.length)
            console.log(json.data.count)

            if (that.data.list.length <= json.data.count) {
              that.hasMore = false;
            } else {
              that.hasMore = true;
            }

            console.log(that.page)
            console.log(that.hasMore)

          }
        }, function () {

        })
      },
      didSelectedRow(index){
        var item = this.data.list[index];
        this.nativeEvents.gotoUserMainPage(item)
      }

    }

  }

</script>

<style>
  .container-wrapper {
    font-size: 14px;
    color: #1f242b;
    background-color: #F5F5F5;
  }

  .item-paading {
    padding: 15px 15px 0px 15px;
  }

  .item {
    display: flex;
    height: auto;
    background-color: #E8E0CA;
    border-radius: 10px;
    padding: 15px;
  }

  .item .introduction {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    margin-top: 10px

  }

  .item .add-friend-text {
    text-align: right;
    flex: 1;
    color: #B9994E;
  }

  .cover-img {
    text-align: center;
    position: absolute;
    margin-top: 110px;
    margin-left: -10px;
    width: auto;
    height: 20px;
    flex-shrink:0;
  }


</style>
