import Vue from 'vue';
import Vuex from 'vuex';
import CreateLogger from 'vuex/dist/logger';

// 引入store子模块
import show from './modules/show'
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    show,
  }, 
  plugins: [CreateLogger()]
})

