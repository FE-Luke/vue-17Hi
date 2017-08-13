<template>
  <div id="header">
    <img src="./images/logo_main.png" height="20" class="logo">
  </div>
</template>

<script>
  export default {
    name: "header"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #header
    color #fff
    width 100%
    height 44px
    background #1b2227
    text-align center
    line-height 44px
    position relative
    z-index 1
    .logo
      display inline-block
      vertical-align middle
</style>
