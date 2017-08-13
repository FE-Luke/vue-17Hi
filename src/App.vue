<template>
  <div id="app">
    <transition name="fade">
      <v-splash v-show="splash" class="lazyload"></v-splash>
    </transition>
    <router-view></router-view>
  </div>
</template>

<script>
  import Splash from '@/components/Splash/Splash'
  import {mapActions, mapGetters} from 'vuex';
  export default {
    name: 'app',
    mounted () {
      this.getPosition();
    },
    data(){
      return {
        direction:'move-left'
      }
    },
    methods: {
      ...mapActions(['getPosition'])
    },
    computed: {
      ...mapGetters(['splash'])
    },
    components: {
      'v-splash': Splash
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    position fixed
    top 0
    left 0
    background #0e1316
    width 100%
    height 100%
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
</style>
