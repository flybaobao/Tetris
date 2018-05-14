<template>
  <div id="video" class="video"></div>
</template>

<script>
  import 'DPlayer/dist/DPlayer.min.css';
  import DPlayer from 'DPlayer';
  export default {
    props: {
      options: {
        type: Object,
        default: {}
      }
    },
    data () {
      return {
          db:null
      }
    },
    mounted() {
      setTimeout(() => {
        this._initDPlayer ()
      },20)
    },
    methods: {
      _initDPlayer () {
        // 默认配置
        let base = {
          container: document.getElementById('video'),
          loop: false,
          video: {
            type: 'auto'
          },
          hotkey: false
        }
        let options = Object.assign(base, this.options)
        this.dp = new DPlayer(options)
        //事件
        this.dp.on('play', () => {
          console.log('视频播放了')
        });
        this.dp.on('pause', () => {
          console.log('视频暂停了')
        });
        this.dp.on('fullscreen', () => {
          console.log('全屏了')
        })
      },
      play () {
        this.dp.play()
      },
      pause () {
        this.dp.pause()
      },
      switchVideo(options) {
        this.dp.switchVideo(options);
      }
    },
    computed: {

    }
  }
</script>

<style lang="less">
  #video{
    .dplayer-setting{
      display: none;
    }
    .dplayer-full{
     .dplayer-icon:first-child{
       display: none;
     }
    }
  }
</style>
