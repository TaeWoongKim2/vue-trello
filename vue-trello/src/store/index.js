import Vue from 'vue'
import Vuex from 'vuex'
import * as api from '../api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isAddBoard: false,
    boards: [],
    token: null,

  },
  getters: {
    // Component의 computed와 유사! isAuth라는 변수처럼 사용이 가능!
    isAuth (state) {
      return !!state.token;
    }
  },
  mutations: {
    LOGIN (state, token) {
      if(!token) return;
      state.token = token;
      localStorage.setItem('token', token);
      api.setAuthInHeader(token);
    },
    LOGOUT (state) {
      api.setAuthInHeader(null);
      delete localStorage.token;
      state.token = null;
    },
    SET_IS_ADD_BOARD (state, toggle) {
      state.isAddBoard = toggle;
    },
    SET_BOARDS (state, boards) {
      state.boards = boards;
    }
  },
  actions: {
    LOGIN ({commit}, {email, password}) {
      return api.authorizer.login(email, password)
        .then(({accessToken}) => {
          commit('LOGIN', accessToken);
        });
    },
    ADD_BOARD (_, {title}) {
      return api.board.create(title);
    },
    FETCH_BOARDS ({commit}) {
      return api.board.fetch().then(data => {
        commit('SET_BOARDS', data.list);
      });
    }
  },
  modules: {

  }
})

const {token} = localStorage;
store.commit('LOGIN', token);

export default store;