const mutations = {
  // 增加
  add (state) {
    state.count += 1
  },
  // 减少
  reduce (state) {
    state.count -= 1
  }
}

export default mutations
