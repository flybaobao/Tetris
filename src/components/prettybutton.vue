<template>
  <div class="vip-at-item" :class="bgstyle">
    <img class="prettybutton-head" v-bind:style="headstyle" :src="head" alt="">
    <div class="prettybutton-name" v-bind:style="namestyle" >{{name}}</div>
  </div>
</template>

<script>
  export default {
    props: ['head', 'name', 'bgstyle', 'namestyle', 'headstyle'],
    data () {
      return {}
    }
  }
</script>

<style scoped>
  .vip-at-item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .prettybutton-head{
    width: 20px;
    height: 20px;
  }
  .prettybutton-name{
    font-size: 15px;
  }
</style>