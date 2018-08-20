import Vue from 'vue'
import vuex from 'vuex'

import actions from './actions'
import getters from './getters'
import state from './state'
import mutations from './mutations'

Vue.use(vuex)

export default new vuex.Store({
  actions,
  getters,
  state,
  mutations
})
