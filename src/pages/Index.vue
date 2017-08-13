<template>
  <div id="index">
    <v-header></v-header>
    <div class="bar-list" ref="bar-list">
      <ul class="list-wrapper">
        <li v-for="bar in barList.data" @click="barDetail(bar.bar_id,$event)">
          <div class="mask"></div>
          <img v-lazy="bar.image" class="lazyload">
          <div class="info">
            <div class="left clearfix">
              <div class="name">{{bar.name}}</div>
              <div class="status">{{bar.avilable ? '营业中' : '休息'}} <span v-if="bar.avilable" class="time">{{bar.TIME}}</span> </div>
            </div>
            <div class="right clearfix">
              <div class="support-plan">
                <img src="/static/images/yellow_diamond.png" v-if="bar.support === 'ALL' || bar.support === 'CLASSIC'">
                <img src="/static/images/purple_diamond.png" v-if="bar.support === 'ALL' || bar.support === 'DISCOVERY'">
              </div>
              <div class="distance">{{bar.distance}}公里</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import BScroll from 'better-scroll'
  import Header from '@/components/Header/Header'
  export default {
    name:'index',
    data (){
      return {
        barList: {}
      }
    },
    async created(){
      let _self = this;
      try {
        let {data} = await _self.$http({
          method: 'post',
          url: _self.API + '/v1/bar/listBar',
          data: {
            ..._self.geolocation
          }
        });
        _self.barList = data;
        _self.$nextTick(() => {
          let scroll = new BScroll(_self.$refs['bar-list'], {
            click: true
          })
        });
      } catch (e) {

      }
    },
    methods:{
      barDetail(barId,event){
        if(!event._constructed){
          return
        }
        this.$router.push({path:'/bar/' + barId});
      }
    },
    computed:{
      ...mapGetters(['API','geolocation'])
    },
    components: {
      "v-header": Header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #index
    width 100%
    height 100%
    position relative
    .bar-list
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      box-sizing border-box
      padding-top 44px
      z-index 0
      color #fff
      overflow hidden
      .list-wrapper
        padding-top 10px
        padding-bottom 44px
        width 100%
        height auto
        li
          position relative
          width 96%
          overflow hidden
          margin 0 auto
          margin-bottom 10px
          padding-top 60%
          border-radius 5px
          .mask
            position absolute
            top 0
            left 0
            width 100%
            height 100%
            z-index 2
            background rgba(0,0,0,0.3)
          &>img
            position absolute
            top 0
            left 0
            right 0
            bottom 0
            margin auto
            height 100%
            z-index 1
          .info
            position absolute
            left 0
            bottom 0
            z-index 5
            box-sizing border-box
            padding 10px
            width 100%
            &>div
              float left
            .left
              width 75%
              .name
                font-weight 600
                font-size 18px
                line-height 22px
                margin-bottom 4px
              .status
                color #b5b5b5
                font-size 12px
                .time
                  margin-left 4px
            .right
              text-align right
              width 25%
              .support-plan
                font-weight 600
                height 20px
                font-size 20px
                line-height 20px
                margin-bottom 8px
                &>img
                  width 20px
                  height 20px
              .distance
                font-size 12px

</style>


