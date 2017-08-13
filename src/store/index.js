import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  API:'/api/17HiProxy?api=',
  splash: true,
  geolocation: {
    "latitude": 31.227156770780475,
    "longitude": 121.37660782950132,
    "city": ""
  }
};

const mutations = {
  changeSplash(state, payload){
    state.splash = false;
  }
};

const actions = {
  getPosition({commit}){
    setTimeout(() => {
      commit('changeSplash', false);
    },1000);
  }
};

const getters = {
  API: (state) => state.API,
  splash: (state) => state.splash,
  geolocation: (state) => state.geolocation
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
