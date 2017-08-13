<template>
  <div id="splash">
      <img src="./images/ic_17hi_vip.png">
  </div>
</template>

<script>

</script>

<style lang="stylus" rel="stylesheet/stylus">
  #splash
    position fixed
    top 0
    left 0
    z-index 6
    width 100%
    height 100%
    background #0e1316
    opacity 1
    transition opacity .3s ease
    box-sizing border-box
    &.fade-enter,&.fade-leave-to
      opacity 0;
    img
      position absolute
      top 0
      left 0
      bottom 0
      right 0
      margin auto
      width 20%
</style>
