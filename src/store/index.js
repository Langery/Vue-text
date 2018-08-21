import Vue from 'vue'
import vuex from 'vuex'

// 支持异步操作
import actions from './actions'
// 派生状态
import getters from './getters'
// 存储状态
import state from './state'
// 提交状态修改
import mutations from './mutations'
// store 子模型
import modules from './modules'

Vue.use(vuex)

export default new vuex.Store({
  state,
  actions,
  getters,
  mutations,
  modules
})
