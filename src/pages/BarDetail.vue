<template>
  <div id="bar-detail">
    <v-header></v-header>
    <div class="detail" ref="detail">
      <div class="detail-wrapper">
        <div class="swiper-content">
          <div class="info">
            <div class="left clearfix">
              <div class="name">{{barDetail.bar_details[0].name}}</div>
              <div class="address">{{barDetail.bar_details[0].address}}</div>
              <div class="status">{{barDetail.bar_details[0].avilable ? '营业中' : '休息'}}</div>
            </div>
            <div class="right clearfix">
              <div class="distance">{{barDetail.bar_details[0].distance}}公里</div>
            </div>
          </div>
          <swiper :options="swiperOption" :not-next-tick="notNextTick" class="swiper">
            <!-- slides -->
            <swiper-slide v-for="(image,index) in swiperImages" :key="index">
              <div class="mask"></div>
              <img v-lazy="image" class="lazyload">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
          </swiper>
        </div>
        <div class="desc">
          {{barDetail.bar_details[0].description}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import Header from '@/components/Header/Header'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: 'app',
    async created (){
      let _self = this;
      try{
        let {data} = await _self.$http({
          method: 'post',
          url: _self.API + '/v1/bar/barDetails',
          data: {
            bar_id: _self.$route.params.id,
            ..._self.geolocation
          }
        });
        this.barDetail = data.data;
        this.swiperImages = this.barDetail.bar_details[0].bar_images;
      } catch (e){

      }

    },
    data(){
      return {
        barDetail:{},
        swiperImages:[],
        notNextTick: false,
        swiperOption: {
          // swiper optionss 所有的配置同swiper官方api配置
          grabCursor : true,
          setWrapperSize :true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          mousewheelControl : true,
          observeParents:true,
          // if you need use plugins in the swiper, you can config in here like this
          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
          debugger: true
        }
      }
    },
    methods: {

    },
    computed: {
      ...mapGetters(['API'])
    },
    components: {
      "v-header": Header,
      swiper,
      swiperSlide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #bar-detail
    position relative
    width 100%
    height 100%
    color #fff
    background #1b2227
    .detail-wrapper
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
      .swiper-content
        position relative
        width 100%
        box-sizing border-box
        padding-top 58%
        .info
          position absolute
          bottom 20px
          box-sizing border-box
          padding 0 10px
          z-index 6
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
            .address
              font-weight 500
              font-size 12px
              margin-bottom 8px
            .status
              color #e0e0e0
              font-size 10px
          .right
            text-align right
            width 25%
            .distance
              position absolute
              right 10px
              bottom 0
              font-size 12px
        .swiper
          position absolute
          top 0
          width 100%
          height 100%
          .swiper-wrapper
            width 100%
            height 100%
          .swiper-slide
            position relative
            width 100%
            height 100%
            .mask
              position absolute
              top 0
              left 0
              width 100%
              height 100%
              z-index 2
              background rgba(0,0,0,0.3)
            img
              width 100%
              height 100%
          .swiper-pagination-bullets
            bottom 4px
            .swiper-pagination-bullet
                background #fff!important
                opacity 0.6
                margin 0 4px!important
                width 6px
                height 6px
            .swiper-pagination-bullet-active
              opacity 1
      .desc{
        width 100%
        margin-top 24px
        box-sizing border-box
        padding 0 10px
        font-size 12px
        color #e0e0e0
        line-height 16px
      }
</style>
