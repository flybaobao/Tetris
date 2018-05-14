<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
  padding: 0px 0px;
  font-size: 15px;
}

body {
  background-color: #f4f4f4;
}

html, body, #app {
  height: 100%;
}
ul, li{
  list-style-type: none;
  margin: 0;
  padding: 0;
}
img {
  border: none;
  border: 0;
}

</style>
