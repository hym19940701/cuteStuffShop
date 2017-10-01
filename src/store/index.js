/**
 * Created by hasee on 2017/9/30.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutationtypes'

Vue.use(Vuex)
const state = {
  showFalls: true
}
const getter = {}
const actions = {}
const mutations = {
  [types.DISPLAY_CHANGE] (state) {
    state.showFalls = !state.showFalls
  }
}

export default new Vuex.Store({
  state,
  getter,
  actions,
  mutations
})
