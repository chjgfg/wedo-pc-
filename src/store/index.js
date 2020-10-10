import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    form:{}
  },
  mutations: {
    form(state,form){
      this.state.form = form;
    }
  },
  actions: {
    form({commit},form){
      commit("form",form);
    }
  },
  modules: {
  }
})
