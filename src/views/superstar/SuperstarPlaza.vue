<template>
  <div>
    <div class="banner">
      <img src="../../assets/star/star_banner.png" alt="">
    </div>
    <div class="planner-list">
      <swiper :options="swiperOptions">

        <swiper-slide v-for="(user,index) in coverSuperstars" v-bind:key="index" @click.native="goUserMain(user)">
          <div class="swiper-slide-content">
            <img src="../../assets/star/superstar1.png" alt="">

          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>

      </swiper>

    </div>
    <div class="recommend-starts">
      <div class="leftstar" @click="goUserMain(superstars[0])">
        <img src="../../assets/star/recomend_1.png" alt="">
      </div>
      <div class="rightstars">
        <div class="rightstars-item" @click="goUserMain(superstars[1])">
          <img src="../../assets/star/recomend_2.png" alt="">
        </div>
        <div class="rightstars-item" @click="goUserMain(superstars[2])">
          <img src="../../assets/star/recomend_3.png" alt="">
        </div>
        <div class="rightstars-item" @click="goUserMain(superstars[3])">
          <img src="../../assets/star/recomend_4.png" alt="">
        </div>
        <div class="rightstars-item" @click="gotoSuperstarList">
          <div>
            <div> <strong>></strong> </div>
            <div>更多大咖</div>
          </div>
        </div>
      </div>
    </div>
    <div class="plaza-videos">
      <div class="plaza-videolist-title" @click="gotoVideoList">
        <div>大咖专访</div>
        <div><img src="../../assets/form/right-green.png" alt="" height="15px" width="15px"></div>
      </div>
      <div class="plaza-video-list">
        <video-cell class="plaza-video-cell" @click.native="didSelectedVideoCell(index)" v-for="(videoObj,index) in
        this.videoList" :video-obj="videoObj"
                    v-bind:key="index">
        </video-cell>
      </div>
    </div>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import videoCell from './VideoCell'

  export default {
    name: "superstarPlaza",
    components: {swiper, swiperSlide, videoCell},
    data () {
      return {
        swiperOptions:  {
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween: 10,
          loop:true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        },
        coverSuperstars:[
          {
            uid:1465,
            type:1,
            sub_type:1
          },
          {
            uid:1862,
            type:2,
            sub_type:1
          },
          {
            uid:1532,
            type:3,
            sub_type:1
          }
        ],
        superstars:[
          {
            uid:1835,
            type:3,
            sub_type:1
          },
          {
            uid:1835,
            type:3,
            sub_type:1
          },          {
            uid:1835,
            type:3,
            sub_type:1
          },          {
            uid:1835,
            type:3,
            sub_type:1
          }
        ],
        videoList: [],
      }
    },
    created () {
    },
    mounted () {
      this.getData()
    },
    methods: {

      getData () {
        let parameters = {
          keywords: '',
          page: 1,
          page_size: 3,
          publisher_id: '',
          tag_ids: '1',
          type: '2'
        }
        var that = this;
        this.request(this.apis.resourceList, parameters, function (response) {
          that.videoList = response.data.video.data
        }, function (error) {
        });
      },
      gotoSuperstarList () {
        this.$router.hx_push('/superstar/list')
      },
      gotoVideoList () {
        var obj = {
          publishID: 0,
          keywords: [''],
          tagIDS: [1]
        }
        this.nativeEvents.gotoVideoList(obj);
      },
      didSelectedVideoCell(index){
        var obj = this.videoList[index]
        var link = obj.link
        this.$router.hx_push3_2(link)
      },
      goUserMain(obj){
        this.nativeEvents.gotoUserMainPage(obj)
      }
    }
  }
</script>

<style lang="less">

  .banner {
    img {
      width: 100%;
      height: 4.67rem;
    }
  }

  .planner-list {
    width: 100%;
    padding-bottom: 0px;
    .swiper-container{
      /*overflow: visible;*/
    }
    .swiper-slide {
      width: 70%;
    }
    .swiper-pagination{
      bottom: 0px;
    }
    .swiper-pagination-bullet{
      transition: all 0.2s;
      height: 6px;
      width: 6px;
    }
    .swiper-container-horizontal{
      .swiper-pagination-bullets{
        .swiper-pagination-bullet {
          margin: 0 3px;
        }
      }
    }
    .swiper-pagination-bullet-active{
      width: 20px;
      border-radius:5px;
      transition: all 0.2s;
      background-color: #c2a55f;
    }
  }
  .swiper-slide-content{
    margin-bottom: 20px;
    background-color: red;
    height: 150px;
    img{
      width: 100%;
      height: 100%;
    }
  }

  @recommendWidth: (375-2)/37.5/3rem;
  @recommendHeight: 142/37.5rem;
  .recommend-starts {
    display: flex;
    flex-direction: row;
    .leftstar {
      flex: @recommendWidth;
      height: @recommendHeight;
      background-color: gray;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .rightstars {
      /*margin-left: 1px;*/
      width: @recommendWidth*2;
      height: @recommendHeight;
      display: flex;
      flex-flow: row wrap;
      .rightstars-item {
        /*background-color: red;*/
        width: (375-2)/37.5/3rem;
        height: (142-2)/37.5/2rem;
        img{
          width: 100%;
          height: 100%;
        }
        /*<!--&::before {-->*/
          /*<!--float: left;-->*/
          /*<!--width: 1px;-->*/
          /*<!--height: (142-1)/37.5/2rem;-->*/
          /*<!--content: " ";-->*/
          /*<!--background-color: white;-->*/
        /*<!--}-->*/
      }
      :nth-child(4){
        background-color: #d4cebe;
        display: flex;
        display: -webkit-box;
        justify-content: center;
        align-items: center;
        :nth-child(1){
          /*margin-left: 20px;*/
          display: flex;
          flex-direction: column;
          /*display: -webkit-box;*/
          justify-content: center;
          align-items: center;
          color: #776437;
        }
      }

    }
  }

  .plaza-videos {
    margin-top: 10px;
    background-color: white;
    .plaza-videolist-title {
      height: 45px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-left: 15px;
      margin-right: 15px;
    }
    .plaza-video-list {
      height: 400px;
    }
  }

  .plaza-video-cell {
    height: 209px;
  }
</style>
