<template>
  <div class="video-cell">
    <div class="video-cell-line"></div>
    <div class="video-cell-content" ref="img" style="background-repeat:no-repeat;background-size: cover;background-position:center;">
        <div class="video-cell-play">
          <img src="../../assets/video/video_play.png" width="22px" height="22px" alt="">
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "VideoCell",
    props:['videoObj'],
    mounted(){
      var style = this.$refs.img.style;
      var url = this.getImgURL()
      style.backgroundImage = "url(" + url +")"
      console.log(url)
    },
    methods:{
      getImgURL(){
        console.log(1)
        return this.absoluteImageUrl(this.videoObj.img)
      }
    }
  }
</script>

<style lang="less">
  .video-cell{
    display: flex;
    flex-direction: column;
    .video-cell-line{
      height: 1px;
      border-top: #999 dashed 1px;
      margin: 0px 15px;
    }
    .video-cell-content{
      flex: 1;
      margin: 15px 15px;
      background-color: #FAFAFA;
      .video-cell-play{
          display: flex;
          justify-content: center;
          margin-top: 34px;
      }
    }
    img{

    }
  }
</style>