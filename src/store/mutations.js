import * as types from './mutation-type'

const mutations = {
  // 增加
  add (state) {
    state.count += 1
  },
  // 减少
  reduce (state) {
    state.count -= 1
  },
  [types.SET_BASE_DATA] (state, info) {
    state.baseData = info
  }
}

export default mutations
