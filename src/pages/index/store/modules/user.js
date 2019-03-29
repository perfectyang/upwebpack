// state
const state = {
  chatInfo: [],
  userInfo: Object.create(null)
}
// actions

const actions = {
  storeUser ({ commit }, payload) {
    console.log('payload', payload)
    commit('storeUser', payload)
  }
}

// mutations
// 行为响应动作
const mutations = {
  storeUser (state, params) {
    console.log('params', params)
    state.userInfo.push(params)
  }
}

const getters = {
  computedUser (state) {
    return state
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
