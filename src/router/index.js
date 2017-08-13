import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import BarDetail from '@/pages/BarDetail'
import 'swiper/dist/css/swiper.css'

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/bar/:id',
      name: 'BarDetail',
      component: BarDetail
    }
  ]
});


export default router;
