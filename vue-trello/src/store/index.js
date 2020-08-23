import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

// Vuex의 각 모듈을 조합하고 저장소를 내보내는 곳이다!!!
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {

  }
})

const {token} = localStorage;
store.commit('LOGIN', token);

export default store;